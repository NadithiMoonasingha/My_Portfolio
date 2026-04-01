document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .blog-card, .gallery-item").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

const typingEl = document.querySelector(".typing");
if (typingEl) {
  const words = ["UI/UX Designer", "Computer Science Undergraduate", "Creative Thinker"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentWord = words[wordIndex];
    typingEl.textContent = currentWord.slice(0, charIndex);

    if (!deleting) {
      charIndex++;
      if (charIndex > currentWord.length) {
        deleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
      }
    }

    setTimeout(typeLoop, deleting ? 45 : 85);
  }

  typeLoop();
}

const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.4,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45,
    }));
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#8c7198";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  animateParticles();
}

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".project-open").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = btn.dataset.title || "";
    document.getElementById("modalProblem").textContent = btn.dataset.problem || "";
    document.getElementById("modalStack").textContent = btn.dataset.stack || "";
    document.getElementById("modalFeatures").textContent = btn.dataset.features || "";
    document.getElementById("modalRole").textContent = btn.dataset.role || "";
    modal?.classList.add("active");
  });
});

modalClose?.addEventListener("click", () => modal?.classList.remove("active"));
modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});