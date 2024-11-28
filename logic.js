// Select elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the slider position
function updateSlider() {
    const offset = currentIndex * -100; // Move slider left
    slider.style.transform = `translateX(${offset}%)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to first slide
    updateSlider();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last slide
    updateSlider();
});

// Auto-slide functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 5000); // Change slide every 5 seconds
