const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog-controller')

router.get('/', (req, res) => {
  res.send('Hello my-blog')
})

router.get('/blog', blogController.getBlog)
router.use('/', (req, res) => res.render('/restaurants'))

module.exports = router
