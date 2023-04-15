'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      porte: {
        allowNull: false,
        type: Sequelize.STRING
      },
      temperamento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      abrigo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Abrigos',
          key: 'id'
        }
      },
      adocao_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Adocoes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pets');
  }
};
