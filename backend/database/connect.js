import mongoose from 'mongoose';
async function connect() {
        mongoose.set('strictQuery',true);
        const db= await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected successfully to database!!!');
        return db;
}
export default  connect ;