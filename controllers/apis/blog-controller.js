const blogServices = require('../../services/blog-services')

const blogController = {
  postArticle: async (req, res, next) => {
    blogServices.postArticle(req, (err, data) => {
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
  },
  getArticles: async (req, res, next) => {
    blogServices.getArticles(req, (err, data) => {
      if (err) {
        next(err)
      } else {
        res.status(200).json({
          status: 'sucess',
          message: '取得資料成功!',
          data
        })
      }
    })
  }
  // ,
  // getArticle: async (req, res, next) => {
  //   blogServices
  // }
}

module.exports = blogController
