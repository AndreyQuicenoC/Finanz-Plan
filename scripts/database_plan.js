/**
 * Visualizador de Diagrama de Base de Datos - Finanz
 * @description Aplicación para visualizar el ERD de la base de datos
 */

// ==================== Estado de la aplicación ====================
const state = {
  currentTheme: "light",
};

// ==================== Elementos del DOM ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  erdSvg: document.getElementById("erd-svg"),
  tablesList: document.getElementById("tables-list"),
  loading: document.getElementById("loading"),
  errorState: document.getElementById("error-state"),
  errorMessage: document.getElementById("error-message"),
  dbDescription: document.getElementById("db-description"),
  dbNote: document.getElementById("db-note"),
};

// ==================== Inicialización ====================
/**
 * Inicializa la aplicación
 */
function init() {
  console.log("Iniciando aplicación de diagrama de base de datos...");
  try {
    loadTheme();
    setupEventListeners();
    loadDatabase();
    console.log("Aplicación inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar:", error);
    showError("Error al inicializar la aplicación: " + error.message);
  }
}

/**
 * Configura todos los event listeners
 */
function setupEventListeners() {
  console.log("Configurando event listeners...");
  elements.themeToggle.addEventListener("click", toggleTheme);
  console.log("Event listeners configurados");
}

// ==================== Gestión de tema ====================
/**
 * Carga el tema guardado del localStorage
 */
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  state.currentTheme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
}

/**
 * Alterna entre tema claro y oscuro
 */
function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.currentTheme);
  localStorage.setItem("theme", state.currentTheme);
  updateThemeIcon();
}

/**
 * Actualiza el icono del botón de tema
 */
function updateThemeIcon() {
  const icon = elements.themeToggle.querySelector(".theme-icon");
  icon.textContent = state.currentTheme === "light" ? "Oscuro" : "Claro";
}

// ==================== Carga de datos ====================
/**
 * Carga el diagrama de base de datos
 */
function loadDatabase() {
  console.log("Cargando diagrama de base de datos...");
  showLoading();

  try {
    // Verificar que DATABASE_DATA existe
    if (typeof DATABASE_DATA === "undefined") {
      throw new Error("No se encontraron los datos de la base de datos");
    }

    // Actualizar descripciones
    if (elements.dbDescription && DATABASE_DATA.subtitle) {
      elements.dbDescription.textContent = DATABASE_DATA.subtitle;
    }

    if (elements.dbNote && DATABASE_DATA.note) {
      elements.dbNote.textContent = DATABASE_DATA.note;
    }

    // Renderizar diagrama SVG
    renderERD();

    // Renderizar lista de tablas
    renderTablesList();

    hideLoading();
    console.log("Diagrama de base de datos cargado correctamente");
  } catch (error) {
    showError(error.message);
    console.error("Error cargando diagrama:", error);
  }
}

/**
 * Muestra el estado de carga
 */
function showLoading() {
  elements.loading.hidden = false;
  elements.errorState.hidden = true;
}

/**
 * Oculta el estado de carga
 */
function hideLoading() {
  elements.loading.hidden = true;
}

/**
 * Muestra un mensaje de error
 * @param {string} message - Mensaje de error
 */
function showError(message) {
  elements.loading.hidden = true;
  elements.errorState.hidden = false;
  elements.errorMessage.textContent = message;
}

// ==================== Renderizado ====================
/**
 * Renderiza el diagrama ERD en SVG
 */
function renderERD() {
  if (!DATABASE_DATA.tables || !DATABASE_DATA.relationships) return;

  // Limpiar SVG
  elements.erdSvg.innerHTML = "";

  // Crear marker para flechas
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", "arrow");
  marker.setAttribute("markerWidth", "10");
  marker.setAttribute("markerHeight", "10");
  marker.setAttribute("refX", "6");
  marker.setAttribute("refY", "5");
  marker.setAttribute("orient", "auto");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M0,0 L10,5 L0,10 z");
  path.setAttribute("fill", "#9aa");

  marker.appendChild(path);
  defs.appendChild(marker);
  elements.erdSvg.appendChild(defs);

  // Renderizar relaciones (líneas)
  DATABASE_DATA.relationships.forEach((rel) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", rel.fromPoint[0]);
    line.setAttribute("y1", rel.fromPoint[1]);
    line.setAttribute("x2", rel.toPoint[0]);
    line.setAttribute("y2", rel.toPoint[1]);
    line.setAttribute("stroke", "#9aa");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("marker-end", "url(#arrow)");
    elements.erdSvg.appendChild(line);
  });

  // Renderizar tablas
  DATABASE_DATA.tables.forEach((table) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${table.x},${table.y})`);

    // Rectángulo de fondo
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", table.width);
    rect.setAttribute("height", table.height);
    rect.setAttribute("rx", "10");
    rect.setAttribute("ry", "10");
    rect.setAttribute("fill", table.color);
    rect.setAttribute("stroke", table.stroke);
    rect.setAttribute("stroke-width", "2");
    g.appendChild(rect);

    // Título de la tabla
    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", "12");
    title.setAttribute("y", "24");
    title.setAttribute("class", "table-title");
    title.textContent = table.name;
    g.appendChild(title);

    // Campos
    table.fields.forEach((field, index) => {
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", "12");
      text.setAttribute("y", 50 + index * 18);

      if (field.isPK) {
        text.setAttribute("class", "field-pk");
      } else if (field.isFK) {
        text.setAttribute("class", "field-fk");
      } else {
        text.setAttribute("class", "field");
      }

      let content = `${field.name}`;
      if (field.isPK) content += " (PK)";
      if (field.isFK) content += ` (FK → ${field.ref})`;
      if (field.note) content += ` ${field.note}`;

      text.textContent = content;
      g.appendChild(text);
    });

    elements.erdSvg.appendChild(g);
  });
}

/**
 * Renderiza la lista de tablas
 */
function renderTablesList() {
  if (!DATABASE_DATA.tables) return;

  const tablesHTML = DATABASE_DATA.tables
    .map((table) => createTableCard(table))
    .join("");

  elements.tablesList.innerHTML = tablesHTML;
}

/**
 * Crea una card de tabla
 * @param {Object} table - Objeto de tabla
 * @returns {string} HTML de la card
 */
function createTableCard(table) {
  const fieldsHTML = table.fields
    .map((field) => {
      let className = "table-field";
      if (field.isPK) className += " field-primary";
      if (field.isFK) className += " field-foreign";

      let fieldText = field.name;
      if (field.isPK) fieldText += " (PK)";
      if (field.isFK) fieldText += ` → ${field.ref}`;
      if (field.note) fieldText += ` - ${field.note}`;

      return `<li class="${className}">${escapeHtml(fieldText)}</li>`;
    })
    .join("");

  return `
    <div class="table-card" style="border-left: 4px solid ${table.stroke};">
      <h3 class="table-card-name">${escapeHtml(table.name)}</h3>
      <ul class="table-fields-list">
        ${fieldsHTML}
      </ul>
    </div>
  `;
}

// ==================== Utilidades ====================
/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==================== Inicio de la aplicación ====================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
