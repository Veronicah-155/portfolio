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
    type: "ui/ux",
    link: "https://www.figma.com/file/YourFigmaProjectID"
  },
  {
    title: "AI Moderation Script",
    description: "A Node.js-based AI text generator with content moderation. It checks prompts and responses for harmful content before displaying safe results. Built using OpenRouter API.",
    image: "assets/ai-moderation.png",
    type: "AI Engineer",
    link: "https://github.com/Veronicah-155/ai-moderation-script"
  },
  {
    title: "E-commerce Website",
    description: "Kitenge Closet is an e-commerce platform showcasing African fashion, offering seamless browsing, detailed product views, and a smooth checkout experience.",
    image: "assets/Kitenge.png",
    type: "fullstack",
    link: "https://github.com/Veronicah-155/Kitenge-Closet"
  }
];


const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((proj) => {
  let badge = "";
  if (proj.type === "fullstack") badge = "🌐 Fullstack Developer";
  else if (proj.type === "mobile") badge = "📱 Mobile Developer";
  else if (proj.type === "ui/ux") badge = "🎨 UI/UX Designer";

  const card = document.createElement("div");

  card.className =
    "bg-[#013D0A] rounded-2xl shadow-lg p-10 border border-[#03A64A] text-center md:text-left";

  card.innerHTML = `
    <h2 class="text-3xl font-bold primary-color mb-2">${proj.title}</h2>
    <p class="text-[#F0941F] text-lg">${proj.role1 || ""}</p>
    <p class="text-[#F0941F] text-lg">${proj.role2 || ""}</p>
    <p class="text-[#F0941F] text-lg">${proj.role3 || ""}</p>

    <img src="${proj.image}"
         alt="${proj.title}"
         class="rounded-lg mt-6 mb-4 w-full h-48 object-cover">

    <p class="mt-4 text-white">${proj.description}</p>

    <a href="${proj.link}" 
       target="_blank" 
       class="inline-block mt-6 bg-[#03A64A] text-white px-5 py-2 rounded-lg hover:bg-[#028b3e] transition">
       View Project
    </a>
  `;

  projectsGrid.appendChild(card);
});


document.addEventListener("DOMContentLoaded", () => {
  type();
  AOS.init({ duration: 800, easing: "ease-in-out", once: true });
});
