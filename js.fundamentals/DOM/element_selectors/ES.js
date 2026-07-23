// element selector = Methods used to target and manipulate HTML elements
//                   They allow you to select one or multiple HTML elements from the DOM (DOCUMENT OBJECT MODEL)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()    // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

// 1. ================== getElementById ==================
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow"
myHeading.style.textAlign = "center"

console.log(myHeading)

// 2. ================== getElementsByClassName ==================
//const fruits = document.getElementsByClassName("fruits")
//fruits[0].style.backgroundColor = "yellow"
//fruits[1].style.backgroundColor = "red"
//fruits[2].style.backgroundColor = "blue"

//for (let fruit of fruits) {
//    fruit.style.backgroundColor = "Yellow"

//}

//console.log(fruits)

//Array.from(fruits).forEach(fruit => {
//    fruit.style.backgroundColor = "yellow"
//})

// 3. ================== document.getElementsByTagName ==================

//const h4Elements = document.getElementsByTagName("h4");
//const liElements = document.getElementsByTagName("li");

//console.log(h4Elements)
//h4Elements[0].style.backgroundColor = "Yellow"

//for (let h4Element of h4Elements) {
//    h4Element.style.backgroundColor = "Blue"
//}
//for (let liElement of liElements) {
//    liElement.style.backgroundColor = "red"
//}
//Array.from(h4Elements).forEach(h4Element => {
//    h4Element.style.backgroundColor = "Lightgreen"

//});
//Array.from(liElements).forEach(liElement => {
//    liElement.style.backgroundColor = "gold"

//});

// 4. ================== document.querySelector() ==================

//const element = document.querySelector(".fruits");

//element.style.backgroundColor = " Yellow" // FIRST MATCH IS SELECTED EVEN IF IT IS MULTIPLE

// 5. ================== document.querySelectorAll ==================
//const fruits = document.querySelectorAll(" .fruits")
const foods = document.querySelectorAll("li")


//fruits[0].style.backgroundColor = "purple"
console.log(foods)

foods.forEach(food => {
    food.style.backgroundColor = "green"
})