'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_dynamiza extends Model {
    static associate(models) {
   
    }
  };
  users_dynamiza.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_dynamiza',
  });
  return users_dynamiza;
};