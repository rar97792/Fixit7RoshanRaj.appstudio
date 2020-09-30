//string form

let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

let upperCaseString = quoteString.toUpperCase()

let authorString = "-Henry Ford"

let completeString = quoteString + " " + authorString

let found = completeString.includes("Henry")

if (found = true) {
  console.log("Henry was in the quote string")
  } else { 
  console.log("Henry was NOT in the quote string")
  }

secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

let lowerCaseString = completeString.toLowerCase()


let userPrompt = parseInt(prompt("Select a Number."))
let newNumber = 10 + userPrompt
alert(newNumber)

console.log(`The number ${userPrompt} + 10 is ${newNumber}`)

