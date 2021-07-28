const fab =document.querySelector(".FAB");
const icons= document.querySelector(".icons");
const texts=document.querySelector(".contactus__text");
fab.addEventListener("click", ()=>{
    icons.classList.toggle("open");
    texts.classList.toggle("contactus__text-open");
})