const grid = document.querySelector(".grid");

const pictures = [];

for (let i = 1; i <= 9; i++) {
  const img = document.createElement("img");
  const imgPath = `./picture-${i}.jpg`;
  pictures.push(imgPath);
  img.setAttribute("src", imgPath);
  const anchor = document.createElement("a");
  anchor.appendChild(img);
  anchor.setAttribute("data-fslightbox", `lightbox`);
  anchor.setAttribute("href", imgPath);
  grid.appendChild(anchor);
}
