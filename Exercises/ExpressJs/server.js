const express = require("express");
const app = express();

/* 
app
  .get("/", (req, res) => {
    res.send("Hello from Express.");
  })
  .get("/ping", (req, res) => {
    res.send("Pong via Ping page after nodemom installed.Isn't it cool?");
  })
  .get("/*", (req, res) => {
    res.send("Page not found.");
  })
  .listen(3000, () => {
    console.log("Server started successfully.");
  }); 
  */

// Middleware in Express

/* 
// middleware function, works as authentication.
const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

// another middleware function.
const requestTime = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

// middleware call stacks execute from top to bottom, basically in sequence.
app.use(myLogger);
app.use(requestTime);

app.get("/", (req, res) => {
  res.send(`Current time: ${req.reqTime}`);
});

app.listen(3000, () => {
  console.log("Server running successfully.");
});
 */

// Serving static files in Express

/* 
const path = require("path");

// folders in root directory.
app.use(express.static("public"));

// folder is not in root directory
const assetsPath = path.resolve(__dirname, "assets");
app.use(assetsPath, express.static("images"));

// <img src="assets/img.jpg" />;

app
  .get("/", (req, res) => {
    res.send("Static Files");
  })
  .listen(3000, () => {
    console.log("Server running successfully in port:3000");
  });
 */

// Routing with Express

/*
 const PORT = 3000;

const data = {
  id: 1,
  name: "Sagar",
  location: "Finland",
};

app.get("/", (req, res) => {
  res.send("Welcome to my Homepage");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my Aboutpage");
});

app.get("/data", (req, res) => {
  //res.send(data);
  res.json(data);
});

app.get("/file", (req, res) => {
  res.sendFile("/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`);
});
 */

// Views in Expess

/* app.set("view engine", "pug");
//app.set("views", "./views");

app
  .get("/", (req, res) => {
    res.render("index");
  })
  .listen(3000, () => console.log("Server starts successfully."));
 */
