// includes() = Chcking if user's input includes a specific word of character before performing some action.
//            = Used to check if a string contains a substring. (true or false)

let phrase = '"JavaScript is awesome';
let result = phrase.includes('JavaScript');
console.log(result)

// The word awesome is found within the string JavaScript is awesome, so the includes() method returns true
// ALSO A CASE SENSITIVE


let text = "Hello, Javascript world!";
let result2 = text.includes("Javascript");
console.log(result2)

// What does the includes() method return when a substring is found in a string?
// --> It returns true

