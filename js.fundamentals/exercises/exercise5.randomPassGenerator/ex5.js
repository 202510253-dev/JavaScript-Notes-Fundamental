function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~/";

    let allowChars = "";
    let password = "";

    allowChars += includeLowerCase ? lowercaseChars : ""; // ALWAYS REMEMBER THAT += IS CALLED CATTENATION ESPECIALLY WITH PAIRING TWO DIFFERENT ARRAY PARRAMETER
    allowChars += includeUpperCase ? uppercaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return ` (password length must be at least 1)`;

    }
    if (allowChars.length === 0) {
        return `(At least 1 set of characters needs to be selected)`;

    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex];

    }


    return password;
}

const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);
