// Function = A section of reusable code. Declase code once, use it whenever you want. Call the function to execute that code.

//function happyBday() {
//    console.log(`Happy birthday to you!`);
//    console.log(`Happy birthday to everyone`);
//   console.log(`Happy birthday to bla vla!`);
//   console.log(`Happy birthday nyarw!`)

//}
//happyBday(); // THIS DECLARED THE STATIC STRING INTO AN HOLDER OF AN ENTIRE LOG

//function happyBday2(username, age) { // USING A PARAMETER. make sure the parameters match up
//    console.log(`Happy birthday to you!`);
//    console.log(`Happy birthday to everyone`);
//    console.log(`Happy birthday to ${username}`);
//    console.log(`Happy birthday nyarw!`)
//   console.log(`You are now ${age} years old `)
//
//
//}
//happyBday2("elijah", 25); // LETS YOU TO SEND SOMETHING OR WE CALL IT ARGUMENT (Passing argument)


//function add(x, y) {
//    let result = x + y;
//    return result;
//}
//let answer = add(10, 20);
//console.log(answer);

// ========== SHORTCUT ===========
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

function isEven(number) {
    //    if (number % 2 === 0) {
    //        return true;
    //    }
    //    else {
    //        return false;
    //    }
    return number % 2 === 0 ? true : false;

}
console.log(isEven(3));
// IF SHORTCUT, USE TENARY operator

function isValidEmail(email) {
    if (email.includes("@")) { // THIS IS VALID AND ACCEPT THE @
        return true;
    }
    else {
        return false;
    }

    // return email.include("@") ? true : false;    SHORTCUT
}
console.log(isValidEmail(`Brp@email.com`));
console.log(isValidEmail(`Brpelonma.com`));


