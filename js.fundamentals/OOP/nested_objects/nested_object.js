// nested object = Objects inside of other Objects.
//                 Allows you to represent more complex data structures.
//                 Child Object is enclosed by a Parent Object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{Keyword{}, Mouse{}, Monitor{}}

const person = {
    fullName: "SpongeBob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "jelyyfishing", "cooking"],
    address: {
        street: "124 conch St. ",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);

console.log(person.address.country) // IF YOU WANT TO SPECIFY THE ADDRESS, YOU CAN JUST USE .city, .street. .country

for (const property in person.address) {
    console.log(person.address[property])  // this is for looping it if you want to
}

//================= Example 2 =================


class Person {
    constructor(name, age, ...address) {
        this.name = name,
            this.age = age,
            this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street,
            this.city = city,
            this.country = country
    }
}

const Person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const Person2 = new Person("Patrick", 34, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const Person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(Person1.address.country);
console.log(Person3.address.country);