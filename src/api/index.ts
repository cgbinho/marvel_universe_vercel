import axios from 'axios';

import md5 from 'crypto-js/md5';

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_APP_URL });

api.interceptors.request.use(config => {
  const ts = Date.now();
  const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;
  const message = `${ts}${process.env.MARVEL_PRIVATE_KEY}${apikey}`
  const hash = md5(message);

  config.params = {
    ts,
    apikey,
    hash,
    ...config.params,
  };
  return config;
});

