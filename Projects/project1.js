const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is a overview!");
  } else if (pathName === "/product") {
    res.end("This is a product!");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found. ERROR</h1>");
  }
});

const portNumber = 3001;
const hostName = "127.0.0.1";

server.listen(portNumber, hostName, () => {
  console.log(`Server is running successfully at port ${portNumber}`);
});
