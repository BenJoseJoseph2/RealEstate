import mongoose from "mongoose";
// First we create rows and column:
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

// Creation of model:
const User = mongoose.model('User',userSchema);
export default User;