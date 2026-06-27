//data/questions/java-builder-pattern.js

module.exports = [
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Concept",
    "question": "A Laptop class has five overloaded constructors: Laptop(brand), Laptop(brand, ram), Laptop(brand, ram, storage), Laptop(brand, ram, storage, color), and Laptop(brand, ram, storage, color, warrantyMonths). What is this design problem called?",
    "options": [
      "The Singleton anti-pattern.",
      "The Telescoping Constructor anti-pattern — an escalating series of overloaded constructors, each adding one more parameter.",
      "The Factory Method pattern.",
      "The Composite pattern."
    ],
    "correctOption": 1,
    "explanation": "Telescoping constructors occur when a class offers an increasing chain of overloaded constructors, each adding one more parameter than the last. This is explicitly called out as an anti-pattern. As the number of optional fields grows, the number of constructor combinations needed to cover every reasonable use case explodes, and constructor calls become extremely difficult to read or maintain."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Concept",
    "question": "A developer calls: new Pizza(\"Large\", \"Thin\", \"Pepperoni\", \"Extra Cheese\", true, false, 12.99); What is the core readability problem with this call, independent of how many constructors exist?",
    "options": [
      "The constructor uses too many primitive types.",
      "The meaning of each positional argument isn't obvious from the call site — a reader cannot tell what true or false represents without checking the constructor signature.",
      "Java does not allow constructors with more than 5 parameters.",
      "Pizza should be declared as an interface instead of a class."
    ],
    "correctOption": 1,
    "explanation": "Even a single constructor with many parameters has poor readability: positional arguments like true, false, or 12.99 carry no semantic meaning at the call site. A reader must cross-reference the constructor signature to understand what each value represents — a common source of bugs when arguments are accidentally swapped (e.g., passing thinCrust where extraCheese was expected)."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Limitation",
    "question": "A Person class already has the constructor Person(int personId, String firstName, String lastName). A developer wants to add an overload Person(int personId, String firstName, String phone) for cases where lastName isn't known yet. Why can't this be added directly?",
    "options": [
      "Java does not support method overloading for constructors.",
      "Both constructors would have the identical parameter type signature (int, String, String), so Java cannot distinguish between them — this causes a compile error.",
      "phone numbers must always be stored as a separate Phone class.",
      "Constructors cannot have more than 3 parameters in Java."
    ],
    "correctOption": 1,
    "explanation": "Java distinguishes overloaded methods/constructors by their parameter TYPES, not parameter names. Person(int, String, String) for (personId, firstName, lastName) is type-identical to Person(int, String, String) for (personId, firstName, phone) — the compiler sees no difference and will reject one as a duplicate method signature. This is a structural limitation of telescoping constructors that the Builder pattern avoids entirely."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Limitation",
    "question": "A BurgerOrder class is built using telescoping constructors with parameters in this fixed order: (bunType, meatType, cheese, lettuce, pickles, mayo). A customer wants pickles and mayo but NOT cheese or lettuce. What problem does this create?",
    "options": [
      "The customer must call a constructor that doesn't skip any earlier parameter, even though they don't want cheese or lettuce — they must pass null or empty values as placeholders.",
      "Java will automatically detect which parameters to skip.",
      "BurgerOrder cannot represent burgers without cheese.",
      "This requires creating a new subclass of BurgerOrder for every possible combination."
    ],
    "correctOption": 0,
    "explanation": "Telescoping constructors require ALL preceding parameters to be supplied, in order, even when a caller wants to skip an optional one in the middle. To get pickles and mayo without cheese or lettuce, the caller must pass placeholder values (null, \"\", or similar) for cheese and lettuce just to reach the parameters they actually care about — awkward and error-prone, especially as the number of optional fields grows."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Concept",
    "question": "A SubwaySandwich object can have any combination of 15 different toppings, 3 bread types, and 4 sauces, all optional. Rather than overloading dozens of constructors, the team wants a clean step-by-step way to specify only the choices a customer makes. Which pattern fits best?",
    "options": [
      "Singleton — to guarantee only one sandwich exists.",
      "Builder — to construct the complex object step by step, specifying only the desired optional parts.",
      "Abstract Factory — to create families of related sandwiches.",
      "Simple Factory — to centralize sandwich creation logic in one method."
    ],
    "correctOption": 1,
    "explanation": "The Builder pattern is specifically designed for objects with many optional components or configuration parameters. Instead of one giant constructor (or telescoping overloads) for every combination, the Builder lets you call only the methods for the parts you want (addTopping(), setBread(), addSauce()), then finalize with build(). This directly solves the 'many optional fields' problem the telescoping constructor approach struggles with."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Concept",
    "question": "Which statement best captures the core purpose of the Builder pattern?",
    "options": [
      "Builder ensures only one instance of a class is ever created.",
      "Builder separates the construction of a complex object from its final representation, allowing different representations to be created using the same step-by-step construction process.",
      "Builder converts an incompatible interface into one that client code expects.",
      "Builder defines a family of algorithms and lets the algorithm vary independently of clients that use it."
    ],
    "correctOption": 1,
    "explanation": "The defining purpose of Builder, as stated in the course material, is separating construction from representation. The same step-by-step process (calling builder methods in some sequence) can produce different final products depending on which methods are called and with what values — without changing the overall construction logic. This is distinct from Singleton (single instance), Adapter (interface compatibility), or Strategy (interchangeable algorithms)."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Elements",
    "question": "In a Builder pattern implementation for assembling custom PCs, what is the role of the 'Product'?",
    "options": [
      "It's the interface that declares methods like addCPU() and addGPU().",
      "It's the final, fully-assembled PC object that the builder constructs, containing all the configured components.",
      "It's the class responsible for deciding the order in which components are added.",
      "It's the class that implements the building methods."
    ],
    "correctOption": 1,
    "explanation": "The Product is the complex object being constructed — in this case, the assembled PC with its CPU, GPU, RAM, and storage all configured. The Product usually contains many components, attributes, or configuration settings, which is exactly why it benefits from step-by-step construction rather than one overloaded constructor."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Elements",
    "question": "A WebsiteBuilder interface declares addHeader(), addNavBar(), addFooter(), and build(). The class StandardWebsiteBuilder implements all of these methods to assemble a Website object. What roles do WebsiteBuilder and StandardWebsiteBuilder play?",
    "options": [
      "WebsiteBuilder = Product; StandardWebsiteBuilder = Director",
      "WebsiteBuilder = Builder Interface; StandardWebsiteBuilder = Concrete Builder",
      "WebsiteBuilder = Director; StandardWebsiteBuilder = Product",
      "WebsiteBuilder = Concrete Builder; StandardWebsiteBuilder = Builder Interface"
    ],
    "correctOption": 1,
    "explanation": "WebsiteBuilder is the Builder Interface — it defines the set of methods for building the parts of the complex object (addHeader, addNavBar, addFooter) without specifying how they're implemented. StandardWebsiteBuilder is the Concrete Builder — it implements those methods to actually construct a particular representation of the Website object. Multiple Concrete Builders could implement WebsiteBuilder differently (e.g., MinimalWebsiteBuilder, BlogWebsiteBuilder)."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Elements",
    "question": "A CarBuilder interface is implemented by both SedanCarBuilder and SUVCarBuilder, each producing a different style of Car object using the same addEngine(), addWheels(), and build() methods. What does having multiple Concrete Builders demonstrate?",
    "options": [
      "Each Concrete Builder must produce an identical Car object.",
      "Different Concrete Builders can provide different ways of assembling the same type of complex object, producing a variety of Product configurations while reusing the same overall construction process.",
      "Only one Concrete Builder can exist per application.",
      "Concrete Builders cannot implement an interface; they must extend an abstract class."
    ],
    "correctOption": 1,
    "explanation": "The 'Variety of Products' key point states that implementing different Concrete Builders lets you create varied Product configurations while reusing the same construction logic (the same sequence of method calls: addEngine, addWheels, build). SedanCarBuilder and SUVCarBuilder both follow the CarBuilder contract but assemble different underlying components — demonstrating the pattern's flexibility."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Director Role",
    "question": "In a Builder pattern for assembling meal combos, a Director class has a method createKidsMeal(MealBuilder builder) that calls builder.addMain(), builder.addSide(), and builder.addToy() in a specific order. What is the Director's role?",
    "options": [
      "The Director is the final Product — the assembled meal.",
      "The Director orchestrates the construction process, determining the order in which a Builder's methods are called to produce a specific configuration, without performing the construction itself.",
      "The Director implements the actual building logic for each meal component.",
      "The Director is required in every Builder pattern implementation."
    ],
    "correctOption": 1,
    "explanation": "The Director (an optional element) is responsible for orchestrating construction — it knows the recipe (the order and combination of builder calls) for producing specific standard configurations (like a 'kids meal'), but delegates the actual construction work to the Builder. The Director doesn't implement addMain() or addSide() itself; it just calls those methods on whatever Builder it's given, in the right sequence."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Director Role",
    "question": "Why is the Director described as 'optional' in the Builder pattern?",
    "options": [
      "Because the Builder pattern cannot function without a Director in any implementation.",
      "Because client code (e.g., main()) can call the Builder's methods directly for custom, one-off configurations; the Director is only useful when you want to encapsulate and reuse standard, predefined construction sequences.",
      "Because the Director is deprecated in modern design pattern usage.",
      "Because only Concrete Builders can use a Director, not Builder Interfaces."
    ],
    "correctOption": 1,
    "explanation": "When a client needs a fully custom object (e.g., a burger with a unique combination of toppings chosen interactively), it can call the Builder's methods directly, in whatever order and combination it wants. The Director becomes valuable when you want to standardize and reuse common configurations (e.g., always building a 'veggie burger' the same way) without repeating that method-call sequence in multiple places in client code."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Director Role",
    "question": "A Director class is constructed as: Director director = new Director(new SedanCarBuilder()); Later, the same Director object calls director.createSportsCar(). What does this demonstrate about flexibility in the Builder pattern?",
    "options": [
      "The Director can change which ConcreteBuilder it uses to build the same type of standard configuration differently — e.g., producing a sports car using sedan-style materials/process instead of SUV-style.",
      "The Director must always create the same exact Car object regardless of which builder is injected.",
      "SedanCarBuilder cannot be used to build a sports car under any circumstances.",
      "The Director pattern requires creating a new Director instance for every Car type."
    ],
    "correctOption": 0,
    "explanation": "Because the Director is given a Builder instance (dependency injection), you can swap which Concrete Builder it uses while keeping the same high-level construction recipe (createSportsCar()). This lets the SAME standard configuration be built with different underlying construction details (e.g., different 'materials' or component sourcing) just by injecting a different Concrete Builder — exactly the flexibility highlighted in the material."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Fluent Interface",
    "question": "What does it mean for a Builder's methods to support a 'fluent interface' or 'method chaining'?",
    "options": [
      "Each builder method must run on a separate thread for performance.",
      "Each builder method (like addCPU()) returns a reference to the builder itself, allowing successive method calls to be chained together in a single statement: builder.addCPU().addGPU().addRAM().build();",
      "The builder automatically validates all inputs without requiring extra code.",
      "Fluent interface means the builder uses only static methods."
    ],
    "correctOption": 1,
    "explanation": "A fluent interface is achieved by having each intermediate method (e.g., addCPU(), addGPU()) return 'this' (a reference to the builder object itself), enabling calls to be chained: builder.addCPU(cpu).addGPU(gpu).addRAM(ram).build(). The final build() method typically returns the completed Product instead of the builder, ending the chain. This style is also called 'method chaining' and produces highly readable construction code."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Fluent Interface",
    "question": "Examine this Builder method:\n\npublic BurgerBuilder addCheese(String type) {\n    this.cheese = type;\n    return this;\n}\n\nWhy does this method return 'this' instead of void?",
    "options": [
      "Returning 'this' is required by the Java compiler for all builder classes.",
      "Returning 'this' (the builder's own reference) enables method chaining — the caller can immediately call another builder method on the returned reference without storing it in a separate variable.",
      "Returning 'this' converts the method into a static method.",
      "Returning 'this' is only needed if the class implements Serializable."
    ],
    "correctOption": 1,
    "explanation": "If addCheese() returned void, you would need to write each call as a separate statement: builder.addCheese(\"swiss\"); builder.addLettuce(); — and could not chain them. By returning the builder reference (this), the caller can write builder.addCheese(\"swiss\").addLettuce().addPickles().build(); in one fluent expression. This is the mechanical foundation that makes fluent/chained APIs possible in Java."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Fluent Interface",
    "question": "A BurgerBuilder has methods addLettuce(), addPickles(), and build(). Which return type combination correctly supports fluent chaining ending in a final Burger object?",
    "options": [
      "addLettuce() returns void; addPickles() returns void; build() returns Burger.",
      "addLettuce() returns BurgerBuilder; addPickles() returns BurgerBuilder; build() returns Burger.",
      "addLettuce() returns Burger; addPickles() returns Burger; build() returns BurgerBuilder.",
      "All three methods should return void for consistency."
    ],
    "correctOption": 1,
    "explanation": "Intermediate methods (addLettuce, addPickles) must return BurgerBuilder so the chain can continue with more builder method calls. Only the final build() method returns the completed Burger — signaling the end of the chain and producing the finished Product. If intermediate methods returned Burger instead, you couldn't call further builder-specific methods on the result, breaking the chain."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder vs Factory",
    "question": "How does the material distinguish Builder from the Factory pattern in terms of complexity and use case?",
    "options": [
      "Factory and Builder are identical patterns used interchangeably.",
      "Factory is typically used for creating simple objects in a single step; Builder is more flexible, handling complex objects that may be composed of multiple sub-objects, and may even use multiple Factory classes internally.",
      "Builder can only create one object type; Factory can create many object types.",
      "Factory is more complex than Builder and should always be preferred for objects with many fields."
    ],
    "correctOption": 1,
    "explanation": "The material explicitly contrasts these: Factory patterns are well-suited to simple object creation (often a single method call returns the finished object). Builder is designed for complex objects — especially objects that are themselves composed of multiple sub-objects (e.g., a Composite) — built up incrementally through multiple method calls. Builder is described as 'more flexible' and may even leverage Factory classes internally to create individual components."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder vs Factory",
    "question": "A HouseBuilder constructs a House object containing a Kitchen, multiple Bedroom objects, and a Garage — each of which might itself be created by a separate KitchenFactory, BedroomFactory, and GarageFactory. What does this demonstrate about the relationship between Builder and Factory patterns?",
    "options": [
      "Builder and Factory patterns can never be combined in the same design.",
      "Builder can orchestrate the overall complex object's assembly while delegating the creation of individual sub-components to Factory classes — the patterns complement rather than compete with each other.",
      "Using a Factory inside a Builder violates the Builder pattern's principles.",
      "This means HouseBuilder is actually a Factory Method, not a Builder."
    ],
    "correctOption": 1,
    "explanation": "This scenario directly illustrates the material's point that 'Builder is more flexible... may make use of multiple Factory classes.' The Builder handles the overall step-by-step assembly and the relationships between parts (House composed of Kitchen + Bedrooms + Garage), while individual Factory classes can specialize in creating each type of sub-component. These patterns are complementary tools that work well together for genuinely complex object graphs."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – When to Use",
    "question": "A simple Coordinate class only has two fields: x and y, both required at construction, with no optional fields and no complex assembly steps. Should this class use the Builder pattern?",
    "options": [
      "Yes — every class should use Builder for consistency across the codebase.",
      "No — Builder is overkill for simple objects with few, required, non-optional fields; a plain constructor is sufficient and clearer.",
      "Yes — Builder is required whenever a class has more than one field.",
      "No — Coordinate should instead use the Singleton pattern."
    ],
    "correctOption": 1,
    "explanation": "The Builder pattern exists to solve the problem of complex objects with many optional components or configuration parameters — not every class with multiple fields. A Coordinate(x, y) with two simple, required fields gains nothing from a Builder; it would just add unnecessary classes and indirection. Choosing the right pattern means recognizing when a problem doesn't need a heavyweight solution."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – When to Use",
    "question": "A ReportConfig class has 18 optional settings (page size, margins, font, header/footer toggle, watermark, color scheme, and more), and most reports only configure 2-3 of these. Why is Builder a better fit here than telescoping constructors?",
    "options": [
      "Builder would require defining all 18 constructors anyway, just like telescoping constructors.",
      "Builder lets callers specify only the settings they care about, in any order, using clearly-named methods (setFontSize(), addWatermark()), avoiding the need for null placeholders or dozens of constructor overloads.",
      "Builder eliminates the need to ever validate configuration values.",
      "Builder requires that all 18 settings be specified every time, ensuring consistency."
    ],
    "correctOption": 1,
    "explanation": "With 18 mostly-optional settings, telescoping constructors would require either an enormous number of overloads or forcing callers to pass placeholder values for unused settings in positional order. Builder solves this elegantly: reportBuilder.setFontSize(12).addWatermark(\"DRAFT\").build(); only touches the settings that matter for THIS report, with self-documenting method names instead of ambiguous positional parameters."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Code Analysis",
    "question": "Examine this code:\n\nPizza pizza = new PizzaBuilder()\n    .setSize(\"Large\")\n    .addTopping(\"Mushroom\")\n    .addTopping(\"Olive\")\n    .setCrust(\"Thin\")\n    .build();\n\nWhat must be true about addTopping()'s return type for this code to compile, given it's called twice in a row?",
    "options": [
      "addTopping() must return void since it's called multiple times.",
      "addTopping() must return PizzaBuilder so that .setCrust() can be called immediately after the second addTopping() call.",
      "addTopping() must return Pizza directly.",
      "addTopping() must be declared static."
    ],
    "correctOption": 1,
    "explanation": "For the fluent chain to keep working after calling addTopping(\"Mushroom\").addTopping(\"Olive\"), the addTopping() method must return a PizzaBuilder reference (typically 'this'). This allows .setCrust(\"Thin\") to be called on the returned builder, continuing the chain. If addTopping() returned void or Pizza, the chain would break at that point and the code would fail to compile."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Code Analysis",
    "question": "A developer writes:\n\nCarBuilder builder = new CarBuilder();\nbuilder.addEngine(\"V6\");\nbuilder.addWheels(4);\nCar myCar = builder.build();\nCar anotherCar = builder.build();\n\nWhat is a potential issue with calling build() twice on the same builder instance, depending on implementation?",
    "options": [
      "Java will throw a compile-time error preventing build() from being called twice.",
      "Depending on the builder's implementation, the second build() may return the same Car instance, a Car with leftover state from the first build, or require the builder to be reset — this is an implementation detail developers must handle carefully.",
      "Calling build() twice automatically creates two completely independent CarBuilder instances.",
      "build() can only be called once per Java program execution."
    ],
    "correctOption": 1,
    "explanation": "The Builder pattern doesn't dictate a single universal behavior for repeated build() calls — this is implementation-specific. Some builders reset their internal state after build() (so the second call starts fresh, possibly missing the engine/wheels set earlier). Others might return the same object reference both times, or even throw an exception if reuse isn't supported. This is a subtle but real design decision builder authors must address explicitly."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Code Analysis",
    "question": "What is the key structural difference between these two BurgerBuilder method signatures?\n\nOption A: public Burger addCheese(String type)\nOption B: public BurgerBuilder addCheese(String type)",
    "options": [
      "There is no functional difference between the two.",
      "Option A breaks the fluent chain immediately after calling addCheese(), since it returns the unfinished Burger instead of the builder; Option B correctly supports continued chaining.",
      "Option A is correct for Concrete Builders; Option B is only used in the Builder Interface.",
      "Option B will cause a runtime exception when build() is eventually called."
    ],
    "correctOption": 1,
    "explanation": "This tests close attention to return types. If addCheese() returns Burger (Option A) instead of BurgerBuilder (Option B), then calling builder.addCheese(\"swiss\").addLettuce() would attempt to call addLettuce() on a Burger object — which likely doesn't have that method — causing a compile error. Only the final build() method should return the Product type (Burger); all intermediate methods must return the builder itself to preserve the fluent chain."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Applied Scenario",
    "question": "An email-composition library lets developers write: Email email = new EmailBuilder().to(\"x@y.com\").subject(\"Hi\").body(\"Hello\").attach(\"file.pdf\").send(); Which element of the Builder pattern does EmailBuilder represent?",
    "options": [
      "Director",
      "Concrete Builder (or possibly Builder Interface, depending on whether other builder variants exist)",
      "Product",
      "Abstract Factory"
    ],
    "correctOption": 1,
    "explanation": "EmailBuilder is the class doing the actual step-by-step construction work (setting recipient, subject, body, attachments) — this is the Concrete Builder role (or the sole Builder if no separate interface/variants exist). The Email object ultimately created (if send() internally builds and dispatches one) or returned by a build()-style method would be the Product. There's no Director here since the client calls the builder methods directly."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Applied Scenario",
    "question": "A game development studio needs to create NPC (non-player character) objects with optional attributes: weapon, armor, dialogue tree, AI behavior pattern, loot table, and faction. Most NPCs only specify 2-4 of these. Which design is most appropriate, and why?",
    "options": [
      "A single NPC constructor with 6 required parameters, using null for unused fields.",
      "An NPCBuilder with methods like withWeapon(), withArmor(), withFaction(), each returning the builder, ending in a build() that returns the configured NPC — avoiding telescoping constructors and clearly naming each optional configuration.",
      "Six different NPC subclasses, one for each possible attribute combination.",
      "A Singleton NPC class shared by all characters in the game."
    ],
    "correctOption": 1,
    "explanation": "This is a direct application of Builder's core motivation: many optional configuration parameters, where most instances only use a subset. An NPCBuilder with descriptively-named methods (withWeapon(), withFaction()) avoids the explosion of constructor overloads or subclasses. Each method clarifies intent at the call site, and only the desired attributes need to be specified — exactly the problem Builder was designed to solve."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Applied Scenario",
    "question": "A coffee shop app uses a Director with methods createEspresso(CoffeeBuilder builder) and createLatte(CoffeeBuilder builder) to produce 'standard' drink recipes, while also allowing customers to use CoffeeBuilder directly for custom orders. What benefit does this hybrid approach provide?",
    "options": [
      "It allows both standardized, reusable recipes (via the Director) AND fully custom, ad-hoc configurations (via direct Builder calls) — using the same underlying Concrete Builder and construction methods.",
      "It requires maintaining two completely separate codebases for standard vs custom drinks.",
      "The Director and direct Builder usage cannot coexist in the same application.",
      "This hybrid approach violates the Builder pattern's core principles."
    ],
    "correctOption": 0,
    "explanation": "This reflects exactly how the material presents the optional Director: client code can use the Director for common, standardized configurations (espresso, latte — consistent recipes used in many places) while still being free to call the CoffeeBuilder methods directly for one-off custom orders (extra shot, oat milk, light foam). Both paths share the same Concrete Builder and its underlying construction methods — demonstrating the pattern's flexibility for mixed use cases."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Sequence Diagram",
    "question": "A Sequence Diagram for client code using a Builder directly (no Director) shows: Client → BurgerBuilder: addCheese(); BurgerBuilder --→ Client: builderRef; Client → BurgerBuilder: addLettuce(); BurgerBuilder --→ Client: builderRef; Client → BurgerBuilder: build(); BurgerBuilder --→ Client: burgerRef. What does the repeated 'builderRef' in the return messages represent?",
    "options": [
      "Each call creates a brand-new BurgerBuilder instance.",
      "The fluent interface in action — each intermediate method returns a reference to the SAME builder instance, allowing the chain to continue, until build() finally returns the Product (Burger) instead.",
      "An error in the diagram — return messages should never repeat the same value.",
      "BurgerBuilder is acting as a Singleton in this diagram."
    ],
    "correctOption": 1,
    "explanation": "This sequence visually demonstrates the fluent/chaining mechanism: each addXxx() call returns the same builder reference, enabling the next call in the chain. Only the final build() call returns something different — the completed Burger Product. This sequence diagram pattern is a hallmark of Builder pattern usage and looks structurally different from a Simple Factory's single create-and-return call."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Sequence Diagram",
    "question": "Comparing a Sequence Diagram for 'Builder with Director' vs 'Builder without Director', what NEW lifeline and message pattern appears in the Director version?",
    "options": [
      "No difference — both diagrams are identical.",
      "A Director lifeline appears between Client and the Concrete Builder; Client sends one message to Director (e.g., createVeggieBurger()), and Director internally sends the sequence of addXxx() messages to the Builder, which the Client never sees directly.",
      "The Director version removes the Concrete Builder lifeline entirely.",
      "The Director version shows the Product being destroyed after construction."
    ],
    "correctOption": 1,
    "explanation": "With a Director, the Client's interaction simplifies to one message (e.g., director.createVeggieBurger()). The Director then internally orchestrates the full sequence of calls to the Builder (addLettuce(), addTomato(), etc.) — these internal messages happen between Director and Builder, invisible to the Client. This hides the construction complexity from the Client entirely, in contrast to the direct-Builder approach where the Client itself issues every construction step."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – vs Builder",
    "question": "Compare these two approaches for creating a custom sandwich:\nApproach A: new Sandwich(\"Wheat\", \"Turkey\", \"Swiss\", null, \"lettuce\", null, \"mustard\");\nApproach B: new SandwichBuilder().bread(\"Wheat\").meat(\"Turkey\").cheese(\"Swiss\").addTopping(\"lettuce\").sauce(\"mustard\").build();\n\nWhich approach is preferable, and why?",
    "options": [
      "Approach A — because it requires fewer total characters to type.",
      "Approach B — because each value is explicitly labeled by a descriptive method name, eliminating ambiguity, and null placeholders for unused fields (like the missing topping/pickle slot) are unnecessary.",
      "Both approaches are equally readable and maintainable.",
      "Approach A — because telescoping constructors are the Java standard for object creation."
    ],
    "correctOption": 1,
    "explanation": "Approach A (telescoping-style with positional null placeholders) requires the reader to know the EXACT parameter order and meaning of every position — including remembering that null fills an unused slot. Approach B (Builder with fluent methods) is self-documenting: bread(\"Wheat\") obviously sets the bread, and unused options are simply omitted from the chain rather than requiring placeholder values. This readability and maintainability gain is the central motivation for adopting Builder over telescoping constructors."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Misconceptions",
    "question": "A student claims: 'Builder pattern just means adding setter methods to a class instead of using a constructor.' What is the flaw in this oversimplification?",
    "options": [
      "Builder pattern always uses constructors, never setters.",
      "Builder is more than plain setters: it typically uses a SEPARATE builder class (or interface), supports a fluent/chaining interface returning 'this', defers final object creation to a distinct build() step, and often allows the Product itself to remain immutable (no setters on the Product).",
      "Builder pattern requires the Product class to have public fields.",
      "The student's description is fully accurate — there's no meaningful distinction."
    ],
    "correctOption": 1,
    "explanation": "This is a common oversimplification. A class with simple setMethod() calls (setBread(), setMeat()) directly on the final Product itself is just using setters — and the Product remains mutable throughout its life. Builder, in contrast, typically uses a SEPARATE builder object to accumulate configuration, supports fluent chaining, and produces the final Product via a distinct build() call — often allowing the Product itself to be immutable once constructed, which plain setters don't provide."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Misconceptions",
    "question": "A developer says: 'Since Builder is more flexible than Factory, I should always use Builder instead of any Factory pattern.' Why is this reasoning flawed?",
    "options": [
      "Builder and Factory solve fundamentally identical problems, so the choice never matters.",
      "Builder is suited for COMPLEX objects requiring multi-step assembly with many optional parts; for SIMPLE objects with few or no optional parameters, a Factory (or even direct construction) is simpler and more appropriate — added flexibility isn't free.",
      "Factory patterns are always faster at runtime than Builder, regardless of object complexity.",
      "Builder can never be combined with Factory, so choosing Builder eliminates Factory entirely from the codebase."
    ],
    "correctOption": 1,
    "explanation": "Choosing a pattern because it's 'more flexible' without considering whether that flexibility is actually needed leads to over-engineering. If you're creating a simple object (few fields, no optional configuration), the extra classes and indirection of Builder (Builder Interface, Concrete Builder, optional Director) add unnecessary complexity. Factory patterns remain the better fit for simpler object-creation needs — matching pattern complexity to problem complexity is the key skill."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Code Analysis",
    "question": "A ConcreteBuilder class is missing a build() method but has all the addXxx() methods correctly implemented and chaining. What is the practical consequence?",
    "options": [
      "The builder will automatically return the Product after the last addXxx() call.",
      "There is no way for client code to actually retrieve the final, fully-assembled Product — the construction process has no defined endpoint, defeating the purpose of using a builder.",
      "Java will insert a default build() method automatically at compile time.",
      "The addXxx() methods will throw an exception if build() is missing."
    ],
    "correctOption": 1,
    "explanation": "The build() method (or an equivalently-named finalization method) is the critical final step in the Builder pattern — it's what converts the accumulated configuration into the actual Product instance and returns it to the caller. Without it, all the addXxx() calls only configure internal state inside the builder, but there's no way to obtain the completed object. This omission breaks the entire pattern, regardless of how well the intermediate methods are implemented."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Applied Scenario",
    "question": "A travel booking app builds TripPackage objects that may optionally include flight, hotel, car rental, travel insurance, and guided tours — in any combination chosen by the customer. The team also wants 3 pre-set 'standard packages': Budget, Standard, and Luxury. What combination of Builder elements best fits this requirement?",
    "options": [
      "Only a Builder Interface and Concrete Builder — no Director needed, since customers always build packages from scratch.",
      "A TripPackageBuilder (Concrete Builder) for custom combinations, PLUS a Director with methods like createBudgetPackage(), createStandardPackage(), and createLuxuryPackage() for the three standard configurations.",
      "Only a Director — no Builder classes are needed since the package types are fixed.",
      "An Abstract Factory, since there are exactly 3 standard package types."
    ],
    "correctOption": 1,
    "explanation": "This scenario combines BOTH needs the material describes: ad-hoc customer customization (handled by calling TripPackageBuilder's methods directly) AND standardized, reusable configurations (handled by a Director with named methods for each preset). This hybrid usage — Director for the 3 named standard packages, direct Builder access for fully custom trips — leverages the full flexibility the optional Director element is designed to provide."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Code Analysis",
    "question": "Examine this code:\n\npublic Burger(String bunType) { ... }\npublic Burger(String bunType, String meat) { ... }\npublic Burger(String bunType, String meat, String cheese) { ... }\npublic Burger(String bunType, String meat, String cheese, String sauce) { ... }\n\nWhat happens if a customer wants ONLY bunType and sauce, skipping meat and cheese?",
    "options": [
      "They can call Burger(bunType, sauce) directly since Java automatically detects the intended skip.",
      "There is no constructor overload that allows skipping meat and cheese while specifying sauce — the customer would have to pass placeholder values for meat and cheese just to provide a sauce value, or no matching constructor exists at all.",
      "Java will throw a compile error preventing any of these constructors from being defined.",
      "The four constructors automatically merge into one flexible constructor at compile time."
    ],
    "correctOption": 1,
    "explanation": "The telescoping pattern only supports adding parameters in a FIXED, predetermined order. There is no Burger(bunType, sauce) overload skipping meat and cheese — the class's author would need to anticipate and write a constructor for every meaningful combination, which becomes combinatorially explosive. This rigidity is precisely the limitation that the Builder pattern's flexible, named methods solve."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Product Immutability",
    "question": "A WidgetBuilder constructs an immutable Widget object — once build() returns the Widget, none of its fields can be changed. Why might this design choice be desirable when combined with the Builder pattern?",
    "options": [
      "Immutability is required by the Java language for all Builder Products.",
      "Combining Builder's flexible construction with an immutable final Product gives you the best of both worlds: easy, readable step-by-step assembly during construction, and a safe, unchangeable object afterward that can be shared across threads without synchronization concerns.",
      "Immutable Products cannot have a build() method.",
      "Immutability prevents the Builder pattern from supporting a fluent interface."
    ],
    "correctOption": 1,
    "explanation": "This combination is a common and powerful design choice: the BUILDER is mutable and flexible during construction (accumulating configuration step by step), but once build() finalizes the Product, it can be made immutable — no setters on Widget itself, only final fields. This is especially valuable when the finished object will be shared across multiple parts of an application or across threads, since immutable objects are inherently thread-safe and cannot be accidentally modified after creation."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Comparison",
    "question": "Compare these two approaches for building a ComputerSpec object with optional GPU, extra RAM, and liquid cooling:\nApproach A: Multiple boolean flag parameters in one constructor: new ComputerSpec(cpu, ram, hasGPU, hasExtraRAM, hasLiquidCooling)\nApproach B: ComputerSpecBuilder builder = new ComputerSpecBuilder(cpu, ram).withGPU().withExtraRAM().withLiquidCooling(); ComputerSpec spec = builder.build();\n\nWhich is more readable and self-documenting at the call site, and why?",
    "options": [
      "Approach A — boolean flags are always clearer than method calls.",
      "Approach B — each optional feature is represented by a clearly-named method (withGPU(), withLiquidCooling()), making the call site self-explanatory without needing to check parameter order or boolean meaning.",
      "Both approaches are equally readable.",
      "Approach A — because it requires fewer total classes."
    ],
    "correctOption": 1,
    "explanation": "In Approach A, a call like new ComputerSpec(cpu, ram, true, false, true) forces the reader to count positions and recall which boolean corresponds to which feature — error-prone and unreadable, similar to the telescoping constructor problem. Approach B's withGPU().withLiquidCooling() chain is self-documenting: you can immediately see which features are included just by reading the method names, with no need to consult documentation for parameter order or meaning."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Comparison",
    "question": "A student asks: 'If Builder is good for objects with optional fields, why not just use a no-arg constructor plus a bunch of setter calls on the Product itself, like: Burger b = new Burger(); b.setBun(\"Wheat\"); b.setCheese(\"Swiss\"); ?' What advantage does Builder still offer over this approach?",
    "options": [
      "There is no advantage — direct setters are functionally identical to Builder.",
      "Builder allows the final Product to remain immutable after construction (no public setters needed on the Product itself), and provides a single build() step that can validate the complete configuration before finalizing the object, which a half-constructed mutable object via setters cannot guarantee.",
      "Setters always run slower than Builder methods in Java.",
      "Builder cannot use method names like setBun() or setCheese()."
    ],
    "correctOption": 1,
    "explanation": "The setter-based approach leaves the Product itself mutable and in a potentially inconsistent, half-configured state at any point (e.g., after new Burger() but before any setters run). Builder's separate construction object accumulates configuration, and the build() method represents a single, well-defined point where the COMPLETE configuration is validated and the immutable final Product is produced — preventing partially-configured objects from ever being used by mistake."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Real World",
    "question": "Java's own StringBuilder class supports: new StringBuilder().append(\"Hello\").append(\" \").append(\"World\").toString(); Which Builder pattern characteristics does this exhibit?",
    "options": [
      "It uses a Director to orchestrate the append calls.",
      "It demonstrates a fluent interface — each append() call returns the StringBuilder itself, enabling chaining, and toString() acts like the final build() step producing the finished String.",
      "It demonstrates the Abstract Factory pattern because it creates families of related strings.",
      "It has no relationship to the Builder pattern at all."
    ],
    "correctOption": 1,
    "explanation": "StringBuilder is a well-known real-world example that mirrors Builder pattern mechanics, even though it's part of the Java standard library: append() methods each return the StringBuilder instance (enabling chaining), and toString() serves the role of build(), producing the final immutable String Product. There's no Director in this case — client code calls the chainable methods directly, similar to the 'Builder without Director' approach covered in the material."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Real World",
    "question": "Many UI frameworks let developers configure a dialog box like: new AlertDialog.Builder(context).setTitle(\"Warning\").setMessage(\"Are you sure?\").setPositiveButton(\"Yes\", listener).show(); What pattern is this, and why is it well-suited to dialog construction?",
    "options": [
      "Singleton — because only one dialog can be shown at a time.",
      "Builder — dialogs have many optional configuration elements (title, message, buttons, icons), and most dialogs only use a few of them; the fluent chain lets developers configure exactly what they need.",
      "Abstract Factory — because dialogs come in different operating-system families.",
      "Simple Factory — because show() acts like a static factory method."
    ],
    "correctOption": 1,
    "explanation": "Dialog boxes are a textbook real-world Builder use case: they have many optional pieces (title, message, icon, multiple button types, custom views) but any given dialog typically uses only a handful. The Builder lets developers specify just the relevant pieces with clear method names, avoiding both telescoping constructors (impossible to cover every combination) and confusing positional parameters."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Elements Identification",
    "question": "A furniture customization app has: FurnitureBuilder (interface with addLeg(), addCushion(), build()), ChairBuilder (implements FurnitureBuilder), Chair (the resulting object), and FurnitureDirector (with createOfficeChair() and createDiningChair() methods). Identify each element's role.",
    "options": [
      "FurnitureBuilder = Product; ChairBuilder = Director; Chair = Builder Interface; FurnitureDirector = Concrete Builder",
      "FurnitureBuilder = Builder Interface; ChairBuilder = Concrete Builder; Chair = Product; FurnitureDirector = Director",
      "FurnitureBuilder = Concrete Builder; ChairBuilder = Product; Chair = Director; FurnitureDirector = Builder Interface",
      "All four classes are Concrete Builders working together."
    ],
    "correctOption": 1,
    "explanation": "This question tests correct identification of all four Builder pattern roles in one scenario: FurnitureBuilder is the Builder Interface (declares the building methods). ChairBuilder is the Concrete Builder (implements those methods to assemble a specific Chair). Chair is the Product (the final constructed object). FurnitureDirector is the Director (orchestrates standard configurations like 'office chair' or 'dining chair' using a given builder)."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Director Flexibility",
    "question": "Director director = new Director(new WoodenChairBuilder()); Chair c1 = director.createOfficeChair(); \nThen later: director = new Director(new MetalChairBuilder()); Chair c2 = director.createOfficeChair();\n\nWhat does this demonstrate about the relationship between Director and Concrete Builder?",
    "options": [
      "The Director's createOfficeChair() logic must be rewritten for each different Concrete Builder.",
      "The SAME Director recipe (createOfficeChair()) can produce a structurally similar 'office chair' configuration using completely different underlying materials/construction details, simply by swapping which Concrete Builder is injected — without modifying the Director's code.",
      "MetalChairBuilder cannot be used with the same Director class as WoodenChairBuilder.",
      "This is invalid; a Director can only ever be paired with one specific Concrete Builder type for its entire lifetime."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates exactly the flexibility the material highlights: 'Director can change the ConcreteBuilder to build same type of object differently (e.g. different materials).' The Director's createOfficeChair() method calls the same sequence of builder methods (addLegs(), addCushion(), etc.) regardless of which Concrete Builder is plugged in — but WoodenChairBuilder and MetalChairBuilder will produce structurally similar 'office chairs' using entirely different materials and construction details."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Code Analysis",
    "question": "A Vehicle class has constructors: Vehicle(make), Vehicle(make, model), Vehicle(make, model, year), Vehicle(make, model, year, color), Vehicle(make, model, year, color, mileage). A developer must add a sixth optional field, vin. How many NEW overloaded constructors might be needed in the worst case to preserve full flexibility (specifying vin with various subsets of existing fields)?",
    "options": [
      "Exactly one new constructor covers all cases.",
      "Potentially several new overloads, since vin might need to be combined with any subset of the existing optional fields — this combinatorial growth is the central scalability problem with telescoping constructors.",
      "No new constructors are needed; vin can always be added as the 6th parameter to the existing longest constructor only.",
      "Constructors automatically combine in Java when a new field is introduced."
    ],
    "correctOption": 1,
    "explanation": "This question highlights the combinatorial explosion problem: as more optional fields are added, the number of meaningful combinations grows rapidly, and telescoping constructors can only support combinations that fit the fixed parameter-order pattern. Wanting vin paired with just make and color (skipping model/year) would require yet another specific overload. This scalability failure is exactly why Builder is preferred once the number of optional fields grows past a small handful."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Concept",
    "question": "Which of the following scenarios is the LEAST appropriate candidate for applying the Builder pattern?",
    "options": [
      "A complex HTTP request object with optional headers, query parameters, body, timeout, and retry policy.",
      "A simple ImmutablePoint class with exactly two required int fields, x and y, and no other configuration.",
      "A multi-step PDF document with optional headers, footers, watermarks, page numbering, and embedded images.",
      "A custom game character with optional weapons, armor, abilities, and cosmetic skins."
    ],
    "correctOption": 1,
    "explanation": "Builder shines when there are MANY optional fields and complex assembly steps. ImmutablePoint(x, y) has exactly two REQUIRED fields with no optional configuration and no assembly complexity — a plain constructor is both sufficient and clearer. The other three examples (HTTP request, PDF document, game character) all have numerous genuinely optional components, making them strong Builder candidates."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Elements",
    "question": "A QueryBuilder class is used as: new QueryBuilder().select(\"name\", \"age\").from(\"users\").where(\"age > 18\").orderBy(\"name\").build(); returning a SQLQuery object. If a second implementation, NoSQLQueryBuilder, produces an equivalent MongoQuery object using the same method names, what does this illustrate?",
    "options": [
      "QueryBuilder and NoSQLQueryBuilder cannot share a common Builder Interface because they produce different Product types.",
      "If both implement a common QueryBuilderInterface (with select(), from(), where(), orderBy(), build()), this illustrates how different Concrete Builders can produce entirely different Product representations (SQLQuery vs MongoQuery) using a structurally similar construction process.",
      "This is an example of the Singleton pattern since only one query can exist at a time.",
      "NoSQLQueryBuilder must extend QueryBuilder using inheritance, not an interface."
    ],
    "correctOption": 1,
    "explanation": "This is a strong example of the 'Variety of Products' key point. Even though SQLQuery and MongoQuery are entirely different types of objects, both Concrete Builders can follow the same interface contract and similar method-calling pattern, demonstrating how Builder separates the construction PROCESS (the familiar select/from/where/build sequence) from the final representation (SQL vs NoSQL query objects) — the core definition of the pattern."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Code Analysis",
    "question": "Examine this code:\n\npublic class ReportBuilder {\n    private StringBuilder content = new StringBuilder();\n    public ReportBuilder addSection(String text) {\n        content.append(text);\n        return this;\n    }\n    public String build() {\n        return content.toString();\n    }\n}\n\nWhat happens if a developer calls reportBuilder.build() and then calls reportBuilder.addSection(\"more text\").build() again on the SAME instance?",
    "options": [
      "A compile error occurs because build() can only be called once.",
      "The second build() call returns a String that includes BOTH the original content AND the newly added section, since the internal StringBuilder state was never reset between calls.",
      "The second call throws a NullPointerException because content was cleared by the first build().",
      "A brand new ReportBuilder is automatically created for the second call."
    ],
    "correctOption": 1,
    "explanation": "Because this implementation never resets the internal content field after build(), calling build() does NOT clear accumulated state — it just returns a snapshot via toString(). Reusing the same builder instance after addSection() and a second build() call means the new content is appended onto the old, producing an unexpectedly combined result. This is a real-world gotcha: developers must check whether a Builder resets state after build() or is meant for single-use only."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – When to Use",
    "question": "A startup is debating between Builder and simply adding 4 new overloaded constructors to their existing Order class (which currently has 2 constructors) to support a new optional discountCode field. The Order class is used in over 200 places across the codebase. What risk does adding more overloaded constructors carry compared to introducing a Builder?",
    "options": [
      "No risk — adding overloaded constructors never affects existing code.",
      "Adding more overloaded constructors increases the chance of ambiguous overload resolution and makes future changes harder, while a Builder can be introduced as an additive option without touching any of the 200 existing call sites that use the current constructors.",
      "Builder pattern requires deleting all 200 existing usages immediately.",
      "Overloaded constructors are always faster at runtime than Builder method chains."
    ],
    "correctOption": 1,
    "explanation": "Adding more telescoping overloads to an already-used class increases long-term maintenance risk: new overloads can create ambiguous calls if parameter types overlap, and the class keeps growing in complexity. Introducing an OrderBuilder as a NEW, optional way to construct Order doesn't require touching any of the 200 existing call sites using the original constructors — it can be adopted gradually for new code while legacy code continues working unchanged."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Director Role",
    "question": "A Director class's createStandardLoanApplication(LoanBuilder builder) method is hardcoded to call builder.setTerm(30).setInterestType(\"Fixed\").setInsuranceRequired(true).build(); What would happen if a customer needed a 'standard' loan but with a 15-year term instead of 30?",
    "options": [
      "The customer can simply pass 15 as an argument to createStandardLoanApplication().",
      "Since the Director's method hardcodes the term value internally, the customer cannot get a 15-year 'standard' loan through this Director method — they would need to either modify the Director, add a new Director method, or bypass the Director and use the LoanBuilder directly.",
      "The LoanBuilder will automatically detect the customer wants a different term.",
      "This is impossible to model with the Builder pattern under any approach."
    ],
    "correctOption": 1,
    "explanation": "This question tests understanding of the Director's role and its limitation: a Director method represents a FIXED recipe for a standard configuration. If term is hardcoded to 30 inside createStandardLoanApplication(), there's no parameter to customize it through that method. The customer's options are: (a) bypass the Director and call LoanBuilder directly for full customization, or (b) the development team adds a new Director method (e.g., createStandardLoanApplication(int termYears)) to support the variation."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Misconceptions",
    "question": "A developer claims: 'Since Builder methods return references for chaining, the Builder pattern requires using Java's var keyword for type inference.' What is wrong with this claim?",
    "options": [
      "The claim is correct — Builder patterns cannot compile without var.",
      "This claim is incorrect — method chaining and the Builder pattern work using standard explicit types (e.g., BurgerBuilder) just as well as with var; var is simply an optional Java syntax convenience unrelated to the Builder pattern's mechanics.",
      "var is required only for the Director class, not the Builder class.",
      "Builder pattern was introduced specifically to support the var keyword."
    ],
    "correctOption": 1,
    "explanation": "This question targets a common confusion between unrelated Java features. The Builder pattern's chaining mechanism relies purely on return types (each method returning the builder's own type), which works identically whether you write BurgerBuilder builder = new BurgerBuilder() or var builder = new BurgerBuilder(). The pattern predates Java's var keyword (introduced in Java 10) by many years and has nothing to do with type inference syntax."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Applied Scenario",
    "question": "A resume-building web app lets users add Experience, Education, Skills, and References sections in any order, then preview and export. Some users want a 'Quick Resume' with just Experience and Skills pre-filled with placeholder prompts. Design the best approach using Builder pattern concepts.",
    "options": [
      "Use only telescoping constructors for the Resume class with up to 4 parameters.",
      "Use a ResumeBuilder (Concrete Builder) for full manual customization, and add a Director with a createQuickResume(ResumeBuilder builder) method that pre-configures Experience and Skills sections with placeholder prompts, calling build() at the end.",
      "Create four separate Resume subclasses, one for each possible combination of sections.",
      "Use the Abstract Factory pattern since there are exactly two resume types."
    ],
    "correctOption": 1,
    "explanation": "This scenario combines full manual flexibility (ResumeBuilder used directly by users who want to control every section themselves) with a standardized shortcut (a Director method for 'Quick Resume' that calls the SAME builder's methods in a predetermined way with placeholder content). This is precisely the hybrid pattern usage the material describes — Director for common configurations, direct Builder access for custom ones — applied to a fresh, non-burger scenario."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Builder Pattern – Fluent Interface",
    "question": "A developer accidentally implements addCheese() to return a NEW BurgerBuilder instance each time, instead of returning 'this' (the same instance being modified). What problem does this introduce?",
    "options": [
      "No problem — returning a new instance each time has no functional difference.",
      "Each chained call operates on a DIFFERENT builder instance, so configuration set in earlier calls is lost; only the settings applied to the LAST instance in the chain actually survive into the final build() result.",
      "This actually improves thread-safety with no downsides.",
      "Java will throw a compile-time error if a new instance is returned instead of 'this'."
    ],
    "correctOption": 1,
    "explanation": "If addCheese() does this.cheese = type; return new BurgerBuilder(); — a fresh, empty builder is returned (losing the cheese setting), and any subsequent chained call (.addLettuce()) operates on THIS new, mostly-empty builder, not the one that had cheese configured. The final build() result would be missing earlier configurations. This subtle bug demonstrates why builder methods MUST return 'this' (the same instance being mutated), not a new object, to correctly support the fluent interface."
  },
  {
    "quizTitle": "Builder Pattern",
    "category": "Telescoping Constructors – Limitation",
    "question": "Why is the telescoping constructor approach specifically called an 'anti-pattern' rather than just 'not ideal'?",
    "options": [
      "Because Java's compiler explicitly rejects telescoping constructors with an error.",
      "Because it is a COMMONLY OCCURRING design choice that consistently produces negative outcomes (poor readability, inflexibility, combinatorial overload growth) — the term 'anti-pattern' specifically denotes a frequently-used but counterproductive solution, not just a rare mistake.",
      "Because telescoping constructors were banned starting in Java 8.",
      "Because it only applies to classes with exactly 5 fields."
    ],
    "correctOption": 1,
    "explanation": "An 'anti-pattern' specifically describes a solution pattern that developers commonly reach for instinctively (it seems like a natural way to support optional parameters) but that reliably leads to negative consequences as the class grows. It's not a rare or obscure mistake — it's a recognizable, recurring trap. This is exactly why the material explicitly labels it as an anti-pattern rather than simply noting it as suboptimal style."
  }
]
