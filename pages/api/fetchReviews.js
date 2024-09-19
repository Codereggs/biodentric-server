import { default as axios } from "axios";
import "dotenv/config";
import { Review } from "../../mongoDB/mongoDBSchema.js";
import {
  connectMongoDB,
  disconnectMongoDB,
} from "../../mongoDB/mongoDBConnection.js";

const apiKey = process.env.GOOGLE_API_KEY; // Reemplaza con tu API key
const placeId = process.env.PLACE_ID; // ID de la empresa

export async function fetchReviews() {
  if (!apiKey || !placeId) return console.error("Something went wrong.");

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    await connectMongoDB();

    //Borrar las reseñas antes de insertar las nuevas
    await Review.deleteMany({});

    const response = await axios.get(url);
    const reviews = response.data.result.reviews;
    // Guardar las reseñas en MongoDB
    for (const review of reviews) {
      const newReview = new Review({
        author_name: review.author_name,
        author_url: review.author_url,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
      });
      await newReview.save();
    }
    disconnectMongoDB();
    console.log("Reviews saved");
  } catch (error) {
    console.error("Something went wrong.", error);
  }
}
