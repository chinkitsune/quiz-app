// data/questions/java-oop-with-design-patterns.js
module.exports = [
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Principles – Encapsulation",
    "question": "A developer writes a BankAccount class where the balance field is declared public. Any other class in the system can directly set balance = -99999. Which OOP principle is being violated, and what is the correct fix?",
    "options": [
      "Inheritance — the BankAccount should extend a base Account class.",
      "Polymorphism — the balance field should be overridden in sub-classes.",
      "Encapsulation — balance should be private, with controlled access through methods like deposit() and withdraw().",
      "Abstraction — BankAccount should be made abstract so the field cannot be set directly."
    ],
    "correctOption": 2,
    "explanation": "Encapsulation means bundling data (fields) with the methods that operate on them and restricting direct external access. Making balance private and only allowing changes through methods like deposit() and withdraw() lets the class enforce rules (e.g., no negative balance), protecting the integrity of the object's state."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Principles – Abstraction",
    "question": "A PaymentProcessor class internally handles retry logic, encryption, gateway timeouts, and currency conversion. External code simply calls processPayment(amount). Which OOP principle does this best demonstrate?",
    "options": [
      "Encapsulation — because the fields are private.",
      "Abstraction — because complex implementation is hidden behind a simple public interface.",
      "Inheritance — because PaymentProcessor re-uses logic from a parent class.",
      "Polymorphism — because processPayment() behaves differently at runtime."
    ],
    "correctOption": 1,
    "explanation": "Abstraction means hiding internal complexity and exposing only what the caller needs. The caller doesn't need to know about retries or encryption; they just call processPayment(). Encapsulation is about protecting fields; abstraction is about simplifying the public interface."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Principles – Inheritance",
    "question": "A codebase has three classes: SalariedEmployee, HourlyEmployee, and ContractEmployee. All three duplicate the same calculateTax() and getFullName() methods. What is the best OOP remedy?",
    "options": [
      "Use interfaces so each class can implement its own version of calculateTax().",
      "Copy the methods into a utility class and call them statically.",
      "Move the shared methods into a superclass Employee, and have all three classes extend it.",
      "Use polymorphism to let each class override calculateTax() differently."
    ],
    "correctOption": 2,
    "explanation": "Inheritance solves code duplication by moving shared logic to a superclass. Sub-classes inherit it without repeating it. If the logic later needs updating, you change it in one place. This is distinct from polymorphism, which is about runtime dispatch of overridden methods — inheritance is the structural mechanism that enables that."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Principles – Polymorphism",
    "question": "Consider the following code:\n\nAnimal a = new Dog();\na.makeSound();\n\nDog overrides makeSound() from Animal. Which concept explains why Dog's version of makeSound() is called, even though the variable is declared as type Animal?",
    "options": [
      "Encapsulation — because makeSound() is public.",
      "Abstraction — because Animal hides Dog's implementation.",
      "Polymorphism — because the most specialized implementation is invoked at runtime.",
      "Inheritance — because Dog extends Animal and inherits makeSound()."
    ],
    "correctOption": 2,
    "explanation": "Polymorphism means a superclass reference can point to a subclass instance, and the JVM always calls the most specialized (overriding) method at runtime. Inheritance is what makes Dog a type of Animal; polymorphism is the runtime behavior that follows from it."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Single Responsibility Principle",
    "question": "A class called ReportManager reads data from a database, formats it into a PDF, sends it by email, and logs all activity. A new logging framework is adopted, requiring changes to ReportManager. Which design problem does this reveal?",
    "options": [
      "Lack of inheritance — each responsibility should be a subclass.",
      "Lack of polymorphism — the methods should be overridden in child classes.",
      "Violation of the Single Responsibility Principle — the class has too many reasons to change.",
      "Violation of encapsulation — the fields should be made private."
    ],
    "correctOption": 2,
    "explanation": "The Single Responsibility Principle (SRP) states a class should have only one reason to change. ReportManager has at least four: data access, formatting, email delivery, and logging. A change to any one of these concerns forces changes to this single class. Each responsibility should be its own class."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Single Responsibility Principle",
    "question": "Which class design best follows the Single Responsibility Principle for a library system?",
    "options": [
      "A LibrarySystem class that handles member registration, book checkout, fine calculation, and report generation.",
      "Separate classes: MemberService, CheckoutService, FineCalculator, and ReportGenerator, each handling one concern.",
      "A Library superclass with subclasses MemberLibrary, CheckoutLibrary, and FineLibrary.",
      "A single abstract Library class with abstract methods for each operation."
    ],
    "correctOption": 1,
    "explanation": "SRP requires each class to have exactly one reason to change. Splitting into MemberService, CheckoutService, FineCalculator, and ReportGenerator means a change to fine logic only touches FineCalculator. A monolithic LibrarySystem class must change for any of four reasons — violating SRP."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "The final Keyword",
    "question": "A MedicalRecord class stores a patient's nationalHealthId assigned at creation and never changed thereafter. What is the correct Java declaration?",
    "options": [
      "public String nationalHealthId;",
      "private String nationalHealthId;",
      "private final String nationalHealthId;",
      "protected static String nationalHealthId;"
    ],
    "correctOption": 2,
    "explanation": "The final keyword prevents reassignment after initialization — perfect for identifiers that must never change. private restricts external access (encapsulation). Together, private final String nationalHealthId declares an immutable, hidden field that must be set in the constructor. A plain private field could still be accidentally changed by a setter."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "The final Keyword",
    "question": "A developer declares private final int orderId in an Order class, then writes a setter: public void setOrderId(int id) { this.orderId = id; }. What will happen?",
    "options": [
      "The setter will work but only once.",
      "The code will compile but throw a NullPointerException at runtime.",
      "The code will not compile because final fields cannot be reassigned.",
      "The setter will silently do nothing at runtime."
    ],
    "correctOption": 2,
    "explanation": "In Java, a final field can only be assigned once — either at declaration or in a constructor. Writing a setter that tries to reassign a final field causes a compile-time error. This is enforced by the compiler, not at runtime. This is exactly why final is used for fields that should never change after construction."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Getters & Setters vs Encapsulation",
    "question": "A Vehicle class has a private final String vin (Vehicle Identification Number) and a private int mileage. Which combination of accessors is most appropriate?",
    "options": [
      "Getter and setter for both vin and mileage.",
      "Getter only for vin; getter and setter for mileage.",
      "No accessors — both fields should stay hidden.",
      "Setter only for both, since callers only need to write values."
    ],
    "correctOption": 1,
    "explanation": "A VIN never changes after manufacture, so it should be final with only a getter. Mileage increases over time, so a setter (or better, an addMileage() method) is appropriate. Blindly adding setters to every field defeats encapsulation — a setter on a final field won't even compile, and setters on mutable fields should only exist when the change is a legitimate business operation."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Getters & Setters vs Encapsulation",
    "question": "Which of the following best illustrates the difference between a raw setter and a properly encapsulated mutator method?",
    "options": [
      "public void setAge(int age) { this.age = age; }  vs  public void celebrateBirthday() { this.age++; }",
      "private int age;  vs  public int age;",
      "public int getAge() { return age; }  vs  public int age;",
      "public void setAge(int a) { age = a; }  vs  public void setAge(int age) { this.age = age; }"
    ],
    "correctOption": 0,
    "explanation": "A raw setter (setAge) lets callers set any value, bypassing business rules. A meaningful method like celebrateBirthday() encapsulates the concept — callers don't manipulate the raw field; they invoke a meaningful action and the class controls how the data changes. This is the spirit of abstraction and encapsulation working together."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Composition",
    "question": "An Invoice class creates a new LineItemList object inside its own constructor and stores it. When an Invoice object is garbage collected, the LineItemList is also garbage collected. What relationship does this describe?",
    "options": [
      "Aggregation — because Invoice references LineItemList.",
      "Inheritance — because Invoice depends on LineItemList.",
      "Composition — because Invoice owns and controls the lifetime of LineItemList.",
      "Dependency injection — because LineItemList is created inside Invoice."
    ],
    "correctOption": 2,
    "explanation": "Composition is a 'strong ownership' relationship: the containing object creates and owns the contained object, and both share the same lifecycle. When Invoice dies, so does its LineItemList. This is tighter coupling than aggregation. The key signal is that Invoice itself instantiates the LineItemList with new."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Composition",
    "question": "What is the main disadvantage of using composition (creating dependent objects internally with new) instead of aggregation?",
    "options": [
      "Composed objects cannot have their own methods.",
      "The containing class must change whenever the composed class changes, violating SRP.",
      "Java's garbage collector cannot collect composed objects.",
      "Composition prevents the use of getters and setters."
    ],
    "correctOption": 1,
    "explanation": "When a class creates its dependency with new internally, it is directly coupled to that dependency's constructor and implementation. Any change to the dependency class may require changes to the containing class — violating the Single Responsibility Principle. This tight coupling also makes unit testing harder because you can't swap the dependency."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Aggregation",
    "question": "A Hospital class holds a reference to a Doctor object. The Doctor was created outside Hospital and passed in via the constructor. If the Hospital object is garbage collected, the Doctor object continues to exist. What relationship is this?",
    "options": [
      "Composition — because Hospital holds a reference to Doctor.",
      "Inheritance — because Hospital depends on Doctor.",
      "Aggregation — because Doctor exists independently of Hospital.",
      "Polymorphism — because Doctor can be substituted at runtime."
    ],
    "correctOption": 2,
    "explanation": "Aggregation is a 'has-a' relationship where the contained object has an independent lifecycle. The Doctor was created elsewhere and simply 'lent' to Hospital. When Hospital is destroyed, Doctor lives on. This is looser coupling than composition and reflects real-world cases where the same Doctor might belong to multiple hospitals."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Aggregation",
    "question": "Which code snippet demonstrates aggregation rather than composition?",
    "options": [
      "public class Car { private Engine engine = new Engine(); }",
      "public class Car { private Engine engine; public Car(Engine engine) { this.engine = engine; } }",
      "public class Car extends Engine { }",
      "public class Car { public static Engine engine; }"
    ],
    "correctOption": 1,
    "explanation": "In aggregation, the dependent object is created outside and passed in (injected). Option B receives an already-created Engine via the constructor — the Engine's lifecycle is not controlled by Car. Option A (new Engine() inside Car) is composition. Option C is inheritance. Option D is a public static field, which is neither pattern."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Dependency Injection",
    "question": "A ShoppingCart class originally creates its own DiscountEngine object internally. It is refactored so that a DiscountEngine is passed into ShoppingCart's constructor. What design concept has been applied?",
    "options": [
      "Polymorphism — because DiscountEngine can now be overridden.",
      "Inheritance — because ShoppingCart now extends DiscountEngine.",
      "Dependency Injection — because the dependent object is provided externally.",
      "Composition — because ShoppingCart now owns DiscountEngine."
    ],
    "correctOption": 2,
    "explanation": "Dependency Injection (DI) means the objects a class needs (its dependencies) are provided to it from the outside rather than created inside it. This inverts control — instead of ShoppingCart deciding what DiscountEngine to use, the caller decides and passes it in. This reduces coupling and makes the code easier to test and extend."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Dependency Injection",
    "question": "A developer writes: public class NotificationService { private EmailSender sender = new EmailSender(); }. Why is this harder to test and maintain than using dependency injection?",
    "options": [
      "Because EmailSender has no interface.",
      "Because the constructor is missing.",
      "Because NotificationService is locked to EmailSender and cannot be tested with a mock or switched to SmsSender without modifying the class.",
      "Because private fields cannot be accessed in unit tests."
    ],
    "correctOption": 2,
    "explanation": "Hardcoding new EmailSender() inside the class tightly couples NotificationService to one specific implementation. To test it, you must use a real EmailSender (which may send actual emails). With DI, you pass in any object that satisfies the role — including a mock for testing or an SmsSender for a different deployment. DI enables flexibility and testability."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Coupling",
    "question": "Two classes are said to have high coupling. What does this mean in practical terms?",
    "options": [
      "They share the same superclass.",
      "A change in one class frequently requires a change in the other.",
      "They both implement the same interface.",
      "They are in the same Java package."
    ],
    "correctOption": 1,
    "explanation": "Coupling measures how much classes depend on each other. High coupling means changes ripple — fix or modify one class and you often have to fix another. Low coupling is desirable because classes are more independent, easier to maintain, and easier to reuse. Composition creates tighter coupling than aggregation for exactly this reason."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Coupling",
    "question": "Which scenario represents LOWER coupling between a Printer class and a Document class?",
    "options": [
      "Printer creates a Document internally: private Document doc = new Document();",
      "Printer receives a Document through its constructor: public Printer(Document doc) { this.doc = doc; }",
      "Printer extends Document.",
      "Printer and Document share all public fields."
    ],
    "correctOption": 1,
    "explanation": "Receiving the dependency through the constructor (aggregation / dependency injection) is lower coupling. The Printer doesn't need to know how to construct a Document; it just uses one. This allows the caller to supply different document types. Creating internally (composition) or extending (inheritance) all increase coupling significantly."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "UML Class Diagrams",
    "question": "In a UML class diagram, what does the – (minus) symbol in front of an attribute name signify?",
    "options": [
      "The attribute is static.",
      "The attribute is private.",
      "The attribute is abstract.",
      "The attribute is final."
    ],
    "correctOption": 1,
    "explanation": "UML uses visibility modifiers: – for private, + for public, # for protected, and ~ for package-private. A minus in front of an attribute means it cannot be accessed directly from outside the class — exactly what private means in Java. This is a fundamental UML notation every OO developer must know."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "UML Class Diagrams",
    "question": "A UML class diagram shows a filled diamond (◆) on the line between Classroom and Desk, with the diamond on the Classroom side. What does the filled diamond indicate?",
    "options": [
      "Inheritance — Classroom extends Desk.",
      "Aggregation — Desk exists independently of Classroom.",
      "Composition — Classroom owns Desk and controls its lifecycle.",
      "Dependency — Classroom uses Desk temporarily."
    ],
    "correctOption": 2,
    "explanation": "In UML, a filled (solid) diamond on the owning class side indicates composition — a strong ownership where the part cannot exist independently. An open (hollow) diamond indicates aggregation, where the part can exist independently. An arrow with a triangle indicates inheritance. Understanding these symbols is essential for reading and writing class diagrams."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "UML Class Diagrams",
    "question": "In a UML class diagram, a method is shown as: +calculateTotal(quantity:int, price:double):double. What does the + mean, and what is the return type?",
    "options": [
      "+ means static; return type is void.",
      "+ means public; return type is double.",
      "+ means protected; return type is double.",
      "+ means abstract; return type is int."
    ],
    "correctOption": 1,
    "explanation": "In UML method notation: visibility marker (+ = public) comes first, then the method name, then parameters in parentheses as name:type, and finally :returnType after the closing parenthesis. So +calculateTotal(quantity:int, price:double):double is a public method returning a double."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Software Patterns",
    "question": "A team of developers from different companies can immediately understand each other's design by the phrase 'we used the Observer pattern here.' What property of software patterns does this demonstrate?",
    "options": [
      "Patterns are language-specific implementations.",
      "Patterns form a shared vocabulary that enables clear communication between developers.",
      "Patterns are only useful in Java.",
      "Patterns guarantee runtime performance improvements."
    ],
    "correctOption": 1,
    "explanation": "One of the key benefits of software patterns is that they create a common vocabulary. Instead of explaining a complex design in detail, developers can use pattern names as shorthand. This speeds up communication, code reviews, and documentation. Patterns are also language-independent — the same pattern can be implemented in Java, Python, or C#."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Software Patterns",
    "question": "Which of the following most accurately describes what a software design pattern IS?",
    "options": [
      "A reusable library of pre-written Java classes.",
      "A specific algorithm that solves a performance problem.",
      "A general, reusable template for solving a recurring design problem in software.",
      "A UML diagram that must be followed exactly when writing code."
    ],
    "correctOption": 2,
    "explanation": "A design pattern is a conceptual template — a proven solution to a recurring problem. It is not code you copy-paste (that would be a library), not a fixed algorithm, and not a mandatory UML prescription. It's a language-independent blueprint that guides how to structure your solution, adaptable to your specific context."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "GoF Design Patterns",
    "question": "The 'Gang of Four' (GoF) book is a foundational reference in software design. What does 'Gang of Four' refer to?",
    "options": [
      "The four OOP principles: encapsulation, abstraction, inheritance, polymorphism.",
      "The four SOLID principles most commonly applied in Java.",
      "The four authors of the book 'Design Patterns: Elements of Reusable Object-Oriented Software'.",
      "Four design patterns considered essential for every Java application."
    ],
    "correctOption": 2,
    "explanation": "The 'Gang of Four' nickname refers to the four authors — Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides — who wrote the landmark book 'Design Patterns: Elements of Reusable Object-Oriented Software.' Their catalog of 23 patterns became the standard reference for design patterns in OOP."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Delegation",
    "question": "A Manager class has a method getTeamReport() that simply calls teamReporter.generateReport() and returns the result. Manager itself does no report generation. This technique is called:",
    "options": [
      "Inheritance — Manager inherits generateReport() from TeamReporter.",
      "Polymorphism — generateReport() is dispatched at runtime.",
      "Delegation — Manager forwards the responsibility to another object.",
      "Encapsulation — Manager hides the report behind a private method."
    ],
    "correctOption": 2,
    "explanation": "Delegation means one object passes (delegates) a task to another object rather than handling it itself. Manager doesn't implement report logic — it delegates to TeamReporter. This is different from inheritance (where you inherit the method) and is a key pattern for achieving code reuse without tight coupling through inheritance."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Delegation",
    "question": "A FlightBooking class has a method getPassengerFullName() that returns passenger.getFullName(). What is this an example of?",
    "options": [
      "Abstraction — FlightBooking simplifies access to passenger data.",
      "Delegation — FlightBooking forwards the call to the Passenger object.",
      "Polymorphism — getFullName() may behave differently for different passenger types.",
      "Encapsulation — the passenger field is hidden inside FlightBooking."
    ],
    "correctOption": 1,
    "explanation": "Delegation: FlightBooking doesn't compute the full name itself — it hands the responsibility off to the Passenger object that owns that data. This is a clean way to expose information through a higher-level class without duplicating logic. It's also how abstraction and delegation work together to simplify a class's public interface."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Re-usability & Context",
    "question": "A class called ATMSession does all of the following: reads card data, validates PIN, processes withdrawals, and prints a receipt to console. A new mobile banking app wants to reuse the withdrawal logic. Why is this difficult?",
    "options": [
      "Because the class uses inheritance.",
      "Because console I/O is mixed in with business logic, making the class unsuitable for non-console contexts.",
      "Because private fields prevent the mobile app from accessing the data.",
      "Because the withdrawal logic is abstract and cannot be instantiated."
    ],
    "correctOption": 1,
    "explanation": "When I/O logic is embedded directly in a class, it is 'stuck' to that presentation layer. A mobile app has no console, so any class hardwired to System.out.println() cannot be reused without modification. Good OOP design separates business logic (withdrawals) from presentation (printing), enabling the core logic to be reused across console, web, and mobile contexts."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Re-usability & Context",
    "question": "A developer separates a Reservation class (business logic only) from a ReservationConsoleApp class (handles all I/O). What principle is being applied, and what benefit does it provide?",
    "options": [
      "Inheritance — Reservation can now extend ReservationConsoleApp.",
      "Single Responsibility Principle — each class has one reason to change, and Reservation can be reused in web or mobile apps.",
      "Abstraction — the reservation details are hidden from the user.",
      "Polymorphism — ReservationConsoleApp can be substituted at runtime."
    ],
    "correctOption": 1,
    "explanation": "By keeping Reservation free of I/O, it can be reused in any context — console, web API, or mobile. ReservationConsoleApp handles the console-specific presentation. Each class now has a single reason to change (business rule changes touch Reservation; UI changes touch the app class). This is SRP in action, enabling true reusability."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Code Analysis",
    "question": "What is the key OOP problem with the following code?\n\npublic class Library {\n    public static void main(String[] args) {\n        String bookTitle = \"Clean Code\";\n        String author = \"Robert Martin\";\n        int isbn = 123456;\n        System.out.println(bookTitle + \" by \" + author);\n    }\n}",
    "options": [
      "The variables should be final.",
      "Everything is in main() — there is no separation of data, logic, or I/O, and no OOP principles are applied.",
      "The class should extend a Book class.",
      "System.out.println() should be replaced with printf()."
    ],
    "correctOption": 1,
    "explanation": "This is the 'beginning programming' anti-pattern: all data and behaviour live inside main(). There is no Book class to encapsulate the data, no separation of concerns, and the design cannot be reused in any other context. If you need a second book, you repeat all variables. Adding features makes maintenance harder and harder."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Code Analysis",
    "question": "Examine this code:\n\npublic class Laptop {\n    public String brand;\n    public int ramGB;\n    public double price;\n}\n\nWhich OOP improvements should be made first?",
    "options": [
      "Add a main() method to Laptop so it can be run directly.",
      "Make all fields private and provide appropriate getters; add setters only where the data is allowed to change.",
      "Declare all fields static so they are shared across all Laptop instances.",
      "Add a toString() method and nothing else."
    ],
    "correctOption": 1,
    "explanation": "Public fields violate encapsulation — any code can set brand = null or price = -500. Making fields private restricts access. Getters expose read access. Setters should only exist for fields that legitimately change (e.g., price might change; a serial number might not). This is the first and most important OOP correction."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Code Analysis",
    "question": "What does this code demonstrate?\n\npublic class Order {\n    private final String orderId;\n    private Address shippingAddress;\n\n    public Order(String orderId, Address address) {\n        this.orderId = orderId;\n        this.shippingAddress = address;\n    }\n\n    public void updateShippingAddress(Address newAddress) {\n        this.shippingAddress = newAddress;\n    }\n}",
    "options": [
      "Composition — Order creates Address internally.",
      "Aggregation with dependency injection: Address is passed in externally; orderId is immutable; shippingAddress can change through a named method.",
      "Inheritance — Order extends Address.",
      "Polymorphism — Address behaves differently at runtime."
    ],
    "correctOption": 1,
    "explanation": "This code demonstrates several best practices at once: (1) Aggregation — Address is created outside and passed in, giving it an independent lifecycle. (2) Dependency Injection — the dependency is injected via constructor. (3) Immutability where appropriate — orderId is final. (4) Meaningful mutation method — updateShippingAddress() is semantically clear rather than a raw setter."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Code Analysis",
    "question": "A developer writes:\n\npublic class Invoice {\n    private LineItem item = new LineItem(\"Widget\", 9.99);\n}\n\nLater, the product team says Invoice must support multiple line items. What deeper problem does this reveal?",
    "options": [
      "LineItem should extend Invoice.",
      "Invoice hardcoded one LineItem using composition, violating SRP and limiting flexibility — it should accept line items externally.",
      "LineItem should be declared static.",
      "The constructor of LineItem must be made private."
    ],
    "correctOption": 1,
    "explanation": "Creating LineItem inside Invoice with new is composition — tight coupling that controls the dependent object's lifecycle. This also violates SRP (Invoice decides what line items exist) and makes the design inflexible. A better design accepts a list of LineItems injected from outside, supporting any number and any type while keeping Invoice focused on invoice-level logic."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Composition vs Aggregation",
    "question": "A House class creates Room objects internally in its constructor. A University class holds references to Department objects that exist independently and are shared between faculties. Which pair of relationships is correct?",
    "options": [
      "House–Room: aggregation; University–Department: composition.",
      "House–Room: composition; University–Department: aggregation.",
      "Both are inheritance relationships.",
      "House–Room: polymorphism; University–Department: delegation."
    ],
    "correctOption": 1,
    "explanation": "House creates and owns its Rooms — if the house is demolished, rooms don't exist independently. This is composition. A University holds references to Departments that exist independently and may be shared — this is aggregation. The key test: 'Can the part exist without the whole?' Yes for Department, no for Room (in this context)."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Composition vs Aggregation",
    "question": "From a testability standpoint, why is aggregation generally preferred over composition for dependencies?",
    "options": [
      "Aggregation allows subclasses to be created more easily.",
      "With aggregation, you can inject a mock or stub dependency during testing without modifying the class.",
      "Composition uses less memory at runtime.",
      "Aggregation makes the final keyword unnecessary."
    ],
    "correctOption": 1,
    "explanation": "When a class creates its own dependencies (composition), you can't replace them in tests without changing the class. With aggregation (injection), you pass any implementation — including test doubles (mocks/stubs) — from outside. This is the foundation of testable design and is why frameworks like Spring are built on dependency injection."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Inversion of Control",
    "question": "Traditionally, a class controls what dependencies it uses by creating them with new. After applying dependency injection, who controls which dependency is used?",
    "options": [
      "The Java runtime (JVM).",
      "The class itself, using a factory method.",
      "The calling code (the creator/assembler), which provides the dependency from outside.",
      "The garbage collector, which determines what objects are available."
    ],
    "correctOption": 2,
    "explanation": "Inversion of Control (IoC) means that control over dependency creation is inverted — moved from the class itself to an external assembler (caller, framework, or container). Instead of Foo deciding it needs a new Bar(), the assembler decides which Bar implementation to give to Foo. This is exactly what 'inversion' means in IoC, and dependency injection is the mechanism that achieves it."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Encapsulation – Applied",
    "question": "A TemperatureSensor class stores readings in a private double[] readings array. It exposes getReadings() which returns the actual array reference. Why is this still an encapsulation problem?",
    "options": [
      "Arrays cannot be private in Java.",
      "The caller receives the actual array reference and can modify its contents directly, bypassing the class's control.",
      "double arrays must be returned as ArrayList.",
      "Encapsulation only applies to scalar fields, not arrays."
    ],
    "correctOption": 1,
    "explanation": "Even though the field is private, returning the actual array reference leaks internal state. The caller can do getReadings()[0] = -999.0 without using any class method. True encapsulation requires either returning a defensive copy (Arrays.copyOf), returning an unmodifiable view, or returning individual values through controlled methods. This is a subtle but important encapsulation pitfall."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Inheritance vs Composition",
    "question": "A developer makes a Stack class extend ArrayList, reasoning that 'a Stack uses a list internally.' Later, callers can call add(), remove(int index), and other ArrayList methods that break stack behavior. What went wrong?",
    "options": [
      "ArrayList cannot be extended in Java.",
      "The developer used inheritance when composition was more appropriate — 'is-a' failed the test, so Stack should have contained an ArrayList, not extended it.",
      "Stack should have been abstract.",
      "ArrayList should have been declared final to prevent this."
    ],
    "correctOption": 1,
    "explanation": "Inheritance should only be used when a true 'is-a' relationship exists. A Stack is NOT an ArrayList — it's a restricted access data structure. By extending ArrayList, all ArrayList methods become public, breaking the stack contract. The correct approach is composition: Stack contains an ArrayList privately and exposes only push(), pop(), and peek()."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Applied – Scenario",
    "question": "A ParkingGarage system needs to track Vehicles. Each Vehicle has a licensePlate (never changes), a color (can change), and an ownerName (can change). Which field declarations are most appropriate?",
    "options": [
      "All three fields should be public for easy access.",
      "private final String licensePlate; private String color; private String ownerName; with getters for all and setters only for color and ownerName.",
      "All three fields should be private final, assigned in the constructor.",
      "licensePlate should be public static; color and ownerName should be private."
    ],
    "correctOption": 1,
    "explanation": "licensePlate never changes — it should be private final (assigned at construction, getter only). color and ownerName can legitimately change, so they need setters. Making licensePlate final prevents accidental reassignment. Making all final would prevent legitimate updates to color and ownerName. This question tests the judgment of when to use final and when not to."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Applied – Scenario",
    "question": "A food delivery app has an Order class. Each Order has one Customer and one Restaurant. Both Customer and Restaurant exist independently in the system and may be part of many Orders. What relationship should Order have with Customer and Restaurant?",
    "options": [
      "Composition — Order should create new Customer and Restaurant instances internally.",
      "Inheritance — Order should extend both Customer and Restaurant.",
      "Aggregation — Order should hold references to independently existing Customer and Restaurant objects.",
      "Delegation — Order should forward all calls to Customer and Restaurant."
    ],
    "correctOption": 2,
    "explanation": "Customer and Restaurant exist independently of any single Order — a customer places many orders, and a restaurant receives many orders. Neither should be destroyed when an Order is cancelled. This is aggregation: Order holds references to independently managed objects. Composition would wrongly tie their lifetimes to the Order. This mirrors the Student/Course aggregation shown in v4."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Applied – Scenario",
    "question": "A Passport class is designed. Every Passport has a passportNumber assigned at issuance. The holder's address may be updated at renewal. Which design decision is INCORRECT?",
    "options": [
      "Declaring passportNumber as private final String.",
      "Providing a getter for passportNumber.",
      "Providing a setter for passportNumber so it can be corrected if entered wrong.",
      "Providing a setter for holderAddress."
    ],
    "correctOption": 2,
    "explanation": "A passport number is a permanent government identifier — once issued, it must never change (that would be fraud). Providing a setter for it breaks the immutability that final enforces. If data entry errors occur, the solution is validation at construction time (throw an exception for invalid input), not a setter that allows post-construction reassignment."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Applied – Scenario",
    "question": "A CoffeeMachine class has these methods: brewEspresso(), frothMilk(), heatWater(), and pressurizeBoiler(). Callers only need brewCoffee(). The heating, pressurizing, and frothing are internal steps. Which OOP principle guides making heatWater() and pressurizeBoiler() private?",
    "options": [
      "Inheritance — they should be moved to a superclass.",
      "Polymorphism — they should be overridden by sub-classes.",
      "Abstraction — implementation complexity is hidden; only the high-level action is exposed publicly.",
      "Encapsulation — public fields must be wrapped in methods."
    ],
    "correctOption": 2,
    "explanation": "Abstraction means implementing complexity inside the class but publishing only high-level methods. Callers don't need to know about pressurizeBoiler() or heatWater() — they just want coffee. Making internal steps private and exposing only brewCoffee() simplifies the public interface and allows the internal implementation to change without affecting callers."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Polymorphism Applied",
    "question": "An array of type Shape[] contains instances of Circle, Rectangle, and Triangle, all of which override draw(). When you iterate and call shape.draw(), each object draws itself correctly. Which concept makes this work?",
    "options": [
      "Encapsulation — each Shape's data is private.",
      "Abstraction — Shape hides the drawing implementation.",
      "Polymorphism — a superclass reference dispatches to the most specialized override at runtime.",
      "Composition — each Shape contains a drawing engine."
    ],
    "correctOption": 2,
    "explanation": "This is runtime polymorphism (dynamic dispatch). The variable type is Shape, but the actual object is Circle, Rectangle, or Triangle. Java always calls the overriding method of the actual object's class. This is why polymorphism is powerful: you can write generic code (iterate a Shape[]) that automatically does the right specialized thing for each object."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "SOLID – Overview",
    "question": "The SOLID principles are a set of guidelines for OOP design. Based on the course material, which SOLID principle is most directly demonstrated by separating a Student class (data/logic) from a TestStudent class (I/O)?",
    "options": [
      "Open/Closed Principle.",
      "Liskov Substitution Principle.",
      "Single Responsibility Principle.",
      "Interface Segregation Principle."
    ],
    "correctOption": 2,
    "explanation": "The Single Responsibility Principle (SRP) says a class should have one and only one reason to change. Separating the Student data/logic from the console I/O means: the Student class changes only when student business rules change, and the app class changes only when the console interface changes. Two reasons to change = two classes."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Design Tradeoffs",
    "question": "A developer argues: 'I'll add a getter and setter for every private field automatically — it's more flexible.' What is the flaw in this reasoning?",
    "options": [
      "Getters and setters cannot be generated automatically in Java.",
      "Adding setters to all fields — especially final ones — defeats encapsulation and abstraction, allowing unrestricted external mutation of internal state.",
      "Getters reduce performance because of extra method calls.",
      "Setters prevent inheritance from working correctly."
    ],
    "correctOption": 1,
    "explanation": "Blindly generating getters and setters is a common beginner mistake. A public setter on every field is functionally equivalent to having a public field — any caller can put the object in any state, bypassing any business rules. Setters should exist only when external mutation is a legitimate, intended operation. final fields must not have setters at all."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Design Tradeoffs",
    "question": "After refactoring from Student_v3 (composition) to Student_v4 (aggregation), what key improvement was achieved regarding SRP?",
    "options": [
      "Student no longer needs any methods.",
      "Student no longer creates Course, so changes to Course's constructor no longer force changes to Student.",
      "Course can now extend Student.",
      "Student can now be instantiated without any arguments."
    ],
    "correctOption": 1,
    "explanation": "In v3, Student's constructor called new Course(...) — any change to Course's constructor required modifying Student, giving Student a second reason to change. In v4, Student accepts a Course from outside. Course construction is the caller's responsibility. Student only changes for student-related reasons — SRP is restored."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Syntax – final",
    "question": "Which of the following is a valid Java class using final correctly for an immutable identifier?",
    "options": [
      "public class Product { public final int productId; public void setProductId(int id) { productId = id; } }",
      "public class Product { private final int productId; public Product(int productId) { this.productId = productId; } public int getProductId() { return productId; } }",
      "public class Product { private int final productId; }",
      "public class Product { final private int productId = 0; public void setProductId(int id) { this.productId = id; } }"
    ],
    "correctOption": 1,
    "explanation": "Option B is correct: private final int productId is assigned in the constructor (the only valid time for a final instance field), and only a getter is provided. Option A makes the field public and tries to reassign final in a setter — compile error. Option C has invalid syntax (int final). Option D tries to reassign a final field in a setter — compile error."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Syntax – Constructors",
    "question": "A class Ticket has private final String eventId and private String seatNumber. Which constructor is correctly written?",
    "options": [
      "public void Ticket(String eventId, String seatNumber) { this.eventId = eventId; this.seatNumber = seatNumber; }",
      "public Ticket(String eventId, String seatNumber) { this.eventId = eventId; this.seatNumber = seatNumber; }",
      "public Ticket() { eventId = \"unknown\"; seatNumber = \"A1\"; }",
      "private Ticket(String eventId) { this.seatNumber = seatNumber; }"
    ],
    "correctOption": 1,
    "explanation": "A constructor has no return type (not even void) and must match the class name exactly. Option A incorrectly uses void. Option B is correct — public Ticket(...) initializes both fields. Option C uses no-args, which cannot initialize a final field unless it's hardcoded (problematic). Option D is private and tries to use seatNumber which is not in scope."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Syntax – this keyword",
    "question": "In the method public void setSpeed(int speed) { this.speed = speed; }, what does 'this' refer to?",
    "options": [
      "The class itself (like a static reference).",
      "The current object instance on which the method is being called.",
      "The parameter named speed.",
      "The superclass of the current class."
    ],
    "correctOption": 1,
    "explanation": "'this' refers to the current object instance. When a method parameter has the same name as an instance field (both named 'speed'), 'this.speed' refers to the instance field and 'speed' alone refers to the parameter. Without 'this', you'd be assigning the parameter to itself, not updating the field — a common bug."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Misconceptions",
    "question": "A student claims: 'My class follows OOP because I used private fields and getters/setters.' Their class is a 500-line god-class that manages users, payments, emails, and logging all in one place. What is wrong with the student's claim?",
    "options": [
      "Private fields and getters/setters are not valid Java syntax.",
      "Encapsulation alone is not sufficient — good OOP also requires SRP, low coupling, and appropriate use of all four OOP principles.",
      "God-classes are acceptable if all fields are private.",
      "The student is correct; private fields and getters/setters are the only OOP requirements."
    ],
    "correctOption": 1,
    "explanation": "Encapsulation (private fields + getters/setters) is necessary but not sufficient for good OOP design. A 500-line class handling multiple unrelated concerns violates SRP, increases coupling, reduces reusability, and makes maintenance difficult. True OOP requires balancing all four principles — encapsulation, abstraction, inheritance (where appropriate), and polymorphism — along with SOLID principles."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Misconceptions",
    "question": "A student writes: 'I gave my class a changeName() method instead of a setName() setter. That's worse because setName() follows the standard JavaBean convention.' Is the student correct?",
    "options": [
      "Yes — JavaBeans conventions must always be followed.",
      "No — a meaningful method like changeName() can be more expressive and may allow additional logic (e.g., logging the change or validating the new name).",
      "Yes — changeName() is not a recognized Java pattern.",
      "No — only final fields should use meaningful method names."
    ],
    "correctOption": 1,
    "explanation": "JavaBean conventions (getName/setName) are useful for framework interoperability (e.g., serialization), but meaningful method names can be superior for domain logic. changeName() signals intent more clearly than setName() and can include business logic like validation or audit logging. Slavishly following conventions without understanding them can hurt design quality."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "OOP Misconceptions",
    "question": "A developer puts all their code in one massive class with a main() method, but argues 'it works, so OOP doesn't matter.' What practical problems will emerge as the application grows?",
    "options": [
      "Java will throw a TooMuchCodeException at compile time.",
      "The code becomes increasingly hard to maintain, impossible to reuse in other contexts, and cannot be properly unit tested.",
      "The JVM will run out of memory with one large class.",
      "Java's compiler limits a class to 200 lines."
    ],
    "correctOption": 1,
    "explanation": "'It works' is a short-term view. As features are added to a monolithic main() class, every change risks breaking something else (no isolation). Console I/O cannot be reused in a web context. There's nothing to unit test in isolation. Technical debt accumulates until the cost of adding a feature exceeds the cost of rewriting the whole thing. OOP principles exist precisely to prevent this."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Applied – Design Decision",
    "question": "You are designing a GymMembership system. A Member has a MembershipPlan. Multiple members can share the same plan (e.g., 'Gold Plan'). Plans are managed independently. Should MembershipPlan be created inside Member, or passed in?",
    "options": [
      "Created inside Member using new — MembershipPlan belongs to one member.",
      "Passed in from outside (aggregation) — since plans exist independently and are shared among many members.",
      "Member should extend MembershipPlan since they are related.",
      "MembershipPlan should be static inside Member."
    ],
    "correctOption": 1,
    "explanation": "Since MembershipPlan objects are shared across many Members and exist independently (you manage plans separately from members), aggregation is correct. Creating a new plan inside each Member would mean each member has a private plan copy, making it impossible to update a plan for all members at once. Shared, independent objects are the hallmark of aggregation."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Applied – Design Decision",
    "question": "You are designing a BlogPost class. Each post has a permanent postId (assigned at creation) and a title that authors can edit. Which implementation is best?",
    "options": [
      "public String postId; public String title;",
      "private final String postId; private String title; with constructor for both, getter for both, and setter only for title.",
      "private String postId; private String title; with setters for both.",
      "private final String postId; private final String title; with only getters."
    ],
    "correctOption": 1,
    "explanation": "postId is permanent — final prevents reassignment, and there's no setter. title is mutable — a setter allows edits. Both fields are private (encapsulation). The constructor sets both at creation. Option D makes title final, preventing edits. Option C allows postId to be changed via setter. Option A makes everything public — no encapsulation at all."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Applied – Design Decision",
    "question": "A SmartHome system has a House class that contains multiple Room objects. Each Room contains a Thermostat. If the House is demolished (object destroyed), should the Rooms and Thermostats also cease to exist?",
    "options": [
      "No — Rooms and Thermostats should be aggregated because they might be reused in other houses.",
      "Yes — this is composition, and it's appropriate because Rooms and Thermostats have no meaning outside the specific House they belong to.",
      "Rooms should be aggregated, but Thermostats should extend House.",
      "All three classes should be merged into one SmartHome class."
    ],
    "correctOption": 1,
    "explanation": "A Room has no existence independent of the House it belongs to — this is a strong ownership (composition) relationship. Similarly, a Thermostat is a physical part of a Room; it doesn't exist independently. When the House is gone, its Rooms and their Thermostats are meaningless. Composition is semantically correct when the part cannot outlive or exist without the whole."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Tracing",
    "question": "What will the following code output?\n\npublic class Engine {\n    private final String type;\n    public Engine(String type) { this.type = type; }\n    public String getType() { return type; }\n}\npublic class Car {\n    private Engine engine;\n    public Car(Engine e) { this.engine = e; }\n    public String getEngineType() { return engine.getType(); }\n}\n// In main:\nEngine e = new Engine(\"V8\");\nCar c = new Car(e);\nSystem.out.println(c.getEngineType());",
    "options": [
      "Engine",
      "V8",
      "null",
      "Compile error — engine is private."
    ],
    "correctOption": 1,
    "explanation": "The Engine is constructed with 'V8', stored in its final type field. The Car receives this Engine via its constructor (aggregation/dependency injection). getEngineType() delegates to engine.getType(), which returns 'V8'. This code demonstrates aggregation, delegation, dependency injection, encapsulation, and immutability all in one example."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Tracing",
    "question": "A class Employee has a private final int employeeId and a public void setEmployeeId(int id) { this.employeeId = id; } method. What happens when you try to compile this?",
    "options": [
      "The code compiles and runs, but setEmployeeId() is silently ignored at runtime.",
      "The code compiles but throws an UnsupportedOperationException at runtime.",
      "The code does not compile because a final field cannot be reassigned after initialization.",
      "The code compiles fine — final only applies to local variables."
    ],
    "correctOption": 2,
    "explanation": "The Java compiler enforces final: once a final instance field is set (in the constructor or at declaration), it cannot be reassigned anywhere — including inside methods. The setEmployeeId() method tries to reassign this.employeeId, which causes a compile-time error: 'cannot assign a value to final variable employeeId.' This is caught before the program ever runs."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Code Tracing",
    "question": "What is the relationship between Wheel and Bicycle in the following code, and what is the consequence if bike is garbage collected?\n\npublic class Bicycle {\n    private Wheel wheel;\n    public Bicycle(Wheel w) { this.wheel = w; }\n}",
    "options": [
      "Composition — when bike is collected, wheel is also collected.",
      "Aggregation — when bike is collected, wheel may still be referenced elsewhere and survive.",
      "Inheritance — Bicycle extends Wheel.",
      "Delegation — Bicycle forwards all calls to Wheel."
    ],
    "correctOption": 1,
    "explanation": "Because Wheel is passed in through the constructor (not created with new inside Bicycle), this is aggregation. The Wheel object may still be referenced by other variables elsewhere. When the Bicycle is garbage collected, the JVM only collects the Wheel if no other references to it exist. Compare this to composition, where the lifecycle is always tied together."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Patterns – Language Independence",
    "question": "A Python developer and a Java developer both say they used the 'Singleton pattern' in their projects. Can they meaningfully discuss design even though they use different languages?",
    "options": [
      "No — design patterns are Java-specific and cannot be applied in Python.",
      "Yes — software design patterns are language-independent concepts; the implementation differs but the pattern is the same.",
      "No — Python does not support OOP, so patterns don't apply.",
      "Yes — but only GoF patterns work across languages; other patterns are language-specific."
    ],
    "correctOption": 1,
    "explanation": "Design patterns are language-independent blueprints. The same pattern can be implemented in Java, Python, C#, TypeScript, or any OOP language. The concept is the same; only the syntax differs. This language-independence is one of the key benefits: it enables cross-language communication and creates a universal design vocabulary for software engineers."
  },
  {
    "quizTitle": "OOP with Design Patterns",
    "category": "Patterns – Goals",
    "question": "A senior developer refactors a codebase using established design patterns. The code becomes longer but more modular. A junior developer complains it was simpler before. What benefit justifies the additional complexity?",
    "options": [
      "Patterns always reduce the number of classes needed.",
      "Patterns improve scalability, maintainability, and reusability — making the system easier to extend and modify over time, even if it's more verbose initially.",
      "Patterns are required by Java's compiler for enterprise applications.",
      "Patterns eliminate the need for unit testing."
    ],
    "correctOption": 1,
    "explanation": "The short-term cost of patterns is additional structure and verbosity. The long-term benefit is a codebase that is easier to maintain, extend (scale), and reuse. A 'simple' monolith becomes a nightmare at scale; a pattern-based design absorbs new requirements with minimal change. This tradeoff is fundamental to professional software engineering."
  }
];
