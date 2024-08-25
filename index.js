let modalF=document.querySelector(".modal")
let btn=document.querySelector("#btn")
let closeBtn=document.querySelector(".close")
let btn2=document.querySelector("#btn2")

btn.addEventListener("click",()=> {
    modalF.classList.add("showModal")

})
closeBtn.addEventListener("click",()=> {
    modalF.classList.remove("showModal")

})

btn2.addEventListener("click", ()=> {
    modalF.classList.toggle("showModal")
})