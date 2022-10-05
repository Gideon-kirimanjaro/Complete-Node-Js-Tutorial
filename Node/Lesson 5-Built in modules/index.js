//---------------------------------------------------------------------------------Built in modules
const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");
const fsPromises = require("fs").promises;

//------------------------------------------------------------------------------os
// console.log("os>>", os.version());
// console.log("os>>", os.homedir());
// console.log("os>>", os.type());
// console.log("os>>", os.platform());
// console.log("os>>", os.EOL);
//------------------------------------------------------------------------------path
// const filePath = path.join("/content", "text.txt", "Some example");
// console.log("The filepath", filePath);
// const absPath = path.resolve(__dirname, "./content");
// console.log("The abs path", absPath);
//------------------------------------------------------------------------------file system
//----------writefilesync
// fs.writeFileSync(path.join(__dirname, "test.txt"), "Hello there", {
//   encoding: "utf8",
// });
//-----------readfilesync
// const read = fs.readFileSync(path.join(__dirname, "test.txt"), "utf8");
// console.log("THE DATA", read);
//----------readfile
// fs.readFile(path.join(__dirname, "test.txt"), "utf8", (err, data) => {
//   console.log("THE DATA", data);
// });
//---------------mkdir
// fs.mkdir(path.join(__dirname, "content/content.txt"), (err, data) => {
//   if (err) throw err;
//   console.log("SUCCESS");
// });
//--------------------------------------------------------------------------------Promises
// const testPromise = async () => {
//   try {
//     await fsPromises.mkdir(path.join("async"));
//     await fsPromises
//       .writeFile("./async/async.txt", "This is an async text")
//       .then(console.log("FILE WRITTEN"));
//   } catch (err) {
//     console.log("ERROR");
//   }
// };
// testPromise();
//----------------------------------------------------------------------------http
// const PORT = process.env.PORT || 3100;
// const server = http
//   .createServer((req, res) => {
//     res.write("No one is coming to save you Nigga");
//     res.end();
//   })
//   .listen(PORT, () => {
//     console.log("sUCCESFUL");
//   });
//---------------------------------------------------------------res methods
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("This is the about page");
        break;
      case "/services":
        res.end("This is the services page");
        break;
    }
  })
  .listen(3100);
