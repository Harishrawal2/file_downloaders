import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBConnection = async () => {
  try {
    // Connect to MongoDB using the provided URI
    const DB = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected Successfully established with URI: ${DB.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection failed: ${error}`);
  }
};

export default mongoDBConnection;
