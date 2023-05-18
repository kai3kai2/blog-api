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
  }
}

module.exports = userController
