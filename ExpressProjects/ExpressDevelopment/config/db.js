const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "porto"
});

db.getConnection(() => {
    console.log("connection to the database server successfully!!")
});

module.exports = db;