const express = require("express");
const connectDB=require("./config/database");
const app = express();
const User=require("./models/user");
app.use(express.json());

app.post("/signup",async(req,res)=>{
    //creating a new instance of the User model
    const user=new User(req.body);
    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        {
        res.status(400).send("error saving the user:"+err.message);
    }
}
    
});

//feed api-get /feed - get all the users from the databases
app.get("/feed",async(req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("something went wwrong");
    }
})

//get user by email
app.get("/user",async(req,res)=>{
    const userEmail=req.body.emailId;
    try{
        console.log(userEmail);
        const user=await User.find({emailId:userEmail});
        res.send(user);
    }catch(err){
        res.status(400).send("something went wrong");
    }
});

// delete a user ffrom the database
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("user deleted successfully");
    }catch(err){
        res.status(400).send("something went wrong");
    }
});

// update data of the user
app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;
    const data=req.body;
    try{
       const user= await User.findByIdAndUpdate(userId,data,{
        runValidators:true,
       });
       
        res.send("user updates successfully");
    }catch(err){
        res.status(400).send("update failed:"+ err.message);
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