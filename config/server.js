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
const env = require('./enviroments');

function intializeDb() {
  mongoose.Promise = global.Promise;
  return mongoose.connect(dbConnection.URI, dbConnection.options)
}

function buildApp() {
  return new Promise((resolve, reject) => {
    try {
      app.use(cors())
      app.use(express.static(path.join(__dirname, '/public')))
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(expressValidator())
      consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .then('config/dbConnection.js')
        .into(app)
      app.listen(env.port, () => {
          resolve(app)
      })
    } catch(error) {
      reject(error)
    }
    
  })
  
}
module.exports = function() {
  return intializeDb().then(() => {
      buildApp().then(() => this)
  })
}