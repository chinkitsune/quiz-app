// /public/js/home.js (unchanged)
document.addEventListener('DOMContentLoaded', () => {
  const subjectCards = document.querySelectorAll('.subject-card');

  subjectCards.forEach(card => {
    card.addEventListener('click', () => {
      const subjectId = card.getAttribute('data-subject-id');
      window.location.href = `/subjects/${subjectId}`;
    });
  });
});
