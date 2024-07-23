//Async Js

//Callback : it is a function that is passed as argument in other function

//Activity - 1 Understanding Promises

//task - 1 Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
//resolve and rejects are 2 arguments/params
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success, Promise is resolved !");
  }, 2000);
});

//to consume promise .then() and .catch() callbacks are there
promise.then((message) => console.log(message));

//task - 2  Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Sorry, The promise is rejected!");
  }, 2000);
});

promise2
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); //.error returns the actual error in red

//Activity - 2 Chaining Promises

//task - 3 Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const getData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        id: userId,
        username: "Kinsey Locke",
      };
      resolve(userData);
    }, 2000);
  });
};

const getImage = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userImages = [
        { id: 1, title: "img1" },
        { id: 2, title: "img2" },
      ];
      resolve(userImages);
    }, 3000);
  });
};

getData(12)
  .then((userData) => {
    console.log(userData);
    return getImage(userData.id);
  })
  .then((userImages) => {
    console.log(userImages);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Activity - 3 Using Async/Await

//task - 4 Write an async function that waits for a promise to resolve and then logs the resolved value.

const newPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Returning a promise using async/await");
    }, 6000);
  });
};
const greetMe = async () => {
  const message = await newPromise();
  console.log(message);
};
greetMe();

//task - 5 Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectedPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(new Error('Promise is rejected!'))
        },7000)
    })
}

const getPromise = async () => {
    try {
        const message = await rejectedPromise();
        console.log(message);
    }
    catch(error) {
        console.error('Error', error.message);
    }
}

getPromise();

//Activity - 4 Fetching Data from an API

//task - 6 Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://api.github.com/users/Kingpranav21")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.name);
        console.log(data.id);
    })
    .catch((err) => console.error(`Error : ${err}`));

//task - 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchData = async() => {
    try {
        const response = await fetch("https://api.github.com/users/Kingpranav21");
        const data = await response.json();
        console.log(data.bio);
    } catch(err) {
        console.error(`Error : ${err}`);
    }
}
fetchData();


//Activity - 5 Concurrent Promises

//task - 8 Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success, Promise is resolved 3!");
  }, 8000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success, Promise is resolved 4!");
  }, 9000);
});

Promise.all([promise3, promise4])
    .then((values) => console.log(values))
    .catch((err) => console.log(err))

//task - 9 Use Promise.race to log the value of the first promise that resolves among multiple promises.
    
Promise.race([promise3, promise4])
    .then((values) => console.log(values))
    .catch ((error) => console.error(error));
   