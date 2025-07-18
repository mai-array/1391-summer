title: Onshape CAD Basics

<style>
  #onshape-progress-list input[type="checkbox"] {
    transform: scale(1.5);        /* Make the checkbox larger */
    margin-right: 10px;
    cursor: pointer;              /* Pointer cursor on hover */
  }

  #onshape-progress-list label {
    cursor: pointer;              /* Also make label clickable with pointer */
  }

  #onshape-progress-list li {
    margin-bottom: 8px;
  }
</style>


<div id="lesson-id" data-lesson-id="onshapebasics"></div>
<h1 class="lesson-title">Onshape CAD Basics</h1>
<p class="lesson-subtitle">
  <a href="/design/cad/" class="lesson-back-inline">← Back to Lesson Overview</a>
</p>


<div class="lesson-article">

  <h2><strong>Introduction</strong></h2>

  <p>Before starting this lesson, make sure that you have an Onshape account made with your westtown email address. To learn how to do this, you can visit <strong><a href="/design/cad/whatis"> here</a></strong> and scroll down to the "How to Setup an Onshape Account" section.
  </p> 

  <p>Once you have checked that you can log into that account, you're all good to go to proceed with this lesson! </p>

  <img src="/assets/imgs/onshape_dashboard.png" alt="Screenshot of Onshape Course" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;">

  <div style="margin-top: 5rem;"></div>

<div class="header-w-button">
  <h2><strong>The Onshape Course</strong></h2>
  <a href="https://learn.onshape.com/learn/learning-path/introduction-to-cad" target="_blank" rel="noopener noreferrer" class="article-button">
    Access Resource
  </a>
</div>

 <p>The Onshape design course is set up for individuals who wish to learn CAD from the very beginning, and introduces the basic functions of onshape as well as some best practices. </p>

  <p>The course includes several "mini courses" which cover each section of CAD. After completing the entire course you will recieve a certificate of completion from Onshape. </p>


<img src="/assets/imgs/onshape_new2cad.png" alt="Screenshot of Onshape Course" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;">

<div style="margin-top: 5rem;"></div>

<p> It is recommended that you follow along with the course by opening an Onshape document in a seperate tab. To open a document, click the "create" button in the top left corner, and click "document". </p>

<img src="/assets/imgs/onshape_create_document.png" alt="Screenshot of Onshape Course" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;">


<div style="margin-top: 3rem;"></div>


<h2><strong>Track Your Progress</strong></h2>

<ul id="onshape-progress-list">
  <li><label><input type="checkbox" id="onshape-section-1"> Welcome to Onshape</label></li>
  <li><label><input type="checkbox" id="onshape-section-2"> Introduction to Parametric Modeling</label></li>
  <li><label><input type="checkbox" id="onshape-section-3"> Creating a Part Studio</label></li>
  <li><label><input type="checkbox" id="onshape-section-4"> Sketching</label></li>
  <li><label><input type="checkbox" id="onshape-section-5"> Feature Tools</label></li>
  <li><label><input type="checkbox" id="onshape-section-6"> Assemblies</label></li>
  <li><label><input type="checkbox" id="onshape-section-7"> Drawings</label></li>
  <li><label><input type="checkbox" id="onshape-section-8"> Final Challenge</label></li>
</ul>


<div style="margin-top: 3rem;"></div>



<button id="finish-lesson" class="completed-lesson-button">
  Finish Lesson
</button>

<script>
  const checkboxes = document.querySelectorAll('#onshape-progress-list input[type="checkbox"]');

  checkboxes.forEach(cb => {
    const id = cb.id;

    // Restore checkbox state from localStorage
    cb.checked = localStorage.getItem(id) === 'true';

    // Save checkbox state to localStorage on change
    cb.addEventListener('change', () => {
      localStorage.setItem(id, cb.checked);
    });
  });
</script>