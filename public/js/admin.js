// public/js/admin.js
// Two small, independent pieces of behaviour for /admin:
// 1. The "Add questions" quiz picker - typing filters a <datalist>,
//    and picking a match fills the hidden quizId field.
// 2. The "Manage quizzes" table - typing hides non-matching rows.

document.addEventListener('DOMContentLoaded', () => {
  setupQuizPicker();
  setupManageTableFilter();
});

function setupQuizPicker() {
  const searchInput = document.getElementById('quizSearch');
  const hiddenIdInput = document.getElementById('quizId');
  const hint = document.getElementById('quizSearchHint');
  const datalist = document.getElementById('quizOptions');
  const form = document.getElementById('addQuestionsForm');

  if (!searchInput || !hiddenIdInput || !datalist) return;

  const options = Array.from(datalist.options);

  function resolveSelection() {
    const typed = searchInput.value.trim();
    const match = options.find(opt => opt.value === typed);

    if (match) {
      hiddenIdInput.value = match.dataset.id;
      hint.textContent = '';
    } else {
      hiddenIdInput.value = '';
      hint.textContent = typed ? 'No exact match yet - pick a suggestion from the list.' : '';
    }
  }

  searchInput.addEventListener('input', resolveSelection);

  if (form) {
    form.addEventListener('submit', (e) => {
      if (!hiddenIdInput.value) {
        e.preventDefault();
        hint.textContent = 'Please pick a quiz from the suggestions before submitting.';
        searchInput.focus();
      }
    });
  }
}

function setupManageTableFilter() {
  const searchBox = document.getElementById('quizManageSearch');
  const table = document.getElementById('quizManageTable');
  if (!searchBox || !table) return;

  const rows = Array.from(table.querySelectorAll('tbody tr'));

  searchBox.addEventListener('input', () => {
    const term = searchBox.value.trim().toLowerCase();
    rows.forEach(row => {
      const haystack = row.dataset.search || '';
      row.style.display = haystack.includes(term) ? '' : 'none';
    });
  });
}
