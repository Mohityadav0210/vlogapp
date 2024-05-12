const mongoose=require("mongoose")
const articleSchema=new mongoose.Schema({
    title:  {
        type:String,
      //  required:true,
    },
    editorHtml:{
      type:String
    },
    documentid:{
      type:Number
    }
})

const article=mongoose.model("article",articleSchema);

module.exports=article;