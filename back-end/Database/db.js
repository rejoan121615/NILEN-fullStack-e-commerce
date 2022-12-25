const { Sequelize } = require('sequelize');


const db = new Sequelize({
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    dialect: "mysql",
    database: "vhape-shop",
    host: "localhost",
});


module.exports = db;
