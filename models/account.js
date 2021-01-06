'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {
      account.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      account.hasMany(models.Review, {
        foreignKey: 'account_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  account.init({
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    job: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'account',
  });
  return account;
};