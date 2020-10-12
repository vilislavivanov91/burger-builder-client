import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1441',
});

instance.interceptors.request.use((request) => {
  let token = localStorage.getItem('tokenID');
  if (token) {
    token = 'Bearer ' + token;
  }
  request.headers.Authorization = token;
  return request;
});

export default instance;
