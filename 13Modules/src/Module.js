import sum from "./Sum";
import human from "./Object";
import { sub,rem,prod } from "./Function";
import { greet } from "./SingleFn";
import * as game from "./Activity03";
import _ from 'lodash'
import axios from 'axios';

// Activity - 1 Creating and Exporting Modules
//task - 1 Create a module that exports a function to add two numbers. Import and use this module in another script.
const res = sum(3, 4);
console.log(res);

//task - 2 Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const humanAge = human.age;
const nature = human.attack();

console.log(humanAge);
console.log(nature);

//Activity - 2 Named and Default Exports

//task - 3 Create a module that exports multiple functions using named exports. Import and use these functions in another script.
console.log(sub(10, 5));
console.log(rem(10, 5));
console.log(prod(10, 5));

//task - 4 Create a module that exports a single function using default export. Import and use this function in another script.
console.log(greet());

//Activity - 3 Importing Entire Modules

//task - 5 Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
console.log(game.pi);
console.log(game.play());

//Activity - 4  Using Third-Party Modules
//task - 6 Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const arr = [1, 2, 3, 4, 5, 6];
const shuffledArray = _.shuffle(arr);

console.log(shuffledArray);

//task - 7 Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const fetchData = async () => {
    try {
        const response = await axios.get(
          "https://api.github.com/users/Kingpranav21"
        );
        const data = response; //response is not a fn
        console.log(data);
    } catch(error){
        console.error('Error', error.message);
    }
}
fetchData();

//Activity - 5 Module Bundling 

//task - 8 Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// bundled the project using webpack in bundle.js

