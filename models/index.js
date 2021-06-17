const User = require('./User');
const Restaurant = require('./Restaurant');
const Review =require('./Review');


Review.belongsTo(Restaurant);

Review.belongsTo(User);

Restaurant.hasMany(Review);

User.hasMany(Review);

module.exports = { User, Restaurant, Review };