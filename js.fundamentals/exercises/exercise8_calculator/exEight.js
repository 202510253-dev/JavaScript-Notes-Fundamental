
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;

}
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";

    }

}

// WARNING: Executing JavaScript from a string is an enormous security risk. It is far to easy for a
// bad actor to run arbitrary code when you use eval()