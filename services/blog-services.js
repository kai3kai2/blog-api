const { Article } = require('../models')

const blogServices = {
  postArticle: async (req, cb) => {
    try {
      const { title, content } = req.body
      const newArticle = await Article.create({
        title,
        content
      })
      cb(null, newArticle)
    } catch (err) {
      cb(err)
    }
  }
}

module.exports = blogServices
