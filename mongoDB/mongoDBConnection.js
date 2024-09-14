import { connect } from "mongoose";
import "dotenv/config";

const mongoDBKey = process.env.MONGO_KEY;

export const connectMongoDB = connect(mongoDBKey, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
