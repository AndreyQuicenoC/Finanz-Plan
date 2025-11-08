// ===================================
// Team Distribution - Dynamic Rendering
// ===================================

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderTeamDistribution();
});

// ===================================
// Theme Management
// ===================================
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "light" ? "Oscuro" : "Claro";
  }
}

// ===================================
// Main Render Function
// ===================================
function renderTeamDistribution() {
  try {
    // Hide loading state
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "none";

    // Render each section
    renderRoles();
    renderMethodology();
    renderSprints();
  } catch (error) {
    showError("Error al cargar la información del equipo: " + error.message);
  }
}

// ===================================
// Render Roles Section
// ===================================
function renderRoles() {
  const container = document.getElementById("roles-container");
  if (!container) return;

  const rolesHTML = TEAM_DATA.roles
    .map(
      (role) => `
    <div class="role-card" style="border-left: 4px solid ${role.color};">
      <div class="role-header">
        <div class="role-icon" style="background: linear-gradient(135deg, ${
          role.color
        }, ${adjustColor(role.color, -20)});">
          ${role.icon}
        </div>
        <div>
          <h3 class="role-name">${role.name}</h3>
          <div class="role-members">${role.members.join(" & ")}</div>
        </div>
      </div>
      <div class="role-responsibilities">
        <h4>Responsabilidades:</h4>
        <ul>
          ${role.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");

  container.innerHTML = rolesHTML;
}

// ===================================
// Render Methodology Section
// ===================================
function renderMethodology() {
  const container = document.getElementById("methodology-container");
  if (!container) return;

  const methodology = TEAM_DATA.methodology;

  const ceremoniasHTML = methodology.ceremonias
    .map(
      (ceremonia) => `
    <div class="ceremony-item">
      <h4>${ceremonia.nombre}</h4>
      <p><strong>Frecuencia:</strong> ${ceremonia.frecuencia}</p>
      <p><strong>Duración:</strong> ${ceremonia.duracion}</p>
      <p><strong>Participantes:</strong> ${ceremonia.participantes}</p>
      <p>${ceremonia.objetivo}</p>
    </div>
  `
    )
    .join("");

  const comunicacionHTML = `
    <div class="communication-flow">
      <h4>Flujo de Comunicación</h4>
      <ol>
        ${methodology.comunicacion.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </div>
  `;

  const retroalimentacionHTML = `
    <div class="feedback-flow">
      <h4>Retroalimentación de Errores</h4>
      <ol>
        ${methodology.retroalimentacion
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ol>
    </div>
  `;

  container.innerHTML = `
    <div class="methodology-content">
      <div class="ceremonies-grid">
        ${ceremoniasHTML}
      </div>
      ${comunicacionHTML}
      ${retroalimentacionHTML}
    </div>
  `;
}

// ===================================
// Render Sprints Section
// ===================================
function renderSprints() {
  const container = document.getElementById("sprints-container");
  if (!container) return;

  const sprintsHTML = TEAM_DATA.sprints
    .map((sprint, index) => {
      const colors = [
        "#3b82f6", // Blue
        "#10b981", // Green
        "#f59e0b", // Orange
        "#8b5cf6", // Purple
        "#ef4444", // Red
      ];
      const color = colors[index % colors.length];

      return `
      <div class="sprint-card">
        <div class="sprint-header" style="background: linear-gradient(135deg, ${color}, ${adjustColor(
        color,
        -20
      )});">
          <h3>${sprint.nombre}</h3>
          <span class="sprint-duration">${sprint.semanas}</span>
        </div>
        <div class="sprint-focus">
          <h4>Enfoque Principal</h4>
          <p>${sprint.enfoque}</p>
        </div>
        <div class="sprint-roles">
          ${sprint.tareas
            .map(
              (tarea) => `
            <div class="sprint-role-section">
              <h5>${tarea.rol}</h5>
              <ul>
                ${tarea.actividades.map((act) => `<li>${act}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = sprintsHTML;
}

// ===================================
// Utility Functions
// ===================================
function adjustColor(color, percent) {
  // Convert hex to RGB
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) + percent;
  const g = ((num >> 8) & 0x00ff) + percent;
  const b = (num & 0x0000ff) + percent;

  // Clamp values
  const newR = Math.min(255, Math.max(0, r));
  const newG = Math.min(255, Math.max(0, g));
  const newB = Math.min(255, Math.max(0, b));

  // Convert back to hex
  return (
    "#" + ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")
  );
}

function showError(message) {
  const loading = document.getElementById("loading");
  const errorState = document.getElementById("error-state");
  const errorMessage = document.getElementById("error-message");

  if (loading) loading.hidden = true;
  if (errorState) {
    errorState.hidden = false;
    if (errorMessage) errorMessage.textContent = message;
  }
}
