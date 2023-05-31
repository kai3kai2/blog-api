const blogServices = require('../../services/blog-services')

const blogController = {
  postArticle: async (req, res, next) => {
    blogServices.postArticles(req, (err, data) => {
      if (err) {
        next(err)
      } else {
        res.status(201).json({
          status: 'success',
          message: '創建文章成功!',
          data
        })
      }
    })
  }
}

module.exports = blogController
