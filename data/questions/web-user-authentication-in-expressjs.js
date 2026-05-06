// data/questions/web-user-authentication-in-expressjs.js

module.exports = [
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'HTTP Statelessness & The Problem It Creates',
    question: 'A food delivery app allows a user to build a cart across multiple pages. After navigating from the menu page to the checkout page, the cart is empty. What is the most likely root cause?',
    options: [
      'The server crashed between pages',
      'HTTP is stateless — each request is independent with no memory of previous ones',
      "The user's browser has cookies disabled",
      'The server database deleted the cart data'
    ],
    correctOption: 1,
    explanation: '<strong>HTTP is stateless</strong>, meaning each request/response pair is completely independent. The server has no built-in memory of what happened in previous requests. Without explicit state management (sessions, cookies, tokens, or databases), data like a cart disappears between pages. Browser cookie settings and server crashes are possible but are not the fundamental cause described here.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'HTTP Statelessness & The Problem It Creates',
    question: 'A fitness tracking website shows personalised workout history after each page load even though HTTP itself is stateless. What technique must the application be using?',
    options: [
      'HTTP automatically stores user data',
      'The browser natively remembers all prior requests',
      'The server maintains some form of state mechanism such as sessions, cookies, or tokens',
      "Each HTML page contains a full copy of the user's history embedded at build time"
    ],
    correctOption: 2,
    explanation: "<strong>Servers must implement state management on top of stateless HTTP.</strong> HTTP itself has zero memory between requests. To remember who a user is and what they've done, the application must use a mechanism like sessions, cookies, or tokens to carry identity information across requests. HTTP itself never does this automatically."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Authentication vs. Authorization',
    question: "A hospital portal checks a nurse's username and password when they log in. Later, when the nurse tries to access patient billing records, the system denies access. Which process denied the billing access?",
    options: [
      "Authentication — the nurse's identity was not verified",
      'Authorization — the nurse lacks permission to view billing records',
      'Session expiry — the session timed out',
      'Basic authentication — credentials were sent again and rejected'
    ],
    correctOption: 1,
    explanation: "<strong>Authentication</strong> answers 'Who are you?' — it verified the nurse's identity at login. <strong>Authorization</strong> answers 'What are you allowed to do?' — it determined the nurse has no permission to access billing records. These are two separate processes. The nurse was authenticated successfully but was not authorized for that resource."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Authentication vs. Authorization',
    question: 'A streaming service verifies your email and password successfully. It then checks whether your subscription plan includes 4K streaming. What combination of processes just occurred?',
    options: [
      'Two authentications back-to-back',
      'Authentication followed by authorization',
      'Authorization followed by authentication',
      'Two authorizations back-to-back'
    ],
    correctOption: 1,
    explanation: "Verifying your <strong>email and password is authentication</strong> — confirming your identity. Checking your subscription plan for 4K access is <strong>authorization</strong> — determining what you're permitted to do. Authentication always comes first; you must know who someone is before deciding what they can access."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Basic Authentication',
    question: "An older internal tool sends the employee's username and password in plaintext with every single API call. Which authentication method does this describe?",
    options: [
      'Session authentication',
      'Token authentication',
      'Basic authentication',
      'OAuth 2.0'
    ],
    correctOption: 2,
    explanation: '<strong>Basic authentication</strong> sends credentials (username and password) with every single request. It has no login/logout system — credentials are transmitted repeatedly. This is considered very insecure, especially over unencrypted connections, which is why modern applications avoid it.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Basic Authentication',
    question: 'Why is basic authentication considered unsuitable for modern web applications?',
    options: [
      'It requires too much server memory',
      'Credentials are sent repeatedly with every request, creating constant exposure risk',
      'Sessions expire too quickly',
      'It does not support cookies'
    ],
    correctOption: 1,
    explanation: 'The fundamental problem with <strong>basic authentication is credential exposure</strong>. Every single request transmits the username and password, meaning every request is an opportunity for interception. There is also no logout mechanism. Modern apps use sessions or tokens precisely to avoid transmitting credentials repeatedly.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Basic Authentication',
    question: 'A developer argues that basic authentication is fine because their API only needs to handle one type of user. What is the strongest counter-argument?',
    options: [
      "It doesn't work with REST APIs",
      'There is no logout or session management mechanism, and credentials are exposed on every request',
      'It cannot handle multiple users simultaneously',
      'It requires bcrypt, which is complex to set up'
    ],
    correctOption: 1,
    explanation: "The number of user types doesn't change basic authentication's core problem: <strong>credentials are exposed on every single request</strong> and there is no login/logout system. Even with one user type, credentials can be intercepted from any one of the many requests. Security concerns don't disappear just because an app is simpler."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Session Authentication',
    question: 'A user logs into a banking app. The server creates a unique identifier linked to that user and stores it, then sends it to the browser. On the next request to check their balance, the browser sends that identifier back automatically. What mechanism is being described?',
    options: [
      'Basic authentication sending credentials every time',
      'JWT token stored in localStorage',
      'Session authentication using a session ID and cookies',
      'OAuth redirect flow'
    ],
    correctOption: 2,
    explanation: 'This is the classic <strong>session authentication flow</strong>: 1) User logs in with credentials, 2) Server creates a session ID tied to the user, 3) Session ID is sent to the browser and stored in a cookie, 4) Browser automatically includes the cookie (and thus the session ID) on every subsequent request. The server can then identify the user without re-sending credentials.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Session Authentication',
    question: 'After a successful login, where does the session ID get stored on the client side?',
    options: [
      "In the server's database",
      "In the browser's cookie storage",
      'In a hidden HTML input field',
      'In the URL query string'
    ],
    correctOption: 1,
    explanation: 'The session ID is sent from the server to the browser and stored in a <strong>cookie</strong>. Browsers then automatically include this cookie in every subsequent HTTP request to that server. The actual session data lives on the server — the cookie just holds the ID that references that server-side data.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Session Authentication',
    question: 'A user logs into a forum, then closes the browser tab and reopens the site. They have to log in again. This is expected behaviour for which session characteristic?',
    options: [
      'Sessions use strong encryption that expires hourly',
      'Session IDs are forgotten by the browser when the session ends or the browser is closed',
      "The server deleted the user's account",
      'Basic authentication was used, which has no persistent state'
    ],
    correctOption: 1,
    explanation: '<strong>Session IDs stored in cookies are lost when the browser is closed</strong> (unless configured otherwise with persistent cookies). This is by design — sessions are meant to be temporary. When the browser closes, the session cookie is discarded, so the next visit starts a new anonymous session. Users must log in again.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Session Authentication',
    question: 'A developer wants to log a user out of a web app built with express-session. Which method should they call?',
    options: [
      'req.session.clear()',
      'res.cookie.delete()',
      'req.session.destroy()',
      'session.logout(req)'
    ],
    correctOption: 2,
    explanation: "<strong>req.session.destroy()</strong> is the express-session method for invalidating/removing the current session from the server. This effectively logs the user out by eliminating the session data the server was keeping. The other options either don't exist in express-session or are not the correct API for this purpose."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Session Authentication',
    question: "A travel booking site stores the user's selected flight in a session variable. The user completes the booking. Where should the final booking record be stored for long-term retrieval?",
    options: [
      'In the session variable, since sessions persist indefinitely',
      'In a local variable in the route handler',
      'In a database, because sessions are temporary',
      'In a browser cookie with a 10-year expiry'
    ],
    correctOption: 2,
    explanation: '<strong>Sessions store data only temporarily</strong>. They expire when the browser closes or a timeout occurs. For permanent records — like a completed booking — data must be saved to a <strong>database</strong>. Sessions are useful for holding transient state during a user interaction, not for long-term storage.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cookies vs. Sessions',
    question: "A developer needs to store a user's theme preference (light/dark mode). The preference should survive after the browser is closed. Where is the best place to store it?",
    options: [
      'A session variable',
      'A browser cookie with a long expiry',
      'In req.session',
      'In a JWT that expires in 5 minutes'
    ],
    correctOption: 1,
    explanation: '<strong>Browser cookies can have a set expiry date</strong>, allowing them to persist even after the browser closes. Session variables, however, are lost when the session ends. A long-lived cookie is ideal for preferences like theme because they should survive across browser sessions. A short-lived JWT would not work here.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cookies vs. Sessions',
    question: 'Which statement correctly contrasts where cookies and sessions store data?',
    options: [
      'Both cookies and sessions store data on the server',
      'Cookies store data client-side; sessions store data server-side',
      'Sessions store data client-side; cookies store data server-side',
      'Both store data inside the JWT payload'
    ],
    correctOption: 1,
    explanation: '<strong>Cookies store their data directly in the browser (client-side)</strong>, while <strong>sessions store data on the server</strong>. With sessions, the browser only holds a small session ID (often in a cookie), not the actual data. This is why sessions can store larger and more sensitive data safely — the sensitive data never leaves the server.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cookies vs. Sessions',
    question: "A user manually edits their browser cookies to change their username to 'admin'. With session-based authentication, why does this attack fail?",
    options: [
      'Cookies are encrypted by default',
      'The session cookie only contains an ID — the actual user data is stored server-side and cannot be modified by the client',
      'Browsers prevent cookie editing',
      'The server re-authenticates on every request using the original password'
    ],
    correctOption: 1,
    explanation: "This is the key security advantage of sessions: <strong>the session cookie only holds an opaque session ID</strong>, not the actual user data. The real data (like username and role) is stored on the server, keyed to that ID. A client can modify their cookie value, but the server simply won't find a valid session matching a fake ID — or will find the real session, not a modified one."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cookies vs. Sessions',
    question: "A user's browser has cookies entirely disabled. What happens to session-based authentication?",
    options: [
      'Sessions still work because they store data on the server',
      'Sessions are broken because the session ID cannot be sent back to the server',
      'Token authentication is also broken',
      'The server falls back to basic authentication automatically'
    ],
    correctOption: 1,
    explanation: "While <strong>session data lives on the server</strong>, the session ID needs to travel between client and server — usually via a cookie. If cookies are disabled, the browser cannot send the session ID back, so the server cannot identify the user. Sessions are typically identified by 'often a small cookie' as described in the material. Sessions can fail when cookies are disabled unless URL-based session passing is used."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cookies vs. Sessions',
    question: 'Which storage method has its size limited by server disk space rather than browser restrictions?',
    options: [
      'Browser cookies',
      'Session variables (server-side)',
      'localStorage',
      'JWT payload'
    ],
    correctOption: 1,
    explanation: "<strong>Sessions store data on the server</strong>, so their size limit is essentially the server's available storage, not a browser restriction. Browser cookies are limited in size (typically ~4KB per cookie). This makes sessions suitable for storing larger data like shopping carts, while cookies are better for small values like IDs or preferences."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: "In an Express app, the secret option in express-session is set to 'cats123'. What is the purpose of this value?",
    options: [
      'It encrypts the entire session data stored on the server',
      'It is used to sign the session ID cookie to detect tampering',
      'It is the default password used when no user password is provided',
      "It sets the session's expiry time in seconds"
    ],
    correctOption: 1,
    explanation: 'The <strong>secret</strong> in express-session is used to <strong>sign (HMAC) the session ID cookie</strong>, not to encrypt session data. Signing allows the server to detect if the session ID cookie was tampered with by a client. It does not encrypt session data and has nothing to do with user passwords or expiry times.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: 'A developer sets resave: false in their express-session configuration. What does this control?',
    options: [
      'Whether the session is deleted after every request',
      'Whether the session is saved back to the store on every request, even if unchanged',
      'Whether the user must re-enter their password on each visit',
      'Whether cookies are sent over HTTPS only'
    ],
    correctOption: 1,
    explanation: '<strong>resave: false</strong> means the session will not be saved back to the session store on every single request if nothing in it has changed. Setting it to true causes unnecessary write operations. Setting it false is generally more efficient and is the recommended setting to avoid race conditions and extra storage writes.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: 'What does setting saveUninitialized: true cause in express-session?',
    options: [
      'Sessions are never created for anonymous users',
      'A new session is saved to the store even before any data is set on it',
      'Session IDs are stored in the database instead of cookies',
      'The session expires immediately if not interacted with'
    ],
    correctOption: 1,
    explanation: "<strong>saveUninitialized: true</strong> means a session will be created and saved to the store even if nothing has been added to it yet (an 'uninitialized' session). This can be useful for tracking anonymous users or for cookie law compliance. Setting it to false means a session only gets saved once you actually put data into it."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: "A developer sets cookie: { secure: true } in their session configuration, but users find that sessions don't work over plain HTTP in development. Why?",
    options: [
      'The secret key is too short',
      'secure: true restricts the session cookie to HTTPS connections only',
      'saveUninitialized must also be set to true',
      'The bcryptjs library is not installed'
    ],
    correctOption: 1,
    explanation: '<strong>secure: true</strong> means the session cookie will only be sent over <strong>HTTPS connections</strong>. In local development using plain HTTP (http://localhost), the cookie is never transmitted, so sessions appear broken. For development, developers typically set secure: false and only enable it in production where HTTPS is in use.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: 'What npm packages are needed to implement session authentication with password hashing in Express?',
    options: [
      'express-session and jsonwebtoken',
      'express-session and bcryptjs',
      'passport and jwt',
      'cookie-parser and crypto'
    ],
    correctOption: 1,
    explanation: '<strong>express-session</strong> handles creating and managing sessions in Express, while <strong>bcryptjs</strong> is used for hashing and comparing passwords securely. Together they cover the two main needs: session management and secure password storage. jsonwebtoken is used for JWT-based authentication, not session-based.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'express-session Configuration',
    question: 'A developer writes: req.session.userId = 42; — which option value was the developer relying on to store this?',
    options: [
      'saveUninitialized: false, because the session must already exist',
      'resave: true must be set for this to work',
      'This is just how you write to session storage in express-session, regardless of other options',
      'The secret key must be exactly 42 characters long'
    ],
    correctOption: 2,
    explanation: 'In express-session, you set data on the session simply by <strong>assigning properties to req.session</strong>. This is the standard API — no special option is needed to write to the session object. The options like resave and saveUninitialized control how/when the session is persisted, but the assignment itself always works the same way.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'After a successful login on a mobile banking app, the server sends back a long string. The app stores this string and sends it with every subsequent API call instead of the password. What is this string called?',
    options: [
      'A session ID',
      'A password hash',
      'An authentication token',
      'A base64-encoded cookie'
    ],
    correctOption: 2,
    explanation: 'This is an <strong>authentication token</strong>. In token-based authentication, a user logs in once with their credentials and receives a token. All future requests use this token to prove identity — the password is never sent again. Tokens are typically encrypted, compact, and time-limited.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'A session-based system requires the server to look up session data in storage for every request. How does token-based authentication differ in terms of server-side storage?',
    options: [
      'Tokens also require server-side storage for each user',
      'Tokens are self-contained — the server can verify them without looking up stored session data',
      'Tokens require a faster database',
      'Tokens need more server memory than sessions'
    ],
    correctOption: 1,
    explanation: 'One key advantage of tokens (especially JWTs) is that they are <strong>self-contained</strong>. The server can verify a token cryptographically without needing to look up any stored data. Sessions, by contrast, require the server to look up session data in storage for every request. This makes tokens more scalable for distributed systems.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: "What does the 'W' in JWT stand for, and how is the full term pronounced?",
    options: [
      "Web — pronounced 'jay-double-u-tee'",
      "Web — pronounced 'jot'",
      "Wrapped — pronounced 'jwt'",
      "Wire — pronounced 'j-w-t'"
    ],
    correctOption: 1,
    explanation: "JWT stands for <strong>JSON Web Token</strong>, and it is pronounced <strong>'jot'</strong>. It is a string produced by the server that encodes JSON data in a compact, URL-safe format. The pronunciation 'jot' is the official and widely accepted term in the developer community."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: "A JWT contains the payload: { role: 'admin', explanation: 1735689600 }. A hacker intercepts this token and tries to use it three months after it was issued. What should happen?",
    options: [
      'The server accepts it because JWTs never expire',
      'The token is rejected because its expiry timestamp has passed',
      'The token is accepted because the payload was not modified',
      'The server must check the database to verify if it has expired'
    ],
    correctOption: 1,
    explanation: 'JWTs are <strong>time-sensitive and include an expiry (exp) claim</strong>. When the server verifies a JWT, it checks whether the current time is before the expiry. A token used three months later would have a long-expired timestamp, causing jwt.verify() to throw a TokenExpiredError. This is a core security feature — tokens are short-lived by design.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'Why is storing a hashed password more secure than storing the original password in a database?',
    options: [
      'Hashed passwords are shorter and take less storage space',
      'Hash functions are one-way — the original password cannot be derived from the hash',
      'Hashed passwords can be decrypted with the secret key',
      'Hash functions always produce the same length output, making them easier to index'
    ],
    correctOption: 1,
    explanation: "<strong>Cryptographic hash functions are one-way</strong>: it is computationally infeasible to reverse a hash and recover the original password. If a database is breached, attackers only get hashes — not the actual passwords. Note that one-way does not mean 'cannot be guessed': attackers can still try known passwords and compare hashes (hence salting is important)."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: "A developer calls jwt.sign({ email: 'ada@lab.com' }, 'mysecret', { algorithm: 'HS256' }). What does this produce?",
    options: [
      'A bcrypt hash of the email address',
      'A signed JWT string encoding the given payload',
      'An encrypted session ID',
      'A session cookie containing the email'
    ],
    correctOption: 1,
    explanation: "<strong>jwt.sign()</strong> takes a payload object, a secret key, and options — and produces a <strong>signed JWT string</strong>. The payload is base64-encoded (not encrypted) and cryptographically signed using the secret. This allows any party with the secret to later verify that the token is authentic and untampered. The result is a compact string like 'eyJ...xxxxx'."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: "A server receives a JWT and calls jwt.verify(token, 'mysecret'). What does this function do if the token was tampered with?",
    options: [
      'It returns the decoded payload and a warning flag',
      'It throws an error (JsonWebTokenError), indicating the token is invalid',
      'It silently rejects the token and returns null',
      'It checks the database to see if the token is still active'
    ],
    correctOption: 1,
    explanation: "<strong>jwt.verify() throws a JsonWebTokenError</strong> if the token's signature does not match — meaning the token was tampered with or was signed with a different secret. The developer must catch this error to handle invalid tokens. It never silently returns null or requires a database check to detect tampering — the math in the signature is the proof."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'What npm package provides jwt.sign() and jwt.verify() in a Node.js/Express app?',
    options: [ 'express-jwt', 'bcryptjs', 'jsonwebtoken', 'passport-jwt' ],
    correctOption: 2,
    explanation: 'The <strong>jsonwebtoken</strong> package (installed with npm install jsonwebtoken) provides the core jwt.sign() and jwt.verify() functions. bcryptjs is for password hashing, express-jwt is a middleware that uses jsonwebtoken under the hood, and passport-jwt is a Passport.js strategy — not the direct source of those functions.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'A developer compares session authentication to token authentication for a large-scale distributed API used by millions of mobile users. Which advantage of token-based auth is most relevant here?',
    options: [
      'Tokens use more server memory, which improves caching',
      'Tokens are stateless — any server can verify them without shared session storage',
      'Tokens are always stored in cookies, which mobile apps handle natively',
      'Tokens require bcrypt, which is faster than session serialization'
    ],
    correctOption: 1,
    explanation: 'In a distributed system with many servers, <strong>stateless tokens</strong> have a major advantage: any server can verify a token independently without needing access to a central session store. Sessions require all servers to share the same session storage. For millions of mobile API clients, token-based authentication scales far better.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Token Authentication & JWT',
    question: 'Besides eliminating password storage on the server, what is another security benefit of using tokens with short expiry times?',
    options: [
      'Short-lived tokens cannot be decoded',
      "If a token is stolen, the attacker's window of misuse is limited to the token's remaining lifespan",
      'Short tokens use less bandwidth',
      'Tokens with short expiry are automatically refreshed by the browser'
    ],
    correctOption: 1,
    explanation: "A <strong>short token lifespan limits the damage</strong> if a token is stolen or intercepted. An attacker who obtains a stolen token can only use it until it expires — minutes or hours, not indefinitely. This is unlike a stolen password, which works until changed. This is why 'Limited Lifespan' is listed as a key reason tokens are more secure."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cryptographic Hashing & bcryptjs',
    question: "Two different users both choose the password 'sunshine99'. After hashing with bcrypt, what will their stored hashes look like?",
    options: [
      'Identical hashes, since the input is the same',
      'Different hashes, because bcrypt adds a random salt before hashing',
      'Identical until the server assigns different user IDs',
      'The same short hash since bcrypt compresses identical inputs'
    ],
    correctOption: 1,
    explanation: "<strong>bcrypt uses a random salt</strong> added to each password before hashing. Even with identical input passwords, the salt ensures each resulting hash is unique. This prevents 'rainbow table' attacks where precomputed hashes for common passwords are looked up. The salt is stored alongside the hash so it can be used during comparison."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cryptographic Hashing & bcryptjs',
    question: 'Why is using a general-purpose hashing algorithm like MD5 for password storage considered insecure, compared to bcrypt?',
    options: [
      'MD5 produces shorter hashes that are easier to store',
      'MD5 is fast — meaning attackers can test billions of password guesses per second; bcrypt is deliberately slow',
      'MD5 requires a secret key, making deployment complex',
      'bcrypt hashes can be reversed; MD5 cannot'
    ],
    correctOption: 1,
    explanation: "<strong>bcrypt is intentionally slow</strong> (computationally expensive), which makes brute-force guessing impractical. A fast algorithm like MD5 allows attackers to test billions of candidates per second with modern hardware. bcrypt's work factor can also be increased over time to keep pace with faster hardware. Speed is a liability, not an asset, for password hashing."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Cryptographic Hashing & bcryptjs',
    question: 'A user registers on a site using bcryptjs. The developer stores the hash. Later, the user logs in. How does the server verify the password without storing the original?',
    options: [
      'It decrypts the stored hash and compares it to the input',
      'It re-hashes the entered password with the same salt stored in the hash and compares the results',
      'It sends the stored hash to the user who then confirms it matches',
      'It stores the password in a temp variable, checks it, then deletes it'
    ],
    correctOption: 1,
    explanation: 'bcrypt stores the salt inside the hash string itself. When verifying, <strong>bcrypt.compare() extracts the salt from the stored hash, hashes the entered password with it, and checks if the result matches</strong>. The original password is never stored. This is why bcryptjs ships both hash() and compare() functions.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: "A student finishes their Express.js project and pushes it to GitHub. After deployment to Render, the app crashes immediately. The app's port is hardcoded as 3000. What is the likely issue?",
    options: [
      "GitHub doesn't support Node.js projects",
      'Port 3000 is banned on cloud platforms',
      'The app should use process.env.PORT so the hosting platform can assign the port dynamically',
      'Render requires apps to run on port 443 only'
    ],
    correctOption: 2,
    explanation: "Cloud platforms like Render <strong>assign the port dynamically</strong> via the PORT environment variable. If you hardcode port 3000, the app listens on a port the platform didn't assign, causing a crash or connectivity failure. The correct pattern is: <code>const PORT = process.env.PORT || 3000;</code> — using the platform's port in production, or 3000 locally."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: 'A student accidentally pushes their MongoDB connection string with their database password to a public GitHub repository. What security risk does this create?',
    options: [
      'GitHub will automatically encrypt the file',
      'Anyone who finds the repository can use the credentials to access or destroy the database',
      "Only the student's IP can connect to MongoDB, so it's safe",
      'MongoDB ignores credentials found in public repos'
    ],
    correctOption: 1,
    explanation: 'Pushing <strong>secrets (passwords, API keys, connection strings) to a public repository is a critical security mistake</strong>. Anyone who discovers the repository — bots scan GitHub continuously — can use the credentials to access the database. Sensitive values should be stored in environment variables (like .env files, excluded from Git via .gitignore) and never committed to source control.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: 'Before pushing a Node.js project to GitHub, what file should a developer include, and what should it exclude?',
    options: [
      'package-lock.json — excluding package.json',
      'A README.md — excluding the .env file from public view',
      'A .gitignore file — excluding node_modules/ and sensitive .env files',
      'A Dockerfile — excluding the src folder'
    ],
    correctOption: 2,
    explanation: "A <strong>.gitignore file</strong> tells Git which files and folders to skip. node_modules should be excluded because it's huge and can be rebuilt from package.json with npm install. .env files containing secrets (passwords, API keys) must also be excluded. This keeps the repository clean and prevents accidental exposure of sensitive credentials."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: 'A developer configures Render to run their Express app. Render asks for a Build Command and a Start Command. What are the correct commands for a standard Node.js/Express app?',
    options: [
      'Build: node app.js  Start: npm start',
      'Build: npm install  Start: node app.js',
      'Build: npm run build  Start: npm serve',
      'Build: git pull  Start: npm run dev'
    ],
    correctOption: 1,
    explanation: 'For a basic Node.js Express app on Render: <strong>Build Command: npm install</strong> (installs dependencies) and <strong>Start Command: node app.js</strong> (starts the server). The build phase sets up dependencies; the start phase runs the application. npm run build is for frontend frameworks with a build step, not a typical Express backend.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: 'Why is MongoDB Atlas specifically recommended for cloud-deployed applications rather than a locally-running MongoDB instance?',
    options: [
      'Atlas is faster because it uses SSD storage',
      "Atlas provides a cloud-accessible database — a local MongoDB instance on a developer's computer is not reachable from a cloud server",
      'Atlas is free while local MongoDB requires a license',
      'Atlas automatically migrates data from session storage'
    ],
    correctOption: 1,
    explanation: 'A <strong>locally-running MongoDB instance is only accessible on your machine</strong>. When your Express app runs on Render (or any cloud server), it cannot connect to localhost:27017 on your laptop. MongoDB Atlas runs in the cloud and provides a public connection string, making it accessible from any server. This is why cloud deployments require a cloud-hosted database.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Deployment (GitHub & Render)',
    question: 'A developer wants to use different database passwords for development and production without hardcoding anything. What is the correct approach?',
    options: [
      'Store all credentials directly in the JavaScript source files',
      'Use environment variables — read values from process.env in code, set different values per environment',
      'Create separate app.js files for dev and prod',
      'Use bcrypt to hash the database password in the source code'
    ],
    correctOption: 1,
    explanation: "<strong>Environment variables</strong> allow different values in different environments without changing source code. In development, you use a .env file (excluded from Git). In production (Render), you set environment variables through the platform's dashboard. Code reads them via process.env.MY_VAR. This is the industry-standard way to manage secrets across environments."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Reading & Applying Code',
    question: "Consider this code: const token = jwt.sign({ userId: 99 }, 'abc123', { algorithm: 'HS256' }); Which element acts as the key that both signs and later verifies this token?",
    options: [ '{ userId: 99 }', "'abc123'", "'HS256'", '99' ],
    correctOption: 1,
    explanation: "The second argument to jwt.sign() — <strong>'abc123'</strong> — is the secret key. It is used to create the HMAC-SHA256 signature. When verifying later with jwt.verify(token, 'abc123'), the same secret is required. If any other secret is provided during verification, the check fails. The payload (userId: 99) and algorithm are separate concerns."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Reading & Applying Code',
    question: "A developer has: app.get('/dashboard', (req, res) => { if (!req.session.loggedIn) { return res.redirect('/login'); } res.render('dashboard'); }); What does this route guard do?",
    options: [
      'It logs the user out if they visit /dashboard',
      'It checks whether the session has a loggedIn flag; if not, it redirects to /login',
      'It creates a new session for anyone visiting /dashboard',
      'It destroys the session and regenerates a new one on each visit'
    ],
    correctOption: 1,
    explanation: "This is a classic <strong>session-based route guard (middleware pattern)</strong>. Before serving the dashboard, it checks req.session.loggedIn. If the session has no loggedIn value (user hasn't authenticated), it redirects to the login page. This prevents unauthenticated users from accessing protected routes — a fundamental auth pattern."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Reading & Applying Code',
    question: 'Which express-session configuration makes the session cookie only transmit over HTTPS, and why would you NOT use it during local development?',
    options: [
      'resave: true — it retries the session over HTTP',
      'cookie: { secure: true } — because local development typically uses HTTP, not HTTPS',
      "saveUninitialized: false — because dev servers don't initialise sessions",
      "secret: 'https' — because the secret must match the protocol"
    ],
    correctOption: 1,
    explanation: '<strong>cookie: { secure: true }</strong> restricts the session cookie to HTTPS. During local development, you typically run http://localhost, which is plain HTTP — so the cookie is never sent, and sessions appear broken. In production, HTTPS is used and secure: true is the right setting. The fix is to use secure: false locally and true in production.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Reading & Applying Code',
    question: "A student writes: const decoded = jwt.verify(token, 'wrongsecret'); — What will happen?",
    options: [
      "The token is decoded successfully but marked as 'unverified'",
      "An error is thrown because the secret used for verification doesn't match the signing secret",
      'The function returns null and continues normally',
      'The function strips the signature and returns the raw payload'
    ],
    correctOption: 1,
    explanation: "jwt.verify() uses the secret to recompute the signature and compare it to the token's embedded signature. If the secrets don't match, <strong>the signatures won't match and a JsonWebTokenError is thrown</strong>. This is exactly the behaviour you want — any token signed by someone else (or tampered with) is immediately rejected."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Reading & Applying Code',
    question: "A route sets req.session.cart = ['item1', 'item2']; The user then calls req.session.destroy() on logout. What happens to the cart data?",
    options: [
      'The cart remains in the session for the next login',
      'The cart items are saved to the database automatically',
      'The entire session (including cart) is deleted from the server',
      'Only the cart is deleted; other session variables survive'
    ],
    correctOption: 2,
    explanation: "<strong>req.session.destroy() deletes the entire session</strong>, including all variables stored in it (like cart, userId, loggedIn, etc.). It is a complete cleanup. If you only want to remove specific values, you'd delete individual properties (e.g., delete req.session.cart). destroy() is the appropriate logout action."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: 'An e-commerce site uses session auth. During a flash sale, 500,000 users log in simultaneously. The session store becomes overwhelmed. What is this a symptom of?',
    options: [
      'A bug in bcryptjs',
      'A weakness of session-based auth: each logged-in user requires a server-side session record',
      'JWT tokens expiring all at once',
      'The .gitignore file being missing'
    ],
    correctOption: 1,
    explanation: 'This illustrates a <strong>scalability challenge with session-based authentication</strong>: the server must store and look up session data for every active user. With 500,000 concurrent users, the session store (often in memory or a database) can become a bottleneck. Token-based auth avoids this because tokens are stateless — no server storage per user is needed.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A developer stores the logged-in user's ID in a JWT payload so they don't need a database lookup per request. What is a risk of storing sensitive data directly in the JWT payload?",
    options: [
      'JWT payloads cannot store numeric IDs',
      'JWT payloads are only base64-encoded, not encrypted — anyone who intercepts the token can read the payload',
      'The user ID will expire along with the token',
      'JWTs cannot be verified if the payload contains a user ID'
    ],
    correctOption: 1,
    explanation: 'The JWT payload is <strong>base64url-encoded, which is easily decoded — not encrypted</strong>. Anyone who obtains the token (e.g., through network interception or browser storage access) can read the payload contents. Never store secrets (passwords, SSNs, credit card numbers) in a JWT payload. User IDs are generally fine, but sensitive PII should not be included.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A developer migrates from session-based to token-based auth but needs to implement a 'revoke all sessions' feature (e.g., when a user reports a stolen device). Which limitation makes this harder with pure JWT tokens?",
    options: [
      'JWTs cannot carry user identity information',
      'JWTs are stateless — there is no central list to update; a token remains valid until it naturally expires',
      'JWT tokens are stored in the server database and cannot be deleted',
      'bcryptjs must be reinstalled when switching to tokens'
    ],
    correctOption: 1,
    explanation: "The statelessness of JWTs is a double-edged sword. While it enables scalability, it means <strong>there's no built-in revocation mechanism</strong>. Once issued, a JWT is valid until expiry. To revoke tokens, you'd need a token blacklist (which reintroduces server-side state). Sessions, by contrast, can be destroyed on the server immediately. This is a real trade-off to consider."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A developer builds an API for a mobile app. Sessions rely on cookies, but mobile apps don't handle cookies the way browsers do. Which auth method is typically preferred for mobile APIs?",
    options: [
      'Basic authentication, since mobile apps handle repeated credential sending well',
      'Session authentication with cookie-based storage',
      'Token-based authentication (JWT), since tokens can be stored in app memory and sent in Authorization headers',
      'No authentication is needed for mobile apps'
    ],
    correctOption: 2,
    explanation: '<strong>Token-based authentication is the standard choice for mobile APIs</strong>. Mobile apps can store tokens in secure app storage and include them in Authorization headers (Bearer token pattern), which is a clean, cookie-free approach. Cookies are a browser concept and awkward for native mobile apps. Basic auth is insecure. Sessions work but require cookie management libraries.'
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A student's app works perfectly on their local machine but fails on Render with a database connection error. The connection string in their code points to 'mongodb://localhost:27017/mydb'. What is wrong?",
    options: [
      "Render doesn't support MongoDB",
      "localhost on a cloud server refers to the cloud server itself, not the student's computer — the local MongoDB is unreachable",
      'The MongoDB port 27017 must be changed to 443 for cloud use',
      'The .gitignore file blocked the database from deploying'
    ],
    correctOption: 1,
    explanation: "When code runs on Render, <strong>'localhost' means Render's server, not your laptop</strong>. Your local MongoDB instance on your personal machine is not accessible from the internet. The solution is to use a cloud-hosted database like MongoDB Atlas, which provides a public connection string (mongodb+srv://...) accessible from any server."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A security audit finds that an Express app's session secret is set to 'secret'. What should the developer change it to, and why?",
    options: [
      "Change it to 'super-secret' for clarity",
      'Change it to a long, randomly generated string — short or obvious secrets can be brute-forced or guessed',
      "Change it to the user's password for personalisation",
      'Set it to an empty string to disable signing'
    ],
    correctOption: 1,
    explanation: "The session secret is used to sign session ID cookies. A <strong>weak, guessable secret like 'secret' can be brute-forced</strong>, allowing attackers to forge valid session IDs and impersonate users. The secret should be a long, cryptographically random string (e.g., generated with crypto.randomBytes(64).toString('hex')). Treat it like a password and store it in an environment variable."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: "A developer sets a JWT expiry to 1 year. A user's account is disabled by an admin. What happens when the user's 1-year token is used 6 months later?",
    options: [
      'The token is rejected because the user is disabled',
      "The token is accepted — unless a revocation mechanism exists, the server can't know the account was disabled",
      'The JWT automatically refreshes and contacts the auth server',
      'bcryptjs prevents disabled accounts from using tokens'
    ],
    correctOption: 1,
    explanation: "This is a critical JWT limitation: <strong>without additional server-side checks, a valid unexpired JWT will be accepted even if the account was disabled</strong>. The token's validity is mathematical — it doesn't consult the database. To handle this, developers add a database check on sensitive routes, use short-lived tokens, or maintain a token blacklist. Long-lived JWTs make account management much harder."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: 'Which of the following is NOT a common use case for session storage?',
    options: [
      "Storing the currently logged-in user's ID",
      'Storing items in a shopping cart',
      "Storing the user's language preference during their visit",
      'Storing the complete history of all past orders for all users'
    ],
    correctOption: 3,
    explanation: "Sessions are <strong>temporary, per-user storage</strong>. They're great for transient data like current user ID, cart contents, or current session preferences. Storing the complete order history for all users in a session is wrong for two reasons: sessions are per-user (not global), and order history is permanent data that belongs in a database, not temporary session storage."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: 'A developer writes: const PORT = process.env.PORT || 3000; — Why is the || 3000 part important?',
    options: [
      'It forces the app to always use port 3000',
      'It sets a fallback so the app still runs locally when no environment variable is set',
      'It tells Render to assign port 3000',
      'It configures MongoDB to connect on port 3000'
    ],
    correctOption: 1,
    explanation: "The <strong>|| 3000 is a fallback for local development</strong>. In production (Render), process.env.PORT is set by the platform. But on a developer's laptop, that environment variable doesn't exist, so process.env.PORT is undefined. The || 3000 ensures the app falls back to port 3000 locally. Without it, PORT would be undefined and the app would fail to start."
  },
  {
    quizTitle: 'User Authentication in Express.js',
    category: 'Scenarios & Edge Cases',
    question: 'A team member accidentally commits a .env file containing the JWT secret to a public GitHub repository. Even though they delete the file in the next commit, what should they do?',
    options: [
      'Nothing — deleting the file removes all traces from GitHub',
      'They must immediately rotate (regenerate) the secret, because Git history preserves the old commit',
      'They should set the .gitignore and re-push the same secret',
      'They should switch from JWT to basic auth since the secret is compromised'
    ],
    correctOption: 1,
    explanation: 'Git history is <strong>permanent and public</strong>. Even if a file is deleted in a later commit, the old commit (containing the secret) is still accessible in history. Anyone who scraped or viewed the repo can still have the secret. The only correct response is to <strong>immediately invalidate and rotate the secret</strong> — generate a new one and redeploy. Assume the old secret is fully compromised.'
  }
];

