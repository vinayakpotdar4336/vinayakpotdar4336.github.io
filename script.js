// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

/* ===============================
   PROJECT MODAL DATA
================================ */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const projectData = {

  kirby: `
    <img src="vk.jpg" class="project-modal-img" />
    <h3>Kirby – IAQ Sensor</h3>
    <p><strong>Tech:</strong> nRF52840 • Zephyr RTOS • BLE + LoRa</p>
    <ul>
      <li>Industrial air quality monitoring solution</li>
      <li>Low power embedded firmware design</li>
      <li>BLE + LoRa dual communication</li>
      <li>Real-time sensor data processing</li>
      <li>Optimized battery performance</li>
    </ul>
  `,

  ultra: `
    <img src="sss.jpg" class="project-modal-img" />
    <h3>Ultra Paws – Pet Wearable</h3>
    <p><strong>Tech:</strong> BLE • Embedded Systems</p>
    <ul>
      <li>Pet activity & health tracking</li>
      <li>Custom BLE GATT services</li>
      <li>Low power wearable firmware</li>
      <li>Compact hardware integration</li>
      <li>Mobile app connectivity support</li>
    </ul>
  `,

  rail: `
    <img src="sm.jpg" class="project-modal-img" />
    <h3>Railway Coupling Controller</h3>
    <p><strong>Domain:</strong> Industrial Automation</p>
    <ul>
      <li>Automatic coupling control logic</li>
      <li>Safety-focused embedded design</li>
      <li>Sensor-based detection system</li>
      <li>Real-time status monitoring</li>
      <li>Reliable field deployment</li>
    </ul>
  `,

  heater: `
    <img src="cba.png" class="project-modal-img" />
    <h3>Heater + Peltier Controller</h3>
    <p><strong>Tech:</strong> Embedded C • PID Control</p>
    <ul>
      <li>Temperature control system</li>
      <li>Heater and Peltier integration</li>
      <li>PID-based regulation logic</li>
      <li>Energy efficient operation</li>
      <li>Industrial-grade stability</li>
    </ul>
  `,

  test: `
    <img src="images/test.png" class="project-modal-img" />
    <h3>Automated Test Fixture</h3>
    <p><strong>Tech:</strong> Embedded Testing</p>
    <ul>
      <li>Automated hardware testing setup</li>
      <li>Reduced manual testing effort</li>
      <li>Accurate result validation</li>
      <li>Improved production efficiency</li>
      <li>Error detection automation</li>
    </ul>
  `,

  ev: `
    <img src="images/ev.png" class="project-modal-img" />
    <h3>EV Charging Station Controller</h3>
    <p><strong>Tech:</strong> Embedded Systems • Power Electronics</p>
    <ul>
      <li>Smart EV charging logic</li>
      <li>Power management control</li>
      <li>Safety and fault detection</li>
      <li>Energy monitoring features</li>
      <li>Scalable charging solution</li>
    </ul>
  `,

  tracker: `
    <img src="images/tracker.png" class="project-modal-img" />
    <h3>Tracker Control Unit</h3>
    <p><strong>Tech:</strong> GPS • IoT</p>
    <ul>
      <li>Real-time location tracking</li>
      <li>Low power IoT device</li>
      <li>Wireless data transmission</li>
      <li>Compact embedded design</li>
      <li>Field-tested reliability</li>
    </ul>
  `,

  ulp: `
    <img src="images/ulp.png" class="project-modal-img" />
    <h3>ULP Pressure Sensor Node</h3>
    <p><strong>Tech:</strong> Ultra Low Power • Sensors</p>
    <ul>
      <li>Ultra low power sensor node</li>
      <li>Long battery life design</li>
      <li>Accurate pressure measurement</li>
      <li>Wireless sensor communication</li>
      <li>Ideal for remote deployments</li>
    </ul>
  `
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
