import DataLoader from './utils/DataLoader.js';
import QuizState from './models/QuizState.js';
import DOMBuilder from './utils/DOMBuilder.js';
import FilterManager from './utils/FilterManager.js';

class QuizEngine {
  async init() {
    try {
      // Load data from embedded JSON, not from API
      const data = DataLoader.loadQuizData();
      this.quiz = data.quiz;
      this.questions = data.questions;
      this.state = new QuizState();

      this.setupUI();
      this.render();
    } catch (error) {
      console.error('Failed to initialize quiz:', error);
      document.getElementById('quiz-container').innerHTML = 
        '<div class="error">Failed to load quiz</div>';
    }
  }

  setupUI() {
    FilterManager.buildFilterBar((filterId) => this.applyFilter(filterId));
  }

  render() {
    const filtered = FilterManager.getFilteredQuestions(
      this.questions,
      this.state,
      this.state.activeFilter
    );
    this.renderQuestions(filtered);
    this.updateProgress();
  }

  renderQuestions(list) {
    const grid = document.getElementById('questions-grid');
    grid.innerHTML = '';

    if (!list.length) {
      grid.innerHTML = '<div class="empty-state">No questions in this category.</div>';
      return;
    }

    list.forEach((q) => {
      const globalIdx = this.questions.findIndex(item => item._id === q._id);
      const answerState = this.state.answered[q._id];
      const card = DOMBuilder.buildQuestionCard(q, globalIdx, answerState);
      
      const options = card.querySelectorAll('.option-item');
      options.forEach((opt, i) => {
        if (!answerState) {
          opt.addEventListener('click', () => this.handleAnswer(q, i));
        }
      });

      grid.appendChild(card);
    });
  }

  handleAnswer(question, chosen) {
    const isCorrect = chosen === question.correctOption;
    this.state.answerQuestion(question._id, chosen, isCorrect);
    this.render();

    if (this.isQuizComplete()) {
      setTimeout(() => this.showSummary(), 600);
    }
  }

  applyFilter(filterId) {
    this.state.setFilter(filterId);
    this.render();
  }

  updateProgress() {
    const stats = this.state.getStats();
    const pct = this.questions.length ? (stats.answered / this.questions.length) * 100 : 0;

    document.getElementById('ring-fill').style.strokeDashoffset = 
      (339.29 * (1 - pct / 100)).toFixed(2);
    document.getElementById('progress-text').textContent = 
      `${stats.answered} / ${this.questions.length}`;

    FilterManager.updateFilterButtons(this.state.activeFilter, this.questions, this.state);
  }

  isQuizComplete() {
    return Object.keys(this.state.answered).length === this.questions.length;
  }

  showSummary() {
    const stats = this.state.getStats();
    const pct = Math.round((stats.correct / this.questions.length) * 100);
    const { grade, emoji, message } = this.getGrade(pct);

    document.getElementById('summary-emoji').textContent = emoji;
    document.getElementById('grade-badge').textContent = grade;
    document.getElementById('grade-badge').className = 'grade-badge grade-' + grade[0];
    document.getElementById('summary-sub').textContent = message;
    document.getElementById('stat-total').textContent = this.questions.length;
    document.getElementById('stat-correct').textContent = stats.correct;
    document.getElementById('stat-wrong').textContent = stats.wrong;

    document.getElementById('summary-screen').classList.add('visible');
    document.getElementById('summary-screen').scrollIntoView({ behavior: 'smooth' });
  }

  getGrade(pct) {
    if (pct >= 90) return { grade: 'A', emoji: '🏆', message: 'Outstanding!' };
    if (pct >= 75) return { grade: 'B', emoji: '🎓', message: 'Good job!' };
    if (pct >= 60) return { grade: 'C', emoji: '📚', message: 'Passing' };
    return { grade: 'D', emoji: '🔍', message: 'Needs review' };
  }

  reset() {
    this.state.reset();
    document.getElementById('summary-screen').classList.remove('visible');
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Initialize
const engine = new QuizEngine();
engine.init();
window.resetQuiz = () => engine.reset();
