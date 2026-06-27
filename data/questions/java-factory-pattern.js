// data/questions/java-factory-pattern .js

module.exports = 
[
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Purpose",
    "question": "A team needs to document the exact order in which a CheckoutService calls InventoryService, then PaymentService, then ShippingService during an online order. Which UML diagram type is most appropriate?",
    "options": [
      "Use Case Diagram — because it shows what the system does.",
      "Class Diagram — because it shows the static structure of classes.",
      "Sequence Diagram — because it shows the time-ordered flow of messages between objects.",
      "UML Component Diagram — because it shows physical deployment."
    ],
    "correctOption": 2,
    "explanation": "A Sequence Diagram captures the dynamic behavior of a system — specifically the order and timing of messages exchanged between objects. Unlike a Use Case Diagram (which shows WHAT the system does for actors) or a Class Diagram (which shows static structure), a Sequence Diagram answers: 'in what order do these objects talk to each other, and what do they say?'"
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Layout",
    "question": "In a UML Sequence Diagram showing interactions between a Customer, OrderService, and PaymentGateway, how is time represented?",
    "options": [
      "Time flows from left to right across the diagram.",
      "Time flows from top to bottom; each vertical lifeline represents one participating object.",
      "Time is represented by the thickness of the arrows.",
      "Time flows from bottom to top, simulating a stack trace."
    ],
    "correctOption": 1,
    "explanation": "In a Sequence Diagram, the vertical axis represents time flowing from top to bottom — the earliest message appears near the top, and later messages appear progressively lower. The horizontal axis lists the different objects (lifelines) involved in the interaction. This top-to-bottom convention is fundamental to reading and constructing sequence diagrams correctly."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Lifeline",
    "question": "A vertical dashed line in a Sequence Diagram represents an InventoryManager object that exists throughout the entire interaction, even when it's not actively processing anything. What is this element called?",
    "options": [
      "Activation bar",
      "Lifeline",
      "Message arrow",
      "Self-message loop"
    ],
    "correctOption": 1,
    "explanation": "A Lifeline is the vertical dashed line representing an object's existence over the duration of the interaction. It exists for the entire timespan shown in the diagram, regardless of whether the object is actively doing work. This is different from an Activation Bar, which only appears during the specific period the object is actively processing a message."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Activation Bar",
    "question": "In a Sequence Diagram, a thin rectangle appears on the Logger lifeline only while it is executing the writeEntry() method, then disappears once the method completes. What is this rectangle called, and how does it differ from a lifeline?",
    "options": [
      "It's a return message; lifelines never show duration.",
      "It's an Activation Bar; unlike a lifeline (which spans the entire diagram), it only spans the time the object is actively processing.",
      "It's a self-message; it shows the object calling its own method.",
      "It's a destroy message; it shows the object's lifecycle ending."
    ],
    "correctOption": 1,
    "explanation": "An Activation Bar is a vertical bar drawn on top of a lifeline that represents the specific duration an object is actively executing a method or processing a message. The Lifeline runs the entire length of the diagram (the object 'exists' the whole time), but the Activation Bar appears only during active processing — giving a visual cue for when work is actually happening."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Messages",
    "question": "A Sequence Diagram shows an arrow from the OrderController lifeline to the InventoryService lifeline labeled checkStock(itemId). What does this arrow represent?",
    "options": [
      "A lifeline showing OrderService's existence.",
      "A message — a communication where OrderController is requesting InventoryService to perform an operation.",
      "An activation bar showing duration.",
      "A destroy message ending InventoryService's lifecycle."
    ],
    "correctOption": 1,
    "explanation": "A Message in a Sequence Diagram is represented as a horizontal (or near-horizontal) arrow between two lifelines, indicating the direction of communication. checkStock(itemId) is a message: OrderController is calling a method on InventoryService. The arrow direction shows who is sending the request to whom — fundamental to understanding object collaboration."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Return Message",
    "question": "After PaymentGateway finishes processing a charge() call, a dashed arrow points back to the OrderService lifeline labeled 'true' (indicating success). What kind of message is this?",
    "options": [
      "Self-message",
      "Create message",
      "Return message",
      "Destroy message"
    ],
    "correctOption": 2,
    "explanation": "A Return Message indicates the flow of control going back to the original caller after an operation completes, often carrying a result (like 'true', a value, or void). It is typically drawn as a dashed arrow, distinguishing it visually from the solid arrow of the original request message. This shows OrderService receiving the result of the charge() operation."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Self-Message",
    "question": "A ReportGenerator object's lifeline shows a looping arrow that starts and ends on the same lifeline, labeled validateData(). What does this represent?",
    "options": [
      "A return message confirming validation succeeded.",
      "A self-message — the object is calling one of its own internal methods.",
      "A create message — the object is instantiating a new ReportGenerator.",
      "A destroy message ending the object's existence."
    ],
    "correctOption": 1,
    "explanation": "A Self-Message is represented by a looped arrow that starts and ends on the same lifeline. It shows an object invoking one of its own methods — internal processing rather than communicating with another object. validateData() being called by ReportGenerator on itself is a perfect example: it's doing internal work without involving another participant."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Create Message",
    "question": "A Sequence Diagram shows a dashed arrow from OrderProcessor pointing to the very TOP of a newly appearing Invoice lifeline (the lifeline doesn't exist before this point). What type of message is this?",
    "options": [
      "Return message — Invoice is returning data to OrderProcessor.",
      "Self-message — OrderProcessor is creating itself.",
      "Create message — it shows OrderProcessor instantiating a new Invoice object, and the Invoice lifeline begins at this point.",
      "Destroy message — it shows Invoice's lifecycle ending."
    ],
    "correctOption": 2,
    "explanation": "A Create Message is shown as a dashed line with an arrow pointing to the TOP of the newly created object's lifeline — because the object doesn't exist before this point in time. This visually represents object instantiation (e.g., new Invoice()). The lifeline for Invoice only begins where this arrow points, since it didn't exist earlier in the sequence."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Destroy Message",
    "question": "A Sequence Diagram shows an X symbol at the bottom of a TemporarySession lifeline, following a message labeled 'endSession()'. What does this represent?",
    "options": [
      "A create message — TemporarySession is being initialized.",
      "A self-message — TemporarySession is ending its own loop.",
      "A destroy message — it represents the request to destroy/end the lifecycle of the TemporarySession object.",
      "An activation bar — it shows the duration of the endSession() call."
    ],
    "correctOption": 2,
    "explanation": "A Destroy Message represents a request to terminate an object's lifecycle, typically shown with an X mark at the point on the lifeline where the object ceases to exist. After this point, the lifeline doesn't continue — visually communicating that TemporarySession is no longer available for further interactions in the diagram."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Applied",
    "question": "A sequence diagram for a hotel booking flow shows: Guest → BookingService: requestBooking(); BookingService → RoomDAO: checkAvailability(); RoomDAO --→ BookingService: true; BookingService --→ Guest: confirmationNumber. Which two arrows are return messages?",
    "options": [
      "Guest → BookingService and BookingService → RoomDAO",
      "RoomDAO --→ BookingService and BookingService --→ Guest",
      "Only BookingService → RoomDAO",
      "None of the arrows are return messages."
    ],
    "correctOption": 1,
    "explanation": "The dashed arrows (--→) conventionally represent return messages, while solid arrows (→) represent the initial request messages. RoomDAO --→ BookingService (returning 'true' for availability) and BookingService --→ Guest (returning the confirmationNumber) are both return messages, flowing control and data back to the original callers after each operation completes."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Applied",
    "question": "In a Sequence Diagram, the Customer lifeline sends a message to OrderService, which then sends a create message to instantiate a new Invoice object. Where on the diagram should the Invoice lifeline begin?",
    "options": [
      "At the very top of the diagram, alongside Customer and OrderService.",
      "At the point in time where the create message arrow arrives — Invoice did not exist before this moment.",
      "At the bottom of the diagram, since it's created last.",
      "Invoice doesn't need its own lifeline since it's just a return value."
    ],
    "correctOption": 1,
    "explanation": "Because Invoice is being instantiated via a create message, its lifeline must begin exactly where that creation message arrives — not at the top of the diagram with the pre-existing objects. This visually communicates that Invoice didn't exist before that point in time. Drawing it starting at the top would incorrectly suggest it existed the whole time."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Concept",
    "question": "A method called DriverManager.getConnection(url, user, pass) returns a Connection object, but there is no new keyword visible in the calling code. What design concept does this resemble?",
    "options": [
      "Abstract Factory — because it creates a family of related connections.",
      "A factory-like static method — it behaves like a constructor (returns an instantiated object) but hides the actual instantiation logic from the caller.",
      "Singleton — because only one Connection can ever exist.",
      "Factory Method — because Connection overrides a creation method."
    ],
    "correctOption": 1,
    "explanation": "This is the classic giveaway of factory-style creation in the Java API: a static method that returns an object reference without the caller ever writing new. The caller doesn't know (or care) which concrete class implements Connection — that decision is made internally by DriverManager based on the driver registered for the given URL. This hides instantiation complexity from the caller, exactly like a Simple Factory."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Concept",
    "question": "Which statement correctly distinguishes Simple Factory from the GoF (Gang of Four) creational patterns?",
    "options": [
      "Simple Factory is the most complex of all GoF creational patterns.",
      "Simple Factory is a common creational idiom, but it is NOT one of the official GoF Design Patterns.",
      "Simple Factory and Factory Method are the exact same pattern with different names.",
      "Simple Factory is only used for database connections."
    ],
    "correctOption": 1,
    "explanation": "An important distinction in this course: Simple Factory is a widely-used creational pattern, but it is explicitly NOT one of the 23 official GoF Design Patterns. The GoF book includes Factory Method and Abstract Factory as creational patterns, but Simple Factory (sometimes called 'Static Factory Method') is considered an idiom or simplified technique rather than a formal GoF pattern."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Structure",
    "question": "A VehicleFactory class has a static method createVehicle(String type) that returns a Car, Truck, or Motorcycle object based on the type parameter — all using if/else or switch logic inside one method. What kind of design is this?",
    "options": [
      "Factory Method pattern — because subclasses determine the object type.",
      "Simple Factory — because object creation is centralized in a single method using conditional logic, not polymorphism.",
      "Abstract Factory — because it creates families of related objects.",
      "Singleton — because only one VehicleFactory instance can exist."
    ],
    "correctOption": 1,
    "explanation": "This is a textbook Simple Factory: ALL the decision logic (if/else or switch) for determining which concrete class to instantiate lives in ONE centralized method. There's no inheritance or polymorphism involved in the creation decision — it's straightforward conditional logic. Factory Method would instead use subclassing/overriding to make this decision, which is a key structural difference."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Structure",
    "question": "Why is a Simple Factory described as 'not polymorphic'?",
    "options": [
      "Because it can only create one type of object.",
      "Because the decision of which class to instantiate is made via conditional logic (if/switch) inside the factory method, not through method overriding across subclasses.",
      "Because Simple Factories cannot return interface or abstract class types.",
      "Because polymorphism is not allowed in creational patterns."
    ],
    "correctOption": 1,
    "explanation": "The 'not polymorphic' description refers to HOW the creation decision is made. In Simple Factory, a single method examines a parameter (like a type string) and uses conditional branching to pick which constructor to call. There's no subclass overriding a method to provide a different creation behavior. This contrasts sharply with Factory Method, which relies entirely on polymorphism (overriding) to determine what gets created."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Code Analysis",
    "question": "Examine this code:\n\npublic class BurgerFactory {\n    public static Burger createBurger(String type) {\n        if (type.equals(\"cheese\")) return new CheeseBurger();\n        else if (type.equals(\"veggie\")) return new VeggieBurger();\n        throw new IllegalArgumentException(\"Unknown type\");\n    }\n}\n\nWhat must happen to support a new \"bacon\" burger type?",
    "options": [
      "Create a new subclass of BurgerFactory that overrides createBurger().",
      "Modify the existing createBurger() method to add another conditional branch — this requires changing existing code.",
      "Nothing — Simple Factory automatically supports new types without modification.",
      "Create a new interface that BurgerFactory implements."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates a key limitation of Simple Factory: adding a new product type requires modifying the existing factory method (adding another else-if branch). This violates the Open/Closed Principle, which states classes should be open for extension but closed for modification. This is precisely why the material notes 'extending requires modifying the factory logic' — a tradeoff Simple Factory accepts for its simplicity."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Code Analysis",
    "question": "In a Simple Factory example, main() calls BurgerFactory.createBurger(\"cheese\") and receives a Burger reference. What does main() know about CheeseBurger's constructor or implementation?",
    "options": [
      "main() must know the full constructor signature of CheeseBurger to call createBurger() correctly.",
      "main() knows nothing about CheeseBurger's constructor or implementation details — it only interacts with the Burger interface/abstract type and the factory's createBurger() method.",
      "main() must import CheeseBurger directly to use the factory.",
      "main() must call new CheeseBurger() internally within the factory call."
    ],
    "correctOption": 1,
    "explanation": "This is the core value of the Simple Factory: it decouples the client (main()) from the concrete implementation classes. main() only needs to know about the Burger abstract type and the factory's createBurger(String type) method signature. It has zero knowledge of CheeseBurger's constructor, fields, or any implementation detail — that complexity is entirely hidden inside the factory."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – When to Use",
    "question": "A small internal tool needs to create one of three fixed report types (PDF, CSV, plain text) that will never change. Which factory approach is most appropriate, and why?",
    "options": [
      "Abstract Factory — because there are multiple report types.",
      "Factory Method — because new report types might be added someday.",
      "Simple Factory — the number of types is small and fixed, and the ability to extend is not a major concern, matching Simple Factory's ideal use case.",
      "No factory pattern is needed; use a Singleton instead."
    ],
    "correctOption": 2,
    "explanation": "Simple Factory is ideal when: you have a small, fixed number of object types, you want a straightforward solution without the overhead of inheritance/polymorphism, and extensibility is not a primary concern. Three fixed report types that will never change is a textbook scenario for Simple Factory — using Factory Method or Abstract Factory here would add unnecessary complexity for no benefit."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Concept",
    "question": "A logistics company has a ShippingCreator abstract class with an abstract method createShipment(). Subclasses AirShippingCreator and SeaShippingCreator each override this method to return AirShipment or SeaShipment objects respectively. What pattern is this?",
    "options": [
      "Simple Factory — because there's a centralized factory class.",
      "Factory Method — because object creation is delegated to subclasses through method overriding (polymorphism).",
      "Abstract Factory — because it creates families of related shipping products.",
      "Singleton — because only one ShippingCreator can exist."
    ],
    "correctOption": 1,
    "explanation": "This is the Factory Method pattern: the abstract Creator (ShippingCreator) declares the factory method (createShipment()), and Concrete Creators (AirShippingCreator, SeaShippingCreator) each implement it differently via overriding. The decision of WHAT to create is decentralized — pushed down to subclasses via polymorphism, rather than centralized in one method with conditional logic like Simple Factory."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Concept",
    "question": "Which characteristic distinguishes Factory Method from Simple Factory?",
    "options": [
      "Factory Method centralizes all creation logic in one method; Simple Factory uses subclasses.",
      "Factory Method decentralizes creation responsibility to subclasses via inheritance and polymorphism; Simple Factory centralizes the decision in one method using conditional logic.",
      "Factory Method cannot return interface types; Simple Factory can only return interface types.",
      "There is no meaningful difference — they are interchangeable terms for the same pattern."
    ],
    "correctOption": 1,
    "explanation": "The fundamental architectural difference: Simple Factory uses one class with conditional branching (if/switch) to decide what to create — centralized, non-polymorphic. Factory Method uses an abstract Creator class/interface with a factory method that each Concrete Creator subclass overrides — decentralized, polymorphic. This difference drives everything else: extensibility, complexity, and adherence to Open/Closed Principle."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Elements",
    "question": "In the Factory Method pattern, what is the role of the 'Product' element?",
    "options": [
      "It's the concrete class that implements the factory method.",
      "It's an interface or abstract class defining the type of object that the factory method creates; Concrete Products implement it.",
      "It's the class responsible for calling the factory method.",
      "It's a static utility class that holds all product instances."
    ],
    "correctOption": 1,
    "explanation": "In Factory Method, 'Product' is the interface or abstract class that defines what kind of object is being created (e.g., Burger, Document, Shipment). 'Concrete Product' classes (CheeseBurger, PDFDocument, AirShipment) implement this interface. The factory method's return type is always the Product type, allowing callers to work with the abstraction without knowing the concrete implementation."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Elements",
    "question": "Match the Factory Method elements to a document-generation example: DocumentCreator (abstract class with createDocument()), PDFCreator (subclass), Document (interface), PDFDocument (implementing class).",
    "options": [
      "DocumentCreator = Concrete Creator, PDFCreator = Creator, Document = Concrete Product, PDFDocument = Product",
      "DocumentCreator = Creator, PDFCreator = Concrete Creator, Document = Product, PDFDocument = Concrete Product",
      "DocumentCreator = Product, PDFCreator = Concrete Product, Document = Creator, PDFDocument = Concrete Creator",
      "All four are Concrete Products in this pattern."
    ],
    "correctOption": 1,
    "explanation": "The four Factory Method roles: Creator (abstract class/interface declaring the factory method) = DocumentCreator. Concrete Creator (implements the factory method) = PDFCreator. Product (interface/abstract type for created objects) = Document. Concrete Product (actual implementation) = PDFDocument. Understanding which class plays which role is essential to correctly implementing and recognizing this pattern."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Open/Closed Principle",
    "question": "A payment system uses Factory Method with PaymentCreator (abstract) and CreditCardCreator, PayPalCreator as concrete creators. The company wants to add cryptocurrency payment support. What needs to change in the EXISTING code?",
    "options": [
      "The abstract PaymentCreator class must be modified to add crypto-specific logic.",
      "Nothing in the existing code needs modification — simply add a new CryptoCreator subclass that overrides the factory method.",
      "All existing concrete creators must be rewritten to support crypto.",
      "The client code calling the factory must be rewritten to handle the new type."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the Open/Closed Principle benefit of Factory Method. Adding a new product type (CryptoPayment) only requires creating a NEW subclass (CryptoCreator) that implements the existing factory method contract. No existing classes — not the abstract Creator, not other concrete creators, not client code — need to be touched. The system is 'open for extension, closed for modification.'"
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – When to Use",
    "question": "A startup is building a notification system. They expect to add new notification channels (SMS, email, push, Slack, Discord...) frequently as the product grows. Which factory approach best fits, and why?",
    "options": [
      "Simple Factory — because it's simpler to implement initially.",
      "Factory Method — because it follows the Open/Closed Principle, supporting frequent addition of new types without modifying existing code.",
      "No factory pattern — direct instantiation is always best for startups.",
      "Singleton — because only one notification channel should be active at a time."
    ],
    "correctOption": 1,
    "explanation": "Factory Method is recommended when you expect the number of product types to grow over time and want to follow the Open/Closed Principle. Frequent addition of notification channels is exactly this scenario. While Simple Factory is easier to write initially, every new channel would require modifying the central factory method — a worse long-term tradeoff for a system expected to grow continuously."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Loose Coupling",
    "question": "How does Factory Method achieve loose coupling between client code and concrete product classes?",
    "options": [
      "By making all product classes static so they never need to be instantiated.",
      "By separating the construction code (handled by Creator subclasses) from the code that uses the product (the client), so the client depends only on the abstract Product type.",
      "By requiring all products to be Singletons.",
      "By eliminating the need for any interfaces or abstract classes."
    ],
    "correctOption": 1,
    "explanation": "Factory Method's loose coupling comes from separating two concerns: WHO creates the object (the Concrete Creator) and WHO uses the object (the client code). The client only interacts with the abstract Product type and calls the factory method — it never directly references concrete classes like PDFDocument or CryptoPayment. This separation means changes to product implementations don't ripple into client code."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Code Analysis",
    "question": "Examine this code:\n\nabstract class VehicleCreator {\n    abstract Vehicle createVehicle();\n    void deliverVehicle() {\n        Vehicle v = createVehicle();\n        System.out.println(\"Delivering: \" + v.getModel());\n    }\n}\nclass SedanCreator extends VehicleCreator {\n    Vehicle createVehicle() { return new Sedan(); }\n}\n\nWhat happens when deliverVehicle() is called on a SedanCreator instance?",
    "options": [
      "It throws an exception because createVehicle() is abstract.",
      "deliverVehicle() calls createVehicle(), which — due to polymorphism — invokes SedanCreator's override, creating a Sedan, even though deliverVehicle() is defined in the abstract base class.",
      "It creates a generic Vehicle object instead of a Sedan.",
      "deliverVehicle() must also be overridden in SedanCreator for this to work."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the polymorphism that makes Factory Method work. Even though deliverVehicle() is defined once in the abstract VehicleCreator and calls createVehicle() internally, when invoked on a SedanCreator instance, Java's dynamic dispatch ensures the overridden createVehicle() in SedanCreator runs — producing a Sedan. The base class method doesn't need to know which concrete product will be created; polymorphism handles it."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Code Analysis",
    "question": "A developer adds a new concrete creator TruckCreator that extends VehicleCreator and overrides createVehicle() to return a Truck. Does the deliverVehicle() method (defined in the abstract VehicleCreator) need any modification to work with TruckCreator?",
    "options": [
      "Yes — deliverVehicle() must be rewritten for each new vehicle type.",
      "No — deliverVehicle() works unchanged because it depends only on the abstract createVehicle() method, not on any specific concrete product.",
      "Yes — the abstract class must be recompiled with the new vehicle type listed.",
      "No — but the client code that calls deliverVehicle() must be rewritten."
    ],
    "correctOption": 1,
    "explanation": "This is the extensibility benefit of Factory Method in action. deliverVehicle() is written entirely in terms of the abstract createVehicle() — it has no knowledge of Sedan, Truck, or any specific product. Adding TruckCreator requires zero changes to deliverVehicle() or any other existing code; polymorphism ensures the correct createVehicle() override runs automatically based on the actual object's type."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Concept",
    "question": "A furniture app needs to create matching sets of Chair, Sofa, and Table in either 'Victorian' or 'Modern' style — and a Victorian Chair must never be paired with a Modern Sofa. Which pattern best addresses this requirement?",
    "options": [
      "Simple Factory — to centralize all furniture creation in one class.",
      "Factory Method — to let each furniture type decide its own style.",
      "Abstract Factory — to create families of related objects (Chair, Sofa, Table) that are guaranteed to be from the same style/variant.",
      "Singleton — to ensure only one furniture set exists."
    ],
    "correctOption": 2,
    "explanation": "Abstract Factory is specifically designed for creating families of related objects without specifying their concrete classes, while guaranteeing consistency within the family. A VictorianFurnitureFactory would create VictorianChair, VictorianSofa, and VictorianTable together — guaranteeing they match. This compatibility/consistency guarantee across a product family is the defining feature that distinguishes Abstract Factory from simpler factory patterns."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Concept",
    "question": "Why is Abstract Factory sometimes described as 'a factory of factories'?",
    "options": [
      "Because it requires creating multiple Simple Factory classes nested inside each other.",
      "Because each concrete Abstract Factory implementation is itself a factory that produces an entire family of related products, and you choose which 'factory' (variant) to use.",
      "Because Abstract Factory always creates other factory objects instead of products.",
      "Because it uses recursion to generate objects indefinitely."
    ],
    "correctOption": 1,
    "explanation": "Abstract Factory extends Factory Method by handling entire families of products. Each Concrete Factory (e.g., VictorianFurnitureFactory) acts like a self-contained factory producing multiple related product types (Chair, Sofa, Table) — all consistent with one variant. Choosing a Concrete Factory effectively selects a whole 'theme' of products at once, which is why it's described as a higher-level, 'factory of factories' abstraction."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Elements",
    "question": "In an Abstract Factory implementation for a UI toolkit supporting Windows and Mac themes, what is the role of the 'Abstract Product'?",
    "options": [
      "It's the concrete factory class, like WindowsUIFactory.",
      "It's an interface (e.g., Button, Checkbox) representing a category of related product, implemented differently per variant (WindowsButton, MacButton).",
      "It's the class that calls the factory to get UI components.",
      "It's a static method that creates all UI elements at once."
    ],
    "correctOption": 1,
    "explanation": "An Abstract Product (like Button or Checkbox) is an interface representing one category within the product family. Each variant implements it differently: WindowsButton and MacButton both implement Button, but render differently. The Abstract Factory (UIFactory interface) has creation methods for each Abstract Product type, and Concrete Factories (WindowsUIFactory, MacUIFactory) implement those methods to return the matching variant."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Elements",
    "question": "An Abstract Factory interface GUIFactory declares createButton() and createCheckbox(). WindowsGUIFactory implements both methods to return WindowsButton and WindowsCheckbox. What pattern role does WindowsGUIFactory play?",
    "options": [
      "Abstract Product",
      "Concrete Product",
      "Concrete Factory",
      "Abstract Factory"
    ],
    "correctOption": 2,
    "explanation": "WindowsGUIFactory is a Concrete Factory — it implements the Abstract Factory interface (GUIFactory) and provides specific implementations of each creation method, producing one consistent family of products (the Windows variant of Button and Checkbox). Each Concrete Factory corresponds to exactly one variant/family, ensuring that all products it creates belong together."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Consistency",
    "question": "A developer accidentally writes: Button btn = windowsFactory.createButton(); Checkbox chk = macFactory.createCheckbox(); mixing two different concrete factories. What problem does this risk, and how does the Abstract Factory pattern normally prevent it?",
    "options": [
      "No problem — mixing factories is encouraged for flexibility.",
      "It risks creating an inconsistent UI (Windows button next to a Mac checkbox); proper Abstract Factory usage means selecting ONE concrete factory and using it for ALL related product creation in that context.",
      "Abstract Factory throws a compile-time error if two factories are used together.",
      "This is impossible because Abstract Factory only allows one factory instance to exist application-wide."
    ],
    "correctOption": 1,
    "explanation": "This code is technically valid Java but defeats the PURPOSE of Abstract Factory. The pattern's value lies in guaranteeing product family consistency — by consistently using ONE chosen concrete factory throughout a given context (e.g., the whole application uses windowsFactory), you ensure all created products belong together. Mixing factories is a misuse of the pattern, even though the language doesn't prevent it directly."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – vs Factory Method",
    "question": "How does Abstract Factory relate to and extend Factory Method?",
    "options": [
      "Abstract Factory is unrelated to Factory Method — they solve completely different problems.",
      "Abstract Factory is an extension of Factory Method, emphasizing the creation of entire families of related objects rather than a single product type.",
      "Abstract Factory is a simpler version of Factory Method.",
      "Factory Method is built on top of Abstract Factory, not the other way around."
    ],
    "correctOption": 1,
    "explanation": "The material explicitly describes Abstract Factory as 'an extension of the Factory Method Pattern, emphasizing the creation of families of objects.' While Factory Method focuses on creating ONE type of product through polymorphic subclassing, Abstract Factory scales this up to coordinate the creation of MULTIPLE related product types that must work together consistently — essentially using multiple factory methods grouped into one cohesive interface."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – When to Use",
    "question": "A game engine needs to support different 'theme packs' (Medieval, SciFi, Fantasy) where each pack provides a matching Character, Weapon, and Environment that must visually and thematically match. Which pattern fits best?",
    "options": [
      "Simple Factory — because there are only three theme types.",
      "Factory Method — because each product type can be created independently.",
      "Abstract Factory — because it guarantees that Character, Weapon, and Environment created together belong to the same consistent theme family.",
      "Singleton — because only one theme can be active at a time, globally."
    ],
    "correctOption": 2,
    "explanation": "This scenario is a defining use case for Abstract Factory: multiple related product types (Character, Weapon, Environment) that must be created consistently as a family (the same theme). A MedievalFactory produces MedievalCharacter, MedievalWeapon, and MedievalEnvironment together, guaranteeing thematic consistency — something Simple Factory or Factory Method alone don't directly address since they typically handle a single product type."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Comparison",
    "question": "Three systems need object creation: (1) a fixed set of 3 export formats that rarely change, (2) a plugin system where new processors are added monthly, (3) a theming system needing 4 coordinated UI elements per theme. Match each to the best pattern.",
    "options": [
      "1-Abstract Factory, 2-Simple Factory, 3-Factory Method",
      "1-Simple Factory, 2-Factory Method, 3-Abstract Factory",
      "1-Factory Method, 2-Abstract Factory, 3-Simple Factory",
      "All three should use Simple Factory for consistency."
    ],
    "correctOption": 1,
    "explanation": "(1) Fixed, rarely-changing set → Simple Factory (simplicity outweighs extensibility needs). (2) Frequently growing set of types → Factory Method (Open/Closed Principle supports easy addition via new subclasses). (3) Multiple coordinated related products → Abstract Factory (guarantees family consistency across multiple product types). Choosing the right pattern depends on matching its strengths to the specific problem shape."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Comparison",
    "question": "Which statement correctly compares the complexity and flexibility tradeoffs of Simple Factory vs. Factory Method?",
    "options": [
      "Simple Factory is more complex but more flexible than Factory Method.",
      "Simple Factory is simpler to implement but less flexible (requires modifying existing code to extend); Factory Method is more complex (requires inheritance) but more flexible (follows Open/Closed Principle).",
      "Both patterns have identical complexity and flexibility.",
      "Factory Method is always simpler because it has fewer classes."
    ],
    "correctOption": 1,
    "explanation": "This captures the core tradeoff explicitly described in the material: Simple Factory is simpler to implement (no inheritance/polymorphism needed) but requires modifying the factory's internal logic to support new types — less flexible. Factory Method requires more classes (an inheritance hierarchy) and more upfront design effort, but new types can be added by creating new subclasses without touching existing code — more flexible and Open/Closed Principle-compliant."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Real World",
    "question": "A reporting tool currently has a Simple Factory that creates PDFReport, CSVReport, and ExcelReport via if/else logic. The company suddenly needs to support a NEW report format every quarter from now on. What change in pattern strategy would best serve this new requirement?",
    "options": [
      "Continue adding else-if branches to the Simple Factory — this scales fine for any number of types.",
      "Refactor to Factory Method, where each report type is a Concrete Creator subclass; new formats are added without touching existing code.",
      "Switch to a Singleton so report creation is centralized and synchronized.",
      "Remove the factory pattern entirely and instantiate report objects directly in client code."
    ],
    "correctOption": 1,
    "explanation": "The requirements have changed: frequent addition of new types is now expected. Continuing with Simple Factory means modifying the central method every quarter — increasing risk of bugs in a method that other report types also depend on. Refactoring to Factory Method means each new report format is a new isolated subclass, with zero risk to existing, working code. This shift exemplifies choosing patterns based on evolving requirements, not just initial convenience."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Integration with Patterns",
    "question": "A Sequence Diagram for a Simple Factory shows: main() → BurgerFactory: createBurger(\"cheese\"); BurgerFactory --→ main(): Burger reference. What is notably absent from this diagram compared to one for Factory Method?",
    "options": [
      "There is no return message in Simple Factory diagrams.",
      "There is no lifeline shown for the factory class.",
      "There is no separate Concrete Creator lifeline overriding behavior — the factory itself directly contains the decision logic, with no polymorphic dispatch to a subclass.",
      "Simple Factory diagrams cannot show activation bars."
    ],
    "correctOption": 2,
    "explanation": "In a Simple Factory sequence diagram, the single BurgerFactory lifeline shows a self-contained activation bar where the conditional logic runs and a CheeseBurger gets created internally. In contrast, a Factory Method sequence diagram would show a call into a Concrete Creator subclass (e.g., CheeseBurgerCreator) — a separate lifeline — illustrating the polymorphic dispatch. This visual difference reflects the structural difference between the two patterns."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Integration with Patterns",
    "question": "A Sequence Diagram for Abstract Factory shows: Client → VictorianFactory: createChair(); VictorianFactory --→ Client: chairRef; Client → VictorianFactory: createSofa(); VictorianFactory --→ Client: sofaRef. What does this sequence demonstrate about how the Client uses the Abstract Factory?",
    "options": [
      "The Client creates two completely unrelated factories.",
      "The Client uses the SAME concrete factory instance (VictorianFactory) for multiple related product creations, ensuring family consistency.",
      "The Client must create a new factory instance for every product.",
      "The sequence shows a violation of the Abstract Factory pattern."
    ],
    "correctOption": 1,
    "explanation": "This sequence correctly demonstrates Abstract Factory usage: the Client obtains multiple related products (Chair, Sofa) by calling different creation methods on the SAME VictorianFactory instance. Because all products come from the same concrete factory, they are guaranteed to be from the same family/variant — exactly the consistency guarantee that makes Abstract Factory valuable for coordinated product families."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Activation Bar Reasoning",
    "question": "In a Sequence Diagram, the activation bar on the PaymentProcessor lifeline extends from when it receives processPayment() until it sends a return message. During this span, PaymentProcessor sends a nested message to FraudDetector. What does the nested activation bar on FraudDetector represent?",
    "options": [
      "FraudDetector existing for the entire diagram duration.",
      "FraudDetector being destroyed after the call.",
      "The specific period FraudDetector is actively processing the request from PaymentProcessor, nested within PaymentProcessor's own ongoing processing.",
      "An error in the diagram — activation bars cannot be nested."
    ],
    "correctOption": 2,
    "explanation": "Nested activation bars are valid and common in Sequence Diagrams. PaymentProcessor's activation bar spans its entire processing time, which includes calling out to FraudDetector. FraudDetector's activation bar appears nested within that timeframe, showing it is actively working on behalf of PaymentProcessor's call before returning control back. This visually represents call depth and timing relationships between collaborating objects."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Simple Factory – Real World",
    "question": "A shape-drawing app's ShapeFactory.createShape(\"circle\") returns a Circle object. A developer wants to add unit tests for ShapeFactory. What is a key limitation of Simple Factory for testability?",
    "options": [
      "Simple Factory methods cannot be called from test code.",
      "Because creation logic uses static methods with conditional branching, it can be harder to substitute a test double for individual product types without modifying the factory itself.",
      "Simple Factory always requires a live database connection to run.",
      "Static methods in Java cannot return objects."
    ],
    "correctOption": 1,
    "explanation": "Static factory methods are straightforward to call in tests, but they hardcode which concrete class corresponds to which input — making it harder to substitute mock/test implementations without changing the factory's source. Factory Method's polymorphic approach (using interchangeable Concrete Creators) can make substituting test doubles more natural, since you can create a 'TestCreator' subclass without modifying any existing factory code."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Method – Real World",
    "question": "A document editor application has a DocumentCreator hierarchy. A QA engineer wants to test the application's document-opening logic without depending on real file I/O. How does Factory Method facilitate this?",
    "options": [
      "Factory Method cannot be used for testing purposes.",
      "A new TestDocumentCreator subclass can override createDocument() to return a fake/mock Document, without modifying any existing application code.",
      "The QA engineer must rewrite the abstract DocumentCreator class to add test hooks.",
      "Factory Method requires a live file system to function, so it cannot be tested."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates Factory Method's flexibility for testing: because object creation is delegated to subclasses through polymorphism, you can introduce a new TestDocumentCreator that returns a mock or fake Document — completely isolated from existing production code. No existing classes are modified. This is a direct benefit of the Open/Closed Principle that the pattern enforces."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Abstract Factory – Real World",
    "question": "A cross-platform mobile app must render UI elements differently on iOS vs Android while keeping business logic identical. The app uses an AppUIFactory interface with iOSUIFactory and AndroidUIFactory implementations. What does this design prevent?",
    "options": [
      "It prevents the app from running on both platforms simultaneously.",
      "It prevents business logic from depending directly on platform-specific UI classes, since business logic only interacts with the Abstract Factory and Abstract Product interfaces.",
      "It prevents the app from having more than two UI themes.",
      "It prevents iOSUIFactory and AndroidUIFactory from sharing any code."
    ],
    "correctOption": 1,
    "explanation": "By depending on the AppUIFactory interface (and Abstract Products like Button, TextField), business logic never references iOSButton or AndroidButton directly. This is exactly the decoupling Abstract Factory provides: 'don't want it to depend on the concrete classes of those products.' Adding a new platform (e.g., Windows) means creating a new Concrete Factory — business logic remains completely untouched."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Self vs Return Messages",
    "question": "What is the key difference between a Self-Message and a Return Message in a Sequence Diagram?",
    "options": [
      "There is no difference — both terms describe the same concept.",
      "A Self-Message shows an object calling its own method (looped arrow on same lifeline); a Return Message shows control flowing back to an external caller after a cross-lifeline call completes (dashed arrow to a different lifeline).",
      "A Self-Message always destroys the object; a Return Message always creates a new object.",
      "Self-Messages can only appear at the top of a diagram; Return Messages can only appear at the bottom."
    ],
    "correctOption": 1,
    "explanation": "These are distinct concepts. Self-Message: an object invokes one of its own methods — represented as a small loop on a single lifeline, showing internal processing. Return Message: after object A sends a message to object B, B's dashed arrow back to A represents completion/result of that operation — it crosses between two different lifelines. Confusing these is a common diagramming mistake."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Misconceptions",
    "question": "A student claims: 'Simple Factory, Factory Method, and Abstract Factory are basically the same thing with different names.' What is the flaw in this reasoning?",
    "options": [
      "They are indeed identical; the names are just historical artifacts.",
      "Each pattern has a distinct structure and use case: Simple Factory centralizes creation with conditionals (not a GoF pattern); Factory Method uses polymorphism for ONE product type (GoF); Abstract Factory coordinates creation of FAMILIES of related products (GoF, extends Factory Method).",
      "Only Abstract Factory is a real design pattern; the others are just naming conventions.",
      "Factory Method and Simple Factory are GoF patterns, but Abstract Factory is not."
    ],
    "correctOption": 1,
    "explanation": "Each pattern solves a progressively more complex problem: Simple Factory (not a GoF pattern) — one centralized method picks among types using conditionals. Factory Method (GoF) — polymorphic subclasses each create one type of product, enabling extension without modification. Abstract Factory (GoF) — extends Factory Method to coordinate creation of multiple related product types as consistent families. They share the goal of 'flexible object creation' but solve it at increasing levels of complexity and scope."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Misconceptions",
    "question": "A developer says: 'I should always use Abstract Factory because it's the most powerful pattern.' What is wrong with this reasoning?",
    "options": [
      "Abstract Factory is actually the weakest of the three patterns.",
      "Using Abstract Factory for a simple, single-product, fixed-type scenario adds unnecessary complexity (multiple interfaces and classes) without any corresponding benefit, since there's no family of related products to coordinate.",
      "Abstract Factory can only be used with database connections.",
      "Abstract Factory cannot be combined with interfaces."
    ],
    "correctOption": 1,
    "explanation": "Pattern selection should match the problem's actual complexity, not default to the 'most powerful' option. If you only need to create ONE type of object with a small, fixed number of variants, Simple Factory is appropriate and far simpler. Abstract Factory's overhead (multiple interfaces, multiple concrete factories, multiple product hierarchies) is only justified when you genuinely have FAMILIES of related products that must remain consistent. Over-engineering with unnecessary patterns adds complexity without benefit."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "UML Sequence Diagram – Code Correlation",
    "question": "Given this code:\n\npublic Burger orderBurger(String type) {\n    Burger b = BurgerFactory.createBurger(type);\n    b.prepare();\n    return b;\n}\n\nWhich sequence of Sequence Diagram elements correctly represents this method's execution?",
    "options": [
      "Self-message only — orderBurger() does everything internally.",
      "Message to BurgerFactory (createBurger), return message with Burger reference, message to the Burger object (prepare), return message — followed by the method's own return.",
      "Only a create message is needed; no other messages apply.",
      "Destroy message to BurgerFactory after use."
    ],
    "correctOption": 1,
    "explanation": "Each method call and its result corresponds to diagram elements: (1) orderBurger sends createBurger(type) message to BurgerFactory, (2) BurgerFactory returns the Burger reference (return message), (3) orderBurger sends prepare() message to the Burger object, (4) Burger returns control (return message), (5) finally orderBurger itself returns to its own caller. Sequence Diagrams map directly to this kind of method call chain, making them useful for visualizing exact execution order."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Applied Scenario",
    "question": "An insurance company needs to generate Policy objects: AutoPolicy, HomePolicy, LifePolicy. The set of policy types is fixed by regulation and changes only once every few years through a lengthy legal process. Which factory pattern best fits, and why?",
    "options": [
      "Abstract Factory — because insurance always needs families of related products.",
      "Factory Method — because regulations might add new types eventually.",
      "Simple Factory — because the type set is small, fixed for long periods, and a simple, centralized solution is preferred when extensibility isn't an immediate concern.",
      "No factory is needed; instantiate policies directly in business logic."
    ],
    "correctOption": 2,
    "explanation": "Although types could change eventually, the description emphasizes infrequent change (regulatory, multi-year cycles) and a small fixed set — exactly Simple Factory's sweet spot. Over-engineering with Factory Method's inheritance hierarchy for a system that changes once every few years adds unnecessary complexity. This question tests the judgment of matching pattern complexity to actual rate-of-change needs, not theoretical future possibilities."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Applied Scenario",
    "question": "A SaaS platform allows third-party developers to plug in custom AuthenticationProvider implementations (OAuth, SAML, custom JWT, future providers not yet imagined). Which factory pattern best supports this extensibility model?",
    "options": [
      "Simple Factory — because all providers can be handled with simple if/else logic.",
      "Factory Method — because third parties can create new Concrete Creator subclasses implementing the factory method, without the platform's core code needing modification.",
      "Abstract Factory — because there's only one type of product (AuthenticationProvider).",
      "Singleton — because only one authentication method can be active globally."
    ],
    "correctOption": 1,
    "explanation": "Third-party extensibility for a SINGLE evolving product type is the classic Factory Method use case. Each third-party plugin provides its own Concrete Creator subclass overriding the factory method to produce its AuthenticationProvider implementation. The platform's core code never needs to know about specific providers in advance — true Open/Closed Principle extensibility, ideal for plugin architectures."
  },
  {
    "quizTitle": "Factory Pattern",
    "category": "Factory Patterns – Applied Scenario",
    "question": "A multi-brand car dealership software creates matching sets of Engine, Transmission, and Dashboard for each car brand (Toyota-spec parts must never mix with Honda-spec parts in the same build). Which pattern is correct, and what would happen if Simple Factory were used instead?",
    "options": [
      "Factory Method is correct; Simple Factory would work identically.",
      "Abstract Factory is correct because it guarantees family consistency; using Simple Factory instead risks accidentally mixing incompatible parts since there's no structural guarantee tying related products together.",
      "Simple Factory is correct because there are a fixed number of brands.",
      "No factory pattern applies to physical parts assembly."
    ],
    "correctOption": 1,
    "explanation": "This is a family-consistency problem, the signature use case for Abstract Factory. A Simple Factory could technically create each part type separately (createEngine(\"Toyota\"), createTransmission(\"Honda\")), but nothing structurally PREVENTS mixing brands across separate calls — the consistency relies entirely on the caller remembering to use matching parameters. Abstract Factory's design — using ONE concrete factory instance for the whole family — structurally enforces this consistency."
  }
]

