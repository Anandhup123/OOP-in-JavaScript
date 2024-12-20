### **Encapsulation in JavaScript**

**Encapsulation** is one of the core principles of Object-Oriented Programming (OOP). It refers to the practice of bundling data (properties) and methods (functions) that operate on that data into a single unit (a class) and restricting direct access to some of the object's components. This helps protect the object's state and ensure that the data is accessed and modified in a controlled way.

In JavaScript, encapsulation is implemented using:

1. **Public properties and methods** for open access.
2. **Private properties and methods** (using `#` syntax) for restricted access.
3. **Getters and setters** to control access to private fields.

---

### **Example of Encapsulation in JavaScript**

```javascript
class BankAccount {
  #balance; // Private field

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  // Public method to get the balance (read-only access)
  getBalance() {
    return `Current balance: $${this.#balance}`;
  }

  // Public method to deposit money (controlled way to modify the balance)
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`$${amount} deposited successfully.`);
    } else {
      console.log('Invalid deposit amount.');
    }
  }

  // Public method to withdraw money (controlled way to modify the balance)
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`$${amount} withdrawn successfully.`);
    } else {
      console.log('Invalid withdrawal amount or insufficient balance.');
    }
  }
}

// Creating an instance of BankAccount
const myAccount = new BankAccount('John Doe', 1000);

// Accessing public methods
console.log(myAccount.getBalance()); // Output: Current balance: $1000
myAccount.deposit(500);              // Output: $500 deposited successfully.
console.log(myAccount.getBalance()); // Output: Current balance: $1500
myAccount.withdraw(200);             // Output: $200 withdrawn successfully.
console.log(myAccount.getBalance()); // Output: Current balance: $1300

// Trying to access private field directly (will result in an error)
// console.log(myAccount.#balance);   // ❌ Error: Private field '#balance' must be declared in an enclosing class
```

---

### **Explanation of the Example**

1. **Private Field (`#balance`)**:
   - Declared using `#`, making it inaccessible outside the class.
   - Protects the account balance from being modified directly.

2. **Public Methods**:
   - **`getBalance()`**: Returns the current balance (provides read-only access).
   - **`deposit(amount)`**: Allows controlled deposits, ensuring only positive amounts are accepted.
   - **`withdraw(amount)`**: Allows controlled withdrawals, ensuring sufficient balance and valid amounts.

3. **Encapsulation Benefits**:
   - Protects the integrity of the `balance` by preventing direct modification.
   - Ensures the balance can only be changed through controlled methods (`deposit` and `withdraw`).
   - Enhances code maintainability and security.

---

### **Key Points**

- **Encapsulation** combines data and methods in a single class.
- Use **private fields** (`#`) to restrict direct access.
- Use **public methods** to expose controlled access to the private data.
- Improves **data security**, **integrity**, and **code clarity**.