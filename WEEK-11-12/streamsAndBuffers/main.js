const fs = require("node:fs");

// const readStream = fs.createReadStream("./hugeText.html", { encoding: "utf8" });

// readStream.on("data", (chunk) => {
//   console.log("--------- NEW CHUNK --------");
//   console.log(chunk);
// });

const readerStream = fs.createReadStream("./hugeText.html");
const writerStream = fs.createWriteStream("./newText.html");

readerStream.pipe(writerStream);