// static = keyword that defines properties or methods that belongs to a class itself rather than the objects created from that class
// (class owns anything static, not the objects)

//class MathUtil {
//    static PI = 3.14159; // ONCE AGAIN, ANYTHING THAT IS DECLAIRED (STATIC) BELONGS TO CLASS. YOU DON'T NEED OBJECT TO TYPE. 

//    static getDiameter(radius) {
//        return radius * 2;
//    }
//    static getcicumference(radius) {
//        return 2 * this.PI * radius;
//    }
//    static getArea(radius) {
//        return this.PI * radius * radius;
//    }

//}

//console.log(MathUtil.PI);
//console.log(MathUtil.getDiameter(10));
//console.log(MathUtil.getcicumference(10));
//console.log(MathUtil.getArea(10));

// ============================= EXAMPLE 2 =============================

class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;

    }

    static getUserCount() {
        console.log(`There are ${User.userCount} user online`);
    }
    sayHello() {
        console.log(`Hellow, my username is ${this.username}`);
    }

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

console.log(user1.username);
console.log(user1.userCount); // This will result to undefined because the userCount belongs to the class with the static.
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);



