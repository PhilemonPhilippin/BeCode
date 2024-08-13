const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    title: "Post one",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "King Philippe",
  },
  {
    title: "Post two",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Barack Obama",
  },
  {
    title: "Post three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Nelson Mandela",
  },
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const htmlPageName = "index";
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}h${minute}`;
  res.render(htmlPageName, {
    time: time,
    posts: posts,
    title: upperCaseFirstLetter(htmlPageName),
  });
});

app.get("/about", (req, res) => {
  const htmlPageName = "about";

  res.render("about", { title: upperCaseFirstLetter(htmlPageName) });
});

app.get("/contact", (req, res) => {
  const htmlPageName = "contact";

  res.render("contact", { title: upperCaseFirstLetter(htmlPageName) });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

function upperCaseFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
