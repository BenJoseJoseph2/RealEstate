import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log(`Connected To MongoDB`);
})
.catch((err)=>{
    console.log(err);
})
const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log(`Server is Running on port 3000`);
});

//CREATION OF API ROUTE:
// app.get('/test',(req,res)=>{
//     // console.log(`HELLO WORLD`);
//     res.json({
//         message:'Hello World',
//     })
// })


app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)


// MiddleWare : 
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || `Internal Server Error`;
    return res.status(statusCode).json({
        sucess:false,
        statusCode,
        message
    });
});