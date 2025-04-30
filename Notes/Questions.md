
## ✅ **Top OOP-Based JavaScript Interview Questions (With Theory Answers)**

---

### 🔹 **1. What is Object-Oriented Programming (OOP)?**

**Answer:**
Object-Oriented Programming (OOP) is a programming paradigm that uses **objects** to model real-world entities. These objects contain **data (properties)** and **functions (methods)**. OOP makes code reusable, modular, and easier to manage in large applications.

---

### 🔹 **2. What are the main principles of OOP?**

**Answer:**
The four main principles of OOP are:

- **Encapsulation**: Bundling data and methods into a single unit (class).
- **Abstraction**: Hiding complex internal details and showing only relevant features.
- **Inheritance**: Acquiring properties and methods from another class.
- **Polymorphism**: One interface, many implementations — the same method behaves differently depending on the object.

---

### 🔹 **3. How is OOP implemented in JavaScript?**

**Answer:**
JavaScript is prototype-based but supports OOP using:
- **Object literals**
- **Constructor functions**
- **ES6 Classes** (syntactic sugar over prototype-based inheritance)

---

### 🔹 **4. What is the difference between a class and an object in JS?**

**Answer:**
- A **class** is a blueprint or template to create objects.
- An **object** is an instance of a class with actual values.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
let p1 = new Person("Alice"); // p1 is an object
```

---

### 🔹 **5. What is a constructor in JavaScript?**

**Answer:**
A constructor is a special method used for creating and initializing objects created with a class. It’s automatically called when an object is created.

```javascript
class Car {
  constructor(model) {
    this.model = model;
  }
}
```

---

### 🔹 **6. What is inheritance in JavaScript?**

**Answer:**
Inheritance allows a class (child) to acquire properties and methods from another class (parent), promoting code reuse.

```javascript
class Animal {
  sound() {
    return "Some sound";
  }
}

class Dog extends Animal {
  sound() {
    return "Bark";
  }
}
```

---

### 🔹 **7. What is polymorphism in JavaScript?**

**Answer:**
Polymorphism allows objects of different classes to be treated through the same interface. It enables method overriding, where a subclass redefines a method from its parent.

---

### 🔹 **8. What is encapsulation and how is it implemented in JavaScript?**

**Answer:**
Encapsulation is the concept of hiding internal object details and exposing only what’s necessary.

In ES6, private fields can be created using the `#` prefix:

```javascript
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

### 🔹 **9. What is abstraction in JavaScript?**

**Answer:**
Abstraction means exposing only necessary details to the user and hiding the complexity. This can be achieved using private fields/methods in classes.

---

### 🔹 **10. What is the prototype chain?**

**Answer:**
Every JS object has an internal link to another object called its **prototype**. This chain of prototypes is called the **prototype chain** and is used for inheritance and method lookup.

---

### 🔹 **11. What is the difference between classical and prototype-based inheritance?**

**Answer:**
- **Classical inheritance** (like in Java/C++): Uses classes and instances.
- **Prototype-based inheritance** (JavaScript): Objects inherit directly from other objects.

---

### 🔹 **12. What is the `this` keyword in OOP JS?**

**Answer:**
`this` refers to the object that is executing the current function. Its value depends on how the function is called.

---

### 🔹 **13. What is the difference between `Object.create()` and `class` in JS?**

**Answer:**
- `Object.create()` sets up an object directly with a specific prototype.
- `class` is a cleaner, more organized syntax introduced in ES6 to define constructor functions and inheritance.

---

### 🔹 **14. Can JavaScript support multiple inheritance?**

**Answer:**
Not directly. JavaScript does not support multiple inheritance through classes. However, **mixins** can be used to copy properties from multiple sources into one object.

---

### 🔹 **15. What are getters and setters in JS OOP?**

**Answer:**
Getters and setters allow you to define object accessors.

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```




## 🔸 1. **What is Object-Oriented Programming (OOP)?**

### ✅ Theory:
OOP is a programming paradigm based on the concept of "objects" which can contain data (properties) and code (methods). OOP helps in organizing code, reusability, and scalability.

### ✅ Code:
```javascript
let person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is John
```

---

## 🔸 2. **What are the four pillars of OOP in JavaScript?**

### ✅ Theory:
1. **Encapsulation** – Bundling data and methods that operate on that data.
2. **Abstraction** – Hiding complexity and showing only necessary details.
3. **Inheritance** – One class inherits the properties and methods of another.
4. **Polymorphism** – Same method behaves differently on different objects.

---

## 🔸 3. **How do you create a class and object in JavaScript (ES6)?**

### ✅ Code:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("Alice");
p1.greet(); // Hi, I'm Alice
```

---

## 🔸 4. **Explain `this` keyword with an example.**

### ✅ Theory:
`this` refers to the object that is executing the function. In a method, it refers to the object. Alone, it refers to the global object (or `undefined` in strict mode).

### ✅ Code:
```javascript
const user = {
  name: "Bob",
  sayName() {
    console.log(this.name);
  }
};

user.sayName(); // Bob
```

---

## 🔸 5. **What is inheritance in JS?**

### ✅ Theory:
Inheritance allows one class to acquire properties and methods of another class using the `extends` keyword.

### ✅ Code:
```javascript
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

const d = new Dog();
d.sound(); // Bark
```

---

## 🔸 6. **What is a prototype?**

### ✅ Theory:
In JavaScript, every object has an internal property called `[[Prototype]]` which points to another object. This allows objects to inherit methods from others.

### ✅ Code:
```javascript
function Car(brand) {
  this.brand = brand;
}

Car.prototype.honk = function() {
  console.log(`${this.brand} says beep!`);
};

const c = new Car("Toyota");
c.honk(); // Toyota says beep!
```

---

## 🔸 7. **How to implement Encapsulation in JavaScript?**

### ✅ Theory:
Encapsulation means restricting access to some of the object’s components.

### ✅ Code:
```javascript
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
```

---

## 🔸 8. **What is method overriding (Polymorphism)?**

### ✅ Theory:
Polymorphism allows the same method name to behave differently based on the object/class.

### ✅ Code:
```javascript
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

const s = new Shape();
const c = new Circle();

s.draw(); // Drawing a shape
c.draw(); // Drawing a circle
```

---

## 🔸 9. **What is Abstraction in JavaScript?**

### ✅ Theory:
Abstraction means showing only essential features and hiding the implementation details.

### ✅ Code:
```javascript
class Vehicle {
  #startEngine() {
    console.log("Engine started");
  }

  drive() {
    this.#startEngine();
    console.log("Driving...");
  }
}

const car = new Vehicle();
car.drive(); // Engine started \n Driving...
```

---

## 🔸 10. **Difference between `call()`, `apply()`, and `bind()`?**

### ✅ Theory:
- `call()` – invokes function with `this` and individual arguments.
- `apply()` – same as `call()` but with arguments as an array.
- `bind()` – returns a new function with `this` bound to provided value.

### ✅ Code:
```javascript
const person = {
  name: "John"
};

function sayHello(age) {
  console.log(`Hello, I'm ${this.name} and I'm ${age}`);
}

sayHello.call(person, 30); // Hello, I'm John and I'm 30
sayHello.apply(person, [25]); // Hello, I'm John and I'm 25
const boundFunc = sayHello.bind(person, 40);
boundFunc(); // Hello, I'm John and I'm 40
```

---
