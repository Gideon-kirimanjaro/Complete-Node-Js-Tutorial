//---------------------------------------------------------------EVENT LOOP-----------------------
//----------------------------------------------SETTIMEOUT
// console.log("FIRST LOG");
// setTimeout(() => {
//   console.log("SECOND LOG");
// }, 2000);
// console.log("THIRD LOG");
//----------------------------------------------SETINTERVAL
// console.log("FIRST LOG");
// setInterval(() => {
//   console.log("SECOND LOG");
// }, 2000);
// console.log("THIRD LOG");

//--------------------------------------------------------------------------------aSYNC APPROACH
// const { readFile, promises } = require("fs");
//--------------------------------------------------------------using New Promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./code/test.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//-------------------------------------------------------------Using async await
// const code = async (path) => {
//   try {
//     const response = await promises.readFile(path, "utf8");
//     console.log("THE RESPONSE>", response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// code("./code/test.txt");
