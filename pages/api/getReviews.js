import {
  connectMongoDB,
  disconnectMongoDB,
} from "../../mongoDB/mongoDBConnection.js";
import { Review } from "../../mongoDB/mongoDBSchema.js";

export default async function getReviews() {
  try {
    await connectMongoDB();
    // Obtener todas las reviews de MongoDB
    const reviews = await Review.find();
    // Si hay reviews, devolverlas en formato JSON
    await disconnectMongoDB();
    return reviews;
  } catch (error) {
    console.error(error);
    return null;
  }
}
