const http = require("http");

// Building a http server

const hostname = "127.0.0.1";
port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");

  // Instead of writing status code and content-type header in different lines, we can write as belows.
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to http server.</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
