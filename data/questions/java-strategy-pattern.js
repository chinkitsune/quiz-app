// data/questions/java-strategy-pattern.js

module.exports = [
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Concept",
    "question": "An e-commerce app needs to calculate shipping costs using different algorithms (flat rate, weight-based, distance-based) and wants to switch between them at runtime based on the carrier selected, without changing the checkout code that calls the calculation. Which pattern fits best?",
    "options": [
      "Builder — to construct the shipping cost step by step.",
      "Strategy — to encapsulate each shipping calculation algorithm in its own class and switch between them interchangeably at runtime.",
      "Singleton — to ensure only one shipping calculator exists.",
      "Abstract Factory — to create families of related shipping objects."
    ],
    "correctOption": 1,
    "explanation": "The Strategy pattern is designed precisely for this scenario: a family of interchangeable algorithms (flat rate, weight-based, distance-based shipping calculations) that need to be swapped at runtime without modifying the client code that uses them. Each algorithm is encapsulated in its own class implementing a common interface, and the calling code works with the interface, not the specific algorithm."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Concept",
    "question": "Which statement most accurately captures the core definition of the Strategy design pattern?",
    "options": [
      "Strategy is a creational pattern that constructs complex objects step by step.",
      "Strategy is a behavioral pattern that defines a family of algorithms, encapsulates each one in a separate class, and makes them interchangeable.",
      "Strategy is a structural pattern that adapts an incompatible interface for client code.",
      "Strategy guarantees that only one instance of an algorithm class exists throughout the application."
    ],
    "correctOption": 1,
    "explanation": "Strategy is explicitly classified as a behavioral design pattern. Its defining characteristic is encapsulating a family of related algorithms — each implementing the same interface — into separate, interchangeable classes. This allows the algorithm used by a client to be selected or swapped at runtime without altering the client's own code, which is the hallmark of behavioral patterns dealing with object interaction and flow."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Elements",
    "question": "A tax calculation system has a TaxCalculationStrategy interface with a method calculateTax(double income). Classes FlatTaxStrategy, ProgressiveTaxStrategy, and NoTaxStrategy each implement this interface differently. What role does TaxCalculationStrategy play in the pattern?",
    "options": [
      "Concrete Strategy — it provides one specific tax algorithm.",
      "Strategy Interface — it establishes the contract that all concrete tax strategies must follow, ensuring they can be used interchangeably.",
      "Context — it uses the tax strategy to calculate tax for a customer.",
      "Director — it orchestrates which tax strategy gets selected."
    ],
    "correctOption": 1,
    "explanation": "TaxCalculationStrategy is the Strategy Interface — it defines the method signature (calculateTax(double income)) that every concrete implementation must follow. This contract is what allows FlatTaxStrategy, ProgressiveTaxStrategy, and NoTaxStrategy to be used interchangeably by any class that depends only on the interface, without needing to know which specific implementation is in use."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Elements",
    "question": "In a route-planning app, a NavigationContext class holds a reference to a RouteStrategy interface, and can be configured with FastestRouteStrategy, ScenicRouteStrategy, or AvoidTollsRouteStrategy. What is the role of NavigationContext?",
    "options": [
      "It is a Concrete Strategy that implements one specific routing algorithm.",
      "It is the Context — the class that holds a reference to the strategy interface, delegates the actual route-calculation work to whichever concrete strategy is currently set, and can switch between strategies at runtime.",
      "It is the Strategy Interface that defines the routing contract.",
      "It is a Product created by a Builder."
    ],
    "correctOption": 1,
    "explanation": "NavigationContext is the Context in this Strategy pattern implementation. The Context's job is to hold a reference to the Strategy interface (RouteStrategy) and delegate the actual algorithm execution to whichever concrete strategy object is currently assigned. The Context itself doesn't implement any routing algorithm — it simply calls the strategy's method and can be reconfigured with a different strategy at any time."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Elements",
    "question": "A music streaming app has an AudioCompressor context class that delegates compression to a CompressionStrategy interface, implemented by MP3CompressionStrategy and FLACCompressionStrategy. Match each class to its correct Strategy pattern role.",
    "options": [
      "AudioCompressor = Concrete Strategy; CompressionStrategy = Context; MP3CompressionStrategy = Strategy Interface",
      "AudioCompressor = Context; CompressionStrategy = Strategy Interface; MP3CompressionStrategy and FLACCompressionStrategy = Concrete Strategies",
      "AudioCompressor = Strategy Interface; CompressionStrategy = Context; MP3CompressionStrategy = Concrete Strategy",
      "All four classes are Concrete Strategies."
    ],
    "correctOption": 1,
    "explanation": "This question tests correct mapping of all three core Strategy pattern roles in a single scenario: AudioCompressor is the Context (uses and delegates to a strategy). CompressionStrategy is the Strategy Interface (defines the contract). MP3CompressionStrategy and FLACCompressionStrategy are Concrete Strategies (each implements one specific compression algorithm). Recognizing these three distinct roles is essential to correctly applying the pattern."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Composition over Inheritance",
    "question": "A developer initially designs a DiscountCalculator base class with subclasses PercentageDiscountCalculator and FixedAmountDiscountCalculator, each overriding a calculate() method. They later refactor to use Strategy instead, with DiscountCalculator holding a DiscountStrategy field. What key benefit does this refactor provide?",
    "options": [
      "Inheritance and composition provide identical flexibility, so there's no real benefit.",
      "With composition, the discount algorithm can be swapped at RUNTIME by changing the strategy reference, whereas inheritance fixes the algorithm at compile time (the object's class never changes after creation).",
      "Composition eliminates the need for any interface or abstract class.",
      "Composition automatically makes the DiscountCalculator class final."
    ],
    "correctOption": 1,
    "explanation": "This is the central insight behind 'composition over inheritance.' With inheritance, an object's behavior is locked in by its class — a PercentageDiscountCalculator object can never become a FixedAmountDiscountCalculator at runtime. With composition (Strategy), the DiscountCalculator's behavior is determined by whichever Strategy object it currently HOLDS — and that reference can be reassigned at runtime, enabling true dynamic behavior switching."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Composition over Inheritance",
    "question": "Why does the Strategy pattern favor composition (a 'has-a' relationship) over inheritance (an 'is-a' relationship) for representing algorithm variations?",
    "options": [
      "Because Java does not support multiple inheritance, making composition the only viable option.",
      "Because composition lets a Context object hold and swap algorithm implementations dynamically, rather than baking a single fixed algorithm into the class hierarchy via inheritance.",
      "Because inheritance always results in slower runtime performance than composition.",
      "Because composition is required for all behavioral design patterns without exception."
    ],
    "correctOption": 1,
    "explanation": "Inheritance bakes behavior into the class hierarchy permanently — once an object is instantiated as a specific subclass, that's its behavior forever. Composition decouples 'what an object IS' from 'what it DOES' by delegating behavior to a separately-swappable object (the strategy). This is precisely why Strategy is held up as a model example of 'favor composition over inheritance' — a widely recommended OOP design principle."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Open/Closed Principle",
    "question": "A pricing engine uses Strategy with a PricingStrategy interface and concrete classes RegularPricing, MemberPricing, and ClearancePricing. The company wants to add a new HolidaySalePricing strategy. What does the team need to modify in the EXISTING Context or interface code?",
    "options": [
      "The PricingStrategy interface must be rewritten to add a HolidaySalePricing-specific method.",
      "Nothing in the existing PricingStrategy interface or Context class needs modification — simply create a new HolidaySalePricing class implementing the existing interface.",
      "All existing concrete strategies must be updated to reference HolidaySalePricing.",
      "The Context class must be rewritten with an if/else branch for the new strategy."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the Open/Closed Principle benefit of Strategy. Adding a new algorithm only requires creating a new class (HolidaySalePricing) that implements the existing PricingStrategy interface. The Context class, the interface itself, and all other existing concrete strategies remain completely unchanged — the system is 'open for extension' (new strategies) but 'closed for modification' (no existing code is touched)."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Open/Closed Principle",
    "question": "A SortContext class is implemented with a hardcoded if/else chain inside its sort() method, checking a String parameter to decide between bubble sort, quick sort, and merge sort logic — all written directly inside that one method. Why does this violate the spirit of the Strategy pattern even if it achieves similar runtime flexibility?",
    "options": [
      "It doesn't violate anything — if/else logic and Strategy are functionally identical.",
      "Adding a new sorting algorithm requires modifying the existing sort() method directly, violating the Open/Closed Principle, unlike a true Strategy implementation where new algorithms are added as new classes without touching existing code.",
      "if/else chains run slower than polymorphic dispatch in all cases.",
      "Java does not allow if/else statements inside methods that use Strategy."
    ],
    "correctOption": 1,
    "explanation": "This is a common Strategy pattern anti-pattern: replicating the runtime selection behavior with conditional logic instead of polymorphism defeats the Open/Closed Principle benefit. Adding 'heap sort' would require modifying the existing sort() method's if/else chain — risking bugs in already-working code. A true Strategy implementation isolates each algorithm in its own class, so adding HeapSortStrategy requires zero changes to existing, tested code."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Flexibility",
    "question": "A video game's EnemyAI context can be assigned AggressiveStrategy, DefensiveStrategy, or PatrolStrategy. During gameplay, when an enemy takes heavy damage, the game switches it from AggressiveStrategy to DefensiveStrategy mid-battle. What Strategy pattern characteristic does this demonstrate?",
    "options": [
      "Increased Complexity — more classes are needed to support this behavior.",
      "Flexibility — the pattern allows dynamic selection and switching of algorithms (behaviors) at runtime, adapting to changing conditions like enemy health.",
      "Client Responsibility — the player must manually select the AI strategy.",
      "Testability — each AI strategy can be tested in isolation."
    ],
    "correctOption": 1,
    "explanation": "This scenario directly demonstrates the 'Flexibility' key point: Strategy allows for dynamic selection and switching of algorithms at runtime. The enemy's behavior changes mid-battle based on a condition (health level) — exactly the kind of runtime adaptability the pattern is designed to support, without needing to destroy and recreate the enemy object or use complex conditional logic scattered throughout the game loop."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Flexibility",
    "question": "An image processing app lets users select a CompressionAlgorithm (Lossless, Lossy, WebP) from a dropdown menu, and the app immediately applies the selected algorithm to the next image saved, without restarting the application. How does Strategy enable this without a restart?",
    "options": [
      "The application must use reflection to dynamically load new classes for each selection.",
      "Because the Context (e.g., ImageExporter) holds a reference to the Strategy interface, simply reassigning that reference to a different Concrete Strategy object immediately changes which algorithm runs on the next save call — no restart, recompilation, or object recreation needed.",
      "Strategy pattern requires the application to restart whenever the algorithm changes.",
      "Compression algorithms cannot be changed at runtime under any design pattern."
    ],
    "correctOption": 1,
    "explanation": "This illustrates the mechanical simplicity behind Strategy's runtime flexibility: the Context just holds an interface reference. Reassigning imageExporter.setStrategy(new WebPCompressionStrategy()) immediately changes behavior for all future calls — there's no need to restart the app, use reflection, or recreate the Context object. This live-swapping ability is a direct, practical consequence of using composition over inheritance."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Reusability",
    "question": "A company builds a DiscountStrategy interface and implements SeasonalDiscount. This same SeasonalDiscount class is later reused unchanged in both the OnlineCheckout context and the InStorePOS context. What Strategy pattern benefit does this illustrate?",
    "options": [
      "Increased Complexity — reusing the class adds unnecessary overhead.",
      "Reusability — strategies can be reused across different contexts, promoting code reuse and reducing duplication.",
      "Client Responsibility — both contexts must implement the discount logic themselves.",
      "Composition over Inheritance — this is unrelated to reusability."
    ],
    "correctOption": 1,
    "explanation": "Because SeasonalDiscount only depends on the DiscountStrategy interface contract (not on any specific Context's internals), it can be plugged into ANY context that expects a DiscountStrategy — here, both OnlineCheckout and InStorePOS. This demonstrates the Reusability key point: well-designed strategies are self-contained, context-independent algorithm implementations that can be shared across very different parts of an application."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Testability",
    "question": "A developer wants to unit test the LoyaltyPointsStrategy class in isolation, without setting up an entire CheckoutContext, database connection, or UI. How does the Strategy pattern make this easier compared to embedding the loyalty points logic directly inside CheckoutContext?",
    "options": [
      "Strategy pattern makes unit testing impossible because algorithms are hidden behind interfaces.",
      "Because LoyaltyPointsStrategy is a small, self-contained class implementing a well-defined interface, it can be instantiated and tested directly with simple input/output assertions, without needing the rest of the system's dependencies.",
      "Strategy pattern requires integration tests instead of unit tests for all algorithms.",
      "Testability is unrelated to the Strategy pattern's design."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the Testability key point. Because each Concrete Strategy is its own self-contained class with a focused responsibility (a single algorithm), you can test it in complete isolation: instantiate LoyaltyPointsStrategy, call its method with various inputs, and assert the outputs — without needing a working CheckoutContext, database, or any other system dependency. This isolation is much harder when the logic is embedded directly inside a larger class."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Disadvantages",
    "question": "A team implements Strategy for file export, eventually creating 12 separate Concrete Strategy classes (PDFExport, CSVExport, XMLExport, JSONExport, and 8 more). A new developer joins the team and finds the codebase harder to navigate than a single ExportManager class with a big switch statement. What disadvantage of Strategy does this illustrate?",
    "options": [
      "Reusability — too many strategies can be reused.",
      "Increased Complexity — Strategy can lead to a larger number of classes in the codebase, since each algorithm is typically represented by its own separate class.",
      "Flexibility — too much runtime flexibility is a disadvantage.",
      "Open/Closed Principle — this principle is violated by having 12 classes."
    ],
    "correctOption": 1,
    "explanation": "This illustrates the explicitly listed disadvantage: 'Increased Complexity — can lead to a larger number of classes in the codebase, as each strategy is typically represented by a separate class.' While this granularity provides flexibility and testability benefits, it can also make the codebase harder to navigate for newcomers, especially when the number of strategies grows large, compared to a single (though less flexible) class with conditional logic."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Disadvantages",
    "question": "A ReportGenerator context requires client code to explicitly choose between FastReportStrategy, DetailedReportStrategy, and SummaryReportStrategy before calling generate(). A junior developer is confused about which strategy to pick for a given use case. What Strategy pattern disadvantage does this represent?",
    "options": [
      "Increased Complexity — the codebase has too many classes.",
      "Client Responsibility — clients using the pattern need to be aware of the available strategies and choose the appropriate one, which can add complexity for the client code.",
      "Testability — strategies are too easy to test, leading to confusion.",
      "Reusability — strategies cannot be reused by client code."
    ],
    "correctOption": 1,
    "explanation": "This illustrates the 'Client Responsibility' disadvantage explicitly listed in the material. Unlike patterns where the system internally decides the algorithm (e.g., a Factory deciding based on rules), Strategy typically requires the CLIENT to know which strategies exist and select the appropriate one for the situation. This shifts decision-making complexity onto the calling code, which can be confusing if there are many similar-sounding strategies."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Default Strategy",
    "question": "A NotificationContext class is designed so that if no strategy is explicitly set by client code, it automatically uses EmailNotificationStrategy as a fallback. What concept does this illustrate?",
    "options": [
      "This violates the Strategy pattern, which requires clients to always explicitly choose a strategy.",
      "Some Context implementations select an initial default strategy, reducing the Client Responsibility burden by providing sensible behavior out of the box, while still allowing the strategy to be overridden later.",
      "This means NotificationContext is actually a Concrete Strategy, not a Context.",
      "Default strategies can only be used with the Builder pattern, not Strategy."
    ],
    "correctOption": 1,
    "explanation": "The material explicitly notes: 'In some applications, context also select[s] an initial default strategy.' This is a practical mitigation for the Client Responsibility disadvantage — by providing a sensible default (EmailNotificationStrategy), the Context reduces the burden on client code to always explicitly choose a strategy, while still preserving the flexibility to switch to a different strategy (e.g., SMSNotificationStrategy) when needed."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Code Analysis",
    "question": "Examine this code:\n\npublic interface PaymentStrategy {\n    void pay(double amount);\n}\npublic class CreditCardPayment implements PaymentStrategy {\n    public void pay(double amount) { System.out.println(\"Paid \" + amount + \" by card\"); }\n}\npublic class CheckoutContext {\n    private PaymentStrategy strategy;\n    public CheckoutContext(PaymentStrategy strategy) { this.strategy = strategy; }\n    public void checkout(double amount) { strategy.pay(amount); }\n}\n\nWhat happens if checkout() is called on a CheckoutContext constructed with a CreditCardPayment instance?",
    "options": [
      "It throws a NullPointerException because strategy was never initialized.",
      "It prints 'Paid [amount] by card', because checkout() delegates to strategy.pay(amount), and polymorphism ensures the CreditCardPayment implementation runs.",
      "It does nothing because CheckoutContext does not implement PaymentStrategy.",
      "It requires explicitly casting strategy to CreditCardPayment before calling pay()."
    ],
    "correctOption": 1,
    "explanation": "The CheckoutContext's checkout() method calls strategy.pay(amount) on whatever PaymentStrategy reference it holds. Since it was constructed with a CreditCardPayment instance, polymorphism ensures that CreditCardPayment's specific pay() implementation executes, printing the expected message. The Context never needs to know it's specifically dealing with CreditCardPayment — it only relies on the PaymentStrategy interface contract."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Code Analysis",
    "question": "Using the same CheckoutContext class as before, a developer writes:\n\nCheckoutContext context = new CheckoutContext(new CreditCardPayment());\ncontext.checkout(50.0);\ncontext.strategy = new PayPalPayment(); // assume setter exists instead\ncontext.checkout(75.0);\n\nWhat behavior does this demonstrate, and what must be true about the CheckoutContext design for it to work?",
    "options": [
      "This demonstrates an error; Strategy pattern Contexts can never change their strategy after construction.",
      "This demonstrates the runtime-swapping flexibility of Strategy; the CheckoutContext class needs a setter (or public field) to allow client code to reassign the active strategy reference, which the second checkout() call then uses for PayPal instead of credit card processing.",
      "This means CheckoutContext is misusing the Strategy pattern by accepting multiple strategies.",
      "This is only possible if CreditCardPayment and PayPalPayment share a common superclass, not just a common interface."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the key runtime flexibility of Strategy: after the first checkout() (using CreditCardPayment), the strategy reference is reassigned to a PayPalPayment instance, and the SECOND checkout() call now delegates to PayPal logic instead — all without creating a new CheckoutContext. For this to work, the Context needs some mechanism (setter method or accessible field) to allow reassignment, since the constructor alone only sets the initial strategy."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Code Analysis",
    "question": "A developer mistakenly makes ShippingContext extend FlatRateShipping (a concrete class) instead of holding a ShippingStrategy interface reference. What problem does this design choice reintroduce?",
    "options": [
      "Nothing — extending a concrete class achieves the exact same flexibility as composition.",
      "This reintroduces the rigidity Strategy is meant to avoid: ShippingContext's shipping behavior is now fixed at compile time by inheritance, and it cannot be reassigned to use WeightBasedShipping or DistanceBasedShipping at runtime without creating an entirely new object of a different class.",
      "This causes a compile-time error because Java forbids extending shipping-related classes.",
      "This automatically converts FlatRateShipping into an interface."
    ],
    "correctOption": 1,
    "explanation": "This is a classic Strategy pattern misuse: using inheritance ('is-a' FlatRateShipping) instead of composition ('has-a' ShippingStrategy) defeats the entire purpose of the pattern. ShippingContext is now permanently tied to FlatRateShipping's behavior — there's no way to swap to a different shipping algorithm at runtime, since changing an object's class after creation is impossible in Java. This is exactly the inheritance rigidity that 'composition over inheritance' is designed to avoid."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Applied Scenario",
    "question": "A ride-sharing app needs to calculate fares using different pricing models: standard, surge pricing, and promotional discount — each potentially changing throughout the day based on demand. Design the Strategy pattern elements for this scenario.",
    "options": [
      "FareCalculator (Context) holds a FarePricingStrategy interface reference; StandardPricing, SurgePricing, and PromoPricing are Concrete Strategies implementing it.",
      "FareCalculator should extend StandardPricing directly using inheritance.",
      "A single FareCalculator class should use if/else logic to check the time of day internally.",
      "Create a Singleton FarePricingStrategy shared by all rides."
    ],
    "correctOption": 0,
    "explanation": "This is a textbook Strategy pattern application: FareCalculator (the Context) holds a reference to the FarePricingStrategy interface, and the system can swap between StandardPricing, SurgePricing, and PromoPricing (Concrete Strategies) at runtime as demand conditions change throughout the day — without modifying FareCalculator's own code. This avoids both the rigidity of inheritance and the maintenance burden of embedded conditional logic."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Applied Scenario",
    "question": "A photo-editing app supports multiple image filters (Grayscale, Sepia, Vintage, HighContrast) that users can apply and swap freely while editing the same photo. Why is Strategy a better fit here than creating a PhotoGrayscale, PhotoSepia, PhotoVintage subclass hierarchy of a base Photo class?",
    "options": [
      "Inheritance would let users apply multiple filters to the same Photo object and switch between them freely at runtime, just like Strategy.",
      "With inheritance, switching filters would require changing the Photo object's class, which is impossible at runtime; with Strategy, the SAME Photo object simply holds a different FilterStrategy reference, allowing seamless filter switching on one persistent object.",
      "Strategy pattern cannot be applied to photo editing applications.",
      "Both approaches are functionally identical; the choice is purely stylistic."
    ],
    "correctOption": 1,
    "explanation": "If filters were modeled via inheritance (PhotoGrayscale extends Photo), a single photo could never switch filters — you'd need an entirely new object of a different subclass, losing any in-progress edits or state. With Strategy, the same Photo (Context) object simply reassigns its FilterStrategy reference, allowing the user to try Grayscale, then Sepia, then back to Vintage — all on the same persistent object, with all other photo state intact."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Applied Scenario",
    "question": "A warehouse management system needs to calculate optimal storage placement using different algorithms (FirstFit, BestFit, NearestNeighbor) and the company plans to let customers write their OWN custom placement algorithms as plugins. Why is Strategy especially well-suited for the plugin requirement?",
    "options": [
      "Strategy pattern cannot support third-party plugins under any circumstances.",
      "As long as a customer's custom algorithm implements the existing PlacementStrategy interface, it can be plugged into the existing WarehouseContext without any modification to the core system — fulfilling both the plugin requirement and the Open/Closed Principle.",
      "Plugins require switching to the Abstract Factory pattern instead of Strategy.",
      "Strategy requires recompiling the core WarehouseContext class for every new plugin."
    ],
    "correctOption": 1,
    "explanation": "This scenario highlights why Strategy is so widely used in plugin architectures: as long as third-party code implements the agreed-upon PlacementStrategy interface, it can be used interchangeably with the built-in strategies, without the core WarehouseContext needing any awareness of the custom algorithm's existence in advance. This satisfies both the plugin requirement and the Open/Closed Principle simultaneously."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy vs Inheritance",
    "question": "A team initially modeled different employee bonus calculations using a Bonus base class with subclasses SalesBonus, ManagementBonus, and EngineeringBonus, each overriding calculateBonus(). An employee later changes departments mid-year (from Sales to Management). What problem does the inheritance-based design create here, and how would Strategy solve it?",
    "options": [
      "Inheritance has no problem here; an Employee object can simply change its own class at runtime.",
      "Since an object's class cannot change after creation, the inheritance design would require creating an entirely new Employee object to reflect the bonus change; with Strategy, the SAME Employee object would simply have its BonusStrategy reference reassigned, preserving employee history and other state.",
      "Both approaches require creating a new object regardless of design choice.",
      "Strategy pattern cannot model bonus calculations of any kind."
    ],
    "correctOption": 1,
    "explanation": "This is a classic real-world illustration of why composition beats inheritance for behavior that can change over an object's lifetime. With Bonus subclassing, switching departments would require replacing the Employee object entirely (since a SalesBonus subclass instance cannot become a ManagementBonus instance). With Strategy, the SAME long-lived Employee (Context) object simply gets its bonusStrategy field reassigned — no data loss, no object recreation, clean runtime adaptability."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Misconceptions",
    "question": "A student claims: 'Strategy pattern is exactly the same as Factory Method, since both involve interfaces and concrete implementing classes.' What is the flaw in this reasoning?",
    "options": [
      "There is no flaw — the two patterns are interchangeable.",
      "Factory Method (a creational pattern) is about HOW an object is CREATED; Strategy (a behavioral pattern) is about which ALGORITHM/BEHAVIOR an already-existing object USES, and can be reassigned to a Context at runtime independent of object creation.",
      "Strategy can only be used with abstract classes, while Factory Method can only be used with interfaces.",
      "Factory Method always returns void, while Strategy methods always return a value."
    ],
    "correctOption": 1,
    "explanation": "Though both patterns use interfaces and concrete implementing classes — a common point of confusion — they solve different problems. Factory Method is creational: it's concerned with instantiating the right object. Strategy is behavioral: it's concerned with which interchangeable ALGORITHM a Context object delegates its work to, and that strategy reference can be swapped on an already-existing Context object at any time, completely independent of any object-creation process."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Misconceptions",
    "question": "A developer says: 'Since Strategy promotes composition over inheritance, I should NEVER use inheritance anywhere in my codebase.' Why is this an overcorrection?",
    "options": [
      "Inheritance should always be avoided entirely in all OOP designs.",
      "Strategy specifically targets cases where ALGORITHM/BEHAVIOR needs to vary independently and be swappable at runtime; inheritance remains appropriate for genuine 'is-a' relationships where the type hierarchy itself is meaningful and stable (e.g., a Dog IS an Animal).",
      "Composition is always slower than inheritance, so this reasoning is backwards.",
      "Strategy pattern requires inheritance to be used everywhere except in the Strategy Interface itself."
    ],
    "correctOption": 1,
    "explanation": "'Favor composition over inheritance' is a guideline for specific situations — particularly when behavior needs to vary independently of an object's core type, or needs to change at runtime. It is not a blanket rule against inheritance. Genuine 'is-a' relationships (a Dog is genuinely a kind of Animal, with a stable, meaningful hierarchy) remain well-suited to inheritance. Overcorrecting to avoid all inheritance misunderstands WHY Strategy favors composition in its specific context."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Identifying Use Cases",
    "question": "Which of the following scenarios is the BEST candidate for the Strategy pattern?",
    "options": [
      "A Person class that always has exactly one way to calculate age from a birthdate, with no variation expected.",
      "A text editor's 'auto-save' feature that can use different saving algorithms (LocalFileSave, CloudSave, VersionedSave) depending on user settings, switchable at any time during editing.",
      "A Circle class that calculates its own area using a fixed mathematical formula.",
      "A Singleton ConfigurationManager that loads settings once at application startup."
    ],
    "correctOption": 1,
    "explanation": "Strategy is ideal when there's a genuine FAMILY of interchangeable algorithms that may need to be swapped at runtime based on user choice or changing conditions. The auto-save scenario fits perfectly: different save algorithms, switchable on the fly. The other options describe fixed, single-algorithm behaviors (age calculation, area calculation) or a different pattern entirely (Singleton for configuration) — none benefit from Strategy's runtime algorithm-swapping capability."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Identifying Use Cases",
    "question": "A weather app always calculates 'feels like' temperature using the exact same formula, regardless of platform, user preference, or any other factor — there is no variation and none is planned. Should this use the Strategy pattern?",
    "options": [
      "Yes — Strategy should be applied to every calculation in the codebase for consistency.",
      "No — Strategy is unnecessary overhead here since there is no family of interchangeable algorithms; a single, straightforward method is sufficient and clearer.",
      "Yes — Strategy is required whenever a calculation involves more than one input variable.",
      "No — Strategy can never be used for temperature-related calculations."
    ],
    "correctOption": 1,
    "explanation": "Strategy pattern's value comes from having multiple interchangeable algorithms that vary by context, user choice, or changing conditions. When there's genuinely only ONE way to perform a calculation with no foreseeable variation, introducing a Strategy Interface, Concrete Strategy, and Context adds unnecessary complexity (the 'Increased Complexity' disadvantage) without any corresponding benefit. Recognizing when NOT to apply a pattern is just as important as recognizing when to apply it."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Comparison",
    "question": "Compare two designs for a SortingHelper class that needs to support BubbleSort, QuickSort, and MergeSort: Design A uses a single sort() method with an if/else chain on a String parameter; Design B uses a SortStrategy interface with Context-based delegation. Which design better supports adding a new 'RadixSort' algorithm later, and why?",
    "options": [
      "Design A — because if/else chains are easier to extend than interfaces.",
      "Design B — adding RadixSort only requires a new class implementing SortStrategy, with zero changes to existing, already-tested code; Design A requires modifying the existing if/else chain, risking regressions in working sort logic.",
      "Both designs require identical amounts of new code and risk.",
      "Design A — because String-based dispatch is more type-safe than interfaces."
    ],
    "correctOption": 1,
    "explanation": "This directly tests understanding of the Open/Closed Principle benefit of Strategy over conditional logic. Design B (true Strategy) isolates each algorithm into its own class; RadixSortStrategy can be added without touching SortingHelper or any existing strategy classes. Design A requires editing the existing if/else chain — a change to working code that risks introducing bugs into BubbleSort, QuickSort, or MergeSort handling that wasn't even being modified."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Comparison",
    "question": "Strategy and Simple Factory both use a common interface with multiple implementing classes. What is the KEY difference in how each pattern's interface is typically USED by client code?",
    "options": [
      "There is no meaningful difference; both patterns use the interface identically.",
      "In Simple Factory, the interface/abstract type represents the PRODUCT being created (a one-time instantiation); in Strategy, the interface represents a BEHAVIOR that a long-lived Context object holds and can swap out repeatedly over its lifetime.",
      "Simple Factory's interface can only have one implementing class; Strategy's interface must have at least three.",
      "Strategy patterns never use interfaces; only abstract classes are allowed."
    ],
    "correctOption": 1,
    "explanation": "This distinction matters: in Simple Factory, you call createX() once to GET an object — the interface represents 'what kind of object was created.' In Strategy, the Context HOLDS a reference to the strategy interface as an ongoing field, and that reference can be reassigned multiple times throughout the Context's lifetime — the interface represents 'what algorithm is currently being delegated to.' The usage pattern (one-time creation vs. ongoing, swappable delegation) is the key conceptual difference."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Code Analysis",
    "question": "A CompressionContext class is written as:\n\n<code>public class CompressionContext {\n    private CompressionStrategy strategy;\n    public void compress(byte[] data) {\n        if (strategy == null) {\n            throw new IllegalStateException(\"No strategy set\");\n        }\n        strategy.compress(data);\n    }\n}\n<\code>\nWhat design choice could improve this class, based on the material's mention of default strategies?",
    "options": [
      "Remove the null check entirely so the application crashes with a NullPointerException instead.",
      "Initialize strategy with a sensible default (e.g., new ZipCompressionStrategy()) either in a default constructor or as a field initializer, so client code isn't forced to always explicitly set a strategy before use.",
      "Make CompressionStrategy a concrete class instead of an interface.",
      "Remove the strategy field entirely and hardcode one compression algorithm."
    ],
    "correctOption": 1,
    "explanation": "The material notes that 'in some applications, context also select[s] an initial default strategy.' This pattern reduces the burden on client code (the Client Responsibility disadvantage) by ensuring the Context works reasonably out of the box, while still allowing the default to be overridden via a setter. Throwing an exception when no strategy is set forces every client to remember to configure one — a default strategy is friendlier API design."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Code Analysis",
    "question": "Examine this code:\n\npublic interface ValidationStrategy {\n    boolean isValid(String input);\n}\npublic class EmailValidation implements ValidationStrategy {\n    public boolean isValid(String input) { return input.contains(\"@\"); }\n}\npublic class FormField {\n    private ValidationStrategy validator;\n    public FormField(ValidationStrategy validator) { this.validator = validator; }\n    public boolean validate(String value) { return validator.isValid(value); }\n}\n\nA developer creates two FormField instances, one with EmailValidation and one with a PhoneValidation strategy. What does this demonstrate about FormField's design?",
    "options": [
      "FormField must be rewritten for each different type of input validation it needs to support.",
      "The SAME FormField class can validate completely different kinds of input (email, phone) simply by being constructed with a different ValidationStrategy — FormField's own code never changes regardless of what's being validated.",
      "This code will not compile because FormField does not implement ValidationStrategy.",
      "EmailValidation and PhoneValidation must be combined into a single class for this code to work."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates Strategy's reusability and flexibility in a generic UI component scenario: FormField is a single, reusable Context class that works for ANY kind of validation, as long as the validation logic is encapsulated in a ValidationStrategy implementation. The same FormField class serves email fields, phone fields, postal code fields, etc. — its own source code never needs modification to support new validation types."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Real World",
    "question": "Java's Comparator interface, used in Collections.sort(list, comparator), allows different sorting orders (by name, by age, by date) to be passed into the same sort() method. Which Strategy pattern element does Comparator represent?",
    "options": [
      "Comparator plays the role of the Context.",
      "Comparator plays the role of the Strategy Interface; specific comparator implementations (lambda expressions or classes) are the Concrete Strategies; Collections.sort() acts as (or uses) the Context.",
      "Comparator plays the role of the Concrete Strategy only.",
      "Comparator has no relationship to the Strategy pattern."
    ],
    "correctOption": 1,
    "explanation": "Comparator is a well-known real-world Strategy Interface in the Java standard library: it defines a single method (compare()) that different implementations can satisfy differently (by name, by age, by date). Collections.sort(list, comparator) acts as a Context-like mechanism, delegating the actual ordering decision to whichever Comparator implementation (Concrete Strategy) is passed in — without Collections.sort() needing to know the specific sorting criteria in advance."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Real World",
    "question": "Many UI frameworks use a Strategy-like approach for animation easing functions (Linear, EaseIn, EaseOut, Bounce) that can be assigned to any animated element and changed without altering the animation engine's core code. What benefit does this design choice provide to the framework's maintainers?",
    "options": [
      "It requires rewriting the animation engine every time a new easing function is added.",
      "New easing functions can be added as new classes implementing the EasingStrategy interface, without modifying the core animation engine — supporting extensibility (Open/Closed Principle) and allowing developers to plug in entirely custom easing curves.",
      "It only works if all easing functions produce mathematically identical results.",
      "This approach requires the animation engine to be a Singleton."
    ],
    "correctOption": 1,
    "explanation": "This is a practical, real-world application of Strategy in UI/animation frameworks. The animation engine (Context) only needs to call easingStrategy.calculate(progress) without knowing which specific curve is being used. Framework maintainers — and even third-party developers — can introduce entirely new easing functions (e.g., a custom 'elastic' curve) by implementing the EasingStrategy interface, with zero changes required to the core engine."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Applied Scenario",
    "question": "A subscription billing system needs to support different proration calculation methods (DailyProration, NoProration, FullMonthProration) for mid-cycle plan changes. The finance team frequently A/B tests new proration formulas with small customer segments. Why is Strategy especially valuable here, beyond just 'having multiple algorithms'?",
    "options": [
      "Strategy is only valuable when there's exactly one algorithm in use at any time across the entire system.",
      "Because different customer segments can be assigned different ProrationStrategy instances SIMULTANEOUSLY (not just switched sequentially over time), supporting true A/B testing where multiple algorithm variants run concurrently for different users, all while sharing the same billing Context logic.",
      "A/B testing requires abandoning the Strategy pattern in favor of hardcoded branches.",
      "Strategy pattern cannot support more than two concurrent algorithm variants."
    ],
    "correctOption": 1,
    "explanation": "This scenario goes beyond simple sequential runtime-switching (like changing one Context's strategy over time) to show MULTIPLE Context instances (different customers' billing accounts) simultaneously using DIFFERENT Concrete Strategies at the same time — perfect for A/B testing. Each customer's BillingContext can be independently configured with whichever ProrationStrategy is being tested for their segment, all sharing the same core billing logic untouched."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Disadvantages Applied",
    "question": "A small startup with only 2 developers and a simple MVP product is considering implementing Strategy for their single, unlikely-to-change 'calculate order total' logic, anticipating they MIGHT need flexibility someday. What tradeoff should they consider before adding this pattern now?",
    "options": [
      "There is no tradeoff; Strategy should always be used preemptively for any calculation, regardless of project size or stage.",
      "Introducing Strategy now (Strategy Interface, at least one Concrete Strategy, and Context wiring) adds class-count complexity and indirection for a need that may never materialize; a simple method now, refactored to Strategy LATER if real variation emerges, may be more pragmatic for an early-stage MVP.",
      "Strategy pattern is illegal to use in MVP-stage products.",
      "Strategy pattern requires a minimum team size of 5 developers to implement correctly."
    ],
    "correctOption": 1,
    "explanation": "This tests judgment about premature pattern application — a real-world software engineering tradeoff. The 'Increased Complexity' disadvantage is a genuine cost: extra interfaces and classes for a speculative future need add overhead now, for a small team, on logic that may never actually need multiple variants. A pragmatic approach often favors simplicity first (YAGNI — 'You Aren't Gonna Need It') and refactoring TO Strategy if and when real variation is needed, rather than speculatively building it in from day one."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Sequence Diagram",
    "question": "A Sequence Diagram for a Strategy-based checkout shows: Client → CheckoutContext: setStrategy(creditCardStrategy); Client → CheckoutContext: checkout(amount); CheckoutContext → CreditCardStrategy: pay(amount); CreditCardStrategy --→ CheckoutContext: receipt; CheckoutContext --→ Client: receipt. What does the FIRST message (setStrategy) represent in terms of pattern mechanics?",
    "options": [
      "It represents the Concrete Strategy being destroyed.",
      "It represents the Client configuring the Context with a specific Concrete Strategy BEFORE delegating any work — establishing which algorithm the Context will use for subsequent calls.",
      "It represents a self-message internal to CheckoutContext.",
      "It represents the creation of a brand-new CheckoutContext instance."
    ],
    "correctOption": 1,
    "explanation": "The setStrategy(creditCardStrategy) message is the Client explicitly configuring which Concrete Strategy the Context will delegate to for future calls. This is a distinguishing structural feature in Strategy pattern sequence diagrams: there's typically a configuration step (constructor argument or setter call) BEFORE the actual work-delegating message (checkout()), reflecting the Context's role as a strategy holder rather than a strategy creator."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Sequence Diagram",
    "question": "In a Strategy pattern Sequence Diagram, the Context lifeline shows an activation bar during checkout(amount), and WITHIN that activation bar, a nested message goes to the Concrete Strategy's lifeline for pay(amount). What does this nested call represent in terms of the Context's responsibility?",
    "options": [
      "The Context performs the payment processing itself, then notifies the strategy afterward.",
      "The Context DELEGATES the actual payment-processing work to the Concrete Strategy — the Context's own activation bar represents only the time spent forwarding the call and handling the result, not performing the algorithm itself.",
      "The nested call represents the Concrete Strategy being garbage collected.",
      "This nested call pattern is unique to Singleton, not Strategy."
    ],
    "correctOption": 1,
    "explanation": "This nested message structure visually represents the Context's core responsibility: delegation, not implementation. The Context's own activation bar exists for the duration of the checkout() call, but the actual payment algorithm logic happens inside the Concrete Strategy's nested activation bar. This reinforces that 'the context delegates the actual work to the concrete strategy object' — the Context is a thin coordinator, not the algorithm's implementer."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – vs Hardcoded Logic",
    "question": "A non-Strategy version of a PaymentProcessor class has a single processPayment(String method, double amount) method containing: if (method.equals(\"card\")) {...} else if (method.equals(\"paypal\")) {...} else if (method.equals(\"crypto\")) {...}. List the SPECIFIC disadvantages this hardcoded approach has compared to a true Strategy-based PaymentProcessor.",
    "options": [
      "There are no disadvantages — both approaches behave identically in every respect.",
      "The hardcoded approach mixes all payment logic together (harder to test in isolation), requires modifying the existing method to add new payment types (violates Open/Closed Principle), and cannot be extended by third-party code without access to and modification of the source.",
      "The hardcoded approach is always faster to execute than Strategy.",
      "The hardcoded approach automatically supports unlimited new payment types with zero code changes."
    ],
    "correctOption": 1,
    "explanation": "This question synthesizes multiple Strategy pattern benefits by examining their absence. The hardcoded if/else version: (1) mixes ALL payment logic in one large method, making isolated testing of just 'crypto' logic harder; (2) requires editing the existing method (and risking breaking 'card' or 'paypal' logic) to add 'crypto' — violating Open/Closed; (3) cannot be extended by external code without modifying and recompiling the source, unlike Strategy where third parties can simply implement the interface."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Elements Identification",
    "question": "A language-learning app has: TranslationStrategy (interface with translate(String text)), GoogleTranslateStrategy and DeepLStrategy (implementing classes), and TranslatorService (holds a TranslationStrategy reference, used by the UI). Identify the THREE Strategy pattern roles represented here, and which class plays each role.",
    "options": [
      "TranslationStrategy = Context; GoogleTranslateStrategy/DeepLStrategy = Strategy Interface; TranslatorService = Concrete Strategy",
      "TranslationStrategy = Strategy Interface; GoogleTranslateStrategy and DeepLStrategy = Concrete Strategies; TranslatorService = Context",
      "TranslationStrategy = Concrete Strategy; GoogleTranslateStrategy/DeepLStrategy = Context; TranslatorService = Strategy Interface",
      "All three are Concrete Strategies, since they all relate to translation."
    ],
    "correctOption": 1,
    "explanation": "This question (echoing the Translator example referenced in the course material, but with a fresh scenario) tests correct role identification: TranslationStrategy is the Strategy Interface (the translate() contract). GoogleTranslateStrategy and DeepLStrategy are Concrete Strategies (each implementing translation via a different translation service/algorithm). TranslatorService is the Context (holds the strategy reference and delegates translation requests to whichever service is currently configured)."
  },
  {
    "quizTitle": "Strategy Pattern",
    "category": "Strategy Pattern – Misconceptions",
    "question": "A developer argues: 'Since Strategy uses interfaces, every interface-based design in my code is automatically an example of the Strategy pattern.' Why is this an overgeneralization?",
    "options": [
      "The claim is fully correct — any interface usage qualifies as Strategy.",
      "Strategy specifically requires a Context that HOLDS a reference to the strategy interface and DELEGATES behavior to it, with the explicit intent of allowing that algorithm to be swapped; merely using an interface for, say, defining a data model's contract or an event listener doesn't automatically constitute the Strategy pattern.",
      "Interfaces can never be used in the Strategy pattern; only abstract classes qualify.",
      "Strategy pattern requires at least five different interfaces to be present."
    ],
    "correctOption": 1,
    "explanation": "Using an interface is necessary but not sufficient to call something 'Strategy.' The defining characteristic is the INTENT and STRUCTURE: a Context object that holds an interchangeable algorithm reference and delegates behavior to it, specifically to support runtime substitution of that behavior. An interface used for an entirely different purpose — like defining a Repository contract for data access, or an event listener callback — is a valid and common OOP technique, but it isn't automatically 'the Strategy pattern' unless it fits this specific structural and intentional pattern."
  }
]
