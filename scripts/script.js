function prevSlide(carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentSlide = carousel.querySelector('.carousel-slide.active');
    let currentIndex = Array.from(slides).indexOf(currentSlide);

    currentSlide.classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Wrap around to the last slide
    slides[currentIndex].classList.add('active');
}

function nextSlide(carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentSlide = carousel.querySelector('.carousel-slide.active');
    let currentIndex = Array.from(slides).indexOf(currentSlide);

    currentSlide.classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length; // Wrap around to the first slide
    slides[currentIndex].classList.add('active');
}

// Initialize the first slide of each carousel to be active
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const firstSlide = carousel.querySelector('.carousel-slide');
        if (firstSlide) {
            firstSlide.classList.add('active');
        }
    });
});
