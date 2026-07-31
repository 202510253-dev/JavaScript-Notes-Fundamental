// Understanding how characters are represented as numbers is fundamental.

// ASCII = The American Standard Code for Information Interchange is a standard for encoding characters in a computer system. 
// It is a standard system for representing text as a sequence of bytes in a computer's memory.

// charCodeAt() = Is a method that returns the Unicode code point of the character at a specified index in a string. 
// fromCharCode() = Is a method that returns the character represented by a specified Unicode code point.

let letter = "A"
console.log(letter.charCodeAt(0))

// A is the first character of the string, and calling charCodeAt(a) returns its numeric code (which matches its ASCII values for basic latin characters)

let letter2 = "!"
console.log(letter2.charCodeAt(0))

// fromCharCode = Just the oppositve of charCodeAt()

let char = String.fromCharCode(65)
console.log(char)

let char2 = String.fromCharCode(97)
console.log(char2)

// Which of the following is an example of how character encoding is useful in programming?
// --> To manipulate characters based on their numerical values.