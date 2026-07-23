// Async/Await = Async = Makes a function return a promise
//             = Await = Makes an async function wait for a promise

//             Allows you write synchronous code in a synchronous manner
//             Async doesn't have resolve or reject paramenters
//             Everything after Await is palced in a n event queque

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walked the dog")

            reject("You didn't walked the damn dog")
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


async function doChores() {

    const walkDogResult = await walkDog();
    console.log(walkDogResult)


    const cleanedKitchenResult = await cleanKitchen();
    console.log(cleanedKitchenResult)

    const takenOutTrashResult = await takeOutTrash();
    console.log(takenOutTrashResult)

    console.log("You finshed all the chores")

}

doChores()