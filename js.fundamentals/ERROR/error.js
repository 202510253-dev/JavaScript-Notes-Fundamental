// ERRO = An object that is created to represent a problem that occurs
//      Occur oftem with user input or establishing a connection 
//      ALWAYS INTERRUPTED CLEAR AND SEEMLESS PROGRAM 


// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Error from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//              ex. close files, close connections, release resources


//try {
//    console.log("Hello")
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY
//}

//catch (error) {
//    console.error(error);
//}

//finally {
// CLOSE FILES
// CLOSE CONNECTIONS
// RELEASE RESOURCES 
//    console.log(`This always executes`)

//}

//console.log(`You have reached the end`)


// =========== ERRORS CREATED BY USERS ===========
try {
    const divident = Number(window.prompt(`Enter a divident: `));
    const divisor = Number(window.prompt(`Enter a divident: `));

    if (divisor == "" || divident == "") { 
        throw new Error("Inputs cannot be empty")
    }
    if (divisor == 0) {
        throw new Error("You can't devide by 0");

    }
    if (isNaN(divident) || isNaN(divisor)) {
        throw new Error("Values must be a number")
    }

    const result = divident / divisor;
    console.log(result);

}

catch (error) {
    console.error(error);

}

console.log(`You have reached the end`)