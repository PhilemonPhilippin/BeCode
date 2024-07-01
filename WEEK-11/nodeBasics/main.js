const Circle = require("./part.js");
// const partJs = require("./part.js");
const os = require("node:os");
const fs = require("node:fs");

const circle = new Circle(5);
console.log(circle.area);
console.log(circle.perimeter);

const movies = circle.returnDisneyMovies();
movies.forEach((m) => console.log(m));

const platform = os.platform();
const homedir = os.homedir();
console.log(platform);
console.log(homedir);

const newFolderName = "./test";
try {
  if (!fs.existsSync(newFolderName)) {
    fs.mkdirSync(newFolderName);
  }
} catch (err) {
  console.error(err);
}

const content = "I am a BeCode warrior";
const filePath = newFolderName + "/notes.txt";
try {
  fs.writeFileSync(filePath, content);
} catch (err) {
  console.error(err);
}

try {
  const notes = fs.readFileSync(filePath, "utf8");
  console.log(notes);
} catch (err) {
  console.error(err);
}

try {
  fs.unlinkSync(filePath);
  console.log("File removed successfully");
} catch (err) {
  console.error(err);
}

try {
  fs.rmdirSync(newFolderName);
  console.log("Folder deleted successfully");
} catch (err) {
  console.error(err);
}
