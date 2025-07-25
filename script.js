const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

openBtn.addEventListener("click", ()=>{
    navMenu.style.left = "0";
});
closeBtn.addEventListener("click", ()=>{
    navMenu.style.left = "-100%";
});

const leftSide = document.getElementById("leftSide")
const openBtns = document.getElementById("open-menu-2");
const nav = document.getElementById("nav-menu-2");
const main = document.getElementById("main-content")
const fixed = document.getElementById("fixed")
const promotion = document.getElementById("promotion")

openBtns.addEventListener("click", (e) => {
    e.stopPropagation()
 if(nav.classList.contains("-left-full")){
    nav.classList.remove("-left-full", "w-0");
    promotion.classList.remove("md:right-3")
    promotion.classList.add("md:-right-2")
    nav.classList.add("w-44")
    main.classList.add("ml-48")
    fixed.classList.remove("w-full")
    fixed.classList.add("w-full")
    leftSide.classList.add("sm:hidden")
 }else{
  nav.classList.remove("w-44")
  nav.classList.add("-left-full","w-0")
  main.classList.remove("ml-48")
  fixed.classList.remove("w-full")
  fixed.classList.add("w-fulll")
  leftSide.classList.remove("sm:hidden")
 }
});

nav.addEventListener("click",(e)=>{
    e.stopPropagation()
})

const myImage = document.getElementById("myImage")
const imgContent = document .getElementById("imgContent")
const closeContent = document.getElementById("closeContent")

myImage.addEventListener("click",(e)=>{
    e.stopPropagation()
    imgContent.classList.toggle("hidden")
})

imgContent.addEventListener("click",(e)=>{
    e.stopPropagation()
})

closeContent.onclick = ()=>{
    imgContent.classList.add("hidden")
}

const googleApps = document.getElementById("googleApps")
const googleAppContent = document.getElementById("googleAppContent")

googleApps.addEventListener("click",(e)=>{
    e.stopPropagation()
    googleAppContent.classList.toggle("hidden")
})

googleAppContent.addEventListener("click",(e)=>{
    e.stopPropagation()
})

const support = document.getElementById("support")
const supportContent = document.getElementById("supportContent")

support.addEventListener("click",(e)=>{
    e.stopPropagation();
    supportContent.classList.toggle("hidden");
})
supportContent.addEventListener("click", (e) => {
  e.stopPropagation(); 
})

const language = document.getElementById("language")
const languageContent = document.getElementById("languageContent")

language.addEventListener("click",(e)=>{
    e.stopPropagation()
    languageContent.classList.toggle("hidden")
})

languageContent.addEventListener("click",()=>{
    e.stopPropagation()
})

document.body.addEventListener("click", () => {
  supportContent.classList.add("hidden"); 
  googleAppContent.classList.add("hidden")
  imgContent.classList.add("hidden")
  languageContent.classList.add("hidden")
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !openBtns.contains(e.target)) {
    nav.classList.remove("w-44");
    nav.classList.add("-left-full", "w-0");
    main.classList.remove("ml-48");
    fixed.classList.remove("w-full");
    fixed.classList.add("w-full");
    leftSide.classList.remove("sm:hidden")

  }
});
