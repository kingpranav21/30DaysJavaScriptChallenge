
//Activity - 1 Template Literals

//task - 1 Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let personName = "Perry Platypus";
let age = 7;

console.log(`${personName} is ${age} years old.`);

//task - 2 Create a multi-line string using template literals and log it to the console.

console.log(`${personName} is ${age} years old.
${personName} is ${age} years old.
${personName} is ${age} years old.
    `);

//Activity - 2 Destructuring

//task - 3 Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const whip = [1, 2, 3, 4];
const [first, second, third, fourth] = whip;
console.log(first);
console.log(second);

//task - 4 Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "Locke & Key",
    author: "Kinsey Locke"
}

const { title, author } = book;

console.log(title);
console.log(author);

//Activity - 3 Spread and Rest Operators

//task - 5 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const newArr = [...whip, 6, 7];
console.log(newArr);

//task - 6 Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum = (...numbers) => {
    return numbers.reduce((res, value) => res += value);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Activity - 4 Default Parameters

//task - 7 Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const showDetails = (friend, yourName = "Erin") => {
  return `${yourName} and ${friend} are friends`;
};
console.log(showDetails("Javi"));

//Activity - 5 Enhanced Object Literals

// task - 8 Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const villian = {
    power: 80,
    health: 100,
    attack() {
        return `Use ${this.power} and Hit`;
    },
    defend() {
        return this.health - 10;
    }
}
console.log(villian);

// task - 9 Create an object with computed property names based on variables and log the object to the console.

const propName = "favorite color";
const propVal = "Sky Blue";

const wall = {
    [propName]: propVal
}

console.log(wall);
