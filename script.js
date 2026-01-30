// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

// Project

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle active class
        card.classList.toggle('active');
    });
});

// Optional: Auto-scroll every 5 seconds
// setInterval(() => {
//     carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
// }, 5000);

