import api from '../utils/helper';
export const chatService = {
  getRooms:    ()        => api.get('/chat/rooms'),
  getMessages: (roomId)  => api.get(`/chat/rooms/${roomId}/messages`),
  send:        (roomId, text) => api.post(`/chat/rooms/${roomId}/messages`, { text }),
  createRoom:  (data)    => api.post('/chat/rooms', data),
};
