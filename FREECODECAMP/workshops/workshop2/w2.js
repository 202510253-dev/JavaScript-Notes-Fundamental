// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// console.log("Hello! I'm your coding fun fact guide!")

// const botName = "Alex"
// let botLocation = "Olongapo"
// let favoriteLanguage = "JavaScript"

// console.log(`My name is ${botName} and I live on ${botLocation}`)
// console.log(`My favorite programming language is ${favoriteLanguage}`)

// let codingFact = `She sucks at ${favoriteLanguage}`
// console.log(codingFact)
// codingFact = `${favoriteLanguage} is still her favorite Languange`
// console.log(codingFact)
// console.log(`It was fun sharing these facts with you. Goodbye! ${botName} from ${botLocation}.`)

// THIS IS USING template literal

// --- Without template literal and Catenation Only ---

// console.log("Hello! I'm your coding fun fact guide!")

// const botName = "Alex"
// let botLocation = "Olongapo"
// let favoriteLanguage = "JavaScript"


// console.log("My name is " + botName + " and I live on " + botLocation)
// console.log("My favorite programming language is " + favoriteLanguage)

// let codingFact = `She sucks at ` + favoriteLanguage
// console.log(codingFact)
// codingFact = favoriteLanguage +  ` is still her favorite Languange`
// console.log(codingFact)
// console.log(`It was fun sharing these facts with you. Goodbye! ` + botName + ` from ` + botLocation + `.`)

// === Catenation Shit === 

console.log("Hello! I'm your coding fun fact guide!")

const botName = "Alex"
let botLocation = "Olongapo"
let favoriteLanguage = "JavaScript"

console.log("My name is " + botName + " and I live on " + botLocation + ".")
console.log("My favorite programming language is " + favoriteLanguage + ".")

let codingFact = "She sucks at " + favoriteLanguage
console.log(codingFact)                      

codingFact = favoriteLanguage + " is still her favorite Language"
console.log(codingFact)                     

codingFact = favoriteLanguage + " is also perfect for building web apps!"
console.log(codingFact)                      

console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".")