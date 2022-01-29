/*
Js is a single thread which has only one main thread which we called as a 
synchronous (blocked) method .That's why we need to perform asynchronous (non-blocking) 
method to load huge amount of data which we called a asynchronous method.
*/

/*****************  1.Promise   *****************/

/*
Creating a new promise and saving it to the variable name testLuck.Two 
arguments, resolve and reject are being passed, one for when the promise resolved and other
for when the promise is being rejected.
*/
/* const testLuck = new Promise((resolve, reject) => {
  Math.ceil(Math.random() * 10) === 4
    ? resolve("Lucky Number")
    : reject(new Error("Try Luck again!"));
});

testLuck
  .then((message) => {
    console.log(message); // Log the resolved value of promise.
  })
  .catch((error) => {
    console.error(error); // Log the reject value of promise.
  }); */

/*****************  2. async/await   *****************/

/* 
  Creating a aync/await function that returns a promise. Firstly, we create a new promise that 
  will be executed after 5 seconds, then we await the promise to resolve and save the value 
  returned to finalResult where output of the promise will be logged to the console.
  */

// Creating a new pormise that runs the functions in the setTimeout after 5 seconds.

/* 
const newPromise = new Promise((resolve) => {
  setTimeout(() => resolve("All done!"), 5000);
});

// Creting an asynchronous function using an arrow expression and saving it to a varable.

const asyncFunction = async () => {
  console.log("Loading...");
  const finalResult = await newPromise;
  console.log(finalResult);
};

asyncFunction();
 */

/*****************  3. setInterval and setTimeout  *****************/

/*
setInterval() will execute function for every time after a specific amount of time while 
setTimeout() will execute only once after that specific amount of time. Here, the amount of 
time is set in  milliseconds.
*/

// Using setInterval()

/* 
const showAlert = () => {
  setInterval(() => {
    alert("This will alert everytime after 5 seconds.");
  }, 5000);
};

showAlert(); 
*/

// Using setTimeout()

const showTimeout = () => {
  setTimeout(() => {
    alert("This will show only once after 5 seconds.");
  }, 5000);
};

showTimeout();
