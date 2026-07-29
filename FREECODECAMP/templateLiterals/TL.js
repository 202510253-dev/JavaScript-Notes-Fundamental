// Template Literals = Uses backsticks (``) which allows for string manipulations, including embedding varialbles directly inside a string, a feature knowns as string interplocation.
//                    It makes easier to create strings that span multiple lines or include expressions (like variables or even JS code) directly within the string

const name = "Alice"
const greeting =`Hello, ${name}!`;
console.log(greeting);

// The ${name} syntax is an example of string interpolation, where the value of the variable (name) is directly inserted into the string
// Instead of using (+) operator. String interpolation allows you to embed variables and expressions inside a string. 

const name2 = "Jai"
const age = 20
const message = "My name is " + name2 + " and I am " + age + " year old."
console.log(message)

const name3 = "jai"
const age2 = 20
const message2 = `My name is ${name2} and I am ${age2} years old.`
console.log(message2)

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 