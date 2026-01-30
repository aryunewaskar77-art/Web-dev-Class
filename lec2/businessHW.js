// function declaration
let a=500;
let q=2;
function total(a,q){
    a=a*q;
    if(q>=10){
        a=a-(a*0.1);
    }
     a=a+(a*0.18);
    return a;
}
let totalBill= total(a,q);
console.log("Total bill is:",totalBill);

//function expression

a=500;
let Total = function(a,q){
    a=a*q;
    if(q>=10){
        a=a-(a*0.1);
    }
    a=a+(a*0.18);
    return a;
}
console.log("Total bill is:",Total(a,q));


//arrow function
let TotalBill=(a,q)=>{
    a=a*q;
    if(q>=10){
        a=a-(a*0.1);
    }
    a=a+(a*0.18);
    return a;
}
console.log("Total bill is:",TotalBill(a,q));


//IIFE

(function(a,q){
    a=a*q;
    if(q>=10){
        a=a-(a*0.1);
    }
    a=a+(a*0.18);
    console.log("Total bill is:",a);
})(a,q);