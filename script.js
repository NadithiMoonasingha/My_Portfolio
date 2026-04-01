/*SMOOTH SCROLL*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});


/*ACTIVE NAV LINK*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
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

/*FADE-IN ANIMATION*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

/*TYPING EFFECT*/
const text = ["Software Engineer", "Frontend Developer", "Creative Thinker"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".hero h3").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500);
  } else {
    setTimeout(type, 80);
  }
}
type();
