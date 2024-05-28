const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const body = document.querySelector("body");
  let randomColor = "rgb(";
  for (let i = 0; i < 3; i++) {
    randomColor += Math.floor(Math.random() * 256).toString();
    if (i < 2) randomColor += ", ";
    else randomColor += ")";
  }
  body.style.backgroundColor = randomColor;
  const heading1 = document.querySelector("h1");
  heading1.innerText = randomColor.toString();
});
