import Axios, { AxiosError } from 'axios';

import { API_URL } from 'configs';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    const message = error.response?.data || error.message;
    console.log(error);
    error.response;

    return Promise.reject(message);
  }
);
