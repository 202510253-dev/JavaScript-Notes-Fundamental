// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)

let numbers = [1, 2, 3, 4, 5];
//let maximum = Math.max(numbers); can't put array exactly like this

let maximum = Math.max(...numbers); // We use the (...) or spread operator here 
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// DO IT WITH STRINGS

let username = "elijah";

//let letters = [...username];
let letters = [...username].join("-"); // e-l-i-j-a-h


console.log(letters); // (6) ['e', 'l', 'i', 'j', 'a', 'h'] 

let fruits = ["apple", "orange", "banana"];
let newFruit = [...fruits];
let vegetables = ["Carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // this combined and add new

//let foods = [...fruits, ...vegetables];

console.log(foods); // combined them both in one 
console.log(fruits);
console.log(newFruit);  // IDENTICAL




