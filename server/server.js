import http from "http";
import getReviews from "../pages/api/getReviews.js";
import express from "express";

// Init Express
const app = express();

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
