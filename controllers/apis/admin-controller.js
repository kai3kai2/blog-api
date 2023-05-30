const userServices = require('../../services/user-services')

const adminController = {
  signIn: async (req, res, next) => {
    try {
      await userServices.signIn(req, (err, user) => {
        if (err) {
          next(err)
        } else {
          res.status(200).json({
            status: 'success',
            message: '登入成功!'
          })
        }
      })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = adminController
