const User=require("../models/User")

const postLogOut= function(req, res){
    console.log("here is logout");
    req.logout();
    res.clearCookie("connect.sid");
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
      });
}

const getSignUp= (req, res, next) => {

    return res.render("signup")
}

const postSignUp=(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);
    let user = new User({ username: username, password: password })
    user.save(function (err, doc) {
        if (err) {
            console.error(err);
            return res.redirect("/signup");

        }
        console.log("Document inserted succussfully!");
    })
    console.log(user);
    return res.redirect('/login')
}

module.exports.postLogOut=postLogOut;
module.exports.getSignUp=getSignUp;
module.exports.postSignUp=postSignUp;
