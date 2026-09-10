let counter = 100;

console.log(counter);
{
    counter = 200;
    console.log(counter);
}

console.log(counter)

// The counter variable, declared at the beginning of the program, 
// is a global variable. Throughout the program, also inside the block, we operate on this very variable. 
// A small change in the code is enough for the program to behave completely differently.

let cocounter = 100;

console.log(cocounter);
{
    let cocounter = 200;
    console.log(cocounter);
}

console.log(cocounter);

var coconut = 400;

function testFunction() {
    var coconut = 300;
    console.log(coconut);

}

console.log(coconut)
testFunction();
console.log(coconut)