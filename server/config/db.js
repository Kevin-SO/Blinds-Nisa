const mongoose= require('mongoose');
mongoose.set('strictQuery', false);
const connctDB= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected:${conn.connection.host}`);

    }catch(error){
        console.log(error);
    }
}
module.exports=connctDB;