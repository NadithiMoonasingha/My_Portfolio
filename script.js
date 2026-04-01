/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/* =========================
   FADE-IN ANIMATION
========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


/* =========================
   TYPING EFFECT
========================= */
const typingEl = document.querySelector(".typing");

if (typingEl) {
  const text = ["UI/UX Designer", "Web Developer", "Creative Thinker"];
  let count = 0;
  let index = 0;

  function type() {
    const currentText = text[count];
    const letter = currentText.slice(0, ++index);

    typingEl.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count = (count + 1) % text.length;
        type();
      }, 1500);
    } else {
      setTimeout(type, 80);
    }
  }

  type();
}


/* =========================
   MOBILE MENU
========================= */
const navbar = document.querySelector(".navbar");

if (navbar) {
  const menuToggle = document.createElement("div");
  menuToggle.innerHTML = "☰";
  menuToggle.classList.add("menu-toggle");

  navbar.appendChild(menuToggle);

  menuToggle.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });
}


/* =========================
   PARTICLES
========================= */
const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5),
      dy: (Math.random() - 0.5)
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#7a6284";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}


/* SCROLL PROGRESS
const progressBar = document.getElementById("progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;
    progressBar.style.width = progress + "%";
  });
}*/


/* PROJECT CARD ANIMATION*/
const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 150);
});