const btnHello = document.querySelector("button");
const btnGoodbye = btnHello.nextElementSibling;

btnHello.addEventListener("click", () => alert("Oh my God ! You again !!!"));
btnGoodbye.addEventListener("click", () =>
  alert("Thank God ! I thought you'd' never leave !")
);
