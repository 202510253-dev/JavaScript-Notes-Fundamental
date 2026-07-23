// getter = speacial method that makes a property readable
// setter - special method that makes a property writeable

// validate and modify a value when reading/writting a property

// THIS IS IMPORTANT BECAUSE IT VALIDATE WHETHER THE VALUE IS GARBAGE OR STRAIGHT UP USELESS 

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;                // Once again, (_) or bracket is stating that this is private and should not be touched or changed
        }
        else {
            console.error(`Width must be a positive number`);
        }

    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error(`Height must be a positive number`);
        }
    }

    get width() {       // this what sets them to be read by the console
        return `${this._width.toFixed(1)}cm`;
    }
    get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {                // area isn't even a property yet, can be declared using get
        return `${(this._width * this._height).toFixed(1)}cm`;
    }

}

const rectangle = new Rectangle(3, 4);      // without getters, this will be satisfied but not readable

rectangle.width = 5;
rectangle.height = 5;


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);    // we can access here like a property in getter