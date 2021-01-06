'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('accounts', 'username')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('accounts', 'username')
  }
};
