import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  author_name: String,
  author_url: String,
  rating: Number,
  text: String,
  time: Number,
  profile_photo_url: String,
});

export const Review = mongoose.model("Review", reviewSchema);
