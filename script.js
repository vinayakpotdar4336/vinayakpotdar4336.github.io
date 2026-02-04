// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");


/* ===============================
   PROJECT MODAL DATA
================================ */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const projectData = {
  kirby: "<h3>Kirby – IAQ Senso</h3><p>nRF52840 • Zephyr RTOS • BLE + LoRa</p>",
  ultra: "<h3>Ultra Paws</h3><p>Pet Health Wearable • BLE</p>",
  rail: "<h3>Virat Kohli All Format Performance Dashboard</h3>",
  heater: "<h3>SuperStore Sales DashBoard</h3>",
  test: "<h3>Space Mission dashboard</h3>",
  ev: "<h3>Ecommerce Sales Dashboard</h3>",
  tracker: "<h3>Tracker Control Unit</h3>",
  ulp: "<h3>ULP Pressure Sensor Node</h3>"
};

/* ===============================
   OPEN / CLOSE MODAL
================================ */

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalBody.innerHTML = projectData[card.dataset.modal];
    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

/* ===============================
   CAROUSEL LOGIC
================================ */

const track = document.querySelector(".projects-track");
const viewport = document.querySelector(".projects-viewport");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

let index = 0;
const gap = 24;

function cardWidth() {
  return track.children[0].offsetWidth + gap;
}

btnRight.onclick = () => {
  index++;
  viewport.scrollTo({ left: index * cardWidth(), behavior: "smooth" });
};

btnLeft.onclick = () => {
  index = Math.max(index - 1, 0);
  viewport.scrollTo({ left: index * cardWidth(), behavior: "smooth" });
};

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

