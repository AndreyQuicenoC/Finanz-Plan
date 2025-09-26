// Toggle behavior for each toggle button
document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const branch = btn.parentElement.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (!branch) return;
    if (expanded) {
      branch.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "▸";
    } else {
      branch.style.display = "block";
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "▾";
    }
  });
});

// Expand all / Collapse all
const expandAll = document.getElementById("expandAll");
const collapseAll = document.getElementById("collapseAll");
expandAll.addEventListener("click", () => {
  document
    .querySelectorAll(".branch")
    .forEach((b) => (b.style.display = "block"));
  document.querySelectorAll(".toggle").forEach((t) => {
    t.setAttribute("aria-expanded", "true");
    t.textContent = "▾";
  });
});
collapseAll.addEventListener("click", () => {
  document
    .querySelectorAll(".branch")
    .forEach((b) => (b.style.display = "none"));
  document.querySelectorAll(".toggle").forEach((t) => {
    t.setAttribute("aria-expanded", "false");
    t.textContent = "▸";
  });
});

// Download HTML
document.getElementById("download").addEventListener("click", () => {
  const html = "<!doctype html>" + document.documentElement.outerHTML;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "site_map_gestor_finanzas.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
