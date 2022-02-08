const http = require("http");

// Creating a new server
const server = http.createServer((request, response) => {
  response.end("Hello from the server!");
});

// Listining for incoming request for requested port number and host name.
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has been start on port 8000.");
});
