//console.log(`Hello`);
//console.log(`I like pizza`);

//window.alert();
//window.alert("I like a Pizza!")

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like Pizza`;

// variable = A container that stores a value.
//          Behaves as if it were the Value it contain.

// 1. Decalaration      let x;
// 2. Assignment        x = 100;

// let x;
// x = 100;

// console.log(x);

// let age = 25;
// let price = 10.99;
//let gpa = 2.1;

// console.log(typeof age);
//console.log(`You are ${age} years old`);
//console.log(`The price is $${price}`)
//console.log(`Your gpa is: ${gpa}`)

//let firstName = "Elijah";
//let favoriteFood = "Pizza";
//let email = "pizza@email.com";



//console.log(typeof firstName);
//console.log(`Your name is ${firstName}`)
//console.log(`You like ${favoriteFood}`)
//console.log(`Your email is: ${email}`)

//Booleans

//let online = true;
//let forSale = true;
//let isStudent = true;

//console.log(`Bro is online: ${online}`)
//console.log(`Is this car for sale: ${forSale}`)
//console.log(`Enroled: ${isStudent}`)

// let fullName = "Elijah Josh";
// let age = 17;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`
// document.getElementById("p2").textContent = `You are: ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

// Arithmetic operators = operands (value, variables, etc.)
//                      operators (+ - * /)
//                      ex. 11 = x + 5;

//let students = 30;
//students = students + 1
//students = students - 1
// students = students * 2
// students = students / 2
// students = students ** 3
// students = students % 3
//let extraStudents = students % 3;

//console.log(extraStudents);

//students += 1;
//students -= 1
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;



//console.log(students);/

// operator precedence
// 1. Parenthesis ()
// 2. Exponents
// 3. Multiplication & Division & Modulo
// 4. Addition & Subtraction

//let result = 1 + 2 * 3 + 4 ** 2;

//console.log(result)

// How to accept user input

// 1. Easy way = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//let username;


// 1. Easy Way
//username = window.prompt(
//    "What's your usermame"
//);

//onsole.log(username);

// 2. Professional
//let username;

//document.getElementById("mySubmit").onclick = function () {
//    username = document.getElementById("myText").value;
//    document.getElementById("myH1").textContent = `Hello ${username}`
//}

// type conversin = change the datatype of a value to another
//                  (strings, numbers, booleans)

//   let x = "pizza";
//    let y = "pizza";
//    let z = "pizza";

//    x = Number(x);
//    y = String(y);
//    z = Boolean(z);
//    console.log(x, typeof x);
//    console.log(y, typeof y);
//   console.log(z, typeof z);


//let x = "0";
//let y = "0";
//let z = "0";

//x = Number(x);
//y = String(y);
//z = Boolean(z);
//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

// const = a variable that can't be changed (constant)

// const PI = 3.14159;
// let radius;
// let circumference;


// document.getElementById("mySubmit").onclick = function () {
//    radius = document.getElementById("myText").value;
//    radius = Number(radius);
//    circumference = 2 * PI * radius;
//    document.getElementById("myH3").textContent = circumference + "cm"
//}

let randomNum = Math.random();