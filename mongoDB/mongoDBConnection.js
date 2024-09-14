import mongoose from "mongoose";
import "dotenv/config";

const mongoDBKey = process.env.MONGO_KEY;

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(mongoDBKey);
    console.log("Connected in MongoDB");
  } catch (error) {
    console.error("Error connecting MongoDB", error);
  }
};

export const disconnectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    try {
      await mongoose.disconnect();
      console.log("Mongo DB disconnected");
    } catch (error) {
      console.error("Disconnection error:", error);
    }
  }
};
