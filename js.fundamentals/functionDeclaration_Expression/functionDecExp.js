// function decleration = define a reusable block of code that perform a specific task

//function hello() {
//    console.log("hello");
//}
// function expression = a way to define function as values or variable

//const hello = function () {
//    console.log("hello");
//}
//hello();

//setTimeout(hello, 5000); // translate to 3 sec, it means, it was deliberately delayed

//setTimeout(function () {
//    console.log("Hello") // PASSED THE ENTIRE FUNCTION AS ARGUMENT OR TREATED IT AS A VALUE!!
//}, 5000);


// =====================================

const numbers = [1, 2, 3, 4, 5, 6];

//const squares = numbers.map(square);

//console.log(squares)
//function square(element) {
//    return Math.pow(element, 2); NOW, TRY TO TREAT ALL OF THIS AS A FUNCTION ISNTEAD 
//}

const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squares)

const cubes = numbers.map(function (element) {
    return Math.pow(element, 3);

});
const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;

});

const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;

});
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element
});

console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

// JavaScript treats functions as values. This means a function can be handled exactly like a string, a number, or a boolean.
// You can pass a function into another function just like you pass 5 or "hello".





