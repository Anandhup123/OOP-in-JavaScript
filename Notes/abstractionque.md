### Problem:
Create a class `BankAccount` in JavaScript that demonstrates the concept of abstraction.

**Requirements:**
1. The class should allow creating an account with an initial balance.
2. It should include:
   - A **public method** to deposit money into the account.
   - A **public method** to check the account balance.
   - A **private method** to validate that the deposit amount is positive.
3. The private validation method should not be accessible outside the class.
4. Demonstrate the use of the public methods to deposit money and check the account balance.

Write the implementation of the `BankAccount` class and demonstrate its usage.
### Answer:

Here is the implementation of the `BankAccount` class based on the problem statement:

```javascript
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance; // Public property
  }

  // Public method to deposit money
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  // Public method to check balance
  checkBalance() {
    return `Current Balance: $${this.balance}`;
  }

  // Private method to validate deposit amount
  #validateAmount(amount) {
    return amount > 0;
  }
}

// Usage
const myAccount = new BankAccount(100); // Create an account with an initial balance
console.log(myAccount.checkBalance()); // Output: Current Balance: $100
myAccount.deposit(50); // Deposit $50
console.log(myAccount.checkBalance()); // Output: Current Balance: $150
myAccount.deposit(-20); // Attempt to deposit an invalid amount
// console.log(myAccount.#validateAmount(50)); // Error: Private method
```

### Output:
```plaintext
Current Balance: $100
Deposited: $50
Current Balance: $150
Invalid deposit amount.
```

### Problem:
Create a class `User` in JavaScript that demonstrates abstraction.

**Requirements:**
1. The class should take a username and password as input when creating a new user.
2. It should include:
   - A **public method** to display the username.
   - A **private method** to validate the password, ensuring it is at least 8 characters long.
3. The private method should not be accessible from outside the class.
4. Demonstrate the usage of the public method to display the username and validate the password internally during user creation.

Write the implementation of the `User` class and demonstrate its usage.

### Answer:

Here’s the implementation of the `User` class:

```javascript
class User {
  constructor(username, password) {
    this.username = username;
    if (this.#validatePassword(password)) {
      this.password = password;
      console.log("User created successfully!");
    } else {
      console.log("Password must be at least 8 characters long.");
    }
  }

  // Public method to display username
  displayUsername() {
    return `Username: ${this.username}`;
  }

  // Private method to validate password
  #validatePassword(password) {
    return password.length >= 8;
  }
}

// Usage
const user1 = new User("JohnDoe", "password123"); // Valid user
console.log(user1.displayUsername()); // Output: Username: JohnDoe

const user2 = new User("JaneDoe", "pass"); // Invalid password
// console.log(user2.#validatePassword("password123")); // Error: Private method
```

### Output:
```plaintext
User created successfully!
Username: JohnDoe
Password must be at least 8 characters long.
```