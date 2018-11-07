var Student = require('../models/Students.model')

var StudentController = {}

StudentController.list = function (req, res, next) {
  Student.model.find().then(students => {
    res.json(students)
    return next()
  })
}
StudentController.save = function (req, res, next) {
  let student = new app.models.Student(req.body)
  Student.model.save({student}).then(msg => {
    res.json({sucess: msg})
    return next()
  }).catch(err => {
    res.json({error: err})
    return next()
  })
}
StudentController.edit = function (req, res, next) {
  Student.model.findOne({_id : req.params.id}).then((student) => {
    res.json(student)
    return next()
  }).catch((err) => {
    res.json({error: err})
    return next()
  }) 
}
StudentController.update = function (req, res, app) {
  Student.findByIdAndUpdate(req.params.id, { $set: {}}, { new: true}).then((student) => {
    res.json(student)
    return next()
  }).catch((err) => {
    res.json({error: err})
    return next()
  })
}
StudentController.delete = function (req, res) {
  Student.remove({_id: req.params.id}).then((student) => {
    res.json(student)
    return next()
  }).catch((err) => {
    res.json({error: err})
  })
}
module.exports = StudentController;