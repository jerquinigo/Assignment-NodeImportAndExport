const mathMod = require("./math-module.js");
const strMod = require("./strings-module.js");
let sum = mathMod.sum;
let divide = mathMod.divide;
let square = mathMod.square;

let firstLetter = strMod.stringFirstLetter
let reverseString = strMod.reverseString
let targetString = strMod.targetString;

console.log(sum(2, 5), "the sum");
console.log(divide(20, 10), "the divide");
console.log(square(5), "the square");

console.log(firstLetter("hello"));
console.log(reverseString("hello"));
console.log(targetString("hello", "l"));
