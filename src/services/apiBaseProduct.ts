import axios from 'axios';

export const axiosBase = () => {
  const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
  });
  return instance;
};
