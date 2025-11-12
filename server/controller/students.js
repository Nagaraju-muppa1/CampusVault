require('dotenv').config();
const mongoose = require('mongoose');
const studentModel = require('../models/student');

const studentSave = async(req,res)=>{
     const {college_id,college_name,student_name,student_rollno,student_branch,student_year, student_section,student_Father, student_Mother,parent_Mobile,student_email,student_Mobile,year_of_join}  = req.body;
        console.log(student_name+""+student_rollno);
        try{
            const rollnoExist = await studentModel.findOne({student_rollno});
            //console.log(rollnoExist);
            if(rollnoExist){
                return res.status(200).json({
                   Success:false,
                   message:"Roll no already exist"
                })
            }
            const newDetails = await studentModel({
                college_id,
                college_name,
                student_name,
                student_rollno,
                student_branch,
                student_year,
                student_section,
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

const deleteStudent = async(req,res)=>{
    const Rollno = req.params.studentRollno;
    try{
        console.log(Rollno);
        const deletedO = await studentModel.findOneAndDelete({ student_rollno:Rollno});
        if(!deletedO){
            console.log(deletedO);
            return res.status(201).json({
                success:false,
                message:"Roll no is not exist"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Successfully deleted"
        })
    }catch(error){
        console.log(error);
        return res.status(404).json({
            success:false,
            message:"Error"
        })
    }
}

const displayStudents = async(req,res)=>{
    try{
        const data = await studentModel.find();
        const newData =data.map((d)=>({
             student_name:d.student_name,
             student_rollno:d.student_rollno,
             student_branch:d.student_branch
        }))
        //console.log(newData)
        return res.status(200).json({
            success:true,
            message:newData
        })
       
    }catch(error){
        return res.status(404).json({
            success:false,
            message:"Error"
        })
    }
}

const findStudent = async(req,res)=>{
    try{
        const students=await studentModel.findOne({student_rollno:req.params.student_rollno})
        console.log(students);
        return res.status(200).json({
            success:true,
            message:students
        })
    }catch(error){
        console.log(error);
        return res.status(404).json({
            success:false,
            message:"Error"
        })
    }
}
module.exports ={studentSave,deleteStudent,displayStudents,findStudent};