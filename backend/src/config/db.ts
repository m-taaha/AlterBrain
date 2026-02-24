import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        
        if(!mongoURI) {
            throw new Error("MongoDB_URI is not defined in .env");
        }
        
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }
}

export default connectDB;