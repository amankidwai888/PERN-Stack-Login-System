//const { response } = require("express");
const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "login_system"
})

//const createTblQry = `CREATE TABLE accounts (
   // user_id serial PRIMARY KEY,
    //username VARCHAR (50) UNIQUE NOT NULL,
   // password VARCHAR (50) UNIQUE NOT NULL);`

    //id: 2
    //id: 3

/*pool.query(createTblQry).then((Response) => {
    console.log("Table Created");
    console.log(Response);
})
.catch((err) => {
    console.log(err);
});*/
module.exports = pool;