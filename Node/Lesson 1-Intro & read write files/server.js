// console.log("HELLO WORLD");
// console.log(global);
//-------------------------------------------------------------------INTRO-----------
// const os = require("os");
// const path = require("path");
// console.log(os.type());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
//------------------------------------------imports from other files
// const math = require("./math");
// console.log(math.add(3, 4));\
//-----------------------------------------------------------------------------READING FILES
//-------------------------------read file
const fs = require("fs");
// fs.readFile("./excel.xlsx", "utf-8", (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// });
//-------------------------------read file with path
const path = require("path");
// fs.readFile(path.join(__dirname, "excel.xlsx"), (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// });
//-------------------------------Define the error
// process.on("uncaughtException", (err) => {
//   console.error(`There was an error ${err}`);
//   process.exit(1);
// });
//--------------------------------Write File--
// fs.writeFile(
//   path.join(__dirname, "reply.txt"),
//   "Nice to meet you mate",
//   (err) => {
//     if (err) throw err;
//     else console.log("WRITING FILE");
//   }
// );
//----------------------------AppendFile
// fs.appendFile(
//   path.join(__dirname, "append.txt"),
//   "This is an appended file",
//   (err) => {
//     if (err) throw err;
//   }
// );
//-------------------------using write file ,append and rename call back hell
// fs.writeFile(
//   path.join(__dirname, "greeting.txt"),
//   "Hello there young lady",
//   (err) => {
//     if (err) throw err;
//     console.log("WRITING COMPLETE");
//     fs.appendFile(
//       path.join(__dirname, "greeting.txt"),
//       "I am an appended text",
//       (err) => {
//         if (err) throw err;
//         console.log("APPEND COMPLETE");
//         fs.rename(
//           path.join(__dirname, "greeting.txt"),
//           path.join(__dirname, "newgreeting.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("RENAME COMPLETE");
//           }
//         );
//       }
//     );
//   }
// );
//-------------------------AVVOIDING CALL BACK HELL WITH ASYNC AWAIT
const fsPromises = require("fs").promises;
const asyncFn = async () => {
  try {
    const data = await fsPromises.writeFile(
      path.join(__dirname, "async.txt"),
      "START OF ASYNC FILE"
    );
    console.log("WRITE COMPLETE");
    await fsPromises.unlink(path.join(__dirname, "reply.txt"));
    await fsPromises.appendFile(
      path.join(__dirname, "async.txt"),
      "I HAVE OVERWRITTEN THIS THING"
    );
    console.log("APPEND COMPLETE");
    const newData = await fsPromises.rename(
      path.join(__dirname, "async.txt"),
      path.join(__dirname, "newAsync.txt")
    );
    console.log("RENAME COMPLETE");
  } catch (err) {
    if (err) throw err;
  }
};
asyncFn();
