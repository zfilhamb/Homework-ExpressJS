const pool = require("../queries.js");
const fs = require("fs");

const seedQuery = fs.readFileSync('./seeding.sql', "utf-8");
console.log(seedQuery)
pool.query(seedQuery, (err, res)=>{
    if(err) throw err;
    console.log("Seeding complete");
})