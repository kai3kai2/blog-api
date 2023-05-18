const userServices = require('../../services/user-services')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: async (req, res, next) => {
    try {
      await userServices.signUp(req, (err, user) => {
        if (err) {
          next(err)
        } else {
          req.flash('success_messages', '成功註冊帳號!')
          res.redirect('/signin')
        }
      })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = userController
