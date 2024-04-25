// // Schema maps to MongoDb collections 
//    // 1  import mongoose
//    const mongoose = require('mongoose')

// // 2 schema creation
//    const userschema = new mongoose.schema({
//     username:{
//         type:String,
//         required:true
//     },
//     email:{
//       type:String,
//       required:true,
//       unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     github:{
//         type:String
    
//     },
//     livelink:{
//         type:String
//     },
//     profile:{
//         type:String
        
//     }
//    })

//    //3 create model 
//       const user = mongoose.Model('user',userschema)
//       module.exports = user


// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Schema creation
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    livelink: {
        type: String
    },
    profile: {
        type: String
    }
});

// 3. Create model
const User = mongoose.model('User', userschema);

module.exports = User;
