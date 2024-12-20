class Animal {
	#name;

	constructor(name) {
		this.#name = name;
	}

	getName() {
		return this.#name;
	}

	makeSound() {
		throw new Error('This method should be overridden!');
	}
}

class Dog extends Animal {
	makeSound() {
		console.log(`${this.getName()} says: Woof! Woof!`);
	}
}

class Cat extends Animal {
	makeSound() {
		console.log(`${this.getName()} says: Meow! Meow!`);
	}
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.makeSound(); // Buddy says: Woof! Woof!
cat.makeSound(); // Whiskers says: Meow! Meow!