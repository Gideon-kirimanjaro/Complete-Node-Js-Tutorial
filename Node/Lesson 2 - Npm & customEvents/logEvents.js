//IMPORTS
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

//FIRST EVENT
const logEvents = async (msg) => {
  const dateFormat = format(new Date(2014, 11, 11), "yyyy-MM-dd");
  const dateData = `The user with id ${uuid()} log into the system at ${dateFormat} and the message is ${msg}`;
  try {
    if (!fs.existsSync(path.join(__dirname, "dir"))) {
      await fsPromise.mkdir(path.join(__dirname, "dir"));

      await fsPromise.appendFile(
        path.join(__dirname, "dir", "logEvent.txt"),
        dateData
      );
    }
  } catch (err) {
    console.log(">>>>>>>>>>There's a problem");
  }
};
module.exports = logEvents;
