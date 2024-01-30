const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    connectionLimit: 10
});

pool.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});

module.exports = connection;
