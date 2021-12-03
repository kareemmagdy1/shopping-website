const isAuth =(req,res,next)=>{
    if(req.user){
        next();
    }else{
    res.redirect("/")}
}

const isNotAlreadyLoggedIn=(req,res,next)=>{
    if(req.user){
        res.statuesMessage="already logged in"
        res.status(400).redirect("/")
    }else{
    next()
    }
}


module.exports.isNotAlreadyLoggedIn=isNotAlreadyLoggedIn;
module.exports.isAuth=isAuth;

