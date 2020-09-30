//creates the function


function Calculate (num1, num2) {
  let sum = num1 + num2
  return sum
}

//ask user for numbers

//converts string to number using parseInt

let x = parseInt(prompt("Select a number"))
let y = parseInt(prompt("Select another number"))

let summedNumbers = Calculate(x,y)

console.log(`The sum of ${x} and ${y} is ${summedNumbers}`)

