const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

openBtn.addEventListener("click", ()=>{
    navMenu.style.left = "0";
});
closeBtn.addEventListener("click", ()=>{
    navMenu.style.left = "-100%";
});

const openBtns = document.getElementById("open-menu-2");
const nav = document.getElementById("nav-menu-2");
const main = document.getElementById("main-content")

openBtns.addEventListener("click", () => {
 if(nav.classList.contains("-left-full")){
    nav.classList.remove("-left-full");
    nav.classList.add("w-44")
    main.classList.add("ml-48")
 }else{
  nav.classList.remove("w-44")
  nav.classList.add("-left-full")
  main.classList.remove("ml-48")
 }
});





