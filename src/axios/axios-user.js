import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    alert(error.response.data.errors[0].msg);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
