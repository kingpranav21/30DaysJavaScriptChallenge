//Activity - 1 Array Creation and Access

//task - 1 Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//task - 2 Access the first and last elements of the array and log them to the console.
let n = arr.length
console.log(arr[0]); //first
console.log(arr[n - 1]); //last

//Activity - 2 Array Methods (Basic)

//task - 3 Use the push method to add a new number to the end of the array and log the updated array.
arr.push(-1);
console.log(arr);

//task - 4 Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

//task - 5 Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

//task - 6 Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(0);
console.log(arr);


//Activity - 3 Array Methods (Intermediate)

//task - 7 Use the map method to create a new array where each number is doubled and log the new array.

const nums = arr.map(doubleNumbers);
function doubleNumbers(num){
  return num * 2;
};
console.log(nums);

//task - 8 Use the filter method to create a new array with only even numbers and log the new array.
const evenArray = arr.filter(filterEven);
function filterEven(num) {
    if (num % 2 == 0) {
        return num;
    }
}
console.log(evenArray);

//task - 9 Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sumArr = arr.reduce(findSum);

function findSum(total, num) {
    return total + num;
}
console.log(sumArr);

//Activity - 4 Array Iteration

//task - 10  Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//task - 11 Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(Iterate);
function Iterate(val) {
    console.log(val);
}

//Activity - 5 Multi-dimensional Arrays

//task - 12 Create a two-dimensional array (matrix) and log the entire array to the console.
const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < mat.length; i++){
    for (let j = 0; j < mat[0].length; j++){
        console.log(mat[i][j]);
    }
}

//task - 13 Access and log a specific element from the two-dimensional array.

console.log(mat[0][2]);