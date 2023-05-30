const userServices = require('../../services/user-services')

const userController = {
  signUp: async (req, res, next) => {
    try {
      await userServices.signUp(req, (err, user) => {
        if (err) {
          next(err)
        } else {
          res.status(201).json({
            status: 'success',
            message: '成功註冊帳號!'
          })
        }
      })
    } catch (err) {
      next(err)
    }
  },
  signIn: async (req, res, next) => {
    try {
      await userServices.signIn(req, (err, data) => {
        if (err) {
          next(err)
        } else {
          res.status(200).json({
            status: 'success',
            message: '登入成功!',
            data
          })
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController
