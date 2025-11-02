// Typing Effect
const texts = ["Fullstack Developer 💻", "Mobile Developer 📱", "UI/UX Designer 🎨"];
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

const projects = [
  {
    title: "Anchor Global Website UI",
    description: "Figma design for corporate website with team and contact sections.",
    image: "assets/anchor.png",
    type: "uiux",
    link: "https://www.figma.com/file/YourFigmaProjectID"
  },
  {
    title: "AI Moderation Script",
    description: "A Node.js-based AI text generator with content moderation. It checks prompts and responses for harmful content before displaying safe results. Built using OpenRouter API.",
    image: "assets/ai-moderation.png",
    type: "AI Engineer",
    link: "https://github.com/Veronicah-155/ai-moderation-script"
  }
];


const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((proj) => {
  let badge = "";
  if (proj.type === "fullstack") badge = "🌐 Fullstack Developer";
  else if (proj.type === "mobile") badge = "📱 Mobile Developer";
  else if (proj.type === "uiux") badge = "🎨 UI/UX Designer";

  const card = document.createElement("div");
  card.innerHTML = `
    <h3>${badge}</h3>
    <img src="${proj.image}" alt="${proj.title}" class="rounded-lg mb-4 w-full h-48 object-cover">
    <h4>${proj.title}</h4>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank" class="btn">View Project</a>

  `;
  projectsGrid.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  type();
  AOS.init({ duration: 800, easing: "ease-in-out", once: true });
});
