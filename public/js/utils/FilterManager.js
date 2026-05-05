const FILTERS = [
  { id: 'all', label: '✦ All Questions' },
  { id: 'unanswered', label: '⏳ Unanswered' },
  { id: 'correct', label: '✓ Correct' },
  { id: 'wrong', label: '✗ Wrong' },
];

class FilterManager {
  static buildFilterBar(onFilterChange) {
    const bar = document.getElementById('filter-bar');
    bar.innerHTML = '';

    FILTERS.forEach(({ id, label }) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (id === 'all' ? ' active' : '');
      btn.textContent = label;
      btn.setAttribute('data-filter', id);
      btn.addEventListener('click', () => onFilterChange(id));
      bar.appendChild(btn);
    });
  }

  static getFilteredQuestions(questions, state, filterId) {
    switch (filterId) {
      case 'unanswered':
        return questions.filter(q => !state.isQuestionAnswered(q._id));
      case 'correct':
        return questions.filter(q => state.answered[q._id]?.isCorrect);
      case 'wrong':
        return questions.filter(q => 
          state.answered[q._id] && !state.answered[q._id].isCorrect
        );
      default:
        return questions;
    }
  }

  static updateFilterButtons(activeFilter, questions, state) {
    const counts = {
      all: questions.length,
      unanswered: questions.filter(q => !state.isQuestionAnswered(q._id)).length,
      correct: Object.values(state.answered).filter(a => a.isCorrect).length,
      wrong: Object.values(state.answered).filter(a => !a.isCorrect).length,
    };

    document.querySelectorAll('.filter-btn').forEach(btn => {
      const id = btn.dataset.filter;
      const baseLabel = FILTERS.find(f => f.id === id)?.label || '';
      btn.textContent = `${baseLabel} (${counts[id]})`;
      btn.classList.toggle('active', id === activeFilter);
    });
  }
}

export default FilterManager;
