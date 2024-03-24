import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup = async(req,res)=>{
    //  We want to get information from the browsers.
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username,email,password:hashedPassword});
    try{
        await newUser.save()
    res.status(201).json("User Created Successfully")
    }
    catch(err){
        res.status(500).json(err.message)
    }
    
}
