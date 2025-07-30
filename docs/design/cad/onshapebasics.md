title: Onshape CAD Basics





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


<div class="red-line"></div>

<div class="header-w-button">
  <h2><strong>The Onshape Course</strong></h2>
  <a href="https://learn.onshape.com/learn/learning-path/introduction-to-cad" target="_blank" rel="noopener noreferrer" class="article-button">
    Access Resource
  </a>
</div>

 <p>The Onshape design course is set up for individuals who wish to learn CAD from the very beginning, and introduces the basic functions of onshape as well as some best practices. </p>

  <p>The course includes several "mini courses" which cover each section of CAD. After completing the entire course you will recieve a certificate of completion from Onshape. </p>


<img src="/assets/imgs/onshape_new2cad.png" alt="Screenshot of Onshape Course" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;">

<div style="margin-top: 2rem;"></div>

<p> It is recommended that you follow along with the course by opening an Onshape document in a seperate tab. To open a document, click the "create" button in the top left corner, and click "document". </p>

<div style="margin-top: 2rem;"></div>

<img src="/assets/imgs/onshape_create_document.png" alt="Screenshot of Onshape Course" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;">


<div style="margin-top: 3rem;"></div>

<div class="red-line"></div>

<h2><strong>Progress Tracker &#x2661; </strong></h2>
<div style="margin-top: 1rem;"></div>

<ul id="onshape-progress-list" class="progress-list">
  <li data-id="onshape-section-1">Introduction to Parametric Feature-Based CAD</li>
  <li data-id="onshape-section-2">Introduction to Sketching</li>
  <li data-id="onshape-section-3">Introduction to Part Studios</li>
  <li data-id="onshape-section-4">Introduction to Assembly Design</li>
  <li data-id="onshape-section-5">Introduction to Drawings</li>
  <li data-id="onshape-section-6">10 Essential Onshape Tips</li>
  <li data-id="onshape-section-7">Onshape Hands-On Test Drive</li>
</ul>



<div class="red-line"></div>



<h2><strong>Next Steps</strong></h2>

<p> Although this course has taught how to CAD generally, there are a lot of principles that are applied specifically in FRC that are important to learn. Make sure to keep practicing the basics of CAD to refresh your memory! In the <strong><a href="/design/mini"> Mini Projects </a></strong> section, you can find a few ideas on how to do this.</p>

<div style="margin-top: 3rem;"></div>


<button id="finish-lesson" class="completed-lesson-button">
  Finish Lesson
</button>

<script>
  const listItems = document.querySelectorAll('#onshape-progress-list li');

  listItems.forEach(item => {
    const id = item.dataset.id;

    // Restore saved progress
    if (localStorage.getItem(id) === 'true') {
      item.classList.add('completed');
    }

    // Toggle completion on click
    item.addEventListener('click', () => {
      item.classList.toggle('completed');
      const isComplete = item.classList.contains('completed');
      localStorage.setItem(id, isComplete);
    });
  });
</script>

