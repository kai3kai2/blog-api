const bcryptjs = require('bcryptjs')
const db = require('../models')
const { User } = db

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: async (req, res, next) => {
    try {
      const { name, email, password } = req.body
      if (name?.trim().length === 0 || email?.trim().length === 0 || password?.trim().length === 0) throw new Error('每個欄位都要填!')
      if (req.body.password !== req.body.confirmPassword) throw new Error('密碼與確認密碼不相符')
      if (name && name.length > 30) throw new Error('名字上限為30個字')
      const existingEmail = await User.findOne({ where: { email: req.body.email } })
      if (existingEmail) throw new Error('Email 已經註冊過了!')
      const hash = await bcryptjs.hash(password, 10)
      await User.create({
        name,
        email,
        password: hash
      })
      req.flash('success_messages', '成功註冊帳號!')
      res.redirect('/signin')
    } catch (err) {
      next(err)
    }
  }
}
module.exports = userController
