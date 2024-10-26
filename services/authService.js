import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api';

//Função de registro

export const register = async (nome, email, senha, telefone) => {
  try {
    const response = await api.post('/user/create', {nome, email, senha, telefone});
    return response.data;
  } catch (error) {
    console.error('Erro de registro:', error);
    throw error;
  }
};

// Função de login
export const login = async (email, senha) => {
  try {
    const response = await api.post('/user/login', { email, senha });
    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token);  // Armazena o token no AsyncStorage
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função de logout
export const logout = async () => {
  await AsyncStorage.removeItem('token');  // Remove o token do AsyncStorage
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const token = AsyncStorage.getItem('token');
  return !!token;  // Retorna true se o token existir
};
