// // synchronous code


// console.log("sync code");

// console.log("Before");

// function fun(){
//     console.log("I'm fun");
// }
// fun();
// console.log("After");

// //asynchronous code

// console.log("async code");

// console.log("Before");

// function fun(){
//     console.log("I'm fun");
// };

// setTimeout(fun, 3000);

// console.log("After");


console.log("Before");
const fun2=()=>{
    console.log("Set timeout 1");
    let timeInFuture = Date.now() + 7000;
   while(Date.now() < timeInFuture) {}
   console.log("After while");
};
const fun1=()=> console.log("hello");
setTimeout(fun1,2000);
setTimeout(fun2,1000);
console.log("After");