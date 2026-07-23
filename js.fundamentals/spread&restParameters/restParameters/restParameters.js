// Rest Parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//  Spread = expands an array into separate elements
//  Rest = Bundles separate elements into an array


function openFridge(...foods) {
    console.log(...foods); // This combined all without ""
}

function getFood(...foods) {
    return foods;

}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdogs";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);
const food = getFood(food1, food2, food3, food4, food5);

console.log(food);

// SECOND

//function sum(...numbers) {
//    let result = 0;
//   for (let number of numbers) {
//        result += number;

//    }

//    return result;
//}

//const total = sum(1, 2, 3, 4); // this add the value in one array

//console.log(`Your total is $${total}`);


function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75, 100, 85, 90, 50);
console.log(total);

//====== Example 3 ======
function combineStrings(...strings) {
    return strings.join(" ");
    ;
}

const fullName = combineStrings("Mr.", "Spongebob", "Squareponts", "III");

console.log(fullName);