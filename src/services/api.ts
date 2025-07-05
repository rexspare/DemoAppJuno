import axios from 'axios';

const API_BASE = 'https://fakestoreapi.in/api/';

export const fetchItemsAPI = () => {
  return axios.get(`${API_BASE}/products`);
};
