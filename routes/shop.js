const shopController=require("../controllers/shop")
const express=require("express")
const router=express.Router();


router.get("/",shopController.mainPage);


module.exports=router;

