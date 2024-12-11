const express = require("express");

const app = express();

app.get("/user",[(req,res,next)=>{
    console.log("handling the route user");
    next();
    res.send("1st response");
   
},(req,res,next)=>{
    console.log("handling the route user2");
    res.send("2nd response");
    next();
}],(req,res,next)=>{
    console.log("handling the route user3");
    res.send("3nd response");
    next();
});



app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000...");
});