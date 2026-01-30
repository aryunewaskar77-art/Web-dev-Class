
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    const inputValue = document.getElementById("input");
    var input = inputValue.value;
    console.log(input);
    inputValue.value = "";
})
