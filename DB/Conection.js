// 1 import mongoose
const mongoose=require('mongoose')

// Define coneection string
    const connectionstring = process.env.DATABASE

// 3 connection code
      mongoose.connect(connectionstring).then(()=>{
        console.log("mongodb atlas connections elstablished");
      })
      .catch((error)=>{
        console.log("mongodb atlas connection error");
      })