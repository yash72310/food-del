import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect(process.env.Mongo_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("DB Connected"));
   
}


