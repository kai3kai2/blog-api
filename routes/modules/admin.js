const express = require('express')
const router = express.Router()

const adminController = require('../../controllers/adminController')

router.get('/blog', adminController.getBlog)
router.use('/', (req, res) => res.redirect('/admin/blog'))

module.exports = router
