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
router.get('/signup', userController.signUp)
router.get('/articles', authenticated, blogController.getArticles)
router.get('/article/:id', authenticated, blogController.getArticle)
router.post('/article', authenticated, validateArticle, blogController.postArticle)
router.use('/', apiErrorHandler)

module.exports = router
