const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "",
    user: "root",
    password: "root1",
    database:"blogManagement"
});

module.exports = { connection };