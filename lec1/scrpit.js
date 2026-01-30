// let value =10;
// function display(){
//     let value =20;
//     console.log(value);
// }

// display();
// console.log(value);

// let x=10;
// function outer(){
//     let y=20;
//     function inner(){
//         let z=30;
//         console.log(x,y,z);
//     }
//     inner();
// }
// outer();

function a(){
    console.log("inside",x);
}
function b(){
    let x=20;
    console.log("x in fun b",x);
    a();
    console.log("x in fun b",x);
}

b();
let x=10;