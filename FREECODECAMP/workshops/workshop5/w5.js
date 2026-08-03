// Building a String inspector
// includes() and slice() 

const message = "Welcome to freeCodeCamp!";
const fccSentence = "freeCodeCamp";

const greetingWord = message.slice(0, 7)
const platform = message.slice(11, 23)
const endPunctuation = message.slice(-1)
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
const hasJavaScript = fccSentence.includes("JavaScript");
const hasLowercaseFCC = fccSentence.includes("freecodecamp");


console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);
console.log("Here are some examples of the slice() method:")

console.log(`The word "freeCodeCamp" was sliced from the message.`)
console.log(`The first word is "${greetingWord}".`);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().")