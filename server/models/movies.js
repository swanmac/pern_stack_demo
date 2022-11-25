'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    movieName: DataTypes.STRING,
    actorName: DataTypes.STRING,
    description: DataTypes.STRING,
    releasedate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
    tableName: 'movies'
  });
  return Movies;
};