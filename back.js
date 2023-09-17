let cors = require("cors");
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

let connection = mysql.createConnection({
  host: "berzz9slsesve1qrxd7k-mysql.services.clever-cloud.com",
  user: "uortu7wj3uywsssa",
  password: "z8iqlcKCaJWO4VU0VgT1",
  database: "berzz9slsesve1qrxd7k",
});

app.get("/users", function (req, res) {
  connection.query("select * from users ", function (err, result, fields) {
    console.log(err);
    console.log(result);
    console.log(fields);
    res.send(result);
  });
});

app.get("/users", function (req, res) {
  connection.query("select * from users", function (err, result, fields) {
    res.send(result);
  });
});

app.get("/users/:id", (req, res) => {
  const elem = req.params;

  connection.query("select * from users", function (err, result, fields) {
    for (let i = 0; i < result.length; i++) {
      if (elem.id == result[i].ID) {
        res.send(result[i]);
      }
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const elem = req.params.id;
  const silininenElementArray = db.filter(
    (element) => element.actor_id != elem
  );
  connection.query(
    `DELETE FROM users WHERE ID=${elem}`,
    function (err, result, fields) {
      console.log(result);
    }
  );
});

app.post("/users/", (req, res) => {
  let obj = req.body;
  connection.query(
    `INSERT INTO users (ID,name, surname,password)
          VALUES ("${obj.ID}", "${obj.name}", "${obj.surname}", "${obj.password}")`,
    function (err, result, fields) {}
  );
});
app.listen(process.env.PORT || 3000);
