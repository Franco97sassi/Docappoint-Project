const doctor2=document.querySelector(".doctor2");
container2=document.querySelector(".container2");
doctor2.addEventListener("click",()=>{
     container2.classList.toggle("active")
} )

const doctor3=document.querySelector(".doctor3");
container3=document.querySelector(".container3");
doctor3.addEventListener("click",()=>{
     container3.classList.toggle("active")
} )

const doctor4=document.querySelector(".doctor4");
container4=document.querySelector(".container4");
doctor4.addEventListener("click",()=>{
     container4.classList.toggle("active")
} )

const select = document.querySelector(".select");
select.addEventListener("change",()=>{
        container4.classList.toggle("active")
    } )
    const abcd = document.querySelector(".abcd");
     abcd.addEventListener("submit",()=>{
            container4.classList.toggle("active")      
     } )
