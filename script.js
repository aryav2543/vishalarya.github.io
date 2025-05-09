const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});
