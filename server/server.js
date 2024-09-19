import express from "express";
import http from "http";
import getReviews from "../pages/api/getReviews.js";
import { cron } from "../pages/api/server-cron.js";
import cors from "cors";
import helmet from "helmet";

// Init Express
const app = express();

//Set cors
const corsOptions = { origin: "https://biodentric.cl" };
app.use(cors(corsOptions));

//Set helmet
app.use(helmet());

// GET Endpoint
app.get("/api/reviews", async (req, res) => {
  if (req.method === "GET") {
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "no-referrer");

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
