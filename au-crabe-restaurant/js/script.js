// SCROLL HEADER
window.addEventListener("scroll", ()=>{
let header = document.getElementById("header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// SCROLL ANIMATION
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".fade").forEach(el=>{
let pos = el.getBoundingClientRect().top;

if(pos < window.innerHeight - 100){
el.classList.add("show");
}
});
});