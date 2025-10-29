require('dotenv').config();
const mongoose = require('mongoose');
const studentModel = require('../models/student');

const studentSave = async(req,res)=>{
     const {college_id,
        college_name,
        student_name,
        student_rollno,
        student_brance,
        student_Father,
        student_Mother,
        parent_Mobile,
        student_email,
        student_Mobile,
        year_of_join}  = req.body;
        try{
            const rollnoExist = await studentModel.findOne({student_rollno});
            if(rollnoExist){
                return res.status(400).json({
                   Success:false,
                   message:"Roll no already exist"
                })
            }
            const newDetails = await studentModel({
                college_id,
                college_name,
                student_name,
                student_rollno,
                student_brance,
                student_Father,
                student_Mother,
                parent_Mobile,
                student_email,
                student_Mobile,
                year_of_join
            })
        const saved = await newDetails.save();
        return res.status(200).json({
            Success:true,
            message:"Successfully Saved"
        })

        }catch(error){
            console.log(error);
            return res.status(404).json({
                Success:false,
                message:"Error Occured"
            })
        }
}

module.exports ={studentSave};