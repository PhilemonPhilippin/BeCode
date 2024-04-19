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

//#region 13
// let product = {
//     name: "iPhone 15",
//     inStock: true,
//     price: 1249.90,
//     includedInPackage: ["case", "earphones", "charger"]
// }
// console.log(product.includedInPackage[1]);

// //PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
// };
// //YOUR CODE GOES DOWN HERE:
// let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
// console.log(fullAddress);
//#endregion

//#region 16

// for (let i = 2; i <= 20; i = i+2)
// {
//     console.log(i);
// }
// for (let i = 1; i < 20; i = i + 2) {
//     console.log(i);
// }
// for (let i = 100; i > 0; i = i - 10)
// {
//     console.log(i);
// }
// for (let i = 10; i <= 1000; i = i * 10)
// {
//     console.log(i);
// }

// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
// for (let i = animals.length - 1; i >= 0; i--)
// {
//     console.log(animals[i]);
// }
// const users = [
//   {
//     firstName: "Vito",
//     lastName: "Corleone",
//   },
//   {
//     firstName: "William",
//     lastName: "Wallace",
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//   },
//   {
//     firstName: "Amadeus",
//     lastName: "Mozart",
//   },
//   {
//     firstName: "Barack",
//     lastName: "Obama",
//   },
// ];

// for (let i = 0; i < users.length; i++)
// {
//     console.log(`${i + 1}: My name is ${users[i].firstName} ${users[i].lastName}`);
// }

// const seatingChart = [
//   ["Colas", "Benoit", "Elodie"],
//   ["Sola", "Irina", "Antonino", "Eli"],
//   ["John", "Maryna", "Naike", "Fabrice"],
// ];

// // I can use nested loops to do that :

// for (let i = 0; i < seatingChart.length; i++) {
//     console.log(`ROW #${i + 1}`)
//   const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//#endregion

//#region 18
// let maxNumber;
// do 
// {
//     maxNumber = parseInt(prompt("Enter a max number: "));
// } while (!maxNumber);
// console.log("Max number is : " + maxNumber)
// let numberToGuess = Math.floor(Math.random() * maxNumber + 1);
// console.log("Number to guess is : " + numberToGuess);

// let guessAttempt;
// while (guessAttempt !== numberToGuess)
// {
//     do 
//     {
//         guessAttempt = parseInt(prompt("Guess the number!"));
//         if (!guessAttempt) 
//         {
//             alert("Invalid answer. Please, guess the number.");
//         }
//     } while (!guessAttempt);

//     console.log("Guess attempt is : " + guessAttempt);
//     if (guessAttempt < numberToGuess)
//     {
//         alert("You guessed too low. Guess again!");
//     } 
//     else if (guessAttempt > numberToGuess)
//     {
//         alert("You guessed too high. Guess again!");
//     }
//     else
//     {
//         alert("Bravo! You win.");
//     }
// }
//#endregion

//#region 20
// let userMenuChoice = '';
// let toDos = [];
// while (userMenuChoice !== 'quit')
// {
//     do
//     {
//         userMenuChoice = prompt("Choose one option for the to-do : new | list | delete | quit .").trim().toLowerCase();
//     } while (userMenuChoice !== "new" && userMenuChoice !== "list" && userMenuChoice !== "delete" && userMenuChoice !== "quit");
//     switch (userMenuChoice)
//     {
//         case "new":
//             let newToDo = prompt("Which new to-do do you want to add?");
//             toDos.push(newToDo);
//             console.log(`The new to-do '${newToDo}' was added to the list.`);
//             break;
//         case "list":
//             for (let i = 0; i < toDos.length; i++)
//             {
//                 console.log(`${i + 1} : ${toDos[i]}`);
//             }
//             break;
//         case "delete":
//             let toDoToDelete;
//             do
//             {
//                 toDoToDelete = parseInt(prompt("Which to-do do you want to delete?"));
//             } while (toDoToDelete < 1 || toDoToDelete > toDos.length);
//             let toDoDeleted = toDos.splice(toDoToDelete - 1, 1)
//             console.log(`The to-do '${toDoDeleted}' was deleted.`);
//             break;
//     }
// }
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
