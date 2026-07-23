// JSON = (Java Script Object Notation) data-interchanging format
//        Used for exchanging data between a server and a web application
//        JSON files (key:value) OR [value1, value2, value3]

//        JSON.stringfy() = converts a JS object to a JSON strng.
//        JSON.parse() = converts a JSON string to a JS object


//const names = [
//   "Spongebob",
//    "Patrick",
//    "Squidward",
//    "Sandy"
//]

//const person = {
//    "name": "Spongebob",
//    "age": 30,
//    "isEmployed": true,
//    "hobbies": [
//        "Jellyfishing",
//        "karate",
//        "cooking"
//    ]

//}

//const people = [
//    {
//        "name": "Spongebob",
//        "age": 30,
//        "isEmployed": true
//    },
//    {
//        "name": "Patrick",
//        "age": 34,
//        "isEmployed": false
//    },
//    {
//        "name": "Squidward",
//        "age": 50,
//        "isEmployed": true
//    },
//    {
//        "name": "Sindy",
//        "age": 27,
//        "isEmployed": false
//    }
//]
//const jsonString = JSON.stringify(names);
//const jsonString = JSON.stringify(person)
//const jsonString = JSON.stringify(people)

//console.log(names)
//console.log(jsonString) // ALWAYS REMEMBER THAT jsonString converts the declare to STRING
// BUT IF YOU USE THE DIRECT DECLARE WHICH IS JUST THE NAME OF THE VALUE. IT WILL DISPLAY AS ARRAY

// ========= SPARSE =========



const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy" ]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": [ "Jellyfishing", "karate", "cooking" ]}`
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true },
    {"name": "Patrick", "age": 34, "isEmployed": false },
    {"name": "Squidward", "age": 50, "isEmployed": true },
    { "name": "Sindy", "age": 27, "isEmployed": false }]`;

//const parsedData = JSON.parse(jsonNames)
//const parsedData = JSON.parse(jsonPerson)
const parsedData = JSON.parse(jsonPeople)



console.log(parsedData)
