// Activity - 1 Object Creation and Access

// task-1 Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year : 1989
}

console.log(book);

//task - 2 Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

//Activity - 2 Object Methods

//task - 3 Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = () =>{
    return `${book.title} by ${book.author}`;
}

console.log(book.getDetails());

//task - 4 Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = (year) => {
    book.year = year;
}

book.updateYear(1967);

console.log(book)

//Activity - 3  Nested Objects

//task - 5  Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Mahaveer Library",
  books: [
    {
      title: "Harry Potter",
      author: "J.K Rowling",
      year: 2001,
    },
    {
      title: "Chamber of Secrets",
      author: "J.K Rowling",
      year: 2002,
    }
  ]
};

console.log(library);

//task - 6  Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach((book) => {
    console.log(book.title);
})

//task - 7 Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
book.printDetails = function() {
    return `${this.title} on ${this.year}`;
}


console.log(book.printDetails());

//Activity- 5 Object Iteration

//task - 8 Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const property in book) {
    console.log(`${property} : ${book[property]}`);
}

//task - 9 Use Object.keys and Object.values methods to log all the keys and values of the book object.

//to find the keys
const keys = Object.keys(book);

//to find the values
const values = Object.values(book);

console.log("Keys :");
console.log(keys);
console.log("Values :")
console.log(values);