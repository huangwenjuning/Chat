const express = require('express');
var app = express();
let server = require('http').createServer(app)

var path = require('path');
const options = {
  setHeaders(res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}
// const middleWare = require('./middleware')
// const user = require('./routes/user');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), options));

// app.use('/chat/user', user);

// socket 初始化
const io = require('socket.io')(server, { cors: true });

io.on('connection', function(client) {
  console.log('client connected...', client.id);
  client.on('register', (name, cb) => {
    console.log(name, 'name');
  })
})

server.listen(3000, (err) => {
  if (err) throw err 
  console.log('listening on port 3000')
});

// module.exports = app;