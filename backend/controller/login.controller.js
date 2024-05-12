
const user=require("../model/user");

module.exports.login=async function(req,res){
   try{
    var res1=await user.find({

    })
    return res.json(200,{
        message:res1
    })}catch(er){
        console.log(er)
    }
}

module.exports.siginup= async function(req,res){
   try{
    await  user.create({
        name:"yogi",
        password:"yyy"
    } 
) 
return res.json(200,"create success ")
}catch(ex){
        console.log(ex);
    }

}
