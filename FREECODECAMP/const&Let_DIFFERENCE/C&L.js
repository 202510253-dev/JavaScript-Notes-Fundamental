// let = Allows you to decalre vairables that can be updated or reassigned later. 

let score = 10;
console.log(score)
score = 20;
console.log(score)


// Now, score holds the value 20. This makes let particularly useful when you know the value of a variable will change as your program runs.

// const = Used to decalre variables that are constant. Once assigned a value to a variable
//        decared with const, you cannot reassign it. 

const maxScore = 20;
console.log(maxScore)
maxScore = 30; // this will be invalid


// var = variable keyword but it's not recommended anymore. The var is kund of like let, 
//      except it has a wider scope, which is more likely to cause problems in the program (assepted to leaks)

