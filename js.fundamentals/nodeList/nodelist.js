// NodeList = Static collection of HTML elements by (id, class, element)
//           Can be created by using querySelectorAll()
//           Similar to an Array, but no (map, filter, reduce)
//           NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons")


// ================== add HTML/CSS properties ==================

//buttons.forEach(button => {
//    button.style.backgroundColor = "Green"
//    button.textContent += " Rawr"
//});
// CLICK event listener

//buttons.forEach(button => {
//    button.addEventListener("click", event => {
//        event.target.style.backgroundColor = "red"
//    })
//})

// ================== MOUSEOVER + MOUSEOUT event Listener ==================

//buttons.forEach(button => {
//    button.addEventListener("mouseover", event => {
//        event.target.style.backgroundColor = "rgba(30, 30, 223, 0.74)"
//    })
//})

//buttons.forEach(button => {
//    button.addEventListener("mouseout", event => {
//        event.target.style.backgroundColor = "rgba(68, 68, 226, 0.745)"
//    })
//})

// ================== ADD AN ELEMENT ==================
//const newButton = document.createElement("button");  // STEP 1: CREATE ELEMENT
//newButton.textContent = "Button 5"; // STEP 2: ADD NECSERAY ATTRIBUTES
//newButton.classList = "myButtons"
//document.body.appendChild(newButton) // STEP 3: APPEND TO THE DOM

//console.log(buttons)

//buttons = document.querySelectorAll(".myButtons")

//console.log(buttons)

// ================== REMOVE AN ELEMENT ==================

//buttons.forEach(button => {
//    button.addEventListener("click", event => {
//        event.target.remove();
//        console.log(buttons) // even if the buttons are gone. It still stays at the nodelist
//    })
//})

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons) // this both removed from the web and nodelist (practically erasing it)
    })
})