const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("hi from server");
});

//app.use("/",(req,res)=>{
    //console.log("hello hello hello");
//

//});

//app.use((req,res)=>{
    //res.send("hello from the server");
//});
app.listen(2024,()=>{
    console.log("server is successfully listening on port 3000...");
});