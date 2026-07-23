const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let atttemps = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`)
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`Please enter a valid number`)
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a valid number`);
    }
    else {
        atttemps++;
        if (guess < answer) {
            window.alert(`Too Low! Try again`);
        }
        else if (guess > answer) {
            window.alert(`Too High! try again`);
        }
        else {
            window.alert(`Correct! The asnwer was ${answer}. It took you ${atttemps}`);
            running = false;

        }
    }
}