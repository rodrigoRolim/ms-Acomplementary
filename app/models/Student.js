const mongoose = require('mongoose')

const student = new mongoose.Schema(
  {
    name: String,        
    course: String,
    register: String,
    password: String,
    documents: []
  }
)
var Student =  mongoose.model('Student', student)
module.exports = function() {
  return Student
}
 
