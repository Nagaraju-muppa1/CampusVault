require('dotenv').config();
const mongoose = require('mongoose');
const campusModel = require('../models/campus')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async(req,res)=>{
    const {college_id,college_name,password} = req.body;
    console.log(college_id+" "+college_name+" "+password)
    try{
       const campus = await campusModel.findOne({college_id});
       if(campus){
         return res.status(201).json({
            success : false,
            message : "College ID is already exist please enter new Id."
         })
       }
       const hashpassword = await bcrypt.hash(password,10);
       const newCampus = new campusModel({
         college_id,
         college_name,
         password:hashpassword
       })
       const saved = await newCampus.save();
       return res.status(200).json({
        success:true,
        message:"Successfully created"

       })
    }catch(error){
          console.log(error);
          return res.status(404).json({
             message:"Error !!"
          })
    }
}

const signin = async (req,res)=>{
     const {college_id,college_name,password}= req.body;
     try{
        const c_id = await campusModel.findOne({college_id});
        const c_name = await campusModel.findOne({college_name});
        if(!c_id && !c_name){
            return res.status(400).json({
                success: false,
                message:"college_id Or college_name is invalid."
            })
        }
        const isMatch = await bcrypt.compare(password,c_id.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message:"password is Incorrect."
            })
        }
        return res.status(200).json({
            success:true,
            message:"Successfully Login"
        })
     }catch(error){
        console.log(error);
        return res.status(404).json({
            success:false,
            message:"Login unsuccessfull"
        })
     }
}

module.exports = {signup,signin};