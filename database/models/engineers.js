'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Engineers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Engineers.init({
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    yearsWithsx: DataTypes.INTEGER,
    about: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'Engineers',
  });
  return Engineers;
};