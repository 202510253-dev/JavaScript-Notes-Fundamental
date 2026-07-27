// WORKSHOP 3 = Build a Sentence Maker 
// You will create two different stories using a sentece template. You will use variables to store different parts of the story and then output the stoires to the console.
// OBJECTIVE = Fulfull the user stories below and get all the tests to pass/

let adjective = "Happy";
let noun = "Dog";
let verb = "Run";
let place = "Park";
let adjective2 = "Fast";
let noun2 = "Ball";

let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First Story: " + firstStory)

adjective = "Grizzled";
noun = "Tank";
verb = "charging";
place = "battlefield";
adjective2 = "smoky";
noun2 = "diesel fuel";

let secondStory = "Once upon a time, there was a " + adjective + " " + noun + " who loved to destroy " + noun2 + ". The " + noun + " served in the muddy " + place + " with " + adjective2 + " firepower, but they never once chose to " + verb + ".";
console.log("Second Story: " + secondStory)