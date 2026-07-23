// Promise = An object that manages asynchronous operations.
//          Wrap a Promise Object around {asynchronous code}
//          "I promise to return a Value"
//          PENDING -> REJECTED
//          new Promise((resolved, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. Walk the dog
// 2. Clean the Kitchen
// 3. Take out the trash 

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walked the dog")
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen")
        }, 2500)
    })
}


function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash")
        }, 500)
    })
}

//walkDog(() => {
//    cleanKitchen(() => {
//        takeOutTrash(() => console.log("You finshed all the chores"))
//    })
//})

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); return console.log("You finshed All the tasks") })

// this is hella better than callbacks or callback hell 

// WHEN ASYNCHRONOUS FUNCTION FAILED. THAT'S WHERE THE REJECT FUNCTION COMES IN

function walkWithDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if (dogWalked) {
                resolve("You walked with the dog")
            }
            else {
                reject("You lazy ass did not walked the dog")
            }
        }, 1500)
    })
}

function cleaningInKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleaningInKitchen = false;
            if (cleaningInKitchen) {
                resolve("You actually cleaned the kitchen")
            }
            else {
                reject("Lazy fuck")
            }
        }, 2500)
    })
}


function TakingOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const talkTrashOut = false
            if (talkTrashOut) {
                resolve("Good dog")
            }
            else {
                reject("You're cooked bro")
            }
        }, 500)
    })
}

walkWithDog().then(value => { console.log(value); return cleaningInKitchen() })
    .then(value => { console.log(value); return TakingOutTrash() })
    .then(value => { console.log(value); return console.log("You finshed All the your damn tasks") })
    .catch(error => console.error(error))