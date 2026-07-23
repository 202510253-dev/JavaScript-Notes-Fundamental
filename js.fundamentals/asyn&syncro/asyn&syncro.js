// synchronous = Executes line by line consecutively in a sequential manner
//              Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to ve performed concurrently without waiting
//                 Doesn't block the execution flow and allows the program to continue 
//                 (I/O operations, network requests, fetching data)
//                 Handled withL Callbacks, Promises, Async/Await

function func1(callback) {
    setTimeout(() => { console.log("Task 1"); callback() }, 3000);

}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
///setTimeout(() => console.log("Task 1"), 3000); // EXAMPLE OF synchronous

func1(func2);


