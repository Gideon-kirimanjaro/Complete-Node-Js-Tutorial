///-------------------------------------Separating MOdules
// const { faith } = require("./names");
// const printNames = (input) => {
//   console.log(`Hello ${input}`);
// };
// printNames(faith);
//--------------------------------------------OS
// const os = require("os");
// console.log(os.version());
//--------------------------------------------Path
// const path = require("path");
// const file = path.join("/content", "test.txt", "utf-8");
// console.log(file);
//-----------------------------------------------------File System
//-------------------------Sync
// const { readFileSync, writeFileSync } = require("fs");
// const readfile = readFileSync("./content/test.txt", "utf-8");
// console.log(readfile);
// writeFileSync(
//   "./content/remember.txt",
//   "Remeber to never leave any stone unturned"
// );
//---------------------------------------------------Async
// const { readFile, writeFile } = require("fs");
// const asyncRead = readFile("./content/test.txt", "utf-8", (err, data) => {
//   if (!err) {
//     console.log(">>>", data);
//   } else {
//     console.log("Something is wrong");
//   }
// });
// const asyncWrite = writeFile(
//   "./content/asyncWrite.txt",
//   "Do something uncomfortable everyday",
//   (err, data) => {
//     console.log(">>>>", data);
//   }
// );

// //-----------------------------------------------------------ASYNC NON-BLOCKING CODE
// const { readFile } = require("fs").promises;
// const asynFunction = async () => {
//   try {
//     const readText = await readFile(
//       "./content/remember.txt",
//       "utf-8",
//       (err, data) => {
//         if (!err) {
//           console.log("There is an error");
//         } else {
//           return data;
//         }
//       }
//     );
//     const readText2 = await readFile(
//       "./content/asyncWrite.txt",
//       "utf-8",
//       (err, data) => {
//         if (!err) {
//           console.log("There is an error");
//         } else {
//           return data;
//         }
//       }
//     );

//     console.log(">>>>", readText, readText2);
//   } catch (err) {
//     console.log(err);
//   }
// };
// asynFunction();

//----------------------------------------------------EVENTS---------
// const customEmmiter = require("events");
// const { createReadStream } = require("fs");
// const customEvent = new customEmmiter();
// customEvent.on("bmi", (height, weight) => {
//   const rating = 75 / 1.78 ** 2;
//   console.log("Your bmi is ", rating);
// });
// customEvent.emit("bmi", 178, 75);

const http = require("http");
const { createReadStream } = require("fs");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const file2 = createReadStream("./content/remember.txt", "utf-8");
      file2.on("open", (resp) => {
        res.end(resp);
      });
  }
  res.end("page not found");
});
server.listen(3500, () => {
  console.log(`Server running at ${3500}`);
});
