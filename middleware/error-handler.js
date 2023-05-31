module.exports = {
  generalErrorHandler (err, req, res, next) {
    if (err instanceof Error) {
      req.flash('error_messages', `${err.name}: ${err.message}`)
    } else {
      req.flash('error_messages', `${err}`)
    }
    res.redirect('back')
    next(err)
  },
  apiErrorHandler (err, req, res, next) {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'
    res.status(status).json({
      status: 'error',
      message
    })
    next(err)
  },
  validateArticle (req, res, next) {
    const { title, content } = req.body
    if (!title || title?.trim().length === 0) {
      const error = new Error('文章需要標題!')
      error.status = 400
      throw error
    }
    if (!content || content?.trim().length === 0) {
      const error = new Error('文章沒有內容!')
      error.status = 400
      throw error
    }
    next()
  }
}
