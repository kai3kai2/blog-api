const { Article } = require('../../models')

const adminController = {
  getBlog: (req, res) => {
    return res.render('admin/blog')
  },
  getArticles: (req, res, next) => {
    Article.findAll({ raw: true })
      .then(articles => res.render('admin/article', { articles }))
      .catch(err => next(err))
  }
}

module.exports = adminController
