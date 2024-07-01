const Circle = require("./part.js");
// const partJs = require("./part.js");
const os = require("node:os"); 

const circle = new Circle(5);
console.log(circle.area);
console.log(circle.perimeter);

const movies = circle.returnDisneyMovies();
movies.forEach((m) => console.log(m));

const platform = os.platform();
const homedir = os.homedir();
console.log(platform);
console.log(homedir);