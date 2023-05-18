const bcrypt = require('bcryptjs')
const { User } = require('../models')

const userServices = {
  signUp: async (req, cb) => {
    try {
      const { name, email, password, confirmPassword } = req.body
      if (name?.trim().length === 0 || email?.trim().length === 0 || password?.trim().length === 0) throw new Error('每個欄位都要填!')
      if (password !== confirmPassword) throw new Error('密碼與確認密碼不相符')
      if (name && name.length > 30) throw new Error('名字上限為30個字')

      const existingEmail = await User.findOne({ where: { email } })
      if (existingEmail) throw new Error('Email 已經註冊過了!')
      const hash = await bcrypt.hash(password, 10)
      const newUser = await User.create({
        name,
        email,
        password: hash
      })
      const user = newUser.toJSON()

      delete newUser.password
      cb(null, user)
    } catch (err) {
      cb(err)
    }
  }
}
module.exports = userServices
