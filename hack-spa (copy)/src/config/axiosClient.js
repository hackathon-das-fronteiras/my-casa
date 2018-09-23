import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
});

// Adiciona um interceptor com o header de autorização
axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

export default axiosClient;
