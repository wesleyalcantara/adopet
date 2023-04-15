'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasOne(models.Adocoes, {
        foreignKey: 'pet_id'
      })
      Pets.belongsTo(models.Abrigos, {
        foreignKey: 'abrigo_id'
      })
      Pets.belongsTo(models.Adocoes, {
        foreignKey: 'adocao_id',
        as: 'adocao'
      })
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    idade: DataTypes.STRING,
    porte: DataTypes.STRING,
    temperamento: DataTypes.STRING,
    foto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};