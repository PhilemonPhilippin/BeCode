//// DOM Selectors
// const mainHeading = document.getElementById("main-heading");
// mainHeading.style.color = "red";
// const listItems = document.querySelectorAll("li");
// console.log(listItems);
// const arr = Array.from(listItems);
// console.log(arr);

//// DOM Styling
// mainHeading.style.fontSize = "3rem";

// DOM Generating elements
// const myList = document.querySelector("ul");
// const myItem = document.createElement("li");

// myList.appendChild(myItem);
// myItem.remove();

// // DOM Elements content
// const firstListItem = document.querySelector(".list-item");
// let itemText = firstListItem.innerText;

// const newItem = document.createElement("li");
// newItem.classList.add("list-item");
// newItem.innerText = itemText;

// const list = document.querySelector("ul");
// list.appendChild(newItem);

// const items = document.getElementsByClassName("list-item");
// const arr = Array.from(items);

// arr.forEach((item, i) => {
//   item.style.color = "purple";
//   if (i === arr.length - 1) {
//     item.style.color = "gold";
//   } else if (item.innerText.includes("Hall")) {
//     item.innerHTML = `Annie <span class="red">Hall</span>`;
//     const reds = document.querySelectorAll(".red");
//     reds.forEach((x) => (x.style.color = "red"));
//   }
// });

////DOM Attributes & classes
// setAttribute("id", "my-awesome-id"); // In this case, we give as an argument the name of the attribute and its value.
// getAttribute("id"); // Here, we specify we want to retrieve the id of the element.
// removeAttribute("id"); // Duh! You get it...

// const parag = document.querySelector("p");
// console.log(parag.classList);
// parag.classList.add("hello");
// parag.classList.add("goodbye");
// parag.classList = "one two three";
// parag.classList.remove("two");
// console.log(parag.classList.contains("one")); // Returns true
// console.log(parag.classList.contains("two")); // Returns false
// document.querySelector("p").classList.toggle("red"); // Will remove red from the classes of p
// // If you do it again :
// document.querySelector("p").classList.toggle("red"); // It will add back the class red

// const block = document.querySelector(".block");
// console.log(block.dataset);
// if (block.dataset.direction === "top" && block.dataset.duration === "400") {
//   // Do something nice !
// }

// const parent = document.querySelector(".parent");
// parent.addEventListener("click", (e) => {
//   if (e.target.innerText === "One") {
//     alert("You clicked the first button");
//   }

//   if (e.target.innerText === "Two") {
//     alert("Elodie loves cats");
//   }

//   if (e.target.innerText === "Three") {
//     alert("I am so happy !");
//   }
// });
// const myEvent = parent.addEventListener("click", btnClicked);
// function btnClicked(e) {
//   console.log(e.target.innerText);
// }

// parent.removeEventListener("click", btnClicked);
