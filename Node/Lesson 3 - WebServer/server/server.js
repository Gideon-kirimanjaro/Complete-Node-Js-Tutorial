const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const http = require("http");
const express = require("express");
const app = express();

// const PORT = process.env.port || 3100;
// const server = http.createServer((req, resp) => {
//   console.log(req.url, req.method);
// });
// server.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });

const PORT = process.env.port || 3500;
app.get("/api", (req, res) => {
  res.json({
    items: [
      {
        id: 1,
        itemName: "Sling bag",
        itemPrice: 3000,
      },
      {
        id: 2,
        itemName: "Monkey bag",
        itemPrice: 2000,
      },
      {
        id: 1,
        itemName: "Hobo bag",
        itemPrice: 5000,
      },
    ],
  });
});
app.listen(PORT, () => {
  console.log(`Listening @ port ${PORT}`);
});
