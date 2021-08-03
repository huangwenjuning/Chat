const io = require('socket.io-client');

export const socketIo = () => {
  const socket = io.connect('http://localhost:3000');

  const register = (name, cb) => {
    console.log('zhixinglema')
    socket.emit('register', name, cb);
  }

  const registerHandler = (onMessageReceived) => {
    socket.on('message', onMessageReceived);
  }

  return {
    register,
    registerHandler,
  }
}