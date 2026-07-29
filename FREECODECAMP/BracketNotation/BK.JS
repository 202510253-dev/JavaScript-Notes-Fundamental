// Bracket Notation = Strings that are treated as sequences of characters and each character in a string can be accessed using bracket notation.
//                    Allows to retrieve specific character from a string based on its position, which is called its index.
//                    Uses square brackets ([]) and the index of the character you want to access. 

// Index = Is the position of a character within a string, and it is zero-based. 
//        Always starts with [0] and the second is [1]

let greeting = "Hellow";
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[4])
console.log(greeting[5])

console.log(greeting[greeting.length - 3])


let tank = "Leopard";
let firstTwo = tank[0] + tank[1];
let fullWord = tank[0] + tank[1] + tank[2] + tank[3] + tank[4] + tank[5] + tank[6];

console.log(fullWord)

// What does bracket notation allow you to do with strings in JavaScript?
// --> Access specific characters in the string using their index.