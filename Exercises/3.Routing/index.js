const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let url = req.url;

  if (url === "/") {
    res.end("Welcome to NodeJs");
  } else if (url === "/home") {
    res.end("Home Page");
  } else if (url === "/about") {
    res.end("About us Page.");
  } else {
    res.end("Page not found.");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`server running at 127.0.0.1:8000`);
});
