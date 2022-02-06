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

/*****  2.Making HTTP get request  *****/

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

// Using axios library which need to be installed before using it.
// npm init -y
// npm i axios

/* 
const axios = require("axios");

const request = axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  }); 
  */

/*****  2.Making HTTP post request  *****/

/* 
const data = JSON.stringify({
  name: "Sagar",
  location: "Finland",
  job: "Software Developer",
});

const options = {
  hostname: "reqres.in",
  port: "",
  path: "/api/users",
  method: "POST",
  header: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const request = https.request(options, (res) => {
  let data = "";
  console.log(`Status Code: ${res.statusCode}`);
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(JSON.parse(data));
  });
  res.on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

request.write(data);
request.end();
 */

// post request using axios
const axios = require("axios");

const data = JSON.stringify({
  name: "Sagar",
  location: "Finland",
  job: "Software Developer",
});

const req = axios
  .post("https://reqres.in/api/users", data)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
