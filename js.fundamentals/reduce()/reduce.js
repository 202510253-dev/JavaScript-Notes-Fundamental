// .reduce() = reduce the elements of an array to a single value;

//const prices = [16, 4, 5, 10, 25, 120];

//const total = prices.reduce(sum);

//console.log(`$${total.toFixed(2)}`) // THIS [toFixed(2)] added the .00 at the last part

//function sum(accumulator, element) {  // function sum(previous, next) A PATTERN OF USING THE PREVIOUS AS STORAGE AS NEW VALUE ENTERS FOR THE NEXT AND SO ON AND ON
//    return accumulator + element;     // return previous + next;
//}

const grade = [78, 86, 80, 90, 93, 96, 95];

const maximum = grade.reduce(getMax);
const minimum = grade.reduce(getMin);
const average = grade.reduce(getAve);


console.log(average.toFixed(2));
console.log(maximum);
console.log(minimum);


function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}

function getAve(accumulator, element, index, array) {
    accumulator += element;

    if (index === array.length - 1) {
        return accumulator / array.length;
    }

    return accumulator;
}

// What functions do you pair reduce() with?
// reduce() often acts as the final "cleanup" or "aggregation" step after you've used other array methods:

// Object.keys() / Object.values() / Object.entries(): You will constantly use these right after a reduce() to loop through the object you just built.

// .filter(): You might filter out bad/corrupted data from an API first, and then run reduce() to structure the remaining good data.