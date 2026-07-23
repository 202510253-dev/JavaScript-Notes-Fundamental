// = assigment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== string inequality operator

const PI = 3.14;

if (PI === 3.14) { //strongly must be the same which means removing "" string and turn into datatyppes
    console.log("that is PI");
}
else {
    console.log("The is Not PI");
}

if (PI == "3.14") { // technically same but only because comparing it as a string. 
    console.log("that is PI");
}
else {
    console.log("The is Not PI");
}


if (PI != "3.14") { //  THIS IS ALWAYS FALSE
    console.log("that is PI");
}
else {
    console.log("The is Not PI");
}

if (PI !== "3.14") { //  THIS IS ALWAYS FALSE
    console.log("that is PI");
}
else {
    console.log("The is Not PI");
}
