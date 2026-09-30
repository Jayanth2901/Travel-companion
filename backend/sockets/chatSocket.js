module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_room',    ({ roomId }) => socket.join(roomId));
    socket.on('send_message', ({ roomId, message }) => io.to(roomId).emit('new_message', message));
    socket.on('typing',       ({ roomId, user })    => socket.to(roomId).emit('user_typing', user));
    socket.on('disconnect',   ()                    => console.log('socket disconnected'));
  });
};
