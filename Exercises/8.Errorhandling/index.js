// throw new Error("error message");

/*
 try {
  // lines of code.
  age;
  console.log("Start try-catch block.");
} catch (err) {
  console.error(err.message);
}
 */

doSomething1()
  .then(() => {
    return doSomething2().catch((err) => {
      throw err;
    });
  })
  .then(() => {
    return doSomething3().catch((err) => {
      throw err;
    });
  })
  .catch((err) => console.error(err));
