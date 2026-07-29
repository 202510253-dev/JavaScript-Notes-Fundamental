// Prompt Method = One of the simplest way to input from a user through a small pop-up window.
//                It returns the input provided by the user.
//                It takes two arguments; The first is the message which will appear inside the dialog box, typically prompting the user to enter information.
//                The second is default value which is optional and will fill the input field initially

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    let userInput = prompt("Enter your name");
    document.getElementById("output").textContent = `Hello ${userInput}`
})
// Prompt() is useful for quick testing or small applications, it's generally avoided in modern, complex web application due to its disruptive nature and inconsistent behavior accross different browsers

