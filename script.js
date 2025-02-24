let slideIndex = 0;
const slides = document.querySelectorAll(".myslides");
function showSlides() {
    slides.forEach(slide => slide.classList.remove("active")); 
    slides[slideIndex].classList.add("active"); 
    slideIndex = (slideIndex + 1) % slides.length;
}
showSlides();
setInterval(showSlides, 3000); 