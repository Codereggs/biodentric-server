import { fetchReviews } from "./fetchReviews.js";

/* //Execute all mondays at 00:00 (one time per week)
schedule("0 0 * * 1", () => {
  logger.info("Init task to find reviews");
  fetchReviews();
}); */

export const cron = async (req, res) => {
  if (req.method === "GET") {
    await fetchReviews();
    res.status(200).end("Hello Cron!");
  }
};
