'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adocoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adocoes.hasOne(models.Pets, {
        foreignKey: 'adocao_id'
      })
      Adocoes.belongsTo(models.Pets, {
        foreignKey: 'pet_id'
      })
      Adocoes.belongsTo(models.Tutores, {
        foreignKey: 'tutor_id'
      })
    }
  }
  Adocoes.init({
    data: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('NOW'),
      get() {
        const date = this.getDataValue('data');
        if (date) {
          return date.toLocaleDateString();
        }
        return null;
      }
    }
  }, {
    sequelize,
    modelName: 'Adocoes',
  });
  return Adocoes;
};
