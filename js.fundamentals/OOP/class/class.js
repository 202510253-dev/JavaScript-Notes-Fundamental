// class = (ES6 feature) provides a more structure and cleaner way to work with objects compared 
//         to traditional constructor functions.
//         ex.  static keyword, encapsulation, injeritance
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);

    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);

    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Hoodie", 32.99);
const product3 = new Product("Pants", 20.99);



product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

//const total = product1.calculateTotal(salesTax);
const total = product3.calculateTotal(salesTax);


console.log(`Total Price (with tax): $${total.toFixed(2)}`)