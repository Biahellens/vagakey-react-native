import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.40.1.32:3000',  // Altere para o URL do seu backend
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Interceptor para adicionar o token JWT nas requisições
api.interceptors.request.use(config => {
    const token = AsyncStorage.getItem('token');  // Busca o token armazenado
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  export default api;