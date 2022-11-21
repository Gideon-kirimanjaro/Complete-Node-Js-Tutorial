const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { router } = require("./router/tasksRouter");
const PORT = 4500 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/api/tasks", router);
app.get("/", (req, res) => {
  res.send("SERVER RUNNING");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
