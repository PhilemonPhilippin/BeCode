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
// console.log("Exercice 05: ");
// console.log("===============");
// function reverseArray(arr) {
//     for (let i = 0; i <= arr.length / 2 - 1; i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(reverseArray([1]));
// console.log(reverseArray([1, 2]));
// console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray([1, 2, 3, 4]));
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));
//#endregion

//#region 06
// console.log("Exercice 06: ");
// console.log("===============");
// function returnEveryPair(numArray, sum) {
//     let retval = [];
//     for(let i = 0; i < numArray.length - 1; i++) {
//         for (let j = i + 1; j < numArray.length; j++) {
//             if (numArray[i] + numArray[j] === sum) {
//                 retval.push([numArray[i], numArray[j]]);
//             }
//         }
//     }
//     return retval;
// }
// console.log(returnEveryPair([1, 6, 4, 5, 3, 3], 7));
// console.log(returnEveryPair([1, 2, 3, 2, 1, 4, 8], 5));
// console.log(returnEveryPair([1, 2, 3, 2, 1, 4, 8], 4));
// console.log(returnEveryPair([1, 3, 2, 2, 0], 3));
//#endregion

// #region 07
// console.log("Exercice 07: ");
// console.log("===============");
// // Avec récursivité.
// function fibonacci(num, arr = [ 0,1 ], start = 0) {
//   // validation of num
//   if (num === 0) {
//     return [];
//   }
//   else if (num === 1) {
//     return [0];
//   }
//   else if (num === 2) {
//     return arr;
//   }
//   // fibonacci really starts here
//   if (start + 1 === num - 1) {
//     return arr;
//   } else {
//     arr.push(arr[start] + arr[start + 1]);
//     return fibonacci(num, arr, start + 1);
//   }
// }

// // Avec récursivité mais sans changer les paramètres
// function fibonacci(num) {
//   // validation of num
//   if (num === 0) {
//     return [];
//   }
//   else if (num === 1) {
//     return [0];
//   }
//   else if (num === 2) {
//     return [0, 1];
//   }
//   // fibonacci really starts here
//   function innerFibonacci(num, arr, start) {
//     if (start + 1 === num - 1) {
//       return arr;
//     } else {
//       arr.push(arr[start] + arr[start + 1]);
//       return innerFibonacci(num, arr, start + 1);
//     }
//   }
//   return innerFibonacci(num, arr = [0, 1], start = 0);
// }

// // Avec itération.
// function fibonacci(num) {
//     if (num === 0) {
//         return [];
//     }
//     if (num === 1) {
//         return [1];
//     }
    
//     let retval = [1, 1];
//     for(let i = 2; i < num; i++) {
//         retval.push(retval[i-1] + retval[i-2]);
//     }
//     return retval;
// }
// console.log(fibonacci(4));
// console.log(fibonacci(9));
// console.log(fibonacci(6));
// console.log(fibonacci(2));
// console.log(fibonacci(1));
// console.log(fibonacci(0));
//#endregion

