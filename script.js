/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

/* ACTIVE NAV */
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
      document.querySelector(`a[href="#${sec.id}"]`)?.classList.add("active");
    }
  });
});

/* TYPING */
const words = ["UI/UX Designer","Developer","Creative Thinker"];
let i=0,j=0;

function type(){
  document.querySelector(".typing").textContent = words[i].slice(0,j++);
  if(j>words[i].length){ j=0; i=(i+1)%words.length;}
  setTimeout(type,100);
}
type();

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({length:60},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  dx:(Math.random()-0.5),
  dy:(Math.random()-0.5)
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.fillStyle="#7a6284";
    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
  });
  requestAnimationFrame(animate);
}
animate();