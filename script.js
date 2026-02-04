console.log("Portfolio Loaded");

/* ================= MODAL ================= */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const projectData = {
  rail: "<h3>Virat Kohli Dashboard</h3>",
  heater: "<h3>Super Store Sales</h3>",
  test: "<h3>Space Mission</h3>",
  ev: "<h3>E-Commerce Sales</h3>"
};

document.querySelectorAll(".project-card").forEach(card => {
  card.onclick = () => {
    modalBody.innerHTML = projectData[card.dataset.modal];
    modal.style.display = "flex";
  };
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = e => e.target === modal && (modal.style.display = "none");

/* ================= CAROUSEL ================= */

const track = document.querySelector(".projects-track");
const viewport = document.querySelector(".projects-viewport");
const btnL = document.querySelector(".left");
const btnR = document.querySelector(".right");

let index = 0;
const gap = 24;
let auto;

function cardWidth() {
  return track.children[0].offsetWidth + gap;
}

function scrollToIndex(smooth=true) {
  viewport.scrollTo({
    left: index * cardWidth(),
    behavior: smooth ? "smooth" : "auto"
  });
}

btnR.onclick = () => {
  index++;
  scrollToIndex();
};

btnL.onclick = () => {
  index = Math.max(0, index - 1);
  scrollToIndex();
};

/* AUTO SCROLL */
function startAuto() {
  auto = setInterval(() => {
    index = (index + 1) % track.children.length;
    scrollToIndex();
  }, 2500);
}

function stopAuto() {
  clearInterval(auto);
}

viewport.addEventListener("mouseenter", stopAuto);
viewport.addEventListener("mouseleave", startAuto);
startAuto();

/* ================= SMOKE (ONLY PROJECTS) ================= */

const colors = ['#00ffff','#ff00ff','#00ff7f','#ffbf00'];

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const s = document.createElement("div");
    s.className = "smoke";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.background = colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  });
});
