
const articlecontroller = require("../controller/articlecontroller");


const express=require("express");
const router=express.Router();


router.post("/Text",articlecontroller.uploadarticle);
router.get("/getText",articlecontroller.getarticle);
router.post("/save",articlecontroller.uploadarticle)


module.exports=router;