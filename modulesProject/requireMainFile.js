const mathModule = require("./moduleProject.js")

// module.exports = {
//   loopElements:loopElements,
//   biggestNum: biggestNum,
//   shout: shout,
//   addMult:addMult,
//
// }
let random = mathModule.random;
let biggestNum = mathModule.biggestNum;
let shout = mathModule.shout;
let addMult = mathModule.addMult;


  console.log(random(5));
  console.log(biggestNum([1,2,3,4,5]));
  console.log(shout("hello"));
  console.log(addMult(6,5,4));
