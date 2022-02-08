// Node buildin modules are imporated as a variable with require("module name")
const fs = require("fs");

/* 

//  synchronomous/ blocking method

// Reading file located in the folder.
const inputNote = fs.readFileSync("./note.txt", "utf-8");
console.log(inputNote);

// Creating new file to the folder. If already exist file path is written it will be replaced with new output file.
const outputNote = `This is what we know about the file output system in nodeJS. Created on: ${Date.now()}`;
fs.writeFileSync("./newNote.txt", outputNote);

 */

/* 

// asynchronomous/ non-blocking method
fs.readFile("./note.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error!");
  console.log(data);
});

const asyncNote = "Hello from async file write methods from NodeJs.";

fs.writeFile("./asyncNote.txt", asyncNote, (err) => {
  console.log("You file has been successfully written. ");
});

 */
