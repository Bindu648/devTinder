const express = require("express");

const app = express();

app.get("/user/:userid/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send("namaste nodejs");
});

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000...");
});