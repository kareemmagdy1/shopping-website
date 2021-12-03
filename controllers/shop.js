const mainPage=(req,res,next)=>{
    console.log("default");
    return res.render("main-page",{isLoggedIn:false});
}


module.exports.mainPage=mainPage;