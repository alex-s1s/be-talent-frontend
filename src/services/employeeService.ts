import { Employee } from '../@types/Employee';
import api from './api';

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await api.get('/employees');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    throw error;
  }
};