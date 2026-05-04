//data/questions/java-Generics.js

// ============================================================
//  questions.js  –  Quiz data for Java Generics (CST8284)
//  Week 9 — Drop this file alongside index.html to run the quiz.
//  Swap this file to reuse the quiz shell with different content.
// ============================================================


module.exports = 
[
  {
    quizTitle: 'Java Generics',
    question: 'A developer writes a <code>NumberBox</code> class that can only hold <code>Integer</code> values. A week later they need a <code>StringBox</code> too. Then a <code>DoubleBox</code>. What principle of generic programming would have solved this from the start?',
    options: [
      'Inheritance — <code>NumberBox</code> should extend <code>StringBox</code>.',
      'Generic programming — create a single <code>Box&lt;T&gt;</code> class with a type parameter so one class works with any type.',
      'Overloading — write multiple constructors that accept different types.',
      'Interfaces — define a <code>Boxable</code> interface each type must implement.'
    ],
    correctOption: 1,
    explanation: 'Generic programming lets you write a single construct — <code>Box&lt;T&gt;</code> — that works with any type by parameterising the type. Without it, you end up duplicating code for every type you need, violating the DRY principle.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Java achieves generic programming in two ways. What are they?',
    options: [
      'Overloading and overriding.',
      'Type parameters (e.g., <code>ArrayList&lt;String&gt;</code>) and inheritance (e.g., using a superclass type to accept many subtypes).',
      'Abstract classes and final classes.',
      'Static methods and instance methods.'
    ],
    correctOption: 1,
    explanation: 'Java achieves genericity through <strong>type parameters</strong> (angle-bracket syntax like <code>ArrayList&lt;E&gt;</code>) and through <strong>inheritance</strong> (a method taking a superclass or interface type works for all subtypes). Both approaches make code reusable across multiple types.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer tries to create an <code>ArrayList&lt;int&gt;</code> to store primitive integers. What happens?',
    options: [
      'It works — Java automatically converts <code>int</code> to <code>Integer</code> inside generics.',
      'It compiles but throws a <code>ClassCastException</code> at runtime.',
      'It is a compile-time error — primitive types cannot be used as type parameters.',
      'It works only if fewer than 10 elements are stored.'
    ],
    correctOption: 2,
    explanation: 'Primitive types (<code>int</code>, <code>char</code>, <code>double</code>, etc.) <strong>cannot</strong> be used as generic type parameters because generics work with objects, and primitives cannot be directly converted to <code>Object</code>. The fix is to use the wrapper class: <code>ArrayList&lt;Integer&gt;</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which of the following correctly stores temperature readings as decimals in a type-safe list?',
    options: [
      '<code>ArrayList&lt;double&gt; temps = new ArrayList&lt;&gt;();</code>',
      '<code>ArrayList&lt;Double&gt; temps = new ArrayList&lt;&gt;();</code>',
      '<code>ArrayList temps = new ArrayList();</code>',
      '<code>ArrayList&lt;float&gt; temps = new ArrayList&lt;&gt;();</code>'
    ],
    correctOption: 1,
    explanation: "Generics require object types. <code>double</code> is a primitive and cannot be used; <code>Double</code> is its wrapper class and works correctly. Java's autoboxing automatically converts between <code>double</code> and <code>Double</code> during <code>add()</code> and <code>get()</code> calls."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer uses a raw (non-generic) <code>LinkedList</code> intended for <code>BankAccount</code> objects and accidentally adds a <code>String</code> to it. When is this error detected?',
    options: [
      'At compile time — the compiler rejects the incorrect type.',
      'At runtime — a <code>ClassCastException</code> is thrown when the <code>String</code> is retrieved and cast to <code>BankAccount</code>.',
      'The error is never detected — Java silently ignores type mismatches.',
      'At compile time — but only if <code>-strict</code> mode is enabled.'
    ],
    correctOption: 1,
    explanation: 'A raw (non-generic) collection accepts <code>Object</code>, so adding a <code>String</code> compiles fine. The error only surfaces at <strong>runtime</strong> when the element is cast to <code>BankAccount</code> — a <code>ClassCastException</code> is thrown. Generics move this to a safer compile-time check.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which statement best explains the safety advantage of <code>ArrayList&lt;BankAccount&gt;</code> over a raw <code>LinkedList</code>?',
    options: [
      'The generic version is faster because it avoids casting overhead at runtime.',
      'It is impossible to add a non-<code>BankAccount</code> object — the compiler rejects the attempt at compile time.',
      'The generic version uses less memory because it stores primitive values.',
      'The raw list is safer because it can hold any object type.'
    ],
    correctOption: 1,
    explanation: 'The generic <code>ArrayList&lt;BankAccount&gt;</code> enforces the element type at <strong>compile time</strong>. Attempting to add a <code>String</code> produces a compiler error immediately, preventing the runtime surprise of a <code>ClassCastException</code>. This is the primary safety benefit of generics.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'After type erasure, what does <code>ArrayList&lt;String&gt;</code> look like inside the JVM?',
    options: [
      'It remains <code>ArrayList&lt;String&gt;</code> — the JVM preserves type parameters.',
      'It becomes a raw <code>ArrayList</code> where the element type is erased to <code>Object</code>.',
      'It becomes <code>ArrayList&lt;Object&gt;</code> explicitly.',
      'It becomes a <code>String[]</code> array for performance.'
    ],
    correctOption: 1,
    explanation: 'Java uses <strong>type erasure</strong>: generic type parameters are removed at compile time and replaced with their bound (or <code>Object</code> if unbounded). At runtime the JVM only sees a raw <code>ArrayList</code>. Type safety is enforced purely by the compiler, not the JVM.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer wants a <code>Container</code> class that can hold one element of any type. What is the correct class declaration?',
    options: [
      '<code>public class Container(T) { ... }</code>',
      '<code>public class Container[T] { ... }</code>',
      '<code>public class Container&lt;T&gt; { ... }</code>',
      '<code>public class Container : T { ... }</code>'
    ],
    correctOption: 2,
    explanation: 'Generic type parameters are declared in <strong>angle brackets</strong> after the class name: <code>public class Container&lt;T&gt;</code>. Parentheses and square brackets are not valid Java syntax for type parameters. The type variable <code>T</code> can then be used inside the class body.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which type variable convention is used for a key type in a generic map class?',
    options: [
      '<code>T</code>',
      '<code>E</code>',
      '<code>K</code>',
      '<code>X</code>'
    ],
    correctOption: 2,
    explanation: 'By Java convention, <code>K</code> represents the key type, <code>V</code> the value type, <code>E</code> the element type in a collection, and <code>T</code> (with <code>S</code>, <code>U</code>) for general types. These are conventions, not rules — but they improve readability.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Given this generic class: <pre><code>public class Wrapper&lt;T&gt; {\n' +
      '  private T value;\n' +
      '  public Wrapper(T v) { value = v; }\n' +
      '  public T get() { return value; }\n' +
      '}</code></pre>What does <code>T</code> represent when you write <code>new Wrapper&lt;String&gt;("hello")</code>?',
    options: [
      '<code>T</code> becomes <code>Object</code> since all classes extend <code>Object</code>.',
      '<code>T</code> is replaced by <code>String</code> — the constructor takes <code>String</code> and <code>get()</code> returns <code>String</code>.',
      "<code>T</code> remains a placeholder and the class doesn't compile without a concrete type.",
      '<code>T</code> becomes <code>Wrapper</code> since the class is self-referential.'
    ],
    correctOption: 1,
    explanation: 'When you instantiate <code>Wrapper&lt;String&gt;</code>, the compiler substitutes <code>String</code> for every occurrence of <code>T</code>. The constructor takes a <code>String</code> argument and <code>get()</code> returns a <code>String</code>. This substitution is performed by the compiler, not at runtime.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A <code>Pair&lt;T, S&gt;</code> class is declared with two type parameters. How would you create an instance pairing a <code>String</code> name with an <code>Integer</code> score?',
    options: [
      '<code>new Pair("Alice", 95);</code>',
      '<code>new Pair&lt;String, Integer&gt;("Alice", 95);</code>',
      '<code>new Pair&lt;String&gt;&lt;Integer&gt;("Alice", 95);</code>',
      '<code>new Pair(String, Integer)("Alice", 95);</code>'
    ],
    correctOption: 1,
    explanation: 'A two-parameter generic class is instantiated by supplying both type arguments: <code>new Pair&lt;String, Integer&gt;("Alice", 95)</code>. With diamond syntax you could write <code>new Pair&lt;&gt;("Alice", 95)</code> and let the compiler infer the types.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Consider: <pre><code>Pair&lt;String, Integer&gt; p = new Pair&lt;&gt;("Bob", 42);\n' +
      'String name = p.getFirst();\n' +
      'Integer score = p.getSecond();</code></pre>Is a cast needed on either retrieval?',
    options: [
      'Yes — both <code>getFirst()</code> and <code>getSecond()</code> return <code>Object</code> and must be cast.',
      'Yes — only <code>getSecond()</code> needs a cast because integers require explicit conversion.',
      'No — the generic type parameters ensure <code>getFirst()</code> returns <code>String</code> and <code>getSecond()</code> returns <code>Integer</code> without casting.',
      'No — but only if the <code>Pair</code> class is declared <code>final</code>.'
    ],
    correctOption: 2,
    explanation: 'One of the major benefits of generics is <strong>eliminating casts</strong>. Because <code>getFirst()</code> is declared to return <code>T</code> (which is <code>String</code>) and <code>getSecond()</code> returns <code>S</code> (which is <code>Integer</code>), the compiler inserts any necessary casts internally and the calling code is clean.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What is the difference between <code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code> and <code>Pair&lt;ArrayList&lt;String&gt;, Integer&gt;</code>?',
    options: [
      'They are equivalent — both store the same data.',
      '<code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code> holds multiple string-integer pairs; <code>Pair&lt;ArrayList&lt;String&gt;, Integer&gt;</code> holds one list of strings paired with a single integer.',
      '<code>Pair&lt;ArrayList&lt;String&gt;, Integer&gt;</code> is illegal — you cannot nest generics.',
      '<code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code> stores pairs of lists.'
    ],
    correctOption: 1,
    explanation: '<code>ArrayList&lt;Pair&lt;String, Integer&gt;&gt;</code> is a list of many string-integer pairs, e.g., <code>[(Alice, 1), (Bob, 3)]</code>. <code>Pair&lt;ArrayList&lt;String&gt;, Integer&gt;</code> is a single pair whose first element is a list of strings and second is one integer, e.g., <code>([Alice, Bob], 1)</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Is the <code>getFirst()</code> method of the <code>Pair&lt;T, S&gt;</code> class a <em>generic method</em>?',
    options: [
      'Yes — it is generic because it returns type <code>T</code>.',
      'Yes — it is generic because it is inside a generic class.',
      'No — it has no type parameters of its own; it is an ordinary method in a generic class.',
      'No — only static methods can be generic.'
    ],
    correctOption: 2,
    explanation: 'A <strong>generic method</strong> declares its own type parameters in angle brackets before the return type (e.g., <code>public &lt;T&gt; T method()</code>). <code>getFirst()</code> uses the class-level type parameter <code>T</code> but declares none of its own — it is an ordinary method in a generic class, not a generic method.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer wants a single static method that prints every element of any type of array. Where do the type parameter brackets go in the method signature?',
    options: [
      'After the method name: <code>public static void print&lt;E&gt;(E[] a)</code>',
      'After the return type: <code>public static void &lt;E&gt; print(E[] a)</code>',
      'Between the modifiers and the return type: <code>public static &lt;E&gt; void print(E[] a)</code>',
      'Before the modifiers: <code>&lt;E&gt; public static void print(E[] a)</code>'
    ],
    correctOption: 2,
    explanation: "For a generic method, the type parameter list goes <strong>between the modifiers and the return type</strong>: <code>public static &lt;E&gt; void print(E[] a)</code>. This distinguishes a generic method's own type parameters from the class-level type parameters."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer calls <code>ArrayUtil.print(new Double[]{1.1, 2.2, 3.3})</code> where <code>print</code> is declared as <code>public static &lt;E&gt; void print(E[] a)</code>. How does the compiler know what <code>E</code> is?',
    options: [
      'The developer must explicitly write <code>ArrayUtil.&lt;Double&gt;print(...)</code>.',
      'The compiler deduces <code>E</code> is <code>Double</code> from the argument type — explicit instantiation is not needed.',
      '<code>E</code> is always inferred as <code>Object</code> for safety.',
      'The JVM determines <code>E</code> at runtime using reflection.'
    ],
    correctOption: 1,
    explanation: "When calling a generic method, you normally don't specify the type argument — the compiler performs <strong>type inference</strong> from the argument. Passing a <code>Double[]</code> tells the compiler that <code>E = Double</code>. Explicit specification (<code>ArrayUtil.&lt;Double&gt;print(...)</code>) is legal but rarely needed."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer tries to call a generic method <code>print(E[] a)</code> with an <code>int[]</code> array. What happens?',
    options: [
      'It works — Java automatically boxes each <code>int</code> to <code>Integer</code> in the array.',
      'It compiles but prints garbage values.',
      'It is a compile-time error — the generic <code>print</code> method cannot be used with a primitive array <code>int[]</code>.',
      'It works only if the array has fewer than 100 elements.'
    ],
    correctOption: 2,
    explanation: 'Generic type parameters cannot be replaced with primitive types. <code>int[]</code> is an array of primitives — <code>E</code> cannot be set to <code>int</code>. To use the generic <code>print</code> method, you need an <code>Integer[]</code> array. Java does not auto-box entire primitive arrays to wrapper arrays.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Can a generic method be defined inside a non-generic class?',
    options: [
      'No — generic methods can only exist in generic classes.',
      'No — generic methods must be in a class that has at least one class-level type parameter.',
      'Yes — a generic method can be declared in any class, generic or not.',
      'Yes — but only if the method is also declared <code>abstract</code>.'
    ],
    correctOption: 2,
    explanation: 'Generic methods are completely independent of whether the enclosing class is generic. A non-generic utility class like <code>ArrayUtil</code> can declare as many generic static methods as needed. The type parameter is scoped to the method, not the class.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer writes: <pre><code>public static &lt;T&gt; T pickRandom(T[] arr) {\n' +
      '  int idx = (int)(Math.random() * arr.length);\n' +
      '  return arr[idx];\n' +
      '}</code></pre>What is returned when called with a <code>String[]</code>?',
    options: [
      'An <code>Object</code> that must be cast to <code>String</code>.',
      'A <code>String</code> — the compiler replaces <code>T</code> with <code>String</code> based on the argument type.',
      'A random character from the array, not the whole string.',
      'Compilation fails because <code>Math.random()</code> cannot work with generics.'
    ],
    correctOption: 1,
    explanation: 'When <code>pickRandom</code> is called with a <code>String[]</code>, the compiler infers <code>T = String</code>, so the return type becomes <code>String</code>. The caller receives a <code>String</code> directly — no cast required. This is the compile-time safety benefit of generic methods.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A generic method needs to call <code>getMeasure()</code> on each element. Without a bound, what problem occurs?',
    options: [
      'The compiler allows it — generic types can call any method.',
      "The compiler rejects it — the type variable <code>E</code> is unknown, so the compiler can't verify that <code>getMeasure()</code> exists.",
      'It compiles but throws a <code>NoSuchMethodException</code> at runtime.',
      'The method is only callable if elements are of type <code>Number</code>.'
    ],
    correctOption: 1,
    explanation: "Without a bound, the type variable <code>E</code> could represent <em>any</em> class, and most classes don't have <code>getMeasure()</code>. The compiler cannot verify the call is valid, so it rejects it. Adding a bound like <code>&lt;E extends Measurable&gt;</code> tells the compiler that every <code>E</code> is guaranteed to have that method."
  },
  {
    quizTitle: 'Java Generics',
    question: 'What does <code>&lt;E extends Measurable&gt;</code> mean in a generic method declaration?',
    options: [
      '<code>E</code> must be a direct subclass of <code>Measurable</code> — it cannot implement the interface.',
      "<code>E</code> must be or extend a type that extends or implements <code>Measurable</code>; in Java, <code>extends</code> in a type bound means 'extends or implements'.",
      '<code>E</code> must extend <code>Object</code> only.',
      '<code>E</code> must be exactly the <code>Measurable</code> class — no subclasses.'
    ],
    correctOption: 1,
    explanation: "In a generic type bound, <code>extends</code> has a broader meaning than in a class declaration: it means <strong>'extends or implements'</strong>. So <code>&lt;E extends Measurable&gt;</code> accepts any class that either extends a class implementing <code>Measurable</code> or directly implements <code>Measurable</code> itself."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer writes: <pre><code>public static &lt;E extends Measurable&gt; double average(ArrayList&lt;E&gt; items)</code></pre>Which call is valid?',
    options: [
      '<code>average(new ArrayList&lt;String&gt;())</code> — all objects can be measured.',
      '<code>average(new ArrayList&lt;BankAccount&gt;())</code> where <code>BankAccount implements Measurable</code>.',
      '<code>average(new ArrayList&lt;Integer&gt;())</code> — <code>Integer</code> extends <code>Number</code>.',
      '<code>average(new ArrayList&lt;Object&gt;())</code> — <code>Object</code> is the supertype of all classes.'
    ],
    correctOption: 1,
    explanation: 'Only types that implement <code>Measurable</code> satisfy the bound. If <code>BankAccount implements Measurable</code>, then <code>ArrayList&lt;BankAccount&gt;</code> is a valid argument. <code>String</code>, <code>Integer</code>, and <code>Object</code> do not implement <code>Measurable</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'To write a generic <code>min()</code> method that finds the smallest element in an <code>ArrayList</code>, what constraint must the type parameter have?',
    options: [
      '<code>&lt;E extends Number&gt;</code> — only numbers can be compared.',
      '<code>&lt;E extends Object&gt;</code> — every class extends <code>Object</code>.',
      '<code>&lt;E extends Comparable&lt;E&gt;&gt;</code> — elements must implement <code>Comparable</code> to support <code>compareTo()</code>.',
      '<code>&lt;E extends Cloneable&gt;</code> — elements must be cloneable to compare copies.'
    ],
    correctOption: 2,
    explanation: 'To call <code>compareTo()</code> on elements, they must implement <code>Comparable&lt;E&gt;</code>. The bound <code>&lt;E extends Comparable&lt;E&gt;&gt;</code> ensures that every element has a <code>compareTo(E other)</code> method, enabling safe comparison inside the method body.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What is the difference between <code>&lt;E extends Comparable&lt;E&gt;&gt;</code> and <code>&lt;E extends Comparable&lt;? super E&gt;&gt;</code>?',
    options: [
      'They are identical — <code>? super E</code> is just verbose syntax for the same thing.',
      'The second is more flexible — it allows <code>E</code> to be compared via a <code>Comparable</code> defined on any of its supertypes, not just itself.',
      'The first works with interfaces; the second only works with abstract classes.',
      'The second version fails at compile time because wildcards cannot appear inside bounds.'
    ],
    correctOption: 1,
    explanation: "<code>&lt;E extends Comparable&lt;E&gt;&gt;</code> requires <code>E</code> to implement <code>Comparable&lt;E&gt;</code> directly. <code>&lt;E extends Comparable&lt;? super E&gt;&gt;</code> is more permissive — <code>E</code>'s comparison logic may be inherited from a superclass. For example, a class that inherits <code>compareTo</code> from its parent satisfies the second bound but might not satisfy the first."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer needs a type parameter that must implement both <code>Comparable&lt;E&gt;</code> and <code>Cloneable</code>. Which syntax is correct?',
    options: [
      '<code>&lt;E extends Comparable&lt;E&gt;, Cloneable&gt;</code>',
      '<code>&lt;E extends Comparable&lt;E&gt; | Cloneable&gt;</code>',
      '<code>&lt;E extends Comparable&lt;E&gt; &amp; Cloneable&gt;</code>',
      '<code>&lt;E super Comparable&lt;E&gt; &amp; Cloneable&gt;</code>'
    ],
    correctOption: 2,
    explanation: 'Multiple bounds are combined with the <strong>ampersand <code>&amp;</code></strong>: <code>&lt;E extends Comparable&lt;E&gt; &amp; Cloneable&gt;</code>. The pipe <code>|</code> is used in multi-catch exception blocks, not type bounds. Commas are used to separate multiple type parameters, not multiple bounds on one.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'The <code>Comparable</code> interface is itself generic: <code>Comparable&lt;T&gt;</code>. What does the type parameter <code>T</code> specify?',
    options: [
      'The return type of <code>compareTo()</code>.',
      'The type of the parameter in <code>compareTo(T other)</code> — what type the object can be compared with.',
      'The natural ordering direction (ascending or descending).',
      'The class that owns the <code>compareTo</code> implementation.'
    ],
    correctOption: 1,
    explanation: '<code>Comparable&lt;T&gt;</code> parameterises the type of argument that <code>compareTo(T other)</code> accepts. For example, <code>String implements Comparable&lt;String&gt;</code> means a <code>String</code> can only be compared to another <code>String</code> — not to objects of a different class.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Given that <code>SavingsAccount</code> is a subclass of <code>BankAccount</code>, which statement about their generic list types is true?',
    options: [
      '<code>ArrayList&lt;SavingsAccount&gt;</code> is a subtype of <code>ArrayList&lt;BankAccount&gt;</code>.',
      '<code>ArrayList&lt;BankAccount&gt;</code> is a subtype of <code>ArrayList&lt;SavingsAccount&gt;</code>.',
      'Neither is a subtype of the other — generic types are invariant in Java.',
      'They are the same type because of type erasure.'
    ],
    correctOption: 2,
    explanation: 'Java generics are <strong>invariant</strong>: <code>ArrayList&lt;SavingsAccount&gt;</code> is <em>not</em> a subtype of <code>ArrayList&lt;BankAccount&gt;</code>, even though <code>SavingsAccount</code> extends <code>BankAccount</code>. Assigning one to the other is a compile-time error. (Arrays are covariant and allow this, but it can cause <code>ArrayStoreException</code> at runtime.)'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer writes: <pre><code>ArrayList&lt;SavingsAccount&gt; savings = new ArrayList&lt;&gt;();\n' +
      'ArrayList&lt;BankAccount&gt; accounts = savings; // Line A</code></pre>What happens at Line A?',
    options: [
      'It compiles and runs correctly because <code>SavingsAccount</code> is a <code>BankAccount</code>.',
      'It is a <strong>compile-time error</strong> — you cannot assign a generic list of a subtype to a variable of a generic list of a supertype.',
      'It compiles but throws a <code>ClassCastException</code> at runtime.',
      'It compiles with a warning but runs correctly.'
    ],
    correctOption: 1,
    explanation: 'This assignment is a <strong>compile-time error</strong>. If it were allowed, you could add a <code>CheckingAccount</code> (also a <code>BankAccount</code>) through <code>accounts</code>, corrupting the <code>savings</code> list. Java prevents this by making generic types invariant.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Arrays in Java are covariant: <code>SavingsAccount[]</code> can be assigned to a <code>BankAccount[]</code> variable. Why is this more dangerous than the generic equivalent?',
    options: [
      'It is not dangerous — arrays and generics behave identically.',
      'Arrays are slower, leading to performance errors.',
      'Covariant arrays allow type-unsafe writes to pass compile time, only to throw <code>ArrayStoreException</code> at runtime when an incompatible object is stored.',
      'Arrays use more memory than generic lists.'
    ],
    correctOption: 2,
    explanation: "Because <code>BankAccount[] accounts = savingsAccounts</code> compiles, you can write code that tries to store a <code>CheckingAccount</code> in the array. The compiler can't prevent this, so Java throws <code>ArrayStoreException</code> at <strong>runtime</strong>. Generics catch this mistake at compile time instead."
  },
  {
    quizTitle: 'Java Generics',
    question: 'What does <code>? extends E</code> mean as a wildcard type in a method parameter?',
    options: [
      'The type can be any supertype of <code>E</code>.',
      'The type can be <code>E</code> or any of its subclasses.',
      'The type is exactly <code>E</code> — no subclasses allowed.',
      'The type is unknown and no type constraint is applied.'
    ],
    correctOption: 1,
    explanation: '<code>? extends E</code> is an <strong>upper-bounded wildcard</strong>: the unknown type must be <code>E</code> itself or a subtype of <code>E</code>. For example, <code>LinkedList&lt;? extends Shape&gt;</code> accepts a list of <code>Shape</code>, <code>Circle</code>, or any other <code>Shape</code> subclass.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A method is declared as: <pre><code>public void addAll(LinkedList&lt;? extends E&gt; other)</code></pre>What types of lists can be passed as <code>other</code>?',
    options: [
      'Only a list of exactly type <code>E</code>.',
      'A list of <code>E</code> or any subclass of <code>E</code>.',
      'A list of <code>E</code> or any superclass of <code>E</code>.',
      'Any list of any type.'
    ],
    correctOption: 1,
    explanation: 'The upper-bounded wildcard <code>? extends E</code> means the method accepts a list containing elements of type <code>E</code> <em>or any of its subclasses</em>. This allows you to safely read elements (they are guaranteed to be at least of type <code>E</code>) while still accepting more specific lists.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What does <code>? super E</code> mean as a wildcard type?',
    options: [
      'Any subtype of <code>E</code>.',
      'Exactly the type <code>E</code> only.',
      'Any supertype of <code>E</code>.',
      'Any type, with no constraint.'
    ],
    correctOption: 2,
    explanation: '<code>? super E</code> is a <strong>lower-bounded wildcard</strong>: the unknown type must be <code>E</code> itself or any superclass of <code>E</code>. This is useful when a method needs to write elements of type <code>E</code> into a collection — the container can hold <code>E</code> objects if it stores <code>E</code> or any ancestor.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer declares: <code>static void reverse(List&lt;?&gt; list)</code>. What does the unbounded wildcard <code>?</code> mean here?',
    options: [
      'The method only works on lists of <code>Object</code>.',
      'The method accepts a list of any type — equivalent to <code>List&lt;T&gt;</code> for any <code>T</code>.',
      'The method accepts only raw (non-generic) lists.',
      "The list's element type will be inferred as <code>Comparable</code>."
    ],
    correctOption: 1,
    explanation: "The unbounded wildcard <code>?</code> means the method accepts a <code>List</code> of <em>any</em> type. It is shorthand for 'I don't care about or need to know the element type'. This is useful for methods like <code>reverse()</code> that operate on list structure without needing to know the element type."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer uses <code>List&lt;?&gt;</code> as a parameter type. Can they add a new element to this list inside the method?',
    options: [
      'Yes — any object can be added since the type is unknown.',
      'Yes — but only <code>null</code> can be added.',
      'No — with an unbounded wildcard the compiler cannot verify type safety for writes, so adding elements (other than <code>null</code>) is rejected.',
      'Yes — adding elements is fine; only reading requires a cast.'
    ],
    correctOption: 2,
    explanation: "With <code>List&lt;?&gt;</code>, the compiler knows the list has <em>some</em> specific type, but not which one. Adding a <code>String</code> (or anything) could violate the list's actual type. Therefore, the compiler forbids adding elements (except <code>null</code>) to a wildcard-typed collection. You can only read from it safely."
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which wildcard type should be used for a method that reads elements from a collection of some subtype of <code>Animal</code>?',
    options: [
      '<code>? super Animal</code>',
      '<code>?</code>',
      '<code>? extends Animal</code>',
      '<code>Animal</code> with no wildcard.'
    ],
    correctOption: 2,
    explanation: 'Use <code>? extends Animal</code> (upper-bounded wildcard) when you want to <strong>read</strong> from a collection. It guarantees every element is at least an <code>Animal</code>, so you can call <code>Animal</code> methods on them. The mnemonic is PECS: Producer Extends, Consumer Super.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'After type erasure, what does the generic class <code>Pair&lt;T, S&gt;</code> become in the JVM?',
    options: [
      'The JVM keeps <code>Pair&lt;T, S&gt;</code> as-is and resolves types at runtime.',
      'A raw class <code>Pair</code> where <code>T</code> and <code>S</code> are replaced with <code>Object</code>.',
      'Two separate classes: <code>PairT</code> and <code>PairS</code>.',
      'An abstract class that cannot be instantiated.'
    ],
    correctOption: 1,
    explanation: 'Type erasure removes all generic type information. <code>Pair&lt;T, S&gt;</code> becomes a raw <code>Pair</code> class where <code>T</code> and <code>S</code> are both replaced with their bounds (or <code>Object</code> if unbounded). Only one class file is generated — not one per type combination.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A bounded type variable <code>&lt;E extends Measurable&gt;</code> is erased. What does <code>E</code> become in the compiled bytecode?',
    options: [
      '<code>Object</code> — all type variables become <code>Object</code> regardless of bounds.',
      '<code>Measurable</code> — the upper bound replaces the type variable.',
      '<code>Void</code> — erased types have no representation.',
      '<code>Comparable</code> — the most common interface is used.'
    ],
    correctOption: 1,
    explanation: 'When a type variable has a bound (like <code>extends Measurable</code>), erasure replaces it with the <strong>bound type</strong> — <code>Measurable</code> in this case. Unbounded variables become <code>Object</code>. The compiled method signature uses <code>Measurable</code>, not <code>E</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Why can you NOT write <code>new E()</code> inside a generic method with type parameter <code>E</code>?',
    options: [
      'Constructors are not allowed to use type parameters.',
      'Type erasure means <code>E</code> becomes <code>Object</code> at runtime, so <code>new E()</code> would create an <code>Object</code> — not the actual intended type. The compiler forbids this.',
      'The <code>new</code> keyword is reserved for primitive types only.',
      'Only static methods can construct new objects of a type parameter.'
    ],
    correctOption: 1,
    explanation: "Because of type erasure, the JVM doesn't know the actual type of <code>E</code> at runtime. Writing <code>new E()</code> would compile to <code>new Object()</code> — not the desired type. The compiler rejects <code>new E()</code> to prevent this misleading and useless construct."
  },
  {
    quizTitle: 'Java Generics',
    question: 'Why can you NOT write <code>new E[MAX_SIZE]</code> to create an array of a generic type?',
    options: [
      'Arrays cannot store objects — only primitives.',
      "Array creation with a type parameter is erased to <code>new Object[MAX_SIZE]</code>, which doesn't match the declared array type and loses type safety.",
      'The <code>MAX_SIZE</code> constant is not accessible from a generic context.',
      'Generic arrays are a Java 17 feature not yet covered.'
    ],
    correctOption: 1,
    explanation: "Attempting <code>new E[n]</code> is erased to <code>new Object[n]</code> at runtime. This creates an <code>Object[]</code>, which the compiler can't safely use as an <code>E[]</code>. The compiler prevents this to avoid heap pollution. Two workarounds exist: use an <code>ArrayList&lt;E&gt;</code>, or use an <code>Object[]</code> and cast when reading."
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer works around the generic array problem with: <pre><code>private Object[] elements;\n' +
      'public E pop() {\n' +
      '  currentSize--;\n' +
      '  return (E) elements[currentSize];\n' +
      '}</code></pre>What warning does the compiler generate, and why?',
    options: [
      'No warning — using <code>Object[]</code> with a cast is the recommended approach.',
      'An unchecked cast warning — the cast <code>(E)</code> cannot be verified at compile time because type information is erased.',
      'A deprecation warning — <code>Object[]</code> arrays are deprecated in favour of <code>ArrayList</code>.',
      'A null-pointer warning — <code>elements[currentSize]</code> may be null.'
    ],
    correctOption: 1,
    explanation: 'The compiler generates an <strong>unchecked cast warning</strong> for <code>(E) elements[currentSize]</code>. Because <code>E</code> is erased at runtime, the JVM cannot verify the cast is safe. The developer must ensure only <code>E</code> objects were ever stored in <code>elements[]</code> — the compiler cannot guarantee this.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer wants to fill an array with default objects but writes: <pre><code>public static &lt;E&gt; void fill(E[] a) {\n' +
      '  for (int i = 0; i &lt; a.length; i++)\n' +
      '    a[i] = new E(); // ERROR\n' +
      '}</code></pre>What is the recommended fix?',
    options: [
      'Replace <code>new E()</code> with <code>new Object()</code>.',
      'Pass a default value as a parameter: <code>fill(E[] a, E defaultValue)</code> and assign <code>a[i] = defaultValue</code>.',
      'Use reflection: <code>a[i] = E.class.newInstance()</code>.',
      'Declare <code>E</code> as <code>abstract</code> to allow default construction.'
    ],
    correctOption: 1,
    explanation: 'The standard fix is to <strong>supply the default value as a parameter</strong>: <code>public static &lt;E&gt; void fill(E[] a, E defaultValue)</code>. The caller provides an instance of the correct type, and the method copies it into each array slot — no illegal <code>new E()</code> needed.'
  },
  {
    quizTitle: 'Java Generics',
    question: "At runtime, is there any difference between a <code>List&lt;String&gt;</code> and a <code>List&lt;Integer&gt;</code> from the JVM's perspective?",
    options: [
      'Yes — the JVM keeps the type parameter for runtime type checking.',
      'No — both are seen as a raw <code>List</code> (storing <code>Object</code> references) after type erasure.',
      'Yes — <code>List&lt;String&gt;</code> uses more memory than <code>List&lt;Integer&gt;</code>.',
      'No — but the JVM uses the type parameter to optimise method dispatch.'
    ],
    correctOption: 1,
    explanation: 'After type erasure the JVM sees both simply as <code>List</code>. There is <strong>no runtime distinction</strong> between <code>List&lt;String&gt;</code> and <code>List&lt;Integer&gt;</code>. This is why you cannot use <code>instanceof List&lt;String&gt;</code> at runtime — the type argument is gone.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer tries to check the generic type at runtime: <code>if (obj instanceof List&lt;String&gt;)</code>. What happens?',
    options: [
      'It works perfectly — the JVM checks both the class and the generic type.',
      'It is a compile-time error — <code>instanceof</code> cannot check parameterised types because the type parameter is erased.',
      'It compiles and always returns <code>true</code> for any <code>List</code>.',
      'It compiles but throws <code>ClassCastException</code> at runtime.'
    ],
    correctOption: 1,
    explanation: 'Because generic type information is erased at runtime, you cannot use <code>instanceof</code> with a parameterised type. The compiler rejects <code>instanceof List&lt;String&gt;</code>. You can only write <code>instanceof List&lt;?&gt;</code> or the raw <code>instanceof List</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Can a generic class directly extend <code>Throwable</code>? For example, <code>class MyException&lt;T&gt; extends Exception</code>?',
    options: [
      'Yes — generic exception classes are common in Java.',
      'No — generic classes cannot extend <code>Throwable</code> or any of its subclasses.',
      'Yes — but only if <code>T</code> is bounded to extend <code>Throwable</code>.',
      'Yes — but catching such exceptions requires a wildcard: <code>catch (MyException&lt;?&gt; e)</code>.'
    ],
    correctOption: 1,
    explanation: 'Java does not allow generic classes to extend <code>Throwable</code>. Because exception type information must be available at runtime for catch matching, and generics are erased, creating generic exception classes would break the exception handling mechanism.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which of the following is a valid use of generics?',
    options: [
      '<code>ArrayList&lt;int&gt;</code>',
      '<code>new T()</code> inside a generic method',
      '<code>new E[10]</code> inside a generic class',
      '<code>Pair&lt;String, ArrayList&lt;Integer&gt;&gt;</code>'
    ],
    correctOption: 3,
    explanation: 'Nesting generic types is perfectly valid: <code>Pair&lt;String, ArrayList&lt;Integer&gt;&gt;</code> uses concrete types as both type arguments. The other options are all forbidden: <code>int</code> is a primitive, <code>new T()</code> and <code>new E[]</code> both violate type-erasure rules.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer needs a method that returns the maximum element from an <code>ArrayList</code> of any comparable type. Which signature is correct?',
    options: [
      '<code>public static Object max(ArrayList list)</code>',
      '<code>public static &lt;E extends Comparable&lt;E&gt;&gt; E max(ArrayList&lt;E&gt; list)</code>',
      '<code>public static &lt;E&gt; E max(ArrayList list)</code>',
      '<code>public static E max(ArrayList&lt;E&gt; list)</code>'
    ],
    correctOption: 1,
    explanation: 'The correct signature constrains <code>E</code> to be <code>Comparable&lt;E&gt;</code> (so <code>compareTo()</code> is available), uses a generic <code>ArrayList&lt;E&gt;</code> parameter, and returns <code>E</code>. Option A uses raw types and returns <code>Object</code>. Option C mixes generics incorrectly. Option D is missing the type parameter declaration.'
  },
  {
    quizTitle: 'Java Generics',
    question: "A developer writes a generic <code>Stack&lt;E&gt;</code> class. Which internal storage choice avoids the 'cannot create generic array' problem cleanly?",
    options: [
      '<code>private E[] elements = new E[100];</code>',
      '<code>private Object[] elements = new Object[100];</code> with a cast on <code>pop()</code>.',
      '<code>private ArrayList&lt;E&gt; elements = new ArrayList&lt;&gt;();</code>',
      'Both B and C are valid workarounds.'
    ],
    correctOption: 3,
    explanation: 'Both workarounds are valid. Using <code>Object[]</code> with a cast (<code>(E)</code>) in <code>pop()</code> works but generates an unchecked warning. Using <code>ArrayList&lt;E&gt;</code> internally is cleaner — no cast, no warning. Both avoid the illegal <code>new E[]</code> constructor.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A library function should work with a <code>List</code> of any type without reading or writing its elements — only passing it to another method. Which parameter type is most appropriate?',
    options: [
      '<code>List&lt;Object&gt;</code>',
      '<code>List&lt;T&gt;</code> with a type parameter on the method.',
      '<code>List&lt;?&gt;</code> — unbounded wildcard.',
      '<code>List&lt;? extends Object&gt;</code>'
    ],
    correctOption: 2,
    explanation: "When a method doesn't need to know the element type at all, <code>List&lt;?&gt;</code> (unbounded wildcard) is the cleanest choice. It accepts any parameterised <code>List</code>. <code>List&lt;Object&gt;</code> would only accept <code>List&lt;Object&gt;</code> literally — not <code>List&lt;String&gt;</code> or any other specific type."
  },
  {
    quizTitle: 'Java Generics',
    question: 'What is wrong with this code? <pre><code>ArrayList&lt;String&gt; words = new ArrayList&lt;&gt;();\n' +
      'words.add("Hello");\n' +
      'words.add(42); // Line A\n' +
      'String s = words.get(1); // Line B</code></pre>',
    options: [
      'Line A is a compile-time error — <code>42</code> (an <code>int</code>/<code>Integer</code>) cannot be added to <code>ArrayList&lt;String&gt;</code>.',
      'Line B is a compile-time error — <code>get()</code> returns <code>Object</code> and must be cast.',
      'Both lines compile but Line B throws <code>ClassCastException</code> at runtime.',
      'Nothing is wrong — Java auto-converts <code>42</code> to <code>"42"</code>.'
    ],
    correctOption: 0,
    explanation: 'Line A is a <strong>compile-time error</strong>. <code>ArrayList&lt;String&gt;</code> only accepts <code>String</code> objects. Adding an <code>Integer</code> (autoboxed from <code>42</code>) is rejected by the compiler. This is exactly the type-safety benefit generics provide — catching the error before the program runs.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer declares: <pre><code>public static &lt;E&gt; E firstElement(List&lt;E&gt; list) {\n' +
      '  return list.get(0);\n' +
      '}</code></pre>What is the return type when called as <code>firstElement(new ArrayList&lt;Double&gt;())</code>?',
    options: [
      '<code>Object</code> — all generic returns are <code>Object</code> at the call site.',
      '<code>Double</code> — the compiler infers <code>E = Double</code> and the return type is <code>Double</code>.',
      '<code>Number</code> — the nearest bounded supertype.',
      '<code>void</code> — the list is empty so nothing is returned.'
    ],
    correctOption: 1,
    explanation: 'The compiler infers <code>E = Double</code> from the argument. Therefore <code>firstElement()</code> returns <code>Double</code> — no cast needed at the call site. This is how generic methods eliminate both casts and raw-type usage.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What does this code produce? <pre><code>Pair&lt;String, String&gt; p = new Pair&lt;&gt;("Hello", "World");\n' +
      'System.out.println(p.getFirst() + " " + p.getSecond());</code></pre>',
    options: [
      '<code>Hello World</code>',
      'A compile-time error — both type parameters must be different.',
      '<code>null null</code> — default values for <code>String</code>.',
      'A runtime <code>ClassCastException</code>.'
    ],
    correctOption: 0,
    explanation: 'There is no rule requiring the two type parameters of <code>Pair&lt;T, S&gt;</code> to be different types. <code>Pair&lt;String, String&gt;</code> is perfectly valid. <code>getFirst()</code> returns <code>"Hello"</code> and <code>getSecond()</code> returns <code>"World"</code>, so the output is <code>Hello World</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What is wrong with this generic class definition? <pre><code>public class Box&lt;T&gt; {\n' +
      '  private T[] contents;\n' +
      '  public Box(int size) {\n' +
      '    contents = new T[size]; // Line A\n' +
      '  }\n' +
      '}</code></pre>',
    options: [
      'Line A: you cannot create an array using a generic type parameter — use <code>new Object[size]</code> or <code>ArrayList&lt;T&gt;</code> instead.',
      'The class must be declared <code>abstract</code> to use type parameters.',
      'Line A: <code>size</code> must be a <code>long</code>, not an <code>int</code>.',
      'Nothing is wrong — this is valid Java.'
    ],
    correctOption: 0,
    explanation: 'Line A is a <strong>compile-time error</strong>. Due to type erasure, <code>new T[size]</code> would become <code>new Object[size]</code> at runtime — the compiler rejects this to prevent confusion. Fix: use <code>new Object[size]</code> with a cast on retrieval, or use <code>new ArrayList&lt;T&gt;()</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer writes a method: <pre><code>public static &lt;E extends Comparable&lt;E&gt;&gt; E min(ArrayList&lt;E&gt; list) {\n' +
      '  E smallest = list.get(0);\n' +
      '  for (E item : list)\n' +
      '    if (item.compareTo(smallest) &lt; 0)\n' +
      '      smallest = item;\n' +
      '  return smallest;\n' +
      '}</code></pre>Why is the call <code>min(new ArrayList&lt;BankAccount&gt;())</code> rejected at compile time (assuming <code>BankAccount</code> does not implement <code>Comparable</code>)?',
    options: [
      '<code>BankAccount</code> objects cannot be stored in an <code>ArrayList</code>.',
      "The method requires elements to implement <code>Comparable&lt;E&gt;</code>; since <code>BankAccount</code> doesn't, the type bound is violated.",
      'The list is empty, so <code>list.get(0)</code> would throw an exception.',
      'The return type <code>E</code> cannot be used with <code>BankAccount</code>.'
    ],
    correctOption: 1,
    explanation: "The bound <code>&lt;E extends Comparable&lt;E&gt;&gt;</code> requires the element type to implement <code>Comparable</code>. Passing an <code>ArrayList&lt;BankAccount&gt;</code> where <code>BankAccount</code> doesn't implement <code>Comparable</code> violates this bound — the compiler rejects it with a type argument mismatch error."
  },
  {
    quizTitle: 'Java Generics',
    question: 'After type erasure, what does this method look like? <pre><code>public static &lt;E extends Measurable&gt; E findMax(E[] arr) {\n' +
      '  E best = arr[0];\n' +
      '  for (E item : arr)\n' +
      '    if (item.getMeasure() &gt; best.getMeasure())\n' +
      '      best = item;\n' +
      '  return best;\n' +
      '}</code></pre>',
    options: [
      '<code>public static Object findMax(Object[] arr) { ... }</code>',
      '<code>public static Measurable findMax(Measurable[] arr) { ... }</code>',
      '<code>public static &lt;E&gt; E findMax(E[] arr) { ... }</code>',
      '<code>public static void findMax(Object[] arr) { ... }</code>'
    ],
    correctOption: 1,
    explanation: 'Type erasure replaces <code>E</code> with its bound <code>Measurable</code>. The erased method signature becomes <code>public static Measurable findMax(Measurable[] arr)</code> with all <code>E</code> occurrences in the body replaced with <code>Measurable</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'Which declaration correctly creates a <code>HashMap</code> that maps each student name to a list of their course grades?',
    options: [
      '<code>HashMap&lt;String&gt; grades = new HashMap&lt;&gt;();</code>',
      '<code>HashMap&lt;String, Double&gt; grades = new HashMap&lt;&gt;();</code>',
      '<code>HashMap&lt;String, ArrayList&lt;Double&gt;&gt; grades = new HashMap&lt;&gt;();</code>',
      '<code>HashMap&lt;ArrayList&lt;Double&gt;, String&gt; grades = new HashMap&lt;&gt;();</code>'
    ],
    correctOption: 2,
    explanation: 'Each student name (<code>String</code>) maps to a <em>list</em> of grades (<code>ArrayList&lt;Double&gt;</code>). So the correct declaration is <code>HashMap&lt;String, ArrayList&lt;Double&gt;&gt;</code>. Nesting generic types inside other generic types is valid and common. Option D has the key and value types reversed.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'What is the output of this code? <pre><code>public static &lt;E&gt; void swap(E[] arr, int i, int j) {\n' +
      '  E temp = arr[i];\n' +
      '  arr[i] = arr[j];\n' +
      '  arr[j] = temp;\n' +
      '}\n' +
      'String[] s = {"A", "B", "C"};\n' +
      'swap(s, 0, 2);\n' +
      'System.out.println(s[0] + s[2]);</code></pre>',
    options: [
      '<code>AC</code>',
      '<code>CA</code>',
      '<code>AB</code>',
      'A <code>ClassCastException</code> at runtime.'
    ],
    correctOption: 1,
    explanation: '<code>swap(s, 0, 2)</code> exchanges <code>s[0]</code> (<code>"A"</code>) and <code>s[2]</code> (<code>"C"</code>). After the swap, <code>s[0] = "C"</code> and <code>s[2] = "A"</code>. So <code>s[0] + s[2]</code> is <code>"C" + "A" = "CA"</code>.'
  },
  {
    quizTitle: 'Java Generics',
    question: 'A developer declares: <pre><code>ArrayList&lt;SavingsAccount&gt; savings = new ArrayList&lt;&gt;();\n' +
      'ArrayList&lt;BankAccount&gt; accounts = savings;</code></pre>and then calls <code>accounts.add(new CheckingAccount())</code>. Assuming it compiled, what would go wrong at runtime?',
    options: [
      'Nothing — <code>CheckingAccount</code> is a <code>BankAccount</code>, so it fits.',
      'The <code>savings</code> list would silently contain a <code>CheckingAccount</code>, causing a <code>ClassCastException</code> when the application tries to treat all elements as <code>SavingsAccount</code>.',
      'The <code>add()</code> call would return <code>false</code> indicating failure.',
      '<code>OutOfMemoryError</code> — mixing account types exceeds the list capacity.'
    ],
    correctOption: 1,
    explanation: "This is exactly the heap pollution scenario generics prevent. If the assignment were legal, you could add a <code>CheckingAccount</code> through the <code>accounts</code> reference. Later code that retrieves from <code>savings</code> and casts to <code>SavingsAccount</code> would get a <code>ClassCastException</code>. Java's invariant generics make the assignment a compile-time error to prevent this entirely."
  }
];