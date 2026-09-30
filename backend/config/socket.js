const { Server } = require('socket.io');

let io;
exports.initSocket = (server) => {
  io = new Server(server, { cors: { origin: process.env.CLIENT_URL, methods: ['GET','POST'] } });
  return io;
};
exports.getIO = () => { if (!io) throw new Error('Socket not initialised'); return io; };
