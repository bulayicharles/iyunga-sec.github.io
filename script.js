const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
        
        navLinks.classList.toggle('show-menu');
    });
}

const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');
let clickCount = 0;

if (counterBtn && counterDisplay) {
    counterBtn.addEventListener('click', function() {
        clickCount = clickCount + 1;
        counterDisplay.textContent = clickCount;
    });
}

const slides = document.querySelectorAll('.hero-slide');
let currentSlideIndex = 0;

function showNextSlide() {
    if (slides.length > 1) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }
}

setInterval(showNextSlide, 4000);