const stringFirstLetter = (str) => {
return str.slice(0,1)
}


const reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const targetString = (str, target) => {
  let strsplit = str.split("");
  console.log(strsplit);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      return target + "" + "is " + true;
    }
  }
  return false;
};

module.exports ={
  stringFirstLetter:stringFirstLetter,
  reverseString:reverseString,
  targetString:targetString,

}
