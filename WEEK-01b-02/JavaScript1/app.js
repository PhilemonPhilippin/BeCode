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
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper = message.trim().toLowerCase();
console.log(whisper);
console.log(whisper.charAt(whisper.length - 1));


// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
const indexOfBoard = word.indexOf("board");
const facialHair = word.slice(indexOfBoard, word.length).replace("o", "e");
console.log(facialHair);
//#endregion

//#region 07.Numbers
let roll = Math.random();
console.log(Math.floor(roll * 11));
console.log(roll * 4 + 1);
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
const userName = prompt("Hi, what's your name?");
let userChoice;
while (userChoice !== "cat" && userChoice !== "dog")
{
    userChoice = prompt(`Ok ${userName}, are you more of a cat person or a dog person? Please, write only "cat" or "dog"`).trim().toLowerCase();
}
alert(userChoice === "cat" ? "Yay! Cats are awesome!" : "I guess dogs are ok too.");


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



//#endregion
