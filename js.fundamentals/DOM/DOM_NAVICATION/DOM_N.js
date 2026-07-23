// DOM Navigation = The process of navigating through the structure of an HTML  document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// =========== .firstElementChild ===========

//const element = document.getElementById("deserts"); // always target the first born childrem
//const firstChild = element.firstElementChild;
//firstChild.style.backgroundColor = "yellow"

//const ulElement = document.querySelectorAll("ul");

//ulElement.forEach(ulElement => {
//    const firstChild = ulElement.firstElementChild;
//    firstChild.style.backgroundColor = "Green"
//});

// =========== .lastElementChild ===========

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "purple"
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red"
})