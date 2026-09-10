const rosePrice = 8;
let lilyPirce = 10;
let tulipPrice = 2;  

const roseQuantity = 70;
let lilyQuantity = 50;
let tulipQuantity = 120;

const roseTotal = rosePrice * roseQuantity;
let lilyTotal = lilyPirce * lilyQuantity;
let tulipTotal = tulipPrice * tulipQuantity;

const grandTotal = roseTotal + lilyTotal + tulipTotal;

console.log(`
    Rose Unit Price: ${rosePrice}
    Rose Quantity: ${roseQuantity}
    Rose Total: ${roseTotal} 
    `);

console.log(`
    Lily Unit Price: ${lilyPirce}
    Lily Quantity: ${lilyQuantity}
    Lily Total: ${lilyTotal}
    `);


console.log(`
    Tulip Unit Price: ${tulipPrice}
    Tulip Quantity: ${tulipQuantity}
    Tulip Total: ${tulipTotal}
    `);

console.log(`Total: ${grandTotal}`);