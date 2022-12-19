/*
BRIEF OF HOW  TO RUN XAMPP AND BACKEND CONNECTION
open xampp
go to 127.0.0.1(localhost)
run phpmyadmin to see databases and tables
interact with it with the code below

discord spacex-->general chat for more info
C:\ProgramData\chocolatey\logs\chocolatey.log
take also notes of prettier (disable)


For resetting auto increment in database
'''
SET @num := 0;
UPDATE tablename SET id = @num := (@num+1);
ALTER TABLE tablename AUTO_INCREMENT = 1;
'''
starts from 1 labels as 1, 2 , ...


//backend link      http://127.0.0.1:3000
//xampp link        http://127.0.0.1/
*/

const express = require("express");
const mysql = require("mysql");
/*
DATABASE
Created database using this link
Using MySQL With Node.js
https://www.youtube.com/watch?v=EN6Dx22cPRI
*/

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  //remove and add back when first creating (since there is no databse for us to connect when first created)
  database: "nodemysql",
});

const app = express();
//app.use = express.json();

//Start server
app.listen("3000", () => {
  console.log("server started on port 3000");
});

//Default path to server
//USE FOR SERVER GET REQUESTS
app.get("/", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  //res.send doesnt work - use res.json | bak farklara
  //res.send("Hello World! - THIS IS YOUR BACKEND");
  res.json("Hi this is the server");
});

//Connect to database
//stick to es6 syntax (anonymous function (arrow func. can be used too))
db.connect(function (err) {
  //console.log("yes");
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

//Create database
app.get("/createdb", (req, res) => {
  /*
  kullan for database stuff
  const time = Date.now();
  console.log(time);
  */
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

//Create a table
//DOES WORK (WHAT QUERY ?)
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
  let content = { title: "video1", embed_link: "linkvideo" };
  let sql = "INSERT INTO contents SET ?";
  let query = db.query(sql, content, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("content one added...");
  });
});

//Get contents
app.get("/getcontents", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  let sql = "SELECT * FROM contents";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    //res.send("contents fetched...");
    res.json(result);
  });
});

//db.end();
//maybe add settimeout function too
