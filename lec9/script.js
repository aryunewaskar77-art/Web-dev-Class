document.querySelector("#grandparent").addEventListener("click",(e)=>{
    console.log("Grandparent clicked");
}, false);
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("Parent clicked");
    e.stopPropagation();
}, false);
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child clicked");
    e.stopPropagation();
}, false);