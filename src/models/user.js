const { default: mongoose } = require("mongoose");
const userschema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("gender data is not valid");
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://statinfer.com/wp-content/uploads/dummy-user.png",
    },
    about:{
        type:String,
        default:"This ia a default about the user",
    },
    skills:{
        type:[String],
       
    },
},{timestamps:true});


module.exports=mongoose.model("User",userschema);