const { default: mongoose } = require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
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
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email address : " + value);
            }
        }
        
    
    },
    password:{
        type:String,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("wrong password : " +value);
            }
        }
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        enum:{
            values:["male","female","other"],
            message:`{VALUE} is not a valid gender type`,
        }
        //validate(value){
            //if(!["male","female","others"].includes(value)){
                //throw new Error("gender data is not valid");
            //}
        //}
    },
    photoUrl:{
        type:String,
        default:"https://statinfer.com/wp-content/uploads/dummy-user.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("invalid url : " + value);
            }
        }
    },
    about:{
        type:String,
        default:"This ia a default about the user",
    },
    skills:{
        type:[String],
       
    },
},{timestamps:true});
userschema.methods.getJWT=async function(){
    const user=this;
    const token=await jwt.sign({_id:user._id},"Dev@Tinder024",{expiresIn:'7d'});
    return token;
};
userschema.methods.validatePassword=async function(passwordInputByUser){
    const user=this;
    const passwordHash=user.password;
    const isPasswordValid=await bcrypt.compare(passwordInputByUser,passwordHash);
    return isPasswordValid;
}


module.exports=mongoose.model("User",userschema);