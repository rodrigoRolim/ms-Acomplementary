var Student = require('../models/Students.model')

var StudentController = {}

StudentController.list = function (req, res, next) {
  Student.model.find().then(users => {
    res.json(users)
    return next()
  })
}
StudentController.save = function (req, res, next) {
  let student = new app.models.Student(req.body)
  Student.model.save({student}).then(msg => {
    res.json({sucess: msg})
    return next(false)
  }).catch(err => {
    res.json({error: err})
    return next()
  })
}
StudentController.edit = function (req, res, app) {
  Student.model.findOne({_id : req.params.id}).exec(function (err, student) {
    if (err) {
      console.log("Error:", err)
    } else {
        console.log("do response")
    }
  }) 
}
StudentController.update = function (req, res, app) {
  Student.findByIdAndUpdate(req.params.id, { $set: {}}, { new: true}, function (err, student) {
    if (err) {
      console.log(err)
      // set view here
    } else {
      // response
    }
  })
}
StudentController.delete = function (req, res) {
  Student.remove({_id: req.params.id}, function () {
    if (err) {
      // todo
    } else {
      // todo
    }
  })
}
module.exports = StudentController;