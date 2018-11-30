
const random  = (val) => {
  return Math.floor(Math.random() * val)
}

const biggestNum = (arr) => {
// points.sort(function(a, b){return a-b});
let newArr = arr.sort(function(a,b){return b - a})
return newArr[0];

}


const shout = (str) => {
  return str.toUpperCase()
}

const addMult = (num1,num2,num3) => {
  return (num1 + num2) * num3
}

module.exports = {
  random: random,
  biggestNum: biggestNum,
  shout: shout,
  addMult:addMult,

}
