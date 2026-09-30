require('dotenv').config();
module.exports = {
  PORT:        process.env.PORT        || 5000,
  MONGO_URI:   process.env.MONGO_URI,
  JWT_SECRET:  process.env.JWT_SECRET,
  CLIENT_URL:  process.env.CLIENT_URL  || 'http://localhost:5173',
  AI_ENGINE:   process.env.AI_ENGINE   || 'http://localhost:8000',
  REDIS_URL:   process.env.REDIS_URL,
};
