// Parent class
class Shape {
	constructor(color) {
	  this.color = color;
	  this.type = 'Shape';
	}

	// Method to describe the shape
	describe() {
	  console.log(`This is a ${this.color} ${this.type}.`);
	}
  }

  // Child class
  class Circle extends Shape {
	constructor(color, radius) {
	  super(color); // Call the parent class constructor
	  this.radius = radius;
	}

	// Method to calculate the area of the circle
	area() {
	  return Math.PI * this.radius * this.radius;
	}
  }

  // Create an instance of the Circle class
  const myCircle = new Circle('red', 5);

  // Call the describe method
  myCircle.describe(); // Output: This is a red Shape.

  // Calculate and log the area of the circle
  console.log(`The area of the circle is: ${myCircle.area().toFixed(2)}`); // Output: The area of the circle is: 78.54
  