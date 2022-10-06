//-----------------------------------------------------------------------------------EXPRESS
const express = require("express");
const app = express();
const PORT = 5000;
const { resolve } = require("path");
const { readFileSync } = require("fs");
//----------------------------------------------------------------BASIC API FROM LOCAL STORAGE
// const items = require("./data");
// app.use(express.static("./static"));
// app.get("/shop", (req, res) => {
//   res.status(200).json(items);
// });
//-----------------------------------------------------------
app.get("/", (req, res) => {
  res.send("<h2>Route to the shop <a href='./shop.html'>shop</a></h2>");
});
app.get("/shop", (req, res) => {
  res.send(resolve(__dirname, "./shop.html"));
});
app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`);
});
