const mongoose = require('mongoose');
const campusSchema = mongoose.Schema({
    college_id:{
        type:String
    },
    college_name:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("campusvault",campusSchema);