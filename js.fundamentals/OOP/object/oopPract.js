
const person1 = {
    name: "Ashton",
    age: 19,
    status: "single",
    course: "BSIT",
    sayHello: function () {console.log("Hi! I am Ashton")},
    sayCourse: () => console.log("And my course is BSIT")
}

const person2 = {
    name: "Daniel",
    age: 69,
    status: "Expire",
    course: "BSIT",
    sayHello: function () {console.log("Hi! I am Daniel")},
    sayAge: () => console.log("I am 23 yrs old")
}

console.log(person1.name)
console.log(person1.age)
console.log(person1.status)
console.log(person1.course)

console.log(person2.name)
console.log(person2.age)
console.log(person2.status)
console.log(person2.course)

person1.sayHello()
person1.sayCourse()
person2.sayHello()
person2.sayAge()
