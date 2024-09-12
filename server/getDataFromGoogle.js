import { default as axios } from "axios";

async function fetchReviews() {
  const apiKey = "YOUR_GOOGLE_API_KEY"; // Reemplaza con tu API key
  const placeId = "YOUR_PLACE_ID"; // ID de la empresa

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const reviews = response.data.result.reviews;

    // Guardar las reseñas en MongoDB
    for (const review of reviews) {
      const newReview = new Review({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
      });
      await newReview.save();
    }

    console.log("Reseñas guardadas en la base de datos");
  } catch (error) {
    console.error("Error al obtener las reseñas", error);
  }
}
