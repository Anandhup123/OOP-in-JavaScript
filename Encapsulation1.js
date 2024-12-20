class Circle {
	#radius; // Private field

	constructor(radius) {
	  this.#radius = radius; // Initialize private field
	}

	// Public method to get the radius
	getRadius() {
	  return this.#radius;
	}

	// Public method to set a new radius with validation
	setRadius(newRadius) {
	  if (newRadius > 0) {
		this.#radius = newRadius;
	  } else {
		console.log('Radius must be a positive number.');
	  }
	}

	// Public method to calculate the area
	calculateArea() {
	  return Math.PI * this.#radius * this.#radius;
	}
  }

  // Creating an instance of the Circle class
  const myCircle = new Circle(5);

  // Accessing public methods
  console.log(`Radius: ${myCircle.getRadius()}`); // Output: Radius: 5
  console.log(`Area: ${myCircle.calculateArea()}`); // Output: Area: 78.53981633974483

  // Updating the radius using the setter
  myCircle.setRadius(10);
  console.log(`Updated Radius: ${myCircle.getRadius()}`); // Output: Updated Radius: 10
  console.log(`Updated Area: ${myCircle.calculateArea()}`); // Output: Updated Area: 314.1592653589793

  // Trying to set an invalid radius
  myCircle.setRadius(-3); // Output: Radius must be a positive number.

  // Trying to access the private field directly (will cause an error)
  // console.log(myCircle.#radius); // ❌ Error: Private field '#radius' must be declared in an enclosing class
