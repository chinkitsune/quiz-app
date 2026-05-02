// /public/js/home.js (unchanged)
document.addEventListener('DOMContentLoaded', () => {
  const subjectCards = document.querySelectorAll('.subject-card');

  subjectCards.forEach(card => {
    card.addEventListener('click', () => {
      const subjectName = card.getAttribute('data-subject-name');
      window.location.href = `/subjects/${subjectName}`;
    });
  });
});
