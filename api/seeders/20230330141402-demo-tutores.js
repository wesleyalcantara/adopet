'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tutores', [
        {
          nome: 'Ana Clara',
          email: "ana@ana.com",
          senha:"Ana@123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Maria Carla',
          email: "maria@maria.com",
          senha:"Maria@123456",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tutores', null, {});
     
  }
};
