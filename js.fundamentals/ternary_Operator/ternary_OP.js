// ternary operator = shortcut to if{} and else {} statements.
// helps to assign a variable based on a condition 
// condition ? codeIfTrue : codeIfElse;

// AGE PROCESS
//let age = 12;
//let message = age >= 18 ? "You're an adult" : "You're a minor";
//console.log(message);

// THIS IS THE COMPARISON FOR IF ELSE

// if (age >= 18);
//  message = `You are an Adult`{
// }
// else {
//    message = "You are a Minor"
//}

// TIME PROCESS

//let time = 8;
//let greetings = time < 12 ? "Good Morning" : "Good Afternoon";
//console.log(greetings);

//let isStudent = false;
//let message = isStudent ? "You are a student" : "You are not a student";
//console.log(isStudent);

let purchasedAmount = 200;
let discount = purchasedAmount >= 100 ? 10 : 0;
console.log(`Your Total is $${purchasedAmount - purchasedAmount * (discount / 100)}`);

