
// data/questions/java-exception-handling.js

// ============================================================
//  questions.js  –  Quiz data for Java Exception Handling (CST8284)
//  Week 12 — Drop this file alongside index.html to run the quiz.
//  Swap this file to reuse the quiz shell with different content.
// ============================================================



module.exports = [
  {
    quizTitle: 'Java Exception Handling',
    question: 'A pizza-ordering app crashes whenever a customer enters a negative quantity. The developer decides to handle this with exception handling. Which description best fits this use case?',
    options: [
      'Asynchronous error handling — the crash happens outside normal program flow.',
      'Synchronous error handling — the problem occurs directly when a statement with bad input executes.',
      'Error handling is unnecessary; the JVM ignores negative integers.',
      'This should use hardware interrupt handling, not Java exceptions.'
    ],
    correctOption: 1,
    explanation: 'Exception handling is designed for <strong>synchronous errors</strong> — problems that arise when a specific statement executes with bad data (like a negative quantity). Asynchronous events, such as network arrivals or mouse clicks, are handled differently.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which of the following is an example of an event that exception handling is <strong>NOT</strong> designed to handle?',
    options: [
      'Division by zero inside a calculation method.',
      'An array access using an out-of-range index.',
      'A network packet arriving while the program is running.',
      'Passing a null reference where an object is expected.'
    ],
    correctOption: 2,
    explanation: 'Exception handling targets <strong>synchronous</strong> errors tied to statement execution. A network packet arriving is an <strong>asynchronous</strong> event — it occurs independently of any specific statement and is handled by event listeners or callbacks, not try/catch.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer adds exception handling after the entire system is built. Which principle does this violate?',
    options: [
      'The DRY principle — exception handling requires duplicate code.',
      'The best practice of designing error-recovery strategies from the beginning of the design process.',
      'The principle that exceptions should only be thrown by the JVM.',
      'The rule that exception handling must be added before writing business logic.'
    ],
    correctOption: 1,
    explanation: 'Exception handling strategies should be incorporated from the start of the design process, not bolted on after implementation. Retrofitting error handling into a completed system is fragile and often incomplete.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A hospital patient-monitoring system must continue running even when a sensor sends an invalid reading. Which property of exception handling makes this possible?',
    options: [
      'Exception handling terminates the program immediately to prevent data corruption.',
      'Exception handling allows a program to maintain normal flow and continue executing after dealing with a problem.',
      'Exception handling discards all invalid data silently.',
      'Exception handling pauses the program until a system administrator intervenes.'
    ],
    correctOption: 1,
    explanation: 'A core purpose of exception handling is fault tolerance — allowing <strong>mission-critical systems</strong> to deal with problems and keep running rather than crashing. The hospital system catches the bad sensor reading and continues monitoring.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer writes a <code>try</code> block but does not follow it with a <code>catch</code> or <code>finally</code> block. What happens at compile time?',
    options: [
      'The code compiles fine; <code>catch</code> and <code>finally</code> are optional.',
      'The compiler produces an error — a <code>try</code> block must be followed by at least one <code>catch</code> or a <code>finally</code>.',
      'The JVM adds a default <code>catch</code> block automatically.',
      'The code compiles but throws a <code>SyntaxException</code> at runtime.'
    ],
    correctOption: 1,
    explanation: 'A standalone <code>try</code> block is a <strong>compile-time error</strong>. It must be followed by at least one <code>catch</code> block, a <code>finally</code> block, or both. Neither block can exist alone without a preceding <code>try</code>.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is the difference between <code>throw</code> and <code>throws</code> in Java?',
    options: [
      '<code>throw</code> declares that a method may produce an exception; <code>throws</code> actually creates and fires the exception object.',
      '<code>throw</code> actually fires an exception object; <code>throws</code> declares in a method signature that the method may produce that exception.',
      'They are synonyms — both throw an exception object immediately.',
      '<code>throw</code> is for checked exceptions; <code>throws</code> is for unchecked exceptions.'
    ],
    correctOption: 1,
    explanation: '<code>throw</code> is a statement that <em>creates and fires</em> an exception object at runtime. <code>throws</code> is a keyword in a method signature that <em>declares</em> which checked exceptions the method might propagate — it does not throw anything itself.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer writes the following: <pre><code>catch (IOException e) {\n' +
      '  System.out.println(e.getMessage());\n' +
      '}</code></pre>Without a preceding <code>try</code> block, what happens?',
    options: [
      'The <code>catch</code> block works independently as a standalone error handler.',
      'It produces a compile-time error — <code>catch</code> cannot be used without a preceding <code>try</code>.',
      'It compiles but the catch block is simply never triggered.',
      'The JVM treats it as a regular method and executes it normally.'
    ],
    correctOption: 1,
    explanation: 'A <code>catch</code> block <strong>must</strong> be directly preceded by a <code>try</code> block. It has no meaning in isolation and the compiler rejects it. Similarly, <code>finally</code> must also follow a <code>try</code> block.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which keyword is used in a method signature to warn callers that a checked exception might propagate out of the method?',
    options: [
      '<code>throw</code>',
      '<code>catch</code>',
      '<code>throws</code>',
      '<code>propagate</code>'
    ],
    correctOption: 2,
    explanation: '<code>throws</code> appears in the method header (e.g., <code>public void load() throws IOException</code>) and acts as a warning to callers — like a hazard sign — that this exception may be passed along. The caller must then handle or re-declare it.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A flight-booking method receives a requested seat number of <code>-5</code>. Which code correctly throws an appropriate exception?',
    options: [
      '<code>throws new IllegalArgumentException("Seat cannot be negative");</code>',
      '<code>throw IllegalArgumentException("Seat cannot be negative");</code>',
      '<code>throw new IllegalArgumentException("Seat cannot be negative");</code>',
      '<code>throw new Exception.IllegalArgument("Seat cannot be negative");</code>'
    ],
    correctOption: 2,
    explanation: 'The correct syntax is <code>throw new ExceptionType("message")</code>. You must use the <code>throw</code> keyword (not <code>throws</code>), and you must instantiate the exception with <code>new</code>. The message string is passed to the constructor.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A method has the variable <code>balance = 500</code> and <code>amount = 800</code>. What is the value of <code>balance</code> after this code executes?<pre><code>if (amount > balance) {\n' +
      '  throw new IllegalArgumentException("Insufficient funds");\n' +
      '}\n' +
      'balance = balance - amount;</code></pre>',
    options: [
      '-300 — the subtraction executes after the exception.',
      '500 — the exception terminates the method before the subtraction runs.',
      '0 — Java resets balance to zero on exception.',
      '800 — amount is assigned to balance.'
    ],
    correctOption: 1,
    explanation: 'When a <code>throw</code> statement executes, the method <strong>terminates immediately</strong>. All subsequent statements in that method are skipped. Balance stays at 500 because the subtraction line is never reached.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: "A developer detects a problem deep inside a utility method but cannot fix it there. What is the 'throw early, catch late' principle?",
    options: [
      "Delay throwing the exception until the program's final method, then catch it immediately.",
      'Throw the exception as soon as the problem is detected; catch and handle it only where the problem can actually be resolved.',
      'Throw all exceptions from the <code>main</code> method and catch them in utility methods.',
      'Only throw exceptions at the start of each class constructor.'
    ],
    correctOption: 1,
    explanation: "'Throw early, catch late' means detect and signal problems immediately (don't carry on with bad state), but handle them only at the layer of the application that has enough context to recover meaningfully. This keeps error detection and error handling cleanly separated."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'After an exception is thrown inside a <code>try</code> block, what happens to the remaining statements in that block?',
    options: [
      'They execute normally and then control moves to the catch block.',
      'They are skipped — control transfers immediately to the first matching <code>catch</code> block.',
      'They execute in reverse order before the catch block runs.',
      'They are queued and executed after the catch block finishes.'
    ],
    correctOption: 1,
    explanation: 'When an exception is thrown, the <code>try</code> block <strong>terminates immediately</strong>. All remaining statements inside that block are bypassed and control jumps to the first matching <code>catch</code> handler.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: "Which class sits at the very top of Java's exception hierarchy?",
    options: [
      '<code>Exception</code>',
      '<code>RuntimeException</code>',
      '<code>Throwable</code>',
      '<code>Error</code>'
    ],
    correctOption: 2,
    explanation: '<code>Throwable</code> (in <code>java.lang</code>) is the root of the entire hierarchy. Only objects that extend <code>Throwable</code> directly or indirectly can be used with exception handling. Both <code>Exception</code> and <code>Error</code> extend <code>Throwable</code>.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer tries to use a custom class called <code>AppProblem</code> (which extends <code>Object</code>, not <code>Throwable</code>) in a <code>throw</code> statement. What happens?',
    options: [
      'It works because any object can be thrown in Java.',
      'The compiler rejects it — only classes that extend <code>Throwable</code> can be used with exception handling.',
      'It compiles but throws a <code>ClassCastException</code> at runtime.',
      'It works only if <code>AppProblem</code> implements <code>Serializable</code>.'
    ],
    correctOption: 1,
    explanation: 'Java strictly requires that only classes extending <code>Throwable</code> (directly or indirectly) can be thrown or caught. A class that extends only <code>Object</code> cannot participate in exception handling.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer writes a method that opens a network connection. The connection might fail due to server downtime — something the developer cannot prevent. What category does this exception fall into?',
    options: [
      "Unchecked exception — it is the developer's fault for not validating the server.",
      'Error — network failures are irrecoverable.',
      "Checked exception — it represents an external circumstance beyond the programmer's control.",
      'Runtime exception — it only surfaces when the program is running.'
    ],
    correctOption: 2,
    explanation: "Checked exceptions represent external failures outside the programmer's control (disk errors, broken connections). The compiler <em>forces</em> you to handle or declare them. Unchecked exceptions (RuntimeExceptions) indicate <em>programming mistakes</em> you could have prevented."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which of the following is a <strong>checked</strong> exception?',
    options: [
      '<code>NullPointerException</code>',
      '<code>ArrayIndexOutOfBoundsException</code>',
      '<code>IOException</code>',
      '<code>ArithmeticException</code>'
    ],
    correctOption: 2,
    explanation: '<code>IOException</code> directly extends <code>Exception</code> (not <code>RuntimeException</code>), making it a checked exception that the compiler verifies you handle. The other three extend <code>RuntimeException</code> and are unchecked.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which of the following is an <strong>unchecked</strong> exception?',
    options: [
      '<code>FileNotFoundException</code>',
      '<code>SQLException</code>',
      '<code>ClassNotFoundException</code>',
      '<code>IllegalArgumentException</code>'
    ],
    correctOption: 3,
    explanation: '<code>IllegalArgumentException</code> extends <code>RuntimeException</code>, making it unchecked — the compiler does not force you to handle it. The others are checked exceptions that must be caught or declared in a <code>throws</code> clause.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer accesses <code>myArray[index]</code> where <code>index = 999</code> but the array only has 10 elements. What exception is thrown, and which category is it?',
    options: [
      '<code>IndexOutOfBoundsException</code> — checked exception.',
      '<code>ArrayIndexOutOfBoundsException</code> — unchecked (RuntimeException).',
      '<code>ArrayException</code> — Error category.',
      '<code>BoundsException</code> — checked exception.'
    ],
    correctOption: 1,
    explanation: '<code>ArrayIndexOutOfBoundsException</code> extends <code>RuntimeException</code>, so it is <strong>unchecked</strong>. It indicates a programmer error (failing to validate the index). The compiler does not require you to handle it, though you certainly should.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: "A Java program loads an enormous dataset that exhausts the JVM's memory. Which type of throwable is raised?",
    options: [
      '<code>MemoryException</code> — a checked exception.',
      '<code>OutOfMemoryError</code> — an Error, which is generally irrecoverable.',
      '<code>RuntimeException</code> — an unchecked exception the programmer can handle.',
      '<code>ResourceException</code> — a checked exception requiring a throws clause.'
    ],
    correctOption: 1,
    explanation: '<code>OutOfMemoryError</code> is a descendant of <code>Error</code>, not <code>Exception</code>. Errors represent serious JVM-level problems that are generally irrecoverable (also including <code>VirtualMachineError</code>, <code>AssertionError</code>). Programs typically cannot and should not try to catch them.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A program calls <code>Integer.parseInt("hello")</code>. The compiler does not warn you to handle this. Why?',
    options: [
      '<code>NumberFormatException</code> is a checked exception but the compiler ignores it by default.',
      '<code>NumberFormatException</code> extends <code>RuntimeException</code>, making it unchecked — the compiler does not verify its handling.',
      'The compiler cannot detect String-to-integer conversions.',
      '<code>parseInt</code> never throws exceptions; it returns 0 for invalid input.'
    ],
    correctOption: 1,
    explanation: "<code>NumberFormatException</code> is an unchecked (runtime) exception — it signals a programmer error (passing a non-numeric string). The compiler never forces handling of unchecked exceptions. You <em>should</em> validate input, but the compiler won't remind you."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A try block can throw either a <code>FileNotFoundException</code> or a generic <code>IOException</code>. The developer wants a specific message for <code>FileNotFoundException</code> and a generic message for all other <code>IOException</code>s. Which catch order is correct?',
    options: [
      '<code>catch (IOException e)</code> first, then <code>catch (FileNotFoundException e)</code>.',
      '<code>catch (FileNotFoundException e)</code> first, then <code>catch (IOException e)</code>.',
      'Both orders work because Java picks the best match regardless of order.',
      'Both must be combined into one <code>catch</code> using a pipe: <code>catch (IOException | FileNotFoundException e)</code>.'
    ],
    correctOption: 1,
    explanation: 'More specific (subclass) <code>catch</code> blocks must come <strong>before</strong> more general (superclass) ones. If <code>IOException</code> is first, it swallows <code>FileNotFoundException</code> before the specific handler is ever reached. Java also makes it a compile error to place a subclass catch after its superclass.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Two <code>catch</code> blocks in the same <code>try</code> statement both declare <code>catch (NullPointerException e)</code>. What happens?',
    options: [
      'Both execute when a <code>NullPointerException</code> is thrown.',
      'The second block acts as a backup if the first one fails.',
      'It is a <strong>compile-time error</strong> — you cannot catch the exact same type twice in one try statement.',
      'The second block is silently ignored at runtime.'
    ],
    correctOption: 2,
    explanation: 'Java treats catching the same exception type twice in one <code>try</code> as a <strong>compile-time error</strong>. Only the first matching catch block ever executes for a given exception, so a duplicate is unreachable and meaningless.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A catch block catches <code>Exception</code> (the superclass). A <code>NumberFormatException</code> is thrown. Does this catch block handle it?',
    options: [
      'No — <code>catch (Exception e)</code> only catches <code>Exception</code> itself, not subclasses.',
      'Yes — because <code>catch</code> can handle the caught superclass type and all its subclasses polymorphically.',
      'No — <code>NumberFormatException</code> is an <code>Error</code>, not an <code>Exception</code>.',
      'Yes, but only if <code>NumberFormatException</code> is also listed in a <code>throws</code> clause.'
    ],
    correctOption: 1,
    explanation: 'A <code>catch</code> block written for a superclass catches all objects of that class <em>and all its subclasses</em> — this is polymorphic exception handling. <code>NumberFormatException</code> extends <code>RuntimeException</code> which extends <code>Exception</code>, so it is caught.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A try block throws a <code>NoSuchElementException</code>, but no catch block in the current method matches it. What happens next?',
    options: [
      'The program terminates immediately without any further processing.',
      'The exception is silently discarded and the program continues normally.',
      'The exception propagates to the calling method, where a matching catch block may handle it.',
      'Java automatically converts it to an <code>IOException</code> and handles it.'
    ],
    correctOption: 2,
    explanation: "An uncaught exception propagates up the call stack — this is <strong>stack unwinding</strong>. Each caller's try/catch is checked until a matching handler is found. If no handler exists anywhere, the program terminates with a stack trace."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is placed between the <code>try</code> block and its associated <code>catch</code> blocks?',
    options: [
      'Optional helper methods.',
      'Variable declarations that must be shared.',
      'Nothing — it is a compile-time error to place any code between a <code>try</code> block and its catch blocks.',
      'A <code>finally</code> block must always appear between them.'
    ],
    correctOption: 2,
    explanation: 'Code cannot legally appear between a <code>try</code> block and its associated <code>catch</code>/<code>finally</code> blocks — this is a <strong>syntax error</strong>. The catch/finally clauses must immediately follow the closing brace of the try block.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A variable <code>int count</code> is declared inside a <code>try</code> block. Can it be accessed inside the corresponding <code>catch</code> block?',
    options: [
      'Yes — try and catch blocks share the same scope.',
      'Yes — but only if it is declared as <code>static</code>.',
      'No — local variables declared inside a <code>try</code> block go out of scope when the block terminates.',
      'No — only primitive types declared in try blocks are accessible in catch.'
    ],
    correctOption: 2,
    explanation: "When a <code>try</code> block terminates (normally or via exception), all local variables declared inside it go <strong>out of scope</strong>. The corresponding <code>catch</code> block cannot access them. Declare variables before the <code>try</code> if they're needed in both places."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'After a <code>catch</code> block finishes executing, what happens to the exception parameter (e.g., <code>IOException e</code>)?',
    options: [
      'It remains available for the rest of the method.',
      'It is passed to the <code>finally</code> block automatically.',
      'It goes out of scope when the catch block terminates.',
      'It is stored in <code>System.err</code> for later retrieval.'
    ],
    correctOption: 2,
    explanation: "The exception parameter (like <code>IOException e</code>) is a local variable of the catch block. Once the catch block's closing brace is reached, it goes out of scope just like any other local variable."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A database connection is opened at the start of a method. The developer wants to guarantee the connection is closed whether the method succeeds or fails. Where should the close call be placed?',
    options: [
      'At the end of the <code>try</code> block only.',
      'At the end of each <code>catch</code> block.',
      'In a <code>finally</code> block, which always executes regardless of success or failure.',
      'In a separate thread that monitors the connection.'
    ],
    correctOption: 2,
    explanation: "The <code>finally</code> block executes <strong>always</strong> — whether the try block succeeds, an exception is thrown and caught, or even if an exception is thrown that isn't caught. It's the right place for resource cleanup like closing connections."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A <code>try</code> block exits via a <code>return</code> statement. Does the <code>finally</code> block execute?',
    options: [
      'No — a <code>return</code> bypasses the <code>finally</code> block.',
      'Yes — <code>finally</code> executes even when the <code>try</code> exits via <code>return</code>, <code>break</code>, or <code>continue</code>.',
      'Only if the <code>return</code> value is <code>null</code>.',
      'Only if there is no matching <code>catch</code> block.'
    ],
    correctOption: 1,
    explanation: 'The <code>finally</code> block executes even when a <code>try</code> block exits via <code>return</code>, <code>break</code>, or <code>continue</code>. The only exception is <code>System.exit()</code> — calling that bypasses the <code>finally</code> block entirely.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Under which specific condition does a <code>finally</code> block <strong>NOT</strong> execute?',
    options: [
      'When an unchecked exception is thrown in the <code>try</code> block.',
      'When the <code>try</code> block exits normally with no exception.',
      'When <code>System.exit()</code> is called inside the <code>try</code> block.',
      'When a <code>catch</code> block itself throws a new exception.'
    ],
    correctOption: 2,
    explanation: '<code>System.exit()</code> terminates the JVM immediately. Because the JVM shuts down, the <code>finally</code> block is never reached. In all other scenarios — normal exit, caught exceptions, uncaught exceptions, even an exception thrown inside <code>catch</code> — the <code>finally</code> block still runs.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A <code>catch</code> block itself throws a new <code>RuntimeException</code>. Does the <code>finally</code> block still execute?',
    options: [
      'No — a new exception inside <code>catch</code> skips <code>finally</code>.',
      'Yes — <code>finally</code> still executes, then the new exception is passed to the next outer try block.',
      'Yes — but the new exception is silently discarded.',
      'No — the original exception resumes propagating and skips <code>finally</code>.'
    ],
    correctOption: 1,
    explanation: 'Even if a <code>catch</code> block throws a new exception, the <code>finally</code> block still runs. After <code>finally</code> completes, the new exception propagates to the next outer try block. This is a critical guarantee for resource cleanup.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Why is the <code>finally</code> block described as the right place for <strong>resource-release code</strong>?',
    options: [
      'Because <code>finally</code> runs before the <code>try</code> block, giving resources time to be allocated.',
      'Because <code>finally</code> always executes, ensuring resources are released whether an exception occurred or not.',
      'Because the JVM automatically closes all resources in <code>finally</code> without any code.',
      'Because only <code>finally</code> has access to file and network handles.'
    ],
    correctOption: 1,
    explanation: 'Resource leaks (unclosed files, database connections) happen when cleanup code is skipped due to exceptions. Because <code>finally</code> is <em>always</em> executed (barring <code>System.exit()</code>), it guarantees cleanup runs in both the success and failure paths.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer writes:<pre><code>PrintWriter out = new PrintWriter("report.txt");\n' +
      'writeReport(out);\n' +
      'out.close();</code></pre>What is the problem with this approach?',
    options: [
      '<code>PrintWriter</code> cannot write to text files.',
      'If <code>writeReport</code> throws an exception, <code>out.close()</code> is never called, causing a resource leak.',
      '<code>out.close()</code> must be placed inside the <code>writeReport</code> method.',
      'There is no problem — Java closes <code>PrintWriter</code> automatically.'
    ],
    correctOption: 1,
    explanation: 'If <code>writeReport</code> throws an exception before <code>out.close()</code> is reached, the file is left open — a <strong>resource leak</strong>. The solution is to use a try-with-resources statement, which guarantees <code>close()</code> is always called.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which interface must a class implement in order to be used as a resource in a try-with-resources statement?',
    options: [
      '<code>Closeable</code>',
      '<code>Serializable</code>',
      '<code>AutoCloseable</code>',
      '<code>Disposable</code>'
    ],
    correctOption: 2,
    explanation: 'The try-with-resources statement requires the resource class to implement <code>AutoCloseable</code>, which provides the <code>close()</code> method that Java calls automatically at the end of the try block. <code>Closeable</code> extends <code>AutoCloseable</code> and is also valid.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Consider: <pre><code>try (Scanner sc = new Scanner(new File("data.txt"))) {\n' +
      '  process(sc);\n' +
      '}</code></pre>When is <code>sc.close()</code> called?',
    options: [
      'Only when <code>process(sc)</code> completes without exception.',
      'Only when <code>process(sc)</code> throws an exception.',
      'Always — at the end of the try block, whether or not an exception occurred.',
      'Never — the developer must still call <code>sc.close()</code> manually.'
    ],
    correctOption: 2,
    explanation: 'Try-with-resources implicitly calls <code>close()</code> on every declared resource at the end of the try block — both on normal completion and when an exception occurs. This is the key advantage over manually calling <code>close()</code> at the end.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer needs to open both a <code>Scanner</code> and a <code>PrintWriter</code> with automatic resource management. How are multiple resources declared in one try-with-resources?',
    options: [
      'With a comma: <code>try (Scanner sc = ..., PrintWriter pw = ...)</code>',
      'With a semicolon: <code>try (Scanner sc = ...; PrintWriter pw = ...)</code>',
      'With nested try-with-resources statements only.',
      'With a pipe: <code>try (Scanner sc = ... | PrintWriter pw = ...)</code>'
    ],
    correctOption: 1,
    explanation: 'Multiple resources in a try-with-resources are separated by a <strong>semicolon (;)</strong>. They are closed in reverse order of declaration when the try block ends. Commas, pipes, and nesting are not the standard syntax for this.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A method <code>C()</code> calls <code>B()</code> which calls <code>A()</code>. An exception is thrown in <code>A()</code>, which has no catch block. <code>B()</code> also has no catch block. What happens?',
    options: [
      'The exception is discarded when it reaches <code>B()</code>.',
      'The exception propagates back through <code>B()</code> and then <code>C()</code> — this is stack unwinding.',
      '<code>A()</code> retries automatically until it succeeds.',
      'The JVM creates a new thread to handle the exception.'
    ],
    correctOption: 1,
    explanation: "<strong>Stack unwinding</strong> occurs when an exception propagates back through the call chain. Each method that doesn't catch the exception terminates, its local variables go out of scope, and control returns to the caller — all the way up until a matching catch block is found or the program terminates."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer calls <code>exception.printStackTrace()</code>. What information does this output?',
    options: [
      'Only the exception type.',
      "The exception's message string only.",
      'The exception name, message, and the full chain of method calls that led to the exception.',
      'The values of all variables at the point the exception was thrown.'
    ],
    correctOption: 2,
    explanation: '<code>printStackTrace()</code> outputs the exception type, its message, and the <strong>method-call stack</strong> — each method in the chain from the throw point back to main. The topmost line is the throw point; the bottommost started the call chain. This is essential for debugging.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'In a stack trace, which entry indicates the <strong>throw point</strong>?',
    options: [
      'The last (bottommost) entry in the stack trace.',
      'The first (topmost) entry in the stack trace.',
      'The entry labeled <code>main</code>.',
      'The entry with the highest line number.'
    ],
    correctOption: 1,
    explanation: 'In a stack trace, the <strong>topmost</strong> entry is the throw point — where the exception actually originated. The bottommost entry (usually <code>main</code>) is where execution started. Reading top-to-bottom traces the exception back to its source.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: "What happens to a method's local variables when it is unwound from the call stack due to an uncaught exception?",
    options: [
      'They are preserved until the exception is eventually caught.',
      'They are stored in <code>System.err</code> for debugging.',
      'They go out of scope and become eligible for garbage collection if no other references exist.',
      'They are serialized to a crash-dump file automatically.'
    ],
    correctOption: 2,
    explanation: "During stack unwinding, each method's local variables go <strong>out of scope</strong>. If those variables were object references and no other references to those objects exist, the objects become eligible for garbage collection."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A catch block logs the exception but cannot fully handle it. It wants to pass the same exception up the call stack. How is this done?',
    options: [
      '<code>throw new Exception();</code> — always create a fresh exception.',
      '<code>throw e;</code> — rethrow the caught exception reference.',
      '<code>return e;</code> — return the exception to the caller.',
      '<code>propagate(e);</code> — use the built-in propagate method.'
    ],
    correctOption: 1,
    explanation: 'Rethrowing uses <code>throw e;</code> inside a catch block, where <code>e</code> is the caught exception. This passes the <em>same</em> exception object (with its original stack trace) to the next outer try block. Creating a new exception would lose the original trace.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'When should rethrowing an exception be used?',
    options: [
      'When a catch block can fully handle the exception and no further action is needed.',
      'When a catch block can only partially process the exception or cannot process it at all, deferring handling to an outer try block.',
      'Only when the exception is an <code>Error</code> subclass.',
      'When you want to convert a checked exception to an unchecked one.'
    ],
    correctOption: 1,
    explanation: 'Rethrowing is the right tool when a method needs to perform partial cleanup or logging but lacks the context to fully resolve the problem. It defers complete handling to a higher-level method that does have that context.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A low-level database method throws a <code>SQLException</code>. A higher-level service method catches it and throws a new <code>ServiceUnavailableException</code>, but wraps the original. Why is wrapping better than just throwing the new exception alone?',
    options: [
      'Wrapping is never better — always throw a fresh exception.',
      "Wrapping preserves the original exception's stack trace and cause, making debugging much easier.",
      'Wrapping converts the exception to a checked type automatically.',
      "Wrapping suppresses the original exception so end users don't see technical details."
    ],
    correctOption: 1,
    explanation: "<strong>Chained exceptions</strong> preserve the full history. Without wrapping, the original <code>SQLException</code>'s stack trace is lost when the new exception is thrown. Wrapping it allows developers to call <code>getCause()</code> to retrieve the root cause."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'Which <code>Throwable</code> method retrieves the original exception that caused a chained exception?',
    options: [
      '<code>getMessage()</code>',
      '<code>printStackTrace()</code>',
      '<code>getCause()</code>',
      '<code>getOriginal()</code>'
    ],
    correctOption: 2,
    explanation: '<code>getCause()</code> returns the <code>Throwable</code> that caused the current exception — the root cause in a chain. <code>getMessage()</code> returns the message string, and <code>printStackTrace()</code> prints the full trace. There is no <code>getOriginal()</code> method.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A try block might throw either <code>IOException</code> or <code>ParseException</code>, and both should be handled identically. What is the cleanest approach?',
    options: [
      'Write two separate catch blocks with identical bodies.',
      'Catch <code>Exception</code> to handle both at once.',
      'Use multi-catch: <code>catch (IOException | ParseException e)</code>.',
      'Use a <code>finally</code> block to handle both.'
    ],
    correctOption: 2,
    explanation: "<strong>Multi-catch</strong> (<code>catch (TypeA | TypeB e)</code>) lets you handle multiple unrelated exception types with a single block when the response is the same. It's cleaner than duplicating handler code and avoids the overly broad <code>catch (Exception e)</code>."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is the syntax separator between exception types in a multi-catch block?',
    options: [
      'Comma <code>,</code>',
      'Semicolon <code>;</code>',
      'Vertical bar (pipe) <code>|</code>',
      'Ampersand <code>&amp;</code>'
    ],
    correctOption: 2,
    explanation: "Multi-catch uses the vertical bar (pipe) <code>|</code> to separate exception types: <code>catch (IOException | SQLException e)</code>. Any number of <code>Throwable</code> types can be listed this way, as long as they don't have an inheritance relationship."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What happens if a program has only one thread and an exception goes completely uncaught?',
    options: [
      'The JVM creates a new thread to handle it.',
      'The exception is silently swallowed.',
      'The program terminates.',
      'The JVM retries the failing statement up to three times.'
    ],
    correctOption: 2,
    explanation: 'In a single-threaded program, an uncaught exception causes the <strong>program to terminate</strong> with a stack trace. In a multi-threaded program, only the thread in which the uncaught exception occurred is terminated; other threads continue running.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'After an exception is caught and handled in Java, where does execution resume?',
    options: [
      'At the statement immediately after the <code>throw</code> inside the try block (resumption model).',
      'At the first statement after the entire try-catch sequence — after the last catch block (termination model).',
      'Back at the beginning of the try block.',
      'At the line that called the method where the exception was thrown.'
    ],
    correctOption: 1,
    explanation: 'Java uses the <strong>termination model</strong>: after an exception is caught and handled, execution resumes at the first line <em>after</em> the last catch block (or after the finally block if one is present). The try block does not restart — contrasted with the resumption model used by some other languages.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'In the termination model, once a <code>catch</code> block handles an exception, what happens to the other <code>catch</code> blocks in the same try statement?',
    options: [
      'They all execute in order after the first one.',
      'They are checked to see if any of them also match.',
      'They are ignored — only the first matching block executes.',
      'They execute in reverse order as a cleanup mechanism.'
    ],
    correctOption: 2,
    explanation: 'Once a matching <code>catch</code> block executes, the remaining catch blocks in the same try statement are <strong>ignored</strong>. Control moves to the finally block (if present) and then to the code after the try-catch structure.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What does <code>int result = 10 / 0;</code> produce in Java?',
    options: [
      '<code>Infinity</code>',
      '<code>NaN</code>',
      'An <code>ArithmeticException</code> is thrown.',
      'The result is 0 by convention.'
    ],
    correctOption: 2,
    explanation: "Java does not permit integer division by zero. It throws an <code>ArithmeticException</code> with the message <em>'/ by zero'</em>. Floating-point division behaves differently."
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What does <code>double result = 10.0 / 0.0;</code> produce in Java?',
    options: [
      'An <code>ArithmeticException</code> is thrown.',
      '<code>result</code> is assigned <code>Infinity</code>.',
      '<code>result</code> is assigned <code>NaN</code>.',
      'The result is <code>0.0</code> by convention.'
    ],
    correctOption: 1,
    explanation: 'Java allows floating-point division by zero, returning <code>Infinity</code> (or <code>-Infinity</code> for negative numerators). Only integer division by zero throws <code>ArithmeticException</code>. This is consistent with IEEE 754 floating-point standard.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is the result of <code>double result = 0.0 / 0.0;</code> in Java?',
    options: [
      '<code>0.0</code>',
      '<code>Infinity</code>',
      '<code>NaN</code>',
      'An <code>ArithmeticException</code> is thrown.'
    ],
    correctOption: 2,
    explanation: 'Dividing <code>0.0</code> by <code>0.0</code> produces <code>NaN</code> (Not a Number) in Java floating-point arithmetic. This is a special IEEE 754 value displayed as <code>NaN</code>, distinct from <code>Infinity</code>. No exception is thrown.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A developer creates a custom exception for an e-commerce app: <code>OutOfStockException</code>. This should signal a programmer-avoidable error (not checking inventory before ordering). Which class should it extend?',
    options: [
      '<code>Exception</code> — to make it a checked exception.',
      '<code>Error</code> — to signal a fatal JVM problem.',
      '<code>IllegalArgumentException</code> (or another <code>RuntimeException</code>) — to make it unchecked.',
      '<code>Throwable</code> — to place it at the top of the hierarchy.'
    ],
    correctOption: 2,
    explanation: 'If the exception represents a programmer-avoidable mistake (failing to check stock before ordering), it should be an <strong>unchecked</strong> exception extending <code>RuntimeException</code> (e.g., <code>IllegalArgumentException</code>). Checked exceptions are for external, unavoidable problems.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What are the two constructors conventionally provided in a custom exception class?',
    options: [
      'A constructor with an integer error code and one with a stack trace.',
      'A no-argument constructor and a constructor that accepts a <code>String</code> message.',
      'A constructor with a cause and one with a line number.',
      'A static factory method and a private constructor.'
    ],
    correctOption: 1,
    explanation: 'By convention, custom exception classes provide: (1) a <strong>no-argument constructor</strong> for generic usage, and (2) a <strong>String message constructor</strong> that calls <code>super(message)</code> to store a description retrievable via <code>getMessage()</code>.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'A custom exception stores the message <code>"Temperature sensor offline"</code> in its constructor. How does calling code retrieve this message?',
    options: [
      '<code>exception.toString()</code>',
      '<code>exception.getMessage()</code>',
      '<code>exception.getDescription()</code>',
      '<code>exception.getCause()</code>'
    ],
    correctOption: 1,
    explanation: '<code>getMessage()</code> is defined in the <code>Throwable</code> class and returns the message string passed to the exception constructor. <code>getCause()</code> returns the chained original exception; <code>toString()</code> returns type + message combined.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is printed by this code?<pre><code>try {\n' +
      '  System.out.println("A");\n' +
      '  if (true) throw new RuntimeException();\n' +
      '  System.out.println("B");\n' +
      '} catch (RuntimeException e) {\n' +
      '  System.out.println("C");\n' +
      '} finally {\n' +
      '  System.out.println("D");\n' +
      '}\n' +
      'System.out.println("E");</code></pre>',
    options: [ 'A B C D E', 'A C D E', 'A C D', 'A B D E' ],
    correctOption: 1,
    explanation: '<code>A</code> prints, then the exception is thrown — skipping <code>B</code>. The catch block prints <code>C</code>. The finally block always runs: <code>D</code>. After the try-catch-finally, execution continues: <code>E</code>. Result: <strong>A C D E</strong>.'
  },
  {
    quizTitle: 'Java Exception Handling',
    question: 'What is wrong with this code?<pre><code>public void loadConfig(String path) {\n' +
      '  Scanner sc = new Scanner(new File(path));\n' +
      '  parseConfig(sc);\n' +
      '  sc.close();\n' +
      '}</code></pre>',
    options: [
      '<code>Scanner</code> cannot take a <code>File</code> argument.',
      'The method is missing a return type.',
      "If <code>parseConfig</code> throws an exception, <code>sc.close()</code> is never called, causing a resource leak. The method also doesn't declare or handle <code>FileNotFoundException</code>.",
      'There is nothing wrong with this code.'
    ],
    correctOption: 2,
    explanation: 'Two problems: (1) <code>new Scanner(new File(path))</code> can throw <code>FileNotFoundException</code> (checked) — it must be caught or declared. (2) If <code>parseConfig</code> throws, <code>sc.close()</code> is skipped — a resource leak. The fix is try-with-resources plus a <code>throws</code> clause or catch block.'
  }
];