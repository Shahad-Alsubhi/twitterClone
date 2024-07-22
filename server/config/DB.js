import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("mongoose connection open");
    })
    .catch((e) => {
      console.log("error");
      console.log(e);
    });
};

export default connectDB;
