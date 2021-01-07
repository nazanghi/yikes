'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Reviews', 'user_id'){
      type:Sequelize.INTEGER
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Reviews', 'user_id')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
