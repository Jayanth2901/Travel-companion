import api from '../utils/helper';
export const expenseService = {
  getAll:   (tripId) => api.get(`/expenses?tripId=${tripId}`),
  add:      (data)   => api.post('/expenses', data),
  update:   (id, data) => api.put(`/expenses/${id}`, data),
  delete:   (id)     => api.delete(`/expenses/${id}`),
  settle:   (id)     => api.post(`/expenses/${id}/settle`),
};
