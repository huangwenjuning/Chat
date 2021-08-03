const express = require('express');
const app = express();
let server = app.listen(3000, (err) => {
  if (err) throw err 
  console.log('listening on port 3000')
});

// socket 初始化
const io = require('socket.io')(server, { cors: true });

io.on('connection', function(client) {
  console.log('client connected...', client.id);
  client.on('register', (name, cb) => {
    console.log(name, 'name');
  })
})
