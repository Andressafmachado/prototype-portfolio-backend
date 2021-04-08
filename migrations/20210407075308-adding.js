"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   "users",
    //   "isNutritionist",
    //   { type: Sequelize.BOOLEAN },
    //   {}
    // );
    // await queryInterface.addColumn(
    //   "users",
    //   "doctorId",
    //   { type: Sequelize.BOOLEAN },
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("users", "isNutritionist", {});
    // await queryInterface.removeColumn("users", "doctorId", {});
  },
};
