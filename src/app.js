const express = require("express");
const connectDB=require("./config/database");
const app = express();

const cookieparser=require("cookie-parser");
const jwt=require("jsonwebtoken");

app.use(express.json());
app.use(cookieparser());


const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/requests");
const userRouter=require("./routes/user");
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/",userRouter);

connectDB().then(()=>{
    console.log("database connection established");
    app.listen(3000,()=>{
        console.log("server is successfully listening on port 3000...");
    });
})
.catch((err)=>{
    console.log("datbase cannot be connected");
});
