import express from "express";
import http from "http";
import { schedule } from "node-cron";
import { fetchReviews } from "../pages/api/fetchReviews.js";
import getReviews from "../pages/api/getReviews.js";

// Init Express
const app = express();

//Execute all mondays at 00:00 (one time per week)
schedule("0 0 * * 1", () => {
  fetchReviews();
});

//schedule("*/10 * * * * *", () => {
//console.log("Iniciando tarea cada 30 segundos para obtener reseñas");
//fetchReviews();
//});

// GET Endpoint
app.get("/api/reviews", async (req, res) => {
  if (req.method === "GET") {
    const request = await getReviews();
    if (request !== null) {
      res.status(200).json(request);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
});

// Init server
const PORT = process.env.PORT || 443;

http.createServer(app).listen(PORT, () => {
  console.log(`Server connected port=${PORT}`);
});
