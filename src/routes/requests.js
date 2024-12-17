const express=require("express");
const requestRouter=express.Router();
const{userAuth}=require("../middlwares/auth");
const jwt=require("jsonwebtoken");
requestRouter.post("/sendConnectionRequest",userAuth,async(req,res)=>{
    const user=req.user;
    console.log("sending a connection request");
    res.send(user.firstName + " sent the connect request");
})
module.exports=requestRouter;