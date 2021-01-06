'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('job', 'about')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('job', 'about')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
