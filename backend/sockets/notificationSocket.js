module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_notifications', ({ userId }) => socket.join(`notif_${userId}`));
  });
};

exports.sendNotification = (io, userId, data) => io.to(`notif_${userId}`).emit('notification', data);
