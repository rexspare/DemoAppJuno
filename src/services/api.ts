import axios from 'axios';

const API_BASE = 'https://api.escuelajs.co/api/v1';

export const fetchItemsAPI = () => {
  return axios.get(`${API_BASE}/products`);
};
