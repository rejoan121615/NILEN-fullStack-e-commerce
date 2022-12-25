const db = require("../Database/db");
const { DataTypes, Sequelize } = require("sequelize");



const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(65),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
    },
});

module.exports = User;
