console.log("Hello World! Welcome in 03.ALGOS-serie3 folder.");
console.log("=============================================");
//#region 00
// console.log("Exercice 00: ");
// console.log("===============");
// function oddishOrEvenish(number) {
//     let str = number.toString();
//     let sum = Array.from(str).reduce((previous, current) => previous += parseInt(current), 0);
//     return sum % 2 === 0 ? "Evenish" : "Oddish";
// }
// console.log(oddishOrEvenish(43));
// console.log(oddishOrEvenish(373));
// console.log(oddishOrEvenish(4433));
//#endregion

//#region 01
// console.log("Exercice 01: ");
// console.log("===============");
// function getTotalPrice(groceries) {
//     let totalPrice = 0;
//     for (const grocery of groceries) {
//         totalPrice += grocery['price'] * grocery['quantity'];
//     }
//     return totalPrice.toFixed(2);
// }   
// console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Cereals", quantity: 1, price: 2.5 },
//   ])
// );
// console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]));
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Eggs", quantity: 12, price: 0.1 },
//     { product: "Bread", quantity: 2, price: 1.6 },
//     { product: "Cheese", quantity: 1, price: 4.5 },
//   ])
// );
// console.log(
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.1 },
//     { product: "Lollipop", quantity: 1, price: 0.2 },
//   ])
// );
//#endregion

//#region 02
// console.log("Exercice 02: ");
// console.log("===============");
// function reverseOdd(str) {
//     let retval = '';
//     let arr = str.split(' ');
//     for (const word of arr) {
//         retval += word.length % 2 !== 0 ? word.split('').reverse().join('') : word;
//         retval += ' ';
//     }
//     retval.trim();
//     return retval;
// }
// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two three four"));
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
//#endregion

//#region 03
// console.log("Exercice 03: ");
// console.log("===============");
// function isSmooth(str) {
//     let smooth = true;
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i].slice(-1).toLowerCase() !== arr[i+1].slice(0, 1).toLowerCase()) {
//             smooth = false;
//         }
//     }
//     return smooth;
// }
// console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
// console.log(isSmooth("Someone is outside the doorway"));
// console.log(isSmooth("She eats super righteously"));
//#endregion

//#region 04
// console.log("Exercice 04: ");
// console.log("===============");
// function sevenBoom(arr) {
//     return arr.join('').includes('7') ? "Boom!" : "there is no 7 in the array";
// }
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));
//#endregion

//#region 05
// console.log("Exercice 05: ");
// console.log("===============");
// function convert(temperature) {
//     if (temperature.slice(-1) === 'C') {
//         let fahrenheit = Math.round(parseFloat(temperature.substring(0, temperature.length - 1)) * 9 / 5 + 32);
//         return fahrenheit.toString() + '°F';
//     }
//     else if (temperature.slice(-1) === 'F') {
//         let celsius = Math.round((parseFloat(temperature.substring(0, temperature.length - 1)) - 32) * 5 / 9);
//         return celsius.toString() + '°C';
//     }
//     else {
//         return "Error";
//     }
// }
// console.log(convert("35°C"));
// console.log(convert("19°F"));
// console.log(convert("33"));
//#endregion

//#region 06
// console.log("Exercice 06: ");
// console.log("===============");
// function findBrokenKeys(expected, given) {
//     let retval = new Set();
//     let strLength = expected.length;
//     let expectedArr = expected.split('');
//     let givenArr = given.split('');
//     for (let i = 0; i < strLength; i++) {
//         if (expectedArr[i] !== givenArr[i]) {
//             retval.add(expectedArr[i]);
//         }
//     }
//     return Array.from(retval);
// }
// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));
//#endregion