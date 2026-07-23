// .filter() = creates a new array by filtering out elements

//let numbers = [1, 2, 3, 4, 5, 6, 7];

//let eveNums = numbers.filter(isEven);
//let oddNums = numbers.filter(isOdd);

//console.log(eveNums);
//console.log(oddNums);


//function isEven(element) {
//    return element % 2 === 0;
//}

//function isOdd(element) {
//    return element % 2 !== 0;
//}

// ==============================================

//const ages = [16, 17, 18, 18, 19, 20, 60];
//let adults = ages.filter(isAdult);
//let child = ages.filter(isChild);
//let senior = ages.filter(isSenior);

//console.log(senior);
//console.log(adults);
//console.log(child);

//function isAdult(element) {
//    return element >= 18;
//}

//function isChild(element) {
//    return element < 18;
//}

//function isSenior(element) {
//    return element >= 60;
//}

// ==============================================
const words = ["apple", "orange", "banana", "kiwi", "promegranate", "coconut"];

let shortWords = words.filter(getShortWords);
let longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}
// filter() is all about selecting data.
// use filter() anytime a user needs to search, sort, or slice down a list of items based on their properties.
// E-commerce Search