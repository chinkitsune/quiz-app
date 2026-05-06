//data/questions/web-nodejs.js

module.exports = 
[
  {
    quizTitle: 'Node.js',
    category: 'Server-Side Web Programming',
    question: "A user visits a news website and sees today's headlines, while another user visiting the same URL at the same time sees different personalised articles. Which characteristic of server-side programming makes this possible?",
    options: [
      'Server-side pages are stored as static HTML files that the browser customises',
      'Server-side programs can provide different content depending on context — such as user preferences or real-time data',
      'The browser downloads and executes server code to generate personalised content',
      "CSS media queries adapt the page to each user's screen"
    ],
    correctOption: 1,
    explanation: 'A key purpose of server-side web programming is to <strong>provide different content depending on context</strong>. The same URL can return different HTML for different users, sessions, or data states. The server generates the page dynamically at request time — unlike static HTML, which is identical for every visitor.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Server-Side Web Programming',
    question: 'A developer is building a login page. They want to verify a username and password against a stored list. Why is this logic better placed on the server rather than in client-side JavaScript?',
    options: [
      'Client-side JavaScript runs faster, so it should handle all verification',
      'Server code cannot be viewed from the browser, keeping authentication logic and stored credentials hidden from users',
      'Browsers block all JavaScript that accesses stored data',
      'Server-side code is written in PHP, which is more secure than JavaScript by default'
    ],
    correctOption: 1,
    explanation: 'A major security advantage of server-side programming is that <strong>server code cannot be viewed from the browser</strong>. If you put authentication logic in client-side JavaScript, anyone can open DevTools and read or bypass it. Sensitive operations — verifying passwords, querying databases, processing payments — must live on the server where users cannot inspect the code.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Server-Side Web Programming',
    question: 'Which of the following is NOT listed as an example of a server-side web programming language or framework?',
    options: [ 'PHP', 'Ruby on Rails', 'React.js', 'ASP.NET' ],
    correctOption: 2,
    explanation: '<strong>React.js is a client-side (frontend) JavaScript library</strong> for building user interfaces in the browser. PHP, Ruby on Rails, and ASP.NET are all server-side technologies that execute on the web server. While Node.js brings JavaScript to the backend, React itself runs in the browser, not on the server (unless used with server-side rendering).'
  },
  {
    quizTitle: 'Node.js',
    category: 'Server-Side Web Programming',
    question: "A company's checkout page needs to send a confirmation email after a purchase. Why must this be handled server-side rather than in the browser?",
    options: [
      'Browsers cannot make network requests',
      'Email sending requires interfacing with an external email service — a backend operation the server handles securely with credentials the client should never have',
      'Client-side JavaScript cannot use async/await, which is required for email',
      'Email services only accept requests from PHP servers'
    ],
    correctOption: 1,
    explanation: 'Interfacing with <strong>external services like email, databases, or payment gateways</strong> is a core server-side responsibility. Email sending requires API keys and SMTP credentials that must never be exposed to the browser. The server holds these secrets, makes the external service call, and returns only the result to the client.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Server-Side Web Programming',
    question: 'Why does running heavy computation on the server rather than the client improve performance for web applications?',
    options: [
      'Servers always have fibre-optic connections, which makes computation faster',
      'Servers are typically more powerful machines, and computation can be done once and cached — avoiding duplicating the same work across every client device',
      'Client devices refuse to run JavaScript files larger than 1 MB',
      'Browsers sandbox all JavaScript to prevent CPU-intensive operations'
    ],
    correctOption: 1,
    explanation: "Two key backend performance principles apply: (1) <strong>Avoid duplicating computation</strong> — do it once on the server and cache the result rather than making every client redo the same work. (2) <strong>Use more powerful machines</strong> — servers can be scaled up with more CPU and RAM than a typical user's phone or laptop. This improves speed and user experience."
  },
  {
    quizTitle: 'Node.js',
    category: 'What is Node.js',
    question: 'Before Node.js existed, what was unique about JavaScript compared to languages like PHP or Python in the context of web development?',
    options: [
      'JavaScript was the only language that could connect to databases',
      'JavaScript could only run in web browsers — it had no way to run on a server',
      'JavaScript was the fastest language but lacked a package manager',
      'JavaScript was only supported by Chrome and no other browsers'
    ],
    correctOption: 1,
    explanation: 'Before Node.js, <strong>JavaScript was confined to the browser</strong>. Languages like PHP, Python, Ruby, and Java could run on servers natively. Node.js changed this by providing a JavaScript runtime environment that executes JavaScript outside the browser — on servers, in terminal scripts, and as CLI tools. This made JavaScript the only language usable in both frontend and backend.'
  },
  {
    quizTitle: 'Node.js',
    category: 'What is Node.js',
    question: "A developer's team already knows JavaScript well from frontend development. They now need to build a backend API. What is the strongest argument for choosing Node.js?",
    options: [
      'Node.js is the only backend technology that can connect to MongoDB',
      'Node.js allows the team to use the same language (JavaScript) for both frontend and backend — enabling code sharing, consistency, and a single learning context',
      'Node.js is faster than all other backend technologies for every workload',
      'Node.js automatically generates REST APIs from JavaScript classes'
    ],
    correctOption: 1,
    explanation: '<strong>JavaScript is the only language usable in both frontend and backend</strong>, and Node.js is what makes the backend side possible. A team proficient in JavaScript can build full-stack applications without switching languages, enabling <strong>code sharing, type sharing, library sharing, and team consistency</strong>. This reduces cognitive overhead and allows developers to contribute across the entire stack.'
  },
  {
    quizTitle: 'Node.js',
    category: 'What is Node.js',
    question: "Node.js is described as a 'JavaScript runtime environment written in C++'. What does 'runtime environment' mean in this context?",
    options: [
      'A development tool that converts JavaScript into C++ for faster execution',
      'A software environment that can interpret and execute JavaScript code — outside of a browser — and provides APIs for server-related tasks',
      'A web browser that also supports server-side scripting',
      'A database engine that stores JavaScript objects'
    ],
    correctOption: 1,
    explanation: 'A <strong>runtime environment</strong> is the infrastructure that makes it possible to execute code. Node.js provides: (1) a JavaScript interpreter (V8 engine) that can <strong>interpret and execute JavaScript</strong>, and (2) a set of JavaScript libraries (Node.js APIs) useful for server tasks like handling HTTP requests, reading files, and managing network connections — all outside the browser.'
  },
  {
    quizTitle: 'Node.js',
    category: 'What is Node.js',
    question: 'Who created Node.js and what was the inspiration for the project?',
    options: [
      'Brendan Eich, inspired by the limitations of PHP in 2005',
      'Ryan Dahl, inspired by the performance of the V8 JavaScript engine in Google Chrome in 2009',
      "Linus Torvalds, inspired by Linux's event-driven architecture in 2010",
      "Google engineers, inspired by Go's concurrency model in 2012"
    ],
    correctOption: 1,
    explanation: "<strong>Ryan Dahl started the Node.js project in 2009</strong> after being inspired by the performance of the <strong>V8 JavaScript engine</strong> in the Google Chrome browser. V8's speed in compiling and executing JavaScript made Dahl realize it could power efficient server-side applications. He built Node.js around V8, adding server-oriented APIs on top."
  },
  {
    quizTitle: 'Node.js',
    category: 'What is Node.js',
    question: "A developer tries to use document.querySelector('div') in a Node.js script. What happens?",
    options: [
      'It works normally — Node.js includes all browser APIs',
      'It throws a ReferenceError because document is not defined in Node.js — the DOM API only exists in browsers',
      'It returns null because there are no HTML elements in a Node.js context',
      'It works but returns a Node.js Buffer object instead of a DOM element'
    ],
    correctOption: 1,
    explanation: '<strong>Node.js does not have DOM APIs</strong> — those exist only in browsers. <code>document</code>, <code>window</code>, <code>fetch</code>, and similar browser globals are <em>not</em> available in Node.js. Instead, Node.js provides its own APIs: <code>http</code>, <code>fs</code>, <code>path</code>, etc. Trying to use <code>document.querySelector()</code> in Node.js throws a <code>ReferenceError: document is not defined</code>.'
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Node.js Architecture',
    question: 'Both Chrome (the browser) and Node.js use the V8 engine. What is different about what each environment adds on top of V8?',
    options: [
      'Chrome adds a database layer; Node.js adds a rendering engine',
      'Chrome adds DOM APIs for interacting with web pages; Node.js adds server APIs like http, fs, and path',
      'Chrome adds TypeScript support; Node.js adds Python interoperability',
      'They are identical — V8 alone provides everything both environments use'
    ],
    correctOption: 1,
    explanation: 'V8 is just the JavaScript execution engine — it only knows how to run JavaScript. <strong>Chrome wraps V8 with DOM APIs</strong> (libraries for interacting with HTML pages, like <code>document.querySelector()</code>). <strong>Node.js wraps V8 with server APIs</strong> like <code>http.createServer()</code>, <code>fs.readFile()</code>, and <code>path.join()</code>. V8 is the engine; the surrounding APIs define the environment.'
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Architecture',
    question: "Node.js is described as 'single-threaded' but capable of handling many simultaneous connections. How is this possible?",
    options: [
      'Node.js secretly spawns multiple threads behind the scenes for each request',
      'Node.js uses an event-driven, non-blocking I/O architecture — while waiting for slow operations (like disk reads), the single thread handles other requests',
      'Each incoming connection is queued and served one at a time, with fast response guaranteed by hardware',
      'Node.js uses WebAssembly to parallelize operations across CPU cores'
    ],
    correctOption: 1,
    explanation: 'Node.js uses a <strong>single thread</strong> combined with an <strong>event-driven, non-blocking I/O</strong> model. Instead of blocking the thread while waiting for a file to load or a database to respond, Node.js registers a callback and moves on to handle other requests. When the slow operation completes, the event loop picks up the callback and processes the result. This allows <strong>high scalability without multiple threads</strong>.'
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Architecture',
    question: "What is a key benefit of Node.js's non-blocking I/O model for a web API that frequently queries a database?",
    options: [
      'It eliminates the need for a database by caching all queries in RAM',
      'While waiting for a database query to return, the server can process other incoming requests — maximising throughput on a single thread',
      'Database queries run in parallel threads automatically',
      'Non-blocking I/O means database queries complete instantly without network latency'
    ],
    correctOption: 1,
    explanation: '<strong>Non-blocking I/O</strong> is ideal for I/O-heavy workloads like database queries. Instead of the server thread sitting idle waiting for a 200ms database response, it handles other incoming requests during that time. When the DB responds, the callback fires and completes that request. This makes Node.js very <strong>resource-efficient and responsive</strong> for APIs with many concurrent users.'
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Architecture',
    question: "The call stack, task queue, micro-task queue, and event loop are all components of JavaScript execution. What is the event loop's specific role?",
    options: [
      'It runs JavaScript code synchronously on multiple CPU cores',
      'It monitors the call stack and task queues — when the call stack is empty, it pulls the next task from the queue and places it on the call stack for execution',
      'It executes Promise callbacks at fixed 60fps intervals',
      'It prevents any code from running until all network requests are complete'
    ],
    correctOption: 1,
    explanation: 'The <strong>event loop</strong> is the coordinator of async execution. Its job: (1) check if the call stack is empty, (2) if so, pull the next pending task from the task queues and push it onto the call stack to be executed. It continuously loops, checking for work. <strong>The micro-task queue (Promises) has higher priority</strong> than the regular task queue (setTimeout, etc.), so Promises always run before the next task queue item.'
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Architecture',
    question: "A developer writes: setTimeout(() => console.log('A'), 0); console.log('B'); — What is logged and in what order?",
    options: [
      'A then B — setTimeout runs first because it has a 0ms delay',
      "B then A — setTimeout's callback goes to the task queue; B runs on the call stack first; A runs after the call stack clears",
      'Both A and B at the same time — they run in parallel',
      'An error — setTimeout cannot be called without a non-zero delay'
    ],
    correctOption: 1,
    explanation: "Even with a 0ms delay, <strong>setTimeout callbacks go to the task queue</strong>, not the call stack. The current synchronous code (<code>console.log('B')</code>) runs first on the call stack. Only after the call stack is completely empty does the event loop pull the setTimeout callback from the task queue and execute it. So output is always: <strong>B, then A</strong>. This illustrates why 'async' code always runs after synchronous code."
  },
  {
    quizTitle: 'Node.js',
    category: 'V8 Engine & Architecture',
    question: 'A developer has both a Promise callback and a setTimeout callback waiting to execute. The call stack becomes empty. Which runs first?',
    options: [
      'The setTimeout callback — it was registered first',
      'They run simultaneously in separate threads',
      'The Promise callback — micro-tasks (Promises) have higher priority than the task queue',
      'Whichever has the shorter delay wins'
    ],
    correctOption: 2,
    explanation: 'The <strong>micro-task queue (where Promise callbacks live) has higher priority than the task queue</strong> (where setTimeout callbacks go). When the call stack empties, the event loop drains the entire micro-task queue before taking even one item from the task queue. So Promise callbacks always run before setTimeout callbacks, regardless of registration order or delay time.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: "A developer writes: const fs = require('fs'); — What type of module is fs, and where does Node.js find it?",
    options: [
      'An npm module — Node.js downloads it from the internet each time',
      'A user-defined module — the developer must create a file named fs.js',
      'A core module — it is built into Node.js and does not need to be installed',
      'A file-based module — it looks for fs.js in the current directory'
    ],
    correctOption: 2,
    explanation: "<strong>Core modules</strong> like <code>fs</code>, <code>http</code>, <code>path</code>, <code>url</code>, and <code>os</code> are built directly into Node.js — no installation required. You access them with <code>require('moduleName')</code> using just the name (no path). They are maintained by the Node.js team and always available in any Node.js project without running <code>npm install</code>."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: 'A developer wants to import a helper file they wrote called utils.js located in the same folder. Which require() call is correct?',
    options: [
      "const utils = require('utils');",
      "const utils = require('./utils');",
      "const utils = require('node_modules/utils');",
      "const utils = require('/utils');"
    ],
    correctOption: 1,
    explanation: "File-based (user-defined) modules must use a <strong>relative path starting with ./ or ../</strong>. <code>require('./utils')</code> tells Node.js to look in the current directory. Using just <code>require('utils')</code> (without a path) makes Node.js search <code>node_modules</code> — it would fail or find an unrelated npm package. The <code>./</code> prefix is the essential signal that it's a local file, not a package."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: 'A developer needs to import a file one directory level up called config.js. Which require() path is correct?',
    options: [
      "require('up/config')",
      "require('./config')",
      "require('../config')",
      "require('/config')"
    ],
    correctOption: 2,
    explanation: "<strong>../</strong> navigates one directory level up from the current file's location. So <code>require('../config')</code> looks for config.js in the parent directory. <code>./config</code> looks in the current directory. <code>/config</code> would be an absolute path from the filesystem root (not the project root). Understanding relative vs absolute paths is essential for Node.js module imports."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: 'Which of the following correctly describes the three types of modules in Node.js?',
    options: [
      'Public modules, private modules, and protected modules',
      'Core modules (built-in), file-based modules (local files), and npm modules (third-party from the registry)',
      'Synchronous modules, asynchronous modules, and hybrid modules',
      'Frontend modules, backend modules, and isomorphic modules'
    ],
    correctOption: 1,
    explanation: 'Node.js has three module categories: (1) <strong>Core modules</strong> — built into Node.js (e.g., fs, http, path), required by name. (2) <strong>File-based modules</strong> — .js files you write, required with a relative path (./file or ../file). (3) <strong>NPM modules</strong> — third-party packages installed from the npm registry (npm install packageName), stored in node_modules.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: "What core Node.js module would you use to read and write files on the server's hard drive?",
    options: [ 'http', 'path', 'os', 'fs' ],
    correctOption: 3,
    explanation: "The <strong>fs (file system) module</strong> provides file I/O capabilities — reading, writing, creating, and deleting files. For example: <code>fs.readFile()</code> reads a file's contents. The <code>http</code> module handles HTTP servers, <code>path</code> handles file path manipulation, and <code>os</code> provides system information like CPU and memory details."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js Modules',
    question: 'A developer needs to find out how many CPU cores the server has and how much free memory is available. Which core module is appropriate?',
    options: [ 'http', 'fs', 'os', 'crypto' ],
    correctOption: 2,
    explanation: 'The <strong>os module</strong> provides system-related information including CPU details, memory, platform, and hostname. The <code>http</code> module is for creating web servers, <code>fs</code> is for file operations, and <code>crypto</code> is for encryption and hashing. For hardware/system info, <code>os</code> is the right choice.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'A developer starts a new Node.js project and runs npm init -y. What does this command produce?',
    options: [
      'It installs all default Node.js packages into node_modules',
      'It creates a package.json configuration file for the project using default values without asking prompts',
      'It initialises a Git repository in the current directory',
      'It downloads and installs Express.js automatically'
    ],
    correctOption: 1,
    explanation: "<strong>npm init -y</strong> creates a <code>package.json</code> file — the configuration file for a Node.js project. The <code>-y</code> flag answers 'yes' to all prompts automatically, using default values. Without <code>-y</code>, npm asks questions (project name, version, description, etc.) interactively. package.json is essential — it records project metadata, scripts, and dependencies."
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'A developer runs npm install express --save. What are the two outcomes of this command?',
    options: [
      'It installs Express globally and removes it from package.json',
      'It downloads and installs Express into node_modules AND adds it to the dependencies section of package.json',
      'It installs Express only for development and adds it to devDependencies',
      'It checks if Express is already installed and updates package-lock.json only'
    ],
    correctOption: 1,
    explanation: '<strong>npm install packageName --save</strong> does two things: (1) downloads the package into the <code>node_modules</code> folder, and (2) adds the package to the <code>dependencies</code> section of <code>package.json</code>. This ensures that anyone who clones the project and runs <code>npm install</code> will also get Express. In modern npm (v5+), --save is the default behavior.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: "A developer joins a project and clones the repository. There is no node_modules folder. What command restores all the project's dependencies?",
    options: [
      'npm start',
      'npm install --all',
      'npm install (with no package name) — reads package.json and installs everything listed',
      'node init'
    ],
    correctOption: 2,
    explanation: 'Running <strong>npm install</strong> with no package name reads the <code>package.json</code> file and installs all listed dependencies into a new <code>node_modules</code> folder. This is why <code>node_modules</code> is excluded from Git (via .gitignore) — it can always be regenerated. The <code>package.json</code> and <code>package-lock.json</code> files together ensure everyone gets the exact same packages.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'What is the purpose of the nodemon package, and how is it installed?',
    options: [
      'It monitors database connections and restarts them on failure — installed with npm install nodemon',
      'It automatically restarts the Node.js server when file changes are detected — installed globally with npm install -g nodemon',
      'It generates node_modules documentation — installed with npm install --save-dev nodemon',
      'It compresses Node.js applications for deployment — installed with npm install nodemon --build'
    ],
    correctOption: 1,
    explanation: "<strong>nodemon</strong> watches your project files for changes and <strong>automatically restarts the Node.js server</strong> when you save a file — eliminating the need to manually stop and restart the server during development. It's installed globally (<code>-g</code> flag) so it's available as a command anywhere: <code>npm install -g nodemon</code>. You then start your app with <code>nodemon app.js</code> instead of <code>node app.js</code>."
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'What is the key difference between dependencies and devDependencies in package.json?',
    options: [
      'dependencies are installed first; devDependencies are installed after',
      'dependencies are needed to run the app in production; devDependencies are only needed during development (testing, building, tooling)',
      'devDependencies are more stable than dependencies',
      'They are functionally identical — the distinction is only for documentation purposes'
    ],
    correctOption: 1,
    explanation: '<strong>dependencies</strong> are packages required for the application to run in production (e.g., Express, Mongoose). <strong>devDependencies</strong> are packages only needed during development — testing libraries, linters, build tools, and nodemon. When deploying to production, you can run <code>npm install --production</code> to skip devDependencies, reducing the deployment footprint.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'A package.json shows: "express": "^4.18.0". The ^ symbol is a semver prefix. What does it allow npm to install?',
    options: [
      'Only exactly version 4.18.0 — no updates allowed',
      'Any version of Express including major versions like 5.x.x',
      'Any compatible version with the same major number — e.g., 4.18.1, 4.19.0, but NOT 5.0.0',
      'Only patch updates — e.g., 4.18.1, but NOT 4.19.0'
    ],
    correctOption: 2,
    explanation: "The <strong>^ (caret) prefix</strong> allows updates that don't change the <strong>leftmost non-zero digit</strong>. For ^4.18.0, npm can install any 4.x.x version (e.g., 4.18.1, 4.19.0, 4.20.0) but NOT 5.0.0 (different major version). This enables minor feature updates and patches while protecting against breaking changes that major versions may introduce."
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'A package uses the ~ prefix in package.json: "lodash": "~4.17.0". What does the tilde allow?',
    options: [
      'Any 4.x.x version, same as ^',
      'Only patch-level updates — e.g., 4.17.1, 4.17.21, but NOT 4.18.0',
      'Any version including 5.x.x',
      'Only the exact version 4.17.0'
    ],
    correctOption: 1,
    explanation: 'The <strong>~ (tilde) prefix</strong> is more restrictive than ^. It only allows <strong>patch-level updates</strong> — changes to the third version number. For ~4.17.0, npm installs 4.17.x (e.g., 4.17.1, 4.17.21) but NOT 4.18.0 (different minor version). Use ~ when you want bug fixes but are cautious about even minor feature additions.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'What is the purpose of package-lock.json, and why should it NOT be manually edited?',
    options: [
      'It lists all available npm packages — manually editing it adds new packages',
      'It locks the exact versions of every installed package (including nested dependencies) to ensure reproducible installs — manually editing it can corrupt the dependency tree',
      'It is a backup of package.json in case the original is deleted',
      'It controls which scripts run during npm start — editing it changes startup behavior'
    ],
    correctOption: 1,
    explanation: '<strong>package-lock.json</strong> records the <em>exact</em> version of every package and sub-dependency installed. When you run <code>npm install</code> and a package-lock.json exists, npm installs exactly those versions — not the latest compatible ones. This ensures every developer and every deployment gets <em>identical</em> packages. It is auto-generated by npm and should never be manually edited, as the structure is complex and easily corrupted.'
  },
  {
    quizTitle: 'Node.js',
    category: 'npm & Package Management',
    question: 'Two developers work on the same project. Developer A has package.json with "express": "^4.18.0" but no package-lock.json. Developer B has both. Express 4.20.0 was just released. Who might get a different version?',
    options: [
      'Developer B — package-lock.json always installs the latest version',
      'Developer A — without package-lock.json, npm resolves to the latest compatible version (4.20.0); Developer B gets whatever version is locked in their lock file',
      'Neither — npm always installs exactly 4.18.0 regardless of lock files',
      'Both get the same version because package.json takes priority over package-lock.json'
    ],
    correctOption: 1,
    explanation: "Without <code>package-lock.json</code>, npm resolves semver ranges at install time — Developer A could get 4.20.0. <strong>package-lock.json 'trumps' package.json</strong> — when it exists, npm installs exactly the locked versions, ignoring semver ranges in package.json. This is why committing package-lock.json to source control ensures all team members get identical dependency trees."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js HTTP Module',
    question: "A developer creates a basic HTTP server using Node.js's http module. The callback receives req and res. What does res.writeHead(200) accomplish?",
    options: [
      'It reads the first 200 bytes of the request body',
      'It sets the HTTP response status code to 200 (OK) and optionally sets response headers',
      'It sends 200 characters of HTML to the client',
      'It waits 200 milliseconds before sending the response'
    ],
    correctOption: 1,
    explanation: "<strong>res.writeHead(statusCode, headers)</strong> sets the HTTP response status code and optionally adds headers. Status code <strong>200</strong> means 'OK' — the request was successful. You must call this (or let it default) before writing the response body. Common codes: 404 (Not Found), 500 (Server Error), 301 (Redirect). The status code is part of every HTTP response."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js HTTP Module',
    question: 'What is the difference between res.write() and res.end() when building an HTTP response?',
    options: [
      'res.write() finishes the response; res.end() adds more content to it',
      'res.write() appends content to the response body; res.end() signals that the response is complete and sends it — optionally adding a final chunk',
      'They are identical — both send the complete response',
      'res.write() sends HTML; res.end() sends JSON'
    ],
    correctOption: 1,
    explanation: "<strong>res.write()</strong> adds data to the response body but keeps the response open — you can call it multiple times to stream content. <strong>res.end()</strong> signals the end of the response, optionally writing a final chunk, and closes the connection. Every HTTP response must eventually call <code>res.end()</code>; forgetting it leaves the client's browser hanging indefinitely."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js HTTP Module',
    question: 'An HTTP response has status code 404. Which category does this fall into?',
    options: [
      '1xx — Informational',
      '2xx — Success',
      '4xx — Client error',
      '5xx — Server error'
    ],
    correctOption: 2,
    explanation: "HTTP status codes are grouped by their first digit: <strong>1xx</strong> = Informational, <strong>2xx</strong> = Success (200 OK), <strong>3xx</strong> = Redirection, <strong>4xx</strong> = Client error, <strong>5xx</strong> = Server error. <strong>404 (Not Found)</strong> is a 4xx — a client error, meaning the requested resource doesn't exist. The client made a valid request but asked for something that isn't there."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js HTTP Module',
    question: 'Inside an http.createServer() callback, a developer logs req.method. For a browser navigating to a URL, what value will this log?',
    options: [ 'POST', 'GET', 'REQUEST', 'NAVIGATE' ],
    correctOption: 1,
    explanation: "When a browser navigates to a URL (by typing it or clicking a link), it sends a <strong>GET request</strong>. <code>req.method</code> will be <code>'GET'</code>. POST is used for form submissions and API calls that send data. The http module exposes the raw request method, URL, headers, and HTTP version through the <code>req</code> object, giving you full visibility into every incoming request."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js HTTP Module',
    question: 'What MIME type should be set in the Content-Type header when a Node.js server responds with a JSON API response?',
    options: [ 'text/html', 'text/plain', 'application/json', 'image/png' ],
    correctOption: 2,
    explanation: 'The <strong>Content-Type header</strong> tells the client what format the response body is in. For JSON data, the correct MIME type is <strong>application/json</strong>. The browser (or HTTP client) uses this header to know how to interpret the body — parse it as JSON, render it as HTML, or display it as an image. Sending JSON with Content-Type: text/html causes parsing errors in clients that rely on the header.'
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js URL Module',
    question: "A Node.js server receives a request for: /shop/clothes?category=shirts&size=M. Using the URL class, which property gives you '/shop/clothes'?",
    options: [ 'myUrl.search', 'myUrl.href', 'myUrl.pathname', 'myUrl.hash' ],
    correctOption: 2,
    explanation: "<strong>myUrl.pathname</strong> returns the path portion of the URL — everything between the hostname and the query string, not including the ?. For <code>/shop/clothes?category=shirts&size=M</code>, <code>pathname</code> is <code>'/shop/clothes'</code>. <code>search</code> gives <code>'?category=shirts&size=M'</code>, <code>href</code> gives the full URL string, and <code>hash</code> gives the fragment (#anchor)."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js URL Module',
    question: "Using the URL module, how would you extract the value of the 'size' parameter from: /products?colour=blue&size=large?",
    options: [
      'myUrl.query.size',
      "myUrl.params['size']",
      "myUrl.searchParams.get('size')",
      'myUrl.search.size'
    ],
    correctOption: 2,
    explanation: "<strong>searchParams.get('key')</strong> retrieves the value of a named query parameter. For the URL <code>/products?colour=blue&size=large</code>, <code>myUrl.searchParams.get('size')</code> returns <code>'large'</code>. The <code>searchParams</code> object provides methods like <code>get()</code>, <code>set()</code>, <code>append()</code>, and <code>delete()</code> for working with query strings cleanly — far better than manual string parsing."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js URL Module',
    question: "A developer constructs a URL object: new URL(req.url, 'http://' + req.headers.host). Why is the second argument needed?",
    options: [
      'It sets the default query string when none is provided',
      "req.url is typically a relative path (e.g., '/page?q=1') — the URL constructor needs an absolute base URL to resolve relative paths correctly",
      'It encrypts the URL before parsing',
      'The URL class ignores the first argument and only uses the base'
    ],
    correctOption: 1,
    explanation: "The <strong>URL class requires an absolute URL</strong>. <code>req.url</code> in Node.js is only the path and query string (e.g., <code>'/products?id=5'</code>) — it's a relative URL. Without a base, the URL constructor throws an error. Constructing the base as <code>'http://' + req.headers.host</code> provides the full origin so the URL class can correctly parse the full URL including the relative path."
  },
  {
    quizTitle: 'Node.js',
    category: 'Node.js URL Module',
    question: 'Which URL module method would you use to add a new query parameter to an existing URL programmatically without manual string concatenation?',
    options: [
      "myUrl.search += '&newParam=value'",
      "myUrl.searchParams.append('newParam', 'value')",
      "myUrl.query.push({ newParam: 'value' })",
      "myUrl.addParam('newParam', 'value')"
    ],
    correctOption: 1,
    explanation: "<strong>searchParams.append('key', 'value')</strong> adds a new query parameter to the URL without overwriting existing ones. It handles URL encoding automatically — no manual string manipulation needed. Using <code>myUrl.search += '...'</code> is fragile (easy to introduce formatting bugs) and doesn't handle encoding. The searchParams API is the safe, clean way to modify query strings programmatically."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: 'A developer wants to read a text file asynchronously using the modern Promise-based fs API. Which import statement is correct?',
    options: [
      "const fs = require('fs');",
      "const fs = require('fs').promises;",
      "const fs = require('fs/async');",
      "import fs from 'fs-promises';"
    ],
    correctOption: 1,
    explanation: "The modern, non-blocking Promise-based file system API is accessed via <strong>require('fs').promises</strong>. This allows the use of <code>await</code> with file operations like <code>await fs.readFile()</code>, making async file handling clean and readable. The plain <code>require('fs')</code> gives the callback-based API. <code>'fs/async'</code> and <code>'fs-promises'</code> are not valid module names."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: "A developer reads a file with: const data = await fs.readFile('report.txt', 'utf8'). What does the 'utf8' argument do?",
    options: [
      'It compresses the file using UTF-8 encoding before reading',
      'It specifies the character encoding — without it, readFile returns a raw Buffer instead of a readable string',
      'It sets the file permission level to read-only',
      'It tells Node.js to skip the first 8 bytes of the file'
    ],
    correctOption: 1,
    explanation: "When <code>readFile()</code> is called without an encoding argument, it returns a raw <strong>Buffer</strong> object (binary data). Passing <strong>'utf8'</strong> as the encoding tells Node.js to decode the bytes as UTF-8 text and return a regular JavaScript string. Almost all text files (HTML, JSON, CSV, .txt) should be read with 'utf8' encoding to get a usable string."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: "A developer has the path string: '/projects/app/views/index.html'. What does path.basename() return?",
    options: [
      '/projects/app/views/',
      'index.html',
      '/projects/app/views/index',
      '.html'
    ],
    correctOption: 1,
    explanation: "<strong>path.basename()</strong> returns the <strong>last segment of a path</strong> — the file name including its extension. For <code>'/projects/app/views/index.html'</code>, basename returns <code>'index.html'</code>. If you pass a second argument (the extension), it strips it: <code>path.basename('/views/index.html', '.html')</code> returns <code>'index'</code>. This is useful for extracting file names from full paths."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: "Why is path.join() preferred over manually concatenating path strings with '/' characters?",
    options: [
      'path.join() runs faster than string concatenation in Node.js',
      'path.join() automatically handles OS-specific path separators (/ on Mac/Linux, \\ on Windows) and normalises slashes, preventing path errors across platforms',
      "String concatenation doesn't work for paths longer than 256 characters",
      "path.join() automatically creates the directory if it doesn't exist"
    ],
    correctOption: 1,
    explanation: "<strong>path.join()</strong> is cross-platform safe. On Windows, paths use <code>\\</code>; on Mac/Linux they use <code>/</code>. If you hardcode <code>'folder' + '/' + 'file'</code>, it may break on Windows. path.join() also normalises multiple slashes and <code>..</code> references correctly. It's the standard way to construct file paths that work reliably on any operating system."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: "A developer calls path.extname('/uploads/photo.jpg'). What does this return?",
    options: [ 'photo', 'photo.jpg', '.jpg', '/uploads/photo' ],
    correctOption: 2,
    explanation: "<strong>path.extname()</strong> returns the <strong>file extension</strong> including the dot. For <code>'photo.jpg'</code>, it returns <code>'.jpg'</code>. This is useful for validating file uploads (check if the extension is allowed), serving correct MIME types, or filtering files by type. Note the dot is included in the return value."
  },
  {
    quizTitle: 'Node.js',
    category: 'fs & path Modules',
    question: 'What is the difference between path.dirname() and path.basename()?',
    options: [
      'dirname() returns the file name; basename() returns the directory',
      'dirname() returns the directory portion of a path; basename() returns the file name portion',
      'They are identical — both return the full path',
      'dirname() only works on absolute paths; basename() only on relative paths'
    ],
    correctOption: 1,
    explanation: "For the path <code>'/home/user/docs/report.pdf'</code>: <strong>path.dirname()</strong> returns <code>'/home/user/docs'</code> — the directory containing the file. <strong>path.basename()</strong> returns <code>'report.pdf'</code> — the file name itself. Together they let you split a path into its directory and filename components without manual string parsing."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'A developer structures a Node.js app using MVC. They have a file that stores an array of product objects and functions to filter or sort them. Which MVC layer does this belong to?',
    options: [
      'View — because it represents data to the user',
      'Controller — because it handles user requests',
      'Model — because it stores data and contains the logic to access and change it',
      'Middleware — because it runs between request and response'
    ],
    correctOption: 2,
    explanation: "The <strong>Model</strong> is responsible for <strong>storing data and the logic to access or manipulate it</strong>. It holds the application's data (the product array) and any functions that query, filter, sort, or modify that data. The Model doesn't know about HTTP requests or HTML — it's purely about data. This separation allows the same model to be used by multiple views or controllers."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'In an MVC Express app, a user submits a form. Which layer receives the HTTP request, validates the input, calls the model to save data, and then tells the view what to render?',
    options: [
      'Model — it handles all data operations',
      'View — it receives user input directly',
      'Controller — it is the link between user input, the model, and the view',
      'Router — it is the MVC layer for handling requests'
    ],
    correctOption: 2,
    explanation: "The <strong>Controller</strong> is the orchestrator — it's the 'brains' of the MVC pattern. It: (1) receives the HTTP request and reads user input, (2) validates and sanitizes that input, (3) calls the appropriate Model functions to read or write data, and (4) selects which View to render with what data. It coordinates everything without implementing business logic (Model's job) or presentation (View's job)."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'What is the responsibility of the View layer in MVC?',
    options: [
      'Storing data and defining business rules',
      'Receiving HTTP requests and deciding which model to call',
      'Determining how data is presented to the user — rendering HTML, JSON, or other output formats',
      'Managing database connections and query execution'
    ],
    correctOption: 2,
    explanation: "The <strong>View</strong> is purely about <strong>presentation</strong> — how data looks to the user. In an Express app, this is typically a Pug template that receives data from the Controller and renders it as HTML. The View contains no business logic and doesn't know where the data came from. In REST APIs, the 'view' might be a JSON response formatter. The key principle: views only handle presentation."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'A team is building a product listing page and a product detail page. Both need the same product data. What MVC advantage does this scenario illustrate?',
    options: [
      'The Model can be reused by multiple views — the same data layer serves both the listing and detail pages without duplication',
      'The Controller automatically generates multiple views from a single template',
      'The View layer caches the model data for faster second renders',
      'MVC requires building a separate Model for each View'
    ],
    correctOption: 0,
    explanation: "A key MVC advantage is <strong>reusability</strong>: a <strong>Model can be used by multiple Views</strong>. The Product model's data-fetching logic is written once and reused by both the listing page controller and the detail page controller. Without MVC, you'd duplicate the data-fetching code in every page's handler. Separation of concerns enables this clean reuse."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: "A developer changes the database schema — the products table now has a 'discountedPrice' field instead of 'price'. In a well-structured MVC app, which layer(s) need to change?",
    options: [
      'Only the View — because prices are displayed to users',
      "All three layers equally — MVC doesn't reduce the impact of changes",
      'Primarily the Model — the data access logic changes; Controller and View changes are minimal and localised',
      'Only the Controller — it fetches and passes data to the view'
    ],
    correctOption: 2,
    explanation: "This demonstrates MVC's <strong>separation of concern</strong> advantage. The schema change is a <em>data</em> change, so it primarily affects the <strong>Model</strong> — where the database query and field name live. The Controller may need a small update to pass the right field name, and the View may need to update the variable name displayed. But the changes are <strong>localised and independent</strong>, not scattered throughout the codebase."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'Which Node.js framework is recommended for implementing MVC in a Node.js application?',
    options: [ 'Django', 'Laravel', 'Express.js', 'Ruby on Rails' ],
    correctOption: 2,
    explanation: "<strong>Express.js</strong> is the recommended framework for building Node.js web applications including MVC-structured ones. Django is Python, Laravel is PHP, and Ruby on Rails is Ruby — none of these are Node.js frameworks. Express is minimal and flexible — it doesn't enforce MVC but provides the routing and middleware infrastructure to implement it cleanly."
  },
  {
    quizTitle: 'Node.js',
    category: 'MVC Architecture',
    question: 'What is the main advantage of separating business logic from the GUI using MVC?',
    options: [
      'It makes applications run faster by parallelising Model and View rendering',
      'It allows data to change independently of presentation, makes testing easier, and enables multiple representations of the same data',
      'It eliminates the need for a database by storing all logic in the Controller',
      'It prevents users from modifying the View by encrypting templates'
    ],
    correctOption: 1,
    explanation: "MVC's core advantage is <strong>separation of concerns</strong>: (1) <strong>Data changes independently of presentation</strong> — updating the model doesn't break the view and vice versa. (2) <strong>Supports multiple presentations</strong> — the same model could render HTML for browsers and JSON for a mobile API. (3) <strong>Testing is easier</strong> — each layer can be tested in isolation. (4) <strong>Team specialisation</strong> — frontend and backend developers can work independently."
  }
]
;