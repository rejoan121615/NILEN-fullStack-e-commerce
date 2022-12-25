require("dotenv").config();
const express = require("express");
const db = require("./Database/db");
// sync model 
const User = require('./Models/User');
// data variable
const port = process.env.SERVER_PORT || 5000;

// module start point
const app = express();

db.sync({ alter: true }).then(() => {
    console.log('database connected');
}).catch(() => {
    console.log('database connection fail')
})

app.listen(port, (error) => {
    console.log(`server started on http://localhost:${port}`);
});
