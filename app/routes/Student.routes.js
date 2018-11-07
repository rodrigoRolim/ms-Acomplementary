module.exports = function (application) {
  application.get('/student', function (req, res, next) {
    application.app.controllers.StudentController.list(req, res, next)
  })
  application.post('/save-student', function (req, res) {
      application.app.controllers.StudentController.save(req, res, next)
  })
}