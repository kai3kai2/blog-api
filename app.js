const express = require('express')
const expressHandlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const app = express()
const port = 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.get('/', (req, res) => res.send('Twitter'))

app.listen(port, () => console.log(`Smiple Twitter is listening on port ${port}`))