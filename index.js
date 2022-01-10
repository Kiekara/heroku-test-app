const express = require("express");
const mysql = require("mysql");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(express.static("./build"));

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

const port = process.env.PORT || 8080;

var pool = mysql.createPool(config);

const db = [{ name: "tiina" }, { name: "jack" }];

app.get("/names", (req, res) => {
  res.send(db);
});

app.get("/", (req, res) => {
  pool.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
