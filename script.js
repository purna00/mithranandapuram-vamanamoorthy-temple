/* ==========================================
   MITHRANANDAPURAM VAMANAMOORTHY TEMPLE
   script.js
========================================== */

/* ===========================
   CONTACT FORM
=========================== */

const contactForm = document.querySelector(".contact form");

if(contactForm){

    contactForm.addEventListener("submit",function(event){

        event.preventDefault();

        alert("🙏 Thank you for contacting Mithranandapuram Vamanamoorthy Temple.\nWe will contact you soon.");

        contactForm.reset();

    });

}

/* ===========================
   DONATION BUTTON
=========================== */

function donateNow(){

    alert("🙏 Thank you for your generous donation!\n\nMay Lord Vamanamoorthy bless you and your family.");

}

/* ===========================
   LIVE DATE & TIME
=========================== */

function updateDateTime(){

    const now = new Date();

    document.getElementById("dateTime").innerHTML =
    now.toLocaleString("en-IN",{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });

}

updateDateTime();

setInterval(updateDateTime,1000);

/* ===========================
   BOOKING FORM
=========================== */

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit",function(event){

        event.preventDefault();

        alert("🙏 Booking Successful!\n\nTemple will contact you shortly.");

        bookingForm.reset();

    });

}

/* ===========================
   IMAGE SLIDER
=========================== */

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(){

    slides.forEach(function(slide){

        slide.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

}

if(slides.length > 0){

    showSlide();

    setInterval(showSlide,3000);

}

/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

    },2000);

});
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach(function(img){

    img.addEventListener("click",function(){

        lightbox.style.display = "flex";

        lightboxImg.src = this.src;

    });

});

closeBtn.addEventListener("click",function(){

    lightbox.style.display = "none";

});

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
/* ===========================
   BACKGROUND MUSIC
=========================== */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){

    if(bgMusic.paused){

        bgMusic.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    }else{

        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

}
const music = document.getElementById("bgMusic");

document.addEventListener("click", function () {
    if (music.paused) {
        music.play().catch(err => console.log(err));
    }
}, { once: true });
function enterTemple() {

    const music = document.getElementById("bgMusic");

    music.play();

    document.getElementById("welcomeScreen").style.display = "none";
}