// api/userApi.js
import axios from 'axios';

//https://apiabmusers.cyclic.cloud/
//https://vicionando-series-2-api.onrender.com/ 
//http://localhost:3001

const API_BASE_URL = 'http://localhost:3001'; // Reemplaza con la URL de tu API

export const CreateUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL + `/api/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const AuthenticateUser = async (userData) => {
    try {
      const response = await axios.post(API_BASE_URL + `/api/users/authenticate`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// Agrega más funciones para actualizar, eliminar, obtener usuarios, etc.
