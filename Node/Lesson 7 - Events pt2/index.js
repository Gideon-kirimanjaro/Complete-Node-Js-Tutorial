//-------------------------------------------------EVENTS------------------------
const customEvent = require("./customEvent");
const { EventEmitter } = require("events");
// const someEvent = new EventEmitter();
// const response = "response";
// someEvent.on(response, (a, b) => {
//   customEvent(a, b);
// });
// someEvent.emit(response, 7, 8);
//---------------------------------------------using events on server
const http = require("http");
const server = http.createServer();

server
  .on("request", (req, res) => {
    switch (req.url) {
      case "/about":
        res.end("This is an about page");
        break;
      case "/services":
        res.end("This is an about page");
        break;
    }
    res.end("This is  a request");
  })
  .listen(3200);
