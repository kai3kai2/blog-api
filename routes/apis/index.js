const express = require('express')
const router = express.Router()

const admin = require('./modules/admin')
const blogController = require('../../controllers/apis/blog-controller')
const userController = require('../../controllers/apis/user-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)
router.get('/block', blogController.getBlog)
router.get('/signup', userController.signUp)
router.use('/', apiErrorHandler)

module.exports = router
