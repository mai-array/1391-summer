document.addEventListener('DOMContentLoaded', () => {
  const progress = JSON.parse(localStorage.getItem('lessonProgress')) || {};

  const cards = document.querySelectorAll('.simple-card[data-lesson-id]');

  cards.forEach(card => {
    const lessonId = card.getAttribute('data-lesson-id');
    if (!lessonId) return;

    const button = card.querySelector('.card-button');
    if (!button) return;

    if (!button.dataset.href) {
      button.dataset.href = button.getAttribute('href');
    }

    function updateCardUI(completed) {
      if (completed) {
        card.classList.add('completed');
        button.textContent = 'Mark as Incomplete';
        button.classList.add('green-button');
        button.removeAttribute('href'); // prevent navigation while incomplete
      } else {
        card.classList.remove('completed');
        button.textContent = 'Start Lesson';
        button.classList.remove('green-button');
        button.setAttribute('href', button.dataset.href); // restore link
      }
    }

    updateCardUI(progress[lessonId]);

    button.addEventListener('click', e => {
      const completed = !!progress[lessonId];
      if (completed) {
        e.preventDefault(); // prevent navigating away when toggling incomplete
        progress[lessonId] = false;
        localStorage.setItem('lessonProgress', JSON.stringify(progress));
        updateCardUI(false);
      }
      // If not completed, do nothing and let link navigate normally
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const finishBtn = document.getElementById('finish-lesson');
  const lessonIdElem = document.getElementById('lesson-id');
  if (!finishBtn || !lessonIdElem) return;

  const lessonId = lessonIdElem.getAttribute('data-lesson-id');
  if (!lessonId) return;

  finishBtn.addEventListener('click', () => {
    let progress = JSON.parse(localStorage.getItem('lessonProgress')) || {};
    progress[lessonId] = true;
    localStorage.setItem('lessonProgress', JSON.stringify(progress));

    // Go back to parent folder index page
    const currentPath = window.location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    parts.pop();
    const folderIndexPath = '/' + parts.join('/') + '/';
    window.location.href = folderIndexPath;
  });
});