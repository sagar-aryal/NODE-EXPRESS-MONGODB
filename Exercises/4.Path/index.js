const path = require("path");

// let file = path.basename("/test/test.json"); // returns the last portion of path.

// let file = path.dirname("demo/test/test.json"); // returns directory portion of path.

// let file = path.extname("/test/test.json"); // returns the extension part of path.

// let file = path.parse("/users/demo/test/test.json"); // returns an object with properties of root, dir, base, ext and name

// let file = path.format({ root: "/user/demo", name: "test", ext: ".json" });
// let file = path.format({ dir: "/user/demo", base: "test.json" });

// let file = path.isAbsolute("/users/test/test.json"); // returns if path is absolute.

const name = "node";
let file = path.join("/", "demo", "test", name, "test.json");

console.log(file);
