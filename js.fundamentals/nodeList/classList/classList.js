// classList = Element property in JavaScipt used to interact with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton")

//myButton.classList.add("hover")

//myButton.addEventListener("mouseover", event => {
//    event.target.classList.add("hover")
//})
//myButton.addEventListener("mouseout", event => {
//    event.target.classList.remove("hover")
//})

//myButton.addEventListener("mouseover", event => {
//    event.target.classList.toggle("hover")

//})

//myButton.addEventListener("mouseout", event => {
//    event.target.classList.toggle("hover")
//})

const myH1 = document.getElementById("myH1")
myButton.classList.add("enabled")


myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "ehh"
    }
    else {
        event.target.classList.replace("enabled", "disabled");

    }
})

myH1.classList.add("enabled")

myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " ehh"
    }
    else {
        event.target.classList.replace("enabled", "disabled");

    }
})
