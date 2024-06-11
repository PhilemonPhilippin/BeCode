const searchButton = document.querySelector(".btn-search");

searchButton.addEventListener("click", searchMeals);

async function searchMeals() {
  try {
    const uri =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
    let response = await fetch(uri);
    console.log(response);
    let data = await response.json();
    console.log(data);
  } catch (ex) {
    console.log(ex);
  }
}

// async function searchMeals() {
//   const input = document.querySelector("#search");
//   const searchString = input.value;
//   const response = await getMeals(searchString);
//   console.log(response);
// }

// async function getMeals(searchString) {
//   const uri = `www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
//   const response = await fetch(uri, {
//     method: "GET",
//     headers: {
//       "api-key": "1",
//     },
//   });
//   const meals = await response.json();
//   console.log(meals);
// }
