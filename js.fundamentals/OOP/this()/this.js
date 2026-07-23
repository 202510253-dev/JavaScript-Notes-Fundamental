// this = reference to the object where THIS is used (the object depends on that immediate context)
//       person.name = this.name


// DO NOT use arrow functions for Object Methods or OOP Class Methods if you need to use this.
const person1 = {
    name: "spongebob",
    favFood: "Hamburgers",
    sayHello: function () { console.log(`Hello! I am ${this.name}`) },
    eat: function () { console.log(` and ${this.name} is eating ${this.favFood}`) }

}
const person2 = {
    name: "patricl",
    favFood: "gelo",
    sayHello: function () { console.log(`Hello! I am ${this.name}`) },
    eat: function () { console.log(` and ${this.name} is eating ${this.favFood}`) }

}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();