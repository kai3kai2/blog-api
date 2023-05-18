const express = require('express')
const router = express.Router()

const adminController = require('../../../controllers/pages/admin-controller')

router.get('/blog', adminController.getBlog)
router.use('/', (req, res) => res.redirect('/admin/blog'))

module.exports = router
