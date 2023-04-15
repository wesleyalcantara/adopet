'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abrigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Abrigos.hasMany(models.Pets, {
        foreignKey: 'abrigo_id'
      })
    }
  }
  Abrigos.init({
    nome: DataTypes.STRING,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Abrigos',
  });
  return Abrigos;
};