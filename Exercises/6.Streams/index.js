// Why <stream ? becouse its memory efficiency and time efficiency.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /* fs.readFile("test.txt", "utf8", (err, data) => {
    res.end(data);
  }); */

  // Stream sends data chunk by chunk.

  const stream = fs.createReadStream("test.txt");
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log("Application starts at hocalhost:3000");
});
