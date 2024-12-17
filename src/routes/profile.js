const express=require("express");
const profileRouter=express.Router();
const{userAuth}=require("../middlwares/auth");
const jwt=require("jsonwebtoken");
profileRouter.get("/profile",userAuth,async(req,res)=>{
    try{
    const user = req.user;
   res.send(user);
}catch(err){
    {
    res.status(400).send("error saving the user:"+err.message);
}}
});
module.exports=profileRouter;