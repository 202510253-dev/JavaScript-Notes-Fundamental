// How Do let and const Work Differently 
// When It Comes to Variable Declaration, Assignment, and Reassignment?

// Let and Const = Preferred ways to declare variable, but differ in how they handle value assignment and reassignment.

// let = Allow you to declare variables that can be updated or reassigned later.
// const = Declare a variables that are constant. Once assigned, you cannot reassign it. 

let score = 10;
console.log(score)
score = 30
console.log(score)

// Usefull when you know the value of a variable will change as your program runs. 

// Example of Const 
const maxScore = 30;
console.log(maxScore)
maxScore = 30;
console.log(maxScore) // This will result in error. 

// const is ideal for values that you don't want to change accidentally during the execution of your program. 

