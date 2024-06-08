const hamburger = document.querySelector(".hamburger");
const sidePannel = document.querySelector(".side-pannel");

hamburger.addEventListener("click", () => {
  sidePannel.classList.toggle("display");
});
