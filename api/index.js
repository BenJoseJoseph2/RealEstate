import express from 'express';
import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://benjosejoseph:benjosejoseph@realtor.bflk38l.mongodb.net/Realtor?retryWrites=true&w=majority&appName=Realtor")
const app = express();

app.listen(3000,()=>{
    console.log(`Server is Running on port 3000`);
});