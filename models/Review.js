// review table
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    review_content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
   restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurant',
            key: 'id'
        },
    },
    star_rating: {
        type: DataTypes.INTEGER
    }
    

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
});

module.exports = Review;