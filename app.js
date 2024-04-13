let a = document.querySelector(".inp1");
let b = document.querySelector(".btn1");
let c = document.querySelector(".tex1");

b.addEventListener("click",()=>{
    c.textContent = a.value 
c.style.color = "red"
c.style.fontSize = "20px"
c.style.fontWeight = "bold"

})