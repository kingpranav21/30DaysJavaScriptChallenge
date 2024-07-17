//Activity - 1 Function Declaration

//task - 1 Write a function to check if a number is even or odd and log the result to the console.

function CheckNum(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
CheckNum(42);

//task- 2 Write a function to calculate the square of a number and return the result.

function findSquare(num) {
    console.log(num * num);
}
findSquare(12);

//Activity - 2 Function Expression

//task - 3 Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a,b) {
    if (a < b) {
        console.log(`Max is ${b}`);
    } else {
        console.log(`Max is ${a}`);
    }
}

findMax(6, -66);

//task - 4 Write a function expression to concatenate two strings and return the result.

const formWord = function (str1, str2) {
    console.log(str1 + str2);
}

formWord("habit", "at");

// Activity - 3 Arrow Functions

//task - 5 Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) =>{
    console.log(a + b);
}
sum(45, 67);

//task - 6 Write an arrow function to check if a string contains a specific character and return a boolean value.


const hasSpecialChar = (str, ch) => {
    for (let i = 0; i < str.length; i++){
        if (str[i] === ch) {
            return true;
        }
    }
    return false;
}

const ans = hasSpecialChar("hi@hotmail", '@');

console.log(ans);
 
//Activity - 4  Function Parameters and Default Values

//task - 7 Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const prod = (a, b = 4) => a * b;

const prodAns1 = prod(7);
const prodAns2 = prod(4,3);
console.log(prodAns1);
console.log(prodAns2);

//task - 8 Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.


const getGreet = (Name, age = 18) => `Hello, My name is ${Name} and I am ${age} years old!`;

console.log(getGreet("Ada", 19));
console.log(getGreet("Thomas"));

//Activity - 5 Higher-Order Functions

//task-9 Write a higher-order function that takes a function and a number, and calls the function that many times.

const callIt = (func, times) => {
    for (let i = 0; i < times; i++){
        func();
    }
}
const wishThem = () => console.log("Happy Birthday !");

callIt(wishThem, 5);

//task - 10 Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const newHOH = (func1, func2, val) => {
    return func1(func2(val));
}

const add = (k) => k + 4;

const multiply = (k) => k * 2;

console.log(newHOH(add, multiply, 3));
