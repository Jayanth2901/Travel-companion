import api from '../utils/helper';
export const aiService = {
  getItinerary:  (data) => api.post('/ai/itinerary', data),
  getMatch:      (data) => api.post('/ai/match', data),
  chatbot:       (msg)  => api.post('/ai/chatbot', { message: msg }),
  getSafety:     (dest) => api.get(`/ai/safety?destination=${dest}`),
  getPacking:    (data) => api.post('/ai/packing', data),
  getSentiment:  (text) => api.post('/ai/sentiment', { text }),
  getDiscovery:  (data) => api.post('/ai/discovery', data),
};
