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


// Optional: Auto-scroll every 5 seconds
// setInterval(() => {
//     carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
// }, 5000);


document.addEventListener("click", function (e) {
    for (let i = 0; i < 6; i++) {
        let smoke = document.createElement("div");
        smoke.className = "smoke";

        smoke.style.left = e.clientX + Math.random() * 20 - 10 + "px";
        smoke.style.top = e.clientY + Math.random() * 20 - 10 + "px";

        document.body.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 1500);
    }
});
