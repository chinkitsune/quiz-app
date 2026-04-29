// ============================================================
//  questions.js  –  Quiz data for Java Collections (CST8284)
//  Week 10 — Drop this file alongside index.html to run the quiz.
//  Swap this file to reuse the quiz shell with different content.
// ============================================================

const QUIZ_META = {
  title: "Java Collections",
  subtitle: "CST8284 · Week 10 · Practice Exam",
  description:
    "57 scenario-based questions testing true understanding of the Java Collections Framework — List, Set, Map, Queue, iterators, sorting, and choosing the right collection.",
};

const questions = [

  // ── SECTION 1: Collections Framework Overview ─────────────────────────────

  {
    id: 1,
    topic: "Collections Framework Overview",
    question:
      "A developer needs to store a group of employee objects and perform searching, sorting, insertion, and deletion on them. Which Java feature is purpose-built for this?",
    options: [
      "A plain Java array — arrays support all those operations natively.",
      "The Java Collections Framework — an architecture of interfaces and classes for storing and manipulating groups of objects.",
      "The <code>java.io</code> package — it handles all data manipulation.",
      "The <code>Comparable</code> interface alone is sufficient.",
    ],
    correct: 1,
    explanation:
      "The Java Collections Framework provides a hierarchy of interfaces and concrete classes specifically designed to store and manipulate groups of objects, including searching, sorting, insertion, and deletion. Plain arrays lack this built-in functionality and require manual implementation.",
  },
  {
    id: 2,
    topic: "Collections Framework Overview",
    question:
      "Which interface sits at the root of the Java Collections hierarchy, meaning every collection class implements it?",
    options: [
      "<code>List</code>",
      "<code>Iterable</code>",
      "<code>Collection</code>",
      "<code>Comparable</code>",
    ],
    correct: 2,
    explanation:
      "The <code>Collection</code> interface is the root of the hierarchy. Every collection class (<code>ArrayList</code>, <code>LinkedList</code>, <code>HashSet</code>, etc.) implements it, giving them all a common set of methods like <code>add()</code>, <code>remove()</code>, <code>size()</code>, and <code>contains()</code>.",
  },
  {
    id: 3,
    topic: "Collections Framework Overview",
    question:
      "A developer calls <code>Collections.sort()</code> on both an <code>ArrayList</code> and a <code>LinkedList</code> using the same method call. This works because the algorithms in the Collections Framework are described as:",
    options: [
      "Synchronized — they lock the collection during sorting.",
      "Polymorphic — the same method works on many different implementations of the appropriate collection interface.",
      "Generic — they use type parameters to avoid casting.",
      "Static — they are defined as static methods in the collection classes.",
    ],
    correct: 1,
    explanation:
      "Collections Framework algorithms are <strong>polymorphic</strong> — a single method like <code>Collections.sort()</code> works on any <code>List</code> implementation because it operates on the interface, not the concrete class. This is a key advantage of programming to interfaces.",
  },
  {
    id: 4,
    topic: "Collections Framework Overview",
    question:
      "A junior developer asks why they should use <code>ArrayList</code> instead of coding their own dynamic array from scratch. Which advantage of the Collections Framework best answers this?",
    options: [
      "The Collections Framework prevents runtime exceptions automatically.",
      "It reduces programming effort — the programmer uses the collection rather than designing it, focusing effort on how best to use it.",
      "The Collections Framework works faster than any custom implementation.",
      "Custom data structures are illegal in Java.",
    ],
    correct: 1,
    explanation:
      "A key advantage of the Collections Framework is <strong>reduced programming effort</strong>: it supports abstraction, so developers focus on using collections effectively rather than reimplementing well-known data structures. The framework also provides high-performance, battle-tested implementations.",
  },

  // ── SECTION 2: Diamond Syntax ─────────────────────────────────────────────

  {
    id: 5,
    topic: "Diamond Syntax",
    question:
      "What does the <code>&lt;&gt;</code> in <code>ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();</code> on the right side mean, and what is this feature called?",
    options: [
      "It means the list is empty; it is called the 'empty initializer'.",
      "It is called the diamond syntax — the compiler infers the type parameter from the left-hand side, avoiding repetition.",
      "It creates an untyped (raw) list; it is called the 'wildcard syntax'.",
      "It means the type is determined at runtime; it is called 'type inference casting'.",
    ],
    correct: 1,
    explanation:
      "The <strong>diamond syntax</strong> <code>&lt;&gt;</code> lets the compiler infer the generic type parameter from the variable declaration on the left side. Instead of writing <code>new ArrayList&lt;String&gt;()</code>, you write <code>new ArrayList&lt;&gt;()</code> — cleaner with no loss of type safety.",
  },
  {
    id: 6,
    topic: "Diamond Syntax",
    question:
      "Which of the following correctly uses diamond syntax to create a <code>HashMap</code> mapping <code>String</code> keys to <code>Integer</code> values?",
    options: [
      "<code>HashMap map = new HashMap&lt;String, Integer&gt;();</code>",
      "<code>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</code>",
      "<code>Map map = new HashMap&lt;&gt;();</code>",
      "<code>HashMap&lt;&gt; map = new HashMap&lt;String, Integer&gt;();</code>",
    ],
    correct: 1,
    explanation:
      "Diamond syntax works when the type can be inferred from the left-hand side. <code>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</code> is correct — the type parameters are declared once on the left, and the compiler infers them for the <code>new</code> expression on the right.",
  },

  // ── SECTION 3: List Interface & ArrayList vs LinkedList ───────────────────

  {
    id: 7,
    topic: "List Interface",
    question:
      "A music streaming app maintains a playlist where song order matters and users can jump to any song by position instantly. Which <code>List</code> implementation is most appropriate?",
    options: [
      "<code>LinkedList</code> — it supports random access efficiently.",
      "<code>ArrayList</code> — it provides efficient random access by index.",
      "<code>HashSet</code> — it stores songs without duplicates.",
      "<code>TreeSet</code> — it keeps songs in alphabetical order automatically.",
    ],
    correct: 1,
    explanation:
      "<code>ArrayList</code> supports efficient <strong>random access by index</strong> (O(1)), making it ideal when you frequently access elements by position. <code>LinkedList</code> is slow for random access (O(n)) because it must traverse nodes from the head to reach an element.",
  },
  {
    id: 8,
    topic: "List Interface",
    question:
      "A text editor maintains a document as a sequence of lines. Users frequently insert and delete lines in the middle of the document. Which collection is most appropriate?",
    options: [
      "<code>ArrayList</code> — it is always the fastest List implementation.",
      "<code>HashSet</code> — sets handle insertions efficiently.",
      "<code>LinkedList</code> — inserting and removing elements in the middle of a linked list is efficient.",
      "<code>TreeMap</code> — it keeps lines in sorted order.",
    ],
    correct: 2,
    explanation:
      "<code>LinkedList</code> is efficient for mid-sequence insertions and deletions — only the neighboring node references need updating, not a whole array shift. <code>ArrayList</code> requires shifting all subsequent elements for mid-array changes, which is O(n).",
  },
  {
    id: 9,
    topic: "List Interface",
    question:
      "Both <code>ArrayList</code> and <code>LinkedList</code> implement <code>List</code>. What does the <code>List</code> interface guarantee about the elements it stores?",
    options: [
      "Elements are unique — no duplicates allowed.",
      "Elements are stored in sorted order automatically.",
      "The insertion order of elements is remembered.",
      "Elements can only be of type <code>String</code> or <code>Integer</code>.",
    ],
    correct: 2,
    explanation:
      "The <code>List</code> interface guarantees that a collection <strong>remembers the order</strong> of its elements. You can access elements by index, and iteration always visits them in insertion order. This distinguishes <code>List</code> from <code>Set</code>, which does not guarantee order.",
  },

  // ── SECTION 4: LinkedList & Nodes ─────────────────────────────────────────

  {
    id: 10,
    topic: "LinkedList Internals",
    question:
      "What is a node in a <code>LinkedList</code>, and what does each node contain?",
    options: [
      "A node is an index marker; it contains the element's position number.",
      "A node is an object that stores an element and references to its neighboring nodes.",
      "A node is a backup copy of the element stored in RAM.",
      "A node is a wrapper class that converts primitives to objects.",
    ],
    correct: 1,
    explanation:
      "Each node in a <code>LinkedList</code> is an object holding: (1) the data element itself, and (2) references to neighboring nodes (next, and for a doubly-linked list, previous). These references form the chain that makes traversal and insertion efficient.",
  },
  {
    id: 11,
    topic: "LinkedList Internals",
    question:
      "Java's <code>LinkedList</code> is described as a <em>doubly-linked list</em>. What does this mean?",
    options: [
      "Each node stores two copies of the element for redundancy.",
      "Each node holds a reference to both the next <em>and</em> the previous node.",
      "Two separate linked lists are maintained internally for performance.",
      "The list doubles in capacity each time it grows.",
    ],
    correct: 1,
    explanation:
      "A doubly-linked list stores <strong>two links per node</strong>: one pointing to the next node and one to the previous. This enables efficient backward traversal (using <code>hasPrevious()</code>/<code>previous()</code>), which a singly-linked list cannot do efficiently.",
  },
  {
    id: 12,
    topic: "LinkedList Internals",
    question:
      "When inserting a new node into the <em>middle</em> of a <code>LinkedList</code>, how many node references need to be updated?",
    options: [
      "All references in the entire list must be updated.",
      "Only the neighboring nodes' references need to be updated — making it O(1) once the position is found.",
      "The node at index 0 must always be updated.",
      "No references need updating — nodes are placed by memory address.",
    ],
    correct: 1,
    explanation:
      "Inserting into the middle of a linked list only requires updating the references of the immediate neighboring nodes — the predecessor now points to the new node, and the new node points to the successor. This is O(1) once the iterator is at the right position, unlike an array which must shift all subsequent elements.",
  },
  {
    id: 13,
    topic: "LinkedList Internals",
    question:
      "A developer needs to retrieve the element at index 499 from a <code>LinkedList</code> of 1000 elements. What is the performance characteristic?",
    options: [
      "O(1) — <code>LinkedList</code> supports direct index lookup like an array.",
      "O(log n) — <code>LinkedList</code> uses binary search internally.",
      "O(n) — the list must be traversed node by node from the head to reach index 499.",
      "O(1) — the list stores a direct reference to every node's position.",
    ],
    correct: 2,
    explanation:
      "<code>LinkedList</code> does <strong>not</strong> support efficient random access. To reach index 499, it must follow node references one-by-one from the head — O(n). This is why random-access operations on <code>LinkedList</code> are inefficient compared to <code>ArrayList</code>.",
  },

  // ── SECTION 5: ListIterator ───────────────────────────────────────────────

  {
    id: 14,
    topic: "ListIterator",
    question:
      "What is the conceptual mental model for where a <code>ListIterator</code> position sits?",
    options: [
      "It points directly at the current element, like an array index.",
      "It points between two elements — like a cursor in a word processor between two characters.",
      "It points to the last element that was removed.",
      "It points to the head of the list at all times.",
    ],
    correct: 1,
    explanation:
      "A <code>ListIterator</code> is conceptually a <strong>cursor between elements</strong>. Initially it sits before the first element. Calling <code>next()</code> moves it past the next element and returns that element. This 'between' model explains why <code>add()</code> inserts after the current position.",
  },
  {
    id: 15,
    topic: "ListIterator",
    question:
      "A <code>ListIterator</code> is freshly created for a list of 5 elements. Where does it start, and what does the first call to <code>next()</code> return?",
    options: [
      "It starts after the last element; <code>next()</code> throws <code>NoSuchElementException</code>.",
      "It starts before the first element; <code>next()</code> returns and moves past the first element.",
      "It starts at index 0; <code>next()</code> returns the element at index 1.",
      "It starts at the middle element; <code>next()</code> returns the second half.",
    ],
    correct: 1,
    explanation:
      "A new <code>ListIterator</code> positions itself <strong>before the first element</strong>. The first call to <code>next()</code> moves the iterator past element 0 and returns it. Always guard with <code>hasNext()</code> before calling <code>next()</code> to avoid <code>NoSuchElementException</code>.",
  },
  {
    id: 16,
    topic: "ListIterator",
    question:
      "A developer calls <code>iterator.add(\"Zara\")</code> on a <code>ListIterator</code>. Where is <code>\"Zara\"</code> inserted, and where does the iterator end up?",
    options: [
      "<code>\"Zara\"</code> is inserted before the current position; the iterator moves back.",
      "<code>\"Zara\"</code> is inserted after the current iterator position; the iterator moves past the new element.",
      "<code>\"Zara\"</code> is always inserted at index 0.",
      "<code>\"Zara\"</code> is appended to the end of the list regardless of iterator position.",
    ],
    correct: 1,
    explanation:
      "The <code>ListIterator.add()</code> method inserts the element <strong>after</strong> the current iterator position, then advances the iterator past the newly inserted element. This means a subsequent call to <code>previous()</code> would return the newly added element.",
  },
  {
    id: 17,
    topic: "ListIterator",
    question:
      "What is the rule for calling <code>iterator.remove()</code> on a <code>ListIterator</code>?",
    options: [
      "It can be called at any time to remove the element at the current position.",
      "It removes the element returned by the most recent call to <code>next()</code> or <code>previous()</code>, and can only be called once per <code>next()</code>/<code>previous()</code> call.",
      "It can only be called at the end of the iteration loop.",
      "It removes all remaining elements from the current position to the end.",
    ],
    correct: 1,
    explanation:
      "<code>remove()</code> removes the element that was returned by the last <code>next()</code> or <code>previous()</code> call. It can only be called <strong>once</strong> after each navigation call — calling it again, or calling it after <code>add()</code>, throws <code>IllegalStateException</code>.",
  },
  {
    id: 18,
    topic: "ListIterator",
    question:
      "A developer wants to remove all strings shorter than 3 characters from a <code>LinkedList</code>. Which approach is safe?",
    options: [
      "Use a for-each loop and call <code>list.remove(element)</code> inside it.",
      "Use a <code>ListIterator</code>, call <code>next()</code> to get each element, check its length, and call <code>iterator.remove()</code> if it is too short.",
      "Create a copy of the list and remove elements from the original.",
      "Use <code>Collections.removeIf()</code> — iterators cannot remove elements.",
    ],
    correct: 1,
    explanation:
      "Removing elements inside a for-each loop with <code>list.remove()</code> causes <code>ConcurrentModificationException</code>. The correct pattern is to use an iterator: call <code>next()</code> to get the element, check the condition, and call <code>iterator.remove()</code> if needed.",
  },
  {
    id: 19,
    topic: "ListIterator",
    question:
      "What exception is thrown if <code>iterator.remove()</code> is called immediately after <code>iterator.add()</code> without an intervening <code>next()</code> call?",
    options: [
      "<code>NoSuchElementException</code>",
      "<code>ConcurrentModificationException</code>",
      "<code>IllegalStateException</code>",
      "<code>IndexOutOfBoundsException</code>",
    ],
    correct: 2,
    explanation:
      "Calling <code>remove()</code> when there is no 'last returned element' (because the last iterator operation was <code>add()</code>, or <code>remove()</code> was already called) throws <code>IllegalStateException</code>. The iterator must be in a valid state — after a successful <code>next()</code> or <code>previous()</code> — before <code>remove()</code> can be called.",
  },
  {
    id: 20,
    topic: "ListIterator",
    question:
      "How does <code>ListIterator</code> differ from the basic <code>Iterator</code> interface?",
    options: [
      "<code>ListIterator</code> is slower but works with all collection types.",
      "<code>ListIterator</code> extends <code>Iterator</code> and adds backward traversal (<code>hasPrevious</code>, <code>previous</code>) and <code>add</code> capability.",
      "<code>Iterator</code> supports backward traversal; <code>ListIterator</code> only goes forward.",
      "They are identical — <code>ListIterator</code> is just a renamed <code>Iterator</code>.",
    ],
    correct: 1,
    explanation:
      "<code>ListIterator</code> <strong>extends</strong> <code>Iterator</code> and adds methods for backward traversal (<code>hasPrevious()</code>, <code>previous()</code>) and element insertion (<code>add()</code>). The basic <code>Iterator</code> only goes forward and supports <code>remove()</code>.",
  },

  // ── SECTION 6: Sets — HashSet vs TreeSet ──────────────────────────────────

  {
    id: 21,
    topic: "Sets",
    question:
      "A developer builds a system to track which usernames are already taken. Duplicate usernames must be impossible, and lookup speed is the top priority. Which collection is best?",
    options: [
      "<code>ArrayList</code> — it allows fast index-based lookup.",
      "<code>LinkedList</code> — it is efficient for frequent insertions.",
      "<code>HashSet</code> — it rejects duplicates and provides efficient lookup via hash tables.",
      "<code>TreeSet</code> — it keeps names in alphabetical order, making searching fast.",
    ],
    correct: 2,
    explanation:
      "A <code>HashSet</code> automatically rejects duplicates and provides O(1) average-case <code>contains()</code> — ideal for a 'taken username' check. If sorted order were also needed, <code>TreeSet</code> would be the choice, but for raw lookup speed, <code>HashSet</code> wins.",
  },
  {
    id: 22,
    topic: "Sets",
    question:
      "A developer calls <code>names.add(\"Alice\")</code> twice on a <code>HashSet</code>. What happens?",
    options: [
      "Two copies of <code>\"Alice\"</code> are stored.",
      "The second call throws a <code>DuplicateElementException</code>.",
      "The second call is silently ignored — sets do not admit duplicates.",
      "The second call replaces the first, but the count stays at 1.",
    ],
    correct: 2,
    explanation:
      "Sets do not allow duplicates. Adding an element that already exists is <strong>silently ignored</strong> — no exception is thrown and no duplicate is stored. The set size remains unchanged. This behavior is fundamental to the <code>Set</code> contract.",
  },
  {
    id: 23,
    topic: "Sets",
    question:
      "A developer needs to iterate over a set of city names and always see them in alphabetical order. Which implementation should be used?",
    options: [
      "<code>HashSet</code> — it is faster and also keeps elements sorted.",
      "<code>TreeSet</code> — it keeps elements in sorted order using a binary search tree.",
      "<code>LinkedHashSet</code> — it is the only set that sorts elements.",
      "<code>ArrayList</code> with manual sorting each time.",
    ],
    correct: 1,
    explanation:
      "<code>TreeSet</code> stores elements in a <strong>sorted binary search tree</strong>, so iteration always produces elements in their natural sorted order (or a custom comparator's order). <code>HashSet</code> provides no order guarantee and is not sorted.",
  },
  {
    id: 24,
    topic: "Sets",
    question:
      "What interface must a class implement to be stored in a <code>TreeSet</code> without a custom comparator?",
    options: [
      "<code>Iterable</code>",
      "<code>Serializable</code>",
      "<code>Comparable</code>",
      "<code>Cloneable</code>",
    ],
    correct: 2,
    explanation:
      "<code>TreeSet</code> needs to sort its elements, so it requires them to implement <code>Comparable</code> (providing a <code>compareTo()</code> method). Classes like <code>String</code> and <code>Integer</code> already implement <code>Comparable</code>. <code>HashSet</code> only needs <code>hashCode()</code> and <code>equals()</code>.",
  },
  {
    id: 25,
    topic: "Sets",
    question:
      "What two methods must be correctly implemented on a class for it to work properly in a <code>HashSet</code>?",
    options: [
      "<code>toString()</code> and <code>compareTo()</code>",
      "<code>hashCode()</code> and <code>equals()</code>",
      "<code>compareTo()</code> and <code>clone()</code>",
      "<code>hashCode()</code> and <code>toString()</code>",
    ],
    correct: 1,
    explanation:
      "Hash-based collections group elements by their <code>hashCode()</code>. When a potential duplicate is found in the same bucket, <code>equals()</code> is used to confirm identity. If these two methods are inconsistent, the set may contain duplicates or fail to find elements that are logically equal.",
  },
  {
    id: 26,
    topic: "Sets",
    question:
      "A developer stores a reference in <code>Set&lt;String&gt; names = new TreeSet&lt;&gt;();</code>. Later, the developer decides to switch to <code>HashSet</code> for better performance. What code change is needed?",
    options: [
      "Every method call on <code>names</code> must be updated because the interface is different.",
      "Only the constructor needs to change to <code>new HashSet&lt;&gt;()</code> — the rest of the code uses the <code>Set</code> interface and remains unchanged.",
      "The variable type must also change to <code>HashSet&lt;String&gt;</code>.",
      "Nothing can be changed — <code>TreeSet</code> and <code>HashSet</code> are incompatible.",
    ],
    correct: 1,
    explanation:
      "By declaring the variable as <code>Set&lt;String&gt;</code> (the interface), all code that uses <code>names</code> works with any <code>Set</code> implementation. Only the <code>new TreeSet&lt;&gt;()</code> constructor call needs to change to <code>new HashSet&lt;&gt;()</code> — the interface stays the same.",
  },
  {
    id: 27,
    topic: "Sets",
    question:
      "Can you call <code>iterator.add()</code> on a <code>Set</code> iterator? Why or why not?",
    options: [
      "Yes — all iterators support <code>add()</code>.",
      "No — the basic <code>Iterator</code> interface returned by sets has no <code>add()</code> method, and sets are unordered so a positional insert makes no sense.",
      "Yes — but only for <code>TreeSet</code>, since it maintains a sorted order.",
      "No — iterators are read-only and cannot modify collections.",
    ],
    correct: 1,
    explanation:
      "Sets return a plain <code>Iterator</code> (not a <code>ListIterator</code>), which has no <code>add()</code> method. Furthermore, sets are <strong>unordered</strong> — adding at an 'iterator position' is conceptually meaningless. You can, however, call <code>iterator.remove()</code> to remove the last visited element.",
  },

  // ── SECTION 7: Maps ───────────────────────────────────────────────────────

  {
    id: 28,
    topic: "Maps",
    question:
      "A student registry system needs to look up a student's GPA by their student ID number. Which collection type is best suited?",
    options: [
      "<code>ArrayList&lt;Double&gt;</code> — index the student ID directly.",
      "<code>HashSet&lt;Student&gt;</code> — sets find elements efficiently.",
      "<code>Map&lt;Integer, Double&gt;</code> — maps associate each key (student ID) with a value (GPA).",
      "<code>LinkedList&lt;Student&gt;</code> — iterate until the ID matches.",
    ],
    correct: 2,
    explanation:
      "A <code>Map</code> stores key-value associations, making it ideal for lookup by key. <code>Map&lt;Integer, Double&gt;</code> maps student IDs (keys) to GPAs (values) and retrieves any GPA in O(1) average time with <code>get(id)</code>. Iterating a list or set would be O(n).",
  },
  {
    id: 29,
    topic: "Maps",
    question:
      "A <code>Map&lt;String, String&gt; capitals</code> has <code>\"France\"</code> mapped to <code>\"Paris\"</code>. A developer then calls <code>capitals.put(\"France\", \"Lyon\")</code>. What happens?",
    options: [
      "A <code>DuplicateKeyException</code> is thrown — keys must be unique.",
      "Both <code>\"Paris\"</code> and <code>\"Lyon\"</code> are stored for <code>\"France\"</code>.",
      "The existing association is replaced — <code>\"France\"</code> now maps to <code>\"Lyon\"</code>.",
      "Nothing changes — <code>put</code> only inserts new keys.",
    ],
    correct: 2,
    explanation:
      "Calling <code>put(key, value)</code> when the key already exists <strong>replaces</strong> the old value with the new one. Maps do not store duplicate keys. After the call, <code>capitals.get(\"France\")</code> returns <code>\"Lyon\"</code>.",
  },
  {
    id: 30,
    topic: "Maps",
    question:
      "A developer calls <code>map.get(\"banana\")</code> on a <code>Map&lt;String, Integer&gt;</code> where <code>\"banana\"</code> is not a key. What is returned?",
    options: [
      "0 — the default integer value.",
      "An empty string.",
      "<code>null</code> — <code>get()</code> returns null for missing keys.",
      "A <code>KeyNotFoundException</code> is thrown.",
    ],
    correct: 2,
    explanation:
      "If you request a key that does not exist in the map, <code>get()</code> returns <code>null</code>. No exception is thrown. Always check for <code>null</code> (or use <code>containsKey()</code> first) before using the return value to avoid <code>NullPointerException</code>.",
  },
  {
    id: 31,
    topic: "Maps",
    question:
      "A developer wants to iterate over all key-value pairs in a <code>Map&lt;String, Integer&gt; scores</code>. Which approach is correct?",
    options: [
      "<code>for (String key : scores) { ... }</code>",
      "<code>for (String key : scores.keySet()) { int val = scores.get(key); }</code>",
      "<code>for (int val : scores.values()) { String key = scores.getKey(val); }</code>",
      "<code>scores.forEach((k, v) -&gt; System.out.println(k));</code> — this is the only valid way.",
    ],
    correct: 1,
    explanation:
      "<code>keySet()</code> returns a <code>Set</code> of all keys. Iterating over it and calling <code>get(key)</code> for each key is the standard way to visit all key-value pairs. You cannot iterate a map directly in a for-each loop — you need <code>keySet()</code>, <code>values()</code>, or <code>entrySet()</code>.",
  },
  {
    id: 32,
    topic: "Maps",
    question:
      "Why does <code>map.keySet()</code> return a <code>Set</code> rather than a <code>List</code>?",
    options: [
      "Because <code>Set</code> is faster to iterate than <code>List</code>.",
      "Because map keys are unique (no duplicates) and order does not matter — both are properties of a <code>Set</code>.",
      "Because <code>List</code> does not support the <code>contains()</code> method needed for key lookup.",
      "Because the Java designers made an arbitrary choice.",
    ],
    correct: 1,
    explanation:
      "Map keys must be <strong>unique</strong> (no duplicates) and have no guaranteed insertion order — these are the defining properties of a <code>Set</code>. A <code>List</code> would allow duplicates and imply order, neither of which applies to map keys.",
  },
  {
    id: 33,
    topic: "Maps",
    question:
      "Why is the collection of <em>values</em> in a map not a <code>Set</code>?",
    options: [
      "Because values are always primitive types and cannot form a <code>Set</code>.",
      "Because values are returned in sorted order, which is a <code>List</code> property.",
      "Because map values can contain duplicates — multiple keys can map to the same value.",
      "Because the <code>Map</code> interface does not define a <code>values()</code> method.",
    ],
    correct: 2,
    explanation:
      "Multiple keys can map to the same value (e.g., two students with the same GPA). Since <code>Set</code> prohibits duplicates, values are returned as a <code>Collection</code>, not a <code>Set</code>. The <code>values()</code> method returns a <code>Collection&lt;V&gt;</code>.",
  },
  {
    id: 34,
    topic: "Maps",
    question:
      "A developer needs to count how many times each word appears in a document. Which map declaration is most appropriate?",
    options: [
      "<code>Map&lt;Integer, String&gt; wordFrequency;</code>",
      "<code>Map&lt;String, Integer&gt; wordFrequency;</code>",
      "<code>Map&lt;String, String&gt; wordFrequency;</code>",
      "<code>Set&lt;String&gt; wordFrequency;</code>",
    ],
    correct: 1,
    explanation:
      "<code>Map&lt;String, Integer&gt;</code> maps each word (key) to its count (value). This is the classic word-frequency map pattern. <code>Map&lt;Integer, String&gt;</code> has the types backwards, and a <code>Set</code> cannot store counts at all.",
  },
  {
    id: 35,
    topic: "Maps",
    question:
      "Two implementations of the <code>Map</code> interface are covered in this course. What are they, and how do they differ?",
    options: [
      "<code>ArrayList</code> and <code>LinkedList</code> — one is array-based, the other is node-based.",
      "<code>HashMap</code> (hash table — faster, unordered) and <code>TreeMap</code> (binary search tree — keys kept in sorted order).",
      "<code>HashSet</code> and <code>TreeSet</code> — both store keys in sorted groups.",
      "<code>HashMap</code> and <code>HashSet</code> — one uses keys, the other does not.",
    ],
    correct: 1,
    explanation:
      "<code>HashMap</code> uses a hash table for O(1) average key lookup with no guaranteed order. <code>TreeMap</code> uses a binary search tree for O(log n) lookup but keeps keys in sorted order. Choose <code>HashMap</code> for speed; choose <code>TreeMap</code> when sorted key iteration is needed.",
  },

  // ── SECTION 8: Stack & Queue ───────────────────────────────────────────────

  {
    id: 36,
    topic: "Stack",
    question:
      "A developer implements a browser's 'Back' button history using a Java collection. Visiting a new page pushes it on, and pressing Back pops the top. Which collection models this correctly?",
    options: [
      "A <code>Queue</code> — FIFO order ensures the oldest page is shown first.",
      "A <code>Stack</code> — LIFO order means the most recently visited page is popped first.",
      "A <code>HashSet</code> — fast lookup finds the previous page quickly.",
      "A <code>TreeMap</code> — pages are sorted by visit time.",
    ],
    correct: 1,
    explanation:
      "A <strong>stack</strong> uses Last-In, First-Out (LIFO) — only the top element can be accessed. This perfectly models browser history: the most recently visited page is on top and is the first to be returned on pressing Back.",
  },
  {
    id: 37,
    topic: "Queue",
    question:
      "A hospital emergency room uses a system where patients who arrive first are seen first (barring critical emergencies). Which collection models standard waiting-room behavior?",
    options: [
      "<code>Stack</code> — the most recently arrived patient is treated first.",
      "<code>Queue</code> — FIFO: patients are added at the tail and removed from the head in arrival order.",
      "<code>PriorityQueue</code> — all patients are sorted by severity automatically.",
      "<code>TreeSet</code> — patients are kept in alphabetical name order.",
    ],
    correct: 1,
    explanation:
      "A standard <strong>queue</strong> enforces FIFO (First-In, First-Out): elements are added at the tail and removed from the head. This models a waiting line where the first patient to arrive is the first to be seen.",
  },
  {
    id: 38,
    topic: "Queue",
    question:
      "Given: <pre><code>Queue&lt;String&gt; q = new LinkedList&lt;&gt;();\nq.add(\"X\"); q.add(\"Y\"); q.add(\"Z\");\nSystem.out.println(q.remove());\nSystem.out.println(q.peek());</code></pre>What is the output?",
    options: [
      "<code>Z</code> then <code>Y</code>",
      "<code>X</code> then <code>Y</code>",
      "<code>X</code> then <code>X</code>",
      "<code>Y</code> then <code>Y</code>",
    ],
    correct: 1,
    explanation:
      "<code>remove()</code> removes and returns the head — <code>\"X\"</code> (first added). After removal, the head is <code>\"Y\"</code>. <code>peek()</code> returns the head <strong>without</strong> removing it — <code>\"Y\"</code>. Output: <code>X</code> then <code>Y</code>.",
  },
  {
    id: 39,
    topic: "Queue",
    question:
      "Why is it better to declare a queue as <code>Queue&lt;String&gt; q = new LinkedList&lt;&gt;();</code> rather than <code>LinkedList&lt;String&gt; q = new LinkedList&lt;&gt;();</code>?",
    options: [
      "<code>LinkedList</code> cannot actually implement <code>Queue</code>.",
      "Declaring as <code>Queue</code> restricts the variable to only queue operations, preventing accidental use of list-specific methods that would break queue semantics.",
      "The <code>Queue</code> type is faster than <code>LinkedList</code> at runtime.",
      "There is no difference — both declarations behave identically.",
    ],
    correct: 1,
    explanation:
      "Programming to the interface (<code>Queue</code>) restricts what operations can be called through the variable. This prevents accidentally calling <code>get(index)</code> or mid-list insertions that would violate queue discipline. If you later need a different <code>Queue</code> implementation, only the constructor changes.",
  },
  {
    id: 40,
    topic: "Queue",
    question:
      "What does the <code>peek()</code> method on a <code>Queue</code> do, and how does it differ from <code>remove()</code>?",
    options: [
      "<code>peek()</code> removes the head; <code>remove()</code> looks without removing.",
      "<code>peek()</code> returns the head element <em>without</em> removing it; <code>remove()</code> returns and removes the head.",
      "<code>peek()</code> returns the tail element; <code>remove()</code> returns the head.",
      "Both return the head element and both remove it.",
    ],
    correct: 1,
    explanation:
      "<code>peek()</code> inspects the front of the queue without modifying it — useful when you need to check the next item without consuming it. <code>remove()</code> both retrieves and deletes the head element. If the queue is empty, <code>peek()</code> returns <code>null</code>; <code>remove()</code> throws an exception.",
  },

  // ── SECTION 9: Priority Queue ─────────────────────────────────────────────

  {
    id: 41,
    topic: "Priority Queue",
    question:
      "A support ticket system assigns each ticket a priority number (1 = most urgent). Tickets should always be resolved in urgency order, not arrival order. Which collection is appropriate?",
    options: [
      "<code>Queue&lt;Ticket&gt;</code> — FIFO ensures fair processing.",
      "<code>Stack&lt;Ticket&gt;</code> — most recently submitted tickets are handled first.",
      "<code>PriorityQueue&lt;Ticket&gt;</code> — removes the element with the lowest priority number (highest urgency) first.",
      "<code>TreeSet&lt;Ticket&gt;</code> — tickets are kept sorted automatically.",
    ],
    correct: 2,
    explanation:
      "A <code>PriorityQueue</code> always removes the element with the <strong>smallest value</strong> (priority 1 = most urgent) first, ignoring insertion order. It does not use FIFO discipline. The element type must implement <code>Comparable</code> (or a <code>Comparator</code> must be provided).",
  },
  {
    id: 42,
    topic: "Priority Queue",
    question:
      "Three items are added to a <code>PriorityQueue</code> with priorities 3, 1, and 2. In what order are they removed?",
    options: [
      "3, 1, 2 — the insertion order is preserved.",
      "1, 2, 3 — the lowest priority number (most urgent) is removed first.",
      "2, 1, 3 — the middle element is removed first.",
      "3, 2, 1 — the highest priority number is removed first.",
    ],
    correct: 1,
    explanation:
      "A <code>PriorityQueue</code> always extracts the <strong>minimum element</strong> (lowest number = highest priority). Regardless of insertion order, priority 1 is removed first, then 2, then 3. This is why it does not follow FIFO.",
  },
  {
    id: 43,
    topic: "Priority Queue",
    question:
      "A developer uses a <code>PriorityQueue&lt;String&gt;</code> and adds the strings <code>\"3-Task C\"</code>, <code>\"1-Task A\"</code>, <code>\"10-Task D\"</code>, <code>\"2-Task B\"</code>. What is a problem with this approach for priorities above 9?",
    options: [
      "<code>PriorityQueue</code> cannot store strings — it only stores numbers.",
      "Lexicographic ordering means <code>\"10-Task D\"</code> sorts before <code>\"2-Task B\"</code>, breaking the intended numeric priority order.",
      "Strings in a priority queue are always sorted alphabetically, ignoring the leading number.",
      "There is no problem — strings are compared numerically by Java automatically.",
    ],
    correct: 1,
    explanation:
      "Strings are compared <strong>lexicographically</strong>, not numerically. <code>\"10\"</code> comes before <code>\"2\"</code> in lexicographic order (because <code>'1' &lt; '2'</code>), so the intended priority scheme breaks for values ≥ 10. A dedicated class implementing <code>Comparable</code> with numeric comparison is more reliable.",
  },

  // ── SECTION 10: Collections Class Methods ─────────────────────────────────

  {
    id: 44,
    topic: "Collections Methods",
    question:
      "A developer wants to sort an <code>ArrayList&lt;String&gt; cities</code> alphabetically. Which call is correct?",
    options: [
      "<code>cities.sort();</code>",
      "<code>Collections.sort(cities);</code>",
      "<code>cities.Collections.sort();</code>",
      "<code>Arrays.sort(cities);</code>",
    ],
    correct: 1,
    explanation:
      "<code>Collections.sort(list)</code> is the static utility method that sorts a <code>List</code> using the natural order defined by the elements' <code>compareTo()</code> method. <code>Arrays.sort()</code> works on arrays, not <code>ArrayList</code>. The <code>List</code> interface itself has a <code>sort()</code> method too (<code>cities.sort(null)</code>), but <code>Collections.sort()</code> is the classic approach taught here.",
  },
  {
    id: 45,
    topic: "Collections Methods",
    question:
      "What requirement must the elements of a <code>List</code> meet for <code>Collections.sort(list)</code> to work without a comparator?",
    options: [
      "Elements must be of type <code>String</code> or <code>Integer</code> only.",
      "Elements must implement the <code>Comparable</code> interface and provide a <code>compareTo()</code> method.",
      "Elements must be stored in a <code>LinkedList</code>, not an <code>ArrayList</code>.",
      "Elements must implement <code>Serializable</code>.",
    ],
    correct: 1,
    explanation:
      "<code>Collections.sort()</code> relies on <strong>natural ordering</strong>, which requires elements to implement <code>Comparable</code>. The <code>compareTo()</code> method defines the natural ordering. If elements don't implement it, a <code>ClassCastException</code> is thrown at runtime.",
  },
  {
    id: 46,
    topic: "Collections Methods",
    question:
      "A developer has a list of <code>Product</code> objects and wants to sort them by price in <em>descending</em> order. <code>Product</code> already implements <code>Comparable</code> by name (ascending). What is the cleanest solution?",
    options: [
      "Reverse the list manually after sorting.",
      "Pass a custom <code>Comparator</code> object as the second argument to <code>Collections.sort(list, comparator)</code>.",
      "Remove all elements and re-add them in reverse order.",
      "Override <code>compareTo()</code> to sort by price — this changes natural order.",
    ],
    correct: 1,
    explanation:
      "<code>Collections.sort(list, comparator)</code> accepts a <strong><code>Comparator</code></strong> as a second argument, providing an alternative ordering without changing the class's natural ordering. The <code>Comparator</code> interface's <code>compare(a, b)</code> method returns negative, 0, or positive to define the sort order.",
  },
  {
    id: 47,
    topic: "Collections Methods",
    question:
      "What does <code>Collections.reverseOrder()</code> return, and how is it used?",
    options: [
      "It returns a reversed copy of the list.",
      "It returns a <code>Comparator</code> that orders elements in reverse of their natural order, passed as an argument to <code>sort()</code>.",
      "It reverses the list in-place with no return value.",
      "It returns an iterator that traverses the list backwards.",
    ],
    correct: 1,
    explanation:
      "<code>Collections.reverseOrder()</code> returns a <code>Comparator</code> that imposes the reverse of natural ordering. Use it as: <code>Collections.sort(list, Collections.reverseOrder())</code> to sort in descending order. No new list is created.",
  },
  {
    id: 48,
    topic: "Collections Methods",
    question:
      "A developer calls <code>Collections.binarySearch(list, \"Mango\")</code> and receives <code>-4</code>. What does this indicate?",
    options: [
      "<code>\"Mango\"</code> is at index 4 in the list.",
      "<code>\"Mango\"</code> was not found; a negative return value means the element is absent.",
      "The list has fewer than 4 elements.",
      "An error occurred — <code>binarySearch</code> never returns negative values.",
    ],
    correct: 1,
    explanation:
      "<code>binarySearch</code> returns a non-negative index if the element is found. A <strong>negative</strong> return value means the element was not found. The specific negative value encodes the insertion point: <code>-(insertion point) - 1</code>. The list must be sorted before calling <code>binarySearch</code>.",
  },
  {
    id: 49,
    topic: "Collections Methods",
    question:
      "A developer calls <code>Collections.binarySearch(list, target)</code> on an <em>unsorted</em> list. What is the result?",
    options: [
      "It sorts the list first, then searches correctly.",
      "It returns -1 to indicate an error.",
      "The result is undefined — binary search requires a sorted list to work correctly.",
      "It always returns 0.",
    ],
    correct: 2,
    explanation:
      "<code>binarySearch</code> has a prerequisite: <strong>the list must be sorted</strong> in ascending order (or by the same comparator used in the search). Calling it on an unsorted list produces undefined — potentially incorrect — results. Always sort first.",
  },
  {
    id: 50,
    topic: "Collections Methods",
    question:
      "How does a class implementing <code>Comparator</code> define its ordering?",
    options: [
      "By overriding <code>compareTo(Object o)</code> with a single argument.",
      "By implementing <code>compare(T o1, T o2)</code> — returns negative if o1 &lt; o2, 0 if equal, positive if o1 &gt; o2.",
      "By implementing <code>equals(Object o1, Object o2)</code> with two arguments.",
      "By annotating the class with <code>@Comparator</code>.",
    ],
    correct: 1,
    explanation:
      "The <code>Comparator</code> interface requires implementing <code>compare(T o1, T o2)</code>. The contract: return a <strong>negative</strong> integer if o1 should come before o2, <strong>0</strong> if they are equal, and a <strong>positive</strong> integer if o1 should come after o2.",
  },

  // ── SECTION 11: Choosing a Collection ────────────────────────────────────

  {
    id: 51,
    topic: "Choosing a Collection",
    question:
      "A developer needs to process customer support requests strictly in the order received, with no priority differences. Which collection is the best fit?",
    options: [
      "<code>PriorityQueue</code> — it efficiently orders requests.",
      "<code>Stack</code> — LIFO processes the latest request first.",
      "<code>Queue</code> — FIFO ensures requests are handled in arrival order.",
      "<code>TreeSet</code> — requests are kept in sorted order.",
    ],
    correct: 2,
    explanation:
      "A standard <code>Queue</code> (FIFO) is the right choice when strict arrival-order processing is required. A <code>PriorityQueue</code> reorders elements by priority, breaking FIFO. A <code>Stack</code> processes newest first, which is the opposite of what's needed.",
  },
  {
    id: 52,
    topic: "Choosing a Collection",
    question:
      "A social media platform stores each user's set of unique followers. For any given user, lookups ('Is Alice following Bob?') must be as fast as possible. Order of followers does not matter. Which collection is best?",
    options: [
      "<code>ArrayList</code> — fast index access makes lookup efficient.",
      "<code>LinkedList</code> — node traversal is efficient for searching.",
      "<code>HashSet</code> — O(1) average <code>contains()</code> with automatic duplicate rejection.",
      "<code>TreeSet</code> — sorted order makes binary searching possible.",
    ],
    correct: 2,
    explanation:
      "A <code>HashSet</code> provides O(1) average-case <code>contains()</code> — the fastest possible for a 'does X follow Y?' lookup. Duplicates are automatically rejected. Since follower order doesn't matter, a <code>TreeSet</code>'s sorting overhead is unnecessary.",
  },
  {
    id: 53,
    topic: "Choosing a Collection",
    question:
      "A developer is building a phone book that maps names to phone numbers and must display all names in alphabetical order when printed. Which map implementation should be used?",
    options: [
      "<code>HashMap</code> — it is always faster than <code>TreeMap</code>.",
      "<code>TreeMap</code> — it keeps keys in sorted order, so iteration yields alphabetically ordered names.",
      "<code>HashSet</code> — it stores unique names efficiently.",
      "<code>LinkedList</code> — order of insertion is preserved.",
    ],
    correct: 1,
    explanation:
      "<code>TreeMap</code> stores keys in sorted (natural or comparator) order. Iterating over <code>keySet()</code> gives names alphabetically — no manual sorting needed. <code>HashMap</code> is faster for lookups but offers no order guarantee.",
  },

  // ── SECTION 12: Code Comprehension ───────────────────────────────────────

  {
    id: 54,
    topic: "Code Comprehension",
    question:
      "What does this code print? <pre><code>Set&lt;String&gt; s = new HashSet&lt;&gt;();\ns.add(\"Banana\");\ns.add(\"Apple\");\ns.add(\"Banana\");\nSystem.out.println(s.size());</code></pre>",
    options: [
      "3 — all three <code>add</code> calls are stored.",
      "2 — the duplicate <code>\"Banana\"</code> is silently ignored.",
      "1 — only unique first-added elements are kept.",
      "A <code>DuplicateElementException</code> is thrown.",
    ],
    correct: 1,
    explanation:
      "Sets reject duplicates. The second <code>add(\"Banana\")</code> is silently ignored, so only <code>\"Banana\"</code> and <code>\"Apple\"</code> are stored. <code>size()</code> returns <strong>2</strong>. No exception is thrown for duplicate insertions.",
  },
  {
    id: 55,
    topic: "Code Comprehension",
    question:
      "What is the output of this code? <pre><code>Map&lt;String, Integer&gt; m = new HashMap&lt;&gt;();\nm.put(\"Cat\", 3);\nm.put(\"Dog\", 5);\nm.put(\"Cat\", 7);\nSystem.out.println(m.get(\"Cat\"));\nSystem.out.println(m.get(\"Bird\"));</code></pre>",
    options: [
      "<code>3</code> then <code>0</code>",
      "<code>7</code> then <code>null</code>",
      "<code>3</code> then <code>null</code>",
      "<code>7</code> then a <code>KeyNotFoundException</code>",
    ],
    correct: 1,
    explanation:
      "The second <code>put(\"Cat\", 7)</code> <strong>replaces</strong> the value 3, so <code>get(\"Cat\")</code> returns <code>7</code>. <code>get(\"Bird\")</code> returns <code>null</code> because <code>\"Bird\"</code> is not in the map — no exception is thrown for missing keys.",
  },
  {
    id: 56,
    topic: "Code Comprehension",
    question:
      "What is wrong with this code? <pre><code>LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();\nlist.add(\"A\"); list.add(\"B\"); list.add(\"C\");\nListIterator&lt;String&gt; it = list.listIterator();\nit.remove();</code></pre>",
    options: [
      "You cannot create a <code>ListIterator</code> on a <code>LinkedList</code>.",
      "Calling <code>remove()</code> before calling <code>next()</code> or <code>previous()</code> throws an <code>IllegalStateException</code>.",
      "The list must have more than 3 elements before iteration.",
      "Nothing is wrong — this removes the first element correctly.",
    ],
    correct: 1,
    explanation:
      "<code>remove()</code> removes the element returned by the last <code>next()</code> or <code>previous()</code>. Since neither has been called yet, there is no 'last returned element' — calling <code>remove()</code> immediately throws <code>IllegalStateException</code>. You must call <code>next()</code> first.",
  },
  {
    id: 57,
    topic: "Code Comprehension",
    question:
      "A developer writes a spell-checker: words from a dictionary file are loaded into a <code>Set&lt;String&gt;</code>, and document words are checked with <code>dictionaryWords.contains(word)</code>. Why is a <code>Set</code> significantly better than a <code>List</code> for this use case?",
    options: [
      "A <code>Set</code> automatically corrects misspellings.",
      "A <code>Set</code>'s <code>contains()</code> is O(1) average for <code>HashSet</code>, while a <code>List</code>'s <code>contains()</code> is O(n) — critical when checking thousands of words.",
      "A <code>List</code> does not have a <code>contains()</code> method.",
      "A <code>Set</code> stores fewer characters per word, saving memory.",
    ],
    correct: 1,
    explanation:
      "For a dictionary with 100,000 words, <code>List.contains()</code> scans up to 100,000 entries per check — O(n). <code>HashSet.contains()</code> uses hashing to find the bucket in O(1) average time. With potentially thousands of words to check in a document, this performance difference is enormous.",
  },
];
