'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [{
        title : "Train to Busan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Shaun of the dead",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "ZombieLand",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "28 Days Later",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Zombiever",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Overlord",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Black Sheep",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
