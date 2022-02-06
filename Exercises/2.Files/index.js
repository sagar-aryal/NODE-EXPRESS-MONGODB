const fs = require("fs");
const { json } = require("stream/consumers");

/*****  reading file    *****/
/* 
// async method

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

*/

// sync method

/*
try {
  const data = fs.readFileSync("test.txt", "utf-8", "r");
  console.log(data); 
} catch (err) {
  console.error(err);
}
*/

/*****  writing and updating file    *****/
// writeFile(), readFile() and unlink()

//async method

/* 
const content = [
  {
    type: "Node Application",
    job: "Testing",
  },
];

fs.writeFile("demo.json", JSON.stringify(content), (err) => {
  if (err) throw err;
  console.log("The file has been successfully saved.");
}); 
*/

// sync method

/*
 try {
  fs.writeFileSync("demoSync.json", JSON.stringify(content));
  console.log("File written successfully.");
} catch (err) {
  console.error(err);
}
 */

// Updating file, always use {flag:"?"}

/* 
const content = "Hello again, lets write file in test.txt";

fs.writeFile("test.txt", content, { flag: "a+" }, (err) => {
  if (err) throw err;
  console.log("File was successfully written.");
}); 
*/

// Deleting file
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log("File deleted.");
});
