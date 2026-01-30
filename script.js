// Optional JavaScript
console.log("Vinayak Potdar Portfolio Loaded Successfully");

// ================= CANVAS ANIMATION =================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// ================= PARTICLES =================
const particles = [];
const particleCount = 80;

for(let i=0; i<particleCount; i++){
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random()*3 + 1,
        dx: (Math.random()-0.5)*1.5,
        dy: (Math.random()-0.5)*1.5
    });
}

// ================= BARS DATA (simulate analytics bars) =================
const bars = [];
const barCount = 40;
for(let i=0; i<barCount; i++){
    bars.push({
        x: i*(width/barCount),
        y: Math.random()*height,
        w: width/barCount*0.6,
        h: Math.random()*100 + 20,
        speed: Math.random()*0.5+0.2
    });
}

// ================= ANIMATE FUNCTION =================
function animate(){
    ctx.clearRect(0,0,width,height);

    // DRAW PARTICLES
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;

        if(p.x <0 || p.x>width) p.dx *= -1;
        if(p.y <0 || p.y>height) p.dy *= -1;
    });

    // DRAW BARS
    bars.forEach(b => {
        ctx.fillStyle = 'rgba(56,189,248,0.6)';
        ctx.fillRect(b.x, height-b.h, b.w, b.h);
        b.h += Math.sin(Date.now()/500 + b.x) * b.speed;
        if(b.h <20) b.h = 20;
    });

    requestAnimationFrame(animate);
}

animate();


