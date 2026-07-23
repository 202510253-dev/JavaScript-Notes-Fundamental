// arrow function = a concise way to write function expressions good for simple function that you 
// use only once (parameters) => some code

//function hellow() { 
//    console.log("Hellow")
//}
// THIS IS HOW WE TREAT THE BASIC EXECUTION OF FUNCTION OR WE CALL IT, FUNCTION EXPRESSION
//hellow();

//const hellow = () => console.log("Hellow");

//hellow();

// SETING UP ARGUMENTS USING PARAMETER

//const hellow = (name) => console.log(`Hellow ${name}`);

//hellow("bro");

// USING MULTIPLE ARGUMENTS WITH => 

//const hellow = (name, age) => {
//    console.log(`Hellow ${name}`)
//    console.log(`You are ${age} years old`)
//};

//hellow("bro", 25);

// ==============================================
//setTimeout(hello, 3000);

//function hello() {
//    console.log("Hello") //THIS IS THE TRADITIONAL WAY OF USING CALLBACK, BUT WE CAN YOU ARROWHEAD FOR IT
//}

//setTimeout(function () {  // EXPRESSION 
//    console.log("Hello");
//}, 3000);

//setTimeout(() => console.log("Hello"), 3000); // ARROWHEAD WITH CALLBACK

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbs = numbers.filter((element) => element % 2 === 0);
const oddNumbs = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNumbs);
console.log(oddNumbs);
console.log(total);