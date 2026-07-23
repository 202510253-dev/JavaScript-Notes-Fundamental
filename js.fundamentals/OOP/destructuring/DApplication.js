// 1. Setting Default Values (Super Common)
// What happens if you try to destructure a property that isn't there? 
// It returns undefined. Destructuring lets you provide a fallback default value directly inline.

const person3 = {
    firstName: "Sandy",
    lastName: "Cheeks"
    // No job property listed here!
};

// We can assign a default value right inside the braces using '='
const { firstName, job = "Scientist" } = person3;

console.log(job); // Output: "Scientist" (instead of undefined!)

// 2. Handling API Responses
// When you fetch data from a web server or a database, the server usually sends back massive objects 
// containing way more information than you actually need. Destructuring allows you to cleanly pluck out 
// only the values your UI cares about.

// Simulated API Response from a server
const apiResponse = {
    status: 200,
    data: {
        userId: 9872,
        token: "xyz123abc",
        preferences: { theme: "dark" }
    },
    message: "Success"
};

// Pluck out just the data object, and immediately grab the token
const { data: { token } } = apiResponse;

console.log(token); // "xyz123abc"

// 3. Rest Operator (...) for Excluding Data
// You used the Rest operator nicely in your array example (...extraColor). In objects, developers use it to create a new object 
// that excludes sensitive data (like a password) before sending it somewhere else.

const userAccount = {
    username: "Sponge123",
    password: "superSecretPassword123",
    email: "sponge@krustykrab.com"
};

// Pull out the password, and group everything else into "publicProfile"
const { password, ...publicProfile } = userAccount;

console.log(publicProfile);
// Output: { username: "Sponge123", email: "sponge@krustykrab.com" }