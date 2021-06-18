// Creating pre-requisite data

const sequelize = require('../config/connection');
const { User,Restaurant, Review} = require('../models');

const userData = require('./userData.json');
const restaurantData = require('./restaurantData.json')
const reviewData= require('./reviewData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create seed data from json
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
// creating seed data from json
  await Restaurant.bulkCreate(restaurantData);
  await Review.bulkCreate(reviewData); 

  process.exit(0);
};

seedDatabase();