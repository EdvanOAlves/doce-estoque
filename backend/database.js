const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'db_doce_estoque',   
    }
});

module.exports = db;