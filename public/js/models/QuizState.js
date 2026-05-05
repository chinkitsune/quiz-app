class QuizState {
  constructor() {
    this.answered = {};
    this.activeFilter = 'all';
  }

  answerQuestion(questionId, chosen, isCorrect) {
    this.answered[questionId] = { chosen, isCorrect };
  }

  isQuestionAnswered(questionId) {
    return !!this.answered[questionId];
  }

  setFilter(filterId) {
    this.activeFilter = filterId;
  }

  reset() {
    this.answered = {};
    this.activeFilter = 'all';
  }

  getStats() {
    const answered = Object.keys(this.answered).length;
    const correct = Object.values(this.answered).filter(a => a.isCorrect).length;
    return { answered, correct, wrong: answered - correct };
  }
}

export default QuizState;
