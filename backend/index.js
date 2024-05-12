const express=require("express");
const db = require("./config/mongodb")
const http=require("http");
const cors = require("cors")
const bodyParser = require('body-parser');
const app=express();
app.use(cors());
const port =8000;
//app.use(bodyParser.json());
//app.use(express.json())
app.use(express.urlencoded());
app.use("/",require("./router"));
app.listen(port,function(err){
    console.log(err);
    return;
})