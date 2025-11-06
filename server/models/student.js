const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    college_id:{
        type:String
    },
    college_name:{
        type:String
    },
    student_name:{
        type:String,
    },
    student_rollno:{
        type:String,
    },
    student_branch:{
        type:String,
    },
    student_year:{
        type:String,
    },
    student_section:{
        type:String,
    },
    student_Father:{
        type:String,
    },
    student_Mother:{
        type:String,
    },
    parent_Mobile:{
        type:Number
    },
    student_email:{
        type:String,
    },
    student_Mobile:{
        type:Number,
    },
    year_of_join:{
        type:Date,
    },
},{
    timestamps: true,
});
module.exports = mongoose.model("students",studentSchema);