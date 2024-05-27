const container = document.querySelector(".container");

setTimeout(() => {
  for (let i = 1; i <= 100; i++) {
    const btn = document.createElement("button");
    btn.innerText = `I am button ${i}`;
    container.appendChild(btn);
  }

  document.querySelector("h1").innerText = "There are a lot of buttons here !";
}, 2000);