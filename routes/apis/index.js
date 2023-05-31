const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const admin = require('./modules/admin')
const blogController = require('../../controllers/apis/blog-controller')
const userController = require('../../controllers/apis/user-controller')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler, validateArticle } = require('../../middleware/error-handler')

router.use('/admin', authenticated, authenticatedAdmin, admin)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.post('/article', authenticated, validateArticle, blogController.postArticles)
router.get('/signup', userController.signUp)
router.use('/', apiErrorHandler)

module.exports = router
