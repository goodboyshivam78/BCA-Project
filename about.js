document.addEventListener('DOMContentLoaded', () => {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const techItems = document.querySelectorAll('.tech-item');
    const testimonialSlider = document.querySelector('.testimonial-slider');

    // Achievement Cards Interaction
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Tech Items Animation
    techItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });

    // Testimonial Auto-Slider
    let currentTestimonial = 0;
    function rotateTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Rotate testimonials every 5 seconds
    setInterval(rotateTestimonials, 5000);
});