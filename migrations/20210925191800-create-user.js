'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        /** allow null pour rendre l'info obligatoire */
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        /** allow null pour rendre l'info obligatoire */
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        /** allow null pour rendre l'info obligatoire */
        allowNull: false,
        type: Sequelize.STRING
      },
      isAdmin: {
        /** allow null pour rendre l'info obligatoire */
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};