//-----------------------------------------------------------------------------------EXPRESS
const express = require("express");
const { readFileSync } = require("fs");
const home = readFileSync("./index.html");
const app = express();

///////////////--------------------------------------------------------app.get
app.get("/", (req, res) => {
  res.status(200).send("The home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("This is the about page");
});
/////-------------------------------------------------------------------app.all
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3500);
