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

  <h3>SuperStore Sales Dashboard</h3>

  <p><strong>Tech:</strong> • SQL • Power BI</p>

  <ul>
    <li>Shows overall sales, profit, and quantity summary</li>
    <li>Displays year-wise sales analysis</li>
    <li>Analyzes total sales by state</li>
    <li>Compares sales distribution by region</li>
    <li>Tracks sales by ship mode, segment, and category</li>
  </ul>

  <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

    <a href="https://github.com/vinayakpotdar4336/Superstore" target="_blank"
    style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
    🔗 GitHub
    </a>

    <a href="sss.pdf" target="_blank"
    style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
    📄 View PDF
    </a>

  </div>
`,

  rail: `
    <img src="sm.jpg" class="project-modal-img" />

    <h3>Space Mission Dashboard</h3>

    <p><strong>Tech:</strong> • SQL • Power BI</p>

    <ul>
      <li>Displays total launch count and success rate</li>
      <li>Shows year-wise mission trends</li>
      <li>Compares rocket types and agencies</li>
      <li>Filters by launch location and rocket status</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Space-Mission" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>
      <a href="sm.pdf" target="_blank"
       style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
       📄 View PDF
    </a>
    </div>
  `,

  heater: `
    <img src="ecs.jpg" class="project-modal-img" />

    <h3>Ecommerce Sales Dashboard</h3>

    <p><strong>Tech:</strong> • Python • Power BI</p>

    <ul>
      <li>Tracks revenue, customers, and orders</li>
      <li>Analyzes delivery and return trends</li>
      <li>Compares sales by category</li>
      <li>Interactive filters for deep analysis</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Ecommerce-Sales" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="ecs.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,

  test: `
    <img src="ipl.png" class="project-modal-img" />

    <h3>IPL Tournament Analysis</h3>

    <p><strong>Tech:</strong> • Tableau</p>

    <ul>
      <li>Shows Orange Cap and Purple Cap details</li>
      <li>Analyzes toss decisions and match wins</li>
      <li>Displays total 4s and 6s</li>
      <li>Season-wise dashboard filtering</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/IPL" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="ipl.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,

  ev: `
    <img src="cca.png" class="project-modal-img" />

    <h3>Customer Churn Analysis</h3>

    <p><strong>Tech:</strong> • SQL • Power BI</p>

    <ul>
      <li>Analyzes churn by age, gender, and geography</li>
      <li>Tracks active members and credit card users</li>
      <li>Customer-level detailed analysis</li>
      <li>Interactive KPI dashboard</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Customer-Churn" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="cca.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,

  tracker: `
    <img src="cba.png" class="project-modal-img" />

    <h3>Customer Behavior Dashboard</h3>

    <p><strong>Tech:</strong> • SQL • Power BI</p>

    <ul>
      <li>Shows customer review ratings</li>
      <li>Analyzes subscription distribution</li>
      <li>Compares revenue by categories</li>
      <li>Tracks age-group wise revenue</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Customer-Behavior" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="cba.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,

  ulp: `
    <img src="vk.jpg" class="project-modal-img" />

    <h3>Virat Kohli Performance Analysis</h3>

    <p><strong>Tech:</strong> • SQL • Power BI</p>

    <ul>
      <li>Displays total runs and matches</li>
      <li>Shows highest and lowest scores</li>
      <li>Opponent-wise performance analysis</li>
      <li>Tracks 50s, 100s, and 200s</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Virat-Kohli" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="vk.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,
   sales: `
    <img src="vk.jpg" class="project-modal-img" />

    <h3>Virat Kohli Performance Analysis</h3>

    <p><strong>Tech:</strong> • SQL • Power BI</p>

    <ul>
      <li>Displays total runs and matches</li>
      <li>Shows highest and lowest scores</li>
      <li>Opponent-wise performance analysis</li>
      <li>Tracks 50s, 100s, and 200s</li>
    </ul>

    <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

      <a href="https://github.com/vinayakpotdar4336/Virat-Kohli" target="_blank"
      style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
      🔗 GitHub
      </a>

      <a href="vk.pdf" target="_blank"
      style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
      📄 View PDF
      </a>

    </div>
  `,
healthcare: `
  <img src="health.jpg" class="project-modal-img" />

  <h3>Healthcare Dashboard</h3>

  <p><strong>Tech:</strong> • Power BI • SQL</p>

  <ul>
    <li>Analyzed movies and TV shows dataset</li>
    <li>Shows genre-wise content distribution</li>
    <li>Displays release year trends</li>
    <li>Tracks ratings and country-wise content</li>
  </ul>

  <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

    <a href="https://github.com/vinayakpotdar4336/Healthcare" target="_blank"
    style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
    🔗 GitHub
    </a>

    <a href="netflix.pdf" target="_blank"
    style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
    📄 View PDF
    </a>

  </div>
`,

wave: `
  <img src="Wave_Shoes_Sales.jpg" class="project-modal-img" />

  <h3>Wave Shoes Store Sales Analytics Dashboard</h3>

  <p><strong>Tech:</strong> • Looker Studio • Google Excel Sheets </p>

  <ul>
    <li>Tracks employee attrition and retention</li>
    <li>Analyzes department-wise performance</li>
    <li>Displays employee satisfaction metrics</li>
    <li>Interactive KPI dashboard for HR insights</li>
  </ul>

  <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

    <a href="https://github.com/vinayakpotdar4336/Wave-Shoes-Store-Sales" target="_blank"
    style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
    🔗 GitHub
    </a>

    <a href="Wave_Shoes_Sales_Dashboard.pdf" target="_blank"
    style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
    📄 View PDF
    </a>

  </div>
`,

coffee: `
  <img src="coffee.jpg" class="project-modal-img" />

  <h3>Coffee Sales Analysis Dashboard</h3>

  <p><strong>Tech:</strong> • SQL • Power BI</p>

  <ul>
    <li>Analyzed outlet-wise sales performance</li>
    <li>Displays product category insights</li>
    <li>Tracks revenue and customer ratings</li>
    <li>Interactive dashboard with filters</li>
  </ul>

  <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">

    <a href="https://github.com/vinayakpotdar4336" target="_blank"
    style="padding:8px 14px; background:#38bdf8; color:#000; border-radius:6px; text-decoration:none;">
    🔗 GitHub
    </a>

    <a href="blinkit.pdf" target="_blank"
    style="padding:8px 14px; background:#22c55e; color:#000; border-radius:6px; text-decoration:none;">
    📄 View PDF
    </a>

  </div>
`,
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
