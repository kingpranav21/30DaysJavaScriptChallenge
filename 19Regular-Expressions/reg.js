//Activity - 1 Basic Regular Expressions

//task - 1  Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const regex = /JavaScript/g;
const expression = 'In JavaScript, Strings are immuatable : JavaScript';
console.log(expression.match(regex));

//task - 2 Write a regular expression to match all digits in a string. Log the matches.

const regex1 = /\d/g;
const expression1 = 'she will turn 19 in 2025';
console.log(expression1.match(regex1));

//Activity - 2  Character Classes and Quantifiers
//task -3 Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const regex2 = /\b[A-Z][a-z]*\b/g;
const expression2 = 'Hi, Myself Pranav ahuja';
console.log(expression2.match(regex2));

//task -4 Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const regex3 = /\d+/g;
const expression3 = "she will turn 19 in 2025";
console.log(expression1.match(regex3));

//Activity - 3 Grouping and Capturing
//task - 5 Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const regex4 = /\((\d{3})\)(\d{3})-(\d{4})/;
const exp = "I am 24 years old, my contact is (091)982-7890";

const rg = exp.match(regex4);
if (rg) {
    const areaCode = rg[1];
    const centralOfficeCode = rg[2];
    const lineNumber = rg[3];

    console.log('Area Code:', areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log('Line Number:', lineNumber);
}
// pranav_12@yahoo.com

//task - 6 Write a regular expression to capture the username and domain from an email address. Log the captures.
const regex5 = /^([a-zA-Z0-9.+-_%]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const expression5 = "pranav34_+.CS@stanford.edu.in";
const exp5 = expression5.match(regex5);

if (exp5) {
    const username = exp5[1];
    const domain = exp5[2];
    console.log('username', username);
    console.log('domain', domain);
}

//Activity - 4 Assertions and Boundaries
//task - 7 Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const regex6 = /^\w+/g;
const exp6 = "Javascript : I love JavaScript";

const matches = exp6.match(regex6);

console.log(matches);

//task - 8 Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const regex7 = /\w+$/g;
const matches_ = exp6.match(regex7);

console.log(matches_);

//Activity - 5 Practical Applications


//task - 9 Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const regex8 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%*?&])([a-zA-Z\d@!$%*?&]){8,}$/;
  
const pass = 'Jupiter43@';

console.log(regex8.test(pass));

//task - 10 Write a regular expression to validate a URL. Log whether the URL is valid.
const regex9 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]*)?$/;

console.log(regex9.test("https://regexr.com/"));
