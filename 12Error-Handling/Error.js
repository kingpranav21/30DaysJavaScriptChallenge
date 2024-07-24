//Activity - 1 Basic Error Handling with Try-Catch

const { useSyncExternalStore } = require("react");

//task - 1 Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const throwError = () => {
  throw new Error("This is an intentional error!");
};

try {
  throwError();
} catch (error) {
  console.error(`Error : ${error.message}`);
}

//task - 2 Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

const divide = (num1, num2) => {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    throw Error(`${num2} is equal to zero`);
  }
};

try {
  console.log(divide(10, 5));
} catch (err) {
  console.error(err.message);
}

//Activity - 2 Finally Block

//task - 3 Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.


try {
  console.log(divide(10, 0));
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Program completed");
}

//Activity - 3 Custom Error Objects

//task - 4 Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
//inherited properties from error class
class customError extends Error {
  constructor(message) {
    super(message); //super keyword calls parent "Error" class message
    this.name = "CustomError"; //setting the error name to this
  }
}

const handleError = () => {
  try {
    throw new customError("This is a custom error");
  } catch (error) {
    if (error instanceof customError) {
      console.error("Error occured", error.message);
      //yes it is an instance of customError
      //instanceof keyword is used to check if it is instance of customError
    } else {
      console.error("Unexpected Error !", error.message);
    }
  }
};

handleError();

//task - 5 Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation error";
  }
}
const isStringEmpty = (input) => {
  try {
    if (input.trim() === "") {
      throw new ValidationError("String is empty");
    }
    console.log("Input is valid", input);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Error Occured V!", error.message);
    } else {
      console.error("Unexpected Error", error.message);
    }
  }
};

isStringEmpty("");

//Activity - 4 Error Handling in Promises



//task - 6 Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise = new Promise((res, rej) => {
  const isOdd = Math.floor(Math.random() * 10);
  // 0 to 9
    setTimeout(() => {
        if (isOdd % 2 !== 0) {
            res(`"This is Odd", ${isOdd}`);
        } else {
            rej(`"This is Even", ${isOdd}`);
        }
    }, 2000);
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

//task - 7 Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
function randomPromise() {
    return new Promise((res, rej) => {
        const random = Math.random();

        setTimeout(() => {
           if (random > 0.8) {
               res('Succeed!');
           } else {
               rej(new Error('Failed'));
           }
        },3000)
    })
}
const handlePromise = async() => {
    try {
        const result = await randomPromise(); 
        console.log(result);
    } catch (error) {
        console.error('Error', error.message);
    }
}

handlePromise();


// Activity - 5 Graceful Error Handling in Fetch

//task- 8 Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("/contact.html")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error', error.message));

//logs out : Error fetch() URL is invalid
    
//task - 9  Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const fetchData = async() => {
    try {
        const response = await fetch("/contact.html");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error encountered !', error.message);
    }
}
//logs out : Error fetch() URL is invalid
fetchData();