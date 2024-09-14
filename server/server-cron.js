import { schedule } from "node-cron";
import { fetchReviews } from "./getDataFromGoogle.js";
import { connectMongoDB } from "../mongoDB/mongoDBConnection.js";

/*
//Execute all mondays at 00:00 (one time per week)
schedule("0 0 * * 1", () => {
  fetchReviews();
});
 */
connectMongoDB;

schedule("*/10 * * * * *", () => {
  console.log("Iniciando tarea cada 30 segundos para obtener reseñas");
  fetchReviews();
});
