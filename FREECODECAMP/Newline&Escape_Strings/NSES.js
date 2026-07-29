// Sometimes, you need to include Special Characters in the JavaScript.
// Two sequence on Creating a newline within a string and escaping certain characters (like quotes) to make sure they appear correctly.

// \n = Line Break in multiple lines

let story = "The sun shine brighter \nbecause the God allows us to bath to the sun \nwith it's full glory and might"
console.log(story)

// " " = Another example of escaping character

let statement = "She said, Hello!"

console.log(statement)

// \ = Backlash. Another form of escape character

let argument = "She said, \'Halimaw\'"
console.log(argument)

// The backlash tells JavaScript to treat that quotes as LITERAL CHARACTERS, so they appear correctly in the output.

// Which of the following escape sequences would you use to create a new line in a string?
// --> \n

// Why is it necessary to escape certain characters within a string?
// --> \