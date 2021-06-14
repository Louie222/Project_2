// Creating pre-requisite data

const sequelize = require('../config/connection');
const { User,Restaurant} = require('../models');

const userData = require('./userData.json');
const restaurantData = require('./restaurantData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create seed data from json
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
// creating seed data from json
  await Restaurant.bulkCreate(restaurantData);
   

  process.exit(0);
};

seedDatabase();