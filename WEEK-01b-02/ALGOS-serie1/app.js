console.log("Hello World! Welcome in ALGOS-serie1 folder.");
console.log("=============================================");
//#region 00
// console.log("Exercice 00: ");
// console.log("===============");
// function makesTen(x, y) {
//     if (Number.isInteger(x) && Number.isInteger(y)) {
//         return x === 10 || y === 10 || x + y === 10;
//     }
//     else {
//         return null;
//     }
// }
// console.log(makesTen(9, 10));
// console.log(makesTen(9, 9));
// console.log(makesTen(1, 9));
//#endregion

//#region 01
// console.log("Exercice 01: ");
// console.log("===============");
// function calcAge(ageInYears) {
//     if (Number.isInteger(ageInYears) && ageInYears >= 0) {
//         return ageInYears * 365;
//     }
//     else {
//         return null;
//     }
// }
// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));
//#endregion

//#region 02
// console.log("Exercice 02: ");
// console.log("===============");
// function addUp(x) {
//     let retval;
//     if (Number.isInteger(x) && x >= 1 && x <= 1000) {
//         if (x % 2 === 0) {
//             retval = x + (x - 1) * (x / 2);
//         }
//         else {
//             retval = x + x * Math.floor(x / 2);
//         }
//         // Trouver l'algorithme optimal
//         // x = 2 && retval = 2 + 1 * 1 == 3
//         // x = 3 && retval = 3 + 3 * 1 == 6 === x % 2 !== 0 DONC x + x * INT(x/2)
//         // x = 4 && retval = 4 + 3 * 2 == 10 === x % 2 === 0 DONC x + (x-1) * (x/2)
//         // x = 5 && retval = 5 + 5 * 2 == 15 === x % 2 !== 0 DONC x + x * INT(x/2)
//         // x = 6 && retval = 6 + 5 * 3 == 21 === x % 2 === 0 DONC x + (x-1) * (x/2)
//         // x = 7 && retval = 7 + 7 * 3 == 28 etc.
//         // x = 8 && retval = 8 + 7 * 4 == 36 etc.
//         // x = 9 && retval = 9 + 9 * 4 == 45 etc.
//     }
//     else {
//         retval = null;
//     }
//     return retval;
// }
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));
//#endregion

//#region 03
// console.log("Exercice 03: ");
// console.log("===============");
// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)];
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
//#endregion

//#region 04
// console.log("Exercice 04: ");
// console.log("===============");
// function detectWord(str) {
//     return str.replace(/[A-Z]/g, '');
// }
// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
//#endregion

//#region 05
// console.log("Exercice 05: ");
// console.log("===============");
// function sortDrinkByPrice(drinks) {
//     return drinks.sort(compareByPrice);
// }
// function compareByPrice(a, b) {
//     if (a['price'] < b['price']) {
//         return -1;
//     }
//     else if (a['price'] > b['price']) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(
//     sortDrinkByPrice([
//     { name: "water", price: 3 },
//     { name: "coke", price: 8 },
//     { name: "lemonade", price: 10 },
//     { name: "lime", price: 10 },
//     { name: "vodka", price: 17 },
//     ])
// );
//#endregion

//#region 06
// console.log("Exercice 06: ");
// console.log("===============");
// function animals(chickens, cows, pigs) {
//     return chickens * 2 + (cows + pigs) * 4;
// }
// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2 ,8));
//#endregion

//#region 07
// console.log("Exercice 07: ");
// console.log("===============");
// function profitableGamble(probability, prize, pay) {
//     return probability * prize > pay;
// }
// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));
//#endregion

//#region 08
// console.log("Exercice 08: ");
// console.log("===============");
// function frames(minutes, FPS) {
//     return minutes * 60 * FPS;
// }
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));
//#endregion

//#region 09
// console.log("Exercice 09: ");
// console.log("===============");
function calculateFuel(distance) {
    let fuelForDistance = distance * 10;
    return fuelForDistance <= 100 ? 100 : fuelForDistance;
}
console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));
//#endregion
