let x =10;
function outer(){
    let x =20;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();