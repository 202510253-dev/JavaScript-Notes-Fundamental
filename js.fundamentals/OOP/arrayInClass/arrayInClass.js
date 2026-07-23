const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }
];

fruits[0].name
fruits.push({ name: "grapes", color: "purple", calories: 62 });  // ALWAYS REMEMBER IS PUSH ARE "FORCED" METHOD WITHOUT DIRECTLY INPUTTING IT INTO THE VALUES NESTED

console.log(fruits[0].calories);
console.log(fruits[5].name);
console.log(fruits);

fruits.pop();       // this push removed some argument. 6 is grapes so it was removed
fruits.splice(1, 2);  // while splice choosed only those who are stated. 0 or apple will be retained

// ----------------- forEach() ----------------------

//fruits.forEach(fruits => console.log(fruits.name));

//const fruitNames = fruits.map(fruits => fruits.name);
//const fruitColors = fruits.map(fruits => fruits.color);
//const fruitCalories = fruits.map(fruits => fruits.calories);

//console.log(fruitNames)
//console.log(fruitColors)
//console.log(fruitCalories)

// ----------------- filter() ----------------------

//const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
//const orangeFruits = fruits.filter(fruit => fruit.color === "orange");
//const whiteFruits = fruits.filter(fruit => fruit.color === "white");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

console.log(lowCalFruits);

//console.log(whiteFruits);
//console.log(yellowFruits);
//console.log(orangeFruits);

