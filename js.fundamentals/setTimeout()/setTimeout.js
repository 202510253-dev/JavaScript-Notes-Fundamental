// setTime() = function in JavaScript that allows you to schedule the execution of a function after an amount of time(milliseconds)
//             Times are approximate (varies based on the workload of the JavaScript runtime env.)

//             setTime(callback, delay);

//function sayHello() {
//    window.alert("Hello");
//}


//setTimeout(sayHello, 3000);

// Shortcut: 

//setTimeout(function(){window.alert("Hello")}, 3000);
//setTimeout(() => window.alert("Hello"), 3000)

// we can also time out the time out before it launch 

//const timeoutId = setTimeout(() => window.alert("Hello"), 5000)

//clearTimeout(timeoutId);

let timeoutId = clearTimer; // always need to declare it then use funition to execute argument

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}




//const startTimer = setTimeout(() => window.alert("Hello"))