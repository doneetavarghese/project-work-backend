// 1  import multer
const multer= require('multer')

//to store multer data All words metioned in it are predefined 
 const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    // set image name
     filename:(req,file,callback)=>{
        const filename =`image-${Date.now()}-${file.originalname}`
        callback(null,filename)
     }
 })
 
 // for file filter ie jpg jepeg,png
 const fileFilter =(req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' ){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("plese uploads the following extensions (png.jpg,jpeg)")) 
    }
 }
 const multerConfig = multer({
    storage,fileFilter
 })

 module.exports=multerConfig


