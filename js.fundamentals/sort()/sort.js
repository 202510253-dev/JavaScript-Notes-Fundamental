// sort() = method used to sort element of an array in place. 
//          Sorts element as string in lexicographic order, not alphabetical
//          Lexicographic = (alphabet + numbers + symbols) as strings

//let fruits = ["apple", "orange", "banana", "coconut", "pinapple"]
//let numbers = [1, 10, 2, 3, 4, 5, 6,]

//numbers.sort((a, b) => a - b);
//console.log(numbers);

const people = [
    { name: "SpongeBob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 34, gpa: 5.0 },
    { name: "Cindy", age: 20, gpa: 4.0 },
    { name: "Squidward", age: 45, gpa: 1.0 },

];

people.sort((a, b) => a.age - b.age);
//people.sort((a, b) => a.name - b.name);
people.sort((a, b) => a.name.localeCompare(b.name)); // localeCompare is built for strings for it to identify or sort



console.log(people);
//console.log(people);