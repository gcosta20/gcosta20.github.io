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

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
});

// Mark the nav link for the current page as active
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').pop() || 'intro.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) return; // handled by scroll spy below
        const linkPage = href.split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Highlight the nav link for the section currently in view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navAnchors.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
            if (activeLink) activeLink.classList.add('active');
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => observer.observe(section));
});
