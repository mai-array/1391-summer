<div class="page-header">
  <h1>CAD Learning</h1>
  <a href="/design/" class="home-button">Back</a>
</div>

<!-- Card 1-->
<div class="card-stack">
  <div class="simple-card">   
  <!-- Title and button side-by-side -->
  <div class="card-header">
      <h3 class="card-title">RoboChargers CAD Class</h3>
      <a 
        href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID" 
        target="_blank" 
        class="card-button"
      >
        See Playlist
      </a>
    </div>
  <!-- Description text -->
  <p class="card-description">
      An Onshape CAD Class set up by 3005 The RoboChargers, that goes through the basic CAD skills needed to design an FRC robot. Useful resource for those who prefer to learn using video format. 
  </p>
  <!-- More Information -->
<button class="info-toggle">Tips & Context</button>
<div class="info-box hidden">
  <p><span class="info-label">Note:</span> This resource was originally made for another team, but it's still useful.</p>
</div>

<!-- Tasks Dropdown C1-->
  </details>
     </details>
      <details class="task-dropdown">
       <summary>Show Tasks</summary>
       <ul class="task-list">
          <li><label><input type="checkbox">Task 1 </li>
          <li><label><input type="checkbox">Task 2</li>
         <li><label><input type="checkbox">Task 3</li>
       </ul>
     </details>
    </div>
  </div>






<script>
  const toggleBtn = document.querySelector(".info-toggle");
  const infoBox = document.querySelector(".info-box");

  toggleBtn.addEventListener("click", function () {
    infoBox.classList.toggle("hidden");
    toggleBtn.textContent = infoBox.classList.contains("hidden")
      ? "Tips & Context"
      : "Hide Information";
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-list input[type='checkbox']");

    // Restore saved checkbox states
    checkboxes.forEach((checkbox, index) => {
      const savedState = localStorage.getItem("taskCheckbox_" + index);
      if (savedState === "true") checkbox.checked = true;

      // Save new state on change
      checkbox.addEventListener("change", () => {
        localStorage.setItem("taskCheckbox_" + index, checkbox.checked);
      });
    });
  });
</script>