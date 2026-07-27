// What is String Concatenation, and How Can You concatenate Strings with Variables? 
// Concatenation = Combining or Joining pieces of tet together is called string concatenation.
//                usually focues on using + operator, the += operator, and the concat() method.

// ------------- (+) Operator is one of the simplest and most frequently used method to concatenate strings. -------------
// It allows you to join multiple strings or combine strings with variables that hold text. 
let firstName = "John"
let lastName = "Suarez"

let fullName = firstName + " " + lastName;
console.log(fullName)

// One of Dissadvantages is  it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.
firstName = firstName + lastName // this will be JohnSuarez 
console.log(fullName)


// ------------- (+=) Adding or Appending to an existing string, then you can use this operator -------------
// This is helpful when you want to build upon a string by adding more text to it over time.

let greeting = 'Hello'
greeting += ', John!'

console.log(greeting)

// It is important to remember that strings are immutable which means once a string is created you can not alter it.

// MUST UNDERSTAND
// In programming, a function is a reusable block of code that performs a
// specific task and can be called with various inputs. A method, on the
// other hand, is a type of function that is associated with an object,
// meaning it operates on the data contained within that object.


// ------------- (concat()) This method is beneficial when you need to concatenate MULTIPLE strings together -------------

let str1 = 'Hello'
let str2 = 'Wonderworld'

let result = str1.concat(' ', str2)
console.log(result)