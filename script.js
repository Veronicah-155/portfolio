/* ================================================
   Main Portfolio Script
   ================================================ */

/* -------- TYPING EFFECT -------- */
const phrases = [
  "Web platforms.",
  "Android apps.",
  "UI/UX designs.",
];
let pIdx = 0,
  cIdx = 0,
  deleting = false;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;
  const cur = phrases[pIdx];
  el.textContent = cur.substring(0, cIdx);
  if (!deleting && cIdx < cur.length) {
    cIdx++;
    setTimeout(type, 80);
  } else if (deleting && cIdx > 0) {
    cIdx--;
    setTimeout(type, 45);
  } else {
    deleting = !deleting;
    if (!deleting) pIdx = (pIdx + 1) % phrases.length;
    setTimeout(type, 900);
  }
}

/* -------- SKILLS -------- */
const skills = [
  { name: "HTML & CSS",    icon: "fab fa-html5",      color: "#e34f26" },
  { name: "JavaScript",   icon: "fab fa-js",          color: "#f7df1e" },
  { name: "Bootstrap",    icon: "fab fa-bootstrap",   color: "#7952b3" },
  { name: "Tailwind CSS", icon: "fas fa-wind",        color: "#38bdf8" },
  { name: "PHP",          icon: "fab fa-php",         color: "#777bb4" },
  { name: "Node.js",      icon: "fab fa-node-js",     color: "#68a063" },
  { name: "Laravel",      icon: "fab fa-laravel",     color: "#ff2d20" },
  { name: "Flutter",      icon: "fas fa-mobile-alt",  color: "#54c5f8" },
  { name: "Figma",        icon: "fab fa-figma",       color: "#f24e1e" },
  { name: "Canva",        icon: "fas fa-palette",     color: "#00c4cc" },
  { name: "Git & GitHub", icon: "fab fa-git-alt",     color: "#f05032" },
];

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  skills.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "skill-card reveal";
    el.style.animationDelay = `${i * 0.07}s`;
    el.innerHTML = `
      <div class="skill-icon" style="color:${s.color}"><i class="${s.icon}"></i></div>
      <span class="skill-name">${s.name}</span>
    `;
    grid.appendChild(el);
  });
}

/* -------- PROJECTS DATA -------- */
const projects = [
  {
    id: "anchor-global",
    title: "Anchor Global Website UI",
    desc: "A Figma design for a corporate website featuring modern layouts, team showcases, and contact sections.",
    image: "assets/anchor.png",
    type: "ui/ux",
    badge: "UI/UX",
    icon: "fab fa-figma",
    link: "https://www.figma.com/proto/yeqT0fVqyywivFWvJv6oVa/Anchor-Global",
  },
  {
    id: "kitenge-mobile",
    title: "Kitenge Closet Android App",
    desc: "A Flutter mobile e-commerce app for fashion. Features product browsing, cart management, and authentication.",
    image: "assets/android.jpeg",
    type: "android",
    badge: "Android",
    icon: "fab fa-github",
    link: "https://github.com/Veronicah-155/flutter_ecommerce_app",
  },
  {
    id: "kitenge-closet",
    title: "Kitenge Closet Website",
    desc: "An e-commerce platform showcasing African fashion — seamless browsing, detailed product views, and checkout.",
    image: "assets/Kitenge.png",
    type: "fullstack",
    badge: "Fullstack",
    icon: "fab fa-github",
    link: "https://github.com/Veronicah-155/Kitenge-Closet",
  },
  {
    id: "student-profile",
    title: "Student Profile Card UI",
    desc: "A clean, responsive profile card built with HTML and CSS showcasing personal details and skills.",
    image: "assets/student.jpg",
    type: "frontend",
    badge: "Frontend",
    icon: "fab fa-github",
    link: "https://github.com/veronicah-155/student-profile-card",
  },
  {
    id: "login-signup",
    title: "Login & Signup UI",
    desc: "A responsive authentication interface featuring login and signup pages with modern design.",
    image: "assets/login.jpeg",
    type: "frontend",
    badge: "Frontend",
    icon: "fab fa-github",
    link: "https://github.com/veronicah-155/modern-auth-ui",
  },
  {
    id: "course-facebook-ads",
    title: "Course Facebook Ad",
    desc: "UI/UX-optimized Facebook ad creatives designed in Canva for an online course campaign.",
    image: "assets/Facebook.png",
    type: "ui/ux",
    badge: "UI/UX",
    icon: "fas fa-palette",
    link: "https://canva.link/5nh1yowfw0z0z23",
  },
  {
    id: "lichtpfad",
    title: "LichtPfad Website",
    desc: "A web platform connecting professionals with job and study opportunities featuring job search and course search.",
    image: "assets/lichtpfad-home.png",
    type: "fullstack",
    badge: "Fullstack",
    icon: "fas fa-external-link-alt",
    link: "https://lichtpfadsw.com/",
  },
];

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.title}" class="card-image" loading="lazy" />
        <div class="card-image-overlay"></div>
        <span class="card-badge">${p.badge}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-actions">
          <a href="project-detail.html?id=${p.id}" class="card-btn-primary">View Details</a>
          ${p.link ? `<a href="${p.link}" target="_blank" class="card-btn-icon" title="Source"><i class="${p.icon}"></i></a>` : ""}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveal();
}

/* -------- FILTER TABS -------- */
function initFilterTabs() {
  const tabs = document.getElementById("filterTabs");
  if (!tabs) return;
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    document
      .querySelectorAll(".filter-tab")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
}

/* -------- SCROLL REVEAL -------- */
function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("visible"));
  }
}

/* -------- NAVBAR SCROLL -------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* -------- HAMBURGER MENU -------- */
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

/* -------- HIRE ME BUTTON -------- */
function initHireMe() {
  const btn = document.getElementById("hireMeBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
}

/* -------- CONTACT FORM -------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");

    // Loading state
    btn.innerHTML = 'Sending… <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    try {
      const response = await fetch("https://formspree.io/f/xnjlrdpd", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        // Success
        btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
        btn.style.background = "#009110";
        form.reset();
        setTimeout(() => {
          btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
          btn.style.background = "";
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error("Server error");
      }
    } catch {
      // Error
      btn.innerHTML = 'Failed — Try Again <i class="fas fa-times"></i>';
      btn.style.background = "#c0392b";
      setTimeout(() => {
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        btn.style.background = "";
        btn.disabled = false;
      }, 4000);
    }
  });
}

/* -------- INIT -------- */
document.addEventListener("DOMContentLoaded", () => {
  type();
  renderSkills();
  renderProjects();
  observeReveal();
  initFilterTabs();
  initNavbar();
  initHamburger();
  initHireMe();
  initContactForm();
});