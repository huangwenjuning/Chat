// 连接数据库操作
const DB_URL = 'mongodb://127.0.0.1:27017/websocket'
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect(DB_URL, {
  useNewUrlParser: true
});

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success.');
});

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail.');
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected.');
});

mongoose.Promise = global.Promise
module.exports = mongoose
