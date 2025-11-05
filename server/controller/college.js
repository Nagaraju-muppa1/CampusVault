require('dotenv').config();
const mongoose = require('mongoose');
const campusModel = require('../models/campus')

const findCollege = async(req,res)=>{
    try{
        const c_id = req.body;
        const exist =await campusModel.findOne({c_id});
        if(!exist){
            return res.status(201).json({
                success:false,
                message:"College id is not exist"
            })
        }
        return res.status(201).json({
            success:true,
            value:c_id.college_name,
            message:"College name Sended"
        })
    }catch(error){
        console.log(error);
        return res.status(201).json({
            success:false,
            message:"Error"
        })
    }
}
module.exports ={findCollege};