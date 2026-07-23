// SWITCH = can be an efficient replacement to many ELSE IF STATEMENTS

//
//let day = 4;

//if (day == 1) {
//    console.log("Monday")
//}
//else if (day == 2) {
//    console.log("Tuesday");
//}
//else if (day == 3) {
//    console.log("Wednesday")
//}
//else if (day == 4) {
//    console.log("Thursday")
//}
//else if (day == 5) {
//    console.log("Friday")
//}
//else if (day == 6) {
//    console.log("Saturday")
//}
//else if (day == 7) {
//    console.log("Sunday")
//}
//else {
//    console.log(`${day}It is not a day!`)
//}
//

let day = Pizza;

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thurday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not day`);

}

// Why need to have (break;)? Once we have a matching case, we will execute the code found within that space //
// and cascade down any code that follows after, including code with different cases
