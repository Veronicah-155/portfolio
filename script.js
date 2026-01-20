const texts = [
  "Fullstack Developer 💻",
  "Android Developer 📱",
  "UI/UX Designer 🎨",
];
let i = 0,
  j = 0;
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
    id: "anchor-global",
    title: "Anchor Global Website UI",
    description:
      "A comprehensive Figma design for a corporate website featuring modern layouts, team showcases, and contact sections.",
    image: "assets/anchor.png",
    type: "ui/ux",
    link: "https://www.figma.com/proto/yeqT0fVqyywivFWvJv6oVa/Anchor-Global?node-id=0-1&t=u0rn6x8Kvj2pUbLI-1",
    icon: "figma",
  },
  {
    id: "kitenge-mobile",
    title: "E-commerce Android App",
    description:
      "A Flutter mobile e-commerce app for African fashion. Features product browsing, cart management, user authentication, and a seamless shopping experience.",
    image: "assets/android.jpeg",
    type: "android",
    link: "https://github.com/Veronicah-155/flutter_ecommerce_app",
    icon: "github",
  },
  {
    id: "kitenge-closet",
    title: "E-commerce Website",
    description:
      "Kitenge Closet is an e-commerce platform showcasing African fashion, offering seamless browsing, detailed product views, and a smooth checkout experience.",
    image: "assets/Kitenge.png",
    type: "fullstack",
    link: "https://github.com/Veronicah-155/Kitenge-Closet",
    icon: "github",
  },
  {
    id: "student-profile",
    title: "Student Profile Card UI",
    description:
      "A clean and responsive student profile card built with HTML and CSS, showcasing personal details, skills, and call-to-action buttons.",
    image: "assets/student.jpg",
    type: "ui/ux",
    link: "https://github.com/veronicah-155/student-profile-card",
    icon: "github",
  },
  {
    id: "login-signup",
    title: "Login & Signup UI",
    description:
      "A responsive authentication interface featuring login and signup pages built using HTML and CSS and has added design.",
    image: "assets/login.jpeg",
    type: "ui/ux",
    link: "https://github.com/veronicah-155/login-signup-ui",
    icon: "github",
  },
  {
    id: "course-facebook-ads",
    title: "Course Facebook Ad",
    description:
      "UI/UX-optimized Facebook ad designed in Canva for an online course campaign, focusing on clarity, hierarchy, and conversion-driven visuals.",
    image: "assets/Facebook.png",
    type: "ui/ux",
    link: "",
    icon: "canva",
  },
];

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((proj) => {
  let badge = "";
  if (proj.type === "fullstack") badge = "🌐 Fullstack Developer";
  else if (proj.type === "android") badge = "📱 Android Developer";
  else if (proj.type === "ui/ux") badge = "🎨 UI/UX Designer";

  let iconClass = "";
  let buttonText = "View Project";
  if (proj.icon === "figma") {
    iconClass = "fab fa-figma";
    buttonText = "View Figma";
  } else if (proj.icon === "github") {
    iconClass = "fab fa-github";
    buttonText = "View GitHub";
  } else if (proj.icon === "canva") {
    iconClass = "fas fa-palette";
    buttonText = "View on Canva";
  } else {
    iconClass = "fas fa-external-link-alt";
    buttonText = "View Project";
  }

  const card = document.createElement("div");
  card.className =
    "bg-[#013D0A] rounded-2xl shadow-lg p-8 border border-[#03A64A] hover:border-[#F0941F] transition-all duration-300 transform hover:scale-105";

  card.innerHTML = `
    <div class="mb-4">
      <span class="inline-block bg-[#011900] border border-[#03A64A] text-[#F0941F] px-3 py-1 rounded-full text-xs font-semibold">
        ${badge}
      </span>
    </div>
    
    <h3 class="text-2xl font-bold primary-color mb-4">${proj.title}</h3>

    <div class="relative overflow-hidden rounded-lg mb-4 group">
      <img src="${proj.image}"
           alt="${proj.title}"
           class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <p class="text-gray-300 mb-6 line-clamp-3">${proj.description}</p>

    <div class="flex gap-3">
      <a href="project-detail.html?id=${proj.id}" 
         class="flex-1 text-center bg-[#03A64A] text-white px-4 py-2 rounded-lg hover:bg-[#028b3e] transition font-semibold">
         View Details
      </a>
      <a href="${proj.link}" 
         target="_blank" 
         class="flex items-center justify-center bg-[#011900] text-[#F0941F] px-4 py-2 rounded-lg border border-[#F0941F] hover:bg-[#F0941F] hover:text-white transition">
         <i class="${iconClass}"></i>
      </a>
    </div>
  `;

  projectsGrid.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  type();
  AOS.init({ duration: 800, easing: "ease-in-out", once: true });
});
