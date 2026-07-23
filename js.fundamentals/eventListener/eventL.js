//  evetListener = Listen for specific events to create interactive web pages 
//                events: clicks, mouseover, mouseout
//                .addEventListener(event, callback, function) and ofcourse, arrowfunction
const myBox = document.getElementById("myBox");

//function changeColor(event) { // event is an object that contains information that something that happens 
//console.log(event); // provided to us by the web
//event.target.style.backgroundColor = "tomato"
//event.target.textContent = "Ouch"

//}

myBox.addEventListener("click", event => { // when you use an event listener, you can pass a callback or function
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "Brush"

});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "dont' do it"


});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "blee"
});


const but1 = document.getElementById("but1");


but1.addEventListener("click", event => {
    event.target.style.backgroundColor = "black"
    event.target.textContent = "ded"
    event.target.style.color = "white";


})

but1.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "red"
    event.target.textContent = "don't u dare"


});

but1.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "blee"
});