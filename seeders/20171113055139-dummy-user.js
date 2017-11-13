'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'jhon@gmail.com',
        createdAt : new Date(),
        updatedAt : new Date(),
        username : 'tes',
        isAdmin : true
      },
      {
        name: 'Foo Bar',
        email: 'foo@gmail.com',
        createdAt : new Date(),
        updatedAt : new Date(),
        username : 'oke',
        isAdmin : false
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
