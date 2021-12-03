const express = require('express')
const router = express.Router()
const authorization=require("../middleware/authorization")
const authenticationController=require("../controllers/authentication")
const passport=require("passport")

router.get("/login",authorization.isNotAlreadyLoggedIn, (req, res, next) => {

    return res.render("login");
})


router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout',authorization.isAuth,authenticationController.postLogOut);

router.get("/signup",authenticationController.getSignUp)

router.post("/signup",authenticationController.postSignUp);


module.exports=router;