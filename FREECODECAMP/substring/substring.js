// =========== How Can You Find the Position of a Substring in a String? ===========

// A substring is a sequence of characters that appears within a larger string. For example, 
// in the string hello world, hello and world are substrings.

// indexOf() = Is a method to locate the position of the substring inside of a string. Allows you to search within a string. 
//             If substring is found, returns the index (or position) pf the first occurence of the substring.
//             If the substring is not found, indexOf() returns -1, which indicates that the search was unsuccessfull 

let sentence = "JavaScript is Awesome"
let position = sentence.indexOf("Awesome")
console.log(position)

// Awesome starts at the index 14 in the string JavaScript is Awesome. So the indexOf() method returns 14

let sentence2 = "JavaScript is Awesome"
let position2 = sentence.indexOf("Fantastic")
console.log(position2) // -1 if the substring isn't found

// You can also specify where to begin searching within the string by providing a second argument to indexOf(). Here's an example:

let sentence3 = "JavaScript is awesome, and JavaScript is powerful!";
let position3 = sentence3.indexOf("JavaScript", 10);
console.log(position3); // 27

// Using indexOf() can be very useful when you need to check if a substring is present in a string and to determine its position for further operations.

// How can you use indexOf to search for a substring starting at a specific position within the string?
// --> By using the second argument to specify the starting position.

const str = "I am learning JavaScript"
str.indexOf("JavaScript") // -1