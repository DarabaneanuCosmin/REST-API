const mysql = require('mysql');
const util = require("util");

var pool = mysql.createPool({
    connectionLimit: 100,
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'relay'
});


module.exports = {
    pool
};