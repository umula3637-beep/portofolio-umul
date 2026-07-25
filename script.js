// ==============================
// Efek Navbar saat Scroll
// ==============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        navbar.style.transition = ".3s";

    } else {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "none";

    }

});

// ==============================
// Tombol Back To Top
// ==============================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.right = "25px";
backTop.style.bottom = "25px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.borderRadius = "50%";
backTop.style.border = "none";
backTop.style.background = "#2563eb";
backTop.style.color = "white";
backTop.style.fontSize = "22px";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.zIndex = "999";
backTop.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Efek Hover Card
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// Hover Portfolio
// ==============================

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.transform = "translateY(-12px)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.transform = "translateY(0px)";

    });

});

// ==============================
// Animasi Muncul Hero
// ==============================

window.addEventListener("load", () => {

    const heroText = document.querySelector(".hero-text");

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";
    heroText.style.transition = "1s";

    setTimeout(() => {

        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0px)";

    }, 300);

});

// ==============================
// Efek Ketik
// ==============================

const job = document.querySelector(".hero h3");

const jobs = [

    "Frontend Developer",

    "UI / UX Designer",

    "Web Programmer",

    "Freelancer"

];

let index = 0;

setInterval(() => {

    index++;

    if (index >= jobs.length) {

        index = 0;

    }

    job.innerHTML = jobs[index];

}, 2500);

console.log("Website Portfolio Loaded Successfully");
// ================= Counter =================

const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const value=+counter.innerText;

const speed=40;

const increment=target/speed;

if(value<target){

counter.innerText=Math.ceil(value+increment);

setTimeout(update,40);

}else{

counter.innerText=target;

}

}

update();

});

// ================= Dark Mode =================

const darkBtn=document.getElementById("darkBtn");

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.className="fas fa-sun";

}else{

darkBtn.className="fas fa-moon";

}

}

// ================= Mobile Menu =================

const menuBtn=document.getElementById("menuBtn");

const menu=document.getElementById("menu");

menuBtn.onclick=()=>{

menu.classList.toggle("active");

}
window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

preloader.style.opacity="0";

setTimeout(()=>{

preloader.style.display="none";

},500);

});