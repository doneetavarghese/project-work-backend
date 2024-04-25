const applicationMiddleware=(req,res,next)=>{
    console.log("inside appliction middleware");
    next() // next() method call cheythal mathre namuk correct ayett data pass cheyth kittu
}
module.exports=applicationMiddleware