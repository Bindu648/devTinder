const express=require("express");
const authRouter=express.Router();
const {validateSignUpData}=require("../utils/validations");
const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
authRouter.post("/signup",async(req,res)=>{
   
    
    try{
        //validation of data

        validateSignUpData(req);
        const {firstName,lastName,emailId,password}=req.body;

        //Encrypt the password
        const passwordHash = await bcrypt.hash(password,10);
        

         //creating a new instance of the User model
        const user=new User({firstName,lastName,emailId,password:passwordHash});
         await user.save();
        res.send("user added successfully");
    }catch(err){
        {
        res.status(400).send("error saving the user:"+err.message);
    }
}
    
});
authRouter.post("/login",async(req,res)=>{
    try{
        const{emailId,password}=req.body;
        const user= await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("EmailId id not correct");
        }
        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){

            //create a JWT Token

            const token = await user.getJWT();
            

            // Add the token to cookie ans send the response back to the user
            res.cookie("token",token,{expires: new Date(Date.now() + 8*3600000)});
            res.send("Login Successfully");
        }else{
            throw new Error("password id not correct");
        }
    }catch(err){
        {
        res.status(400).send("error saving the user:"+err.message);
    }
}

});

module.exports=authRouter;