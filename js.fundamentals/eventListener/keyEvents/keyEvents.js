// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "  eh"
    myBox.style.backgroundColor = "blue";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "ok..?"
    myBox.style.backgroundColor = "blue";
})

document.addEventListener("keydown", event => {
    //if (event.key.startsWith("Arrow", "w", "s", "d", "a")) { // by removing this, we are directly accessing it without any condition especially if
    switch (event.key) {
        case "ArrowUp":
        case "w":
            y -= moveAmount;
            break;
        case "ArrowDown":
        case "s":
            y += moveAmount;
            break;
        case "ArrowLeft":
        case "a":
            x -= moveAmount;
            break;
        case "ArrowRight":
        case "d":
            x += moveAmount;
            break;


    }
    myBox.style.top = `${y}px`
    myBox.style.left = `${x}px`


})