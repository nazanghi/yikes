'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Account, {
        foreignKey:'user_id',
        onDelete:'cascade',
        onUpdate:'cascade'
      })
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    job: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};