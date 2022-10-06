//-----------------------------------------------------------------------------------EXPRESS
const express = require("express");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const app = express();
//-----------------------------------------------------------------------------app.use
app.use(express.static("./navbar-app/static"));
//----------------------------------------------------------------------------app.get
// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .sendFile(resolve(__dirname, "./navbar-app/static/index.html"));
// });
//----------------------Setting up index page in static mode

app.get("*", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "./navbar-app/notFound.html"));
});

//-----------------------------------------------------------------------------app.listen
app.listen(3500);
