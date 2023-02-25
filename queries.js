const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"dvdrental",
    password:"kacangpolong",
    port:5432,
}); 

module.exports = pool;