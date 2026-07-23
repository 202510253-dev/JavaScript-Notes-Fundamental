// Variable Scope = where a varaible is recognized and accessible (local vs global)


// LOCAL SCOPE
//function1();

//function function1() {
//    let x = 1;
//    console.log(x);
//}

// CAN DECLARE VAIRABLE WITH OWN HOLDER AS LONG AS IT IS IN OWN CURLY BRACES OR SPACE

//function function2() {
//    let y = 2;
//    console.log(x);
//}

// GLOBAL SCOPE

let x = 3;

function2();

function function1() {
    let x = 1;
    console.log(x);
}

// CAN DECLARE VAIRABLE WITH OWN HOLDER AS LONG AS IT IS IN OWN CURLY BRACES OR SPACE

function function2() {
    let x = 2;
    console.log(x);
}