### **Class and Object in JavaScript**

In JavaScript, **classes** and **objects** are fundamental concepts in Object-Oriented Programming (OOP).

---

### 1. **Class**

A **class** is a blueprint for creating objects. It defines the properties and behaviors (methods) that the objects created from the class will have.

#### Syntax:

```javascript
class ClassName {
  constructor() {
    // Initialize properties
  }

  methodName() {
    // Define behavior
  }
}
```

#### Example of a Class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age;   // Property
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

---

### 2. **Object**

An **object** is an instance of a class. When you create an object, it uses the blueprint defined by the class.

#### Creating an Object:

```javascript
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);
```

#### Accessing Properties and Methods:

```javascript
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
```

---

### Complete Example

```javascript
// Defining a class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
  }
}

// Creating objects from the class
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Civic', 2022);

// Using the objects
car1.displayDetails(); // Output: Car: Toyota Camry, Year: 2020
car2.displayDetails(); // Output: Car: Honda Civic, Year: 2022
```

---

### Key Points:

1. **Class**: Defines the structure (properties and methods) of an object.
2. **Object**: An instance of the class.
3. **Constructor**: The `constructor` method initializes the object's properties.
4. **Method**: A function inside a class that defines behavior.

This helps in organizing code and reusing the blueprint to create multiple objects with similar structures.