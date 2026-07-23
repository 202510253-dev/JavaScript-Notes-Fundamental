// Grouping Objects by a Property (Most Common)
// Imagine you pull a list of users from a database, and you need to group them by their department for a UI dashboard.

const products = [
    { id: 'p101', name: 'Laptop', price: 1000 },
    { id: 'p202', name: 'Phone', price: 500 }
];

const productLookup = products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {});

// Now, instead of looping through an array, you can instantly grab a product:
console.log(productLookup['p202']); 