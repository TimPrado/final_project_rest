var express = require('express');

var TeacherModel = require('../model/teacherModel');
var teacherRestController = require('../controller/teacherRestController')(TeacherModel); // NOTE ilker injecting above imported TeacherModel into rest controller via its constructor function

var teacherRestRouter = express.Router();

teacherRestRouter.route('') // "/api/v1/teachers" - the root url is defined by user of this router, main_restServer as "/api/v1/teachers"
    .get(teacherRestController.find)
    .post(teacherRestController.save)
    .delete(teacherRestController.findByIdInBodyThenRemove);

teacherRestRouter.route('/:id') // "/api/v1/teachers/:id"
    .get(teacherRestController.findById)
    .put(teacherRestController.findByIdUpdateFullyThenSave)
    .patch(teacherRestController.findByIdUpdatePartiallyThenSave)
    .delete(teacherRestController.findByIdThenRemove);

teacherRestRouter.route('/echo/:msg') // "/api/v1/teachers/echo/:msg"
    .get(teacherRestController.echoMsg)

module.exports = teacherRestRouter;