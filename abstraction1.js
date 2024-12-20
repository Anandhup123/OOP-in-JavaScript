class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	getDetails() {
		return `Name: ${this.name}, Salary: ${this.salary}`;
	}
}

class Developer extends Employee {
	constructor(name, salary, language) {
		super(name, salary);
		this.language = language;
	}

	getDetails() {
		return `${super.getDetails()}, Language: ${this.language}`;
	}
}

class Manager extends Employee {
	constructor(name, salary, department) {
		super(name, salary);
		this.department = department;
	}

	getDetails() {
		return `${super.getDetails()}, Department: ${this.department}`;
	}
}

const dev = new Developer('Alice', 80000, 'JavaScript');
const mgr = new Manager('Bob', 90000, 'HR');

console.log(dev.getDetails());
console.log(mgr.getDetails());