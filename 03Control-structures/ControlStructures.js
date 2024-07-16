//Activity -1

//task - 1
let num = -3;
if (num > 0) {
    console.log(`${ num } is positive`);
} else if (num < 0) {
    console.log(`${ num } is negative`);
} else {
    console.log(`${num} is zero`)
}

//task - 2
let age = 24;
if (age >= 18) {
    console.log("Person is eligible to vote");
} else {
    console.log("Person is not eligible to vote");
}

//Activity - 2

// task -3
let a = 3, b = 4, c = -2;

if (c >= a) {
    if (c >= b) {
        console.log("c is larger");
    }
} else if (b >= a) {
    if (b >= c) {
        console.log("b is larger");        
    }
} else {
        console.log("a is larger");
}

//Activity - 3

//task - 4
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 6:
    console.log("Sunday");
    break;
  default:
    console.log("Enter Value b/w 1-7");
    break;
}

//task - 5

let score = 10;

switch (true) {
    case (score <= 100 && score >= 90):
        console.log("A");
        break;
    case (score <= 89 && score >= 75):
        console.log("B");
        break;
    case (score <= 74 && score >= 60):
        console.log("C");
        break;
    case (score <= 59 && score >= 50):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}

//Activity - 4 

//task - 6
let it = 5;

it % 2 === 0 ? console.log("Even") : console.log("Odd");

//Activity - 5

//task - 7
let year = 2000;

if ((year % 4 === 0) && (year % 100 !== 0) || (year%400===0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
