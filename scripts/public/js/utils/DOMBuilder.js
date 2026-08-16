//public/js/utils/DOMBuilder.js

//Create HTML for questions

const LETTERS = ['A', 'B', 'C', 'D'];

class DOMBuilder {
  static buildQuestionCard(question, globalIdx, answerState) {
    const container = document.createElement('div');
    container.className = 'question-card';
    container.id = 'card-' + question._id;

    if (answerState) {
      container.classList.add(
        answerState.isCorrect ? 'answered-correct' : 'answered-wrong'
      );
    }

    const qNum = String(globalIdx + 1).padStart(2, '0');
    const statusIcon = answerState
      ? this.buildStatusIcon(answerState.isCorrect)
      : '';

    container.innerHTML = `
      <div class="card-meta">
        <span class="q-number">Q${qNum}</span>
        ${statusIcon}
      </div>
      <div class="question-text">${question.question}</div>
      <ul class="options-list" id="opts-${question._id}" role="list"></ul>
      <div class="explanation${answerState ? ' visible' : ''}" id="exp-${question._id}">
        💡 <strong>Explanation:</strong> ${question.explanation}
      </div>
    `;

    const optList = container.querySelector(`#opts-${question._id}`);
    question.options.forEach((_, i) => {
      optList.appendChild(this.buildOption(question, i, answerState));
    });

    return container;
  }

  static buildOption(question, optionIndex, answerState) {
    const li = document.createElement('li');
    li.className = 'option-item';
    li.setAttribute('role', 'button');

    const isCorrectOption = optionIndex === question.correctOption;
    let extraClass = '';
    let icon = '';

    if (answerState) {
      li.classList.add('disabled');
      li.setAttribute('aria-disabled', 'true');
      if (isCorrectOption) {
        extraClass = answerState.chosen === optionIndex ? 'selected-correct' : 'reveal-correct';
        icon = '✓';
      } else if (optionIndex === answerState.chosen) {
        extraClass = 'selected-wrong';
        icon = '✗';
      }
    } else {
      li.setAttribute('tabindex', '0');
    }

    if (extraClass) li.classList.add(extraClass);

    li.innerHTML = `
      <span class="option-letter" aria-hidden="true">${LETTERS[optionIndex]}</span>
      <span class="option-text">${question.options[optionIndex]}</span>
      <span class="option-indicator" aria-hidden="true">${icon}</span>
    `;

    return li;
  }

  static buildStatusIcon(isCorrect) {
    return `<div class="status-icon ${isCorrect ? 'correct' : 'wrong'}" 
      aria-label="${isCorrect ? 'Correct' : 'Wrong'}">
      ${isCorrect ? '✓' : '✗'}
    </div>`;
  }

}

export default DOMBuilder;
