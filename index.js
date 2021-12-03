require('dotenv').config();

const express = require("express");
const app = express();
const database=require("./util/database")
const path=require("path")
var passport = require('passport');
const mongoose=require("mongoose")

//loading routes
const authenticationRoutes=require("./routes/authentication");
const shopRoutes=require("./routes/shop")



//loading passport methods
require('./util/passport');


//loading models
const User=require("./models/User");

//setting up templating engine pug
app.set("views", "views");
app.set("view engine", "pug");

//configuring static file pathing
app.use(express.static(path.join(__dirname + '/public')));

//configuring and parsing request  
app.use(express.urlencoded({ extended: true }))

//configuring sessions and storing them in MongoDB 
app.use(database)

//rerunning these services with each request for better performance
app.use(passport.initialize())
app.use(passport.session())


//using routes
app.use(authenticationRoutes)
app.use(shopRoutes)

mongoose.connect(process.env.MONGODB_URL||4000).then(result => {
    console.log("7mada");
    app.listen(3000);
})

