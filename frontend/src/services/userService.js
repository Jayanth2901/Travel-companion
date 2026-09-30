import api from '../utils/helper';
export const userService = {
  getAll:    ()      => api.get('/users'),
  getById:   (id)    => api.get(`/users/${id}`),
  update:    (data)  => api.put('/users/me', data),
  delete:    ()      => api.delete('/users/me'),
  nearby:    (coords)=> api.post('/users/nearby', coords),
};
