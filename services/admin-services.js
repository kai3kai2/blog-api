const jwt = require('jsonwebtoken')
// const { User } = require('../models')
const helpers = require('../helpers/auth-helpers')

const adminServices = {
  signIn: async (req, cb) => {
    try {
      const userData = helpers.getUser(req).toJSON()
      delete userData.password
      delete userData.email
      delete userData.role
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1d' })
      cb(null, { token, user: userData })
    } catch (err) {
      cb(err)
    }
  }
}

module.exports = adminServices
