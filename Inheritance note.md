### **Inheritance in JavaScript**

**Inheritance** is a core principle of Object-Oriented Programming (OOP). It allows one class (called the **child class** or **subclass**) to inherit properties and methods from another class (called the **parent class** or **superclass**). This promotes code reuse and helps in creating a hierarchical structure of classes.

---

### **Syntax of Inheritance**

In JavaScript, the `extends` keyword is used to create a subclass that inherits from a parent class.

#### Basic Structure:

```javascript
class ParentClass {
  constructor() {
    // Parent class properties
  }

  parentMethod() {
    // Parent class method
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super(); // Calls the parent class constructor
    // Child class properties
  }

  childMethod() {
    // Child class method
  }
}
```

---

### **Example of Inheritance**

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }
}

// Creating an instance of Dog
const myDog = new Dog('Buddy', 'Golden Retriever');

myDog.eat();  // Output: Buddy is eating.
myDog.bark(); // Output: Buddy is barking!
```

---

### **Explanation of the Example**

1. **Parent Class (`Animal`)**:
   - Has a property `name` initialized through the constructor.
   - Has a method `eat()`.

2. **Child Class (`Dog`)**:
   - Inherits from the `Animal` class using the `extends` keyword.
   - Calls the `super(name)` to invoke the parent class constructor and set the `name`.
   - Adds a new property `breed` and a new method `bark()`.

3. **Object (`myDog`)**:
   - The instance `myDog` can access both the `eat()` method from the parent class and the `bark()` method from the child class.

---

### **Key Points**

- **`extends`**: Used to create a subclass.
- **`super()`**: Calls the constructor of the parent class.
- The child class can add its own properties and methods while inheriting from the parent class.
- Promotes **code reuse** and helps in organizing code into logical hierarchies.