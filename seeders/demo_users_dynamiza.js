'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users_dynamiza', [{
        name : "Andre Dyna",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Pepe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Gavi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Elsa Dyna",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Evil Dead 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Felipe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Mario",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Harry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Maria",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Luisa",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('users_dynamiza', null, {});
     
  }
};
