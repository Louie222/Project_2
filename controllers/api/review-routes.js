
const router = require("express").Router();
//importing the review tabel that sequlize converts to models
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

// Viewing all reviews
router.get("/", async (request, response) => {
  // get all reviews 
  try {
    const reviewData = await Review.findAll({});
    response.status(200).json(reviewData);
  } catch (error) {
    response.status(500).json(error);
  }
});

// Add a Review

router.post("/",withAuth, async (request, response) => {

  // create a new Review
  try {
    const reviewData = await Review.create({
      review_content: request.body.review_content,
      user_id: request.session.user_id,
      restaurant_id: request.body.restaurant_id,
      star_rating: request.body.star_rating
    });
    response.status(200).json(reviewData);
  } catch (error) {
    response.status(400).json(error);
  }
});

module.exports = router;