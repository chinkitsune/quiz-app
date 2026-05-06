// data/questions/web-expressjs-mongodb-with-mongoose.js

module.exports = 
[
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'DBMS Fundamentals',
    question: 'A hospital stores patient records in spreadsheets on individual computers. The IT team proposes replacing this with a DBMS. What is the primary role a DBMS plays that the spreadsheets lack?',
    options: [
      'Converting data into JSON format automatically',
      'Handling storage, retrieval, and updating of data through a managed system',
      'Generating HTML pages from the patient data',
      'Compressing data into smaller file sizes'
    ],
    correctOption: 1,
    explanation: 'A <strong>DBMS (Database Management System)</strong> is software that handles the storage, retrieval, and updating of data in a structured, reliable way. Spreadsheets are just files — they have no query engine, no concurrent access management, no built-in relationships, and no reliability guarantees. MongoDB, MySQL, and PostgreSQL are all examples of DBMSs.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'DBMS Fundamentals',
    question: "A developer refers to their 'MongoDB database' during a code review. Technically, what do they mean by this?",
    options: [
      'The raw JSON files stored on disk',
      "An organized collection of data managed through MongoDB's DBMS software",
      'A single document containing all app data',
      'The Mongoose schema definitions in their project'
    ],
    correctOption: 1,
    explanation: "When developers say 'database,' they typically mean <strong>data that is managed through a DBMS</strong>. The database itself is the organized collection of data; the DBMS (MongoDB in this case) is the software managing it. The two concepts are distinct but are commonly referred to together."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'DBMS Fundamentals',
    question: 'Which of the following is NOT listed as an example of a DBMS?',
    options: [ 'MongoDB', 'PostgreSQL', 'Mongoose', 'MySQL' ],
    correctOption: 2,
    explanation: '<strong>Mongoose is not a DBMS</strong> — it is an ODM (Object Data Modeling) library that sits on top of MongoDB to make working with it easier from Node.js. MongoDB, MySQL, and PostgreSQL are all actual database management systems. Mongoose depends on MongoDB; it does not manage the database itself.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'NoSQL vs. Relational Databases',
    question: 'A startup is building a product catalog where each product can have completely different attributes — some have colours, some have sizes, some have warranties. Which database type is naturally a better fit and why?',
    options: [
      'Relational (SQL), because tables enforce consistency across all products',
      'NoSQL, because it allows non-structured data where each document can have different fields',
      'Relational (SQL), because products are always structured the same way',
      'NoSQL, because it requires table normalization for product categories'
    ],
    correctOption: 1,
    explanation: '<strong>NoSQL databases allow non-structured data</strong>, meaning each document in a collection can have a different set of fields. A product catalog where items vary widely in attributes is a perfect fit. A relational database would require adding nullable columns for every possible attribute across all rows — messy and inflexible.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'NoSQL vs. Relational Databases',
    question: "A relational database represents a user with columns: name, email, role. A NoSQL document database represents the same user as: { name: 'Ada', email: 'ada@dev.io', role: 'admin' }. What advantage does the NoSQL format offer to developers?",
    options: [
      'NoSQL is always faster than SQL',
      'The data structure matches the objects developers already use in JavaScript code',
      'NoSQL supports more complex JOIN operations',
      'NoSQL enforces stricter data types than SQL'
    ],
    correctOption: 1,
    explanation: "One of NoSQL's key advantages is that <strong>data looks like what you use in code</strong>. In JavaScript/Node.js, data is naturally represented as objects and arrays — which maps directly to JSON-like NoSQL documents. Developers don't need to map between rows/columns and objects, reducing cognitive overhead and boilerplate code."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'NoSQL vs. Relational Databases',
    question: 'What is the underlying storage format typically used by NoSQL databases like MongoDB?',
    options: [
      'XML',
      'CSV files',
      'JSON (or a binary variant of JSON)',
      'SQL binary logs'
    ],
    correctOption: 2,
    explanation: 'NoSQL databases like MongoDB use <strong>JSON (or BSON — Binary JSON) as the underlying storage format</strong>. This is why documents look like JavaScript objects. BSON extends JSON to include additional data types like Date and binary data, while still maintaining the familiar key-value structure of JSON.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'NoSQL vs. Relational Databases',
    question: 'A social media platform needs to store 10 billion posts and scale to millions of simultaneous users. Which database characteristic makes NoSQL preferable here?',
    options: [
      'NoSQL requires table normalization, which reduces storage',
      'NoSQL handles Big Data and is easier to scale horizontally',
      'SQL is designed specifically for big data',
      'NoSQL uses less RAM than SQL databases'
    ],
    correctOption: 1,
    explanation: "One of NoSQL's primary design goals is <strong>handling Big Data</strong>. NoSQL databases are typically designed for horizontal scaling (adding more servers), which suits massive datasets and high traffic. They trade strict relational consistency for scalability and flexibility — a trade-off that's often worth it at internet scale."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'NoSQL vs. Relational Databases',
    question: "A relational database has a 'Students' table with columns: Name, School, Employer, Occupation. Malia only has a School value; all other fields are null. How would MongoDB represent Malia's record differently?",
    options: [
      'MongoDB would still require all four fields but allow null values',
      "MongoDB would store a document with only the fields Malia has — { name: 'Malia', school: 'Harvard' }",
      'MongoDB would store null for missing fields just like SQL',
      'MongoDB cannot store records with missing fields'
    ],
    correctOption: 1,
    explanation: "In MongoDB, <strong>each document only needs to contain the fields it actually has</strong>. Malia's document would simply be { name: 'Malia', school: 'Harvard' } — no null columns for missing data. In a relational DB, every row must have a value (or null) for every column in the table, even if that data doesn't apply."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Concepts',
    question: "In a MongoDB setup for a library app, the developer creates a structure with: the app itself, a group called 'books', and individual records for each book. Map these to MongoDB's three-level hierarchy.",
    options: [
      'Document → Collection → Database',
      'Database → Document → Collection',
      'Database → Collection → Document',
      'Collection → Database → Document'
    ],
    correctOption: 2,
    explanation: "MongoDB organizes data in three levels: a <strong>Database</strong> is the top-level container (the library app), a <strong>Collection</strong> is a group of related documents (the 'books' group — analogous to a SQL table), and a <strong>Document</strong> is an individual record (a single book — analogous to a SQL row). The hierarchy is Database → Collection → Document."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Concepts',
    question: 'What is the closest relational database equivalent to a MongoDB Collection?',
    options: [ 'A row', 'A column', 'A table', 'A foreign key' ],
    correctOption: 2,
    explanation: "A MongoDB <strong>Collection</strong> is equivalent to a <strong>table</strong> in a relational database — it's a group of MongoDB documents (records). The distinction is that a collection doesn't enforce a fixed schema like a SQL table does. Documents within a collection can have different fields."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Concepts',
    question: 'What is the closest relational database equivalent to a MongoDB Document?',
    options: [ 'A table', 'A row (record)', 'A column', 'A database schema' ],
    correctOption: 1,
    explanation: 'A MongoDB <strong>Document</strong> is equivalent to a <strong>row</strong> (or record) in a relational database. It represents one instance within a collection. A document is a JSON-like object containing key-value pairs representing the attributes of that particular entity.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Concepts',
    question: 'A developer uses MongoDB Compass for the first time. What kind of tool is Compass?',
    options: [
      'A command-line query language',
      'A Node.js library for connecting to MongoDB',
      'A graphical user interface (GUI) for interacting with MongoDB',
      'A cloud hosting service for MongoDB databases'
    ],
    correctOption: 2,
    explanation: 'MongoDB <strong>Compass is a GUI (Graphical User Interface)</strong> that allows developers to visually explore, query, and manage their MongoDB databases without writing command-line commands. MongoDB also supports a shell interface for command-line interaction. Both achieve the same goal — Compass just provides a visual way to do it.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Atlas',
    question: "A freelance developer wants to deploy a Node.js app to a cloud server but doesn't want to manage database backups, patches, or server maintenance. Which option best addresses this?",
    options: [
      'Running MongoDB on their laptop and exposing it to the internet',
      'Using MongoDB Atlas, a fully-managed cloud database service',
      'Installing MongoDB on the cloud server and managing it manually',
      'Using a local SQLite database file'
    ],
    correctOption: 1,
    explanation: "<strong>MongoDB Atlas is a fully-managed cloud database service</strong> provided by MongoDB, Inc. 'Fully-managed' means backups, patching, and monitoring are handled automatically — you don't manage the server. This is ideal for developers who want to focus on building their app rather than infrastructure operations."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Atlas',
    question: 'A student wants to try MongoDB Atlas for a class project at no cost. What does the free tier of Atlas provide?',
    options: [
      'Unlimited storage with a 10-user cap',
      '512 MB of storage with no time limit',
      '1 GB storage free for 30 days only',
      '100 MB storage with no scaling option'
    ],
    correctOption: 1,
    explanation: 'MongoDB Atlas offers a <strong>free tier with 512 MB of storage</strong>. This is sufficient for class projects, prototypes, and small applications. The free tier has no expiry date, making it suitable for learning and development without ongoing cost.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Atlas',
    question: "A company's compliance team requires that all customer data remain within a specific country due to privacy regulations. Which MongoDB deployment option better satisfies this requirement?",
    options: [
      'MongoDB Atlas, because it has global clusters',
      'A local MongoDB installation, because it gives full control over where data is stored',
      'MongoDB Atlas free tier, because it automatically complies with GDPR',
      'MongoDB Compass, because it stores data locally'
    ],
    correctOption: 1,
    explanation: 'For <strong>sensitive data that cannot leave a specific infrastructure</strong>, a local MongoDB installation gives full control over where data physically resides. While Atlas offers geographic region selection, highly regulated industries sometimes require on-premises deployments to guarantee data residency. Local installations are better for complete data sovereignty.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Atlas',
    question: "A developer's Express app is deployed to a cloud server and uses Atlas as its database. One day, the cloud server's internet connection is disrupted. What happens to the app's ability to read data?",
    options: [
      'Atlas caches data locally on the app server so reads still work',
      'The app cannot read data because Atlas requires an internet connection',
      'The app automatically falls back to a local MongoDB instance',
      'MongoDB Atlas routes traffic through an offline backup'
    ],
    correctOption: 1,
    explanation: "MongoDB Atlas is a <strong>cloud database that requires internet connectivity</strong>. If the internet connection is disrupted, the app server cannot reach Atlas, and database operations fail. This is a key trade-off compared to local MongoDB, which 'works offline' with no internet dependency. Cloud availability is a critical factor to consider."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'MongoDB Atlas',
    question: 'Which of the following is an advantage of MongoDB Atlas over a locally-run MongoDB server?',
    options: [
      'Atlas is cheaper because you manage your own hardware',
      'Atlas provides built-in redundancy with data replicated across multiple nodes by default',
      'Atlas stores data in SQL format for better compatibility',
      'Atlas works without any internet connection'
    ],
    correctOption: 1,
    explanation: 'Atlas provides <strong>built-in redundancy</strong> — data is automatically replicated across multiple nodes by default. This means if one server fails, your data is still accessible from replicas. A local MongoDB setup has no automatic replication unless you configure it yourself, which is complex and time-consuming.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: "A developer installs 'mongoose' in their Node.js project. What category of software is Mongoose?",
    options: [
      'A database management system',
      'An ODM (Object Data Modeling) library for MongoDB and Node.js',
      'A REST API framework built on top of Express',
      'A cloud hosting platform for MongoDB'
    ],
    correctOption: 1,
    explanation: '<strong>Mongoose is an ODM — Object Data Modeling library</strong> for MongoDB and Node.js. An ODM maps database documents to JavaScript objects and provides a layer of abstraction with schemas, validation, and helper methods. It sits between your Node.js application and the MongoDB database, making database interactions more structured and predictable.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: 'What npm command installs Mongoose in a Node.js project and saves it as a dependency?',
    options: [
      'npm install mongoose',
      'npm add mongoose --dev',
      'npm install --save mongoose',
      'npm get mongoose'
    ],
    correctOption: 2,
    explanation: "The correct command is <strong>npm install --save mongoose</strong>. The --save flag adds it to the dependencies section of package.json (though in modern npm versions, --save is the default). This ensures that anyone who clones the project and runs 'npm install' will also get Mongoose installed."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: "A developer creates a Mongoose schema for a Recipe with a required 'title' field (String) and optional 'servings' field (Number). What does the schema primarily enforce?",
    options: [
      'The physical storage format of the MongoDB collection',
      'The shape and validation rules for documents stored in a collection',
      'The number of documents allowed in the collection',
      'The connection settings for Atlas'
    ],
    correctOption: 1,
    explanation: 'A <strong>Mongoose schema defines the shape and validation rules</strong> for documents in a collection. It specifies field names, types (String, Number, Date, etc.), and constraints like required. Even though MongoDB itself is schema-less, Mongoose imposes structure at the application layer before data reaches the database.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: "A developer writes: const Recipe = mongoose.model('Recipe', recipeSchema); What does Mongoose do with the model name 'Recipe' when creating the MongoDB collection?",
    options: [
      "It creates a collection named exactly 'Recipe'",
      "It auto-pluralizes it and creates a collection named 'recipes'",
      'It uses the schema name instead of the model name',
      'It requires you to manually create the collection in MongoDB first'
    ],
    correctOption: 1,
    explanation: "Mongoose <strong>automatically pluralizes the model name</strong> to create the MongoDB collection name. So a model named 'Recipe' maps to a collection called 'recipes', 'Student' maps to 'students', and 'Item' maps to 'items'. This is a Mongoose convention — be aware of it to avoid confusion when inspecting collections directly in Compass or Atlas."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: 'A Mongoose schema field is defined as: { type: String, required: true }. A developer tries to save a document without that field. What happens?',
    options: [
      'Mongoose saves the document with null for that field',
      'Mongoose throws a validation error and rejects the save',
      'MongoDB ignores the validation and saves anyway',
      'The field is given a random default string value'
    ],
    correctOption: 1,
    explanation: 'When a field is marked <strong>required: true in a Mongoose schema</strong>, attempting to save a document without it triggers a Mongoose <strong>ValidationError</strong>, and the save is rejected. This validation happens at the application layer (in Mongoose) before any data is sent to MongoDB — protecting data integrity.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: "Why is a Mongoose model described as 'an abstraction of the MongoDB collection'?",
    options: [
      'Because it creates a copy of the collection in memory for faster access',
      'Because it provides a JavaScript class with methods to interact with the collection, hiding low-level database details',
      'Because it replaces MongoDB entirely with in-memory storage',
      'Because it stores the collection name and nothing else'
    ],
    correctOption: 1,
    explanation: "A Mongoose model is an <strong>abstraction</strong> — it wraps the MongoDB collection in a JavaScript class that provides methods like .find(), .save(), .deleteOne() etc. Developers interact with the model in familiar JavaScript, and Mongoose handles translating those calls into MongoDB operations. The 'low-level details' of database communication are hidden."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mongoose & Schema Design',
    question: "After running: const Cat = mongoose.model('Cat', catSchema); — how would a developer create a new Cat document in their code?",
    options: [
      "mongoose.createDocument('Cat', { name: 'Whiskers' })",
      "new Cat({ name: 'Whiskers' }) then call .save()",
      "Cat.insert({ name: 'Whiskers' })",
      "db.cats.create({ name: 'Whiskers' })"
    ],
    correctOption: 1,
    explanation: "With Mongoose, you create a new document by instantiating the model class: <code>new Cat({ name: 'Whiskers' })</code>. This creates a JavaScript object with the schema's shape. You then call <code>.save()</code> on it to persist it to MongoDB. The model constructor + .save() is the standard Mongoose pattern for creating new documents."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Connecting Express to MongoDB',
    question: "A developer writes: mongoose.connect('mongodb+srv://user:pass@cluster.mongodb.net/myapp'). What does the .then() chained after this do?",
    options: [
      'It defines the database schema',
      'It runs after a successful connection and can log a confirmation message',
      'It retries the connection if it fails',
      'It defines what port Express listens on'
    ],
    correctOption: 1,
    explanation: "<strong>mongoose.connect() returns a Promise</strong>. Chaining .then() allows you to run code after a successful connection — typically logging 'MongoDB Connected' to confirm the app is ready. Chaining .catch() handles connection errors (wrong URL, network issues, bad credentials). This is the standard async pattern for MongoDB connection setup."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Connecting Express to MongoDB',
    question: "A developer's Express app connects to MongoDB but the connection string contains a real password. They push this file to GitHub. What is the immediate risk?",
    options: [
      'GitHub will automatically encrypt the connection string',
      'Anyone who views the repository can use the credentials to access or destroy the database',
      'The password is hashed by Git before storage',
      'MongoDB Atlas will block connections from unknown IP addresses automatically'
    ],
    correctOption: 1,
    explanation: 'A connection string with credentials <strong>pushed to a public GitHub repo is a critical security vulnerability</strong>. Bots continuously scrape GitHub for exposed credentials. Atlas IP allowlisting helps but is not a guarantee. The correct approach is to store connection strings in environment variables (.env files, excluded via .gitignore) and never commit them to source control.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Connecting Express to MongoDB',
    question: 'Where in a typical Express.js project should the mongoose.connect() call be placed?',
    options: [
      'Inside each route handler, before every database query',
      'Once in the main server file (e.g., server.js or app.js), before defining routes',
      'In a separate file that is never required/imported',
      'Inside the Mongoose schema definition file'
    ],
    correctOption: 1,
    explanation: 'The <strong>mongoose.connect() call should appear once in the main server file</strong> (server.js or app.js), before the routes are registered. This establishes the connection when the server starts. You only need one connection for the whole app — making the call inside every route would be inefficient and could exhaust the connection pool.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Connecting Express to MongoDB',
    question: 'After calling mongoose.connect(), a developer immediately tries to query the database in the same synchronous code block. The query fails. Why?',
    options: [
      'mongoose.connect() is synchronous and should always work immediately',
      'mongoose.connect() is asynchronous — the connection may not yet be established when the query runs',
      "MongoDB requires a second call to 'open' the connection",
      'The schema must be defined before connecting'
    ],
    correctOption: 1,
    explanation: "<strong>mongoose.connect() is asynchronous</strong> — it initiates a connection but doesn't block. If you try to query the database immediately in synchronous code after calling connect(), the connection may not yet be ready. Database operations should be placed in the .then() callback or in async functions using await, ensuring the connection is established first."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: "A developer needs to find all employees in a 'Staff' collection who have a salary greater than 50000. Which Mongoose method and query operator should they use?",
    options: [
      'Staff.findOne({ salary: 50000 })',
      'Staff.find({ salary: { $gte: 50000 } })',
      'Staff.findById({ salary: 50000 })',
      'Staff.findAll({ salary: { $gt: 50000 } })'
    ],
    correctOption: 1,
    explanation: "<strong>Model.find()</strong> retrieves all documents matching the condition. The <strong>$gte operator</strong> means 'greater than or equal to'. So <code>Staff.find({ salary: { $gte: 50000 } })</code> returns all staff with salary ≥ 50000. <code>findOne()</code> returns only the first match. <code>findAll()</code> doesn't exist in Mongoose. <code>findById()</code> takes an ID, not a query."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: "A developer wants to find the first product whose name contains the word 'wireless' (case-insensitive). Which method and approach is correct?",
    options: [
      "Product.find({ name: 'wireless' })",
      "Product.findOne({ name: new RegExp('wireless', 'i') })",
      "Product.findById({ name: 'wireless' })",
      "Product.search({ name: 'wireless' })"
    ],
    correctOption: 1,
    explanation: "<strong>Model.findOne()</strong> returns only the first document matching the condition. To do a case-insensitive partial match, a <strong>regular expression</strong> is used: <code>new RegExp('wireless', 'i')</code>. The 'i' flag makes it case-insensitive. findOne() vs find() is the key distinction here — we only want one result, not all matches."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'A developer has a specific MongoDB ObjectId string for a user record. What is the most direct Mongoose method to retrieve that document?',
    options: [
      'User.find({ _id: id })',
      'User.findOne({ _id: id })',
      'User.findById(id)',
      'User.getById(id)'
    ],
    correctOption: 2,
    explanation: "<strong>Model.findById(id)</strong> is specifically designed to query by MongoDB's _id field. While <code>find({ _id: id })</code> and <code>findOne({ _id: id })</code> would also work, <code>findById()</code> is the cleanest, most readable choice for this common operation. It returns null if no document has that ID."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'findOne() returns null for a query. What does this mean, and how should a developer handle it?',
    options: [
      'It means the database is offline',
      'It means no document matched the condition — the developer should check for null before using the result',
      'It means the schema validation failed',
      "It means multiple documents matched and Mongoose couldn't choose one"
    ],
    correctOption: 1,
    explanation: "When <strong>findOne() returns null, it simply means no document matched the query</strong> — not an error. Developers must check: <code>if (stu === null) { console.log('No student found'); }</code>. Trying to access properties on null (e.g., <code>result.name</code>) would throw a TypeError. Always handle the null case explicitly."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: "A developer calls: await Course.updateOne({ title: 'Intro to JS' }, { credits: 4 }). What does the result.modifiedCount property tell them?",
    options: [
      'The total number of documents in the collection',
      'How many documents were found matching the query',
      'How many documents were actually modified by the update',
      'The number of fields changed in the matched document'
    ],
    correctOption: 2,
    explanation: '<strong>result.modifiedCount</strong> tells you how many documents were <strong>actually changed</strong> by the update operation. This can differ from the number matched — for example, if the document already had credits: 4, it would match but not be modified (modifiedCount = 0). This distinction helps with debugging and confirming whether changes actually took effect.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'A developer wants to give every student with a GPA below 2.0 a 0.3 GPA increase. Which Mongoose method and operator combination achieves this?',
    options: [
      'Student.updateOne({ gpa: { $lt: 2.0 } }, { $inc: { gpa: 0.3 } })',
      'Student.updateMany({ gpa: { $lt: 2.0 } }, { $inc: { gpa: 0.3 } })',
      'Student.updateAll({ gpa: { $lte: 2.0 } }, { gpa: 0.3 })',
      'Student.update({ gpa: 0.3 }) where gpa < 2.0'
    ],
    correctOption: 1,
    explanation: "<strong>Model.updateMany()</strong> updates all matching documents. The <strong>$lt operator</strong> means 'less than'. The <strong>$inc operator</strong> increments a field's value by the specified amount — it does not replace the value. So <code>{ $inc: { gpa: 0.3 } }</code> adds 0.3 to the existing GPA rather than setting GPA to 0.3. updateOne() would only update the first match."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'What is the difference between Model.updateOne() and Model.updateMany() in Mongoose?',
    options: [
      'updateOne() updates all fields; updateMany() updates only one field',
      'updateOne() modifies the first matching document; updateMany() modifies all matching documents',
      'updateMany() is faster than updateOne() for single documents',
      "They are identical — 'One' and 'Many' are aliases"
    ],
    correctOption: 1,
    explanation: '<strong>updateOne()</strong> finds the first document matching the condition and updates only that document. <strong>updateMany()</strong> finds all documents matching the condition and updates all of them. Using the wrong one can lead to under-updating (using updateOne when you need updateMany) or accidentally bulk-updating when you only intended to update one record.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'A developer calls: await Order.deleteOne({ _id: orderId }). What does result.deletedCount tell them?',
    options: [
      'The number of collections deleted',
      'The number of fields removed from the document',
      'How many documents were deleted (0 if none matched, 1 if matched and deleted)',
      'The ID of the deleted document'
    ],
    correctOption: 2,
    explanation: '<strong>result.deletedCount</strong> reports how many documents were actually deleted. For deleteOne(), it will be either <strong>0</strong> (no document matched the condition) or <strong>1</strong> (one document was found and deleted). This is useful for confirming whether the delete actually happened — for example, detecting when a non-existent ID was passed.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'A developer wants to remove all inventory items where the quantity field is 0. Which Mongoose method is appropriate?',
    options: [
      'Item.deleteOne({ quantity: 0 })',
      'Item.remove({ quantity: { $equestion: 0 } })',
      'Item.deleteMany({ quantity: 0 })',
      'Item.drop({ quantity: 0 })'
    ],
    correctOption: 2,
    explanation: '<strong>Model.deleteMany()</strong> deletes all documents that match the given condition. Since we want to delete all items with quantity 0 (potentially many documents), deleteMany() is correct. deleteOne() would only remove the first match. <code>remove()</code> and <code>drop()</code> are not the standard modern Mongoose API methods.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'Which Mongoose query operator would you use to find all products where the price is less than or equal to 25?',
    options: [
      '{ price: { $lt: 25 } }',
      '{ price: { $lte: 25 } }',
      '{ price: { $gte: 25 } }',
      '{ price: { $ne: 25 } }'
    ],
    correctOption: 1,
    explanation: "<strong>$lte means 'less than or equal to'</strong>. So <code>{ price: { $lte: 25 } }</code> matches all documents where price ≤ 25. <code>$lt</code> is strictly less than (excludes 25). <code>$gte</code> is 'greater than or equal to'. <code>$ne</code> is 'not equal to'. These MongoDB comparison operators are essential for filtering documents."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'CRUD Operations with Mongoose',
    question: 'A developer uses $inc in an updateMany() call instead of just setting the field directly. Why would they choose $inc?',
    options: [
      '$inc sets the field to a fixed value',
      '$inc increments (adds to) the existing value, preserving prior data rather than replacing it',
      '$inc is faster than setting a value directly',
      '$inc works only with string fields'
    ],
    correctOption: 1,
    explanation: "<strong>$inc adds a value to the existing field value</strong> rather than replacing it. For example, <code>{ $inc: { views: 1 } }</code> adds 1 to whatever the current 'views' count is. Setting <code>{ views: 1 }</code> directly would reset all documents' views to 1, regardless of their prior count. $inc is the correct operator for accumulations, counters, and adjustments."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Express Router',
    question: "A developer's server.js file has grown to 600 lines with routes for users, products, orders, and reviews all mixed together. What does Express Router help solve?",
    options: [
      'It automatically generates routes from Mongoose models',
      'It allows splitting routes into separate focused files rather than one large file',
      'It speeds up route response times',
      'It replaces the need for middleware in Express'
    ],
    correctOption: 1,
    explanation: "The <strong>Express Router</strong> allows you to organize routes into separate files, each responsible for one feature. Instead of one massive server.js, you'd have userRoutes.js, productRoutes.js, etc. Each file uses express.Router() to define its routes and exports the router. This improves maintainability, readability, and separation of concerns."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Express Router',
    question: 'A developer creates a router file for product routes. What is the first step inside that file before defining any routes?',
    options: [
      "app.use('/products', ...)",
      'const router = express.Router();',
      'module.exports = router;',
      "require('./server.js')"
    ],
    correctOption: 1,
    explanation: 'The first step is to create a router instance: <strong><code>const router = express.Router();</code></strong>. This gives you a mini Express application that can have its own routes. You then define routes using <code>router.get()</code>, <code>router.post()</code>, etc. — just like you would with <code>app.get()</code> on the main Express app.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Express Router',
    question: 'After defining routes in itemRoutes.js and exporting the router, how does the developer make those routes active in server.js?',
    options: [
      'By importing the file with require() only — the routes activate automatically',
      "By calling app.use('/items', itemRoutes) — attaching the router with a base path",
      'By defining all routes again in server.js as well',
      'By calling itemRoutes.start() in server.js'
    ],
    correctOption: 1,
    explanation: "After requiring the router file, it must be <strong>attached using app.use(basePath, routerFile)</strong>. For example: <code>app.use('/items', itemRoutes)</code> mounts all routes in itemRoutes.js under the '/items' prefix. A route defined as <code>router.get('/new', ...)</code> in itemRoutes.js would then be accessible at '/items/new' in the browser."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Express Router',
    question: "A router file defines: router.get('/details', ...). The router is mounted in server.js with: app.use('/products', productRoutes). What is the full URL path to reach the /details route?",
    options: [
      '/details',
      '/productRoutes/details',
      '/products/details',
      '/router/products/details'
    ],
    correctOption: 2,
    explanation: "When a router is mounted with <code>app.use('/products', productRoutes)</code>, <strong>the mount path is prepended to all routes in that router</strong>. A route defined as <code>router.get('/details', ...)</code> becomes accessible at <strong>/products/details</strong>. This prefix system is how Express Router keeps routes namespaced and organized."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Express Router',
    question: 'What is the purpose of module.exports = router at the end of a router file?',
    options: [
      'It starts the Express server on the defined routes',
      'It makes the router available to be imported (required) by other files like server.js',
      'It registers the router with MongoDB',
      'It saves the routes to a JSON configuration file'
    ],
    correctOption: 1,
    explanation: "<strong>module.exports = router</strong> exports the router object from the file, making it available when another file uses require('./routerFile'). Without this line, the router and its routes would be trapped inside the file and inaccessible to server.js. This is Node.js's module system — you must explicitly export what you want to share."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: "A developer calls: res.render('dashboard', { username: 'Ada', items: [...] }). What three things does Express do as a result?",
    options: [
      'Sends a JSON response, logs to console, and updates the database',
      'Looks in the views/ folder for dashboard.pug, compiles it to HTML, injects the data, and sends the HTML to the browser',
      "Creates a new route called 'dashboard', assigns it the data, and responds with XML",
      "Queries MongoDB for 'dashboard', converts results to HTML, and caches them"
    ],
    correctOption: 1,
    explanation: '<strong>res.render()</strong> triggers a multi-step process: (1) Express looks in the <strong>views/</strong> folder for the named template file (e.g., dashboard.pug), (2) the template engine <strong>compiles it to HTML</strong>, (3) the passed data object (<code>{ username, items }</code>) is <strong>injected</strong> into the template, and (4) the final HTML is <strong>sent to the browser</strong> as the response.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: 'Where does Express look for Pug template files by default?',
    options: [
      'A /templates folder in the project root',
      'The /public folder alongside static assets',
      'The /views folder',
      'A /partials folder'
    ],
    correctOption: 2,
    explanation: "By default, Express looks for template files in the <strong>/views folder</strong>. When you call <code>res.render('index', data)</code>, Express searches for <code>views/index.pug</code> (or whatever template engine extension is configured). This default can be changed with <code>app.set('views', customPath)</code>, but /views is the conventional location."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: 'A developer builds a form in a Pug template that submits data. Where in the Express app must they handle what happens with that submitted data?',
    options: [
      'In the Mongoose schema definition',
      'In a POST route handler that reads the form data from req.body',
      'In the mongoose.connect() callback',
      'In the res.render() call that sent the form'
    ],
    correctOption: 1,
    explanation: 'When a form is submitted (typically via HTTP POST), Express receives the data in <strong>req.body</strong> (available after using body-parsing middleware like express.urlencoded or express.json). A <strong>POST route handler</strong> must be defined to process this data — validating it, saving it to MongoDB, and sending back a response or redirect.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: 'A developer queries all Items from MongoDB and wants to display them in a Pug template. What is the correct call to pass those items to the view?',
    options: [
      'res.send(items)',
      'res.json({ items })',
      "res.render('items', { items })",
      "mongoose.render('items', items)"
    ],
    correctOption: 2,
    explanation: "<strong>res.render('templateName', dataObject)</strong> is the correct method for rendering a server-side template with data. The second argument is a plain JavaScript object whose properties become available as variables inside the Pug template. <code>res.send()</code> sends raw text/HTML. <code>res.json()</code> sends a JSON response — useful for APIs, not for server-rendered HTML pages."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: 'After setting up routes and views, a developer wants to test whether the /products route correctly returns all products from MongoDB. What tool is recommended for this?',
    options: [
      'MongoDB Compass — it tests HTTP routes directly',
      'Postman or a browser — used to send HTTP requests and inspect responses',
      'The mongoose.connect() shell — it has a built-in HTTP tester',
      'The package.json scripts section — it auto-tests routes on save'
    ],
    correctOption: 1,
    explanation: '<strong>Postman and a browser</strong> are the recommended tools for testing Express routes. A browser works well for GET routes. Postman allows testing GET, POST, PUT, DELETE requests with custom headers and body data — essential for testing routes that accept form submissions or JSON payloads. Compass inspects the database, not HTTP routes.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Views, Pug & Full-Stack Flow',
    question: 'What is the recommended order of the five main steps when building a full Express + MongoDB feature from scratch?',
    options: [
      'Define model → Connect to MongoDB → Set up project → Create routes → Create views',
      'Set up project → Install dependencies → Connect to MongoDB → Define model → Create routes and views',
      'Create routes → Install dependencies → Connect to MongoDB → Set up project → Define model',
      'Install dependencies → Create views → Connect to MongoDB → Define model → Set up project'
    ],
    correctOption: 1,
    explanation: "The logical order is: (1) <strong>Set up the project</strong>, (2) <strong>Install dependencies</strong> (mongoose, express, etc.), (3) <strong>Connect to MongoDB</strong>, (4) <strong>Define a Mongoose model</strong>, (5) <strong>Create Express routes and views</strong>. Each step depends on the previous one — you can't define routes before having a model, and you can't connect before installing mongoose."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: "A Mongoose model named 'Category' is created. A developer checks their MongoDB database and cannot find a 'Category' collection. What should they look for instead?",
    options: [
      'Categories — Mongoose lowercases and pluralizes the model name for the collection',
      'category — Mongoose only lowercases it',
      'CATEGORY — Mongoose uppercases collection names',
      "Category_collection — Mongoose appends '_collection'"
    ],
    correctOption: 0,
    explanation: "Mongoose <strong>automatically lowercases and pluralizes</strong> the model name to create the collection name. 'Category' → 'categories'. 'Person' → 'people'. 'Mouse' → 'mice'. This is the most common 'it's working but I can't find my data' confusion for Mongoose beginners. Always check the pluralized, lowercased name in Compass or Atlas."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: 'A developer needs to find all orders where the total is between $20 and $100 inclusive. Which query achieves this?',
    options: [
      'Order.find({ total: { $gt: 20, $lt: 100 } })',
      'Order.find({ total: { $gte: 20, $lte: 100 } })',
      'Order.findOne({ total: 20, total: 100 })',
      'Order.find({ total: 20 }).and({ total: 100 })'
    ],
    correctOption: 1,
    explanation: 'MongoDB allows <strong>multiple operators on the same field</strong> in one query object. <code>{ total: { $gte: 20, $lte: 100 } }</code> finds all documents where total ≥ 20 AND total ≤ 100. Using $gt and $lt would exclude 20 and 100 themselves. This combined operator approach is a common pattern for range queries.'
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: "A developer defines a Mongoose schema with: { score: { type: Number } } — no 'required' flag. A user submits a form without entering a score. What happens?",
    options: [
      'Mongoose throws a validation error because all Number fields are implicitly required',
      "The document is saved without the score field — it simply won't have that property",
      'The score defaults to 0 automatically',
      'MongoDB rejects the document because it lacks the score field'
    ],
    correctOption: 1,
    explanation: "Without the <strong>required: true</strong> constraint, a Mongoose schema field is <strong>optional</strong>. The document will be saved successfully without that field — it simply won't have a 'score' property. Only fields marked required: true will cause a validation error when missing. MongoDB itself has no schema enforcement; Mongoose provides this layer."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: 'Express has routes defined for GET /items (list all) and GET /items/new (show a form). A request to GET /items/new triggers the /items route instead of /items/new. What is the likely cause?',
    options: [
      "MongoDB returned no results for 'new'",
      "The /items route is defined before /items/new — Express matches routes in order and '/items' may be catching '/items/new' first",
      'The router file was not exported correctly',
      "Mongoose pluralized 'new' to 'news'"
    ],
    correctOption: 1,
    explanation: "<strong>Express matches routes in the order they are defined</strong>. If <code>GET /items/:id</code> (a dynamic segment) is defined before <code>GET /items/new</code>, Express interprets 'new' as the :id parameter and triggers the wrong handler. The fix is to define specific static routes (like /items/new) before dynamic routes (like /items/:id). Route order matters."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: "A developer uses updateMany() to set { active: false } for all users who haven't logged in for 90 days. result.modifiedCount returns 0 even though there are 50 such users in the database. What is the most likely reason?",
    options: [
      'updateMany() can only modify up to 10 documents at a time',
      "The query condition doesn't match any documents — the field name or logic may be wrong",
      'Mongoose requires a session to be active for bulk updates',
      'MongoDB Atlas limits updateMany to premium accounts only'
    ],
    correctOption: 1,
    explanation: "A <strong>modifiedCount of 0</strong> when you expect matches means the <strong>query condition matched nothing</strong>. Common causes: the field name is misspelled, the date logic is wrong (off-by-one, wrong date format), or the data in the collection doesn't actually match the condition. The developer should first run a .find() with the same condition to verify what it matches before updating."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: 'A developer wants to delete a product by its MongoDB _id, passed from a route parameter (req.params.id). Which Mongoose call is correct?',
    options: [
      'Product.deleteOne({ id: req.params.id })',
      'Product.deleteOne({ _id: req.params.id })',
      'Product.remove(req.params.id)',
      'Product.findById(req.params.id).delete()'
    ],
    correctOption: 1,
    explanation: "MongoDB's primary key field is always named <strong>_id</strong> (with an underscore). To delete by this field, use <code>Product.deleteOne({ _id: req.params.id })</code>. Using <code>{ id: ... }</code> (without the underscore) would look for a custom field named 'id' which likely doesn't exist. Mongoose also provides <code>findByIdAndDelete(id)</code> as a convenient shorthand."
  },
  {
    quizTitle: 'Express.js + MongoDB with Mongoose',
    category: 'Mixed Scenarios & Edge Cases',
    question: 'A team debates whether to use a local MongoDB installation or MongoDB Atlas for their production web app. Which scenario most strongly favors Atlas?',
    options: [
      'The app handles highly confidential government data that cannot leave local servers',
      'The team wants zero infrastructure management and needs automatic backups and global availability',
      'The team needs the lowest possible latency for local users',
      'The team has no internet connection in their office'
    ],
    correctOption: 1,
    explanation: 'MongoDB Atlas is ideal when a team wants <strong>zero infrastructure management</strong> — no servers to configure, no backups to schedule, no patches to apply. It also provides built-in redundancy and global cluster deployment. Local installations are better for data sovereignty or offline requirements. For most web startups and class projects, Atlas is the practical choice.'
  }
]

;