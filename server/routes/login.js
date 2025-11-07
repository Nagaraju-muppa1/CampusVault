const express = require('express');
const router = express.Router();
const {signup,signin}= require('../controller/auth')
const {studentSave}=require('../controller/students');
const {findCollege} = require('../controller/college')
router.post('/student',studentSave);
router.post('/auth/signup',signup)
router.post('/auth/signin',signin)
router.get('/collegeName/:college_id',findCollege);
module.exports = router;