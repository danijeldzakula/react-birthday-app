import axios from 'axios';

const axiosPublicClient = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  timeout: 10000,
});

export { axiosPublicClient };
