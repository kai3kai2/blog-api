const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/blog', blogController.getBlog)
router.use('/', (req, res) => res.render('/restaurants'))

module.exports = router
