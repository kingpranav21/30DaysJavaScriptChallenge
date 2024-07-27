//Activity - 1 Understanding Closures

// task - 1 Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function sum() {
    let num1 = 22;
    let num2 = 23;
    let add = num1 + num2;

    function half(){
        console.log(add);
    }
    half()
}
sum();

//task - 2 Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function maintain() {
     let counter = 0;
     function increment() {
        counter += 1;
     }
     function getValue() {
         return counter;
     }
    
    return { increment, getValue };
}

const newCounter = maintain();
newCounter.increment();
newCounter.increment();
console.log(newCounter.getValue());


//Activity - 3 Practical Closures

//task - 3 Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
    let lastId = 0;

    return function() {
        lastId += 1;
        return lastId;
    }
    
}
const id = generateId();
console.log(id());

// task -4 Create a closure that captures a user's name and returns a function that greets the user by name.
function greetByName(name) {
    return function () {
        return `Hey, ${name}`
    }
}

const greet = greetByName('Maya')
console.log(greet());

//Activity - 4 Closures in Loops

//task - 5 Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function logOutFn(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = function () {
            console.log(i);
        };
    }
    return arr;
}
const logFunctions = logOutFn(6);

for (let fn of logFunctions) {
    fn();
}

//Activity - 5 Module Pattern

//task - 6 Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
 

const collection = () => {
    let items = [];

    return {
        add: (item)=>{
            items.push(item);
        },
        remove: (item) => {
           //changing contents of items
            items = items.filter((it) => it !== item);
            //creates array where item is not there, it are the items already in array
        },
        list: () => {
            return items;
        }
    }
}

const itemCollection = collection();
itemCollection.add('Vercel');
itemCollection.add("CloudFlare");
itemCollection.add("Render");

console.log(itemCollection.list());

itemCollection.remove('CloudFlare');

console.log(itemCollection.list());


//Activity - 5 Memoization

//task - 7 Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
//Memoization is achieved in js like this:
function memoize(fn) { //this is memoize function that takes any fn, memoize ir
    const cache = {}; //cache is the obj where res is stored in key-vtlue pairs

    // this is done using closures(to minimise lexical scoping)
    // and Higher order functions(to pass functions inside function)

    
    return function (...args) { //closure in which arguments of fn are passed using spread operator
        
        const key = JSON.stringify(args); //to store a key is created by converted argument object into a string

        if (cache[key]) { //if res is already present function is not performed again
            return cache[key];
        }

        const res = fn(...args); //storing function result after calculating in res
        cache[key] = res; //then in cache using the stringified key

        return res;
    }
}
const add = (a, b) => a + b;
const addVal = memoize(add);

console.log(addVal(3, 4));
console.log(addVal(3, 4)); //returns memoized value

//task - 8 Create a memoized version of a function that calculates the factorial of a number.
const factorial = (n) => (n <= 1) ? n : n * factorial(n - 1);

const memoizedFact = memoize(factorial);
console.log(memoizedFact(5));
