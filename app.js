const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Twitter'))

app.listen(port, () => console.log(`Smiple Twitter is listening on port ${port}`))