
// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

function Rectangle(length, width) {
    this.length = length;
    this.width = width;

    this.area = function() {
        return this.length * this.width;
    };

    this.perimeter = function() {
        return 2 * (this.length + this.width);
    };
}

const rect = new Rectangle(5, 10);

console.log("Area:", rect.area());       
console.log("Perimeter:", rect.perimeter());

