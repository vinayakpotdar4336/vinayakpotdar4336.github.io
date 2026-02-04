// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

/* ================================
   PROJECT MODAL SYSTEM
================================ */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
let lastFocused = null;

const projectData = {
  kirby: `
    <h3>Kirby – IAQ Sensor</h3>
    <img src="assets/Kirby-0.png">
    <p>Industrial Air Quality Monitoring Device</p>
  `,
  ultra: `
    <h3>Ultra Paws – Pet Wearable</h3>
    <img src="assets/Ultrapaws-0.png">
    <p>Pet health tracking wearable</p>
  `,
  rail: `
    <h3>Railway Coupling Controller</h3>
    <img src="assets/rail-1.png">
    <p>Automatic railway coupling system</p>
  `
};

function openModal(key) {
  if (!projectData[key]) return;
  lastFocused = document.activeElement;
  modalBody.innerHTML = projectData[key];
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.modal);
  });
});

document.querySelector(".modal .close")?.addEventListener("click", closeModal);
window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});


/* ================================
   PROJECT CAROUSEL (AUTO + BUTTON)
================================ */

const section = document.getElementById("projects");
const viewport = section.querySelector(".projects-viewport");
const track = section.querySelector(".projects-track");
const btnLeft = section.querySelector(".carousel-btn.left");
const btnRight = section.querySelector(".carousel-btn.right");

if (viewport && track) {

  let index = 0;
  const gap = 24;
  const cards = Array.from(track.children);

  function cardWidth() {
    return cards[0].offsetWidth + gap;
  }

  function move(step) {
    index += step;
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    viewport.scrollTo({
      left: index * cardWidth(),
      behavior: "smooth"
    });
  }

  btnRight?.addEventListener("click", () => move(1));
  btnLeft?.addEventListener("click", () => move(-1));

  // Auto scroll
  let auto = setInterval(() => move(1), 2500);

  section.addEventListener("mouseenter", () => clearInterval(auto));
  section.addEventListener("mouseleave", () => {
    auto = setInterval(() => move(1), 2500);
  });
}
// ================= SMOKE EFFECT =================

// Neon colors
const colors = ['#00ffff', '#ff00ff', '#ff007f', '#00ff7f', '#ffbf00'];

function createSmoke(x, y) {
    const count = 4; // particles (portfolio friendly)
    for (let i = 0; i < count; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';

        smoke.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        smoke.style.left = x + Math.random() * 20 - 10 + 'px';
        smoke.style.top = y + Math.random() * 20 - 10 + 'px';

        const size = Math.random() * 10 + 10;
        smoke.style.width = size + 'px';
        smoke.style.height = size + 'px';

        document.body.appendChild(smoke);

        smoke.addEventListener('animationend', () => smoke.remove());
    }
}

// Click smoke
document.addEventListener('click', (e) => {
    createSmoke(e.clientX, e.clientY);
});

// Mouse move trail (throttled)
let trailTimeout = null;
document.addEventListener('mousemove', (e) => {
    if (trailTimeout) return;

    createSmoke(e.clientX, e.clientY);

    trailTimeout = setTimeout(() => {
        trailTimeout = null;
    }, 80); // smooth + performance safe
});

// Smooth scroll + active nav link
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href") === "#" + current) {
      li.classList.add("active");
    }
  });
});

