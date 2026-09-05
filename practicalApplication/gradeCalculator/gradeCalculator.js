const calculate = () => {
    let chemistry = document.querySelector("#chemistry").value;
    let hindi = document.querySelector("#english").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let grades = "";

    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(hindi) +
        parseFloat(maths) +
        parseFloat(phy);

    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grades = "A";
    } else if (percentage <= 89 && percentage >= 80) {
        grades = "B";
    } else if (percentage <= 79 && percentage >= 75) {
        grades = "C";
    } else {
        grades = "F";
    }

    if (chemistry == "" || hindi == "" || maths == "" || phy == "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
        if (percentage >= 39.5) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` ${percentage}%. <br> Your grade is ${grades}. <br> You Pass. `;
        } else {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` ${percentage}%. <br> Your grade is ${grades}. <br> You Fail. `;
        }
    }
};