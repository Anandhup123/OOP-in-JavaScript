// Parent class
class Vehicle {
	constructor(name) {
	  this.name = name;
	  this.type = 'Vehicle';
	}

	// Method to describe the vehicle
	describe() {
	  console.log(`${this.name} is a ${this.type}.`);
	}
  }

  // Child class
  class Car extends Vehicle {
	constructor(name, brand) {
	  super(name); // Call the parent class constructor
	  this.brand = brand;
	}

	// Method to simulate driving the car
	drive() {
	  console.log(`The ${this.brand} car is driving.`);
	}
  }

  // Create an instance of the Car class
  const myCar = new Car('Sedan', 'Toyota');

  // Call the methods
  myCar.describe(); // Output: Sedan is a Vehicle.
  myCar.drive();    // Output: The Toyota car is driving.
