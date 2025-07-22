import { Server } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

let server: Server;
const PORT = 5000;

const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_SECRET_KEY}@cluster0.${process.env.MONGO_DB_URI_SECRET_KEY}.mongodb.net/ph-tour-management-backend?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDB");

    server = app.listen(PORT, () => {
      console.log(`App is listing on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
