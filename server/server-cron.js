import { schedule } from "node-cron";

// Ejecutar todos los lunes a las 00:00 (una vez por semana)
schedule("0 0 * * 1", () => {
  console.log("Iniciando tarea semanal para obtener reseñas");
  fetchReviews();
});
