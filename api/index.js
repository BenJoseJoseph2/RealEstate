import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log(`Connected To MongoDB`);
})
.catch((err)=>{
    console.log(err);
})
const app = express();

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