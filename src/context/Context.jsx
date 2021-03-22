import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getData } from '../utils/api';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const history = useHistory();
  const [cards, setCards] = useState([]);
  const [positionsFilter, setPositionsFilter] = useState({
    description: '',
    location: 'amsterdam',
    full_time: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const getFilter = (positionsFilter) => {
    const params = new URLSearchParams({ ...positionsFilter });
    params.forEach((v, k) => {
      if (v === '') {
        params.delete(k);
      }
    });

    return params.toString();
  };

  const onClickPosition = useCallback(
    (positionId) => {
      console.log(history);
      history.push(`/details/${positionId}`);
    },
    [history]
  );

  const getCards = useCallback(
    (positions) => {
      const cards = positions.map((position) => {
        return {
          id: position.id,
          imgSrc: position.company_logo,
          title: position.company,
          description: position.title,
          specialMarker: position.type === 'Full Time' ? position.type : '',
          city: position.location,
          date: getFormatedDate(position.created_at),
          onClick: () => {
            onClickPosition(position.id);
          },
        };
      });

      return cards;
    },
    [onClickPosition]
  );
  const startData = useCallback(async () => {
    try {
      setIsLoading(true);
      const filter = getFilter(positionsFilter);
      const positions = await getData(filter);
      const cards = getCards(positions.data);
      setIsLoading(false);
      setCards(cards);
    } catch (error) {}
  }, [getCards, positionsFilter]);

  const getFormatedDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    return formattedDate;
  };

  const onFullTimeFilterChange = (value) => {
    setPositionsFilter({
      ...positionsFilter,
      full_time: value ? 'true' : 'false',
    });
  };
  const onDescriptionFilterChange = (value) => {
    setPositionsFilter({
      ...positionsFilter,
      description: value,
    });
  };
  //input Radio
  const onLocationFilterChange = (value) => {
    setPositionsFilter({
      ...positionsFilter,
      location: value,
    });
  };

  const onFilterByPlace = (value) => {
    setPositionsFilter({
      ...positionsFilter,
      location: value,
    });
  };

  useEffect(() => {
    startData();
  }, [startData, positionsFilter]);

  const value = {
    cards,
    positionsFilter,
    isLoading,
    onFullTimeFilterChange,
    onDescriptionFilterChange,
    onLocationFilterChange,
    onFilterByPlace,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppConsumer = AppContext.Consumer;
