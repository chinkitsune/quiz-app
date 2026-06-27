//data/qutions/java-design-patterns-dao-and-singleton.js

module.exports = [
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Overview",
    "question": "A junior developer says: 'I found a design pattern online that solves this exact problem — I'll just copy the code directly into our project.' What is the fundamental misunderstanding here?",
    "options": [
      "Design patterns cannot be used in Java.",
      "Design patterns are guidelines and templates, not copy-paste code solutions; they must be adapted to the specific context of the application.",
      "Patterns can only be copied from the GoF book, not from online sources.",
      "Design patterns are only for large enterprise applications, not smaller projects."
    ],
    "correctOption": 1,
    "explanation": "Design patterns are not libraries or reusable code snippets — they are conceptual guidelines on how to structure and organize code to solve recurring problems. The same pattern looks different in every codebase because it is adapted to that project's specific classes, constraints, and context. Treating them as copy-paste templates misunderstands their nature entirely."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Overview",
    "question": "Two developers on different teams, who have never met, both say 'we used an Observer pattern here.' Even without seeing each other's code, they can immediately understand the structure of each other's solution. What property of design patterns makes this possible?",
    "options": [
      "Design patterns generate identical code across all languages.",
      "Design patterns provide a shared vocabulary that communicates design intent concisely across developers and teams.",
      "Design patterns are legally standardized by ISO, ensuring identical implementations.",
      "Design patterns are built into the Java standard library, so all implementations are the same."
    ],
    "correctOption": 1,
    "explanation": "One of the primary benefits of design patterns is creating a shared vocabulary. Pattern names (Observer, Singleton, DAO, Factory) are shorthand for a complete design concept. Developers familiar with the pattern immediately understand the roles, relationships, and intent — even without reading the code. This dramatically accelerates design discussions, code reviews, and onboarding."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Three Types",
    "question": "A pattern that describes how to create a complex object step-by-step, ensuring it is fully constructed before use, belongs to which category?",
    "options": [
      "Structural — because it defines the object's structure.",
      "Behavioral — because the construction involves multiple steps.",
      "Creational — because it focuses on the process of object creation.",
      "Functional — because it uses method calls for construction."
    ],
    "correctOption": 2,
    "explanation": "Creational patterns focus on the process of object creation — how objects are instantiated, ensuring the right type is created at the right time, and controlling the instantiation process. The Builder pattern (a creational pattern) is a classic example of step-by-step object construction. Structural patterns address composition; Behavioral patterns address communication and flow."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Three Types",
    "question": "A pattern that defines how a Notification system sends alerts — deciding at runtime whether to notify by SMS, email, or push notification based on user preferences — belongs to which category?",
    "options": [
      "Creational — because it creates different notifier objects.",
      "Structural — because it composes multiple notification channels.",
      "Behavioral — because it deals with how objects interact and communicate at runtime.",
      "Procedural — because it uses conditional logic."
    ],
    "correctOption": 2,
    "explanation": "Behavioral patterns deal with the interaction, communication, and flow between objects. Deciding how notification is delivered based on runtime conditions is about communication behaviour between objects — a behavioral concern. Strategy pattern (choosing an algorithm at runtime) is a classic behavioral example. Structural patterns are about static composition; Creational patterns are about how objects come into existence."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Three Types",
    "question": "An Adapter pattern wraps an incompatible third-party API so that existing code can use it without modification. This is an example of which pattern category?",
    "options": [
      "Creational — because a new adapter object is created.",
      "Behavioral — because it changes how the API behaves.",
      "Structural — because it addresses the composition and relationship between classes to make the system more compatible.",
      "Singleton — because only one adapter is needed."
    ],
    "correctOption": 2,
    "explanation": "Structural patterns address how classes and objects are composed to form larger structures. The Adapter pattern is a structural pattern — it defines a structural relationship (wrapping/delegation) to bridge incompatible interfaces. Structural patterns tend to describe a relatively static structure (how things are arranged), whereas behavioral patterns describe a process or flow (how things interact at runtime)."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Three Types",
    "question": "Which statement correctly distinguishes Structural from Behavioral design patterns?",
    "options": [
      "Structural patterns are for databases; Behavioral patterns are for user interfaces.",
      "Structural patterns tend to describe a static arrangement of classes/objects; Behavioral patterns tend to describe a process or communication flow.",
      "Structural patterns only apply to inheritance; Behavioral patterns only apply to interfaces.",
      "There is no meaningful distinction — both categories solve the same class of problems."
    ],
    "correctOption": 1,
    "explanation": "The key distinction: Structural patterns describe how classes and objects are composed or arranged (a relatively stable structure — like Adapter, Decorator, Composite). Behavioral patterns describe how objects interact and communicate to carry out a process or flow (like Observer, Strategy, Iterator, Command). Knowing this distinction helps you select the right category of pattern for a given design problem."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Purpose",
    "question": "A WeatherApp's business logic directly calls MySQL-specific JDBC code scattered throughout. The team decides to switch to MongoDB. What problem does this reveal, and how does DAO address it?",
    "options": [
      "The app used too many classes. DAO reduces class count.",
      "Business logic is tightly coupled to MySQL-specific code. DAO separates the domain layer from the persistence layer, so switching databases only requires changing the DAO implementation.",
      "MongoDB doesn't support Java, so a DAO cannot help.",
      "DAO automatically converts MySQL queries to MongoDB syntax."
    ],
    "correctOption": 1,
    "explanation": "The DAO pattern's core motivation is isolating business/domain logic from the persistence implementation. When SQL code is scattered through business classes, every database change requires touching business logic — violating SRP and increasing risk. With DAO, the domain object calls DAO methods (save, findById, etc.) without knowing what database is behind them. Switching to MongoDB means only rewriting the DAO implementation."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Purpose",
    "question": "Which of the following correctly identifies what DAO stands for and which pattern catalog it comes from?",
    "options": [
      "Data Abstraction Object — from the GoF book.",
      "Data Access Object — from Core J2EE Patterns (not GoF).",
      "Database Access Operation — from SOLID principles.",
      "Data Application Object — from the Gang of Four book."
    ],
    "correctOption": 1,
    "explanation": "DAO stands for Data Access Object. It originates from Core J2EE Patterns (Java 2 Enterprise Edition), not from the GoF (Gang of Four) book. The GoF book covers Creational, Structural, and Behavioral patterns (like Singleton, Observer, Factory). DAO is a J2EE software pattern specifically designed for enterprise Java data access concerns. Knowing the source of a pattern matters for understanding its intended context."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – CRUD",
    "question": "A LibraryDAO interface is being designed. Which set of method signatures correctly represents full CRUD operations?",
    "options": [
      "readBook(), writeBook(), modifyBook(), deleteBook()",
      "createBook(Book b), findBookById(int id), updateBook(Book b), deleteBook(int id)",
      "insertSQL(), selectSQL(), updateSQL(), deleteSQL()",
      "addToDatabase(Object o), getFromDatabase(int id), removeFromDatabase(int id)"
    ],
    "correctOption": 1,
    "explanation": "CRUD stands for Create, Read, Update, Delete — the four fundamental data operations. In DAO, these are typically named in terms of the domain object: create/insert, find/get (by ID or criteria), update, and delete. Option A uses file I/O terminology. Option C leaks SQL/database concerns into the interface name, defeating the purpose of DAO abstraction. Option B correctly names operations in domain terms."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Components",
    "question": "In the DAO pattern, what is the role of the Data Transfer Object (DTO)?",
    "options": [
      "It executes SQL queries and transfers them to the database.",
      "It models the data stored in the data source, typically following Java Bean conventions, and carries data between layers.",
      "It acts as the business logic layer that processes domain operations.",
      "It is the DAO interface that defines CRUD method signatures."
    ],
    "correctOption": 1,
    "explanation": "A DTO (Data Transfer Object) is a simple class that models the data from the data source — essentially a data container that maps to a database table row (or similar). It follows Java Bean conventions: private fields, public getters/setters, no-arg constructor. Its role is to carry data between layers (from DAO to domain/business logic) without containing any business logic itself."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Components",
    "question": "In a DAO architecture for a music streaming app, which component directly contains the SQL queries or database calls?",
    "options": [
      "The Song domain/business object (e.g., PlaylistManager).",
      "The SongDTO — it stores the data and the query together.",
      "The SongDAO (concrete DAO class) — it abstracts and encapsulates all data source access.",
      "The SongFactory — it creates DAOs based on the query type."
    ],
    "correctOption": 2,
    "explanation": "The concrete DAO class (SongDAO) is the only component that directly contains data source access code (SQL, JDBC calls, or equivalent). The domain/business object (PlaylistManager) calls DAO methods without knowing SQL. The DTO carries data as a plain object. This separation ensures that if the persistence mechanism changes (SQL to NoSQL), only the DAO changes — not the domain logic."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Components",
    "question": "A DAO pattern includes both a DAO interface and concrete DAO classes. What is the benefit of coding the domain layer to the DAO interface rather than the concrete class?",
    "options": [
      "Interfaces execute faster than concrete classes in Java.",
      "The domain layer can switch between different DAO implementations (MySQL, Oracle, test mock) without changing its own code.",
      "Java requires interfaces to be used with the DAO pattern.",
      "Interfaces automatically implement CRUD operations."
    ],
    "correctOption": 1,
    "explanation": "By depending on an interface (e.g., BookDAO) rather than a concrete class (MySQLBookDAO), the domain layer is decoupled from the specific implementation. A MySQLBookDAO can be swapped for a PostgreSQLBookDAO, an XMLBookDAO, or a MockBookDAO for testing — without touching any domain code. This is the Dependency Inversion Principle and is the reason DAO interfaces are so valuable."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Exceptions",
    "question": "A domain object catches a SQLException from its DAO. Why is this considered a design problem, and what does DAO best practice recommend?",
    "options": [
      "SQLException is a runtime exception and does not need to be caught.",
      "The domain layer should not be exposed to data-source-specific exceptions. The DAO should catch SQLException and throw a custom, database-neutral exception instead.",
      "DAOs should always let exceptions propagate up to the UI layer for user display.",
      "Domain objects should import java.sql to handle database errors properly."
    ],
    "correctOption": 1,
    "explanation": "If the domain layer catches SQLException, it is implicitly coupled to the SQL/JDBC data source — defeating the DAO's purpose of isolation. If the data source changes (e.g., from SQL to LDAP), the exceptions change too, requiring domain layer changes. Best practice: the DAO catches SQLException internally and throws a custom, neutral exception (e.g., DataAccessException) that the domain layer can handle without knowing the underlying technology."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Naming Convention",
    "question": "A team is building DAOs for three entities: Employee, Department, and Payroll. What is the correct naming convention for their DAO classes?",
    "options": [
      "DAOEmployee, DAODepartment, DAOPayroll",
      "EmployeeData, DepartmentData, PayrollData",
      "EmployeeDAO, DepartmentDAO, PayrollDAO",
      "EmployeeDB, DepartmentDB, PayrollDB"
    ],
    "correctOption": 2,
    "explanation": "The standard DAO naming convention is: entity_nameDAO. The entity name comes first, followed by DAO as a suffix. This makes the class's purpose immediately clear and allows IDEs to group related classes alphabetically. DAOEmployee (prefix) is less conventional. Suffixes like Data or DB are ambiguous and don't follow the established DAO naming standard."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO Pattern – Motivation",
    "question": "A company stores employee data in an Oracle database. Next year they plan to migrate to a NoSQL document store. Which DAO design decision NOW will make this future migration easiest?",
    "options": [
      "Write all SQL directly in the Employee domain class so it is easy to find and replace.",
      "Create an EmployeeDAO interface with CRUD methods; implement it as OracleEmployeeDAO now; later add a NoSQLEmployeeDAO implementation.",
      "Use PreparedStatement everywhere to make queries compatible with all databases.",
      "Store all employee data in a Properties file to avoid database dependency entirely."
    ],
    "correctOption": 1,
    "explanation": "Defining a DAO interface now and programming the domain layer to it means migration only requires creating a new DAO implementation (NoSQLEmployeeDAO) that satisfies the same interface. The domain code never changes. This is the key DAO benefit: isolating the domain from persistence implementation differences — whether SQL vs NoSQL, different SQL vendors, or even flat-file vs RDBMS."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Java Bean Convention",
    "question": "Which of the following classes correctly follows Java Bean conventions?",
    "options": [
      "public class Sensor { public double reading; public Sensor(double r) { reading = r; } }",
      "public class Sensor { private double reading; public Sensor() {} public double getReading() { return reading; } public void setReading(double r) { reading = r; } }",
      "public class Sensor { private final double reading; public Sensor(double r) { reading = r; } public double getReading() { return reading; } }",
      "public class Sensor { double reading; public Sensor() {} public double reading() { return reading; } }"
    ],
    "correctOption": 1,
    "explanation": "A Java Bean requires: (1) a no-argument constructor, (2) private instance variables, (3) public getters and setters following getName()/setName() convention, and (4) implements Serializable (often optional in practice). Option A has a public field — violates #2. Option C has no setter and final field — not a full Bean. Option D uses package-private field and non-standard accessor naming (reading() instead of getReading())."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Java Bean Convention",
    "question": "A developer creates a class with all private fields, getters and setters, but no no-argument constructor (only a parameterized one). Why does this break Java Bean compatibility?",
    "options": [
      "It doesn't — a parameterized constructor is sufficient for Java Bean compatibility.",
      "Many frameworks (serialization, JPA, JSP tag libraries) use reflection to instantiate Beans by calling the no-arg constructor. Without it, these frameworks cannot create instances.",
      "Parameterized constructors are not allowed in Java Bean classes.",
      "Only final classes require a no-arg constructor to be Java Bean compliant."
    ],
    "correctOption": 1,
    "explanation": "The no-arg constructor is critical for Java Bean compatibility because frameworks like JPA, JAXB, JSP, and serialization mechanisms use reflection to instantiate objects without knowing constructor parameters. If no no-arg constructor exists, these frameworks throw an InstantiationException. This is why DTOs in the DAO pattern must be Beans — persistence frameworks need to create empty instances and then populate them via setters."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Java Bean Convention",
    "question": "A Java Bean has a boolean field named active. What is the correct getter method name according to Java Bean conventions?",
    "options": [
      "public boolean getActive()",
      "public boolean isActive()",
      "public boolean active()",
      "public Boolean retrieveActive()"
    ],
    "correctOption": 1,
    "explanation": "Java Bean convention uses a special getter prefix for boolean fields: isXxx() instead of getXxx(). So for a boolean field named active, the getter is isActive(). This convention exists to make boolean properties more readable (if (sensor.isActive()) reads naturally). The setter still follows the standard: setActive(boolean value). Frameworks and IDEs rely on this naming convention for boolean property detection."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DTO vs Value Object",
    "question": "A CurrencyRate class represents an exchange rate at a specific moment in time. Once created, its value should never change. Which design best fits this concept?",
    "options": [
      "A DTO with getters and setters, so the rate can be updated if it changes.",
      "A Value Object with immutable (final) attributes and only getters — no setters.",
      "A Java Bean with a no-arg constructor so frameworks can instantiate it.",
      "A Singleton so only one exchange rate exists at any time."
    ],
    "correctOption": 1,
    "explanation": "A Value Object has immutable attributes — once created, its state cannot change. This is ideal for things that represent a fixed fact: a price at a point in time, a coordinate, a currency rate. There are no setters; all values are set in the constructor. Java enums are a good example. A DTO is different — it carries data that may be updated. DTOs are mutable; Value Objects are immutable."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DTO vs Value Object",
    "question": "What is the key difference between a Transfer Object (DTO) and a Value Object?",
    "options": [
      "DTOs implement Serializable; Value Objects do not.",
      "DTOs are used only in web applications; Value Objects are used only in desktop applications.",
      "Value Objects have immutable (read-only) attributes; DTOs are mutable with getters and setters.",
      "DTOs are in the GoF catalog; Value Objects are in J2EE patterns."
    ],
    "correctOption": 2,
    "explanation": "The defining difference: Value Objects are immutable — their attributes are set at construction and cannot be changed afterwards (no setters, final fields). They represent a fixed concept like a coordinate or a date range. DTOs (Transfer Objects) are mutable — they carry data between layers and are populated via setters. Both are data containers with no business logic, but their mutability differs fundamentally."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DTO vs Value Object",
    "question": "A Java enum Direction { NORTH, SOUTH, EAST, WEST } is given as an example of a Value Object. Why?",
    "options": [
      "Because enums can implement interfaces, making them reusable.",
      "Because enum constants are class-level, implicitly static instances that are immutable — once defined, their values cannot change.",
      "Because enums automatically implement Serializable.",
      "Because enums are a Creational design pattern from GoF."
    ],
    "correctOption": 1,
    "explanation": "Java enums are Value Objects because: (1) they are class-level and implicitly static — there is only one NORTH instance in the JVM, (2) their values are fixed at compile time and cannot be changed at runtime — they are inherently immutable. This immutability is the defining characteristic of a Value Object. Enums also happen to be the recommended implementation for the Singleton pattern in Java."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Concept",
    "question": "An application has a centralized AuditLogger that must record all security events. If multiple AuditLogger instances exist, some log entries could be written to different files or missed entirely. Which design pattern addresses this?",
    "options": [
      "Factory — to create the correct logger based on event type.",
      "DAO — to abstract the file-writing operations.",
      "Singleton — to guarantee exactly one AuditLogger instance exists and is shared throughout the application.",
      "Observer — to notify all loggers when an event occurs."
    ],
    "correctOption": 2,
    "explanation": "The Singleton pattern guarantees that only one instance of a class is created and used throughout the application. An AuditLogger is a classic use case: you need exactly one, globally shared, consistently accessible instance. Multiple logger instances would create inconsistency (split logs, missed entries). The Singleton ensures all code uses the same logger instance."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Concept",
    "question": "Which of the following is NOT typically a valid use case for the Singleton pattern?",
    "options": [
      "A database connection manager.",
      "An application-wide configuration settings object.",
      "A Customer entity that represents a specific customer's data.",
      "A random number generator shared across the application."
    ],
    "correctOption": 2,
    "explanation": "Singletons are appropriate when you need exactly one shared, globally accessible instance throughout the application — like a connection pool, logger, or configuration object. A Customer entity represents a specific piece of data and can exist as many instances (one per customer). Making Customer a Singleton would mean only one customer could ever exist in the entire application — obviously wrong for domain objects."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Implementation",
    "question": "What are the three required elements of a basic (non-thread-safe) Singleton implementation?",
    "options": [
      "Public constructor, public static variable, public static method.",
      "Private constructor, static variable to hold the single instance, static method that returns the instance.",
      "Abstract class, factory method, and a static initializer.",
      "Interface, concrete class, and a no-arg constructor."
    ],
    "correctOption": 1,
    "explanation": "A basic Singleton needs: (1) Private constructor — prevents external code from creating instances with new. (2) Static variable — a class-level reference that holds the single instance (persists across all calls). (3) Static getInstance() method — the only way to access the instance; creates it on first call (lazy initialization) and returns the same reference every time after."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Implementation",
    "question": "Why must the constructor of a Singleton class be declared private?",
    "options": [
      "Private constructors run faster than public ones.",
      "Java requires private constructors for all static classes.",
      "Without a private constructor, any code can call new Singleton() and create unlimited instances, defeating the pattern's purpose.",
      "Private constructors prevent the class from being garbage collected."
    ],
    "correctOption": 2,
    "explanation": "The private constructor is the fundamental enforcement mechanism of the Singleton pattern. If the constructor were public (or even package-private), any class could write new MyClass() and create a second (or third, or hundredth) instance. Making it private means instantiation can only happen inside the class itself — specifically inside the static getInstance() method, which controls that only one instance is ever created."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Implementation",
    "question": "Examine this Singleton implementation:\n\npublic class AppConfig {\n    private static AppConfig instance;\n    private AppConfig() {}\n    public static AppConfig getInstance() {\n        if (instance == null) {\n            instance = new AppConfig();\n        }\n        return instance;\n    }\n}\n\nWhat is wrong with this code in a multi-threaded environment?",
    "options": [
      "The constructor must be public for static methods to call it.",
      "A race condition can occur: two threads may both pass the null check simultaneously and each create a separate instance, resulting in two AppConfig instances.",
      "The static variable instance should be declared final.",
      "getInstance() must return a new instance each time to be thread-safe."
    ],
    "correctOption": 1,
    "explanation": "This is the classic Singleton race condition. Thread A and Thread B both call getInstance() simultaneously. Both check if (instance == null) — both see null. Thread A creates a new AppConfig. Before Thread A assigns it, Thread B also creates a new AppConfig. Now two instances exist — the Singleton guarantee is broken. This is called a race condition: a timing-dependent bug that is hard to reproduce and debug."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Thread Safety",
    "question": "Adding the synchronized keyword to getInstance() makes it thread-safe. What is the tradeoff of this approach?",
    "options": [
      "synchronized prevents the method from being called more than once.",
      "synchronized makes the Singleton no longer accessible globally.",
      "Performance suffers — only one thread can execute the synchronized block at a time, causing contention if getInstance() is called frequently.",
      "synchronized requires the constructor to also be synchronized."
    ],
    "correctOption": 2,
    "explanation": "synchronized ensures mutual exclusion — only one thread can execute the method at a time. This eliminates the race condition, but introduces contention: every call to getInstance() must acquire the lock, even after the instance is created and the null check is irrelevant. In high-traffic applications where getInstance() is called thousands of times per second, this synchronization overhead becomes a significant performance bottleneck."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Thread Safety",
    "question": "Describe the race condition in a Singleton: Thread A and Thread B both call getInstance() at the exact same moment and both see instance == null. What happens next without synchronization?",
    "options": [
      "The JVM automatically detects the conflict and allows only Thread A to proceed.",
      "Both threads enter the if block and each creates a new instance. Thread B's instance overwrites Thread A's. Now two instances may be in use by different parts of the application.",
      "One thread blocks automatically until the other finishes.",
      "A NullPointerException is thrown because two threads cannot share a null reference."
    ],
    "correctOption": 1,
    "explanation": "Without synchronization: (1) Thread A checks null — true. (2) Thread B checks null — also true (Thread A hasn't assigned yet). (3) Thread A creates instance1 and assigns it. (4) Thread B creates instance2 and assigns it, overwriting Thread A's. (5) Different parts of the application may hold references to instance1 while new callers get instance2 — the Singleton guarantee is violated, potentially causing inconsistent state."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Thread Safety",
    "question": "Why is the enum approach considered the modern best practice for implementing a thread-safe Singleton in Java?",
    "options": [
      "Enums cannot be instantiated with new, so external code cannot create extra instances.",
      "The JVM initializes enum constants before any threads are activated, guaranteeing a single instance is created safely without any synchronized code.",
      "Enums implement Singleton automatically as part of the Java language specification.",
      "Both A and B are correct reasons."
    ],
    "correctOption": 3,
    "explanation": "The enum Singleton is the preferred modern approach because: (1) Enum constructors are private by default — external code cannot call new. (2) Enum constants are class-level static fields, and the JVM guarantees they are initialized in a thread-safe manner before any application threads run. This eliminates both the race condition and the need for explicit synchronization. No boilerplate, no complexity — inherently correct."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Thread Safety",
    "question": "What is 'double-checked locking' in the context of Singleton, and why is it used?",
    "options": [
      "Checking if the instance is null twice before and after synchronized block to reduce lock contention — only synchronizing for the first creation, not every call.",
      "Locking both the constructor and getInstance() method to ensure safety.",
      "Using two synchronized keywords on the same method.",
      "Checking if the class is loaded twice to ensure the JVM has initialized it."
    ],
    "correctOption": 0,
    "explanation": "Double-checked locking is an optimization over fully-synchronized getInstance(): first check instance without synchronizing (fast path for already-created instances), then synchronize and check again (prevents race on first creation). This avoids the performance cost of acquiring a lock on every call — only the first few calls (during creation) pay the synchronization cost. It's more complex but performs better in frequently-called Singletons."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Disadvantages",
    "question": "A Singleton DatabaseConnectionPool is used by 15 different service classes throughout an application. A developer changes its connection timeout property. What hidden problem can this cause?",
    "options": [
      "The Singleton will be garbage collected after the change.",
      "All 15 service classes are implicitly coupled to the same instance. Changing one property affects all users of the Singleton simultaneously, and this coupling is invisible in the calling code.",
      "Only the first class to call getInstance() will see the change.",
      "Singletons are immutable, so the change will throw an exception."
    ],
    "correctOption": 1,
    "explanation": "This is the Singleton's hidden coupling problem. When 15 classes all use the same Singleton, they are all coupled to each other through it — but none of them reference each other directly, so the coupling is invisible in the code. A change to the Singleton's state or behavior ripples through all users unpredictably. This multi-way, unbounded coupling is why some authors call Singleton an 'anti-pattern' in certain contexts."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Disadvantages",
    "question": "Why can Singletons make unit testing difficult?",
    "options": [
      "Singletons cannot be imported into test classes.",
      "The global, persistent state of a Singleton can carry over between tests, making tests interdependent and results unreliable. It's also hard to substitute a mock Singleton.",
      "Java's JUnit framework does not support Singleton testing.",
      "Singletons require a database to run, making tests slow."
    ],
    "correctOption": 1,
    "explanation": "Singletons break two testing principles: (1) Test isolation — state from one test persists into the next because the Singleton is never destroyed between tests. (2) Dependency substitution — you can't inject a mock Singleton easily because the pattern actively prevents creating new instances. This makes tests that depend on Singletons order-dependent and hard to run in parallel — a significant reason to use Singleton carefully."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Disadvantages",
    "question": "Despite its disadvantages, Singleton is still commonly used in practice. Which of the following represents a JUSTIFIED use of the Singleton pattern?",
    "options": [
      "A singleton User object that holds the currently logged-in user's data.",
      "A singleton Product class because all products share the same price markup.",
      "A singleton application-wide Logger that writes to a single log file, where global access and single-instance guarantees are genuinely required.",
      "A singleton for every service class to avoid creating too many objects."
    ],
    "correctOption": 2,
    "explanation": "Singleton is justified when: (a) exactly one instance is genuinely required by the system's design, and (b) global access is necessary and appropriate. A centralized Logger is a classic legitimate use — one log file, one writer, consistent ordering. User data (changes per session), Product (many exist), and service classes (should be injected, not globally accessed) are all inappropriate Singleton candidates."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Code Analysis",
    "question": "What will happen when this code runs?\n\npublic class Counter {\n    private static Counter instance;\n    public Counter() { }\n    public static Counter getInstance() {\n        if (instance == null) instance = new Counter();\n        return instance;\n    }\n}\n\nCounter a = new Counter();\nCounter b = Counter.getInstance();\nSystem.out.println(a == b);",
    "options": [
      "true — getInstance() returns the same object as a.",
      "false — a was created with new; b was created by getInstance(); they are different objects.",
      "A NullPointerException is thrown because instance was never assigned.",
      "A compile error because Counter() has a public constructor."
    ],
    "correctOption": 1,
    "explanation": "The constructor is public (a mistake in this Singleton). When Counter a = new Counter() runs, it creates instance1. When getInstance() runs, instance is null (the field wasn't set by the new call), so it creates instance2. a and b point to different objects — a == b is false. This is exactly why the constructor MUST be private in a Singleton. A public constructor breaks the pattern entirely."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Code Analysis",
    "question": "What is the output of this code?\n\npublic enum AppSettings {\n    INSTANCE;\n    private int maxConnections = 10;\n    public int getMaxConnections() { return maxConnections; }\n    public void setMaxConnections(int n) { maxConnections = n; }\n}\n\nAppSettings.INSTANCE.setMaxConnections(25);\nSystem.out.println(AppSettings.INSTANCE.getMaxConnections());",
    "options": [
      "10 — enum values are immutable and cannot be changed.",
      "25 — INSTANCE is the single shared enum constant; setting its field affects all subsequent accesses.",
      "A compile error — enums cannot have methods.",
      "A runtime exception — enum fields cannot be modified after initialization."
    ],
    "correctOption": 1,
    "explanation": "AppSettings.INSTANCE is the single instance (Singleton via enum). Calling setMaxConnections(25) modifies the maxConnections field on that one instance. Every subsequent call to AppSettings.INSTANCE.getMaxConnections() returns 25 — there is only one object. Note: enums are immutable in the sense that the enum constants themselves (INSTANCE) cannot be reassigned, but the fields within the enum instance CAN be modified unless declared final."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Code Analysis",
    "question": "A synchronized Singleton's getInstance() method is called 10,000 times per second by 100 threads. The instance was created on the first call. What performance issue exists?",
    "options": [
      "No issue — synchronized methods have no overhead after the first call.",
      "Every one of the 10,000 calls must acquire and release a lock, even though the instance already exists. This serializes all threads through a single bottleneck, significantly reducing throughput.",
      "After 10,000 calls, the Singleton is garbage collected.",
      "100 threads will each create their own instance despite synchronization."
    ],
    "correctOption": 1,
    "explanation": "Synchronized methods acquire a monitor lock on every invocation. After the instance is created, the null check is always false, but every call still pays the lock acquisition cost and serializes threads. With 100 concurrent threads, 99 are waiting at any given moment — throughput is limited to one call at a time. Double-checked locking or the enum approach avoid this by not synchronizing after initialization."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO – Integrated Scenario",
    "question": "A PetClinic application has a Vet domain class that calls VetDAO.save(vet) to persist data. VetDAO internally uses JDBC with a MySQL database. Tomorrow, the team decides to add SQLite support for offline use. What changes are required?",
    "options": [
      "Rewrite the Vet domain class with SQLite-specific calls.",
      "Create a SQLiteVetDAO implementing the same VetDAO interface; the Vet domain class needs no changes.",
      "Delete VetDAO and write SQL directly in the Vet class.",
      "Create a new Vet subclass that overrides the data access methods."
    ],
    "correctOption": 1,
    "explanation": "This is the DAO pattern's payoff. Because Vet uses the VetDAO interface, not the concrete MySQLVetDAO, adding SQLite support means creating a new SQLiteVetDAO class that implements the same interface. The Vet domain class is completely unchanged. This is the Open/Closed Principle in action: the system is open for extension (new DAO) but closed for modification (existing domain code stays the same)."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO – Integrated Scenario",
    "question": "A developer writes a DTO class called FlightDTO for use with a FlightDAO. They mark all fields as private final, set in the constructor, with only getters. Is FlightDTO a proper DTO or a Value Object?",
    "options": [
      "Proper DTO — DTOs always use private final fields.",
      "Value Object — because its attributes are immutable (final fields, no setters), which is the defining characteristic of a Value Object, not a DTO.",
      "Neither — DTOs and Value Objects both require public fields.",
      "Both — DTO and Value Object are interchangeable terms."
    ],
    "correctOption": 1,
    "explanation": "The distinction is mutability: a DTO has mutable state (setters allow updates, often used by frameworks that need to set fields after construction). A Value Object is immutable — all fields are set at construction and cannot change. FlightDTO with private final fields and only getters is a Value Object. For it to be a proper DTO in the Java Bean / DAO sense, it needs a no-arg constructor and public setters."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Classification",
    "question": "Match each pattern to its correct category:\n1. Singleton\n2. DAO\n3. Iterator (traversing a collection)\n4. Decorator (adding behavior to objects dynamically)",
    "options": [
      "1-Behavioral, 2-Creational, 3-Structural, 4-Behavioral",
      "1-Creational (GoF), 2-J2EE software pattern, 3-Behavioral (GoF), 4-Structural (GoF)",
      "1-Structural, 2-Behavioral, 3-Creational, 4-Creational",
      "All four are Creational patterns from the GoF book."
    ],
    "correctOption": 1,
    "explanation": "Singleton is a Creational GoF pattern (controls object creation). DAO is a J2EE software pattern, not in the GoF catalog. Iterator is a Behavioral GoF pattern (describes a process/traversal flow). Decorator is a Structural GoF pattern (describes a composition structure where behaviors are layered). Knowing not just what a pattern does but its source and category is important for the course."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Classification",
    "question": "Why is the DAO pattern NOT classified as a GoF Design Pattern?",
    "options": [
      "DAO was invented after Java, so it cannot be a GoF pattern.",
      "DAO solves enterprise data access concerns specific to Java EE applications. It comes from Core J2EE Patterns — a separate catalog focused on enterprise Java, not the general OOP patterns the GoF book addressed.",
      "DAO is a programming convention, not a design pattern.",
      "GoF patterns only cover user interface design problems."
    ],
    "correctOption": 1,
    "explanation": "The GoF book (1994) addressed general, language-independent OOP design problems. DAO emerged from the Core J2EE Patterns catalog, which focused specifically on enterprise Java (EJB, servlets, data access). DAO solves a Java enterprise concern (decoupling business logic from database access) that wasn't within the GoF's scope. Both are legitimate patterns — they just come from different contexts and catalogs."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – vs DAO",
    "question": "A developer makes their UserDAO a Singleton. Is this always a good idea? What could go wrong?",
    "options": [
      "Yes — DAOs should always be Singletons for performance.",
      "Not necessarily — a Singleton DAO holds shared state (like a database connection). If that connection drops, all code using the DAO is affected simultaneously. Also, Singleton DAOs are harder to mock in tests.",
      "Yes — Singletons prevent multiple database connections from being opened.",
      "Not necessarily — DAOs should use the Factory pattern instead, never Singleton."
    ],
    "correctOption": 1,
    "explanation": "Combining DAO with Singleton requires careful consideration. If the DAO holds a connection that fails, all users of the DAO are broken at once. Testing becomes harder (you can't inject a mock DAO). Stateless DAOs (no instance fields) are more safely made Singleton-like, but stateful ones (holding connections) are problematic. Dependency injection frameworks often manage DAO lifetime more safely than the Singleton pattern."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Java Bean – Applied",
    "question": "A JDBC ResultSet is being mapped to a Java object by an ORM framework. The framework uses reflection to call the no-arg constructor and then populate fields using setter methods. Which class design is required for this to work?",
    "options": [
      "An abstract class with protected fields.",
      "A Java Bean: no-arg constructor, private fields, public getters and setters.",
      "A Value Object: immutable fields with only getters.",
      "A Singleton: only one instance that is reused for all mapped rows."
    ],
    "correctOption": 1,
    "explanation": "ORM frameworks (like Hibernate or MyBatis) use Java reflection to: (1) instantiate the class using its no-arg constructor, (2) call setters to populate each field with column data from the ResultSet. This is exactly why DTOs in DAO architecture follow Java Bean conventions. A Value Object (no setters) or Singleton (private constructor) would prevent the ORM from working. Java Bean conventions exist precisely to support this kind of framework interoperability."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Anti-Pattern Discussion",
    "question": "Some software engineers refer to Singleton as an 'anti-pattern.' Which argument BEST supports this characterization?",
    "options": [
      "Singleton uses too much memory compared to regular objects.",
      "Singleton creates invisible, multi-way coupling between every class that uses it — a change to the Singleton can unexpectedly affect many unrelated parts of the application.",
      "Singleton violates the Java naming convention for classes.",
      "Singleton cannot be used with interfaces."
    ],
    "correctOption": 1,
    "explanation": "The anti-pattern critique targets Singleton's global state and hidden coupling. When ClassA, ClassB, and ClassC all use the same Singleton, they are implicitly coupled — but none of them reference each other, so the coupling is invisible in the code. Changes to the Singleton ripple unpredictably. Global mutable state (which a Singleton often is) is widely considered harmful in modern software design, especially for maintainability and testing."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO – Factory Extension",
    "question": "The material mentions that a Factory pattern is 'commonly added' to the DAO pattern. What problem would a DAO Factory solve?",
    "options": [
      "A DAO Factory would execute SQL queries faster by caching results.",
      "A DAO Factory would create the correct concrete DAO implementation (e.g., MySQLVetDAO vs MongoDBVetDAO) based on configuration, so the domain layer never needs to know which DAO implementation it's using.",
      "A DAO Factory would make all DAO classes Singletons automatically.",
      "A DAO Factory would replace the DAO interface with a single generic class."
    ],
    "correctOption": 1,
    "explanation": "A DAO Factory (a Creational pattern) creates the appropriate DAO implementation at runtime based on configuration. The domain layer asks the factory for a VetDAO and gets a MySQLVetDAO or MongoDBVetDAO depending on the configuration — without the domain layer knowing or caring which one. This furthers the DAO pattern's goal of isolating business logic from persistence details, now extending to the instantiation of the DAO itself."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Enum Implementation",
    "question": "Which of the following is a complete, correct, and thread-safe Singleton implementation using the enum approach?",
    "options": [
      "public enum ConfigManager { INSTANCE; public String getVersion() { return \"1.0\"; } }",
      "public class ConfigManager { public static enum INSTANCE {} }",
      "public enum ConfigManager { private INSTANCE; }",
      "public static enum ConfigManager { INSTANCE(); private ConfigManager() {} }"
    ],
    "correctOption": 0,
    "explanation": "Option A is a complete, correct enum Singleton: the enum has one constant (INSTANCE), which is the single globally accessible instance. Methods can be added directly to the enum. The JVM guarantees INSTANCE is created once, thread-safely, before any threads run. Accessed as: ConfigManager.INSTANCE.getVersion(). Option B incorrectly nests an enum with an anonymous body. Option C makes INSTANCE private (cannot be accessed). Option D adds an unnecessary empty constructor call."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Design Patterns – Benefits",
    "question": "A new team member joins a project and sees the comment '// DAO layer'. Without seeing any code, they immediately know this layer handles data access abstraction, CRUD operations, and isolates business logic from persistence. What design pattern benefit does this demonstrate?",
    "options": [
      "Reusable Solutions — the DAO code can be copied to other projects.",
      "Common Vocabulary — pattern names communicate design intent and structure to any developer who knows the pattern.",
      "Best Practices — the DAO layer automatically follows all SOLID principles.",
      "Scalability — the DAO layer can handle unlimited database connections."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the Common Vocabulary benefit of design patterns. The word 'DAO' instantly communicates: separation of concerns, CRUD abstraction, isolation of persistence. The new developer doesn't need the original developer to explain the design — the pattern name carries that meaning. This shared vocabulary accelerates onboarding, code reviews, and architectural discussions across teams and organizations."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO – Components Identification",
    "question": "In a school management system, identify the correct role for each component:\n- Student class that contains business rules about enrollment\n- StudentDTO with fields matching the database student table\n- StudentDAO with save(), findById(), update(), delete() methods\n- MySQL database",
    "options": [
      "Student = DTO, StudentDTO = Domain Object, StudentDAO = Data Source, MySQL = DAO",
      "Student = Domain/Business Object, StudentDTO = Transfer Object, StudentDAO = Data Access Object, MySQL = Data Source",
      "Student = DAO, StudentDTO = Value Object, StudentDAO = Domain Object, MySQL = DTO",
      "All four are Data Access Objects in the DAO pattern."
    ],
    "correctOption": 1,
    "explanation": "DAO pattern roles: (1) Domain/Business Object (Student) — contains business logic, uses the DAO to get/store data. (2) DTO (StudentDTO) — models data from the database, follows Java Bean conventions, carries data between layers. (3) DAO (StudentDAO) — provides CRUD operations, abstracts the data source. (4) Data Source (MySQL) — the actual persistence mechanism. Understanding these four distinct roles is essential for implementing the DAO pattern correctly."
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "Singleton – Thread Safety Comparison",
    "question": "Rank these three Singleton implementations from LEAST to MOST recommended in modern Java: (A) Basic lazy initialization (no synchronization), (B) Synchronized getInstance(), (C) Enum Singleton.",
    "options": [
      "C → B → A (enum is worst, basic is best)",
      "A → B → C (basic is worst, enum is best)",
      "B → A → C (synchronized is worst, enum is best)",
      "All three are equally recommended."
    ],
    "correctOption": 1,
    "explanation": "From least to most recommended: (A) Basic (no sync) — not thread-safe, race condition risk — worst. (B) Synchronized — thread-safe but performance bottleneck on every call. (C) Enum — thread-safe via JVM initialization guarantees, no synchronization overhead, immune to reflection attacks, serialization-safe — the modern best practice. As the material states, enum is 'considered to be the modern approach for Java.'"
  },
  {
    "quizTitle": "Design Patterns, DAO and Singleton",
    "category": "DAO – Real World Application",
    "question": "A developer writes this domain method:\n\npublic void transferFunds(Account from, Account to, double amount) {\n    // ... business rules ...\n    Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);\n    Statement stmt = conn.createStatement();\n    stmt.executeUpdate(\"UPDATE accounts SET balance=...\" );\n}\n\nWhat DAO principle does this violate, and what is the fix?",
    "options": [
      "Nothing — it's acceptable to include JDBC in business methods for simplicity.",
      "It violates the separation of concerns: JDBC/database code belongs in a DAO, not a business method. Move data access to AccountDAO.transfer() and call that from the domain method.",
      "The violation is using Statement instead of PreparedStatement.",
      "The violation is that SQL is not wrapped in a try-catch block."
    ],
    "correctOption": 1,
    "explanation": "The DAO pattern's core rule: data access code (JDBC, SQL) must not appear in business/domain logic. The transferFunds method mixes financial business rules with raw database calls — tight coupling that makes testing, maintenance, and database switching extremely difficult. The fix: create AccountDAO with a transfer() method containing the JDBC code; the business method calls accountDAO.transfer(from, to, amount) without knowing SQL or JDBC."
  }
]
