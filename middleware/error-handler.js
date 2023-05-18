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
  }
}
