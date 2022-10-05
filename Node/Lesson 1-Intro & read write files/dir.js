const fs = require("fs");
const path = require("path");
//---------------------------------------------------------------Make a directory
// fs.mkdir(path.join(__dirname, "newDir"), (err) => {
//   if (err) throw err;
// });
//---------------------------------------------------------write to the directory + Check if it exists
// if (!fs.existsSync("./newDir/test.txt")) {
//   fs.writeFile(
//     path.join(__dirname, "./newDir/test.txt"),
//     "This is a test directory",
//     (data, err) => {
//       if (err) throw err;
//       console.log(data);
//     }
//   );
// }
//------------------------Check if directory exists
if (!fs.existsSync("./new")) {
  fs.mkdir(path.join(__dirname, "./new"), (err) => {
    if (err) throw err;
  });
  fs.writeFile(path.join(__dirname, "./new/new.txt"), "A test", (data, err) => {
    if (err) throw err;
    console.log(data);
  });
}
//----------------------------------------------------------Remove a directory
if (fs.existsSync("./newDir")) {
  fs.rmdir("./newDir", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
