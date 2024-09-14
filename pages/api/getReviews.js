import {
  connectMongoDB,
  disconnectMongoDB,
} from "../../mongoDB/mongoDBConnection.js";
import { Review } from "../../mongoDB/mongoDBSchema.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
      // Obtener todas las reviews de MongoDB
      const reviews = await Review.find();
      // Si hay reviews, devolverlas en formato JSON
      await disconnectMongoDB();
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener las reseñas" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
