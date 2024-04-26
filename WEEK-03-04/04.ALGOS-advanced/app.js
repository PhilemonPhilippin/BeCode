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

//#region 02
// console.log("Exercice 02: ");
// console.log("===============");
// function isPalindrome(text) {
//     let retval = true;
//     text = text.replace(/[^a-zA-Z]/g, '');
//     let textArray = text.split('');
//     let reverseTextArray = textArray.toReversed();
//     for (let i = 0; i < textArray.length; i++) {
//         if (textArray[i].toLowerCase() !== reverseTextArray[i].toLowerCase()) {
//             retval = false;
//         }
//     }
//     return retval;
// }
// // Test cases :
// //===========================
// console.log(isPalindrome("kayak"));
// console.log(isPalindrome("race car"));
// console.log(isPalindrome("hello world"));
// console.log(isPalindrome("Madam, I'm Adam"));
// console.log(isPalindrome("deified"));
// console.log(isPalindrome("UFO tofu"));
// console.log(isPalindrome("Sir, I demand, I am a maid named Iris."));
// console.log(isPalindrome("Maybe it ! is & true , , ? maybe it is not. Let's see, yep."));
//#endregion

//#region 03
// console.log("Exercice 03: ");
// console.log("===============");
// function caesarCipher(str, num) {
//     let retval = [];
//     str = str.toLowerCase();
//     // a = 97 à z = 122
//     let strArray = str.split('');
//     for (let i = 0; i < strArray.length; i++) {
//         let charAsciiCode = strArray[i].charCodeAt(0);
//         if (charAsciiCode >= 97 && charAsciiCode <= 122) {
//             let cypherChar;
//             let sum = charAsciiCode + num;
//             if (sum > 122) {
//                 let cypherCharAsciiCode = sum - 26;
//                 cypherChar = String.fromCharCode(cypherCharAsciiCode);
//             }
//             else if (sum < 97) {
//                 let cypherCharAsciiCode = sum + 26;
//                 cypherChar = String.fromCharCode(cypherCharAsciiCode);
//             } else {
//                 cypherChar = String.fromCharCode(sum);
//             }
//             retval.push(cypherChar);
//         }
//         else {
//             retval.push(strArray[i]);
//         }
//     }
//     return retval.join('');
// }
// // Test cases :
// //===========================
// console.log(caesarCipher("zoo keeper", 2));
// console.log(caesarCipher("bqq mggrgt", -2));
// console.log(caesarCipher("My name is Henrique", 3));
//#endregion

//#region 04
// console.log("Exercice 04: ");
// console.log("===============");
// function reverseString(str) {
//     let retval = str.split(' ');
//     return retval.map((word) => word.toLowerCase().split('').reverse().join('')).join(' ');
// }
// console.log(reverseString("This is a string of words"));
//#endregion

//#region 05
console.log("Exercice 05: ");
console.log("===============");


//#endregion


