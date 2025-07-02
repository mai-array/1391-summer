// Info toggle
document.addEventListener("DOMContentLoaded", () => {
  const infoToggleBtn = document.querySelector(".info-toggle");
  const infoBox = document.querySelector(".info-box");

  if (infoToggleBtn && infoBox) {
    infoToggleBtn.textContent = infoBox.classList.contains("hidden")
      ? "Show Tips"
      : "Hide Tips";

    infoToggleBtn.addEventListener("click", () => {
      infoBox.classList.toggle("hidden");
      infoToggleBtn.textContent = infoBox.classList.contains("hidden")
        ? "Show Tips"
        : "Hide Tips";
    });
  }

  // Task toggle
  const taskToggleBtn = document.querySelector(".task-toggle");
  const taskBox = document.querySelector(".task-box");

  if (taskToggleBtn && taskBox) {
    taskToggleBtn.addEventListener("click", () => {
      taskBox.classList.toggle("hidden");
      taskToggleBtn.textContent = taskBox.classList.contains("hidden")
        ? "Show Tasks"
        : "Hide Tasks";
    });
  }

  // Save checkbox states
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');

  checkboxes.forEach((checkbox) => {
    const id = checkbox.dataset.id;
    const savedState = localStorage.getItem(id);
    checkbox.checked = savedState === "true";

    checkbox.addEventListener("change", () => {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});