'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'job', 'about')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'job', 'about')

  }
};
