// Want to extract part of a word, a specific character sequence, or just a fragment of a sentence? 
// slice() = A method that returns a section of a string within a specified range of indexes.
// parameter = Start index (where to start the extraction), end index (where to end the extraction) 

let message = "Hellow, world!";
let greeting = message.slice("0", "5");
console.log(greeting)

let tank = "A1 M1 Abrams, USA"
let extract = tank.slice("0", "12")
console.log(extract)


let message2 = "Ain't touching that thign"
let extract2 = message2.slice(12)
console.log(extract2)