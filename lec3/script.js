// var x=1;
// if(true){
//     var x=2;
// }
// console.log(x);


function x(callback){
    console.log("Inside x function");
    callback();
}
x(function y(){
    console.log("Inside y function");
});