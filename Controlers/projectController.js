const projects = require('../Models/projectSchema')

// 1 add project logic
 exports.addproject = async(req,res)=>{
    console.log("inside the addproject method");
const{title,language,github,livelink,overview}=req.body
const projectImage = req.file.filename // ivede .file name koduthath...project image our object ayett anu ..so athile path file name il anu ..so ath adukan vende anu..:if any doubt just remove the .filename and run then add file name
const userid=req.payload
console.log(title,language,github,livelink,overview,projectImage);
console.log(userid);

// 2 to make adding project unique we set the github as unique
try{
    const existingUser= await projects.findOne({github})
    if(existingUser){
        res.status(404).json("project alredy exist")
    }
    else{
        const newproject = new projects({title,language,github,livelink,overview,projectImage,userid}) // here userid is defined above
        await newproject.save()
        res.status(200).json(newproject)
    }
}
catch (err){
    res.status(401).json({message:err.message})

}

    // res.status(200).json("add project request successfully")
 }

 //3 get particular project
exports.getAprojects=async(req,res)=>{
    //get user id
    const userid=req.payload
    console.log(userid);
    try{
         const Aproject = await projects.find({userid})
         if(Aproject){
            res.status(200).json(Aproject)
         }
         else{
            res.status(401).json("cant find project")
         }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}

 // get 3 projects details for home project 
      exports.getHomeprojects = async(req,res)=>{
        try{
            const Homeproject=await projects.find().limit(3)
            if(Homeproject){
                res.status(200).json(Homeproject)
            }
            else{
                res.status(401).json("can't find project")
            }

        }
        catch (err){
          res.status(401).json({message:err.message})
        }
      }

 // get all project details
 
  exports.getAllprojects=async(req,res)=>{ 
    const searchkey=req.query.search
    console.log(searchkey);

    // case sensitive
    const query={
        language:{$regex:searchkey,$options:"i"}
    }
    try{
   const Allproject=await projects.find(query)
   if(Allproject){
    res.status(200).json(Allproject)
   }
   else{
    res.status(401).json("can't find projects")
   }
    }
    catch(err){
        res.status(401).json({message:err.meassage})
    }
  }
 
