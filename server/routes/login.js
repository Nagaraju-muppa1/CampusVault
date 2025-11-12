const express = require('express');
const router = express.Router();
const {signup,signin}= require('../controller/auth')
const {studentSave,deleteStudent,displayStudents}=require('../controller/students');
const {findCollege} = require('../controller/college')
router.post('/student',studentSave);
router.post('/auth/signup',signup)
router.post('/auth/signin',signin)
router.get('/collegeName/:college_id',findCollege);
router.get('/student/data',displayStudents);
router.delete('/student/delete/:studentRollno',deleteStudent)
module.exports = router;