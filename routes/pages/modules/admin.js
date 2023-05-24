const express = require('express')
const router = express.Router()
const { authenticatedAdmin } = require('../../../middleware/auth')
const adminController = require('../../../controllers/pages/admin-controller')

router.get('/blog', authenticatedAdmin, adminController.getBlog)
router.use('/', (req, res) => res.redirect('/admin/blog'))

module.exports = router
