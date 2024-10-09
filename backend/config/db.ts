import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI as string);

    console.log("MongoDB connected");
  } catch (error) {
    console.log("error connecting to db: ", (error as Error).message);
    process.exit(1);
  }
};

export default connectDB;
