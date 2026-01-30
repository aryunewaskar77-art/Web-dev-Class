// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Task completed");
//   } else {
//     reject("Task failed");
//   }
// });
// promise.then(result => console.log(result));
// promise.catch(error => console.log(error));


Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => console.log(result));
