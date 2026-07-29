// Data Types =  Helps program understad the kind of data it's working with, whether it's a number, text, or something else. 
//            = Numbers, Floating Point, String, Boolean, Undefined and Null, Object

let pet = {
    name: "Fluffy",
    age: 3,
    type: "dog"
}
// - Symbol: The symbol data type is a unique and immutable value that may be used as an identifier for objec properties.

// Example below, two sysmbold are created witht the same description, but they are not equal.

const crypticKey1 = Symbol("SalNpepper");
const crypticKey2 = Symbol("SalNpepper");
console.log(crypticKey1 === crypticKey2 )

// BigInt: When the number is too large for the Number data type, you can use the BigInt data type to represent integeres of arbtrary length
// By adding an n to the end of the number, you can create a BigInt. 

const veryBigNumber = 1234567890123456789012345678901234567890n;

let cityName = "New York"
cityName = "Los Angeles"
console.log(cityName)

// APART FROM let, you can use const. 
// Const = Variable that cannot be reassigned a new value. 
// It i snot allowed to change throughout the code, such as PI or MAX_SIZE
let hello = "Hello"
hello += " world"
console.log(hello)


