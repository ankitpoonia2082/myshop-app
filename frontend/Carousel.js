// Custom Carousel---->
let slideIndex = 0;
const slides = document.querySelectorAll('.custom-carousel-item');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

// Optional: Auto slide change every 2 seconds
setInterval(nextSlide, 2000);
