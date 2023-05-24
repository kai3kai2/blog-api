const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const admin = require('./modules/admin')
const blogController = require('../../controllers/pages/blog-controller')
const userController = require('../../controllers/pages/user-controller')
const { authenticated } = require('../../middleware/auth')
const { generalErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)

router.get('/logout', userController.logout)

router.get('/blog', authenticated, blogController.getBlog)
router.use('/', (req, res) => res.redirect('/blog'))

router.use('/', generalErrorHandler)

module.exports = router
