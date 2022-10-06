//----------------------------------------------------------------------HTTP
const { createServer } = require("http");
const { readFileSync } = require("fs");
const home = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const logo = readFileSync("./navbar-app/logo.svg");
const logic = readFileSync("./navbar-app/browser-app.js");
createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.setHeader("homepage", "This is the homepage");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(home);
      break;
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.end(styles);
      break;
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.end(logo);
      break;
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      res.end(logic);
      break;
    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>The about page</h1>");
      break;
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Error page not found</h1>");
  }
}).listen(5000);
