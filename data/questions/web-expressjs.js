// data/questions/web-expressjs.js

module.exports = [
  {
    quizTitle: 'Express.js',
    category: 'What is Express.js & Why Use It',
    question: 'A developer is building a web API using plain Node.js. They find themselves manually parsing URLs, reading request headers, and writing HTTP responses from scratch for every route. What problem does Express.js primarily solve?',
    options: [
      'It replaces Node.js entirely with a faster runtime',
      "It provides a framework with built-in routing, middleware support, and convenience methods so developers don't have to build everything from scratch",
      'It automatically generates a database schema from your API routes',
      'It compiles JavaScript into binary for faster server performance'
    ],
    correctOption: 1,
    explanation: "<strong>Express.js is a Node.js web application framework</strong> that provides a robust set of features — middleware, routing, convenience methods, and views — so developers don't need to implement low-level HTTP handling manually. Without it, every request/response cycle requires significant boilerplate code. Express abstracts that complexity away."
  },
  {
    quizTitle: 'Express.js',
    category: 'What is Express.js & Why Use It',
    question: 'Which of the following is NOT listed as a core feature of Express.js?',
    options: [
      'Middleware for letting requests flow through multiple handlers',
      'Routing for handling requests at specific paths',
      'Built-in SQL database connection management',
      'Views for dynamically rendering HTML'
    ],
    correctOption: 2,
    explanation: 'Express.js provides <strong>middleware, routing, convenience methods, and views</strong> — but it does <strong>not</strong> include built-in SQL (or any) database management. Database connectivity is handled by separate libraries (like Mongoose for MongoDB, or pg for PostgreSQL). Express intentionally stays un-opinionated about data storage.'
  },
  {
    quizTitle: 'Express.js',
    category: 'What is Express.js & Why Use It',
    question: 'A junior developer sets up a basic Express server. The line reads: const port = process.env.PORT || 3000. Why is the || 3000 part important?',
    options: [
      'It forces Express to always use port 3000 in all environments',
      'It acts as a fallback — if no PORT environment variable is set (e.g., locally), the app defaults to port 3000',
      'It tells Express to listen on both port 3000 and the environment port simultaneously',
      'It sets a maximum of 3000 concurrent connections'
    ],
    correctOption: 1,
    explanation: "The <strong>|| 3000 is a fallback value</strong>. In cloud/production environments, platforms assign a port via the <code>process.env.PORT</code> variable. Locally, that variable typically doesn't exist, so <code>process.env.PORT</code> is <code>undefined</code>. The <code>|| 3000</code> ensures the app falls back to port 3000 for local development. Without it, the app would fail to start locally."
  },
  {
    quizTitle: 'Express.js',
    category: 'What is Express.js & Why Use It',
    question: 'In the Hello World Express server, what are the roles of the req and res parameters in the route callback?',
    options: [
      'req holds the server configuration; res holds the database connection',
      'req represents the incoming HTTP request (with data like headers and body); res represents the outgoing HTTP response (used to send data back)',
      'req and res are interchangeable — they both hold the same request data',
      'req holds the rendered HTML; res holds the route path'
    ],
    correctOption: 1,
    explanation: '<strong>req (request)</strong> gives you access to everything about the incoming HTTP request — headers, body, URL params, query strings, IP address, etc. <strong>res (response)</strong> is the object you use to send a response back to the client — calling methods like <code>res.send()</code>, <code>res.json()</code>, or <code>res.render()</code>. They are distinct objects with very different roles.'
  },
  {
    quizTitle: 'Express.js',
    category: 'What is Express.js & Why Use It',
    question: 'A developer calls app.listen(3000, callback). What are the two things this line does?',
    options: [
      'It imports Express and creates an app instance',
      'It starts the server listening for incoming requests on port 3000, and runs the callback once the server is ready',
      'It defines a route at port 3000 and handles GET requests',
      'It connects to a database on port 3000 and logs the connection'
    ],
    correctOption: 1,
    explanation: '<strong>app.listen(port, callback)</strong> does two things: (1) it starts the Express server and makes it listen for HTTP connections on the specified port, and (2) it executes the callback function once the server has successfully started — typically used to log a confirmation message. Without this line, the server is defined but never actually starts.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'An Express app needs to automatically log the method, URL, and timestamp of every incoming request before any route handler runs. What is the best approach?',
    options: [
      'Write the logging code inside every single route handler',
      'Add a middleware function using app.use() that runs for every request before routes are reached',
      'Log from inside the database connection callback',
      'Use res.send() with log data before the actual response'
    ],
    correctOption: 1,
    explanation: '<strong>Middleware functions</strong> run between the incoming request and the final route handler. Using <code>app.use()</code> to register middleware means it runs for <em>every</em> request, making it ideal for cross-cutting concerns like logging, authentication checks, or body parsing. Writing the same code in every route handler is repetitive and fragile.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'A middleware function in Express has the signature: (req, res, next). What happens if next() is never called?',
    options: [
      'Express automatically moves to the next middleware after a 500ms timeout',
      'The request is left hanging — the next middleware or route handler is never reached and the client gets no response',
      'Express skips to the last registered middleware',
      'The current middleware runs again in a loop until next() is called'
    ],
    correctOption: 1,
    explanation: "In Express, <strong>next() is the mechanism that passes control to the next middleware or route handler</strong>. If a middleware doesn't call next() (and doesn't send a response itself), the request pipeline stops — the client's browser just waits indefinitely for a response that never comes. Always either call next() or send a response in every middleware."
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'What does the built-in express.json() middleware do, and when is it necessary?',
    options: [
      'It converts all responses to JSON format automatically',
      'It parses incoming request bodies that have Content-Type: application/json, making the data available on req.body',
      'It validates that responses are valid JSON before sending them',
      'It formats JavaScript objects into pretty-printed JSON for logging'
    ],
    correctOption: 1,
    explanation: '<strong>express.json()</strong> is body-parsing middleware. When a client sends a POST or PUT request with a JSON body (Content-Type: application/json), this middleware reads the raw request body and parses it into a JavaScript object, storing it in <code>req.body</code>. Without it, <code>req.body</code> would be <code>undefined</code> — the raw data is not parsed automatically.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: "A developer wants to serve images, CSS files, and JavaScript bundles from a folder called 'assets'. Which Express built-in middleware achieves this?",
    options: [
      'express.json()',
      'express.urlencoded()',
      "express.static('assets')",
      "express.files('assets')"
    ],
    correctOption: 2,
    explanation: "<strong>express.static('folderName')</strong> is Express's built-in middleware for serving static files — images, CSS, JS, fonts, etc. After adding <code>app.use(express.static('assets'))</code>, any file in the 'assets' folder can be accessed directly by its path in the browser (e.g., <code>/style.css</code> serves <code>assets/style.css</code>). The other options handle request body parsing, not file serving."
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'Which of the following correctly describes the difference between Application-Level and Router-Level middleware in Express?',
    options: [
      'Application-level middleware only runs on GET requests; router-level runs on all methods',
      'Application-level middleware is bound to the app instance (app.use()); router-level middleware is bound to a specific router instance (router.use())',
      "They are identical — 'application' and 'router' are interchangeable terms in Express",
      'Router-level middleware runs before application-level middleware, regardless of definition order'
    ],
    correctOption: 1,
    explanation: '<strong>Application-level middleware</strong> is registered with <code>app.use()</code> and applies to the entire Express application. <strong>Router-level middleware</strong> is registered with <code>router.use()</code> and applies only to routes defined in that specific router instance. This distinction allows scoping middleware — e.g., auth middleware only on the admin router, not the entire app.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'An Express app has three middleware functions registered with app.use(). In what order do they execute for an incoming request?',
    options: [
      'They run in parallel simultaneously to improve performance',
      'They run in reverse registration order (last registered runs first)',
      'They run in the order they are registered — top to bottom, each calling next() to pass control forward',
      'Express randomly selects which middleware runs based on the request type'
    ],
    correctOption: 2,
    explanation: '<strong>Express middleware executes in the order it is registered</strong> — top to bottom. Each middleware function must call <code>next()</code> to pass control to the next one in the chain. This sequential, pipeline-like flow is fundamental to understanding Express: the order you register middleware with <code>app.use()</code> directly determines the order of execution.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Middleware in Express.js',
    question: 'A developer adds express.json() middleware AFTER all their POST route handlers. A POST request with a JSON body arrives. What is req.body inside the route handler?',
    options: [
      'The parsed JSON object, because express.json() runs globally regardless of position',
      "undefined, because middleware defined after a route handler doesn't run before that handler",
      'An empty object {}',
      'A raw Buffer containing the request body bytes'
    ],
    correctOption: 1,
    explanation: 'This is the classic middleware order trap. <strong>Middleware only affects routes defined AFTER it in the file.</strong> If express.json() is placed after a POST route handler, that handler runs before the body parser — so <code>req.body</code> will be <code>undefined</code>. Always register body-parsing middleware at the top of your app, before route definitions.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: 'What do the three parts of app.METHOD(PATH, HANDLER) represent?',
    options: [
      'The database method, the collection path, and the schema validator',
      'The HTTP method (get/post/etc.), the URL path the server listens on, and the callback function that handles the request',
      'The middleware type, the file path to serve, and the response format',
      'The module name, the parameter path, and the error handler'
    ],
    correctOption: 1,
    explanation: "In Express routing: <strong>METHOD</strong> is the HTTP verb (get, post, put, delete, etc.) the route responds to; <strong>PATH</strong> is the URL string the client must request (e.g., '/users'); <strong>HANDLER</strong> is the callback function <code>(req, res) => {}</code> that runs when a request matching that method and path arrives. All three are required for a working route."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: "A developer defines both app.get('/gallery') and app.get('/gallery/:id'). A request comes in for GET /gallery/photos. Which route matches?",
    options: [
      "app.get('/gallery') because it's shorter",
      'Both routes match and both handlers run',
      "app.get('/gallery/:id') because 'photos' is captured as the :id parameter",
      "Neither route matches because 'photos' is not a numeric ID"
    ],
    correctOption: 2,
    explanation: "<strong>/gallery/:id</strong> matches because <strong>:id is a named parameter</strong> that captures any value at that position in the URL — not just numbers. 'photos' becomes the value of <code>req.params.id</code>. The /gallery route only matches the exact path '/gallery' with nothing after it. Route parameters capture any string segment, not just numeric ones."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: "Consider the route: app.get('/orders/:orderId/items/:itemId', ...). A request arrives for GET /orders/77/items/204. What does req.params look like?",
    options: [
      '{ orderId: 77, itemId: 204 } (as numbers)',
      "{ orderId: '77', itemId: '204' } (as strings)",
      "['77', '204'] (as an array)",
      "{ 0: '77', 1: '204' } (as indexed keys)"
    ],
    correctOption: 1,
    explanation: "<strong>req.params is always an object with string values</strong>, even if the captured value looks like a number. So the result is <code>{ orderId: '77', itemId: '204' }</code>. If you need to use these values as numbers, you must explicitly convert them (e.g., <code>parseInt(req.params.orderId)</code>). This catches many beginners off-guard when doing numeric comparisons."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: "A route is defined as: app.get('/files/ab(cd)?e', ...). Which URL paths will this route match?",
    options: [
      'Only /files/abcde exactly',
      'Only /files/abe exactly',
      "Both /files/abe and /files/abcde — the (cd)? makes 'cd' optional",
      'Any path starting with /files/'
    ],
    correctOption: 2,
    explanation: "The <strong>? in Express route paths makes the preceding group optional</strong>. The pattern <code>/ab(cd)?e</code> means 'ab' followed by optionally 'cd' followed by 'e'. So it matches both <strong>/abe</strong> (without 'cd') and <strong>/abcde</strong> (with 'cd'). Express route paths support regex-like syntax characters: ?, +, *, and () for flexible matching."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: 'A developer wants a single route to respond to GET requests for both /colour and /color (British vs American spelling). Which route path achieves this most cleanly?',
    options: [
      "app.get('/colo(u)?r', ...)",
      "app.get('/colour,/color', ...)",
      "app.get('/col*r', ...)",
      "Two separate routes: app.get('/colour') and app.get('/color')"
    ],
    correctOption: 0,
    explanation: "<strong>/colo(u)?r</strong> uses a group with ? to make 'u' optional. This matches both '/colour' (with u) and '/color' (without u) with a single route definition. It's cleaner than defining two separate routes. The pattern leverages Express's support for regex-like characters in route paths — () groups a sequence, and ? makes it optional."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: 'What is the difference between req.params and req.query?',
    options: [
      'req.params holds POST body data; req.query holds GET body data',
      'req.params holds named URL segment values (e.g. /users/:id); req.query holds URL query string values (e.g. ?page=2&sort=asc)',
      'They are identical — both hold the same URL data',
      'req.params is only set for POST routes; req.query only for GET routes'
    ],
    correctOption: 1,
    explanation: "<strong>req.params</strong> captures values from named route segments defined with a colon (e.g., <code>/users/:id</code> → <code>req.params.id</code>). <strong>req.query</strong> captures key-value pairs from the URL query string — everything after the ? (e.g., <code>/search?term=cats&page=2</code> → <code>req.query.term === 'cats'</code>). They serve completely different purposes."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: "A developer wants a route that handles ALL HTTP methods (GET, POST, PUT, DELETE, etc.) for the path '/api/data'. Which Express method achieves this?",
    options: [
      "app.get('/api/data', ...)",
      "app.any('/api/data', ...)",
      "app.all('/api/data', ...)",
      "app.catch('/api/data', ...)"
    ],
    correctOption: 2,
    explanation: "<strong>app.all()</strong> registers a route handler that responds to <em>all</em> HTTP methods for the given path. It's useful for middleware that applies to a path regardless of the method — such as logging, authentication checks, or setting common headers. <code>app.any()</code> and <code>app.catch()</code> are not valid Express methods."
  },
  {
    quizTitle: 'Express.js',
    category: 'Express Routing',
    question: "A GET request arrives for /products/42. Two routes are defined: app.get('/products/:id') and app.get('/products/new'). The /products/:id route is registered first. What happens?",
    options: [
      'Both handlers run, and Express sends two responses',
      "app.get('/products/new') matches because 'new' is a reserved keyword in Express",
      "app.get('/products/:id') matches first — 'new' is captured as the :id value",
      'Express throws an error due to the conflicting route patterns'
    ],
    correctOption: 2,
    explanation: "<strong>Express matches routes in registration order.</strong> If <code>/products/:id</code> is registered before <code>/products/new</code>, a request to <code>/products/new</code> will match the dynamic route and set <code>req.params.id = 'new'</code>. The specific <code>/products/new</code> route is never reached. This is why <strong>specific static routes must always be defined before dynamic parameterized routes</strong>."
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: "A library web app has a button labelled 'View all books'. Clicking it should fetch a list of books from the server without changing any data. Which HTTP method should this request use?",
    options: [
      "POST — because it's fetching from a collection",
      'PUT — because it retrieves and updates simultaneously',
      "GET — because it's a read-only data retrieval operation",
      'DELETE — because it removes books from the server view'
    ],
    correctOption: 2,
    explanation: '<strong>GET</strong> is the HTTP method for <strong>reading/retrieving data</strong> without modifying it. It is the correct choice for fetching a list of books. GET requests are idempotent (repeating them has no side effect) and should never cause data changes. POST creates data, PUT updates data, and DELETE removes data.'
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: "A user fills out a 'Create Account' form on a website and clicks Submit. Which HTTP method should the form use, and why?",
    options: [
      'GET — to pass the credentials in the URL for easy sharing',
      "POST — to submit new data (the user's account details) to the server in the request body",
      'PUT — because creating an account replaces the guest session',
      'DELETE — to clear the form before creating the account'
    ],
    correctOption: 1,
    explanation: '<strong>POST</strong> is used to <strong>send new data to the server</strong> — like creating a new resource. Form data is sent in the request body, not in the URL, which is important for passwords and sensitive info. Using GET would expose credentials in the URL (visible in browser history and server logs). POST is the standard for form submissions that create data.'
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: "A REST API has an endpoint to update a user's profile. The developer wants to replace the entire profile object. Which HTTP method is semantically correct?",
    options: [
      'GET with a request body containing the new profile',
      'PATCH — for replacing entire resources',
      'PUT — for replacing/updating an existing resource with a complete new version',
      'POST — because updating creates a new version of the resource'
    ],
    correctOption: 2,
    explanation: "<strong>PUT</strong> is used to <strong>update/replace an existing resource</strong> with a complete new version. It's idempotent — sending the same PUT request multiple times gives the same result. PATCH is for partial updates (changing only some fields). POST creates new resources. GET never modifies data. For replacing an entire user profile, PUT is the semantic choice."
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: "An admin dashboard has a 'Remove User' button. Clicking it should permanently remove a user account from the database. Which HTTP method should the request use?",
    options: [
      'POST — because it sends the user ID in the body',
      'GET — to fetch and then delete',
      "PUT — to update the user's status to 'deleted'",
      'DELETE — the HTTP method specifically for removing resources'
    ],
    correctOption: 3,
    explanation: '<strong>DELETE</strong> is the HTTP method for <strong>removing a resource</strong> from the server. It clearly communicates the intent of the operation. While you could technically use POST to delete (by setting a custom action field), DELETE is the semantically correct REST convention. It keeps APIs predictable and self-documenting.'
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: 'What does req.body contain, and what must be set up for it to work in Express?',
    options: [
      'req.body contains URL query parameters — no setup needed',
      'req.body contains data submitted in the request body (e.g., form or JSON data) — body-parsing middleware like express.json() must be registered first',
      "req.body contains response headers — it's read-only by default",
      'req.body is only available for DELETE requests'
    ],
    correctOption: 1,
    explanation: '<strong>req.body holds data sent in the HTTP request body</strong> — typically from POST/PUT requests via forms or JSON payloads. However, Express does not parse the body automatically. You must register body-parsing middleware first: <code>express.json()</code> for JSON data or <code>express.urlencoded()</code> for HTML form data. Without it, <code>req.body</code> is <code>undefined</code>.'
  },
  {
    quizTitle: 'Express.js',
    category: 'HTTP Methods',
    question: "What property of the request object gives you the client's IP address in Express?",
    options: [ 'req.host', 'req.address', 'req.ip', 'req.origin' ],
    correctOption: 2,
    explanation: '<strong>req.ip</strong> contains the IP address of the client making the request. This is useful for rate limiting, logging, or geo-restriction. Express also provides <code>req.body</code> (request body), <code>req.query</code> (URL query params), and <code>req.params</code> (route params) as other important request properties. <code>req.host</code> and <code>req.origin</code> exist but serve different purposes.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Static Files & Frontend Integration',
    question: "After adding app.use(express.static('public')), a developer places a file at public/images/logo.png. What URL path serves this file to the browser?",
    options: [
      '/public/images/logo.png',
      '/images/logo.png',
      '/static/images/logo.png',
      '/express/images/logo.png'
    ],
    correctOption: 1,
    explanation: "With <strong>express.static('public')</strong>, Express serves files from the 'public' folder at the <strong>root URL path</strong> — the folder name itself is not included in the URL. A file at <code>public/images/logo.png</code> is accessed via <strong>/images/logo.png</strong>. The 'public' part of the path is stripped. This is a common gotcha — don't include the folder name in the URL."
  },
  {
    quizTitle: 'Express.js',
    category: 'Static Files & Frontend Integration',
    question: 'A developer has two files: server.js (Express backend) and public/index.html (frontend). The HTML file makes a fetch() call to /api/data. What does Express need in order to serve the HTML file and handle the API call?',
    options: [
      'Only a GET route for /api/data — Express serves HTML automatically',
      "Both express.static('public') for serving the HTML file AND a GET route for /api/data for the API response",
      "Only express.static('public') — it also handles API routes automatically",
      'A separate web server for the HTML file and Express only for the API'
    ],
    correctOption: 1,
    explanation: "The frontend HTML and the backend API are two distinct concerns. <strong>express.static('public')</strong> makes Express serve the static HTML/CSS/JS files. A <strong>GET route for /api/data</strong> handles the API request from the frontend's fetch() call. Both are needed — static middleware serves files, but doesn't create API endpoints. API routes must be explicitly defined."
  },
  {
    quizTitle: 'Express.js',
    category: 'Static Files & Frontend Integration',
    question: "A developer adds app.use(express.static('public')) and also defines app.get('/about', ...). A user requests /about. Which takes priority?",
    options: [
      'express.static always wins — static files take priority over all routes',
      'Whichever is registered first in the code runs first — if the route is first, it handles /about; if static is first, it looks for public/about',
      'They always conflict and Express throws an error',
      'Routes always win over static middleware regardless of order'
    ],
    correctOption: 1,
    explanation: 'Like all middleware, <strong>Express processes static() and routes in registration order</strong>. If <code>express.static()</code> is registered first, Express checks if a file exists at <code>public/about</code>. If no file is found, it moves on to the route handler. If the route is registered first, it handles the request before static middleware gets a chance. Order matters for both routes and middleware.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'What is the core purpose of a template engine like Pug, Handlebars, or EJS in a Node.js application?',
    options: [
      'To replace JavaScript with a simpler scripting language for the backend',
      'To allow developers to define HTML templates with placeholders, then fill them in with dynamic data at runtime and send the result to the client',
      'To compile TypeScript into JavaScript before the server starts',
      'To cache static HTML pages for faster loading'
    ],
    correctOption: 1,
    explanation: 'A <strong>template engine</strong> lets you write HTML-like templates with placeholders (variables, loops, conditionals). When a request comes in, Node.js replaces the placeholders with actual data and sends the resulting HTML to the client. This enables <strong>dynamic content</strong> — the same template can render differently for different users or data, unlike static HTML files.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'What two configuration lines are needed to set Pug as the view engine in an Express app, and what does each do?',
    options: [
      "app.use(pug()) and app.views('./views') — registers the engine and sets the port",
      "app.set('view engine', 'pug') sets Pug as the renderer; app.set('views', './views') tells Express where to look for template files",
      "require('pug') is enough — Express auto-detects installed template engines",
      "app.engine('pug') and app.use('/views') — registers and mounts the engine"
    ],
    correctOption: 1,
    explanation: "<strong>app.set('view engine', 'pug')</strong> tells Express to use Pug to compile templates when <code>res.render()</code> is called. <strong>app.set('views', './views')</strong> tells Express where to look for template files (the folder path). Without these, Express doesn't know which engine to use or where to find templates. Both lines are required for Pug to work with Express."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'In Pug, a developer writes: h1 Welcome, #{username}! — What does this render as in HTML?',
    options: [
      '<h1>Welcome, #{username}!</h1> (the placeholder is left as-is)',
      '<h1>Welcome, [username]!</h1>',
      "<h1>Welcome, John!</h1> (if username = 'John' was passed in the data object)",
      'An error because #{} syntax is only valid in JavaScript template literals'
    ],
    correctOption: 2,
    explanation: "<strong>#{variableName}</strong> is Pug's interpolation syntax for injecting data into text content. When <code>res.render('template', { username: 'John' })</code> is called, Pug replaces <code>#{username}</code> with the actual value. The result is <code>&lt;h1&gt;Welcome, John!&lt;/h1&gt;</code>. Pug compiles to standard HTML — no placeholders appear in the final output sent to the browser."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'How does Pug represent HTML nesting (parent/child elements)?',
    options: [
      'With opening and closing tags like HTML: <div><p>Text</p></div>',
      'With curly braces: div { p { Text } }',
      'With indentation — child elements are indented under their parent',
      'With commas separating parent and child: div, p Text'
    ],
    correctOption: 2,
    explanation: 'Pug uses <strong>indentation (whitespace) to represent nesting</strong> — there are no closing tags. A child element is simply indented further than its parent. For example, a <code>p</code> tag indented under a <code>div</code> becomes <code>&lt;div&gt;&lt;p&gt;...&lt;/p&gt;&lt;/div&gt;</code>. This makes Pug templates cleaner but means indentation errors cause structural bugs.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'A developer writes this Pug template:\n' +
      'ul\n' +
      '  each product in products\n' +
      '    li= product\n' +
      '\n' +
      "What does this render if products = ['Pen', 'Notebook', 'Ruler']?",
    options: [
      '<ul><li>products</li></ul>',
      '<ul><li>Pen</li><li>Notebook</li><li>Ruler</li></ul>',
      '<ul each product in products><li></li></ul>',
      "A syntax error because Pug doesn't support iteration"
    ],
    correctOption: 1,
    explanation: "Pug's <strong>each...in loop</strong> iterates over an array and generates one set of tags per item. <code>each product in products</code> loops through the array, and <code>li= product</code> renders an <code>&lt;li&gt;</code> for each value. The result is <code>&lt;ul&gt;&lt;li&gt;Pen&lt;/li&gt;&lt;li&gt;Notebook&lt;/li&gt;&lt;li&gt;Ruler&lt;/li&gt;&lt;/ul&gt;</code>. The <code>=</code> after a tag name outputs a variable's value as text content."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'A Pug template has:\n' +
      'if isAdmin\n' +
      '  p Admin panel access\n' +
      'else\n' +
      '  p Welcome, regular user!\n' +
      '\n' +
      'What is rendered when isAdmin is false?',
    options: [
      '<p>Admin panel access</p>',
      'Both paragraphs are rendered',
      '<p>Welcome, regular user!</p>',
      "Nothing — Pug conditionals require a third 'default' branch"
    ],
    correctOption: 2,
    explanation: 'Pug supports <strong>if/else conditionals</strong> that control which HTML is rendered based on data values. When <code>isAdmin</code> is <code>false</code>, the <code>if</code> block is skipped and the <code>else</code> block renders: <code>&lt;p&gt;Welcome, regular user!&lt;/p&gt;</code>. Only one branch runs — this is essential for showing different content to different user types (e.g., guests vs authenticated users).'
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: "How do you write an HTML attribute in Pug? For example, an anchor tag with href='/contact' and class='nav-link'?",
    options: [
      "a href='/contact' class='nav-link' Contact",
      "a(href='/contact', class='nav-link') Contact",
      "<a href='/contact' class='nav-link'>Contact</a>",
      "a[href='/contact'][class='nav-link'] Contact"
    ],
    correctOption: 1,
    explanation: "In Pug, <strong>attributes are written in parentheses</strong> directly after the tag name, separated by commas: <code>a(href='/contact', class='nav-link') Contact</code>. This compiles to <code>&lt;a href='/contact' class='nav-link'&gt;Contact&lt;/a&gt;</code>. The bracket syntax [ ] is used in CSS/JavaScript, not Pug. There are no angle brackets in Pug syntax."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'What does npm install pug do in the context of setting up Pug with Express?',
    options: [
      'It configures Express to use Pug automatically without any app.set() calls',
      'It installs the Pug package as a dependency so Express can use it as a template engine',
      'It creates a /views folder and sample .pug files',
      'It converts all existing .html files to .pug format'
    ],
    correctOption: 1,
    explanation: "<strong>npm install pug</strong> installs the Pug package into <code>node_modules</code> and adds it to <code>package.json</code> dependencies. This makes the Pug library available for Express to use. However, you still need to configure Express with <code>app.set('view engine', 'pug')</code> to actually use it. Installation makes it available; configuration activates it."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'In Pug, what is the difference between p= message and p #{message}?',
    options: [
      'p= message outputs the variable as HTML; p #{message} outputs it as plain text',
      'Both output the variable value as text content of a <p> tag — the difference is one uses buffered code (=) and one uses string interpolation (#{}) for inline embedding',
      'p= message is for numbers only; p #{message} is for strings',
      'They are identical syntax with no difference in output or usage'
    ],
    correctOption: 1,
    explanation: "Both render the variable as the paragraph's text content, but they're used differently: <strong>p= variable</strong> uses buffered output (the entire text node is the variable) and is cleaner for simple cases. <strong>p #{variable}</strong> uses string interpolation, which is better when mixing static text and variables (e.g., <code>p Hello, #{name}! You have #{count} messages.</code>). Both escape HTML by default for security."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'A Pug file starts with: extends layout — and contains a block content section. What does this accomplish?',
    options: [
      'It copies all the content from layout.pug into the current file',
      "It makes the current template inherit the layout template's structure, filling in only the 'content' block — solving the layout/code repetition problem",
      'It exports the current template to be used by layout.pug',
      'It tells Express to render layout.pug instead of the current file'
    ],
    correctOption: 1,
    explanation: "<strong>Pug's extends/block system</strong> solves layout repetition. <code>extends layout</code> means this template inherits the structure of <code>layout.pug</code> (which contains the common HTML skeleton: nav, header, footer). <code>block content</code> defines a named region that child templates fill in. Each page only defines its unique content — shared layout code lives in one place."
  },
  {
    quizTitle: 'Express.js',
    category: 'Template Engines & Pug',
    question: 'In a Pug layout file, a developer defines: block content — and in a child template: extends layout / block content / h1 My Page. What HTML structure does the child template produce?',
    options: [
      'Only <h1>My Page</h1> — the layout structure is ignored in child files',
      "The full layout HTML structure with <h1>My Page</h1> inserted where 'block content' is defined in the layout",
      'An error because block and extends cannot be used together',
      'Two copies of the layout — one empty and one with the h1'
    ],
    correctOption: 1,
    explanation: 'The <strong>layout system merges the two files</strong>. The layout.pug provides the full HTML skeleton (doctype, html, head, body, nav, footer). The <code>block content</code> in the layout is a placeholder. When the child template is rendered, its <code>block content</code> section (<code>h1 My Page</code>) is injected into that placeholder. The client receives one complete HTML page combining both files.'
  },
  {
    quizTitle: 'Express.js',
    category: 'MVC Architecture in Express',
    question: 'A developer structures their Express app into Models, Views, and Controllers. A Pug template file that renders a product listing page belongs in which layer?',
    options: [
      'Model — because it represents product data',
      'Controller — because it handles routing logic',
      'View — because it handles how data is presented to the user',
      'Middleware — because it runs between request and response'
    ],
    correctOption: 2,
    explanation: 'In MVC, the <strong>View layer</strong> is responsible for presentation — how data is displayed to the user. Pug templates (.pug files) are views because they take data passed from the controller and render it as HTML. The Model holds data/business logic, the Controller handles routing and calls the model, and the View renders the result. Template files always belong in the View layer.'
  },
  {
    quizTitle: 'Express.js',
    category: 'MVC Architecture in Express',
    question: 'In an Express MVC app, a route handler that receives a GET request, fetches data from a simulated data source, and calls res.render() belongs in which layer?',
    options: [
      'View — because it calls res.render()',
      'Model — because it accesses data',
      'Controller — because it handles the HTTP request and orchestrates the response',
      'Middleware — because it runs for every request'
    ],
    correctOption: 2,
    explanation: "The <strong>Controller</strong> is the orchestrator in MVC. It receives HTTP requests (from routing), interacts with the Model to get/manipulate data, and then passes that data to the View via <code>res.render()</code>. The controller doesn't care how the data looks (that's the View) or where it's ultimately stored (that's the Model). It connects the two."
  },
  {
    quizTitle: 'Express.js',
    category: 'MVC Architecture in Express',
    question: 'In an MVC Express app with no database yet, what plays the role of the Model?',
    options: [
      'The Pug template files in the /views folder',
      "A simple JavaScript array or object that holds the app's data",
      'The express.static() middleware',
      'The app.listen() call in server.js'
    ],
    correctOption: 1,
    explanation: "When there's no database, the <strong>Model can be simulated with a plain JavaScript array or object</strong> that holds the data in memory. For example, <code>const products = ['Pen', 'Ruler']</code> acts as the model. Controllers read from and write to this array. When a database is added later, only the Model layer changes — the Controller and View remain the same. This separation makes upgrades easier."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'A developer writes a route but the response is never sent to the client, causing the browser to hang. Looking at their code:\n' +
      "app.get('/ping', (req, res) => {\n" +
      "  const data = 'pong';\n" +
      '});\n' +
      'What is missing?',
    options: [
      'The route is missing a next() call',
      'The response is never sent — res.send(data) or similar must be called to send a response to the client',
      "The variable name 'data' is reserved in Express",
      "The route path '/ping' must start with '/api/'"
    ],
    correctOption: 1,
    explanation: "The route handler runs but <strong>never sends a response</strong>. Simply assigning data to a variable doesn't send anything to the client. You must explicitly call a response method: <code>res.send(data)</code>, <code>res.json(data)</code>, <code>res.render()</code>, or <code>res.redirect()</code>. Without one of these, the request hangs until it times out."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: "An Express app serves a Pug template with: res.render('profile', { user: { name: 'Priya', age: 28 } }). In the Pug template, how would you display the user's name?",
    options: [ 'p #{user}', 'p #{user.name}', 'p= name', 'p {user.name}' ],
    correctOption: 1,
    explanation: "When a nested object is passed to a Pug template, you access nested properties using <strong>dot notation inside #{}</strong>: <code>#{user.name}</code> accesses the <code>name</code> property of the <code>user</code> object, rendering 'Priya'. <code>#{user}</code> would output the entire object as a string like '[object Object]'. <code>p= name</code> would fail because <code>name</code> is not a top-level variable — <code>user</code> is."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'A developer registers middleware and routes in this order:\n' +
      '1. app.use(loggerMiddleware)\n' +
      "2. app.get('/home', homeHandler)\n" +
      '3. app.use(express.json())\n' +
      "4. app.post('/data', dataHandler)\n" +
      '\n' +
      'A POST to /data with a JSON body — will req.body be parsed in dataHandler?',
    options: [
      'Yes — express.json() runs globally for all routes regardless of position',
      "No — express.json() is registered AFTER the /data route, so it doesn't run before dataHandler",
      'Yes — POST routes always have body parsing enabled automatically',
      'No — express.json() only works with app.use(), not with specific routes'
    ],
    correctOption: 1,
    explanation: 'This is the classic middleware ordering trap. <strong>express.json() is registered at position 3, but the /data route handler is at position 4</strong>. Express processes middleware top-to-bottom. When a POST to /data arrives: loggerMiddleware runs (1), then Express checks routes — it finds /data at position 4, which runs BEFORE express.json() (3) gets a chance to process the body. So <code>req.body</code> is undefined. Fix: move express.json() to the top.'
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'A Pug template file contains:\n' +
      'doctype html\n' +
      'html\n' +
      '  head\n' +
      '    title My Site\n' +
      '  body\n' +
      '    h1= pageTitle\n' +
      '\n' +
      "The route calls: res.render('index', { pageTitle: 'Dashboard' }). What HTML is sent to the browser?",
    options: [
      'A page with <h1>pageTitle</h1> (the variable name, not the value)',
      'A complete HTML page with <h1>Dashboard</h1>',
      "An error because 'title' and 'pageTitle' are both reserved words",
      'A blank page because Pug only renders static content'
    ],
    correctOption: 1,
    explanation: "Pug compiles the template and injects the passed data. <code>h1= pageTitle</code> outputs the <em>value</em> of <code>pageTitle</code> (which is 'Dashboard'). The full HTML output is a complete page with <code>&lt;h1&gt;Dashboard&lt;/h1&gt;</code> in the body. Using <code>= variableName</code> (buffered output) is equivalent to using <code>#{variableName}</code> for text content."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'A developer wants to redirect users from /old-page to /new-page in Express. Which response method should they use?',
    options: [
      "res.send('/new-page')",
      "res.render('/new-page')",
      "res.redirect('/new-page')",
      "res.route('/new-page')"
    ],
    correctOption: 2,
    explanation: "<strong>res.redirect(url)</strong> sends a redirect HTTP response (typically 302) that tells the browser to navigate to the specified URL. The browser then automatically makes a new GET request to <code>/new-page</code>. <code>res.send()</code> sends data as the response body (not a redirect). <code>res.render()</code> renders a Pug template. <code>res.route()</code> doesn't exist in Express."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'What is the advantage of using a Pug layout file (extends/block) over copy-pasting the nav and footer HTML into every template file?',
    options: [
      'Layout files load faster because they are cached by the browser',
      'Layout files automatically add authentication to all pages',
      'Changes to shared elements (nav, footer) only need to be made in one place — the layout file — rather than in every individual template',
      'Pug requires layout files — individual templates cannot have their own structure'
    ],
    correctOption: 2,
    explanation: "The <strong>extends/block layout system</strong> solves the DRY (Don't Repeat Yourself) problem. Without layouts, changing the navigation would require editing every single template file — error-prone and time-consuming. With a layout file, shared structure (nav, head, footer) is defined once. Child templates only define their unique content. A nav change requires editing exactly one file: layout.pug."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'A student wants to quickly convert an existing HTML file to Pug format without rewriting it manually. What resource is mentioned in the course material?',
    options: [
      'The official Pug CLI tool: pug --convert index.html',
      'An online converter at html-to-pug.com',
      'The npm package html2pug installed via npm install html2pug',
      'The Express built-in command: node convert.js'
    ],
    correctOption: 1,
    explanation: "The course material specifically mentions the <strong>online converter at html-to-pug.com</strong> as a tool for converting existing HTML to Pug syntax. This is especially useful for beginners who already have HTML templates and want to migrate them to Pug without manually rewriting every tag and attribute. It handles the translation of angle brackets and closing tags to Pug's indentation-based syntax."
  },
  {
    quizTitle: 'Express.js',
    category: 'Practical Scenarios & Code Reading',
    question: 'Two developers argue about using Pug vs plain HTML files for a project that displays real-time user data. What is the strongest argument FOR using Pug?',
    options: [
      'Pug files are smaller in byte size and load faster than HTML',
      'Pug supports dynamic content — variables, loops, and conditionals — making it possible to generate different HTML for different users or data states at runtime',
      'Pug is supported by all browsers natively without Node.js',
      'Pug automatically fetches data from APIs without any Express routes'
    ],
    correctOption: 1,
    explanation: "The strongest argument for Pug is <strong>dynamic content rendering</strong>. Static HTML files are the same for every user. Pug templates can use variables (user's name), loops (list of items), and conditionals (show admin menu if isAdmin) to generate different HTML at request time. For any app that personalizes content or displays database-driven data, a template engine like Pug is essential."
  }
];