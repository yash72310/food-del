import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://yashjhalani7:yash7231@cluster0.pmu7yza.mongodb.net/food").then(()=>console.log("DB Connected"));
   
}


