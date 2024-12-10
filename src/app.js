const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    console.log("hello from the server");
});

app.use("/",(req,res)=>{
    console.log("hello hello hello");
});

app.use((req,res)=>{
    console.log("hello from the server");
});
app.listen(3000 ,()=>{
    console.log("server is successfully listening on port 3000...");
});