// Typing Effect
const texts = ["Web Developer 💻", "Mobile App Developer 📱", "Problem Solver 🚀"];
let i = 0, j = 0;
let isDeleting = false;

function type() {
  const currentText = texts[i];
  const typingElement = document.getElementById("typing");

  typingElement.textContent = currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
    setTimeout(type, 800);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
});
