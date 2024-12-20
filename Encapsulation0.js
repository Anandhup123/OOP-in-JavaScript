class Student {
	#name; // Private field

	constructor(name, grade) {
	  this.#name = name; // Private property
	  this.grade = grade; // Public property
	}

	// Public method to get the student's name
	getName() {
	  return this.#name;
	}

	// Public method to update the student's name
	setName(newName) {
	  if (newName) {
		this.#name = newName;
	  } else {
		console.log('Invalid name');
	  }
	}

	// Public method to display student info
	displayInfo() {
	  console.log(`Student: ${this.#name}, Grade: ${this.grade}`);
	}
  }

  // Creating an instance of the Student class
  const student1 = new Student('Alice', 'A');

  // Accessing public methods
  student1.displayInfo(); // Output: Student: Alice, Grade: A

  // Updating the name using the setter
  student1.setName('Bob');
  student1.displayInfo(); // Output: Student: Bob, Grade: A

  // Trying to access the private field directly (will cause an error)
  // console.log(student1.#name); // ❌ Error: Private field '#name' must be declared in an enclosing class
