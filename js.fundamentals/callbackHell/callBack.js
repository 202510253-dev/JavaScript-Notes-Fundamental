// CALLBACK HELL = Situation in JavaScript where Callbacks are nested within other callbacks to the degree where the code is difficult to read.
//                Old pattern to handle asychronouos function
//               Use Promises + async/await to avoid Callback Hell


// this is SYNCRONOUOS
//function task1() {
//    console.log("Task 1 Complete")
//}

//function task2() {
//    console.log("Task 2 Complete")
//}

//function task3() {
//    console.log("Task 3 Complete")
//}

//function task4() {
//    console.log("Task 4 Complete")
//}

//task1()
//task2()
//task3()
//task4()
//console.log("All tasks compelte")

// this is Asynchronouos
// doesn't wait around for amother to finish

let counter = 0;

function checkCompletion() {
    if (counter === 4) {
        console.log("All task are completed") // this count or tracked
    }
}



function task1(callback) {

    setTimeout(() => {
        counter++;
        console.log(`task 1: Completed`);
        checkCompletion();
        callback();
    }, 2000)
}


function task2(callback) {

    setTimeout(() => {
        counter++;
        console.log(`task 2: Completed`);
        callback();
        checkCompletion();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        counter++;
        console.log(`task 3: Completed`);
        callback()
        checkCompletion();
    }, 5000);
}

function task4(callback) {
    setTimeout(() => {
        counter++;
        console.log(`task 4: Completed`);
        callback();
        checkCompletion();
    }, 3000);
}


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All task is complete")) // while this focuses on order
        })
    })
})

// THIS IS CALLBACK HELL. AS YOU GO FURTHER. YOU WILL CREATE A MASSIVE PYRAMID STYLE
