
const router = require("express").Router();
const { Review } = require("../../models");

// Viewing all reviews
router.get("/", async (request, response) => {
  try {
    const reviewData = await Review.findAll({});
    response.status(200).json(reviewData);
  } catch (error) {
    response.status(500).json(error);
  }
});

// Add a Review

router.post("/", async (request, response) => {

  // create a new Review
  try {
    const reviewData = await Review.create({
      review_content: request.body.review_content,
      user_id: request.session.user_id,
      restaurant_id: request.body.restaurant_id,
    });
    response.status(200).json(reviewData);
  } catch (error) {
    response.status(400).json(error);
  }
});

module.exports = router;