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
        password : '$2a$10$tAxVVMT55vfD.ZcA8rG.3OSxcvyzQSmdyErYiRbzoW68kU6MnLHuO',
        isAdmin : true
      },
      {
        name: 'Foo Bar',
        email: 'foo@gmail.com',
        createdAt : new Date(),
        updatedAt : new Date(),
        username : 'oke',
        password : '$2a$10$tAxVVMT55vfD.ZcA8rG.3OSxcvyzQSmdyErYiRbzoW68kU6MnLHuO',
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
