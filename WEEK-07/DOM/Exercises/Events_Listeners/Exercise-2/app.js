const btns = document.querySelectorAll("button");
btns.forEach((x) => {
  x.addEventListener("click", function () {
    const parag = this.nextElementSibling;
    parag.classList.toggle("hidden");
    if (parag.classList.contains("hidden")) {
      this.innerText = "Open tab";
    } else {
      this.innerText = "Close tab";
    }
  });
});
