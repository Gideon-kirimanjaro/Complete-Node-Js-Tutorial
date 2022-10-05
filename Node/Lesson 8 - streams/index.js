///--------------------------------------------------------------------------------STREAMS
const { readFileSync, writeFileSync, createReadStream } = require("fs");
const { createServer } = require("http");
// for (let i = 0; i < 1000; i++) {
//   writeFileSync("write.txt", ` I am number ${i} \n`, { flag: "a" });
// }
//-----------------------------------------------------------CreateReadStream
// const stream = createReadStream("./write.txt", {
//   //   flag: "a+",
//   //   encoding: "UTF-8",
//   //   start: 5,
//   //   end: 64,
//   //   highWaterMark: 1600,
// });
// stream.on("data", (response) => {
//   console.log("THE DATA", response);
// });
//--------------------------------------------------Example
// for (let x = 0; x < 10000; x++) {
//   const data = `Be useful number ${x} \n`;
//   writeFileSync("./serverData.txt", data, { flag: "a" });
// }

// createServer((req, res) => {
//   const stream = createReadStream("./serverData.txt", "utf8");
//   stream.on("open", () => {
//     stream.pipe(res);
//   });
//   stream.on("error", (err) => {
//     [res.end(err)];
//   });
// }).listen(3200);
