// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

// Project 
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let scrollAmount = 0;
const cardWidth = document.querySelector('.project-card').offsetWidth + 20; // card width + gap

// Next Button
nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});

// Previous Button
prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});

// Optional: Auto-scroll every 5 seconds
// setInterval(() => {
//     carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
// }, 5000);

