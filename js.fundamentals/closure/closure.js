// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//          Allow for private variables and state maintenanced.
//          Used frequently in JS frameworks: React, Vue, Angular. 
// FUNCTION INSIDE A FUNCTION 

//function outer() {

//    let message = "Hellow";
//    function inner() {
//        console.log(message)

//    }

//inner(); // ALL OF THIS IS PRIVATE AND CAN'T BE CHANGED OUTSIDE THE ENCAPTULATION
//}

//outer();

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`)

    }

    function getCount() {
        return count; s
    }
    return { increment, getCount };

}
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

//counter.count = 0; // ALL CLOSURE IS HIDDEN

console.log(`The current count is ${counter.getCount()}`)
