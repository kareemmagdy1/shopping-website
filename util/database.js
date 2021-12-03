const express = require('express')
const router = express.Router()
const session = require("express-session");
const DB_URL = process.env.MONGODB_URL;
console.log("here in db")
const MongoDbStore = require("connect-mongodb-session")(session);

const store = new MongoDbStore({
    uri: DB_URL,
    collection: "sessions"
})



router.use(session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 1000
    },
    store: store
}))


module.exports=router;