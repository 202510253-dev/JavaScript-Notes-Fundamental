// While loop = repeat some code WHILE some condition is true

//let userName;

//if (userName === "") {
//    console.log("You didn't enter your name")
//}
//else {
//    console.log(`Hello ${userName}`)
//}

// ==================


//while (userName === "" || userName === null) { //Can't escape while loop[]
//    userName = window.prompt(`Enter Your Name: `);
//}
//console.log(`Hello ${userName}`);

//do { // you can set the userName undefined
//    userName = window.prompt(`Enter Your Name: `);
//} while (userName === "" || userName === null)
//console.log(`Hello ${userName}`);


//=================================================


let loggedIn = false; // This is false for While because the credentials is needed. If set to true then it will not check credentials
let username;
let password;

//while (!loggedIn) {
//    username = window.prompt(`Enter your username `);
//    password = window.prompt(`Enter your password `);

//    if (username === `myUsername` && password === "myPassword") { // THIS IS HAD BECOME THE CONDITION
//        loggedIn = true;
//        console.log(`You are Logged In`)
//    }
//    else {
//        console.log(`Invalid credentials! Please try again`);
//    }
//}

// DO WHILE 
do {
    username = window.prompt(`Enter your username `);
    password = window.prompt(`Enter your password `);

    if (username === `myUsername` && password === "myPassword") { // THIS IS HAD BECOME THE CONDITION
        loggedIn = true;
        console.log(`You are Logged In`)
    }
    else {
        console.log(`Invalid credentials! Please try again`);
    }
} while (!loggedIn)

