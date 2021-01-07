'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.account, {
        foreignKey: 'account_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Review.belongsToMany(models.Category, {
        through: models.Tag,
        foreignKey: 'Review_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Review.init({
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};