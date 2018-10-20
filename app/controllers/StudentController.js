var mongoose = require('mongoose')
var Student = mongoose.model('Student')

var StudentController = {}

StudentController.list = function (req, res) {
    Student.find({}).exec(function (err, students){
        if (err) {
            console.log("Error:", err)
        } else {
            res.send(students)
        }
    })
}