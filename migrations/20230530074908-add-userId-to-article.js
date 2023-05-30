'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Articles', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColuumn('Articles', 'UserId')
  }
}
