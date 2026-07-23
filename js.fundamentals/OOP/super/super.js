// super = keyword is used in classes to call the constructor or access the properties and method of a parent (superclass)
//       this = this object
//       super = the parent
//      the chid of superclass is called SUBCLASSES

class Animal {
    constructor(name, age,) {   // the base data all animals share
        this.name = name;
        this.age = age;
    }

    move(speed) {               // THIS CAN BE TOO DIRECTLY TRANSWFER TO THE SUBCLASSES USIN SUPER
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);               // WE CAN REMOVE THE (this.name) and (name.age) and just include them directly at the super
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed); // THIS REUSED FROM THE ANOTHER CONSTRUCTOR OF MAIN CLASS USING SUPER
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);               // this argument will be accepted using super
        this.swimSpeed = swimSpeed;

    }

    swim() {
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed);


    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);       // once again, this is the shared method, Any subclass can use this
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);

    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);


console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();

// OOP INHERITANCE:
// Parent Class (Superclass): The main blueprint containing shared properties/methods.
// Child Class (Subclass): The specialized blueprint that inherits from the Parent using 'extends'.
// super(): Calls the Parent's constructor. MUST be called before using 'this' in a subclass constructor.
// super.method(): Invokes a specific function written inside the Parent class.