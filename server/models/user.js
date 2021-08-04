// 用户数据模型
const DB = require('../../utils/connectDB');
const Schema = DB.Schema;
const userSchema = new Schema({
  userId: { type: String, unique: true },
  nickname: String,
  password: String,
  avatar: { type: String, default: 'default-avatar' },
  description: { type: String, default: '用户很懒， 什么都没有留下~'},
  bgColor: { type: String, default: '#ccc' },
  status: { type: Number, default: 0 },
  friendIds: { type: Array, default: [] },
  roomIds: { type: Array, default: [] },
  createTime: { type: Date, default: Date.now() },
  lastLoginTime: { type: Date, default: Date.now() },
});

const user = DB.model('user', userSchema);

module.exports = user;