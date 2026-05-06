// data/questions/web-javascript-async-programming-mastery.js

module.exports = 
[
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'In an online multiplayer game, you need to update the countdown timer every second while also handling player movements that occur at any time. What JavaScript feature enables this simultaneous behavior?',
    options: [
      'Synchronous execution with while loops',
      'setInterval() for timers and event listeners for movements',
      'Promise.all() for all game state updates',
      'Blocking I/O operations for game logic'
    ],
    correctOption: 1,
    explanation: "setInterval() handles the continuous countdown timer updates (every second), while event listeners handle player movements that can occur at any time. This combination keeps the game responsive and handles both time-based and event-based updates without blocking. Synchronous loops would freeze the game, Promise.all() isn't designed for continuous UI updates, and blocking I/O would make the game unresponsive."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a cooking timer app where users can set multiple timers that count down simultaneously. What's the best way to implement this without blocking the UI?",
    options: [
      'Using synchronous setTimeout() loops',
      'Multiple setInterval() calls, one for each timer',
      'A single async function with await statements',
      'Chaining Promises with setTimeout()'
    ],
    correctOption: 1,
    explanation: "Multiple setInterval() calls are ideal for cooking timers as each timer runs independently on its own schedule. This allows the app to manage multiple countdowns simultaneously without blocking the UI. Synchronous approaches would freeze the interface, async/await isn't suitable for continuous updates, and Promise chains would be overly complex for simple timing operations."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a public transportation app, bus arrival times update every 30 seconds from the server, while the current time display updates every second. What's the correct implementation?",
    options: [
      'Event-driven fetch() for arrivals, setInterval() for clock display',
      'Using Promise.all() to update both simultaneously',
      'A single async function polling the server continuously',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: 'Event-driven fetch() (via WebSocket or Server-Sent Events) handles the real-time bus arrival updates, while setInterval() manages the every-second clock display. This provides immediate updates when data arrives and smooth clock rendering. Promise.all() would parallelize requests rather than sequence them appropriately, and blocking code would freeze the UI.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What happens when you call setTimeout() with a delay that's shorter than the minimum browser timeout (typically 4ms)?",
    options: [
      'The delay is clamped to the minimum value (4ms)',
      'The timeout throws an error',
      'The timeout executes immediately',
      'The timeout is ignored'
    ],
    correctOption: 0,
    explanation: "Browsers clamp setTimeout() delays to a minimum value (typically 4ms) to prevent excessive timer callbacks from overloading the system. This clamping prevents tight loops that could freeze the browser. The timeout doesn't throw errors, execute immediately, or get ignored - it simply uses the minimum allowed delay."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're implementing a fitness app that tracks steps every second and heart rate every 5 seconds. What's the most efficient approach?",
    options: [
      'Two separate setInterval() calls with different delays',
      'Using Promise.all() to update both simultaneously',
      'A single async function with await statements',
      'Chaining setTimeout() calls with callbacks'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls are most efficient - one for the every-second step tracking and another for the every-5-second heart rate updates. This keeps the update logic clean and prevents conflicts between different update frequencies. Promise.all() would parallelize requests rather than maintain different schedules, and the other options are inappropriate for continuous UI updates.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'In a video streaming app, the progress bar should update every 250ms while recommendations load in the background every 30 seconds. Which approach handles both requirements?',
    options: [
      'setInterval() for progress, setInterval() for recommendations',
      'Using Promise.all() for both updates',
      'A single async function with await for recommendations',
      'Chaining setTimeout() calls with delays'
    ],
    correctOption: 0,
    explanation: "Two separate setInterval() calls handle both requirements efficiently - one for the smooth 250ms progress bar updates and another for the 30-second recommendation loading. This separation keeps the UI responsive while handling both frequent and periodic updates. Promise.all() doesn't manage different update schedules well."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between synchronous callbacks and asynchronous callbacks in JavaScript?",
    options: [
      'Synchronous callbacks run immediately in the current execution flow, asynchronous callbacks are scheduled to run later via the event loop',
      'Asynchronous callbacks always execute before synchronous ones',
      'Synchronous callbacks can only use Promises',
      'Asynchronous callbacks block the main thread'
    ],
    correctOption: 0,
    explanation: "Synchronous callbacks execute immediately as part of the current code flow, blocking further execution until they complete. Asynchronous callbacks are scheduled to run later via the event loop's task queue without blocking the main thread. This enables non-blocking I/O operations and responsive UIs. The other options are incorrect - async callbacks don't always run first, and async code doesn't block the main thread."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a messaging app where typing indicators should appear for 3 seconds after the last keystroke. What JavaScript pattern prevents the indicator from flickering during rapid typing?",
    options: [
      'Debouncing with setTimeout() and clearTimeout()',
      'Chaining Promises with setTimeout()',
      'Using async/await in event handlers',
      'Nested setInterval() calls'
    ],
    correctOption: 0,
    explanation: "Debouncing with setTimeout() and clearTimeout() is the solution. In the keystroke event handler, you clear any existing timeout and set a new one for 3 seconds. If another keystroke occurs before the timeout completes, the previous timeout is cleared, preventing flickering. This pattern ensures the indicator only appears after a pause in typing. Promises and async/await aren't designed for this UI behavior."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a banking app, you need to check for new transactions every 10 seconds while also showing account balance updates every second. What's the correct implementation?",
    options: [
      'Two separate setInterval() calls with different delays',
      'Using Promise.all() to check both simultaneously',
      'A single async function with await for transaction checks',
      'Blocking synchronous code for balance updates'
    ],
    correctOption: 0,
    explanation: "Two separate setInterval() calls are correct - one for the 10-second transaction checks and another for the every-second balance updates. This keeps the update logic clean and prevents conflicts between different update frequencies. The banking context requires both immediate feedback (balance updates) and periodic checks (transactions). Promise.all() doesn't handle different schedules appropriately."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you call clearTimeout() on a setTimeout() that has already executed?',
    options: [
      'The function has no effect - timeouts that have executed cannot be cleared',
      'The timeout throws an error',
      'The timeout executes again immediately',
      'The timeout is converted to setInterval()'
    ],
    correctOption: 0,
    explanation: "clearTimeout() has no effect on timeouts that have already executed because they've already been removed from the task queue. The function only prevents scheduled timeouts from executing - it doesn't affect already-completed timeouts. This is why it's safe to call clearTimeout() even if you're unsure whether the timeout has executed."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're creating a news ticker that scrolls text continuously across the screen. What JavaScript feature enables smooth animation without performance issues?",
    options: [
      'requestAnimationFrame() for position updates',
      'setInterval() with small delays',
      'Chained setTimeout() calls',
      'Async/await in a loop'
    ],
    correctOption: 0,
    explanation: "requestAnimationFrame() is ideal for smooth scrolling as it synchronizes position updates with the browser's repaint cycle (typically 60fps). This creates smooth animations that don't cause layout thrashing or performance issues. setInterval() would cause janky scrolling, and Promises/async/await aren't designed for continuous UI updates."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a game with falling blocks (like Tetris), what's the best way to implement the game loop that moves blocks down every 500ms?",
    options: [
      'setInterval() with 500ms delay',
      'setTimeout() in a recursive function',
      'Promise chains with setTimeout()',
      'Async/await in a while loop'
    ],
    correctOption: 0,
    explanation: "setInterval() with a 500ms delay is perfect for game loops as it handles continuous updates at a consistent interval. This creates smooth gameplay where blocks move down predictably every half-second. Recursive setTimeout() would be less efficient, and Promises/async/await aren't designed for game loops."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between setTimeout() and Promise-based timing in JavaScript?",
    options: [
      'setTimeout() callbacks go into the macrotask queue, Promise callbacks go into the microtask queue (higher priority)',
      'Promise-based timing is always faster',
      'setTimeout() can only accept callbacks, Promises cannot be timed',
      'Promise-based timing blocks the main thread'
    ],
    correctOption: 0,
    explanation: 'setTimeout() callbacks are placed in the macrotask queue (timers queue), while Promise callbacks go into the microtask queue, which has higher priority and runs before the next render. This means Promise callbacks execute before setTimeout() callbacks, making them ideal for high-priority updates like user interactions. The other options are incorrect.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're implementing a fitness tracker that updates step count every second and shows heart rate data every 5 seconds. What's the best approach?",
    options: [
      'Two separate setInterval() calls with different delays',
      'Using Promise.all() to update both simultaneously',
      'A single async function polling continuously',
      'Blocking synchronous loops for both operations'
    ],
    correctOption: 0,
    explanation: "Two separate setInterval() calls are best - one for the every-second step count updates and another for the every-5-second heart rate updates. This keeps the update logic clean and prevents conflicts between different update frequencies. Promise.all() doesn't handle continuous updates on different schedules well."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you call setInterval() with a delay of 0 milliseconds?',
    options: [
      'The callback executes repeatedly as fast as possible, creating a tight loop',
      'The callback executes once after 0ms',
      'The interval throws an error',
      'The interval converts to setTimeout()'
    ],
    correctOption: 0,
    explanation: "With a 0ms delay, setInterval() creates a tight loop where the callback executes repeatedly as fast as the JavaScript engine can handle. This is essentially a busy loop that can freeze the UI and consume excessive CPU resources. It's rarely recommended unless you have specific optimization needs."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a social media app, new posts should appear instantly when they arrive, but the feed should auto-refresh every 30 seconds. What's the correct implementation?",
    options: [
      'Event-driven updates (WebSocket) for new posts, setInterval() for auto-refresh',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls for both operations'
    ],
    correctOption: 0,
    explanation: 'Event-driven updates (via WebSocket, Server-Sent Events, or long polling) handle immediate new post notifications, while setInterval() manages the 30-second auto-refresh. This provides real-time updates when available and periodic refresh as a fallback. Promise.all() would parallelize requests rather than sequence them appropriately.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main advantage of clearing timeouts and intervals when components unmount in Single Page Applications?",
    options: [
      'Prevents memory leaks and potential errors from accessing unmounted components',
      'Makes components render faster',
      'Prevents the need for event listeners',
      'Ensures components remain interactive'
    ],
    correctOption: 0,
    explanation: 'Clearing timeouts and intervals prevents memory leaks and potential errors. When components unmount, any running timers that reference the unmounted component will cause memory leaks. Additionally, trying to update the DOM or state of unmounted components can cause errors. Always clean up timers and event listeners on unmount.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a stock trading app that needs to show real-time price updates as they arrive while also displaying the current time every second. What's the correct approach?",
    options: [
      'Event-driven updates (WebSocket) for prices, setInterval() for time display',
      'Using Promise.all() to run both operations',
      'A single async function polling for prices',
      'Blocking synchronous code for both updates'
    ],
    correctOption: 0,
    explanation: 'Event-driven updates (via WebSocket or Server-Sent Events) handle real-time price updates immediately as they arrive, while setInterval() manages the every-second time display. This provides both immediate data updates and smooth clock rendering without blocking the UI.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between microtasks (Promise callbacks) and macrotasks (setTimeout callbacks) in terms of execution priority?",
    options: [
      'Microtasks execute before the next render, macrotasks execute after all microtasks and current synchronous code',
      'Macrotasks always run first in any situation',
      'Microtasks are always slower',
      'They have the same execution priority'
    ],
    correctOption: 0,
    explanation: 'Microtasks (Promise callbacks, queueMicrotask) execute before the next browser repaint, while macrotasks (setTimeout, setInterval, I/O, UI rendering) execute after all microtasks and the current synchronous code complete. This enables high-priority updates (like user interactions) to happen before rendering, creating a responsive user experience.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a music streaming app, you want the progress bar to update every 100ms while also showing recommendations every 2 minutes. What's the correct implementation?",
    options: [
      'setInterval() for progress updates (100ms), setInterval() for recommendations (2min)',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with different delays'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls handle both requirements efficiently - one for the smooth 100ms progress bar updates and another for the 2-minute recommendation updates. This separation ensures both frequent UI updates and periodic background processing without conflicts.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you nest setTimeout() calls with increasing delays?',
    options: [
      'Each nested timeout executes after the previous one completes, creating a chain of delays',
      'All timeouts execute simultaneously',
      'The innermost timeout throws an error',
      'The delays cancel each other out'
    ],
    correctOption: 0,
    explanation: "Nested setTimeout() calls with increasing delays create a chain where each timeout executes after the previous one completes. This is useful for creating sequential delays or building complex timing sequences without blocking the main thread. Each timeout's delay is relative to when it was scheduled."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're implementing a calendar app that shows upcoming events every morning at 8 AM and updates the current date display every second. What's the correct approach?",
    options: [
      'setInterval() for date display (1s), conditional logic in setInterval() callback for 8 AM events',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with complex scheduling'
    ],
    correctOption: 0,
    explanation: "A single setInterval() call handles both requirements - the every-second date display updates and conditional logic inside the callback checks if it's 8 AM for event notifications. This keeps both updates in a single timer for simplicity and efficiency. The other options are either too complex or inappropriate."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main benefit of using requestAnimationFrame() instead of setTimeout() for animations?",
    options: [
      'Synchronizes with browser refresh rate for optimal performance and battery efficiency',
      'Makes animations run automatically without JavaScript',
      'Prevents the need for CSS animations entirely',
      'Ensures animations complete in exactly 60 frames'
    ],
    correctOption: 0,
    explanation: "requestAnimationFrame() synchronizes animation updates with the browser's refresh rate (typically 60fps) for optimal performance and battery efficiency. It aligns animation updates with the browser's repaint cycle, preventing unnecessary repaints and creating smooth animations that don't waste CPU/GPU resources."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a language learning app, flashcards should appear every 5 seconds but correct answers should be highlighted for 2 seconds after user input. What's the correct implementation?",
    options: [
      'setInterval() for flashcard sequence (5s), setTimeout() for answer highlighting (2s)',
      'Using Promise.all() for both operations',
      'A single async function with await statements',
      'Chaining setTimeout() calls with callbacks'
    ],
    correctOption: 0,
    explanation: 'The correct approach uses setInterval() for the every-5-second flashcard sequence combined with setTimeout() for the 2-second answer highlighting. This separates the continuous flashcard progression from the brief answer feedback, creating a clean user experience where flashcards progress automatically while user interactions get immediate visual feedback.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between synchronous and asynchronous JavaScript execution?",
    options: [
      'Synchronous code runs line-by-line blocking execution, asynchronous code runs in background without blocking main thread',
      'Synchronous code is always faster',
      'Asynchronous code runs only in web workers',
      'Synchronous code can only use callbacks'
    ],
    correctOption: 0,
    explanation: 'Synchronous code runs line-by-line, blocking further execution until each operation completes, while asynchronous code runs in the background via the event loop/task queue without blocking the main thread. This enables non-blocking I/O operations, responsive UIs, and handling of long-running tasks without freezing the application.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're creating a video conferencing app that needs to check microphone permissions every 30 seconds while also updating participant video thumbnails every second. What's the best approach?",
    options: [
      'Two separate setInterval() calls with different delays',
      'Using Promise.all() to run both checks',
      'A single async function with await statements',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls are best - one for the 30-second microphone permission checks and another for the every-second video thumbnail updates. This keeps the update logic clean and prevents conflicts between different update frequencies, which is crucial for maintaining call quality while displaying smooth video feeds.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you call setTimeout() with a negative delay?',
    options: [
      'The delay is treated as 0, executing on the next event loop cycle',
      'The timeout throws an error',
      'The timeout executes immediately but synchronously',
      'The timeout is ignored'
    ],
    correctOption: 0,
    explanation: "With a negative delay, the timeout's delay is treated as 0, causing the callback to execute on the next event loop cycle after the current synchronous code completes. This is equivalent to setTimeout(callback, 0). Negative delays are clamped to 0 by browsers to prevent invalid timing values."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a weather dashboard, you need to fetch current temperature immediately, 5-day forecast every 10 minutes, and hourly breakdown every hour. What's the correct implementation?",
    options: [
      'Immediate fetch() for temperature, setTimeout() for 5-day (10min), setTimeout() for hourly (1hr)',
      'Using Promise.all() to fetch all data simultaneously',
      'A single async function polling continuously',
      'Blocking synchronous code for all operations'
    ],
    correctOption: 0,
    explanation: 'The correct approach uses immediate fetch() for the most important current temperature (highest priority), followed by setTimeout() calls with appropriate delays for the 5-day forecast (10 minutes) and hourly breakdown (1 hour). This prioritizes the most critical data while progressively loading supplementary information, creating an optimal user experience.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main advantage of using setTimeout() with 0ms delay in event handlers?",
    options: [
      'Breaks up long synchronous operations to keep UI responsive',
      'Makes event handlers execute faster',
      'Prevents event propagation',
      'Ensures events complete before handlers finish'
    ],
    correctOption: 0,
    explanation: 'The main advantage is breaking up long synchronous operations to keep the UI responsive. By using setTimeout(callback, 0) in event handlers, you allow the browser to render any pending UI changes and handle other events before the callback executes. This prevents UI freezing during complex event processing and creates a smoother user experience.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a traffic monitoring system that needs to update traffic conditions every 15 seconds and show real-time accident alerts as they occur. What's the correct implementation?",
    options: [
      'setInterval() for conditions (15s), event-driven updates for accidents',
      'Using Promise.all() for both updates',
      'A single async function polling continuously',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: 'The correct approach uses setInterval() for the 15-second traffic condition updates combined with event-driven updates (via WebSocket or similar) for real-time accident alerts. This provides both periodic data refresh and immediate alert notifications when accidents occur, which is crucial for traffic safety applications.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between callbacks and Promises in JavaScript?",
    options: [
      'Callbacks are functions passed as arguments, Promises are objects representing future values with built-in error handling',
      'Promises are always faster than callbacks',
      'Callbacks can only handle synchronous operations',
      'Promises block the main thread'
    ],
    correctOption: 0,
    explanation: 'Callbacks are functions passed as arguments to other functions for asynchronous operations, while Promises are objects representing future values that can be in pending, fulfilled, or rejected states with built-in error handling via .catch(). Promises provide better readability, error handling, and chaining capabilities compared to nested callbacks.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a fitness app, you want to track steps every second but also show motivational quotes every 30 seconds. What's the correct implementation?",
    options: [
      'setInterval() for step tracking (1s), setInterval() for quotes (30s)',
      'Using Promise.all() to run both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with different delays'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls handle both requirements efficiently - one for the every-second step tracking updates and another for the every-30-second motivational quotes. This separation ensures the app remains responsive while providing both frequent activity tracking and periodic motivational feedback to users.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What happens when you don't clear a setInterval() when a component unmounts in a Single Page Application?",
    options: [
      'The interval continues running, causing memory leaks and potential errors',
      'The interval automatically stops',
      'The interval throws an error',
      'The interval converts to a Promise'
    ],
    correctOption: 0,
    explanation: "If you don't clear a setInterval() when a component unmounts, the interval continues running in the background. This causes memory leaks as the callback references the unmounted component, and can cause errors when trying to update the DOM or state of unmounted components. Always clear intervals and event listeners on unmount to prevent these issues."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're implementing a countdown to New Year's Eve that updates every second. What JavaScript feature should you use?",
    options: [
      'setInterval()',
      'setTimeout() in a loop',
      'Promise chains with setTimeout()',
      'Async/await in a while loop'
    ],
    correctOption: 0,
    explanation: 'setInterval() is ideal for countdown timers that need to update continuously at fixed intervals (every second). It creates a timer that triggers the update function repeatedly. This is much cleaner than recursive setTimeout() approaches and provides consistent timing for countdown displays.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main benefit of using clearTimeout() and clearInterval()?",
    options: [
      'Prevents memory leaks and unnecessary resource consumption by canceling scheduled timers',
      'Makes timers execute faster',
      'Prevents the need for event listeners',
      'Ensures timers complete their execution'
    ],
    correctOption: 0,
    explanation: 'The main benefit is preventing memory leaks and unnecessary resource consumption. When timers are no longer needed (e.g., component unmounts, user navigates away), clearing them stops the scheduled callbacks from executing. This prevents memory leaks from callbacks referencing unmounted components and saves CPU resources by stopping unnecessary timer execution.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a gaming leaderboard, you need to fetch new scores every 30 seconds and highlight the top player's name every 5 seconds. What's the best approach?",
    options: [
      'Two separate setInterval() calls with different delays',
      'Using Promise.all() to run both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with complex logic'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls are best - one for the 30-second score updates and another for the 5-second top player highlighting. This keeps the update logic clean and prevents conflicts between different update frequencies, which is important for maintaining a responsive gaming experience while keeping the leaderboard fresh.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between setTimeout() and setInterval() in terms of execution?",
    options: [
      'setTimeout() runs once after a delay, setInterval() runs repeatedly at intervals',
      'setInterval() always runs faster',
      'setTimeout() can only accept callbacks, setInterval() cannot',
      'setInterval() blocks the main thread'
    ],
    correctOption: 0,
    explanation: 'setTimeout() executes a callback once after a specified delay, while setInterval() repeatedly executes a callback at fixed time intervals. This fundamental difference makes them suited for different use cases - timeouts for delayed single actions (like delayed UI feedback), intervals for continuous updates (like timers or progress bars).'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a restaurant ordering system where after submitting an order you want to show a confirmation message, then enable the 'Order Again' button after 3 seconds. What's the correct implementation?",
    options: [
      'setTimeout() for button enable (3s), immediate alert for confirmation',
      'Using setInterval() for both tasks',
      'Chaining Promises with setTimeout()',
      'Async/await in the event handler'
    ],
    correctOption: 0,
    explanation: 'setTimeout() is perfect for the delayed button enable. The confirmation alert appears immediately via the event handler, then setTimeout() schedules the button enable for 3 seconds later. This keeps the UI responsive while handling the delayed action cleanly. The other options are either too complex or inappropriate for this simple timing scenario.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What happens when you call clearInterval() on an interval that's currently running?",
    options: [
      "The interval stops executing and won't run again",
      'The interval completes its current iteration then stops',
      'The interval throws an error',
      'The interval converts to setTimeout()'
    ],
    correctOption: 0,
    explanation: "When you call clearInterval(), the interval stops executing immediately and won't run again. The callback won't execute for its current iteration if cleared at the right moment. This is useful for stopping continuous updates when they're no longer needed, such as when a user navigates away from a page or a component unmounts."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a news aggregator app, you need to fetch breaking news headlines every minute and update trending topics every 15 seconds. What's the most efficient implementation?",
    options: [
      'Two separate setInterval() calls with different durations',
      'Using Promise.all() to fetch both simultaneously',
      'A single async function with await for each API call',
      'Chaining setTimeout() calls with callback *****'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls are most efficient and maintainable - one fetches breaking news every minute, the other updates trending every 15 seconds. This keeps the update logic separate and prevents one update from affecting the other. Promise.all() would parallelize requests rather than maintain different update schedules appropriately.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main advantage of using setInterval() for periodic tasks?",
    options: [
      'Ensures tasks execute at regular intervals regardless of how long each execution takes',
      'Makes tasks execute faster automatically',
      'Prevents memory leaks',
      'Ensures all tasks complete before the next interval'
    ],
    correctOption: 0,
    explanation: 'The main advantage is that setInterval() ensures tasks execute at regular intervals regardless of how long each execution takes. Even if a task takes 2 seconds to complete, the next interval will still trigger after the specified delay from the start of the previous interval. This creates consistent timing for periodic updates like clocks, progress bars, or data polling.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're creating a file upload progress bar that should update every 500ms while the file is uploading. What JavaScript feature enables smooth progress updates?",
    options: [
      'setInterval() with event listeners for upload progress events',
      'Chained Promises',
      'Async/await in a loop',
      'Promise.all() with fetch()'
    ],
    correctOption: 0,
    explanation: 'setInterval() combined with event listeners for upload progress events enables smooth progress bar updates. The progress event listener updates the bar in real-time as data transfers, while setInterval() ensures the display refreshes every 500ms for smooth animation. This combination provides both immediate feedback and smooth visual updates during file uploads.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between microtasks and macrotasks in the JavaScript event loop?",
    options: [
      'Microtasks execute before the next render, macrotasks execute after all microtasks and current synchronous code',
      'Macrotasks always run first in any situation',
      'Microtasks are always slower than macrotasks',
      'They have identical execution priorities'
    ],
    correctOption: 0,
    explanation: 'Microtasks (Promise callbacks, queueMicrotask, MutationObserver) execute before the next browser repaint, while macrotasks (setTimeout, setInterval, I/O, UI rendering, DOM events) execute after all microtasks and the current synchronous code complete. This priority system ensures high-priority updates (like user interactions) happen before rendering, creating a responsive user experience.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a banking app, what's the correct pattern for handling an API call that might fail (like network issues) when fetching account balance?",
    options: [
      'Using Promises with .catch() for error handling',
      'Synchronous try/catch without Promises',
      'Callback with manual error checking',
      'Blocking the main thread until response'
    ],
    correctOption: 0,
    explanation: 'Using Promises with .catch() is the correct pattern. Promises provide built-in error handling where .catch() catches any rejections from the API call (network errors, server errors, invalid responses). This is cleaner than manual error checking in callbacks and more robust than synchronous try/catch for asynchronous operations. The other options are either blocking or lack proper error handling.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a music player where the progress bar updates every 100ms and album art changes every 5 seconds. What's the correct approach?",
    options: [
      'setInterval() for progress (100ms), setInterval() for album art (5s)',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with different delays'
    ],
    correctOption: 0,
    explanation: "Two separate setInterval() calls handle both requirements - one for the smooth 100ms progress bar updates and another for the 5-second album art changes. This keeps the music player responsive while providing both frequent UI feedback (progress) and periodic aesthetic updates (album art). Promise.all() doesn't handle different update frequencies appropriately."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you call setTimeout() immediately followed by clearTimeout() on the same timeout?',
    options: [
      "The timeout is canceled and won't execute",
      'The timeout executes immediately',
      'The timeout throws an error',
      'The timeout executes after the clearTimeout() call'
    ],
    correctOption: 0,
    explanation: "When you call clearTimeout() immediately after setTimeout(), the scheduled timeout is canceled and won't execute. There's a race condition where the timeout might execute before clearTimeout() completes, but in practice, clearTimeout() successfully cancels the timeout in most browsers. This pattern is useful for canceling delayed actions when conditions change."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a social media app, you want to show new posts instantly when they arrive from friends while also showing general trending posts that update every 60 seconds. What's the correct implementation?",
    options: [
      'Event-driven updates for friend posts, setInterval() for trending posts',
      'Using Promise.all() for both updates',
      'A single async function polling continuously',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: 'Event-driven updates (via WebSocket, Server-Sent Events, or long polling) handle the real-time friend posts immediately as they arrive, while setInterval() manages the 60-second trending posts updates. This provides both immediate social updates and periodic content refresh without blocking the UI or overwhelming the server with too many requests.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between async functions and regular functions in JavaScript?",
    options: [
      'Async functions always return Promises and can use await, regular functions return values directly',
      "Async functions block the main thread, regular functions don't",
      'Regular functions can only use callbacks, async functions cannot',
      'Async functions execute synchronously, regular functions execute asynchronously'
    ],
    correctOption: 0,
    explanation: 'Async functions always return Promises and can use the await keyword to pause execution until a Promise resolves. Regular functions return values directly. Async/await makes asynchronous code look and behave more like synchronous code, improving readability while maintaining non-blocking behavior through Promises under the hood.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're creating a game with a health bar that depletes over time at different rates. What JavaScript feature enables smooth animation without blocking the game loop?",
    options: [
      'requestAnimationFrame() for health bar updates combined with setInterval() for timing',
      'setInterval() with large delays',
      'Chained Promises with setTimeout()',
      'Async/await in a loop'
    ],
    correctOption: 0,
    explanation: "requestAnimationFrame() is ideal for smooth health bar animation as it synchronizes updates with the browser's repaint cycle. Combined with setInterval() for the timing logic (when to decrement health), this creates smooth animations that don't cause performance issues. The other options are either too simple or inappropriate for game UI updates."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main advantage of using async/await over Promise chains for complex asynchronous operations?",
    options: [
      'Improved readability by reducing nesting and making code look synchronous',
      'Faster execution speed',
      'Less memory usage',
      'Automatic error handling'
    ],
    correctOption: 0,
    explanation: "The main advantage of async/await is improved readability by reducing nested .then() calls and making asynchronous code look more like synchronous code. This reduces callback ***** and makes complex async operations easier to understand and maintain. Under the hood, async/await is still built on Promises, so it doesn't provide faster execution or less memory usage."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a language learning app, you want to show flashcards every 5 seconds but also show vocabulary definitions for 3 seconds when users click on a card. What's the correct implementation?",
    options: [
      'setInterval() for flashcard sequence (5s), event listener for card clicks with setTimeout() for definition display (3s)',
      'Using Promise.all() for both operations',
      'A single async function with await statements',
      'Chaining setTimeout() calls with callbacks'
    ],
    correctOption: 0,
    explanation: 'The correct approach uses setInterval() for the every-5-second flashcard sequence combined with event listeners for user clicks and setTimeout() for the 3-second definition display. This separates the automatic progression from user-triggered interactions, creating an engaging learning experience where flashcards progress automatically while user interactions get immediate, timed feedback.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: 'What happens when you call setInterval() with a very long delay (e.g., 24 hours) for a daily task?',
    options: [
      'The interval continues running in the background, consuming minimal resources',
      'The interval throws an error after a certain time',
      'The interval automatically converts to setTimeout()',
      'The interval stops executing after 24 hours'
    ],
    correctOption: 0,
    explanation: "setInterval() with a 24-hour delay continues running in the background, consuming minimal system resources. The browser's timer implementation is optimized to handle long delays efficiently without significant resource usage. This makes setInterval() suitable for daily tasks like sending notifications or updating data, though you should still clear it when no longer needed."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're building a fitness tracker that updates step count every second via device API and shows heart rate data every 5 seconds from a server. What's the correct implementation?",
    options: [
      'Event listener for step updates, setInterval() for heart rate polling',
      'Using Promise.all() for both updates',
      'A single async function polling continuously',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: 'Event listeners handle the real-time step count updates from the device API, while setInterval() manages the every-5-second heart rate data polling from the server. This combination provides both immediate device feedback and periodic server data updates without blocking the UI or requiring complex synchronization logic.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between .then() and .catch() methods on Promises?",
    options: [
      '.then() handles resolved Promises, .catch() handles rejected Promises',
      '.catch() executes before .then() always',
      '.then() can only accept callbacks, .catch() cannot',
      'They have identical functionality'
    ],
    correctOption: 0,
    explanation: '.then() is used to specify what happens when a Promise is fulfilled (resolved), while .catch() handles when a Promise is rejected (fails). This separation of success and error handling makes Promises more readable and robust than callback-based error handling. Both methods are fundamental to working with Promises in JavaScript.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a video streaming app, the progress bar should update every 250ms while ads should display every 5 minutes. What's the correct approach?",
    options: [
      'setInterval() for progress (250ms), setInterval() for ads (5min)',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with delays'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls handle both requirements efficiently - one for the smooth 250ms progress bar updates and another for the 5-minute ad displays. This separation ensures the video remains watchable with frequent progress feedback while maintaining the business requirement of periodic ad placement without overwhelming users.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the main advantage of using the Fetch API over XMLHttpRequest for making HTTP requests?",
    options: [
      "Fetch provides a cleaner, Promise-based API that's easier to use and more modern",
      'Fetch is always faster than XMLHttpRequest',
      'Fetch blocks the main thread',
      'Fetch cannot handle JSON responses'
    ],
    correctOption: 0,
    explanation: "The main advantage of Fetch API is its cleaner, Promise-based interface that's more modern and easier to use than the older XMLHttpRequest. Fetch returns Promises, supports async/await, and has a simpler syntax for handling responses. While performance is similar, the improved developer experience and consistency with modern JavaScript patterns make Fetch the preferred choice."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "You're implementing a calendar app that needs to show upcoming events every morning at 8 AM and also update the current date/time every second. What's the most efficient implementation?",
    options: [
      'setInterval() for date display (1s) with conditional logic in callback for 8 AM events',
      'Two separate setInterval() calls',
      'Using Promise.all() for both updates',
      'Blocking synchronous code for both operations'
    ],
    correctOption: 0,
    explanation: "A single setInterval() call handles both requirements efficiently - the every-second date display updates and conditional logic inside the callback checks if it's 8 AM for event notifications. This keeps both updates in a single timer, reducing resource usage compared to multiple intervals. The conditional logic inside the callback prevents unnecessary event fetching outside of 8 AM."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What happens when you call setTimeout() with a delay that's longer than the browser's maximum timer delay (typically 2147483647ms or ~24.8 days)?",
    options: [
      'The delay is clamped to the maximum value',
      'The timeout throws an error',
      'The timeout executes immediately',
      'The timeout is ignored'
    ],
    correctOption: 0,
    explanation: "Browsers clamp setTimeout() delays to a maximum value (typically 2147483647ms or ~24.8 days) to prevent excessively long timers from causing issues. This clamping prevents potential integer overflow issues and ensures timers remain manageable. The timeout doesn't throw errors, execute immediately, or get ignored - it simply uses the maximum allowed delay."
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "In a music streaming app, you want to show the current track's progress bar updating every 100ms while also showing trending songs every 2 minutes. What's the correct approach?",
    options: [
      'setInterval() for progress (100ms), setInterval() for trending (2min)',
      'Using Promise.all() for both updates',
      'A single async function with await statements',
      'Chaining setTimeout() calls with different delays'
    ],
    correctOption: 0,
    explanation: 'Two separate setInterval() calls handle both requirements - one for the smooth 100ms progress bar updates and another for the 2-minute trending songs display. This separation ensures the music player remains responsive with frequent progress feedback while periodically refreshing content recommendations without overwhelming the server.'
  },
  {
    quizTitle: 'JavaScript Async Programming Mastery',
    question: "What's the primary difference between synchronous callbacks and event loop callbacks in JavaScript?",
    options: [
      'Synchronous callbacks run immediately in current execution flow, event loop callbacks are scheduled for later via task queue',
      'Event loop callbacks always run before synchronous callbacks',
      'Synchronous callbacks cannot handle asynchronous operations',
      'They have identical execution timing'
    ],
    correctOption: 0,
    explanation: 'Synchronous callbacks execute immediately as part of the current code execution flow, blocking further execution until they complete. Event loop callbacks are scheduled to run later via the task queue without blocking the main thread. This enables asynchronous programming patterns that keep the UI responsive during long operations or I/O tasks.'
  }
]

;