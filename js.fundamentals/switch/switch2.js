let testScore = 32;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "c";
        break;
    case testScore >= 60:
        letterGrade = "d";
        break;
    default:
        letterGrade = "f";
}

console.log(letterGrade);