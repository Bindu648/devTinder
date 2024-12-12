const express = require("express");
const connectDB=require("./config/database");
const app = express();
const User=require("./models/user");
app.post("/signup",async(req,res)=>{
    const user=new User({
        firstName:"Manvithsai",
        lastName:"korada",
        emailId:"sai@gmail.com",
        password:"sai123",
    });
    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        req.statusCode(400).send("error saving the user:" +err.message);
    }
    
});
connectDB().then(()=>{
    console.log("database connection established");
    app.listen(3000,()=>{
        console.log("server is successfully listening on port 3000...");
    });
})
.catch((err)=>{
    console.log("datbase cannot be connected");
});