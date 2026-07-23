// getter = speacial method that makes a property readable
// setter - special method that makes a property writeable

// validate and modify a value when reading/writting a property

// THIS IS IMPORTANT BECAUSE IT VALIDATE WHETHER THE VALUE IS GARBAGE OR STRAIGHT UP USELESS 
class Person {

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string && newFirstName > 0") {
            this._firstName = newFirstName;
        }
        else {
            console.error("First Name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string && newLastName > 0") {
            this._lastName = newLastName;
        }
        else {
            console.error("Last Name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);