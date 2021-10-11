import axios from 'axios';

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_MARVEL_API_URL });

api.interceptors.request.use(config => {
  const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;

  config.params = {
    apikey,
    ...config.params,
  };
  return config;
});

// api.interceptors.request.use(config => {
//   const ts = new Date().getTime();
//   const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;
//   console.log(ts);
//   console.log(apikey);
//   const message = ts + `${process.env.MARVEL_PRIVATE_KEY}` + apikey;
//   console.log(message);
//   const hash = CryptoJs.MD5(message);
//   console.log(hash);

//   config.params = {
//     ts,
//     apikey,
//     hash,
//     ...config.params,
//   };
//   return config;
// });

