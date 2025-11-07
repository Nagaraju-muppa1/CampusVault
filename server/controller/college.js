require('dotenv').config();
const mongoose = require('mongoose');
const campusModel = require('../models/campus')

const findCollege = async(req,res)=>{
    try{
        const c_id = req.params.college_id;
        //console.log(req.params.college_id);
        const exist =await campusModel.findOne({college_id:c_id});
        //console.log(exist);
        if(!exist){
            return res.status(201).json({
                success:false,
                message:"College id is not exist"
            })
        }
        const c_name =exist.college_name;
        return res.status(201).json({
            success:true,
            value:c_name,
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