import api from '../utils/helper';
export const notificationService = {
  getAll:  () => api.get('/notifications'),
  markRead:(id) => api.put(`/notifications/${id}/read`),
  markAllRead: () => api.put('/notifications/read-all'),
};
