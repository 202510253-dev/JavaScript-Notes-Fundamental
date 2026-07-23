function createGame() {
    let score = 0;

    function increseScore(points) {
        score += points;
        console.log(`${points}pts`)

    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`)

    }

    function getScore() {
        return score;
    }

    return { increseScore, decreaseScore, getScore };

}
const game = createGame();

game.increseScore(5);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`)