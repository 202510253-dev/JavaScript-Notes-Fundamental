// NESTED

let age = 18
let hasLicense = true;

// below 16, the second condition is skipped.

if (age >= 16) {
    console.log("You are a old enough to drive")

    if (hasLicense) {
        console.log(`You have your license`)
    }
    else {
        console.log(`You do not have license yet`)
    }
}
else {
    console.log(`You must be 16+ to have a license`)
}