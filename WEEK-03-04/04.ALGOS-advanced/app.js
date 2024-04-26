console.log("Hello World! Welcome in 04.ALGOS-ADVANCED folder.");
console.log("=============================================");
//#region 00
// console.log("Exercice 00: ");
// console.log("===============");
// function fizzBuzz(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(20);
//#endregion

//#region 01
// console.log("Exercice 01: ");
// console.log("===============");
// function ransomNote(noteText, magazineText) {
//     let retval = true;
//     let magazineArray = magazineText.split(' ');
//     let noteArray = noteText.split(' ');
//     let noteArrayWithCount = convertArrayToArrayWithCount(noteArray);
//     let magazineArrayWithCount = convertArrayToArrayWithCount(magazineArray);
//     for (let i = 0; i < noteArrayWithCount.length; i++) {
//         let isWordIncludedWithAdequatCount = false;
//         for (let j = 0; j < magazineArrayWithCount.length; j++) {
//             if (
//             noteArrayWithCount[i]["word"] ===
//                 magazineArrayWithCount[j]["word"] &&
//             noteArrayWithCount[i]["count"] <= magazineArrayWithCount[j]["count"]
//             ) {
//             isWordIncludedWithAdequatCount = true;
//             }
//         }
//         if (isWordIncludedWithAdequatCount === false) {
//             retval = false;
//         }
//     }
//     return retval;
// }

// function convertArrayToArrayWithCount(arr) {
//     let countingArray = [];
//     for (let i = 0; i < arr.length; i++) {
//     if (countingArray.some((obj) => obj["word"] === arr[i]) === false) {
//         countingArray.push({ word: arr[i], count: 1 });
//     } 
//     else {
//         let indexOfDuplicate = countingArray.findIndex((x) => x["word"] === arr[i]);
//         countingArray[indexOfDuplicate]["count"] += 1;
//     }
//     }
//     return countingArray;
// }
// // Test cases :
// //===========================
// console.log(ransomNote(
//   "this is a secret note to you from a secret admirer",
//   "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
// ));

// console.log(
//   ransomNote(
//     "this is a note to you from a secret admirer",
//     "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
//   )
// );

// console.log(ransomNote("my magazine my many words", "my magazine has many words and many letters wow it is my magazine"))

// console.log(ransomNote("my magazine my many words my", "my magazine has many words and many letters wow it is my magazine"));
//#endregion