//#region 04b.Practice
// var a = "3";
// var b = "8";

// /***********Do not change the code above 👆*******/
// //Write your code here :
// const temp = a;
// a = b;
// b = temp;
// /***********Do not change the code below 👇*******/
//#endregion

//#region 06b.Practice
// // DON'T TOUCH THIS LINE!
// const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// // YOUR CODE BELOW THIS LINE:
// let whisper = message.trim().toLowerCase();
// console.log(whisper);
// console.log(whisper.charAt(whisper.length - 1));


// // DON'T TOUCH THIS LINE! (please)
// const word = "skateboard"; //Don't change this line!

// // YOUR CODE BELOW THIS LINE:
// const indexOfBoard = word.indexOf("board");
// const facialHair = word.slice(indexOfBoard, word.length).replace("o", "e");
// console.log(facialHair);
//#endregion

//#region 07.Numbers
// let roll = Math.random();
// console.log(Math.floor(roll * 11));
// console.log(roll * 4 + 1);
//#endregion

//#region 08.Practice
// let userName = prompt("What is your name?");
// let age = prompt("How old are you?");
// let place = prompt("Where do you live?");
// alert(`Hello ${userName}, you know for sure that ${age} years old is still very young! Especially when you live in ${place}`);

// let userPrice = parseFloat(prompt("Write the price without VAT"));
// alert(userPrice + userPrice * 0.21);

// let radius = parseFloat(prompt("Write the radius of the circle :"));
// alert(Math.PI * (radius ** 2));

// let number1 = parseFloat(prompt("First number :"));
// let number2 = parseFloat(prompt("Second number :"));
// alert(number1 + number2);

//#endregion

//#region 11b.Exercise
// const userName = prompt("Hi, what's your name?");
// let userChoice;
// while (userChoice !== "cat" && userChoice !== "dog")
// {
//     userChoice = prompt(`Ok ${userName}, are you more of a cat person or a dog person? Please, write only "cat" or "dog"`).trim().toLowerCase();
// }
// alert(userChoice === "cat" ? "Yay! Cats are awesome!" : "I guess dogs are ok too.");


// const mystery = "P7____"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//   console.log("YOU GOT IT!!!");
// } else {
//   console.log("TRY AGAIN");
// }

// let age = prompt("How old are you?");
// if (age < 18)
// {
//     alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if (age == 18)
// {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else
// {
//     alert("Powering On. Enjoy the ride!");
// }

// let userFavoriteFruit = prompt("What is your favorite fruit?").toLowerCase();
// switch (userFavoriteFruit)
// {
//     case "bananas":
//         alert("I like bananas as well.")
//         break;
//     case "strawberry":
//         alert("I LOVE strawberries!!");
//         break;
//     case "grape":
//         let userFavoriteGrape = prompt("What are your favorite grapes? Purple or green?").toLowerCase();
//         if (userFavoriteGrape === "purple")
//         {
//             alert("Oh no... I don't like purple grapes :x");
//         }
//         else if (userFavoriteGrape === "green")
//         {
//             alert("Green grapes are ok...");
//         }
//         else
//         {
//             alert("I don't understand.");
//         }
//         break;
//     default:
//         alert(`I don't understand the word ${userFavoriteFruit}`)
// }



//#endregion

//#region 12b. Exercises

// const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!
// // YOUR CODE BELOW HERE:
// leaderboard[1] = "Luna";
// leaderboard[leaderboard.length - 1] = "Draco";
// console.log(leaderboard);

// const initialArray = [
//     null,
//     true,
//     ["Apple", "two", undefined],
//     false,
//     ["three", "BeCode"],
//     4,
//     "I am a big bad wolf",
//     ["one"],
// ];

// let finalArray = [ initialArray[7][0], initialArray[2][1], initialArray[4][0] ];
// console.log(finalArray);

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:
// planets.shift();
// planets.push("Saturn");
// planets.unshift("Mercury");
// console.log(planets);
//#endregion


//#region MyPersonalLaboratory
// console.log("a is " + a);
// console.log("b is " + b);

// let number = 32;
// const myName = "Philémon";
// let myUndefined;
// let myNull = null;

// console.log(typeof number);
// console.log(typeof myName);
// console.log(typeof myUndefined);
// console.log(typeof myNull);
// console.log(myName.length);
// console.log("Philémon".slice(0,4));
// console.log(myName.replace("Ph", "B"));
// console.log(myName.toLowerCase());
// console.log(myName.indexOf("é"));
// const promenade = "Je marchai dans la forêt et trouvai quelques champignons";
// console.log(promenade.indexOf("forêt"));
// console.log(promenade.slice(0, 19));
// console.log("Marco".concat("Polo"));
// let myReplace = "Ball Billy Bull";
// console.log(myReplace.replace("ll", "ss"));
// let introduction = `Hello, my name is ${myName} and I m ${number} years old.`;
// console.log(introduction.concat(" Over"));
// let myNumber = 5.379453;
// console.log(myNumber.toFixed(2));
// console.log("9" / 3);
// console.log(5.3456532.toFixed(3));
// console.log((3.142816).toFixed(3));
// console.log(parseFloat("3.84"));
// console.log(parseInt("3.84"));
// let x = toString(42);
// console.log(typeof x);
// console.log(5e-4);
// console.log(!!0);
// let myArray = [0, 1, 2];
// myArray[3] = 3;
// myArray[6] = 6;
// console.log(myArray);
// console.log(myArray[4]);
// arr = ["Apple", "Orange", "Kiwi", "Bananas", "Grapes"];
// console.log(arr.slice(1, 4));
// let arr = [1, 2, 3, 4, 5];
// let deletedData = arr.splice(2, 2, "test");
// console.log(arr);
// console.log(deletedData);
// let arr = [5, 3, 8, 1, 100];
// arr.sort();
// console.log(arr);
// arr = [1,2,2,2,1]
// let aggregate = arr.reduce((accumulator, currentVal) => {
//     return accumulator * currentVal
// }, 1);
// console.log(aggregate);
// let numbers = [1, 5, 1, 5, 2];
// let isThereOneEven = numbers.some(
//     (x) => x % 2 === 0
// );
// console.log(isThereOneEven);
// let areThereOnlyOdd = numbers.every(
//     (x) => x % 2 !== 0
// );
// console.log(areThereOnlyOdd);
// let theFirstGreaterThan1 = numbers.find(
//     (x) => x > 1
// );
// console.log(theFirstGreaterThan1);
// let filtered = numbers.filter(
//     (x) => x > 2
// );
// console.log(filtered)
// let plus2 = numbers.map(
//     (x) => x + 2
// );
// console.log(plus2);
// let includes3 = numbers.includes(3);
// console.log(includes3);
// let myArray = ["Pomme", "Poire", "Orange", "Raisin"];
// let myString = myArray.join(" + ");
// console.log(myString);
// myArray.reverse();
// console.log(myArray);
// let mySlice = myArray.slice(1, 3);
// console.log(mySlice);




//#endregion
