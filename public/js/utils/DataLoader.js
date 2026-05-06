// public/js/utils/DataLoader.js
// Load quiz data embedded in the page

class DataLoader {
  static loadQuizData() {
    const script = document.getElementById('quiz-data');
    if (!script) {
      throw new Error('Quiz data not found in page');
    }
    return JSON.parse(script.textContent);
  }
}

export default DataLoader;
