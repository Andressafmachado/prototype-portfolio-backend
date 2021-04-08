"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.user, {
        through: "doctorPatients",
        foreignKey: "doctorId",
        as: "patients",
      });
      user.belongsToMany(models.user, {
        through: "doctorPatients",
        foreignKey: "patientId",
        as: "doctor",
      });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isNutritionist: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
