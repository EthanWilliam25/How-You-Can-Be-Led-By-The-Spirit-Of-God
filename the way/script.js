const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "mode",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}