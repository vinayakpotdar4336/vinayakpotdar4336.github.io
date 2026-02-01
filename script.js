// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

// Project 
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function getCardWidth() {
    const card = document.querySelector('.project-card');
    const style = window.getComputedStyle(card);
    const gap = 20; // same as CSS gap
    return card.offsetWidth + gap;
}

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
});

// smoke
// Neon colors array
const colors = ['#00ffff', '#ff00ff', '#ff007f', '#00ff7f', '#ffbf00'];

function createSmoke(x, y) {
    const count = 5; // particles per click
    for(let i=0; i<count; i++){
        let smoke = document.createElement('div');
        smoke.className = 'smoke';

        // random neon color
        smoke.style.background = colors[Math.floor(Math.random() * colors.length)];

        // random offset for natural look
        smoke.style.left = x + Math.random() * 20 - 10 + 'px';
        smoke.style.top = y + Math.random() * 20 - 10 + 'px';

        // random size
        const size = Math.random() * 10 + 10;
        smoke.style.width = size + 'px';
        smoke.style.height = size + 'px';

        document.body.appendChild(smoke);

        // remove after animation
        smoke.addEventListener('animationend', () => smoke.remove());
    }
}

// click smoke


// Optional: Auto-scroll every 5 seconds
// setInterval(() => {
//     carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
// }, 5000);
