import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://yashjhalani7:yash7231@cluster0.pmu7yza.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}


