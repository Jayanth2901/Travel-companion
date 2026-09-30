require('dotenv').config();
const http      = require('http');
const app       = require('./app');
const connectDB = require('./config/database');
const { initSocket } = require('./config/socket');
const chatSocket         = require('./sockets/chatSocket');
const notificationSocket = require('./sockets/notificationSocket');

const PORT   = process.env.PORT || 5000;
const server = http.createServer(app);
const io     = initSocket(server);

chatSocket(io);
notificationSocket(io);

connectDB().then(() =>
  server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
);
