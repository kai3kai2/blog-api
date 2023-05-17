const express = require('express')
const routes = require('./routes')

const expressHandlebars = require('express-handlebars')
// const bcrypt = require('bcryptjs')
const app = express()
const port = 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => console.info(`Simple blog page is listening on ${port}`))
