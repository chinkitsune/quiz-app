// ============================================================
//  questions.js  –  Quiz data for Java File I/O (CST8284)
//  Swap this file to reuse the quiz shell with different content.
// ============================================================

const QUIZ_META = {
  title: "Java File I/O",
  subtitle: "CST8284 · Week 13 · Practice Exam",
  description: "55 scenario-based questions testing true understanding of Java streams, NIO classes, sequential files, and file-based I/O.",
};

const questions = [

  // ── SECTION 1: Persistent vs Temporary Data ──────────────────────────────

  {
    id: 1,
    topic: "Persistent vs Temporary Data",
    question:
      "A professor writes a Java program that loads student grades into an <code>ArrayList&lt;Double&gt;</code>, computes averages, and prints results to the console. The professor runs the program, checks the output, then closes it. The next day she runs it again. What is true about the grade data?",
    options: [
      "The data persists because ArrayList is stored in the JVM heap.",
      "The data is lost when the program terminates; it must be reloaded each run.",
      "The data persists because System.out writes to a permanent buffer.",
      "The data is retained in the stack until the machine is rebooted.",
    ],
    correct: 1,
    explanation:
      "Variables and collections like ArrayList are stored in RAM, which is volatile. When the program terminates, all local/heap data is gone. Only data written to a secondary storage device (file, database) persists across executions.",
  },
  {
    id: 2,
    topic: "Persistent vs Temporary Data",
    question:
      "Which of the following best qualifies as <strong>persistent data</strong> in the context of Java I/O?",
    options: [
      "A <code>String</code> variable holding a user's username after login.",
      "An <code>int[]</code> array populated inside a <code>main()</code> method.",
      "A record written to a <code>.txt</code> file on the file system.",
      "A value returned from a method but never assigned to a variable.",
    ],
    correct: 2,
    explanation:
      "Persistent data survives beyond program execution. Writing to a file on a hard disk or flash drive satisfies this requirement. RAM-based structures (arrays, Strings, method returns) are all lost when the JVM exits.",
  },
  {
    id: 3,
    topic: "Persistent vs Temporary Data",
    question:
      "A game developer stores the top-10 leaderboard scores in a static array inside the game's main class. Players complain that their scores disappear every time the game is closed. What is the root cause?",
    options: [
      "Static arrays cannot hold numeric values.",
      "Arrays stored in RAM are temporary and do not survive program termination.",
      "The array must be declared inside a loop to retain data.",
      "A Scanner object must be used to preserve array contents.",
    ],
    correct: 1,
    explanation:
      "Even a <code>static</code> array lives in the JVM's memory. Once the process ends, all memory is released. Scores need to be written to a file (or database) to survive between sessions.",
  },

  // ── SECTION 2: Byte-Based vs Character-Based Streams ─────────────────────

  {
    id: 4,
    topic: "Byte vs Character Streams",
    question:
      "A developer needs to transfer a JPEG photo from one location to another without any data corruption. Which stream type should they use and why?",
    options: [
      "Character-based streams, because images contain textual metadata.",
      "Byte-based streams, because they preserve the exact binary representation of every byte.",
      "Byte-based streams, because they automatically compress image data.",
      "Character-based streams, because they are faster for large files.",
    ],
    correct: 1,
    explanation:
      "Binary files like images must be handled byte-for-byte. Character-based streams interpret bytes as characters and may alter the encoding, corrupting non-text data. Byte-based streams output/input raw binary without transformation.",
  },
  {
    id: 5,
    topic: "Byte vs Character Streams",
    question:
      "Using a byte-based stream in Java, how many bytes does an <code>int</code> value occupy when written to a file?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    correct: 2,
    explanation:
      "In Java's byte-based streams, a <code>char</code> = 2 bytes, <code>int</code> = 4 bytes, and <code>double</code> = 8 bytes — matching their in-memory binary representations. This is the raw binary format, not text.",
  },
  {
    id: 6,
    topic: "Byte vs Character Streams",
    question:
      "A configuration file is written using a character-based stream and saved as <code>config.txt</code>. A colleague opens it in Notepad and can read it perfectly. Which statement explains this?",
    options: [
      "Character-based streams produce binary files readable only by special editors.",
      "Character-based streams produce text files, where each character is stored as two bytes, making them human-readable.",
      "Notepad converts binary to text automatically.",
      "Character-based streams use ASCII encoding, which compresses each character to one bit.",
    ],
    correct: 1,
    explanation:
      "Character-based streams create text files. Each character is stored as 2 bytes (Java uses Unicode/UTF-16 internally), and standard text editors can interpret these encodings. Binary files, by contrast, require a program that understands the specific format.",
  },
  {
    id: 7,
    topic: "Byte vs Character Streams",
    question:
      "Consider two files: <code>data.bin</code> created with a byte-based stream and <code>data.txt</code> created with a character-based stream. Both contain the integer value <code>42</code>. Which statement is most accurate?",
    options: [
      "Both files have identical contents because 42 is the same in any format.",
      "<code>data.bin</code> stores 4 raw bytes; <code>data.txt</code> stores the characters '4' and '2' (each 2 bytes).",
      "<code>data.txt</code> stores 4 raw bytes; <code>data.bin</code> stores the characters '4' and '2'.",
      "Both files store exactly 2 bytes.",
    ],
    correct: 1,
    explanation:
      "A byte-based stream writes the integer 42 as its 4-byte binary representation. A character-based stream writes the string '42', which stores the characters '4' and '2' (each 2 bytes in Java = 4 bytes total). The files are structurally different.",
  },

  // ── SECTION 3: Standard Streams ─────────────────────────────────────────

  {
    id: 8,
    topic: "Standard Streams",
    question:
      "A command-line tool prints normal program output with <code>System.out.println()</code> and error messages with a different stream. Which standard stream should be used for the error messages, and why?",
    options: [
      "<code>System.in</code>, because it handles interactive input/output.",
      "<code>System.err</code>, because it is the designated error output stream.",
      "<code>System.out</code>, because all output goes to the same place.",
      "A <code>Formatter</code> object, because it handles formatted error strings.",
    ],
    correct: 1,
    explanation:
      "<code>System.err</code> is the standard error stream, intentionally separate from <code>System.out</code>. This separation lets users redirect normal output to a file while still seeing errors in the console, or vice-versa.",
  },
  {
    id: 9,
    topic: "Standard Streams",
    question:
      "Which class provides the methods <code>setIn</code>, <code>setOut</code>, and <code>setErr</code> to redirect the standard streams?",
    options: ["<code>Scanner</code>", "<code>Formatter</code>", "<code>System</code>", "<code>Files</code>"],
    correct: 2,
    explanation:
      "The <code>System</code> class owns the three standard stream objects (<code>in</code>, <code>out</code>, <code>err</code>) and provides static setters to redirect them to other streams — useful in testing or logging frameworks.",
  },
  {
    id: 10,
    topic: "Standard Streams",
    question:
      "By default, <code>System.in</code> reads from the <strong>keyboard</strong>. A developer redirects it to read from a file instead. Which method accomplishes this?",
    options: [
      "<code>System.in.redirect(file)</code>",
      "<code>System.setIn(newInputStream)</code>",
      "<code>Scanner.setSource(file)</code>",
      "<code>System.in = new FileInputStream(file)</code>",
    ],
    correct: 1,
    explanation:
      "<code>System.setIn(InputStream)</code> replaces the standard input stream. You can't reassign <code>System.in</code> directly (it's final) — you must use the <code>setIn</code> method. <code>Scanner</code> has no <code>setSource</code> method.",
  },

  // ── SECTION 4: java.io and java.nio Packages ──────────────────────────────

  {
    id: 11,
    topic: "Packages: java.io vs java.nio",
    question:
      "A student wants to iterate through all files in a directory tree. Which package family provides the most suitable modern interfaces for this task?",
    options: [
      "<code>java.util</code>",
      "<code>java.io</code> only",
      "<code>java.nio.file</code>",
      "<code>java.lang</code>",
    ],
    correct: 2,
    explanation:
      "<code>java.nio.file</code> provides <code>Files</code>, <code>Paths</code>, <code>Path</code>, and <code>DirectoryStream</code> — the modern NIO.2 API designed for robust file and directory operations. While <code>java.io</code> has older file handling classes, <code>java.nio.file</code> is the recommended modern choice.",
  },
  {
    id: 12,
    topic: "Packages: java.io vs java.nio",
    question:
      "Which two classes from <code>java.io</code> are specifically mentioned for character-based file I/O via formatted text?",
    options: [
      "<code>FileReader</code> and <code>FileWriter</code>",
      "<code>Scanner</code> and <code>Formatter</code>",
      "<code>BufferedReader</code> and <code>PrintWriter</code>",
      "<code>DataInputStream</code> and <code>DataOutputStream</code>",
    ],
    correct: 1,
    explanation:
      "<code>Scanner</code> reads formatted text (from keyboard or file) and <code>Formatter</code> writes formatted text similarly to <code>System.out.printf</code>. The other pairs are valid Java classes but are not the ones specifically covered in this context.",
  },

  // ── SECTION 5: NIO Classes – Path, Paths, Files, DirectoryStream ─────────

  {
    id: 13,
    topic: "NIO: Path & Paths",
    question:
      "A developer creates a <code>Path</code> object pointing to <code>C:/reports/annual.txt</code>. What can this object do on its own?",
    options: [
      "Open the file and read its contents.",
      "Delete the file from the disk.",
      "Represent the file's location without opening or processing it.",
      "Copy the file to another directory.",
    ],
    correct: 2,
    explanation:
      "A <code>Path</code> object only represents a file/directory location — it is not a file handle. It provides no I/O capabilities by itself. To actually manipulate files, you pass the <code>Path</code> to methods in the <code>Files</code> class.",
  },
  {
    id: 14,
    topic: "NIO: Path & Paths",
    question:
      "A developer needs to construct a <code>Path</code> object for the file <code>/home/user/docs/report.pdf</code>. Which class provides the static method to obtain this <code>Path</code>?",
    options: [
      "<code>Path</code>",
      "<code>Paths</code>",
      "<code>Files</code>",
      "<code>DirectoryStream</code>",
    ],
    correct: 1,
    explanation:
      "<code>Paths</code> (plural, a utility class) provides static factory methods like <code>Paths.get(String)</code> to create <code>Path</code> objects. <code>Path</code> itself is an interface — you don't instantiate it directly.",
  },
  {
    id: 15,
    topic: "NIO: Files Class",
    question:
      "Which NIO class would you use to <strong>copy</strong> a file, <strong>check if it exists</strong>, and <strong>read all its lines</strong> into a list?",
    options: [
      "<code>Path</code>",
      "<code>Paths</code>",
      "<code>Files</code>",
      "<code>DirectoryStream</code>",
    ],
    correct: 2,
    explanation:
      "The <code>Files</code> class provides static utility methods for common file operations: <code>Files.copy()</code>, <code>Files.exists()</code>, <code>Files.readAllLines()</code>, etc. It's the NIO workhorse for file manipulation.",
  },
  {
    id: 16,
    topic: "NIO: Files Class",
    question:
      "Consider this code: <pre><code>Path p = Paths.get(\"output.txt\");\nboolean exists = Files.exists(p);</code></pre>What does this code determine?",
    options: [
      "Whether the file can be written to.",
      "Whether a file or directory named <code>output.txt</code> exists in the current working directory.",
      "Whether the file contains any data.",
      "Whether the path is absolute or relative.",
    ],
    correct: 1,
    explanation:
      "<code>Files.exists(Path)</code> returns <code>true</code> if the path points to an existing file or directory in the filesystem. It does not check writability or file size — just existence.",
  },
  {
    id: 17,
    topic: "NIO: DirectoryStream",
    question:
      "A program needs to list every <code>.java</code> file in a project folder. Which NIO construct enables iterating over directory contents?",
    options: [
      "<code>Path</code>",
      "<code>Paths</code>",
      "<code>Files</code> with a <code>DirectoryStream</code>",
      "<code>Scanner</code>",
    ],
    correct: 2,
    explanation:
      "<code>Files.newDirectoryStream(Path)</code> returns a <code>DirectoryStream&lt;Path&gt;</code> that lets you iterate over directory entries in a for-each loop. <code>Path</code> and <code>Paths</code> don't iterate; <code>Scanner</code> reads file content, not directory listings.",
  },
  {
    id: 18,
    topic: "NIO: DirectoryStream",
    question:
      "What is the primary role of the <code>DirectoryStream</code> interface in Java NIO?",
    options: [
      "To stream the binary contents of a file byte-by-byte.",
      "To allow a program to iterate through entries (files/subdirs) in a directory.",
      "To provide a buffered character stream for reading large text files.",
      "To serialize Java objects to a directory path.",
    ],
    correct: 1,
    explanation:
      "<code>DirectoryStream</code> is specifically for iterating directory contents, not file data. Objects implementing this interface let you use a for-each loop to process each entry (as a <code>Path</code>) inside a directory.",
  },

  // ── SECTION 6: Absolute vs Relative Paths & URIs ─────────────────────────

  {
    id: 19,
    topic: "Absolute vs Relative Paths",
    question:
      "A developer uses the path <code>data/employees.csv</code> to open a file. This path starts from the application's working directory. What type of path is this?",
    options: [
      "Absolute path",
      "Relative path",
      "URI",
      "Root path",
    ],
    correct: 1,
    explanation:
      "A relative path is interpreted relative to a reference directory (usually where the application is launched). It doesn't start from the root. An absolute path would begin with the root, e.g., <code>C:/projects/data/employees.csv</code> on Windows.",
  },
  {
    id: 20,
    topic: "Absolute vs Relative Paths",
    question:
      "On a Linux machine, which of the following is an <strong>absolute path</strong>?",
    options: [
      "<code>documents/report.txt</code>",
      "<code>./logs/error.log</code>",
      "<code>/var/www/html/index.html</code>",
      "<code>../config/settings.xml</code>",
    ],
    correct: 2,
    explanation:
      "An absolute path starts from the root directory (<code>/</code> on Linux/Mac). Options A, B, and C are all relative — they depend on the current working directory. Only <code>/var/www/html/index.html</code> is absolute.",
  },
  {
    id: 21,
    topic: "URIs",
    question:
      "On a Windows system, which URI correctly represents the file <code>notes.txt</code> stored at the root of the <code>D:</code> drive?",
    options: [
      "<code>http://D:/notes.txt</code>",
      "<code>file://D:/notes.txt</code>",
      "<code>d:\\notes.txt</code>",
      "<code>file:D:notes.txt</code>",
    ],
    correct: 1,
    explanation:
      "File URIs follow the format <code>file://drive:/filename</code> on Windows. The <code>file://</code> scheme identifies local file resources, similar to how <code>http://</code> identifies web resources. Backslash notation is a path, not a URI.",
  },
  {
    id: 22,
    topic: "URIs",
    question:
      "On a Unix/Linux system, what is the correct URI for a file <code>config.properties</code> in the <code>/etc/myapp/</code> directory?",
    options: [
      "<code>file://etc/myapp/config.properties</code>",
      "<code>file:/etc/myapp/config.properties</code>",
      "<code>/etc/myapp/config.properties</code>",
      "<code>unix://etc/myapp/config.properties</code>",
    ],
    correct: 1,
    explanation:
      "On UNIX/Linux, file URIs use <code>file:/path/to/file</code>. The format differs slightly from Windows (no drive letter). Option A has two slashes before the path which is the Windows-style format.",
  },
  {
    id: 23,
    topic: "Path Separators",
    question:
      "A developer hardcodes the path <code>\"data\\\\employees.txt\"</code> in Java using a Windows backslash. A colleague then runs this code on Linux. What will happen?",
    options: [
      "It works fine because Java converts separators automatically.",
      "It may fail because Linux uses <code>/</code> as the separator.",
      "It fails because backslashes are illegal in all Java strings.",
      "Java uses the separator from the URI, so it always works.",
    ],
    correct: 1,
    explanation:
      "Java does process both <code>/</code> and <code>\\</code> in path names on most platforms, but OS-level file APIs can be strict. Best practice is to use <code>File.separator</code> or forward slashes (which Java handles cross-platform) rather than hardcoding backslashes.",
  },

  // ── SECTION 7: Formatter Class ───────────────────────────────────────────

  {
    id: 24,
    topic: "Formatter Class",
    question:
      "A developer runs the following code:<pre><code>Formatter f = new Formatter(\"log.txt\");\nf.format(\"%s %d%n\", \"Error\", 404);\nf.close();</code></pre>What is written to <code>log.txt</code>?",
    options: [
      "Nothing — <code>Formatter</code> doesn't write strings and integers together.",
      "<code>Error 404</code> followed by a newline.",
      "<code>%s %d</code> literally.",
      "The file cannot be created because <code>close()</code> is called.",
    ],
    correct: 1,
    explanation:
      "<code>Formatter.format()</code> works identically to <code>System.out.printf</code>: <code>%s</code> = String, <code>%d</code> = integer, <code>%n</code> = platform newline. The result is <code>Error 404\\n</code> written to the file.",
  },
  {
    id: 25,
    topic: "Formatter Class",
    question:
      "An existing file <code>archive.txt</code> contains 500 lines of data. A developer opens it with <code>new Formatter(\"archive.txt\")</code> and writes one new line. What is the state of <code>archive.txt</code> after the operation?",
    options: [
      "It contains 501 lines — the new line was appended.",
      "It contains only the newly written line — the original content was truncated.",
      "It contains 500 lines — the new line was rejected because the file already exists.",
      "It contains a backup of the original plus the new line.",
    ],
    correct: 1,
    explanation:
      "When <code>Formatter</code> opens an existing file, its content is <strong>truncated</strong> (erased). The file is overwritten from scratch. To append, you'd need a different approach such as using <code>FileWriter</code> with the append flag set to <code>true</code>.",
  },
  {
    id: 26,
    topic: "Formatter Class",
    question:
      "What happens when you call <code>new Formatter(\"output.txt\")</code> and <code>output.txt</code> does not yet exist?",
    options: [
      "A <code>FileNotFoundException</code> is thrown immediately.",
      "Java creates the file automatically.",
      "The program waits until the user creates the file.",
      "A <code>NullPointerException</code> is thrown.",
    ],
    correct: 1,
    explanation:
      "If the specified file doesn't exist, <code>Formatter</code> creates it. A <code>FileNotFoundException</code> is only thrown if the file <em>cannot</em> be created (e.g., permission denied or invalid path). Normal absence of the file is handled gracefully.",
  },
  {
    id: 27,
    topic: "Formatter Class",
    question:
      "A student forgets to call <code>formatter.close()</code> after writing data. The program terminates normally. What most likely happens?",
    options: [
      "All written data is permanently lost.",
      "The operating system will typically close the file when the program terminates, though explicit closing is best practice.",
      "The program will hang indefinitely waiting for close().",
      "A RuntimeException is thrown after termination.",
    ],
    correct: 1,
    explanation:
      "The OS will usually reclaim file handles on process termination. However, not calling <code>close()</code> risks unflushed buffered data being lost. Always close files explicitly, ideally using try-with-resources, to guarantee all data is written and resources are freed.",
  },

  // ── SECTION 8: Scanner for File Reading ──────────────────────────────────

  {
    id: 28,
    topic: "Scanner for Files",
    question:
      "A developer creates a <code>Scanner</code> linked to a file and reads all records. After processing, she wants to start reading from the beginning again without reopening the file. What happens?",
    options: [
      "She can call <code>scanner.reset()</code> to reposition to the start.",
      "She can call <code>scanner.seek(0)</code> to return to the beginning.",
      "Scanner does not support repositioning — she must close and reopen the file.",
      "She can call <code>scanner.rewind()</code>.",
    ],
    correct: 2,
    explanation:
      "<code>Scanner</code> is forward-only — it provides no method to seek back to the beginning of a file. To re-read from the start, you must <code>close()</code> the existing <code>Scanner</code> and create a new one linked to the same file.",
  },
  {
    id: 29,
    topic: "Scanner for Files",
    question:
      "What does <code>Scanner.hasNext()</code> indicate when reading from a file?",
    options: [
      "That the file has not been corrupted.",
      "That there is at least one more token available to be read.",
      "That the file has been fully read and no more data remains.",
      "That the file contains numeric data.",
    ],
    correct: 1,
    explanation:
      "<code>hasNext()</code> returns <code>true</code> if there is another token in the input. For files, it returns <code>false</code> at end-of-file. It's used in a loop condition to safely read until the file is exhausted without throwing exceptions.",
  },
  {
    id: 30,
    topic: "Scanner for Files",
    question:
      "Consider: <pre><code>Scanner sc = new Scanner(Paths.get(\"scores.txt\"));\nsc.close();\nString line = sc.nextLine();</code></pre>What exception is thrown by <code>sc.nextLine()</code>?",
    options: [
      "<code>FileNotFoundException</code>",
      "<code>NoSuchElementException</code>",
      "<code>IllegalStateException</code>",
      "<code>NullPointerException</code>",
    ],
    correct: 2,
    explanation:
      "Calling a read method on a <code>Scanner</code> that has already been closed throws <code>IllegalStateException</code>. This is distinct from <code>NoSuchElementException</code> (no more tokens) or <code>FileNotFoundException</code> (file doesn't exist).",
  },
  {
    id: 31,
    topic: "Scanner for Files",
    question:
      "A file <code>inventory.txt</code> has this content: <code>Apple 1.99 Chair 49.99</code>. A <code>Scanner</code> is used but incorrectly reads <code>nextInt()</code> expecting an integer where <code>\"Apple\"</code> appears. What exception is thrown?",
    options: [
      "<code>IllegalStateException</code>",
      "<code>InputMismatchException</code>",
      "<code>FileNotFoundException</code>",
      "<code>NumberFormatException</code>",
    ],
    correct: 1,
    explanation:
      "When a <code>Scanner</code> method like <code>nextInt()</code> encounters data of the wrong type (e.g., a String where an int is expected), it throws <code>InputMismatchException</code>. <code>NoSuchElementException</code> occurs when no data is left; <code>IllegalStateException</code> occurs when the scanner is closed.",
  },

  // ── SECTION 9: Exceptions in File I/O ─────────────────────────────────────

  {
    id: 32,
    topic: "File I/O Exceptions",
    question:
      "A Java application attempts to write a log file to <code>C:/Windows/System32/app.log</code>. The user running the program does not have administrator rights. Which exception is thrown?",
    options: [
      "<code>FileNotFoundException</code>",
      "<code>IOException</code>",
      "<code>SecurityException</code>",
      "<code>IllegalArgumentException</code>",
    ],
    correct: 2,
    explanation:
      "<code>SecurityException</code> is thrown when the user lacks the required file system permissions. <code>FileNotFoundException</code> is thrown when the file doesn't exist and can't be created due to a path/I-O issue, not a permissions issue.",
  },
  {
    id: 33,
    topic: "File I/O Exceptions",
    question:
      "A program attempts <code>new Formatter(\"/nonexistent/path/data.txt\")</code> where the directory <code>/nonexistent/path/</code> doesn't exist and no file can be created. Which exception is thrown?",
    options: [
      "<code>SecurityException</code>",
      "<code>FileNotFoundException</code>",
      "<code>NullPointerException</code>",
      "<code>DirectoryNotFoundException</code>",
    ],
    correct: 1,
    explanation:
      "<code>FileNotFoundException</code> (a checked exception) is thrown when the file doesn't exist AND a new file cannot be created — for example, when the parent directory is missing. This must be caught or declared in a <code>throws</code> clause.",
  },
  {
    id: 34,
    topic: "File I/O Exceptions",
    question:
      "Which exception indicates that a <code>Scanner</code> tried to read past the end of the file's available tokens?",
    options: [
      "<code>IllegalStateException</code>",
      "<code>EOFException</code>",
      "<code>NoSuchElementException</code>",
      "<code>IndexOutOfBoundsException</code>",
    ],
    correct: 2,
    explanation:
      "<code>NoSuchElementException</code> is thrown when a <code>Scanner</code> read method is called but no more tokens exist. This happens if you call <code>next()</code> without first checking <code>hasNext()</code>. Always guard reads with <code>hasNext()</code>.",
  },
  {
    id: 35,
    topic: "File I/O Exceptions",
    question:
      "Match each scenario to the correct exception: <em>Reading from a closed Scanner.</em>",
    options: [
      "<code>SecurityException</code>",
      "<code>FileNotFoundException</code>",
      "<code>IllegalStateException</code>",
      "<code>NoSuchElementException</code>",
    ],
    correct: 2,
    explanation:
      "<code>IllegalStateException</code> is thrown when you attempt an operation on an object that is in an inappropriate state — in this case, a <code>Scanner</code> that has been closed. It signals a programming error in object lifecycle management.",
  },

  // ── SECTION 10: System.exit() ─────────────────────────────────────────────

  {
    id: 36,
    topic: "System.exit()",
    question:
      "A developer writes a backup utility and calls <code>System.exit(0)</code> after all files are successfully backed up. What does this signify?",
    options: [
      "An error occurred and the program halted.",
      "The program terminated successfully.",
      "The program is requesting a system restart.",
      "The program output zero files.",
    ],
    correct: 1,
    explanation:
      "By convention, <code>System.exit(0)</code> signals successful termination. A non-zero exit code signals an error or abnormal termination. This convention is used by shell scripts and batch files to detect whether a program succeeded.",
  },
  {
    id: 37,
    topic: "System.exit()",
    question:
      "A program calls <code>System.exit(1)</code> after catching a critical file read error. A shell script checks the exit code to decide whether to retry. What will the script see?",
    options: [
      "A 0, indicating success.",
      "A non-zero value (1), indicating an error occurred.",
      "The script cannot read exit codes from Java programs.",
      "The JVM always overrides exit codes to 0.",
    ],
    correct: 1,
    explanation:
      "The integer passed to <code>System.exit()</code> becomes the process exit code visible to the calling shell. Non-zero = error, 0 = success. Shell scripts use this to implement error handling, retry logic, or conditional branching.",
  },
  {
    id: 38,
    topic: "System.exit()",
    question:
      "What is the effect of calling <code>System.exit()</code> inside a <code>catch</code> block when a <code>FileNotFoundException</code> is caught?",
    options: [
      "The exception is re-thrown to the caller.",
      "The current method returns normally.",
      "The entire JVM is terminated immediately.",
      "Only the current thread is stopped.",
    ],
    correct: 2,
    explanation:
      "<code>System.exit()</code> terminates the entire JVM — all threads stop and the program ends. It is a drastic measure. In well-designed apps, prefer propagating the exception or logging the error rather than forcing JVM shutdown.",
  },

  // ── SECTION 11: Sequential Text Files ────────────────────────────────────

  {
    id: 39,
    topic: "Sequential Text Files",
    question:
      "A bank stores transaction records in a sequential file ordered by transaction ID. A teller needs the record for transaction ID 10050. How does the program locate it?",
    options: [
      "It jumps directly to the record using an index.",
      "It reads records sequentially from the beginning until it finds ID 10050.",
      "It uses a binary search on the file.",
      "It uses <code>Files.find()</code> with a lambda predicate.",
    ],
    correct: 1,
    explanation:
      "Sequential-access files are read from the beginning, record by record, until the target is found. There is no random-access index. This is simple but inefficient for large files — random-access files solve this with direct record addressing.",
  },
  {
    id: 40,
    topic: "Sequential Text Files",
    question:
      "Why does Java impose no file structure (like built-in records) on sequential text files?",
    options: [
      "Java only supports binary files natively.",
      "Java treats files as sequential streams of bytes; any record structure must be defined by the application.",
      "Sequential files are handled exclusively by the OS, not the JVM.",
      "The <code>Formatter</code> class enforces a fixed structure automatically.",
    ],
    correct: 1,
    explanation:
      "Java views a file as a raw sequential stream of bytes. It doesn't impose 'records', 'fields', or any schema. The developer is responsible for defining delimiters, field order, and how to parse the data. This gives flexibility but requires careful design.",
  },
  {
    id: 41,
    topic: "Sequential Text Files — Update Problem",
    question:
      "A library system stores book records in a sequential text file. The record for <em>\"Lao Tzu\"</em> needs to be updated to <em>\"Laozi (Lao Tzu)\"</em>. Why can't the name simply be overwritten in place?",
    options: [
      "Sequential files are read-only once created.",
      "The new name is longer; overwriting would shift or corrupt subsequent records.",
      "Java's <code>Formatter</code> class forbids partial writes.",
      "Text files do not support string data.",
    ],
    correct: 1,
    explanation:
      "In a text file, records vary in length. Writing a longer string over a shorter one pushes subsequent bytes forward, corrupting the file. Unlike fixed-length binary records, text records can't be freely overwritten in place. The standard solution is to rewrite the entire file.",
  },
  {
    id: 42,
    topic: "Sequential Text Files — Update Problem",
    question:
      "A sequential customer file has 100,000 records. A batch job must update the email addresses for 60,000 of them. What is the most appropriate strategy?",
    options: [
      "Open the file, seek to each record, and overwrite it individually.",
      "Read the entire file into memory, make all updates, then rewrite the whole file.",
      "Use <code>Files.delete()</code> on each record before re-inserting it.",
      "Use a <code>DirectoryStream</code> to locate and patch individual records.",
    ],
    correct: 1,
    explanation:
      "When a large percentage of records need updating, rewriting the entire file is efficient and correct. For just one or two records out of 100,000, rewriting the entire file is wasteful — but for 60% of records, it's entirely reasonable.",
  },

  // ── SECTION 12: Code Comprehension ───────────────────────────────────────

  {
    id: 43,
    topic: "Code Comprehension",
    question:
      "What is wrong with this code? <pre><code>try {\n  Formatter out = new Formatter(\"data.txt\");\n  out.format(\"%d %s%n\", 101, \"Alice\");\n} catch (FileNotFoundException e) {\n  System.err.println(\"Error: \" + e.getMessage());\n}</code></pre>",
    options: [
      "The format specifiers are in the wrong order for the arguments.",
      "The <code>Formatter</code> is never closed, risking data loss.",
      "<code>FileNotFoundException</code> cannot be caught here.",
      "Nothing is wrong — this code is correct.",
    ],
    correct: 1,
    explanation:
      "The <code>Formatter</code> is opened inside <code>try</code> but never closed. If the program terminates or an exception occurs, buffered data may not be flushed to disk. Use try-with-resources: <code>try (Formatter out = new Formatter(\"data.txt\")) { ... }</code> to guarantee closure.",
  },
  {
    id: 44,
    topic: "Code Comprehension",
    question:
      "Analyze this snippet: <pre><code>Scanner sc = new Scanner(Paths.get(\"records.txt\"));\nwhile (sc.hasNextInt()) {\n  int id = sc.nextInt();\n  String name = sc.next();\n  System.out.println(id + \": \" + name);\n}\nsc.close();</code></pre>The file contains: <code>1 Alice 2 Bob 3 Charlie</code>. How many lines are printed?",
    options: [
      "0 — <code>hasNextInt()</code> fails immediately because 'Alice' is not an int.",
      "3 — one for each id-name pair.",
      "1 — only the first pair.",
      "6 — each token on its own line.",
    ],
    correct: 1,
    explanation:
      "<code>hasNextInt()</code> returns true when the next token is an integer. After reading each <code>int</code>, <code>sc.next()</code> reads the following String. The pattern repeats three times, printing 3 lines. The loop exits when no more integers remain.",
  },
  {
    id: 45,
    topic: "Code Comprehension",
    question:
      "What output does this code produce? <pre><code>Path p = Paths.get(\"report.txt\");\nSystem.out.println(p.getFileName());\nSystem.out.println(Files.exists(p));</code></pre>Assume <code>report.txt</code> does <strong>not</strong> exist.",
    options: [
      "<code>report.txt</code> then <code>true</code>",
      "<code>report.txt</code> then <code>false</code>",
      "A <code>FileNotFoundException</code> is thrown.",
      "<code>null</code> then <code>false</code>",
    ],
    correct: 1,
    explanation:
      "<code>Paths.get()</code> and <code>p.getFileName()</code> just manipulate path strings — they don't check if the file exists. So <code>getFileName()</code> returns <code>report.txt</code>. Only <code>Files.exists(p)</code> actually checks the filesystem, returning <code>false</code>.",
  },
  {
    id: 46,
    topic: "Code Comprehension",
    question:
      "A developer writes:<pre><code>try {\n  Formatter f = new Formatter(\"/root/protected.txt\");\n} catch (FileNotFoundException e) {\n  System.exit(1);\n}</code></pre>But on a Linux system without root rights, a <code>SecurityException</code> is thrown instead. What happens?",
    options: [
      "The catch block handles it and exits with code 1.",
      "The <code>SecurityException</code> is uncaught and propagates up, potentially crashing the program.",
      "<code>FileNotFoundException</code> is a superclass of <code>SecurityException</code>, so it's caught.",
      "Java silently ignores <code>SecurityException</code> during file operations.",
    ],
    correct: 1,
    explanation:
      "The catch only handles <code>FileNotFoundException</code>. <code>SecurityException</code> is a <code>RuntimeException</code> — a completely different hierarchy. Since it's not caught, it propagates up the call stack. To handle both, add a separate <code>catch (SecurityException e)</code> block.",
  },
  {
    id: 47,
    topic: "Code Comprehension",
    question:
      "What does the following code do? <pre><code>try (DirectoryStream&lt;Path&gt; stream =\n     Files.newDirectoryStream(Paths.get(\".\"), \"*.txt\")) {\n  for (Path entry : stream) {\n    System.out.println(entry.getFileName());\n  }\n}</code></pre>",
    options: [
      "Reads the contents of every <code>.txt</code> file in the current directory.",
      "Prints the filenames of all <code>.txt</code> files in the current directory.",
      "Deletes all <code>.txt</code> files in the current directory.",
      "Counts the number of lines in each <code>.txt</code> file.",
    ],
    correct: 1,
    explanation:
      "<code>Files.newDirectoryStream(path, glob)</code> creates a stream filtered by the glob pattern <code>*.txt</code>. The for-each loop iterates over matching <code>Path</code> entries and prints each filename. It lists names, not contents.",
  },
  {
    id: 48,
    topic: "Code Comprehension",
    question:
      "A student writes this loop to read a file: <pre><code>Scanner sc = new Scanner(Paths.get(\"data.txt\"));\nwhile (true) {\n  String line = sc.nextLine();\n  System.out.println(line);\n}</code></pre>What problem will occur?",
    options: [
      "The loop only reads the first line.",
      "When the end of file is reached, <code>nextLine()</code> throws <code>NoSuchElementException</code>.",
      "The loop works correctly and exits on its own.",
      "<code>nextLine()</code> throws <code>IllegalStateException</code> on the first call.",
    ],
    correct: 1,
    explanation:
      "Without checking <code>hasNextLine()</code>, calling <code>nextLine()</code> after the last line throws <code>NoSuchElementException</code>. The correct pattern is <code>while (sc.hasNextLine()) { String line = sc.nextLine(); }</code>.",
  },

  // ── SECTION 13: Design & Best Practices ──────────────────────────────────

  {
    id: 49,
    topic: "Design & Best Practices",
    question:
      "Which Java feature should a developer use to guarantee that a <code>Formatter</code> is closed even if an exception is thrown mid-write?",
    options: [
      "A <code>finally</code> block calling <code>close()</code>.",
      "Try-with-resources: <code>try (Formatter f = new Formatter(...)) { ... }</code>",
      "A <code>ShutdownHook</code> thread.",
      "Setting <code>f = null</code> after use.",
    ],
    correct: 1,
    explanation:
      "Try-with-resources (Java 7+) automatically calls <code>close()</code> on any <code>AutoCloseable</code> at the end of the try block, whether or not an exception occurred. It's cleaner and less error-prone than a <code>finally</code> block.",
  },
  {
    id: 50,
    topic: "Design & Best Practices",
    question:
      "A program must read a 2GB log file sequentially. Which approach is most memory-efficient?",
    options: [
      "Load the entire file into a <code>String</code> using <code>Files.readString()</code>.",
      "Read the file line-by-line using a <code>Scanner</code> or <code>BufferedReader</code>.",
      "Copy the file into a <code>byte[]</code> array using <code>Files.readAllBytes()</code>.",
      "Read the file into an <code>ArrayList&lt;String&gt;</code> using <code>Files.readAllLines()</code>.",
    ],
    correct: 1,
    explanation:
      "Reading line-by-line processes one line at a time, keeping only that line in memory. Loading a 2GB file into a String, byte array, or ArrayList would require 2GB+ of RAM, likely causing an <code>OutOfMemoryError</code>.",
  },
  {
    id: 51,
    topic: "Design & Best Practices",
    question:
      "A developer needs to write structured tabular data that non-technical colleagues can edit in Excel or a text editor. Which file format and stream type is most appropriate?",
    options: [
      "A binary file using byte-based streams for compact storage.",
      "A CSV text file using character-based streams (<code>Formatter</code>).",
      "A serialized Java object file.",
      "A binary file with a custom header structure.",
    ],
    correct: 1,
    explanation:
      "CSV files are plain text (character-based), human-readable, and universally supported by spreadsheet applications. Binary and serialized formats are not human-editable without specialized tools.",
  },

  // ── SECTION 14: Tricky / Advanced ────────────────────────────────────────

  {
    id: 52,
    topic: "Tricky Scenarios",
    question:
      "A developer opens a file with <code>Formatter</code>, writes 1000 records, but the JVM crashes before <code>close()</code> is called. What is the likely outcome?",
    options: [
      "All 1000 records are safely on disk because writes are always immediate.",
      "Some or all records may be lost because buffered data was never flushed to disk.",
      "The file is deleted automatically to prevent corruption.",
      "Java's garbage collector flushes the buffer before the JVM exits.",
    ],
    correct: 1,
    explanation:
      "Output streams are typically buffered — data is held in memory until the buffer is flushed. If the JVM crashes, unflushed data is lost. Calling <code>close()</code> (or <code>flush()</code>) explicitly ensures data is committed to disk.",
  },
  {
    id: 53,
    topic: "Tricky Scenarios",
    question:
      "Evaluate: <code>Path p = Paths.get(\"C:/data\", \"logs\", \"error.log\");</code> What does this path resolve to?",
    options: [
      "Three separate paths: <code>C:/data</code>, <code>logs</code>, and <code>error.log</code>.",
      "<code>C:/data/logs/error.log</code> — the segments are joined with the system separator.",
      "A syntax error because only one string argument is allowed.",
      "<code>C:/data/logs\\error.log</code> — Java mixes separators.",
    ],
    correct: 1,
    explanation:
      "<code>Paths.get(String first, String... more)</code> joins multiple path segments using the OS-appropriate separator. The result is <code>C:/data/logs/error.log</code>. This varargs form is the idiomatic way to build paths without hardcoding separators.",
  },
  {
    id: 54,
    topic: "Tricky Scenarios",
    question:
      "A company stores customer records in a sequential file ordered by customer ID. A program must find the record for customer ID 9001 which is near the end of a 500,000-record file. In the worst case, how many records must be examined?",
    options: [
      "1 — direct access by key.",
      "~250,000 — approximately half the file on average.",
      "500,000 — potentially the entire file.",
      "log₂(500,000) ≈ 19 — binary search is used.",
    ],
    correct: 2,
    explanation:
      "Sequential files require linear search — starting at record 1 and scanning forward. In the worst case, the target record is the very last one, requiring all 500,000 records to be examined. This is O(n). Random-access files would allow O(1) retrieval.",
  },
  {
    id: 55,
    topic: "Tricky Scenarios",
    question:
      "A <code>Path</code> object is created with <code>Paths.get(\"missing_dir/data.txt\")</code>. No directory or file exists. What happens at this line of code?",
    options: [
      "A <code>FileNotFoundException</code> is thrown immediately.",
      "An <code>IOException</code> is thrown immediately.",
      "No exception — the <code>Path</code> object is created successfully as a location reference.",
      "Java creates the missing directory automatically.",
    ],
    correct: 2,
    explanation:
      "<code>Paths.get()</code> only creates a <code>Path</code> object representing a location. It performs <strong>no filesystem access</strong> — no existence check, no creation. Exceptions only arise when you pass the <code>Path</code> to methods that actually touch the filesystem, like <code>Files.exists()</code> or <code>Files.readAllLines()</code>.",
  },
  {
    id: 56,
    topic: "Tricky Scenarios",
    question:
      "Which of the following statements about <code>System.out</code> is correct in the context of file streams?",
    options: [
      "<code>System.out</code> is a byte-based stream that outputs raw binary data.",
      "<code>System.out</code> is a character-based stream (<code>PrintStream</code>) that outputs to the console by default, but can be redirected.",
      "<code>System.out</code> cannot be redirected once the program starts.",
      "<code>System.out</code> is a <code>Formatter</code> object.",
    ],
    correct: 1,
    explanation:
      "<code>System.out</code> is a <code>PrintStream</code>, which handles character output (auto-encoding bytes). It defaults to the console but can be redirected via <code>System.setOut()</code>. This is why <code>System.out.printf()</code> and <code>Formatter.format()</code> share the same format string syntax.",
  },
  {
    id: 57,
    topic: "Tricky Scenarios",
    question:
      "A file named <code>employees.txt</code> is opened twice: once by a <code>Scanner</code> for reading and once by a <code>Formatter</code> for writing. Both objects exist simultaneously. What is most likely to happen?",
    options: [
      "Both operations work correctly with no conflicts.",
      "The <code>Formatter</code> will truncate the file, causing the <code>Scanner</code> to immediately see an empty file or corrupt data.",
      "Java locks the file so the <code>Formatter</code> throws an exception.",
      "<code>Scanner</code> will throw a <code>ConcurrentModificationException</code>.",
    ],
    correct: 1,
    explanation:
      "When <code>Formatter</code> opens the file, it truncates it immediately. If <code>Scanner</code> already had a file handle open, the data it was reading may be gone or inconsistent. Java does not automatically prevent concurrent access to the same file — this is a classic file I/O race condition.",
  },
];
