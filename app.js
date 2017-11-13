const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const api = require('./routers/users')



const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use('/api', api) 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})