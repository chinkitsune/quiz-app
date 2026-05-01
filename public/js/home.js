/* ============================================================
   index.js  –  QuizLab index page — frontend JavaScript
   No frameworks, no build step required.
   ============================================================ */

'use strict';

// ── Quiz catalogue (mirrors the Pug card data) ──────────────────────────
// When a new quiz is added in index.pug, add a matching entry here.
const QUIZ_CATALOGUE = [
  {
    href:    '/quiz/java/week9',
    week:    'Week 9',
    title:   'Generics',
    subject: 'Java',
    tags:    ['Type Parameters', 'Wildcards', 'Type Erasure'],
    count:   57,
    soon:    false,
  },
  {
    href:    '/quiz/java/week10',
    week:    'Week 10',
    title:   'Collections',
    subject: 'Java',
    tags:    ['List', 'Set', 'Map', 'Queue'],
    count:   57,
    soon:    false,
  },
  {
    href:    '/quiz/java/week11',
    week:    'Week 11',
    title:   'Swing GUI',
    subject: 'Java',
    tags:    ['JFrame', 'Layouts', 'Events'],
    count:   55,
    soon:    false,
  },
  {
    href:    '/quiz/java/week12',
    week:    'Week 12',
    title:   'Exception Handling',
    subject: 'Java',
    tags:    ['try/catch', 'Custom', 'Erasure'],
    count:   57,
    soon:    false,
  },
  {
    href:    '/quiz/java/week13',
    week:    'Week 13',
    title:   'File I/O & NIO',
    subject: 'Java',
    tags:    ['NIO', 'Streams', 'Formatter'],
    count:   57,
    soon:    false,
  },
  { href: '#', week: 'Week 1', title: 'HTML Fundamentals', subject: 'Web',      tags: ['Semantic', 'Forms', 'A11y'],         count: 50, soon: true },
  { href: '#', week: 'Week 2', title: 'CSS & Layout',       subject: 'Web',      tags: ['Flexbox', 'Grid', 'RWD'],           count: 55, soon: true },
  { href: '#', week: 'Week 3', title: 'JavaScript Core',    subject: 'Web',      tags: ['Closures', 'Async', 'DOM'],         count: 60, soon: true },
  { href: '#', week: 'Week 1', title: 'CLI Basics',          subject: 'Linux',    tags: ['Commands', 'Pipes', 'I/O'],         count: 50, soon: true },
  { href: '#', week: 'Week 2', title: 'Permissions & Users', subject: 'Linux',    tags: ['chmod', 'Users', 'sudo'],           count: 45, soon: true },
  { href: '#', week: 'Week 3', title: 'Shell Scripting',     subject: 'Linux',    tags: ['Bash', 'Loops', 'Functions'],       count: 55, soon: true },
  { href: '#', week: 'Week 1', title: 'SQL Foundations',     subject: 'Database', tags: ['SELECT', 'JOIN', 'GROUP BY'],       count: 55, soon: true },
  { href: '#', week: 'Week 2', title: 'Normalization',       subject: 'Database', tags: ['1NF', '2NF', '3NF'],               count: 50, soon: true },
  { href: '#', week: 'Week 3', title: 'Transactions & Indexes', subject: 'Database', tags: ['ACID', 'Indexes', 'Tuning'],   count: 50, soon: true },
];

// ── Colour map for search result badges ────────────────────────────────
const SUBJECT_STYLES = {
  Java:     { bg: 'var(--java-light)',     color: 'var(--java-color)' },
  Web:      { bg: 'var(--web-light)',      color: 'var(--web-color)' },
  Linux:    { bg: 'var(--linux-light)',    color: 'var(--linux-color)' },
  Database: { bg: 'var(--database-light)', color: 'var(--database-color)' },
};

// ═══════════════════════════════════════════════════════════════════════
// 1. HAMBURGER / MOBILE DRAWER
// ═══════════════════════════════════════════════════════════════════════
(function initHamburger() {
  const btn    = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  function setOpen(open) {
    btn.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => setOpen(!btn.classList.contains('open')));

  // Close on any drawer link click
  drawer.querySelectorAll('.mobile-nav-link').forEach(link =>
    link.addEventListener('click', () => setOpen(false))
  );

  // Close on outside click
  document.addEventListener('click', e => {
    if (btn.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !btn.contains(e.target)) {
      setOpen(false);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.classList.contains('open')) setOpen(false);
  });
})();

// ═══════════════════════════════════════════════════════════════════════
// 2. SEARCH OVERLAY
// ═══════════════════════════════════════════════════════════════════════
(function initSearch() {
  const overlay   = document.getElementById('search-overlay');
  const input     = document.getElementById('search-input');
  const resultsList = document.getElementById('search-results');
  const emptyMsg  = document.getElementById('search-empty');
  const openBtn   = document.querySelector('.nav-search-btn');
  const closeBtn  = document.getElementById('search-close');
  if (!overlay || !input) return;

  function setOpen(open) {
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', !open);
    if (open) {
      input.value = '';
      renderResults('');
      requestAnimationFrame(() => input.focus());
    }
  }

  openBtn && openBtn.addEventListener('click', () => setOpen(true));
  closeBtn && closeBtn.addEventListener('click', () => setOpen(false));

  overlay.addEventListener('click', e => {
    if (e.target === overlay) setOpen(false);
  });

  document.addEventListener('keydown', e => {
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
        (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === 'Escape') setOpen(false);
  });

  // Live search
  input.addEventListener('input', () => renderResults(input.value.trim()));

  function renderResults(query) {
    resultsList.innerHTML = '';
    const q = query.toLowerCase();

    if (!q) {
      emptyMsg.style.display = 'block';
      resultsList.style.display = 'none';
      return;
    }

    const matches = QUIZ_CATALOGUE.filter(item =>
      !item.soon && (
        item.title.toLowerCase().includes(q)   ||
        item.subject.toLowerCase().includes(q) ||
        item.week.toLowerCase().includes(q)    ||
        item.tags.some(t => t.toLowerCase().includes(q))
      )
    );

    emptyMsg.style.display = matches.length ? 'none' : 'block';
    resultsList.style.display = matches.length ? 'block' : 'none';

    if (!matches.length) {
      emptyMsg.textContent = `No quizzes found for "${query}"`;
      return;
    }

    emptyMsg.textContent = 'Type to search across all quizzes';

    matches.forEach(item => {
      const style = SUBJECT_STYLES[item.subject] || {};
      const li = document.createElement('li');
      li.className = 'search-result-item';
      li.innerHTML = `
        <span class="search-result-badge" style="background:${style.bg};color:${style.color}">
          ${item.subject}
        </span>
        <div class="search-result-text">
          <strong>${item.week} · ${item.title}</strong>
          <span>${item.count} questions · ${item.tags.join(', ')}</span>
        </div>
      `;
      li.addEventListener('click', () => { window.location.href = item.href; });
      li.addEventListener('keydown', e => { if (e.key === 'Enter') window.location.href = item.href; });
      li.tabIndex = 0;
      resultsList.appendChild(li);
    });
  }

  // Keyboard navigation inside results
  resultsList.addEventListener('keydown', e => {
    const items = [...resultsList.querySelectorAll('.search-result-item')];
    const idx   = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      (items[idx + 1] || items[0])?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      (items[idx - 1] || items[items.length - 1])?.focus();
    }
  });
})();

// ═══════════════════════════════════════════════════════════════════════
// 3. ACTIVE NAV LINK — highlight based on scroll position
// ═══════════════════════════════════════════════════════════════════════
(function initActiveNav() {
  const sections  = document.querySelectorAll('.subject-section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!sections.length) return;

  const NAV_H = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '64'
  );

  function update() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - NAV_H - 40) {
        current = sec.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isHome = href === '/';
      const isSection = href === `#${current}`;
      link.classList.toggle('active',
        current ? isSection : isHome
      );
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ═══════════════════════════════════════════════════════════════════════
// 4. BACK TO TOP BUTTON
// ═══════════════════════════════════════════════════════════════════════
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ═══════════════════════════════════════════════════════════════════════
// 5. QUIZ CARD KEYBOARD ACCESSIBILITY
//    Cards are <a> tags so Enter works natively; add hover lift on focus
// ═══════════════════════════════════════════════════════════════════════
(function initCardA11y() {
  document.querySelectorAll('.quiz-card:not(.quiz-card--soon)').forEach(card => {
    // Already an <a> — nothing extra needed except visual focus style
    card.addEventListener('mouseenter', () => card.setAttribute('data-hovered', ''));
    card.addEventListener('mouseleave', () => card.removeAttribute('data-hovered'));
  });
})();

// ═══════════════════════════════════════════════════════════════════════
// 6. INTERSECTION OBSERVER — staggered card entrance animation
// ═══════════════════════════════════════════════════════════════════════
(function initCardAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.quiz-card');
  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(18px)';
    c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card  = entry.target;
      const cards = [...card.parentElement.children];
      const delay = cards.indexOf(card) * 0.07;
      setTimeout(() => {
        card.style.opacity  = card.classList.contains('quiz-card--soon') ? '0.65' : '1';
        card.style.transform = 'translateY(0)';
      }, delay * 1000);
      io.unobserve(card);
    });
  }, { threshold: 0.1 });

  cards.forEach(c => io.observe(c));
})();
