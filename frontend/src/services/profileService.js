import api from '../utils/helper';
export const profileService = {
  get:      ()     => api.get('/profile/me'),
  update:   (data) => api.put('/profile/me', data),
  uploadAvatar: (form) => api.post('/profile/avatar', form),
};
