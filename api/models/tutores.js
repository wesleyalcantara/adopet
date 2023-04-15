'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Tutores extends Model {
    static associate(models) {
      Tutores.hasMany(models.Adocoes, {
        foreignKey: 'tutor_id'
      })
    }
  }

  Tutores.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutores',
    hooks: {
      beforeCreate: async (tutor, options) => {
        const hashedPassword = await bcrypt.hash(tutor.senha, 10);
        tutor.senha = hashedPassword;
      },
      beforeUpdate: async (tutor, options) => {
        if (tutor.changed('senha')) {
          const hashedPassword = await bcrypt.hash(tutor.senha, 10);
          tutor.senha = hashedPassword;
        }
      }
    }
  });

  return Tutores;
};
