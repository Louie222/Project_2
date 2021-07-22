const router = require('express').Router();
const { Restaurant, Review, User } = require('../models');
const withAuth = require('../utils/auth');
//GETS all restaurants from the database and redners the homepage along with restaurant data.
router.get('/', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll();
    console.log(restaurantData);
    const restaurants = restaurantData.map((project) => project.get({ plain: true }));

    res.render('home', {
      loggedIn: req.session.loggedIn,
      restaurants: restaurants
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//finding a selected information and review which was created by the user and returns as a html.
router.get('/restaurant/:id', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findOne({
      include: [
        { model: Review, include: [{ model: User, attributes: ["username"] }] }
      ],
      where: { id: req.params.id }
    });
    const restaurant = restaurantData.toJSON();
    console.log(restaurant);
    res.render('restaurant', {
      loggedIn: req.session.loggedIn,
      restaurant: restaurant
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//checks if the user is logged in if not takes user to log in page.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    res.render('login');
  }
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    res.render('signup');
  }
});

module.exports = router