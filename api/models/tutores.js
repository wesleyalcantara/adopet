'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Tutores extends Model {
    static associate(models) {
      // define associations here
    }
  };
  Tutores.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutores',
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSaltSync(10);
        user.senha = await bcrypt.hashSync(user.senha, salt);
      }
    }
  });
  return Tutores;
};
