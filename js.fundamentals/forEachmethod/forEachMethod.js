// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
//          array.forEach(callback) element, index, array are provided

// EFFICIENT TO WRITE BUT ACTUALLY NOT USED BY PROFESSIONALS 
// forEach is actually a tiny bit slower than a traditional for loop because of the background overhead of running a function for every single item.

//let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(display);

//function display(element) {
//    console.log(element);
//}

//let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(triple);
//numbers.forEach(double);
//numbers.forEach(square);
//numbers.forEach(cube);
//numbers.forEach(display);    // THE DEFAULT MUST ALWAS BE AT THE BOTTOM IN ORDER FOR THE CONDITION WORKED

//function double(element, index, array) {
//    array[index] = element * 2;

//}

//function triple(element, index, array) {
//    array[index] = element * 3;

//}

//function square(element, index, array) {
//    array[index] = Math.pow(element, 2);
//}

//function cube(element, index, array) {
//    array[index] = Math.pow(element, 3)
//}

//function display(element) {
//    console.log(element);
//}
//============ PRACTICAL ============

let fruits = ["aPple", "oRange", "baNana", "cOconut"];

fruits.forEach(capitalize);
//fruits.forEach(lowerCase);
//fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
    console.log(element);
}