const USER = require('./../models/user');
const md5 = require('./../utils/md5').md5;

// 登录
const login = (req, res) => {
  let { nickname, password, color } = req.body;
  USER.findOne({ "nickname": nickname}).then(async doc => {
    if (doc === null) {
      // 账号不存在，创建账号
      const doc = await USER.create({
        nickname,
        password: md5(password),
        bgColor: color,
      });
      if (doc['_id']) {
        return res.json({
          status: 200,
          data: '',
          msg: '注册成功'
        })
      }
      return res.json({
        status: 1003,
        data: '',
        msg: '注册失败，请重新尝试'
      })
    }

    if (doc.password === md5(password)) {
      return res.json({
        status: 200,
        data: '',
        msg: '登录成功'
      })
    }

    return res.json({
      status: 1002,
      data: '',
      msg: '用户已被注册，请换个用户名重新创建',
    })
  })
}

module.exports = { login }