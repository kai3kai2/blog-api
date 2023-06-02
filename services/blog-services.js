const { Article } = require('../models')
const { getUser } = require('../helpers/auth-helpers')

const blogServices = {
  postArticle: async (req, cb) => {
    try {
      const { title, content } = req.body
      const newArticle = await Article.create({
        title,
        content,
        userId: getUser(req).id ? getUser(req).id : req.user.id
      })
      cb(null, newArticle)
    } catch (err) {
      cb(err)
    }
  },
  getArticles: async (req, cb) => {
    try {
      const articleDatas = await Article.findAll({ raw: true, order: [['createdAt', 'DESC']] })
      cb(null, articleDatas)
    } catch (err) {
      cb(err)
    }
  },
  getArticle: async (req, cb) => {
    try {
      const articleData = await Article.findByPk(req.params.id, {
        raw: true
      })
      if (!articleData) throw new Error('此文章不存在!')
      cb(null, articleData)
    } catch (err) {
      cb(err)
    }
  }
}

module.exports = blogServices
