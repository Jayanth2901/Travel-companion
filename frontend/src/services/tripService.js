import api from '../utils/helper';
export const tripService = {
  create:   (data) => api.post('/trips', data),
  getAll:   ()     => api.get('/trips'),
  getById:  (id)   => api.get(`/trips/${id}`),
  update:   (id, data) => api.put(`/trips/${id}`, data),
  delete:   (id)   => api.delete(`/trips/${id}`),
  join:     (id)   => api.post(`/trips/${id}/join`),
  leave:    (id)   => api.post(`/trips/${id}/leave`),
};
