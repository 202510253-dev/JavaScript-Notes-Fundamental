// .map() = accepts a callback and applies that function to each element of an array, then return a new array.

//const numbers = [1, 2, 3, 4, 5];

//const squares = numbers.map(square);
//const cubes = numbers.map(cube);

//console.log(squares);
//console.log(cubes);
//console.log(numbers)

//function square(element) {
//    return Math.pow(element, 2)
//}
//function cube(element) {
//    return Math.pow(element, 3)
//}

// ===========================

//const students = ["sPongebob", "pAtrick", "squIDward", "cINdy"];

//const studentsUpper = students.map(upperCase);
//const studentsLower = students.map(lowerCase);
//console.log(studentsUpper);
//console.log(studentsLower);

//function upperCase(element) {
//    return element.toUpperCase();

//}

//function lowerCase(element) {
//    return element.toLowerCase();
//}

// ===========================

const dates = ["202-1-10", "20205-2-20", "2026-3-30"];

const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// map() is for transforming data, while forEach() is for executing side effects.
// map() is incredibly popular in modern development—especially in frameworks like React—because it embraces immutability (not changing original data).