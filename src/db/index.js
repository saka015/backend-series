import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;


const connect = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("🚀 DB connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connect;
