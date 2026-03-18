function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

// HERO SLIDER

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){

    slides.forEach(slide => slide.classList.remove("active"));

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(showSlide, 4000);

// NAVBAR TOGGLE

function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}