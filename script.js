/* =====================================
   Apple Inspired Portfolio
   script.js - Part 1
===================================== */

console.log("Website Loaded Successfully!");

// ============================
// Loading Screen
// ============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// ============================
// Mouse Glow
// ============================

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ============================
// Navbar Scroll Effect
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ============================
// Dark / Light Mode
// ============================

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ============================
// Ripple Effect
// ============================

document.addEventListener("click",(e)=>{

    const ripple=document.createElement("span");

    ripple.className="ripple";

    ripple.style.left=e.clientX+"px";

    ripple.style.top=e.clientY+"px";

    document.body.appendChild(ripple);

    setTimeout(()=>{

        ripple.remove();

    },600);

});
/* =====================================
   Apple Inspired Portfolio
   script.js - Part 2
===================================== */

// ============================
// Typing Animation
// ============================

const typingElement = document.getElementById("typing");

const words = [
    "Developer",
    "Gamer",
    "Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

// ============================
// Scroll Reveal Animation
// ============================

const hiddenElements =
document.querySelectorAll(
".card, .project-card, .social-card, .contact-form"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ============================
// Contact Form
// ============================

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thanks for your message!");

form.reset();

});

}

// ============================
// Smooth Button Hover
// ============================

const buttons =
document.querySelectorAll(
".primary-btn, .project-buttons a, .social-card"
);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

// ============================
// Console Message
// ============================

console.log("🚀 Portfolio Ready!");