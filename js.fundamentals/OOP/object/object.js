// object = A collection of related properties and/or method. Can represent real world obejcts (people, products, place)
//          object = {key:values, function()}

// properties = what an object has
// method = functions that what object CAN perform
const person1 = {
    firstName: "Spongebob",
    lastName: "squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () { console.log("Hi! I am spongebob") },
    eat: () => console.log("Nyram Nyarm"),
}

// Creating object (can't have the same name)

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function () { console.log("Hey, I'm patrick") },
    sayBye: () => console.log("Bye, spongebob"),  //USING ARROWHEAD
    eat: () => console.log("I'm eating, rosebeef."),


}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

// THIS IS WHEN WE INVOKED THE OBJECT BY USING FUNCTION (BUILT FOR OBJECT)

person1.eat();
person1.sayHello();
person2.sayHello();
person2.eat();
person2.sayBye();