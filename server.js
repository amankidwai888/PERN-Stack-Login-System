const express = require("express");
const cors = require("cors"); //loaded all packages
const app = express();//express object 
//setting up the middleware
app.use(express.json()); //if json request, tells server to interpret this
app.use(cors());
const pool = require("./database");

//localhost 3000 front end 
//localhost 4000 back end communication block that's why we use middleware

//we define endpoints 
app.post("/adduser", (req, res) => {
const username = req.body["username"];
const password = req.body["password"];
console.log("Username:" + username);
console.log("Password:" + password);

const insertSTMT = `INSERT INTO accounts (username, password)
VALUES ('${username}', '${password}');`
pool.query(insertSTMT).then((response) => {
    console.log("Data Saved");
    console.log(response);

})
.catch((err) => {
    console.log(err);
});

    console.log("req.body");
    res.send("response received" + req.body);
});

app.listen(4000, () => console.log("server on localhost 4000"));

