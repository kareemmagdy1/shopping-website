var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const User=require("../models/User")

const customeFields = {
    usernameField: "username",
    passwordField: "password"
}
const verifyCallBack = (username, password, callback) => {

    User.findOne({ username: username }, function (err, user) {
        if (err) { return callback(err); }
//        console.log(user);
        if (!user) {
            return callback(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
            return callback(null, false, { message: 'Incorrect password.' });
        }
        return callback(null, user);
    });

}

const strategy = new LocalStrategy(customeFields, verifyCallBack)
//--------0--------------------------------------------------------------------------

passport.use(strategy)

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


