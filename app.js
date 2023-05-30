const express = require('express')
const { pages, apis } = require('./routes')
const expressHandlebars = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const passport = require('./config/passport')
const { getUser } = require('./helpers/auth-helpers')
const handlebarsHelpers = require('./helpers/handlebars-helpers')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs', helpers: handlebarsHelpers })) // 將 handlebars-helpers 註冊進express-handlebar
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(flash())
app.use(methodOverride('_method'))
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = getUser(req)
  next()
})
app.use('/api', apis)
app.use(pages)

app.listen(port, () => console.info(`Simple blog page is listening on ${port}`))
