/* ================================================
   Project Detail Script
   ================================================ */

function getProjectIdFromURL() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderProjectDetail() {
  const projectId = getProjectIdFromURL();
  const project = getProjectById(projectId);
  const contentDiv = document.getElementById("projectContent");

  if (!project) {
    contentDiv.innerHTML = `
      <div class="not-found">
        <p class="not-found-code">404</p>
        <h2 class="not-found-title">Project not found</h2>
        <p class="not-found-msg">This project doesn't exist or may have moved.</p>
        <a href="index.html#projects" class="btn-primary">
          <i class="fas fa-arrow-left"></i> Back to Projects
        </a>
      </div>`;
    return;
  }

  const screenshotsHTML = project.screenshots
    .map(
      (img, i) => `
    <div class="screenshot-item">
      <img src="${img}" alt="${project.title} screenshot ${i + 1}" loading="lazy" />
      <div class="overlay"><span>Screenshot ${i + 1}</span></div>
    </div>
  `,
    )
    .join("");

  const techHTML = project.technologies
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");

  const featuresHTML = project.features
    .map(
      (f) => `
    <li><span class="feature-dot"></span><span>${f}</span></li>
  `,
    )
    .join("");

  let primaryHref = project.github || project.liveDemo || "";
  let primaryIcon = "fas fa-external-link-alt";
  let primaryLabel = "View Project";
  if (primaryHref.includes("figma")) {
    primaryIcon = "fab fa-figma";
    primaryLabel = "Open in Figma";
  } else if (primaryHref.includes("github")) {
    primaryIcon = "fab fa-github";
    primaryLabel = "View on GitHub";
  } else if (primaryHref.includes("canva")) {
    primaryIcon = "fas fa-palette";
    primaryLabel = "View on Canva";
  }

  contentDiv.innerHTML = `
    <div class="project-header">
      <div class="project-badge">${project.badge}</div>
      <h1 class="project-title">${project.title}</h1>
      <p class="project-desc">${project.description}</p>
    </div>

    <div class="divider"></div>

    <div class="section-card delay-1">
      <div class="section-label">Technologies</div>
      <div class="tech-grid">${techHTML}</div>
    </div>

    <div class="section-card delay-2">
      <div class="section-label">Screenshots</div>
      <div class="screenshots-grid">${screenshotsHTML}</div>
    </div>

    <div class="section-card delay-3">
      <div class="section-label">Overview</div>
      <p>${project.fullDescription}</p>
    </div>

    <div class="two-col">
      <div class="section-card challenge-card delay-3">
        <div class="section-label challenge-label">Challenge</div>
        <p>${project.challenge}</p>
      </div>
      <div class="section-card delay-3">
        <div class="section-label">Solution</div>
        <p>${project.solution}</p>
      </div>
    </div>

    <div class="section-card delay-4">
      <div class="section-label">Key Features</div>
      <ul class="feature-list">${featuresHTML}</ul>
    </div>

    <div class="cta-row">
      ${primaryHref ? `<a href="${primaryHref}" target="_blank" class="btn-primary"><i class="${primaryIcon}"></i> ${primaryLabel}</a>` : ""}
      ${
        project.liveDemo && project.liveDemo !== primaryHref
          ? `<a href="${project.liveDemo}" target="_blank" class="btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
          : ""
      }
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);