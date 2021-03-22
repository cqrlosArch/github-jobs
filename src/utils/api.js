import axios from 'axios';

export const getData = async (position) => {
  const proxy_url = 'https://cors.bridged.cc/';
  const target_url = 'https://jobs.github.com/positions.json?';

  try {
    const res = await axios(`${proxy_url}${target_url}${position}`, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
      },
    });
    return res;
  } catch (err) {
    return console.log('NOT FOUND');
  }
};

export const getDetails = async (id) => {
  const proxy_url = 'https://cors.bridged.cc/';
  const target_url = 'https://jobs.github.com/positions/';

  try {
    const res = await axios(`${proxy_url}${target_url}${id}.json`, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
      },
    });

    return res.data;
  } catch (err) {
    return console.log('NOT FOUND');
  }
};
