const https = require("https");

/*****  1.Building a http server  *****/

/* 
const hostname = "127.0.0.1";
port = 3000;

const server = https.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");

  // Instead of writing status code and content-type header in different lines, we can write as belows.
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to http server.</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
 */

/*****  2.Making HTTP request  *****/

/* 
const request = https.get(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
  (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      //console.log(data);
      console.log(JSON.parse(data)); // gives result in json format
    });

    res.on("error", (err) => {
      console.log("Error. " + err.message);
    });
  }
);
 */

// Using axios library

const axios = require("axios");
const request = axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
