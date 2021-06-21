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

