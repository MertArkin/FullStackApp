/*
BRIEF OF HOW  TO RUN XAMPP AND BACKEND CONNECTION

open xampp
go to 127.0.0.1(localhost)

run phpmyadmin to see databases and tables

interact with it with the code below

[
discord spacex-->general chat for more info
]

*/

/*
download folder
+
C:\ProgramData\chocolatey\logs\chocolatey.log
shazam

take also notes of prettier (disable)

()

*/

const express = require("express");
const mysql = require("mysql");

/*
kullan for database stuff
const time = Date.now();
console.log(time);
*/

//DATABASE
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  //remove and add back when first creating (since there is no databse for us to connect when first created)
  database: "nodemysql",
});

const app = express();

//app.use = express.json();

/*


*/

//START SERVER
app.listen("3000", () => {
  console.log("server started on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World! - THIS IS YOUR BACKEND");
});

app.get("/test", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.json({ test: "123", test1: "teststring" });
  //res.send({ test: "123" });
});

//connect !
//stick to es6 syntax (anonymous function (arrow func. can be used too))
db.connect(function (err) {
  //console.log("yes");
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

//Create db
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

//DOES WORK (WHAT QUERY ??)
//Create a table
app.get("/createcontentstable", (req, res) => {
  let sql =
    "CREATE TABLE contents(id int AUTO_INCREMENT, title VARCHAR(255), embed_link VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("contents table created...");
  });
});

//Insert contents
app.get("/addcontentone", (req, res) => {
  let content = { title: "video1", embed_link: "linkvideo1" };
  let sql = "INSERT INTO contents SET ?";
  let query = db.query(sql, content, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("content one added...");
  });
});

//maybe add settimeout function too
//db.end();

//backend link      http://127.0.0.1:3000
