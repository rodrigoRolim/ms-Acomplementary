const express = require('express')
const app = express()
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

app.set('views', './app/views')
app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extend: true }))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .into(app)

module.exports = app