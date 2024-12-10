const express = require("express");

const app = express();



app.get("/user",(req,res)=>{
    res.send({firstname:"Bindupriya",lastname:"Samanthula"});
});

app.post("/user",(req,res)=>{
    res.send("Data successfully saved in database");
});

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully!");
});

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000...");
});