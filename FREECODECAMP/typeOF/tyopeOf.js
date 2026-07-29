// typeOf = an operator in JavaScript that let you see the data type of a variable or value. Always returns a string indicating the type
//          Checker of the Value whether (number, string, boolean, charr and etc...)

let num = 42;
console.log(typeof num) // prints number

let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn)

// Using typeof is useful when you're debugging or trying to understand what kind of data you're working with in your code.

// null = Represented as a special type of object, leading to the unexpected result.

let exampleVariable = null;
console.log(typeof exampleVariable) // output is Object