import api from '../utils/helper';
export const reviewService = {
  getForUser: (userId) => api.get(`/reviews/user/${userId}`),
  getForTrip: (tripId) => api.get(`/reviews/trip/${tripId}`),
  create:     (data)   => api.post('/reviews', data),
  delete:     (id)     => api.delete(`/reviews/${id}`),
};
