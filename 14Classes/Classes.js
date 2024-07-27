// Activity - 1  Class Definition


// task - 1 Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person{
    constructor(name, age, firstName, lastName) {
        this.name = name;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName
    }
    greet() {
        return (`Hey, Myself ${this.name} , ${this.age} years old`);
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName,lastName] = name.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;
    }
    updateAge(newAge) {
        this.age = newAge;
    }
    static greetMessage() {
        return 'Bonjour';
    }
}

const person1 = new Person('Pranav', 22);
console.log(person1.greet());

//task - 2 Add a method to the Person class that updates the age property and logs the updated age.
person1.updateAge(32);
console.log(person1.age);

//Activity- 3 Class Inheritance

//task - 3Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID

class Student extends Person{
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Person.studentCount+=1;
    }
    greet() {
        return `Hey, Myself ${this.name} , ${this.age} years old, my id is ${this.studentId}`;
    }
    returnId() {
        return `${this.studentId}`;
    }
    
}

const newSt = new Student('Rohan', 21, 2456);
console.log(newSt.returnId());

//task - 4 Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(newSt.greet());

//Activity - 3 Static Methods and Properties

//task - 5 Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

console.log(Person.greetMessage());

//task - 6 Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(`Total Students: ${Student.studentCount}`);

//Activity - 4 Getters and Setters

//task - 7 Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
const person2 = new Person('Rohan', 23, 'Rohan', 'Kumar');
console.log(person2.fullName);

//task - 8 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
person2.fullName = 'Nanda Swami';
console.log(person2.fullName);

//Activity - 5  Private Fields

//task - 9 Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class Account{
    #balance;
    constructor(initalBalance = 0) {
        this.#balance = initalBalance;
    }

    deposit(money) {
        this.#balance += money;
    }

    withdraw(money) {
        this.#balance -= money;
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new Account(1000);
// task -10 Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
account1.withdraw(200);
console.log(account1.getBalance());

account1.deposit(120000);
console.log(account1.getBalance());

account1.withdraw(120900);
console.log(account1.getBalance());