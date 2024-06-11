const searchButton = document.querySelector(".btn-search");
const grid = document.querySelector(".grid");
const searchResultText = document.querySelector(".search-result-text");

searchButton.addEventListener("click", searchMeals);

async function searchMeals() {
  const input = document.querySelector("#search");
  const searchString = input.value;
  const response = await getMeals(searchString);
  updateGrid(response);
  updateSearchResultText(searchString);
}

function updateSearchResultText(text) {
  searchResultText.innerText = `These are the results for "${text}" :`;
}

function updateGrid(meals) {
  meals.forEach((meal, index) => {
    const thumb = meal["strMealThumb"];
    let imageElem = document.createElement("img");
    imageElem.src = thumb;
    const div = document.createElement("div");
    div.classList.add(`grid-item-${index}`);
    div.classList.add("grid-item");
    div.appendChild(imageElem);
    grid.appendChild(div);
  });
}

async function getMeals(searchString) {
  const uri = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
  const response = await fetch(uri);
  const json = await response.json();
  return json["meals"];
}
