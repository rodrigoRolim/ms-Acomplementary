const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
  {
    name: String,        
    course: String,
    register: { type: String, unique: true },
    password: String,
    documents: []
  }
)
 
module.exports = {
  model: mongoose.model('Student', studentSchema)
}

 
