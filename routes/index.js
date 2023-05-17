const express = require('express')
const router = express.Router()

const admin = require('./modules/admin')
const blogController = require('../controllers/blog-controller')
const userController = require('../controllers/user-controller')
const { generalErrorHandler } = require('../middleware/error-handler')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/blog', blogController.getBlog)
router.get('/', (req, res) => res.render('blog'))
router.use('/', generalErrorHandler)

module.exports = router
