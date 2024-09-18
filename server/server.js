import express from "express";
import http from "http";
import getReviews from "../pages/api/getReviews.js";
import { cron } from "../pages/api/server-cron.js";
import cors from "cors";

// Init Express
const app = express();

//Set cors
const corsOptions = { origin: "*" };
app.use(cors(corsOptions));

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

app.use("/api/cron", cron);

// Init server
const PORT = process.env.PORT || 443;

http.createServer(app).listen(PORT, () => {
  console.log(`Server connected port=${PORT}`);
});
