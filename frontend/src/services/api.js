import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quick-api-mu.vercel.app/'
});

export default api;