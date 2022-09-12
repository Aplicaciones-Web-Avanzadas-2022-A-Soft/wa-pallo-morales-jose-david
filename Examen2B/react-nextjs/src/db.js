const {Pool} = require('pg')
const {db} = require('../src/config')

//Crear una nueva conexión
const database = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});

module.exports = database;