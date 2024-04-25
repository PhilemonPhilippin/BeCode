console.log("Hello World! Welcome in 02.ALGOS-serie2 folder.");
console.log("=============================================");
//#region 00
// console.log("Exercice 00: ");
// console.log("===============");
// function countTrue(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr.reduce((previous, current) => previous = current === true ? previous + 1 : previous, 0);
// }
// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));
//#endregion

//#region 01
// console.log("Exercice 01: ");
// console.log("===============");
// const maxRoll = 6;
// function possibleBonus(myPosition, friendPosition) {
//     if (myPosition >= friendPosition) {
//         return false;
//     }
//     return myPosition + maxRoll >= friendPosition;
// }
// console.log(possibleBonus(3, 7));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(5, 3));
//#endregion

//#region 02
// console.log("Exercice 02: ");
// console.log("===============");
// function num_of_digits(number) {
//     return number.toString().length;
// }
// console.log(num_of_digits(1000));
// console.log(num_of_digits(12));
// console.log(num_of_digits(1305981031));
// console.log(num_of_digits(0));
//#endregion

//#region 03
// console.log("Exercice 03: ");
// console.log("===============");
// function toArray(objectToConvert) {
//     let retval = [];
//     for (const key in objectToConvert) {
//         retval.push([key, objectToConvert[key]]);
//     }
//     return retval;
// }
// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));
//#endregion

//#region 04
// console.log("Exercice 04: ");
// console.log("===============");
// function arrayOfMultiples(num, length) {
//     let retval = [num];
//     let multiplicator = 2;
//     for (let i = 1; i < length; i++) {
//         retval.push(num * multiplicator);
//         multiplicator++;
//     }
//     return retval;
// }
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));
//#endregion

//#region 05
// console.log("Exercice 05: ");
// console.log("===============");
// function removeLeadingTrailing(n) {
//     return parseFloat(n).toString();
// }
// console.log(removeLeadingTrailing("230.000"));
// console.log(removeLeadingTrailing("00402"));
// console.log(removeLeadingTrailing("03.1400"));
// console.log(removeLeadingTrailing("30"));
//#endregion

//#region 06
// console.log("Exercice 06: ");
// console.log("===============");
// function sortIt(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let firstElement = Array.isArray(arr[i]) ? arr[i][0] : arr[i];
//             let secondElement = Array.isArray(arr[j]) ? arr[j][0] : arr[j];
//             if (secondElement < firstElement) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(sortIt([4, 1, 3]));
// console.log(sortIt([[4], [1], [3]]));
// console.log(sortIt([4, [1], 3]));
// console.log(sortIt([[4], 1, [3]]));
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));
//#endregion

//#region 07
// console.log("Exercice 07: ");
// console.log("===============");

//#endregion