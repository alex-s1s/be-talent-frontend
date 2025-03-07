import axios from 'axios';

// Cria uma instância do Axios com configurações padrão
const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da API (json-server)
  timeout: 5000, // Tempo limite para requisições (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;