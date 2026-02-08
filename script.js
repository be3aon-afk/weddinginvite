const music = document.getElementById("music");
let musicStarted = false;

// MUSIC ON FIRST SCROLL
window.addEventListener("scroll", () => {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
});

// LINE-BY-LINE TEXT REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// HERO TEXT ANIMATION
window.addEventListener("load", () => {
  const lines = document.querySelectorAll(".hero-text .line");
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 600);
  });
});

// CLOUD PARALLAX
const cloudLeft = document.querySelector(".cloud.left");
const cloudRight = document.querySelector(".cloud.right");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  cloudLeft.style.transform =
    `translate(${scrollY * 0.25}px, ${scrollY * 0.1}px)`;

  cloudRight.style.transform =
    `translate(${-scrollY * 0.25}px, ${scrollY * 0.1}px)`;
});
