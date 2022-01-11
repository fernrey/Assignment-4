
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let par = document.querySelector(".par");


button1.addEventListener("click", function(){
    par.textContent = `"I'm Right"`;
   
  
})
function makeText2 () {
    par.textContent = `"No im right!"`;
}



