'use strict'

const express = require('express')
const app = express()
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const dbConnection = require('./dbConnection')

mongoose.connect(dbConnection.URI, dbConnection.options)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('connect to database')
})

app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .into(app)


module.exports = app