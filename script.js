document.addEventListener("DOMContentLoaded", () => {
  const fecha = document.getElementById("fecha");
  if (fecha) {
    const hoy = new Date();
    fecha.textContent = hoy.toLocaleDateString();
  }
});