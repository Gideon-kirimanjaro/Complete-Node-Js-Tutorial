// console.log("HELLO WORLD");
// //import packages to node
// const { v4: uuid } = require("uuid");
// const { format } = require("date-fns");
// console.log(format(new Date(2014, 11, 11), "yyyy-MM-dd"));
// console.log("uuid", uuid());
//--------------------------------------------------------------NPM notes
//npm install "whateevr package";
//nodemon is the node monitor to prevent writing 'node index' all the time
//The package.json is very important
//---------------1) dependecies has all the required dependencies/installed depes
//---------------2) the Script section has code that npm runs e.g npm start, npm dev e.t.c
//----------------3} you can customize the script commands by "start": "node index", "dev": "nodemon"
// The node module is a huge file that should be ignored by adding a .gitignore file then addin 'node_modules as the file to ignore
//The dependencies are updated in 3 ways:
//-----1) "nodemon": "^2.0.20", The ^ symbol updates the minor version. In this case '0'
//-----2) "nodemon": "~2.0.20", The ~ symbol updates the patch version. In this case '20'
//-----2) "nodemon": "*2.0.20", The * symbol updates the major version. In this case '2' - Will break your app
///-----------------------------------------------------------------
//--
//----------------EVENTS
//1.imports
const logEvents = require("./logEvents");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmmiter = new MyEmitter();
myEmmiter.on("log", (msg) => logEvents(msg));
setTimeout(() => {
  myEmmiter.emit("log", "This is an event");
}, 2000);
