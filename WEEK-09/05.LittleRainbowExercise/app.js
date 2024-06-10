const body = document.body;

body.style.backgroundColor = "blue";

const promiseToChangeBackground = (color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
};

promiseToChangeBackground("yellow")
  .then(() => promiseToChangeBackground("red"))
  .then(() => promiseToChangeBackground("cyan"))
  .then(() => promiseToChangeBackground("violet"))
  .then(() => promiseToChangeBackground("green"))
  .then(() => promiseToChangeBackground("purple"));
