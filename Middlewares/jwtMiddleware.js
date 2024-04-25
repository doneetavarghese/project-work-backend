const jwt = require('jsonwebtoken')
// token varification
const jwtMidleware=(req,res,next)=>{
    console.log("inside jwt middleware");

    try{
        //get the token
    const token = req.headers['authorization'].slice(7) // sq bracket // slice(7) is to remove the extra word 'barer' in frond of the token..becoz we need only the token
    console.log(token);

    // varify the token
    const jwtverification = jwt.verify(token,"super2024")
    console.log(jwtverification); //payload - userid
    req.payload= jwtverification.userId

    next()

    }
    catch(err){
      res.status(401).json({"Authorization":err.message})
    }
}
module.exports=jwtMidleware