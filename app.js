const express = require('express')
const { pages, apis } = require('./routes')
const expressHandlebars = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
// const { session } = require('passport')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  next()
})
app.use('/api', apis)
app.use(pages)

app.listen(port, () => console.info(`Simple blog page is listening on ${port}`))
