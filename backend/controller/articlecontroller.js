const { json } = require("express");
const article = require("../model/article")

module.exports.uploadarticle =async function (req, res) {
    try {
       
        let data = req.body;
        // console.log(data);
        //  for(let i in data){
        //     temp3 = JSON.parse(i);
        // }
        let id =await article.findOne({documentid:data.documentid})
        console.log(id);
        if(id!=undefined){
            await article.updateOne({documentid:data.documentid},{ title:data.title,editorHtml:data.editorHtml});
        }
        else{await article.create({ documentid:data.documentid,title:data.title,editorHtml:data.editorHtml});
    }
        return res.status(200).json({ message: "Article uploaded successfully" });
    } catch (error) {
        console.error("Error occurred while uploading article:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}



module.exports.getarticle= async function(req,res){
    try{
        var res1=await article.find({
    
        })
        return res.json(200,{
            message:res1
        })}catch(er){
            console.log(er)
        }
}