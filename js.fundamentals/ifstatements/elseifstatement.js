// elseif

let age = 0

if (age >= 18) {
    console.log(`You are old enough to enter this site`)
}
else if (age == 0) {
    console.log(`You can't enter, you were just borned`)

}
else if (age < 0) {
    console.log(`Your age can't be below 0`)
}

else if (age >= 100) {
    console.log(`You are too old to enter this site`)
}
else {
    console.log(`YOu must be 18+ to enter this site`)
}