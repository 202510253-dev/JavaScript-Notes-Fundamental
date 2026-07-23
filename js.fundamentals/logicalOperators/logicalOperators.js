// logical operators = used to combine or manipulate boolean values (true or false)
// AND = &&
// OR = ||
// NOT = !

const temp = -250;

if (temp <= 0 || temp > 30) {
    console.log("The weather is bad");
}

else {
    console.log("The weather is good");
}

const isSunny = true;

if (!isSunny) { //(!) JUST THIS NOT !=
    console.log("It is cloudy")
}
else {
    console.log("It is sunny")
}