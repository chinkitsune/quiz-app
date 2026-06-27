// data/questions/java-jdbc.js

module.exports = [
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Principle",
    "question": "A TrafficLight class has a private int state field with a getter and setter. Every intersection controller in the city does: if (light.getState() == 0) { light.setState(1); } to advance the light. What is the core design problem?",
    "options": [
      "The state field should be public so controllers can access it faster.",
      "Business logic (when and how to advance the light) is scattered across all callers instead of being owned by the TrafficLight class itself.",
      "Getters and setters should never be used for int fields.",
      "The TrafficLight class needs to extend a parent class to fix this."
    ],
    "correctOption": 1,
    "explanation": "This violates the Ask Don't Tell principle. Instead of telling the object what value to set (setState), callers should ask the object to do something meaningful: light.advance(). The TrafficLight class should own the logic of what 'advancing' means. When multiple callers duplicate this logic, any change to the rule (e.g., adding a yellow state) requires updating every caller — a maintenance disaster."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Principle",
    "question": "Which of the following API designs best follows the Ask Don't Tell principle for a Thermostat class?",
    "options": [
      "thermostat.setTemperature(thermostat.getTemperature() + 1);",
      "thermostat.increaseTemperatureBy(1);",
      "thermostat.temperature++;",
      "int t = thermostat.getTemperature(); t++; thermostat.setTemperature(t);"
    ],
    "correctOption": 1,
    "explanation": "Ask Don't Tell means you ask an object to perform a meaningful action, not tell it what raw value to store. Options A, C, and D all extract the internal state and manipulate it externally — this is 'tell' style (procedural). increaseTemperatureBy(1) is 'ask' style — the Thermostat manages its own state, can enforce limits (max temp), and the caller doesn't need to know internal implementation."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Principle",
    "question": "A ShoppingCart class exposes getItemCount() and setItemCount(). A developer calls cart.setItemCount(cart.getItemCount() - 1) to remove an item. What is wrong with this approach compared to a cart.removeItem(item) method?",
    "options": [
      "Nothing — both approaches are equivalent in OOP.",
      "The setter approach is faster at runtime.",
      "The setter approach puts business logic in the caller; removeItem() encapsulates it in the class, enabling validation, event firing, or inventory checks.",
      "setItemCount() will throw an exception if called with a negative number."
    ],
    "correctOption": 2,
    "explanation": "Using get/set to perform what is really a business operation (removing an item) scatters the logic. Every caller must correctly calculate the new count. removeItem() encapsulates the operation: the class can check if the item exists, update inventory, fire a 'cart changed' event, or prevent count from going below zero — none of which is possible when you just setItemCount() from the outside."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Consistency",
    "question": "A FlightSeat class has only getters and setters. Five different parts of the booking system each implement their own 'is seat available?' logic using getIsBooked() and getSeatClass(). A new business rule is added: premium seats also require a loyalty status check. How many places in the code need to change?",
    "options": [
      "Only one — the FlightSeat class.",
      "Only two — the getter and setter.",
      "All five places that duplicated the availability logic.",
      "None — getters and setters automatically enforce business rules."
    ],
    "correctOption": 2,
    "explanation": "This is the consistency problem of the pure getter/setter approach. When business logic is scattered across callers, every caller must be updated when a rule changes. If FlightSeat owned an isAvailableFor(Customer customer) method, only one place would need updating. This is exactly why relying on raw get/set without encapsulating business logic leads to inconsistent, error-prone systems."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – vs Procedural",
    "question": "A developer argues: 'Getting the balance, checking it externally, then setting it is simpler and more transparent.' Which response best explains why this is more procedural than object-oriented?",
    "options": [
      "It is simpler — procedural and OO produce the same code quality.",
      "In OOP, objects are responsible for managing their own state and enforcing rules. Extracting state to manipulate externally removes that responsibility from the object and places it in callers, which is the procedural style.",
      "Procedural code cannot use classes, so the comparison is invalid.",
      "The difference only matters for large codebases."
    ],
    "correctOption": 1,
    "explanation": "The distinction between procedural and OO isn't whether you use classes — it's whether objects own their behaviour and state management. In procedural style, logic lives in procedures (callers) that manipulate data. In OO, objects own their data and expose meaningful operations. Using getters and setters to perform operations externally is procedural thinking dressed in class syntax."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Purpose",
    "question": "A project manager asks for a diagram that shows what the new hospital booking system will do for patients and nurses, without any technical implementation details. Which diagram type is most appropriate?",
    "options": [
      "UML Class Diagram — to show all the classes and their methods.",
      "UML Sequence Diagram — to show message flows between objects.",
      "UML Use Case Diagram — to show interactions between actors and system features.",
      "Entity-Relationship Diagram — to show database tables."
    ],
    "correctOption": 2,
    "explanation": "A Use Case Diagram focuses on what the system does from the perspective of its users, not how it does it. It shows actors (patients, nurses) and the use cases (book appointment, cancel booking, view records) they interact with. It is intentionally non-technical, making it ideal for communicating with stakeholders who don't need to understand implementation."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Purpose",
    "question": "A Use Case Diagram for an e-commerce platform shows 'Process Payment' as an oval. The diagram does NOT show whether payments are processed via Stripe, PayPal, or a bank transfer. Why is this correct?",
    "options": [
      "It is incorrect — implementation details must always be shown.",
      "It is correct — Use Case Diagrams describe what the system does, not how it is implemented.",
      "The oval shape means the implementation is unspecified because it uses an interface.",
      "Use Case Diagrams only show database operations."
    ],
    "correctOption": 1,
    "explanation": "The fundamental rule of Use Case Diagrams is that they capture functional requirements — what users can do with the system — not technical decisions about how those features are built. 'Process Payment' captures the need without committing to a payment provider. This abstraction allows the diagram to remain stable even as implementation decisions change."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Actors",
    "question": "In a university course registration system, which of the following is correctly identified as an actor?",
    "options": [
      "The student registration database.",
      "The login form on the web page.",
      "A Student who registers for courses and views their schedule.",
      "The Java class that validates prerequisites."
    ],
    "correctOption": 2,
    "explanation": "An actor in a Use Case Diagram is a user, system, or organization that interacts with the system from outside its boundary. A Student is a human user who initiates actions — a classic actor. The database, login form, and Java class are all internal implementation details (or infrastructure), not actors. Actors are shown as stick figures and sit outside the system boundary."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Actors",
    "question": "A gym management system interacts with both Members (who book classes) and an external PaymentGateway system (which processes fees automatically). How should both be represented in a Use Case Diagram?",
    "options": [
      "Only Member is an actor — PaymentGateway is a database.",
      "Both Member and PaymentGateway are actors, shown as stick figures.",
      "PaymentGateway should be shown as an oval use case.",
      "External systems cannot be actors in Use Case Diagrams."
    ],
    "correctOption": 1,
    "explanation": "Actors are not limited to human users — they include any external entity (user, system, or organization) that interacts with the system. PaymentGateway is an external system actor that the gym system communicates with. Both are represented as stick figures in UML. This is a crucial distinction: not all actors are people."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Use Cases",
    "question": "In a Use Case Diagram for a food delivery app, which of the following is correctly represented as a Use Case (oval)?",
    "options": [
      "Customer (the person who orders food).",
      "The MySQL database storing orders.",
      "Track Delivery (a feature the Customer uses).",
      "The DeliveryService class in the Java code."
    ],
    "correctOption": 2,
    "explanation": "Use Cases represent the functions or features the system provides to actors — they answer 'what can an actor DO with this system?' Track Delivery is a feature a Customer uses. It is shown as an oval inside the system boundary. Customer is an actor (stick figure). The database and Java class are implementation details that do not appear in Use Case Diagrams."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Notes",
    "question": "A Use Case Diagram for a banking app includes a note beside the 'Withdraw Cash' use case reading: 'Requires PIN verification before execution.' What type of note is this?",
    "options": [
      "Reference — it points to external documentation.",
      "Exception — it explains what happens when withdrawal fails.",
      "Precondition (Clarification) — it provides a required condition that must be met before the use case executes.",
      "Annotation — it explains how the actor interacts with the system."
    ],
    "correctOption": 2,
    "explanation": "A precondition is a condition that must be true before a use case can begin. 'Requires PIN verification before execution' is a precondition and falls under the Clarification category of notes in Use Case Diagrams. Notes provide additional context (preconditions, postconditions, constraints, exceptions) that would clutter the main diagram if shown inline."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Notes",
    "question": "A Use Case Diagram has a note beside 'Book Appointment': 'See SRS Document Section 4.2 for detailed booking rules.' What type of note is this?",
    "options": [
      "Constraint — it restricts how the booking works.",
      "Exception — it explains alternative booking flows.",
      "Reference — it points to related documentation or requirements.",
      "Annotation — it explains actor relationships."
    ],
    "correctOption": 2,
    "explanation": "A Reference note in a Use Case Diagram points to external documentation, requirements specifications, or related materials. 'See SRS Document Section 4.2' is clearly directing the reader to external source material — not constraining the use case, not explaining exceptions, but linking to more detailed requirements elsewhere."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Notes",
    "question": "A note attached to the 'Submit Tax Return' use case reads: 'If the submission fails due to a server timeout, the system retains draft data and the user is notified.' Which note type is this?",
    "options": [
      "Constraint — it restricts when the use case can run.",
      "Exception — it describes an alternative flow when the main flow fails.",
      "Annotation — it explains the actor's role.",
      "Reference — it links to the failure recovery documentation."
    ],
    "correctOption": 1,
    "explanation": "Exception notes in Use Case Diagrams explain what happens when the normal (happy path) flow cannot complete — alternative flows triggered by errors or unexpected conditions. Server timeouts and how the system recovers from them are exactly the kind of exceptional scenario these notes capture, without cluttering the main diagram with error-handling detail."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Notes",
    "question": "A note in a library system's Use Case Diagram states: 'A Member may borrow no more than 5 books simultaneously.' What note type is this?",
    "options": [
      "Exception — borrowing more than 5 is an error.",
      "Reference — this links to library policy documents.",
      "Constraint — it defines a restriction or rule associated with the use case.",
      "Annotation — it explains the member's interaction pattern."
    ],
    "correctOption": 2,
    "explanation": "Constraint notes capture restrictions, rules, or assumptions that limit how a use case behaves. A borrowing limit of 5 books is a business rule constraint — it doesn't describe what happens when the rule is broken (that's an exception), nor does it provide context (that's clarification). It restricts the use case's behaviour."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Overview",
    "question": "A Java developer needs to connect their application to a PostgreSQL database. What does JDBC provide that makes this possible?",
    "options": [
      "JDBC is a PostgreSQL-specific library that only works with PostgreSQL.",
      "JDBC is a Java API that standardizes how Java applications interact with databases; each database vendor provides its own JDBC driver implementing this standard.",
      "JDBC replaces SQL with Java method calls, so no SQL knowledge is needed.",
      "JDBC is a built-in Java class that automatically detects and connects to any local database."
    ],
    "correctOption": 1,
    "explanation": "JDBC (Java Database Connectivity) is a standard Java API. Your application code uses the JDBC API (Connection, Statement, ResultSet), while the database vendor (PostgreSQL, MySQL, SQL Server) provides a JDBC driver that implements this API for their specific database. This means your Java code stays largely the same when switching databases — only the driver and connection string change."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Overview",
    "question": "A team replaces their MySQL database with SQL Server. What JDBC-related changes are required in their Java application code?",
    "options": [
      "The entire JDBC section of the code must be rewritten from scratch.",
      "The JDBC driver dependency and connection string must be updated; the core JDBC API usage (Statement, ResultSet, etc.) remains largely the same.",
      "JDBC does not support SQL Server, so a completely different approach is needed.",
      "No changes are needed — JDBC automatically detects which database to use."
    ],
    "correctOption": 1,
    "explanation": "JDBC's power is its abstraction: the same API works across different databases. Switching databases requires: (1) swapping the JDBC driver JAR, and (2) updating the connection string URL format. Your Connection, Statement, ResultSet, and query execution code remains unchanged. This is OOP abstraction in action — the interface is stable even when the implementation changes."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – 5 Steps",
    "question": "What is the correct order of the five JDBC steps?",
    "options": [
      "Create Statement → Establish Connection → Execute → Process Results → Close",
      "Establish Connection → Create Statement → Execute → Process Results → Close",
      "Establish Connection → Execute → Create Statement → Process Results → Close",
      "Process Results → Create Statement → Execute → Establish Connection → Close"
    ],
    "correctOption": 1,
    "explanation": "JDBC follows a strict dependency order: (1) Establish Connection — you need a Connection before anything else; (2) Create Statement — a Statement is obtained from a Connection; (3) Execute — run the query through the Statement; (4) Process Results — work with the ResultSet returned by execution; (5) Close — release resources in reverse order. You cannot skip or reorder steps because each depends on the previous."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Establishing Connection",
    "question": "Which class is responsible for creating a Connection object in JDBC?",
    "options": [
      "Connection — it creates itself using a static factory method.",
      "Statement — it establishes a connection when executed.",
      "DriverManager — its getConnection() method creates and returns a Connection.",
      "ResultSet — it connects to the database when iterated."
    ],
    "correctOption": 2,
    "explanation": "DriverManager is the JDBC class that manages database drivers and creates connections. You call DriverManager.getConnection(url, username, password) and it returns a Connection object. Connection, Statement, and ResultSet are all dependent on this initial connection being established first. DriverManager.getConnection() can also throw SQLException and SQLTimeoutException."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Establishing Connection",
    "question": "A developer writes: Connection conn = DriverManager.getConnection(url, user, password); and does not surround it with any exception handling. Why will this code not compile?",
    "options": [
      "DriverManager is in an external library and must be imported first.",
      "getConnection() is not a static method and requires a DriverManager instance.",
      "getConnection() declares throws SQLException and SQLTimeoutException — checked exceptions that must be handled or declared.",
      "The Connection variable must be initialized to null before this call."
    ],
    "correctOption": 2,
    "explanation": "DriverManager.getConnection() throws checked exceptions: SQLException and SQLTimeoutException. In Java, checked exceptions must either be caught in a try-catch block or declared with throws in the method signature. Failing to handle them causes a compile-time error. This is different from unchecked (runtime) exceptions like NullPointerException, which the compiler doesn't enforce."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Establishing Connection",
    "question": "When should you use Class.forName(\"com.mysql.cj.jdbc.Driver\") in a JDBC application?",
    "options": [
      "Always — it is required before every database call.",
      "Only when the JDBC driver does not auto-load (as a fallback for older or non-standard drivers).",
      "Only when using PreparedStatement instead of Statement.",
      "Never — modern Java always ignores this call."
    ],
    "correctOption": 1,
    "explanation": "Modern JDBC drivers use the Service Provider Interface (SPI) mechanism and auto-load when the JAR is on the classpath. Class.forName() is a fallback for cases where auto-loading fails — typically older drivers, OSGi environments, or non-standard configurations. It explicitly loads the driver class, triggering its registration with DriverManager. It should be called before any other database code."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Properties Class",
    "question": "A developer hard-codes database credentials directly in the Java source file. A security audit flags this as a risk. What is the recommended JDBC approach to avoid this?",
    "options": [
      "Store credentials in a private static final field inside the class.",
      "Use the Properties class to read credentials from an external configuration file.",
      "Encrypt credentials using Base64 encoding in the source code.",
      "Use a PreparedStatement, which handles credentials automatically."
    ],
    "correctOption": 1,
    "explanation": "Hard-coding credentials in source code is a maintenance and security problem: credentials end up in version control, can't be changed without recompiling, and differ between environments (dev/test/prod). The Properties class reads key-value pairs (including db URL, username, password) from an external file. This file can be excluded from version control and changed without touching Java source code."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Properties Class",
    "question": "Which statement about the Properties class is correct?",
    "options": [
      "Properties stores key-value pairs where both key and value can be any Java object.",
      "Properties is a subclass of Hashtable that stores String key-value pairs, with load() to read from a file and list() to write to a file.",
      "Properties can only be used for JDBC connections — it has no other use cases.",
      "Properties stores values using put() and retrieves them with get(), just like HashMap."
    ],
    "correctOption": 1,
    "explanation": "Properties is a subclass of Hashtable where both keys and values are restricted to Strings. It provides getProperty()/setProperty() for type-safe access, load() to read from an input stream (typically a .properties file), and list() to write to an output stream. While Properties extends Hashtable (and technically inherits put/get), the type-safe getProperty/setProperty methods are preferred for Properties usage."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Properties Class",
    "question": "A .properties file contains:\ndb.url=jdbc:mysql://localhost:3306/inventory\ndb.user=admin\ndb.pass=secret\n\nWhich Properties method reads a value from this file after it has been loaded?",
    "options": [
      "props.get(\"db.url\")",
      "props.getProperty(\"db.url\")",
      "props.load(\"db.url\")",
      "props.getValue(\"db.url\")"
    ],
    "correctOption": 1,
    "explanation": "getProperty(key) is the type-safe, Properties-specific method for retrieving String values. While get() is inherited from Hashtable and would also work, getProperty() is the correct and intended method to use with Properties. load() reads the file content into the Properties object (it doesn't retrieve individual values). getValue() does not exist in the Properties API."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Statement vs PreparedStatement",
    "question": "A web app builds a SQL query like this: String sql = \"SELECT * FROM products WHERE category = '\" + userInput + \"'\"; What is the security risk?",
    "options": [
      "The query will always return all rows regardless of userInput.",
      "This is vulnerable to SQL injection — a user could input malicious SQL that the database executes.",
      "The string concatenation will cause a NullPointerException if userInput is null.",
      "Statement cannot handle dynamic queries with user input."
    ],
    "correctOption": 1,
    "explanation": "SQL injection is a critical vulnerability where a malicious user provides input that changes the structure of the SQL query itself. For example, if userInput is: toys' OR '1'='1, the query becomes SELECT * FROM products WHERE category = 'toys' OR '1'='1' — returning all rows. Worse inputs can drop tables or bypass authentication. This is why PreparedStatement exists."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Statement vs PreparedStatement",
    "question": "How does PreparedStatement prevent SQL injection compared to Statement with string concatenation?",
    "options": [
      "PreparedStatement automatically validates user input against a whitelist.",
      "PreparedStatement pre-compiles the SQL structure once; parameters are substituted as plain data, never interpreted as SQL.",
      "PreparedStatement encrypts all user input before sending it to the database.",
      "PreparedStatement limits queries to SELECT statements, blocking dangerous operations."
    ],
    "correctOption": 1,
    "explanation": "PreparedStatement's security comes from pre-compilation: the SQL template (with ? placeholders) is compiled into a query plan before any user data is added. When setString() substitutes values, they are treated as literal data — not as SQL syntax. So even if a user inputs 'OR 1=1', it becomes a literal string to compare against, not extra SQL to execute. The SQL structure is already fixed."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Statement vs PreparedStatement",
    "question": "When is it acceptable to use Statement instead of PreparedStatement?",
    "options": [
      "When the query is very simple and only returns one row.",
      "When the SQL command is fully fixed (no user input is embedded in the query string).",
      "When you need better performance than PreparedStatement provides.",
      "When the database is local and not accessible from the internet."
    ],
    "correctOption": 1,
    "explanation": "Statement is safe when the SQL is completely static — no user-supplied data is concatenated into the query string. For example, 'SELECT COUNT(*) FROM orders' is always safe as a Statement. The SQL injection risk exists only when external input is embedded in the SQL string. However, PreparedStatement is generally preferred even for fixed queries, as it documents intent and prevents future mistakes if the query is later made dynamic."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – PreparedStatement Syntax",
    "question": "A PreparedStatement is created as:\nPreparedStatement ps = conn.prepareStatement(\"INSERT INTO orders (customer_id, product_id, qty) VALUES (?, ?, ?)\");\n\nWhich code correctly sets all three parameters?",
    "options": [
      "ps.setInt(0, customerId); ps.setInt(0, productId); ps.setInt(0, qty);",
      "ps.setInt(1, customerId); ps.setInt(2, productId); ps.setInt(3, qty);",
      "ps.setInt('customer_id', customerId); ps.setInt('product_id', productId);",
      "ps.setInt(customerId); ps.setInt(productId); ps.setInt(qty);"
    ],
    "correctOption": 1,
    "explanation": "PreparedStatement parameters are referenced by 1-based index (not 0-based like Java arrays). The first ? is index 1, second is 2, third is 3. The appropriate setter depends on the data type: setInt() for integers, setString() for strings, setDouble() for doubles, etc. Using index 0 or column names in setInt() is incorrect and will throw an exception or fail to compile."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – PreparedStatement Syntax",
    "question": "What is the correct way to create a PreparedStatement that searches for a product by name using user-provided input?",
    "options": [
      "PreparedStatement ps = conn.createStatement(\"SELECT * FROM products WHERE name = '\" + userInput + \"'\");",
      "PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM products WHERE name = ?\"); ps.setString(1, userInput);",
      "Statement ps = conn.prepareStatement(\"SELECT * FROM products WHERE name = ?\");",
      "PreparedStatement ps = new PreparedStatement(\"SELECT * FROM products WHERE name = ?\", conn);"
    ],
    "correctOption": 1,
    "explanation": "prepareStatement() is called on the Connection object (not createStatement()). The SQL uses ? as a placeholder. setString(1, userInput) binds the user input to the first placeholder as a string literal. Option A uses createStatement() with concatenation — both wrong class and vulnerable. Option C declares the wrong type. Option D uses an invalid constructor (PreparedStatement cannot be instantiated with new directly)."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Executing Statements",
    "question": "A developer needs to retrieve a list of all employees from a database. Which method and return type are correct?",
    "options": [
      "executeUpdate() — returns a ResultSet of all matching rows.",
      "executeQuery() — returns a ResultSet containing the query results.",
      "executeQuery() — returns an int indicating how many rows were found.",
      "execute() — returns a boolean and stores results internally."
    ],
    "correctOption": 1,
    "explanation": "executeQuery() is used for SELECT statements and returns a ResultSet — an object that holds the rows and columns returned by the query. executeUpdate() is for INSERT, UPDATE, and DELETE — it returns an int representing the number of rows affected. Confusing these two is a common error: calling executeUpdate() on a SELECT query will not return a ResultSet."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Executing Statements",
    "question": "A developer runs: int result = statement.executeQuery(\"DELETE FROM sessions WHERE expired = true\"); What is wrong?",
    "options": [
      "Nothing — executeQuery() works for any SQL statement.",
      "executeQuery() is used for SELECT; DELETE should use executeUpdate(), which returns int (rows affected).",
      "DELETE requires a PreparedStatement and cannot use Statement.",
      "The SQL syntax is incorrect for JDBC."
    ],
    "correctOption": 1,
    "explanation": "executeQuery() must be used only for SELECT statements. It is designed to return a ResultSet. Using it for DELETE (or INSERT or UPDATE) is incorrect — those data manipulation statements use executeUpdate(), which returns the count of affected rows as an int. Calling executeQuery() on a non-SELECT may throw a SQLException, depending on the JDBC driver."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Executing Statements",
    "question": "After executing: int rowsDeleted = preparedStatement.executeUpdate(); what does the int value represent?",
    "options": [
      "The number of columns in the deleted rows.",
      "The primary key of the last deleted row.",
      "The number of rows affected (deleted) by the statement.",
      "A status code: 0 for failure, 1 for success."
    ],
    "correctOption": 2,
    "explanation": "executeUpdate() returns the count of rows affected by the INSERT, UPDATE, or DELETE operation. For example, if you delete 7 rows, the return value is 7. If no rows matched the condition, it returns 0. This is useful for confirming that the operation had the expected effect. It is not a boolean status code — 0 means no rows affected, not failure."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Iteration",
    "question": "A developer writes the following to process JDBC results:\n\nif (resultSet.next()) {\n    // process first row\n}\n\nThe query returns 50 rows but only the first is processed. What is the correct approach?",
    "options": [
      "Call resultSet.reset() first to reposition to the beginning.",
      "Use a while loop: while (resultSet.next()) — next() advances the cursor and returns true while rows exist.",
      "Use a for loop with resultSet.size() to know the total count.",
      "ResultSet automatically iterates — the developer only needs to call getInt() or getString()."
    ],
    "correctOption": 1,
    "explanation": "ResultSet uses a cursor that starts before the first row. next() advances the cursor to the next row and returns true if a row was found, false if there are no more rows. Using if instead of while processes only the first row. ResultSet has no size() method. The correct idiom is: while (resultSet.next()) { // process current row }"
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Iteration",
    "question": "A developer coming from Java Collections tries to write: while (resultSet.hasNext()) { resultSet.next(); }. What is wrong?",
    "options": [
      "Nothing — ResultSet implements Iterable and this syntax is valid.",
      "ResultSet does not have a hasNext() method; the correct idiom is while (resultSet.next()), which both advances the cursor and checks for more rows.",
      "hasNext() works but next() is not needed in a while loop.",
      "ResultSet can only be iterated with a for-each loop."
    ],
    "correctOption": 1,
    "explanation": "This is a classic JDBC gotcha for developers used to Java's Iterator pattern. Iterator uses hasNext() to check, then next() to advance. ResultSet has only next(), which does both: it advances the cursor AND returns true if a row was available. There is no hasNext() in ResultSet. The correct loop is: while (resultSet.next()) — no separate advance call needed."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Iteration",
    "question": "After a ResultSet is created from executing a SELECT query, where is the cursor positioned before any call to next()?",
    "options": [
      "At the first row of the results.",
      "At the last row of the results.",
      "Before the first row — no data is accessible until next() is called at least once.",
      "At the middle row, calculated from the total count."
    ],
    "correctOption": 2,
    "explanation": "When a ResultSet is first created, its cursor is positioned before the first row — it doesn't point to any row yet. This means you cannot call getString() or getInt() immediately after executeQuery(). You must call next() at least once to move the cursor to the first row before accessing column data. Trying to read data before the first next() call throws a SQLException."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSetMetaData",
    "question": "A developer needs to write a method that prints all column names and values from any ResultSet, without knowing the table structure in advance. What JDBC feature enables this?",
    "options": [
      "PreparedStatement — it exposes column names through its parameters.",
      "ResultSetMetaData — it provides column count, column names, and data types at runtime.",
      "DriverManager — it stores schema information for all connected databases.",
      "Properties — it maps column names to Java field names."
    ],
    "correctOption": 1,
    "explanation": "ResultSetMetaData, obtained by calling resultSet.getMetaData(), provides structural information about the ResultSet at runtime: the number of columns (getColumnCount()), each column's name (getColumnName(i)), and data type (getColumnTypeName(i)). This enables writing generic data-display code without hard-coding column names — essential for tools like data exporters or dynamic report generators."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSetMetaData",
    "question": "A developer writes: String colName = metaData.getColumnName(0); to get the first column name. What will happen?",
    "options": [
      "It returns the name of the first column correctly.",
      "It returns null because column 0 does not exist.",
      "It throws a SQLException because JDBC column numbering starts at 1, not 0.",
      "It returns the table name instead of the column name."
    ],
    "correctOption": 2,
    "explanation": "JDBC uses 1-based indexing for column references — a significant difference from Java's 0-based arrays and Collections. getColumnName(1) returns the first column, getColumnName(2) returns the second, and so on. Passing 0 as a column index will throw a SQLException. This is one of the most common JDBC mistakes for Java developers."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSetMetaData",
    "question": "Which of the following correctly retrieves the number of columns and the name of each column from a ResultSet?",
    "options": [
      "int cols = resultSet.length(); for (int i=0; i<cols; i++) { System.out.println(resultSet.getColumnName(i)); }",
      "ResultSetMetaData md = resultSet.getMetaData(); int cols = md.getColumnCount(); for (int i=1; i<=cols; i++) { System.out.println(md.getColumnName(i)); }",
      "ResultSetMetaData md = new ResultSetMetaData(resultSet); int cols = md.size();",
      "int cols = resultSet.getMetaData().getColumnCount(); for (int i=0; i<cols; i++) { System.out.println(resultSet.getColumn(i)); }"
    ],
    "correctOption": 1,
    "explanation": "Option B is correct: getMetaData() is called on the ResultSet to get a ResultSetMetaData object. getColumnCount() returns the number of columns. The loop starts at 1 (not 0) and goes up to and including cols. getColumnName(i) retrieves each column's name. Option A incorrectly calls methods on ResultSet directly. Option C uses an invalid constructor. Option D uses 0-based indexing and a non-existent getColumn() method."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Closing Resources",
    "question": "A JDBC program opens a Connection, then a Statement, then a ResultSet. In what order should these be closed, and why?",
    "options": [
      "Connection → Statement → ResultSet (same order as opening).",
      "Any order — Java's garbage collector handles JDBC resource cleanup automatically.",
      "ResultSet → Statement → Connection (reverse order of opening).",
      "Only Connection needs to be closed — Statement and ResultSet close automatically."
    ],
    "correctOption": 2,
    "explanation": "JDBC resources should be closed in reverse order of creation: ResultSet first, then Statement, then Connection. This is because resources are dependent on each other — a ResultSet is created from a Statement, which is created from a Connection. Closing a Connection before its Statement or ResultSet may leave resources in an inconsistent state. Also, JDBC resources are not reliably garbage collected; explicit close() calls are required."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Closing Resources",
    "question": "A developer skips closing JDBC resources because 'Java has garbage collection.' What practical problem can result in a server environment?",
    "options": [
      "The Java compiler will refuse to build the project.",
      "Database connections are limited pool resources; failing to close them causes connection pool exhaustion, eventually preventing any new database connections.",
      "The ResultSet will continue updating from the database indefinitely.",
      "Nothing — garbage collection always closes JDBC connections reliably."
    ],
    "correctOption": 1,
    "explanation": "Database connections are expensive, limited resources managed by a connection pool. If connections are never explicitly closed, they remain open and unavailable to other requests. In a server that handles many requests, this quickly exhausts the pool, causing new requests to hang or fail with 'connection timeout' errors. Garbage collection is not guaranteed to run promptly enough to prevent this in production systems."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Closing Resources",
    "question": "What Java construct is most appropriate for ensuring JDBC resources are always closed, even if an exception is thrown during query execution?",
    "options": [
      "A while loop around the JDBC code.",
      "A try-with-resources statement, which automatically calls close() on declared resources.",
      "A static initializer block.",
      "A finally block that manually calls close() on each resource."
    ],
    "correctOption": 1,
    "explanation": "Java 7+ try-with-resources is the modern, recommended approach: declare Connection, Statement, and ResultSet in the try(...) header and they are automatically closed in reverse order when the block exits — whether normally or due to an exception. A finally block also works (the traditional approach) but is more verbose. While loops and static initializers are not related to resource cleanup."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Code Analysis",
    "question": "What is wrong with this JDBC code?\n\nStatement stmt = connection.createStatement();\nResultSet rs = stmt.executeUpdate(\"SELECT * FROM employees\");",
    "options": [
      "createStatement() takes a SQL string as an argument.",
      "executeUpdate() is for SELECT statements and returns a ResultSet.",
      "executeUpdate() is for INSERT/UPDATE/DELETE and returns int; SELECT requires executeQuery() which returns ResultSet.",
      "Statement cannot be used for SELECT statements."
    ],
    "correctOption": 2,
    "explanation": "executeUpdate() is designed for data modification statements (INSERT, UPDATE, DELETE) and returns an int (number of rows affected). It should never be called with a SELECT statement. To retrieve rows, use executeQuery(), which returns a ResultSet. Trying to assign the int returned by executeUpdate() to a ResultSet variable will cause a compile-time error."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Code Analysis",
    "question": "Examine this code:\n\nPreparedStatement ps = conn.prepareStatement(\"UPDATE inventory SET qty = ? WHERE item_id = ?\");\nps.setInt(2, newQty);\nps.setInt(1, itemId);\nps.executeUpdate();\n\nIs this correct? What does it do?",
    "options": [
      "Incorrect — parameters must be set in order from 1 to n.",
      "Correct — parameter index refers to position in the SQL, so setting index 2 first is valid; qty gets newQty and item_id gets itemId.",
      "Incorrect — the parameters are swapped: item_id will receive newQty and qty will receive itemId.",
      "Incorrect — executeUpdate() cannot be called on a PreparedStatement."
    ],
    "correctOption": 2,
    "explanation": "Parameters are indexed by their position in the SQL string: ? at position 1 corresponds to qty, ? at position 2 corresponds to item_id. The code sets index 2 (item_id) to newQty and index 1 (qty) to itemId — the values are swapped! This is a logic bug: the item's quantity will be set to the item ID value, and the WHERE clause will match using the new quantity value instead of the item ID."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Code Analysis",
    "question": "A developer writes:\n\nResultSet rs = stmt.executeQuery(\"SELECT id, name, salary FROM staff\");\nwhile (rs.next()) {\n    int id = rs.getInt(1);\n    String name = rs.getString(2);\n    double salary = rs.getDouble(3);\n}\n\nA new column 'department' is inserted between 'name' and 'salary' in the table. What breaks?",
    "options": [
      "Nothing — JDBC dynamically adjusts column indices when schema changes.",
      "The getInt(1) call will fail because id is no longer in column 1.",
      "salary = rs.getDouble(3) now reads 'department' because column indices are positional and the schema change shifted them.",
      "The while loop will throw a ConcurrentModificationException."
    ],
    "correctOption": 2,
    "explanation": "Accessing ResultSet columns by numeric index is fragile — column positions are determined by the SELECT query and table structure. If a new column is inserted at position 3, what was salary (column 3) is now department, and salary shifts to column 4. rs.getDouble(3) now reads the wrong column silently. Using column names (rs.getDouble(\"salary\")) is safer and more maintainable."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Code Analysis",
    "question": "What is the output or behaviour of this code?\n\nResultSet rs = stmt.executeQuery(\"SELECT name FROM customers WHERE id = 42\");\nString name = rs.getString(\"name\"); // Called BEFORE rs.next()",
    "options": [
      "Returns null because no customer with id 42 exists.",
      "Returns the name correctly — ResultSet auto-positions on the first row.",
      "Throws a SQLException because the cursor is before the first row and no row is currently selected.",
      "Returns an empty String because the cursor hasn't moved yet."
    ],
    "correctOption": 2,
    "explanation": "When a ResultSet is created, its cursor is positioned before the first row — not on a row. Calling any getter (getString, getInt, etc.) before calling next() at least once throws a SQLException because there is no current row. You must always call rs.next() to advance the cursor to the first row before reading any data. This is a common beginner mistake with JDBC."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Code Analysis",
    "question": "A developer builds the following query using user input:\n\nString query = \"SELECT * FROM accounts WHERE username='\" + user + \"' AND password='\" + pass + \"'\";\n\nA malicious user enters: admin'-- for the username. What likely happens?",
    "options": [
      "The query fails with a syntax error because '--' is invalid SQL.",
      "The query becomes: SELECT * FROM accounts WHERE username='admin'--' AND password='...' — the -- comments out the password check, bypassing authentication.",
      "The JDBC driver automatically sanitizes the input and removes the --.",
      "A NullPointerException is thrown because the password check returns null."
    ],
    "correctOption": 1,
    "explanation": "In SQL, -- starts a single-line comment. The injected input admin'-- closes the username string with ', then comments out everything after — including the AND password check. The query effectively becomes: SELECT * FROM accounts WHERE username='admin'. This grants access without a password. This is a classic SQL injection attack that PreparedStatement prevents by treating input as data, never as SQL."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Connection String",
    "question": "A Java application needs to connect to a MySQL database called 'school' running on localhost port 3306. Which connection string is correctly formatted?",
    "options": [
      "mysql://school@localhost:3306",
      "jdbc:mysql://localhost:3306/school",
      "jdbc://mysql/localhost:3306/school",
      "connection:mysql:localhost/school:3306"
    ],
    "correctOption": 1,
    "explanation": "JDBC connection strings follow the format: jdbc:[driver-name]://[host]:[port]/[database]. For MySQL: jdbc:mysql://localhost:3306/school. The 'jdbc:' prefix is mandatory. The driver identifier ('mysql') follows. Then the host and port, then the database name. Each JDBC driver has its own URL format, but all begin with 'jdbc:'. Deviating from this format causes a 'No suitable driver' error."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Connection String",
    "question": "Why might hard-coding a connection string like jdbc:mysql://localhost:3307/books directly in Java source code cause problems in a team environment?",
    "options": [
      "JDBC does not support the :// separator in hardcoded strings.",
      "Different developers and deployment environments (dev, test, production) use different database hosts, ports, and credentials — hardcoding one value breaks all others.",
      "The Java compiler cannot handle strings containing : and / characters.",
      "Hardcoded connection strings prevent PreparedStatement from working correctly."
    ],
    "correctOption": 1,
    "explanation": "Hardcoded connection details are a maintenance problem: a developer's local database runs on port 3307, the test server uses port 3306, production uses a remote host. Every environment change requires a code change and recompile. With Properties files, each environment has its own configuration file — the Java code stays the same. This separation of configuration from code is a fundamental good practice."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Navigation",
    "question": "A JDBC ResultSet is configured to support bidirectional navigation. After iterating forward through all rows with next(), how would you move back to the previous row?",
    "options": [
      "resultSet.back()",
      "resultSet.previous()",
      "resultSet.rewind(1)",
      "resultSet.movePrevious()"
    ],
    "correctOption": 1,
    "explanation": "ResultSet supports both forward (next()) and backward (previous()) navigation when configured with the appropriate scroll type in createStatement(). The method is previous() — it moves the cursor one row backward and returns true if a row was found. Note that ResultSets are forward-only by default; bidirectional navigation requires specifying ResultSet.TYPE_SCROLL_INSENSITIVE or TYPE_SCROLL_SENSITIVE in createStatement()."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Navigation",
    "question": "Which createStatement() configuration setting controls whether a ResultSet supports only forward navigation or bidirectional scrolling?",
    "options": [
      "This is controlled by the DriverManager, not createStatement().",
      "The scrollability type argument passed to createStatement() (e.g., TYPE_FORWARD_ONLY vs TYPE_SCROLL_INSENSITIVE).",
      "PreparedStatement automatically enables bidirectional scrolling.",
      "ResultSet navigation is always bidirectional in modern JDBC."
    ],
    "correctOption": 1,
    "explanation": "createStatement() is overloaded — the version with no arguments creates a forward-only ResultSet. To enable scrolling and update features, you pass constants like ResultSet.TYPE_SCROLL_INSENSITIVE and ResultSet.CONCUR_READ_ONLY to createStatement(). These parameters configure how the ResultSet navigates and whether changes are reflected immediately in the underlying database."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Integrated Scenario",
    "question": "A developer needs to find a rental record by a renter's email address entered in a search form. Which approach is both correct and secure?",
    "options": [
      "Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(\"SELECT * FROM rentals WHERE email='\" + email + \"'\");",
      "PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM rentals WHERE email = ?\"); ps.setString(1, email); ResultSet rs = ps.executeQuery();",
      "PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM rentals WHERE email = ?\"); ps.setString(0, email); ResultSet rs = ps.executeQuery();",
      "PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM rentals WHERE email = email\"); ResultSet rs = ps.executeQuery();"
    ],
    "correctOption": 1,
    "explanation": "Option B is correct and secure: PreparedStatement with a ? placeholder prevents SQL injection. setString(1, email) uses 1-based indexing to bind the value. executeQuery() is correct for SELECT. Option A uses string concatenation — SQL injection risk. Option C uses 0-based index (invalid — throws SQLException). Option D hardcodes 'email' as a literal SQL identifier, not using the variable at all."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Integrated Scenario",
    "question": "A developer writes a complete JDBC method. They open Connection, Statement, and ResultSet — but only call resultSet.close() at the end. What resources are leaked?",
    "options": [
      "Nothing — closing ResultSet automatically closes Statement and Connection.",
      "The Statement and Connection are leaked — only ResultSet is closed; the database connection remains open, consuming server resources.",
      "Only the Connection is leaked; Statement closes automatically when its ResultSet closes.",
      "Nothing is leaked — Java's garbage collector handles Statement and Connection."
    ],
    "correctOption": 1,
    "explanation": "Closing a ResultSet does not automatically close its parent Statement or Connection. Each must be explicitly closed. Unclosed Statement objects hold server-side cursors, and unclosed Connection objects hold live database connections. In a busy application, this leads to resource exhaustion. The correct cleanup is: close ResultSet, then Statement, then Connection — in reverse order of creation."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Applied",
    "question": "You are designing a Use Case Diagram for a hotel booking system. Which of the following correctly identifies actors and use cases?",
    "options": [
      "Actors: BookingService class, DatabaseConnection; Use Cases: Guest, Receptionist",
      "Actors: Guest, Receptionist, PaymentSystem; Use Cases: Book Room, Check In, Process Payment, View Availability",
      "Actors: Book Room, Check In; Use Cases: Guest, Receptionist",
      "Actors: Room, Booking, Invoice; Use Cases: Guest, Admin"
    ],
    "correctOption": 1,
    "explanation": "Actors are external entities that interact with the system — humans (Guest, Receptionist) and external systems (PaymentSystem). Use Cases are the functions the system provides — the actions actors can perform (Book Room, Check In). Confusing actors with use cases is a common mistake. Implementation classes (BookingService, DatabaseConnection) are never actors or use cases in a Use Case Diagram."
  },
  {
    "quizTitle": "JDBC",
    "category": "UML Use Case – Applied",
    "question": "A Use Case Diagram for a payroll system has a note: 'Pay calculation must complete within 2 seconds per employee.' What type of note is this, and why?",
    "options": [
      "Reference — it links to the SLA documentation.",
      "Exception — 2 seconds is the timeout before an error occurs.",
      "Constraint — it defines a non-functional restriction (performance) that the use case must satisfy.",
      "Clarification — it explains how the pay calculation works."
    ],
    "correctOption": 2,
    "explanation": "Performance requirements (response time, throughput) are constraints — rules or restrictions that the system must satisfy. This note says the Pay Calculation use case is constrained to complete within 2 seconds. It is not an exception (nothing is failing), not a reference (not pointing to a document), and not a clarification (it doesn't explain implementation). Non-functional requirements like performance often appear as constraint notes."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Applied Design",
    "question": "A ParkingMeter class has setTimeRemaining() and getTimeRemaining(). Enforcement officers use: if (meter.getTimeRemaining() <= 0) { issueTicket(); } \n\nA better design would be to add which method to ParkingMeter?",
    "options": [
      "A public int timeRemaining field for faster access.",
      "A meter.isExpired() method that encapsulates the expiry logic inside the class.",
      "A static checkMeter(ParkingMeter m) utility method.",
      "A getMeterStatus() method that returns a String description."
    ],
    "correctOption": 1,
    "explanation": "Ask Don't Tell: instead of asking for the raw value and deciding externally, ask the object a meaningful question. isExpired() encapsulates the rule 'timeRemaining <= 0' inside the class — the only place it should live. If the expiry logic ever becomes more complex (grace periods, holiday rules), you change it in one place. Callers just ask: if (meter.isExpired()) — clean, readable, and robust."
  },
  {
    "quizTitle": "JDBC",
    "category": "Ask Don't Tell – Applied Design",
    "question": "An Elevator class has floors field with getFloor() and setFloor(). A controller calls elevator.setFloor(elevator.getFloor() + 1) to go up. What is the preferred Ask Don't Tell design?",
    "options": [
      "Make the floors field public for direct access.",
      "Add elevator.goUp() and elevator.goDown() methods that manage floor logic internally.",
      "Create a FloorController class that sets the floor on the elevator.",
      "Return a copy of the floors field from getFloor() to prevent external modification."
    ],
    "correctOption": 1,
    "explanation": "goUp() and goDown() are meaningful, object-centric methods that ask the Elevator to perform an action. The Elevator controls its own floor management, and can enforce constraints (maximum floor, door-open check, weight limit) without any caller knowing the implementation. Telling the elevator what floor number to set is a procedural approach that bypasses the object's own logic."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Integrated Scenario",
    "question": "A developer writes a data access method and wants to avoid hardcoding credentials. Which sequence correctly uses the Properties class with JDBC?",
    "options": [
      "Create Properties, call setProperty() to set values, call load() to save to file, call getProperty() to read back.",
      "Create Properties, call load() to read from a .properties file, then call getProperty() to retrieve values like url, username, and password for DriverManager.getConnection().",
      "Create Properties, pass it directly to DriverManager.getConnection() with the file path.",
      "Create Properties, call list() to read from a file, then getProperty() to retrieve values."
    ],
    "correctOption": 1,
    "explanation": "The correct sequence: (1) Create a Properties instance, (2) call load(inputStream) to populate it from a .properties file, (3) call getProperty(key) to retrieve individual values (e.g., db.url, db.user, db.password), (4) pass these values to DriverManager.getConnection(). load() reads FROM a file; list() writes TO a file. You cannot pass Properties directly to getConnection() — it expects String arguments."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – PreparedStatement vs Statement",
    "question": "PreparedStatement extends Statement. What does this inheritance relationship mean for how PreparedStatement is used?",
    "options": [
      "PreparedStatement inherits and can use all Statement methods, and adds parameterized query support via setters and a no-argument executeQuery().",
      "PreparedStatement overrides all Statement methods and provides completely different behaviour.",
      "Because PreparedStatement extends Statement, you can assign a PreparedStatement to a Statement variable but lose the setString() method.",
      "PreparedStatement and Statement are unrelated — extends is used loosely in JDBC documentation."
    ],
    "correctOption": 0,
    "explanation": "As a subclass of Statement, PreparedStatement inherits execution methods (executeQuery, executeUpdate) and adds parameterized query features: the SQL template is set at construction time via prepareStatement(), and parameters are bound using typed setters (setString, setInt, etc.). When executeQuery() is called on a PreparedStatement with no arguments, it uses the pre-compiled query and bound parameters — whereas Statement's executeQuery() requires a SQL string argument."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – ResultSet Column Access",
    "question": "A ResultSet contains columns: id, firstName, lastName, email. A developer writes: String email = rs.getString(\"email\"); vs String email = rs.getString(4). Which approach is more maintainable and why?",
    "options": [
      "Column number (4) is more maintainable because it's faster to type.",
      "Column name (\"email\") is more maintainable because if the column order in the SELECT changes, the name-based access still retrieves the correct column.",
      "Both are equally maintainable.",
      "Neither — you should always use ResultSetMetaData to retrieve column values."
    ],
    "correctOption": 1,
    "explanation": "Using column names is safer and more readable. If the SELECT query later reorders columns (e.g., SELECT id, email, firstName, lastName), rs.getString(4) would now return lastName instead of email — a silent, hard-to-find bug. rs.getString(\"email\") always retrieves the email column regardless of its position in the result set. Name-based access is a best practice for ResultSet."
  },
  {
    "quizTitle": "JDBC",
    "category": "JDBC – Overall Flow",
    "question": "A developer needs to insert a new product record using user-supplied name and price. Which complete JDBC flow is correct?",
    "options": [
      "ResultSet rs = stmt.executeQuery(\"INSERT INTO products VALUES(?, ?)\"); rs.next();",
      "PreparedStatement ps = conn.prepareStatement(\"INSERT INTO products (name, price) VALUES (?, ?)\"); ps.setString(1, name); ps.setDouble(2, price); int rows = ps.executeUpdate();",
      "Statement stmt = conn.createStatement(\"INSERT INTO products (name, price) VALUES (?, ?)\"); stmt.setString(1, name);",
      "PreparedStatement ps = conn.prepareStatement(\"INSERT INTO products (name, price) VALUES (?, ?)\"); ResultSet rs = ps.executeQuery();"
    ],
    "correctOption": 1,
    "explanation": "For INSERT: use PreparedStatement (safer with user input), set parameters with 1-based setters (setString(1), setDouble(2)), and call executeUpdate() (not executeQuery() — INSERT is not a SELECT). executeUpdate() returns the count of affected rows. Option A incorrectly uses executeQuery() for INSERT. Option C passes SQL to createStatement() — incorrect (SQL goes in prepareStatement). Option D uses executeQuery() for a non-SELECT statement."
  }
]
