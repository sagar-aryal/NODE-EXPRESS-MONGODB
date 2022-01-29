const http = require("http");
const url = require("url");
const fs = require("fs");

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%title%}/g, product.title);
  output = output.replace(/{%price%}/g, product.price);
  output = output.replace(/{%description%}/g, product.description);
  output = output.replace(/{%category%}/g, product.category);
  output = output.replace(/{%image%}/g, product.image);
  return output;
};

const index = fs.readFileSync(`${__dirname}/index.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const products = dataObj.map((el) => replaceTemplate(index, el)).join(" ");
    res.end(products);
  }

  // Product page
  else if (pathName === "/product") {
    res.end("This is a product!");
  }

  // API page
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  // Not found page
  else {
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
