// 1  Loads .env file contacts into process.env by default
   require('dotenv').config()

//2 import express
  const express =require('express')

// 3 import cors
 const cors = require('cors')

 // 7 import DB
    const db=require('./DB/Conection')  // ith ivede kodukupol anu mongodb altlas coonection establised ennu varunne
                                        // athayethu nammal conecttion.js il 1st define cheyum then terminail ingane kanan vende ivede vann DB ne import cheyum 
// import router, applicationmiddleware
  const router = require('./Routes/router')
// const applicationMiddleware = require('./Middlewares/applicationMiddleware')

// 4 create an applicication using express
     const pfServer = express()

//5 use 
pfServer.use(cors()) 
pfServer.use(express.json())
// pfServer.use(applicationMiddleware) // use application middleware // Router nu munp ith set cheythu kodukanam(router kazhij anu nammal eee code kodukunath..but kodukupol mukalil kodukanam)
pfServer.use(router)

// to view images in frontend 
pfServer.use('/uploads',express.static('./uploads')) // used to export images from backend to froend end

// port creation 
  const PORT = 4000 || process.env.PORT

// 
pfServer.listen(PORT,()=>{
    console.log("pfServer listinig on the port"+PORT);
})

pfServer.get('/',(req,res)=>{
  res.send("Welcome to project fair")
})
