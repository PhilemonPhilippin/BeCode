console.log("Hello World! Welcome in 05.ALGOS-Optional folder.");
console.log("=============================================");
//#region 01
// console.log("Exercice 01: ");
// console.log("===============");
// const removeDuplicates = arr => Array.from(new Set(arr));
// console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// console.log(removeDuplicates([true, true, false, true, true, false]));
//#endregion

//#region 02
// console.log("Exercice 02: ");
// console.log("===============");
// const capitalize = str => str[0].toUpperCase() + str.slice(1);
// console.log(capitalize("belgium"));
// console.log(capitalize("brazil"));
// console.log(capitalize("brussels"));
//#endregion

//#region 03
// console.log("Exercice 03: ");
// console.log("===============");
// const dayDif = (day1, day2) => Math.abs(day1 - day2) / (1000 * 60 * 60 * 24);
// console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")));
//#endregion

//#region 04
// console.log("Exercice 04: ");
// console.log("===============");
// const average = (...args) => args.reduce((aggregate, current) => aggregate = aggregate + current, 0) / args.length;
// console.log(average(1, 2, 3, 4));
//#endregion

//#region 05
// console.log("Exercice 05: ");
// console.log("===============");
// const getSmallest = arr => Math.min(...arr);
// console.log(getSmallest([13, 7, 11, 3, 9, 15, 17]));
//#endregion

//#region 06
// console.log("Exercice 06: ");
// console.log("===============");
// const areEqual = (arr1, arr2) => arr1.every((x) => arr2.includes(x));
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 1, 4, 2];
// const arr3 = [1, 2, 3];
// console.log(areEqual(arr1, arr2));
// console.log(areEqual(arr1, arr3));
//#endregion

//#region 07
// console.log("Exercice 07: ");
// console.log("===============");
// const randomRGB = () =>
//   `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
//     Math.random() * 256
//   )},${Math.floor(Math.random() * 256)})`;
// console.log(randomRGB());
// console.log(randomRGB());
// console.log(randomRGB());
// console.log(randomRGB());
// console.log(randomRGB());
//#endregion


//#region 08
// console.log("Exercice 08: ");
// console.log("===============");
// // const occurencies = (str, letter) => Array.from(str).reduce((aggregate, current) => aggregate = current === letter ? aggregate + 1 : aggregate, 0);
// const occurencies = (str, letter) => str.match(new RegExp(letter, "g"))?.length ?? 0;

// console.log(occurencies("hello", "l"));
// console.log(occurencies("abracadabra", "a"));
// console.log(occurencies("oups", "z"));
//#endregion


//#region 09
// console.log("Exercice 09: ");
// console.log("===============");
// const onlyPositives = arr => arr.reduce((aggregate, current) => aggregate = current > 0 ? aggregate + current : aggregate, 0);
// console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// console.log(onlyPositives([-3, -4, -2]));
//#endregion

//#region 10
// console.log("Exercice 10: ");
// console.log("===============");
// const scanAndFind = (arr, obj) => arr.filter((x) => x[Object.keys(obj)] === obj[Object.keys(obj)]);
// console.log(scanAndFind(
// [
//     {
//         firstName: "Vito",
//         lastName: "Corleone",
//     },
//     {
//         firstName: "Jon",
//         lastName: "Snow",
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//     },
//     {
//         firstName: "Michal",
//         lastName: "Corleone",
//     },
// ],
// {
// lastName: "Corleone",
// }
// ));
// console.log(scanAndFind(
//     [
//         { fullName: "Roi Baudoin", id: 49762 },
//         { fullName: "Margareth Tatcher", id: 94357 },
//         { fullName: "Barack Obama", id: 76458 },
//         { fullName: "Emmanuel Macron", id: 10687 },
//         { fullName: "Charles de Gaulle", id: 67098 },
//         { fullName: "Boris Johnson", id: 16437 },
//     ],
//     {
//         id: 10687 
//     }
// ));
//#endregion