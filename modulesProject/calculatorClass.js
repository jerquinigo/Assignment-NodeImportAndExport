let currVar = {};
let finAnswer;


 class Calc{
  constuctor(){

  }
  add(num1, num2){
    return num1 + num2
  }

  subtract(num1, num2){
    return num1 - num2
  }

  multiply(num1, num2){
    return num1 * num2
  }

  divide(num1, num2){
    return num1 / num2
  }
}

let calculator = new Calc()
// console.log(calculator.multiply(5,5));

const storedValues = (e) =>{


   currVar[e.name]= (!isNaN(e.value)) ? parseInt(e.value) : e.value;


}


const calculate =(e) => {
  // console.log(calculator.multiply(5,5))
  // currVar.firstNum;
  if(currVar.operator === "multiply"){
    finAnswer = calculator.multiply(currVar.firstNum,currVar.secNum)

  }

  if(currVar.operator === "divide"){
    finAnswer = calculator.divide(currVar.firstNum,currVar.secNum)
  }

  if(currVar.operator === "add"){
    finAnswer = calculator.add(currVar.firstNum,currVar.secNum)
  }

  if(currVar.operator === "subtract"){
    finAnswer = calculator.subtract(currVar.firstNum,currVar.secNum)
  }
  display()

}


const display = () => {
  let divOutput = document.querySelector(".answer")
  divOutput.innerHTML = finAnswer;


}
