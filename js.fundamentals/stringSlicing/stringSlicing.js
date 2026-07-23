// string slicing = creating a substring
// from a portion of another string 
// ex string.sloce(starts, end)

const fullName = "Broseph Code";

//let firstName = fullName.slice(0, 3); // SKIPPING THE FIRST NAME
//let lastName = fullName.slice(4, 8)

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1)
//console.log(firstName);
//console.log(lastName);
//console.log(firstChar);
//console.log(endChar);

// THIS SPECIFY FINDING EVERY STRING (DEPENDS

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);