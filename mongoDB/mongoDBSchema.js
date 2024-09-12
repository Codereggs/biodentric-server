const reviewSchema = new mongoose.Schema({
  author_name: String,
  rating: Number,
  text: String,
  time: Number,
  profile_photo_url: String,
});

const Review = mongoose.model("Review", reviewSchema);
