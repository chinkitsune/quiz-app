
  // ═══════════════════════════════════════════════════════════════════
  //  Quiz Engine — reads `questions` and `QUIZ_META` from questions.js
  // ═══════════════════════════════════════════════════════════════════

  const LETTERS = ['A', 'B', 'C', 'D'];

  // ── State ──────────────────────────────────────────────────────────
  const state = {
    answered: {},    // { questionId: { chosen, correct } }
    filter: 'All',
  };

  // ── Initialise ─────────────────────────────────────────────────────
  function init() {
    applyMeta();
    buildFilters();
    renderQuestions(questions);
    updateProgress();
  }

  function applyMeta() {
    const meta = typeof QUIZ_META !== 'undefined' ? QUIZ_META : {};
    document.title = (meta.title || 'Quiz') + ' — Practice Exam';
    document.getElementById('header-title').textContent = meta.title || 'Practice Exam';
    document.getElementById('hero-title').innerHTML =
      'Java <span>' + (meta.title || 'Quiz') + '</span>';
    document.getElementById('hero-desc').textContent =
      meta.description || '';

    const topics = [...new Set(questions.map(q => q.topic))];
    document.getElementById('hero-stats').innerHTML = `
      <div class="stat-chip">📝 ${questions.length} Questions</div>
      <div class="stat-chip">🗂 ${topics.length} Topics</div>
      <div class="stat-chip">🎯 Multiple Choice</div>
    `;
  }

  // ── Filter Bar ─────────────────────────────────────────────────────
  function buildFilters() {
    const topics = ['All', ...new Set(questions.map(q => q.topic))];
    const bar = document.getElementById('filter-bar');
    bar.innerHTML = '';
    topics.forEach(topic => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (topic === state.filter ? ' active' : '');
      btn.textContent = topic === 'All' ? '✦ All Topics' : topic;
      btn.addEventListener('click', () => {
        state.filter = topic;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filtered = topic === 'All' ? questions : questions.filter(q => q.topic === topic);
        renderQuestions(filtered);
      });
      bar.appendChild(btn);
    });
  }

  // ── Render Questions ───────────────────────────────────────────────
  function renderQuestions(list) {
    const grid = document.getElementById('questions-grid');
    grid.innerHTML = '';

    if (!list.length) {
      grid.innerHTML = '<div class="empty-state">No questions in this category.</div>';
      return;
    }

    // Group by topic for dividers
    let lastTopic = null;

    list.forEach((q, idx) => {
      if (q.topic !== lastTopic) {
        if (lastTopic !== null) {
          const div = document.createElement('div');
          div.className = 'section-divider';
          div.innerHTML = `<div class="section-divider-line"></div>
            <span class="section-divider-label">${q.topic}</span>
            <div class="section-divider-line"></div>`;
          grid.appendChild(div);
        }
        lastTopic = q.topic;
      }

      grid.appendChild(buildCard(q, idx));
    });
  }

  function buildCard(q, idx) {
    const ans = state.answered[q.id];
    const card = document.createElement('div');
    card.className = 'question-card' +
      (ans ? (ans.correct ? ' answered-correct' : ' answered-wrong') : '');
    card.id = 'card-' + q.id;
    card.style.animationDelay = Math.min(idx * 0.04, 0.6) + 's';

    // Meta row
    const statusHtml = ans
      ? `<div class="status-icon ${ans.correct ? 'correct' : 'wrong'}">${ans.correct ? '✓' : '✗'}</div>`
      : '';

    card.innerHTML = `
      <div class="card-meta">
        <span class="q-number">Q${String(q.id).padStart(2,'0')}</span>
        <span class="topic-tag">${q.topic}</span>
        ${statusHtml}
      </div>
      <div class="question-text">${q.question}</div>
      <ul class="options-list" id="opts-${q.id}"></ul>
      <div class="explanation${ans ? ' visible' : ''}" id="exp-${q.id}">
        💡 <strong>Explanation:</strong> ${q.explanation}
      </div>
    `;

    const list = card.querySelector(`#opts-${q.id}`);
    q.options.forEach((opt, i) => {
      list.appendChild(buildOption(q, i, ans));
    });

    return card;
  }

  function buildOption(q, i, ans) {
    const li = document.createElement('li');
    li.className = 'option-item';

    let cls = '';
    let icon = '';

    if (ans) {
      li.classList.add('disabled');
      if (i === q.correct) {
        cls = ans.chosen === i ? 'selected-correct' : 'reveal-correct';
        icon = '✓';
      } else if (i === ans.chosen && ans.chosen !== q.correct) {
        cls = 'selected-wrong';
        icon = '✗';
      }
    }

    if (cls) li.classList.add(cls);

    li.innerHTML = `
      <span class="option-letter">${LETTERS[i]}</span>
      <span class="option-text">${q.options[i]}</span>
      <span class="option-indicator">${icon}</span>
    `;

    if (!ans) {
      li.addEventListener('click', () => handleAnswer(q, i));
    }

    return li;
  }

  // ── Answer Handler ─────────────────────────────────────────────────
  function handleAnswer(q, chosen) {
    if (state.answered[q.id]) return;

    const correct = chosen === q.correct;
    state.answered[q.id] = { chosen, correct };

    // Update option visuals
    const opts = document.querySelectorAll(`#opts-${q.id} .option-item`);
    opts.forEach((li, i) => {
      li.classList.add('disabled');
      if (i === q.correct) {
        li.classList.add(chosen === i ? 'selected-correct' : 'reveal-correct');
        li.querySelector('.option-indicator').textContent = '✓';
      } else if (i === chosen && !correct) {
        li.classList.add('selected-wrong');
        li.querySelector('.option-indicator').textContent = '✗';
      }
    });

    // Update card border
    const card = document.getElementById('card-' + q.id);
    card.classList.add(correct ? 'answered-correct' : 'answered-wrong');

    // Update status icon in meta row
    const meta = card.querySelector('.card-meta');
    let statusEl = meta.querySelector('.status-icon');
    if (!statusEl) {
      statusEl = document.createElement('div');
      meta.appendChild(statusEl);
    }
    statusEl.className = `status-icon ${correct ? 'correct' : 'wrong'}`;
    statusEl.textContent = correct ? '✓' : '✗';

    // Show explanation
    document.getElementById('exp-' + q.id).classList.add('visible');

    updateProgress();
    checkCompletion();
  }

  // ── Progress ───────────────────────────────────────────────────────
  function updateProgress() {
    const total    = questions.length;
    const answered = Object.keys(state.answered).length;
    const correct  = Object.values(state.answered).filter(a => a.correct).length;

    document.getElementById('progress-fill').style.width =
      (total ? (answered / total * 100) : 0) + '%';
    document.getElementById('progress-text').textContent = `${answered} / ${total}`;
    document.getElementById('score-live').textContent = `Score: ${correct}`;
  }

  // ── Completion Check ───────────────────────────────────────────────
  function checkCompletion() {
    if (Object.keys(state.answered).length < questions.length) return;

    setTimeout(showSummary, 600);
  }

  function showSummary() {
    const total   = questions.length;
    const correct = Object.values(state.answered).filter(a => a.correct).length;
    const wrong   = total - correct;
    const pct     = Math.round(correct / total * 100);

    document.getElementById('score-pct').textContent   = pct + '%';
    document.getElementById('stat-total').textContent   = total;
    document.getElementById('stat-correct').textContent = correct;
    document.getElementById('stat-wrong').textContent   = wrong;

    // Animated ring
    const circumference = 339.29;
    const offset = circumference - (pct / 100 * circumference);
    setTimeout(() => {
      document.getElementById('ring-fill').style.strokeDashoffset = offset;
    }, 100);

    // Grade
    let grade, emoji, sub;
    if (pct >= 90)      { grade = 'A — Outstanding!';  emoji = '🏆'; sub = "Excellent work! You truly understand Java File I/O."; }
    else if (pct >= 75) { grade = 'B — Good Job!';     emoji = '🎓'; sub = "Solid understanding. Review the tricky scenarios."; }
    else if (pct >= 60) { grade = 'C — Passing';       emoji = '📚'; sub = "You're getting there. Re-read the NIO and exceptions sections."; }
    else                { grade = 'D — Needs Review';  emoji = '🔍'; sub = "Go back to the material and try again."; }

    const gradeClass = 'grade-' + grade[0];
    document.getElementById('grade-badge').textContent = grade;
    document.getElementById('grade-badge').className   = 'grade-badge ' + gradeClass;
    document.getElementById('summary-emoji').textContent = emoji;
    document.getElementById('summary-sub').textContent   = sub;

    document.getElementById('summary-screen').classList.add('visible');
    document.getElementById('summary-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Reset ──────────────────────────────────────────────────────────
  function resetQuiz() {
    state.answered = {};
    state.filter   = 'All';
    document.getElementById('ring-fill').style.strokeDashoffset = '339.29';
    document.getElementById('summary-screen').classList.remove('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.filter-btn').forEach((b, i) => {
      b.classList.toggle('active', i === 0);
    });
    renderQuestions(questions);
    updateProgress();
  }

  // ── Boot ───────────────────────────────────────────────────────────
  init();