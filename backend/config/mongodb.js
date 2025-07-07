//Connect to MongoDB
import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    //func excuted whenever connection established
    console.log("DB connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`); //e-commerce specify name of databae want use within the cluster
};

export default connectDB;
