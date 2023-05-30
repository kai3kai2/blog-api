const express = require('express')
const router = express.Router()
const passport = require('../../../config/passport')

const userController = require('../../../controllers/apis/user-controller')
const adminController = require('../../../controllers/pages/admin-controller')

router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.get('/blog', adminController.getBlog)
router.use('/', (req, res) => res.redirect('/admin/blog'))

module.exports = router
