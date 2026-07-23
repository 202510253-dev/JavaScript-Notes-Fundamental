// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//               [] = to perform array destructuring
//               {} = to perform object destructuring
//               5 examples

// =========== Example 1 ===========
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

// WE JUST SWAPPED THEM USING DESTRUCTURING
console.log(a);
console.log(b);

// =========== Example 2 ===========
// SWAP 2 ELEMENTS IN AN ARRAY


const colorS = ["red", "green", "blue", "black", "white"];

[colorS[0], colorS[4]] = [colorS[4], colorS[0]];

console.log(colorS);        // just direct already, because we have already classified it with constructor

// =========== Example 3 ===========
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

// =========== Example 4 ===========
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",

}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
    job: "Unemployed",

}

//const { firstName, lastName, age, job } = person1;
const { firstName, lastName, age, job } = person2;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); // patrick has no job so it's undefined

// =========== Example 4 ===========
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);


}
const person01 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",

}
const person02 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
    job: "Unemployed",

}

displayPerson(person02);


