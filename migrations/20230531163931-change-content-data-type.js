'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articles', 'content', {
      type: Sequelize.TEXT
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articles', 'content', {
      type: Sequelize.STRING
    })
  }
}
