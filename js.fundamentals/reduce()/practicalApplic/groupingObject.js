// Building a "Look-up" Map (For Performance)
// If you have an array of 10,000 products and you constantly need to find a specific product by its ID, using .find() over and over is very slow. Instead, developers use reduce() to turn that array into an object lookup dictionary.

const employees = [
    { name: 'Alice', dept: 'Engineering' },
    { name: 'Bob', dept: 'Marketing' },
    { name: 'Charlie', dept: 'Engineering' }
];

// We start with an empty object {} as our initial accumulator value
const groupedByDept = employees.reduce((accumulator, employee) => {
    const dept = employee.dept;

    // If the department doesn't exist in our object yet, create an empty array
    if (!accumulator[dept]) {
        accumulator[dept] = [];
    }

    // Push the employee into that department's list
    accumulator[dept].push(employee);

    return accumulator;
}, {}); // <--- This {} is the initial value

console.log(groupedByDept);