const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "lorem.txt"), {
  encoding: "utf8",
});
const ws = fs.WriteStream(path.join(__dirname, "new_lorem.txt"));
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });
rs.pipe(ws);
