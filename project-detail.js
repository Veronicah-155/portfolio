// Get project ID from URL
function getProjectIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Render project details
function renderProjectDetail() {
  const projectId = getProjectIdFromURL();
  const project = getProjectById(projectId);
  const contentDiv = document.getElementById('projectContent');

  if (!project) {
    contentDiv.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-3xl font-bold text-[#F0941F] mb-4">Project Not Found</h2>
        <p class="text-white mb-6">The project you're looking for doesn't exist.</p>
        <a href="index.html#projects" class="inline-block px-6 py-3 bg-[#03A64A] text-white rounded-lg hover:bg-[#009110] transition">
          Back to Projects
        </a>
      </div>
    `;
    return;
  }

  // Create screenshots gallery
  const screenshotsHTML = project.screenshots.map((img, index) => `
    <div class="relative group overflow-hidden rounded-xl border-2 border-[#03A64A]/30 hover:border-[#03A64A] transition-all duration-300">
      <img 
        src="${img}" 
        alt="${project.title} Screenshot ${index + 1}"
        class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-4 left-4 text-white">
          <p class="text-sm font-semibold">Screenshot ${index + 1}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Create technologies badges
  const techBadges = project.technologies.map(tech => `
    <span class="inline-block bg-[#013D0A] border border-[#03A64A] text-[#FFBD00] px-4 py-2 rounded-lg text-sm font-semibold">
      ${tech}
    </span>
  `).join('');

  // Create features list
  const featuresList = project.features.map(feature => `
    <li class="flex items-start space-x-3">
      <i class="fas fa-check-circle text-[#03A64A] mt-1"></i>
      <span class="text-white">${feature}</span>
    </li>
  `).join('');

  // Determine button text and icon based on project type
  let buttonText = "View Project";
  let buttonIcon = "fas fa-external-link-alt";
  
  if (project.github) {
    if (project.github.includes("figma.com")) {
      buttonText = "View on Figma";
      buttonIcon = "fab fa-figma";
    } else if (project.github.includes("github.com")) {
      buttonText = "View on GitHub";
      buttonIcon = "fab fa-github";
    } else if (project.github.includes("canva.com")) {
      buttonText = "View on Canva";
      buttonIcon = "fas fa-palette";
    }
  }

  // Render full content
  contentDiv.innerHTML = `
    <!-- Header Section -->
    <div class="text-center" data-aos="fade-up">
      <span class="inline-block bg-[#013D0A] border border-[#03A64A] text-[#F0941F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
        ${project.badge}
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold primary-color mb-4">
        ${project.title}
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        ${project.description}
      </p>
    </div>

    <!-- Technologies -->
    <div class="bg-[#011900] rounded-2xl p-8 border border-[#03A64A]/30" data-aos="fade-up">
      <h2 class="text-2xl font-bold primary-color mb-6 flex items-center">
        <i class="fas fa-code mr-3"></i> Technologies Used
      </h2>
      <div class="flex flex-wrap gap-3">
        ${techBadges}
      </div>
    </div>

    <!-- Screenshots Gallery -->
    <div data-aos="fade-up">
      <h2 class="text-2xl font-bold primary-color mb-6 flex items-center">
        <i class="fas fa-images mr-3"></i> Project Screenshots
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${screenshotsHTML}
      </div>
    </div>

    <!-- Project Overview -->
    <div class="bg-[#011900] rounded-2xl p-8 border border-[#03A64A]/30" data-aos="fade-up">
      <h2 class="text-2xl font-bold primary-color mb-6 flex items-center">
        <i class="fas fa-info-circle mr-3"></i> Project Overview
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        ${project.fullDescription}
      </p>
    </div>

    <!-- Challenge & Solution -->
    <div class="grid md:grid-cols-2 gap-8" data-aos="fade-up">
      <div class="bg-[#011900] rounded-2xl p-8 border border-[#F0941F]/30">
        <h3 class="text-xl font-bold text-[#F0941F] mb-4 flex items-center">
          <i class="fas fa-exclamation-triangle mr-3"></i> Challenge
        </h3>
        <p class="text-gray-300 leading-relaxed">
          ${project.challenge}
        </p>
      </div>
      <div class="bg-[#011900] rounded-2xl p-8 border border-[#03A64A]/30">
        <h3 class="text-xl font-bold text-[#03A64A] mb-4 flex items-center">
          <i class="fas fa-lightbulb mr-3"></i> Solution
        </h3>
        <p class="text-gray-300 leading-relaxed">
          ${project.solution}
        </p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="bg-[#011900] rounded-2xl p-8 border border-[#03A64A]/30" data-aos="fade-up">
      <h2 class="text-2xl font-bold primary-color mb-6 flex items-center">
        <i class="fas fa-star mr-3"></i> Key Features
      </h2>
      <ul class="space-y-4">
        ${featuresList}
      </ul>
    </div>

    <!-- Links -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
      ${project.github ? `
        <a 
          href="${project.github}" 
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 bg-[#03A64A] text-white rounded-lg shadow-lg hover:bg-[#009110] transition-all duration-300 transform hover:scale-105"
        >
          <i class="${buttonIcon} mr-3 text-xl"></i>
          ${buttonText}
        </a>
      ` : ''}
      ${project.liveDemo ? `
        <a 
          href="${project.liveDemo}" 
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-[#F0941F] text-[#F0941F] rounded-lg hover:bg-[#F0941F] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          <i class="fas fa-external-link-alt mr-3"></i>
          View Live Demo
        </a>
      ` : ''}
    </div>
  `;

  // Initialize AOS animations
  AOS.init({ 
    duration: 800, 
    easing: "ease-in-out", 
    once: true 
  });
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', renderProjectDetail);