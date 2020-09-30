import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1441',
});

export default instance;
