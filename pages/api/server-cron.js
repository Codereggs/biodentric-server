import winston from "winston";
import { fetchReviews } from "./fetchReviews.js";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

/* //Execute all mondays at 00:00 (one time per week)
schedule("0 0 * * 1", () => {
  logger.info("Init task to find reviews");
  fetchReviews();
}); */

logger.info("Init task to find reviews");
fetchReviews();
