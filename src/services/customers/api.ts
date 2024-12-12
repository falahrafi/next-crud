import axios from 'axios';

const API_BASE_URL = 'https://retoolapi.dev/9jSbsD/customers';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCustomers = async () => {
  const response = await api.get('/');
  return response.data;
};

export const fetchCustomerById = async (id: number) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createCustomer = async (customer: Record<string, any>) => {
  const response = await api.post('/', customer);
  return response.data;
};

export const updateCustomer = async (id: number, customer: Record<string, any>) => {
  const response = await api.put(`/${id}`, customer);
  return response.data;
};

export const deleteCustomer = async (id: number) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
