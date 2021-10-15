import axios from 'axios';

// Used in client side requests (uses Marvel public key only)
// For client-side requests, we use ts,apikey and hash.
export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_MARVEL_API_URL });

api.interceptors.request.use(config => {
  const apikey = process.env.NEXT_PUBLIC_MARVEL_KEY;

  config.params = {
    apikey,
    ...config.params,
  };
  return config;
});
