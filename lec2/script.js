//function declaration

function greet(a){
    // console.log("Hello",(arguments[0]));
    // console.log("Hello",arguments[1]);
    // console.log("Hello",arguments[2]);
    // console.log("Hello",arguments[3]);
    // console.log("Hello",arguments[4]);
    // console.log("Hello",arguments[5]);
    // console.log("Hello",arguments[6]);
}
greet(1,2,3,4,"ABC",true,11);


function noOfArguments(){
    //console.log(arguments.length);
}
noOfArguments(1,2,3,"ABC",true,11);

//2. Using rest operator

function noOfArgs(a,b,...args){
    console.log(a,b);
    console.log(args);
//    for(let i=0;i<args.length;i++){
//     console.log(args[i]);
//    }
}
noOfArgs(1,2,3,"ABC",true,11);