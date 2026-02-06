// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

/* ===============================
   PROJECT MODAL DATA
================================ */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const projectData = {
   
  ultra: `
    <img src="sss.jpg" class="project-modal-img" />
    <h3>Shows overall SuperStore Data Summary</h3>
    <p><strong>Tech:</strong> • SQL • Power BI</p>
    <ul>
      <li>Shows overall sales, profit, and quantity summary</li>
      <li>Displays year-wise sales analysis</li>
      <li>Analyzes total sales by state</li>
      <li>Compares sales distribution by region</li>
      <li>Shows country-wise sales on map</li>
      <li>Tracks sales by ship mode, segment, and category</li>
      <li>Provides customer-wise sales and quantity details</li>
      <li>Includes interactive filters for deeper analysis</li>
    </ul>
  `,

  rail: `
    <img src="sm.jpg" class="project-modal-img" />
    <h3>Shows overall space mission launch statistics</h3>
    <p><strong>Tech:</strong> • SQL • Power Bi</p>
    <ul>
      <li>Displays total launch count and success rate</li>
      <li>Analyzes mission status (success, failure, partial)</li>
      <li>Shows year-wise mission success trends</li>
      <li>Compares launch count by rocket type</li>
      <li>Compares launch count by space agencies/companies</li>
      <li>Allows filtering by rocket status and launch location</li>
      <li>Uses a dark, space-themed analytics dashboard design</li>
    </ul>
  `,

  heater: `
    <img src="ecs.jpg" class="project-modal-img" />
    <h3>Shows overall ecommerce sales performance summary</h3>
    <p><strong>Tech:</strong> • Python • Power BI</p>
    <ul>
      <li>Displays key KPIs like total customers, quantity, and revenue</li>
      <li>Tracks average order value and loyalty points</li>
      <li>Analyzes delivery days by gender</li>
      <li>Shows returns based on shipping mode</li>
      <li>Compares sales by product category</li>
      <li>Analyzes payment methods with loyalty and shipping mode</li>
      <li>Provides filters for gender, location, age, and product category</li>
    </ul>
  `,

  test: `
    <img src="ipl.png" class="project-modal-img" />
    <h3>Displays overall IPL tournament analysis</h3>
    <p><strong>Tech:</strong> • Tablue </p>
    <ul>
      <li>Shows title-winning team details</li>
      <li>Highlights Orange Cap (top run-scorer)</li>
      <li>Highlights Purple Cap (top wicket-taker)</li>
      <li>Shows total 4s and 6s in the tournament</li>
      <li>Analyzes matches won based on toss decision</li>
      <li>Compares bat vs field winning percentage</li>
      <li>Allows season-wise filtering for analysis</li>
    </ul>
  `,

  ev: `
    <img src="cca.png" class="project-modal-img" />
    <h3>Shows overall customer churn analysis summary</h3>
    <p><strong>Tech:</strong> • SQL • Power BI</p>
    <ul>
      <li>Displays total customer count and key KPI's</li>
      <li>Analyzes customer distribution by geography</li>
      <li>Shows customer count by age groups</li>
      <li>Compares customer count by gender</li>
      <li>Analyzes churn based on number of products</li>
      <li>Shows impact of credit card and active membership status</li>
      <li>Provides detailed customer-level data table</li>
    </ul>
  `,

  tracker: `
    <img src="cba.png" class="project-modal-img" />
    <h3>Tracker Control Unit</h3>
    <p><strong>Tech:</strong> • Power BI • SQL</p>
    <ul>
      <li>Displays average purchase amount</li>
      <li>Shows average customer review rating</li>
      <li>Analyzes subscription status distribution</li>
      <li>Compares revenue by product category</li>
      <li>Shows sales by product category</li>
      <li>Analyzes revenue by age group</li>
      <li>Includes filters for gender, category, and shipping type</li>
    </ul>
  `,

  ulp: `
    <img src="vk.jpg" class="project-modal-img" />
    <h3>Shows Virat Kohli’s performance across formats</h3>
    <p><strong>Tech:</strong> • Power BI • SQL</p>
    <ul>
      <li>Displays total matches and runs</li>
      <li>Highlights highest and lowest scores</li>
      <li>Enables year-wise performance analysis</li>
      <li>Compares runs against opponent teams</li>
      <li>Shows scoring milestones (50s, 100s, 200s)</li>
      <li>Analyzes ground-wise performance</li>
      <li>Uses a clean, dark analytics dashboard design</li>
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
