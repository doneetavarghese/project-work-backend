// 1. Import mongoose
const mongoose = require('mongoose');

// schema creaction
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    livelink:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    
    })
const projects = mongoose.model('projects',projectSchema)
module.exports=projects