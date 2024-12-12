const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
"mongodb+srv://s180648:zpBgBxwjMyUDLQJ6@namastenode.7lvfc.mongodb.net/devTinder"
);
};
module.exports=connectDB;