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


/* ================= PROJECTS CAROUSEL ================= */

const track = document.querySelector(".projects-track");
const viewport = document.querySelector(".projects-viewport");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

const colors = ['#00ffff', '#ff00ff', '#00ff7f', '#ffbf00'];

if(track && viewport){
  let index = 0;
  const gap = 24;
  let autoScroll;

  const cards = [...track.children];

  cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
    track.insertBefore(card.cloneNode(true), track.firstChild);
  });

  const allCards = [...track.children];

  function cardWidth(){
    return allCards[0].offsetWidth + gap;
  }

  index = cards.length;
  viewport.scrollLeft = index * cardWidth();

  function move(i, smooth=true){
    viewport.scrollTo({
      left: i * cardWidth(),
      behavior: smooth ? "smooth" : "auto"
    });
    index = i;
  }

  function normalize(){
    if(index >= allCards.length - cards.length){
      move(cards.length, false);
    }
    if(index < cards.length){
      move(allCards.length - cards.length * 2, false);
    }
  }

  btnRight.onclick = () => {
    stopAuto();
    move(index + 1);
    setTimeout(normalize, 400);
  };

  btnLeft.onclick = () => {
    stopAuto();
    move(index - 1);
    setTimeout(normalize, 400);
  };

  /* Auto scroll */
  function startAuto(){
    autoScroll = setInterval(() => {
      move(index + 1);
      setTimeout(normalize, 400);
    }, 2500);
  }

  function stopAuto(){
    clearInterval(autoScroll);
  }

  viewport.addEventListener("mouseenter", stopAuto);
  viewport.addEventListener("mouseleave", startAuto);
  startAuto();

  /* Mouse wheel scroll */
  viewport.addEventListener("wheel", e => {
    e.preventDefault();
    stopAuto();
    move(index + (e.deltaY > 0 ? 1 : -1));
    setTimeout(normalize, 400);
  });

  /* Smoke on hover */
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      let s = document.createElement("div");
      s.className = "smoke";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.background = colors[Math.floor(Math.random()*colors.length)];
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    });
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
