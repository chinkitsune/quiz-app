// data/questions/mobile-gui-programming-dart-and-flutter.js

module.exports = 

[
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Variable Declaration & Type Inference",
    "question": "A student writes the following Dart code:\n\n  var score = 95;\n  score = 98.5;\n\nWhat happens when this code is compiled?",
    "options": [
      "It compiles fine because var allows any type at any time.",
      "It fails because once var infers a type (int), you cannot assign a different type (double) to it.",
      "It compiles fine because 98.5 will be automatically truncated to int.",
      "It fails because you must always use an explicit type instead of var."
    ],
    "correctOption": 1,
    "explanation": "In Dart, var infers the type from the first assigned value — in this case, int. Once the type is inferred, it is fixed. Assigning 98.5 (a double) to an int variable will cause a compile-time error. var is shorthand for type inference, not a dynamic 'any type' keyword."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Variable Declaration & Type Inference",
    "question": "Which of the following Dart variable declarations is NOT valid?",
    "options": [
      "var city = \"Montreal\";",
      "String city = \"Montreal\";",
      "var city; city = \"Montreal\";",
      "String city; city = 42;"
    ],
    "correctOption": 3,
    "explanation": "Option D declares city as String but then assigns 42, which is an int — a type mismatch that causes a compile-time error. Option C is valid: declaring var without initialization leaves the type as dynamic until it is used. Options A and B are straightforward valid declarations."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Variable Declaration & Type Inference",
    "question": "A student writes:\n\n  var temperature;\n  temperature = 36.6;\n  temperature = \"hot\";\n\nWhat is the outcome in Dart?",
    "options": [
      "Compile error on the second line because var requires an initial value.",
      "Both assignments succeed because var without initialization is dynamic.",
      "Compile error on the third line because temperature was inferred as double.",
      "Runtime error when the string is printed."
    ],
    "correctOption": 1,
    "explanation": "When you declare var without an initial value (var temperature;), Dart treats it as dynamic — the variable can hold any type. If you had written var temperature = 36.6, it would be inferred as double and the string assignment would fail. The absence of an initial value is the key detail here."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "final Keyword",
    "question": "A developer wants to store the maximum allowed upload size for an app and make sure no other code ever changes it. Which declaration is most appropriate in Dart?",
    "options": [
      "var maxUploadMB = 50;",
      "int maxUploadMB = 50;",
      "final maxUploadMB = 50;",
      "double maxUploadMB = 50;"
    ],
    "correctOption": 2,
    "explanation": "final declares a variable that can only be set once and never changed after initialization. It is the correct choice when you want an immutable value. var and explicit types (int, double) all allow reassignment, so any of those could accidentally be changed elsewhere in the code."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "final Keyword",
    "question": "What is the result of the following Dart code?\n\n  final greeting = \"Hello\";\n  greeting = \"Hi\";",
    "options": [
      "The variable is updated to \"Hi\" since reassignment just generates a warning.",
      "A runtime exception is thrown when the second line executes.",
      "A compile-time error is thrown because final variables cannot be reassigned.",
      "The code works fine because the type was inferred as String."
    ],
    "correctOption": 2,
    "explanation": "final variables in Dart are immutable after their first assignment. Attempting to reassign a final variable causes a compile-time error — the program will not even build. This is caught early, before the app ever runs."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "final Keyword",
    "question": "Which of the following Dart statements about final is TRUE?",
    "options": [
      "final variables must always have an explicit type annotation.",
      "final variables can be reassigned as long as they are inside a function.",
      "final variables must be given a value at the time they are declared.",
      "final and var behave identically except for naming convention."
    ],
    "correctOption": 2,
    "explanation": "A final variable must be initialized at declaration because it can never be assigned later. You cannot write 'final x;' and then 'x = 10;' later — that would be a compile error. Type annotation is optional (type inference works with final just like with var)."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Nullable Types",
    "question": "A student writes:\n\n  String username = \"\";\n  username = null;\n\nWhat happens in Dart?",
    "options": [
      "The assignment succeeds because empty string and null are interchangeable.",
      "A runtime crash occurs when null is used.",
      "A compile-time error occurs because String is non-nullable by default.",
      "The assignment succeeds because null is a valid String value."
    ],
    "correctOption": 2,
    "explanation": "In Dart's sound null safety system, a regular String is non-nullable — it can never hold null. To allow null, you must declare it as String?. Attempting to assign null to a non-nullable variable is caught at compile time, before the app runs."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Nullable Types",
    "question": "A developer needs a variable to store a customer's middle name, which may or may not exist. Which declaration is correct in Dart?",
    "options": [
      "String middleName = \"\";",
      "String? middleName;",
      "var middleName = null;",
      "nullable String middleName;"
    ],
    "correctOption": 1,
    "explanation": "String? declares a nullable String — it can hold either a String value or null. An empty string (\"\") is not the same as null; it is still a value. Option C would work (var without init is dynamic) but is less clear about intent. Option D is not valid Dart syntax."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Nullable Types",
    "question": "Given this Dart code:\n\n  String? productCode;\n  print(productCode.length);\n\nWhat is the problem?",
    "options": [
      "No problem — nullable types have all the same methods as non-nullable types.",
      "productCode might be null, so calling .length directly is unsafe and will cause a compile warning or error.",
      "String? does not have a length property.",
      "print() cannot accept nullable types."
    ],
    "correctOption": 1,
    "explanation": "Because productCode is nullable (String?), it could be null at the time .length is called. Dart's null safety prevents you from calling methods directly on nullable variables without first checking for null. You must use either productCode?.length (null-aware access) or check 'if (productCode != null)' first."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Nullable Types",
    "question": "Which pair of statements are functionally equivalent in Dart?",
    "options": [
      "if(email != null) return email.length;   and   return email!.length;",
      "if(email != null) return email.length;   and   return email?.length;",
      "return email?.length;   and   return email.length;",
      "email = null;   and   email = \"\";"
    ],
    "correctOption": 1,
    "explanation": "The null-aware operator ?. returns null instead of throwing if the object is null, which is equivalent to first checking 'if (email != null)'. Option A uses the force-unwrap operator ! which asserts non-null but crashes at runtime if it is null — not equivalent to a safe null check."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Nullable Types",
    "question": "A developer writes:\n\n  String? label = \"Submit\";\n  print(label?.toUpperCase());\n\nWhat is printed?",
    "options": [
      "null",
      "\"Submit\"",
      "\"SUBMIT\"",
      "A compile error because ?. cannot be used on a non-null value."
    ],
    "correctOption": 2,
    "explanation": "Even though label is declared as String? (nullable), it currently holds the value \"Submit\". The ?. operator first checks whether label is null. Since it is not null, it calls toUpperCase() normally and prints \"SUBMIT\". The ?. operator is safe to use whether or not the variable actually contains null."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Function Declarations & Named Parameters",
    "question": "A student writes this Dart function:\n\n  void sendEmail({String to = \"\", String subject = \"\", bool urgent = false}) { }\n\nWhich function call is valid?",
    "options": [
      "sendEmail(\"boss@work.com\", \"Meeting\", true);",
      "sendEmail(to: \"boss@work.com\");",
      "sendEmail(\"boss@work.com\");",
      "sendEmail(true, urgent: false);"
    ],
    "correctOption": 1,
    "explanation": "When parameters are wrapped in { }, they become named optional parameters. You must use the parameter name when calling the function (e.g., to: \"boss@work.com\"). Positional calls like sendEmail(\"boss@work.com\", \"Meeting\", true) are not allowed for named parameters. Because all parameters have defaults, you can call the function with any subset of them."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Function Declarations & Named Parameters",
    "question": "Given:\n\n  double calculateTax({double income = 0, double rate = 0.15}) {\n    return income * rate;\n  }\n\nWhat does calculateTax(rate: 0.20) return?",
    "options": [
      "0.0 — because income defaults to 0 and 0 * 0.20 = 0.0",
      "0.15 — because the default rate is used",
      "A runtime error because income was not supplied",
      "A compile error because both parameters are required"
    ],
    "correctOption": 0,
    "explanation": "Named parameters with default values are optional. If income is not passed, it defaults to 0. So the calculation is 0 * 0.20, which equals 0.0. No error occurs — that is the whole point of default values. The function runs successfully with only the supplied parameter overriding its default."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Function Declarations & Named Parameters",
    "question": "Why is the following Dart function call valid even though the parameters are in a different order from the declaration?\n\n  // Declaration:\n  void createProfile({String name = \"\", int age = 0, bool active = true})\n\n  // Call:\n  createProfile(active: false, name: \"Lena\", age: 22);",
    "options": [
      "Dart automatically sorts parameters alphabetically before passing them.",
      "Named parameters are matched by their names, not their position, so any order is valid.",
      "The compiler reorders the arguments to match the declaration order.",
      "This is only valid if all three parameters are supplied."
    ],
    "correctOption": 1,
    "explanation": "Named parameters in Dart are identified by their names, not their position in the call. This is a key advantage: you can supply them in any order, and you can omit any that have default values. The compiler matches each argument to its parameter by name, not by position."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Function Declarations & Named Parameters",
    "question": "A developer has this function:\n\n  void configureServer(String host, {int port = 8080, bool secure = false}) { }\n\nWhich call will cause a compile error?",
    "options": [
      "configureServer(\"localhost\");",
      "configureServer(\"localhost\", port: 3000);",
      "configureServer(port: 3000, host: \"localhost\");",
      "configureServer(\"localhost\", secure: true, port: 443);"
    ],
    "correctOption": 2,
    "explanation": "The first parameter 'host' is a required positional parameter (it is outside the { } braces). Positional parameters must always be supplied in their declared position — you cannot pass them by name. Option C tries to pass host as a named parameter, which is not allowed since it was declared positionally."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Function Declarations & Named Parameters",
    "question": "What is the main practical benefit of using named optional parameters with default values when building a UI widget?",
    "options": [
      "They make functions run faster at runtime.",
      "They allow you to customize only the properties you care about while leaving everything else at sensible defaults.",
      "They prevent other developers from calling the function incorrectly.",
      "They allow the same function to return different types."
    ],
    "correctOption": 1,
    "explanation": "Named optional parameters shine in UI development where widgets have many configurable properties — font size, color, padding, alignment, etc. — but you usually only want to change one or two. With defaults, you only supply the parameters that differ from the norm, keeping call sites short and readable."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Access Modifiers",
    "question": "A Dart class has the following members:\n\n  double _balance;\n  String accountHolder;\n  double _getInterest() { }\n  void deposit(double amount) { }\n\nWhich member is accessible from outside the class?",
    "options": [
      "_balance — because it is a number",
      "accountHolder and deposit() — because they have no underscore",
      "_getInterest() — because it returns a value",
      "All members — Dart has no access control"
    ],
    "correctOption": 1,
    "explanation": "In Dart, the underscore prefix (_) marks a member as private to its library. Members without an underscore are public. So _balance and _getInterest() are private, while accountHolder and deposit() are public and accessible from outside the class."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Access Modifiers",
    "question": "A student wants to make a helper variable inside a class inaccessible from outside the file. Which declaration achieves this in Dart?",
    "options": [
      "private int counter = 0;",
      "protected int counter = 0;",
      "int _counter = 0;",
      "internal int _counter = 0;"
    ],
    "correctOption": 2,
    "explanation": "Dart does not use keywords like private, protected, or internal. Instead, placing an underscore before the name (_counter) makes it private to the library. This is Dart's simple and consistent convention for access control."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Access Modifiers",
    "question": "Which statement about Dart's access modifiers is FALSE?",
    "options": [
      "A variable named _total is private.",
      "A function named _calculate() is private.",
      "Dart uses the protected keyword for subclass-only access.",
      "A variable named total (no underscore) is public."
    ],
    "correctOption": 2,
    "explanation": "Dart only supports two levels of access: public (no underscore) and private (underscore prefix). There is no 'protected' keyword in Dart, unlike Java or C++. This keeps the access system simple — if it starts with _, it's private; otherwise it's public."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Dart Language Fundamentals",
    "question": "In Dart, how is a boolean type declared, and how does it differ from Java?",
    "options": [
      "Both Dart and Java use 'boolean' — there is no difference.",
      "Dart uses 'bool' instead of Java's 'boolean'.",
      "Dart uses 'Boolean' (capital B), while Java uses 'boolean'.",
      "Dart does not have a dedicated boolean type; 0 and 1 are used instead."
    ],
    "correctOption": 1,
    "explanation": "Dart uses 'bool' as the keyword for boolean values, while Java uses 'boolean'. This is a small but important syntactic difference when coming from a Java background. Dart's bool works identically to Java's boolean in terms of logic (true/false)."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Dart Language Fundamentals",
    "question": "Why was Dart created by Google as an alternative to JavaScript?",
    "options": [
      "JavaScript was too slow for server-side applications, and Dart replaced it on the backend.",
      "JavaScript lacked strong type checking and was purely interpreted; Dart offers type safety and can compile to native code.",
      "JavaScript could not run in browsers, so Google needed a new language.",
      "Dart was created solely to power Android applications and has no web capabilities."
    ],
    "correctOption": 1,
    "explanation": "JavaScript's weaknesses include no type checking and being purely interpreted (not compiled to native machine code). Dart addresses both: it offers optional strong typing, and the Dart compiler (via Flutter) can compile code to native machine language on iOS, Android, and other platforms — not just bytecode or interpreted scripts."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Type Compatibility & Errors",
    "question": "A student writes:\n\n  int quantity = 0;\n  quantity = quantity + 1.5;\n\nWhat happens in Dart?",
    "options": [
      "quantity becomes 1 because doubles are truncated when assigned to int.",
      "A compile-time error occurs because you cannot add a double to an int and store it in an int.",
      "Dart automatically promotes quantity to double.",
      "quantity becomes 1.5 with no error."
    ],
    "correctOption": 1,
    "explanation": "Dart has strict type checking. int + double produces a double, and you cannot assign a double result back into an int variable without an explicit cast. This is a compile-time error — Dart will not silently truncate or promote the type."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Type Compatibility & Errors",
    "question": "In a Flutter exercise, a student declares:\n\n  int _level = 0;\n\nThen adds a Slider that requires a double for its value parameter. What must the student change to fix the type mismatch?",
    "options": [
      "Change the Slider's value parameter to accept int.",
      "Change int _level = 0 to double _level = 0.",
      "Cast _level to String before passing it to the Slider.",
      "Declare _level as var and the Slider will handle the conversion."
    ],
    "correctOption": 1,
    "explanation": "Flutter's Slider widget requires its value parameter to be a double. If _level is declared as int, passing it causes a type error. The fix is to change the declaration to double _level = 0, which Dart accepts because the literal 0 is compatible with double."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Hot Swapping",
    "question": "A developer changes the font size in a Flutter app from 16 to 24 while the app is running in the browser. They save the file. What happens next?",
    "options": [
      "Nothing happens until they restart the app manually.",
      "The app crashes because runtime changes are not supported.",
      "The UI updates instantly to show the new font size without restarting or recompiling.",
      "The change is applied only the next time the app is opened."
    ],
    "correctOption": 2,
    "explanation": "Flutter supports hot reload (sometimes called hot swapping), which lets the app update its UI in real time when source files are saved — without restarting or doing a full recompile. This dramatically speeds up UI development because you see changes immediately."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Hot Swapping",
    "question": "Which type of change would most likely NOT be reflected correctly by Flutter's hot reload without a full restart?",
    "options": [
      "Changing a widget's padding value.",
      "Updating the text inside a Text() widget.",
      "Changing the initial value of a static variable used at app startup.",
      "Modifying a color in a TextStyle."
    ],
    "correctOption": 2,
    "explanation": "Hot reload re-runs the build methods but does not reinitialize app state or re-execute startup code. Changes to initial variable values, constructors, or global initializers often require a hot restart (full restart without uninstalling) to take effect. UI-only changes like padding, colors, and text are always safe for hot reload."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "setState() and Reactive UI",
    "question": "A student builds a counter app. They increment a variable called _count in a function but the displayed number never changes. What is the most likely cause?",
    "options": [
      "The variable name starts with underscore, so Flutter ignores it.",
      "The variable was incremented outside of setState(), so Flutter does not know to redraw.",
      "Text() widgets do not support showing integer values.",
      "Flutter only redraws on app startup, not in response to variable changes."
    ],
    "correctOption": 1,
    "explanation": "Flutter's reactive UI system only redraws widgets when told to via setState(). Changing a variable directly does not trigger a redraw. You must wrap the variable change inside setState(() { _count++; }) so Flutter knows the state has changed and schedules a rebuild of the affected widgets."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "setState() and Reactive UI",
    "question": "What is the purpose of setState() in Flutter?",
    "options": [
      "To define the initial values of variables when the app starts.",
      "To notify the Flutter framework that variables have changed and the UI should be rebuilt.",
      "To save data permanently to the device's storage.",
      "To call the server and retrieve updated data."
    ],
    "correctOption": 1,
    "explanation": "setState() is Flutter's mechanism for triggering a UI rebuild. When called, Flutter knows that the internal state of the widget has changed and will rebuild only the parts of the UI that depend on those variables. Without setState(), variable changes happen silently without any visual update."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "setState() and Reactive UI",
    "question": "A developer has two variables: _speed (used in a Slider) and _playerName (shown in a Text). They update _speed inside setState(). What happens to the Text showing _playerName?",
    "options": [
      "Only the Slider updates; the Text widget is never touched.",
      "Flutter rebuilds all widgets in the screen, including those that did not change.",
      "Flutter optimizes the redraw and only updates widgets that actually use _speed.",
      "_playerName is reset to null because setState() clears all variables."
    ],
    "correctOption": 2,
    "explanation": "Flutter is designed to be efficient. When setState() is called, Flutter rebuilds the widget tree but optimizes by only updating widgets whose inputs have actually changed. Widgets relying on _playerName will not visually change because _playerName was not modified, so there is no wasted work."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "setState() and Reactive UI",
    "question": "Which code correctly updates a variable and triggers a UI refresh in Flutter?",
    "options": [
      "void updateVolume(double v) { _volume = v; }",
      "void updateVolume(double v) { setState(() { _volume = v; }); }",
      "void updateVolume(double v) { refresh(_volume = v); }",
      "void updateVolume(double v) { redraw(); _volume = v; }"
    ],
    "correctOption": 1,
    "explanation": "In Flutter, the correct pattern is to place your state changes inside the callback passed to setState(). This tells the framework to schedule a rebuild after the variable is updated. Option A changes the variable but never triggers a redraw. Options C and D use non-existent Flutter functions."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "setState() and Reactive UI",
    "question": "A student writes this function:\n\n  void onTimerTick() {\n    setState(() {\n      _secondsElapsed = _secondsElapsed + 1;\n    });\n  }\n\nEvery widget that displays _secondsElapsed will...",
    "options": [
      "Update only once when the app first loads.",
      "Update each time onTimerTick() is called, because setState() triggers a rebuild.",
      "Never update because _secondsElapsed uses addition, not assignment.",
      "Update but only if _secondsElapsed is declared as final."
    ],
    "correctOption": 1,
    "explanation": "Each call to setState() schedules a rebuild of the widget. Since onTimerTick() wraps the variable change in setState(), every call will cause Flutter to rebuild the widget tree and reflect the new value of _secondsElapsed in all widgets that display it."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Widget Parameters — required vs optional",
    "question": "In Flutter, a widget parameter marked with the 'required' keyword means:",
    "options": [
      "The parameter has a default value and can be omitted.",
      "The parameter must be supplied by the caller, but can be in any order.",
      "The parameter must be the first argument in the constructor call.",
      "The parameter can only accept non-null values."
    ],
    "correctOption": 1,
    "explanation": "The 'required' keyword in Flutter/Dart means the caller must provide a value for that named parameter — there is no default to fall back on. However, because it is still a named parameter, the order does not matter. You must include it, but you can place it anywhere in the named parameter list."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Widget Parameters — required vs optional",
    "question": "A student wants to use a widget that has the following constructor signature:\n\n  Widget({required String label, Color color = Colors.black})\n\nWhich call is valid?",
    "options": [
      "Widget()",
      "Widget(color: Colors.red)",
      "Widget(label: \"Save\")",
      "Widget(\"Save\", Colors.red)"
    ],
    "correctOption": 2,
    "explanation": "The label parameter is required and must always be provided. The color parameter has a default value (Colors.black) and is optional. Option C is valid — label is supplied, and color will default to Colors.black. Option B omits the required label parameter, causing a compile error. Option D uses positional syntax, which does not work for named parameters."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Widget Parameters — required vs optional",
    "question": "A student discovers a widget constructor with 15 optional parameters. They only need to change the font size and background color. How many parameters do they need to supply in their call?",
    "options": [
      "All 15 parameters — you must always supply all of them.",
      "Only the 2 they care about — the rest will use their default values.",
      "At least half of the parameters — Dart requires a majority.",
      "Zero — optional parameters can never be customized after the widget is created."
    ],
    "correctOption": 1,
    "explanation": "Optional named parameters with default values only need to be supplied when you want a value different from the default. You call the widget with only fontSize and backgroundColor, and every other parameter will quietly use its default. This is the key design advantage of named optional parameters in Flutter widget APIs."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Slider Widget",
    "question": "A student builds a Brightness Slider for a lamp app. Which Slider configuration is correct in Flutter?",
    "options": [
      "Slider(value: _brightness, min: 0.0, max: 100.0, onChanged: setBrightness)",
      "Slider(value: _brightness, onChanged: setBrightness())",
      "Slider(_brightness, 0.0, 100.0, setBrightness)",
      "Slider(min: 0.0, max: 100.0)"
    ],
    "correctOption": 0,
    "explanation": "A Slider needs at minimum: value (current position, a double), onChanged (a function that receives the new double value). min and max are strongly recommended to define the range. Notice that onChanged receives the function name (setBrightness), not a call to it (setBrightness()). Option B calls the function immediately rather than passing a reference."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Slider Widget",
    "question": "A Slider's onChanged parameter expects which of the following?",
    "options": [
      "A String that names the variable to update.",
      "A direct variable reference so the slider can modify it.",
      "A function that takes a double parameter.",
      "A boolean that enables or disables the slider."
    ],
    "correctOption": 2,
    "explanation": "onChanged is a callback parameter — you pass the name of a function that will be called every time the user moves the slider. That function must accept a double, which represents the slider's new position. Dart/Flutter passes the new value into your function so you can update your state variable inside setState()."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Slider Widget",
    "question": "A developer sets up a Slider but does not wrap the state update in setState(). What will the user experience?",
    "options": [
      "The slider moves visually but the display showing the variable value does not update.",
      "The app crashes immediately when the slider is touched.",
      "The slider snaps back to 0 every time it is released.",
      "The variable updates correctly and all widgets refresh automatically."
    ],
    "correctOption": 0,
    "explanation": "Flutter's reactive UI only redraws when setState() is called. Without it, the underlying variable does change, but Flutter does not know to rebuild the widget tree. The slider handle may move (it manages its own visual state), but any Text or other widget that displays the variable will show the outdated value."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Slider Widget",
    "question": "A student's Slider crashes with the error: 'value is not between minimum 0 and maximum 1'. What is the most likely cause?",
    "options": [
      "The onChanged function was not defined.",
      "The Slider has no default min/max, and another function set the value above 1.0 without the Slider knowing its range.",
      "Flutter does not support Slider widgets on web.",
      "The Slider's value variable was declared as int instead of double."
    ],
    "correctOption": 1,
    "explanation": "Flutter's Slider defaults to a range of 0.0 to 1.0. If another function (like a button's onPressed) modifies the same variable and sets it to a value outside that default range, the Slider crashes. The fix is to explicitly set min and max on the Slider, or ensure no other code sets the variable beyond those bounds."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Slider Widget",
    "question": "A developer writes:\n\n  void onVolumeChanged(double newVolume) {\n    _volume = newVolume;\n  }\n\nThe Slider moves but the volume level displayed in a Text widget does not change. What is wrong?",
    "options": [
      "The function parameter should be int, not double.",
      "The function name must be exactly 'onChanged' to work with Slider.",
      "_volume is updated but not inside setState(), so no redraw occurs.",
      "Text() widgets cannot display double values."
    ],
    "correctOption": 2,
    "explanation": "The function correctly receives the new value and assigns it to _volume. However, without wrapping that assignment in setState(), Flutter does not know the state changed and will not rebuild the widget. The fix is: setState(() { _volume = newVolume; });"
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Reactive UI Concepts",
    "question": "Why does modern mobile UI programming use a 'redraw only on variable change' approach instead of redrawing constantly?",
    "options": [
      "Constant redrawing would make the code simpler to write.",
      "Redrawing only on change conserves battery, reduces CPU usage, and keeps animations smooth.",
      "Mobile screens cannot physically update more than once per second.",
      "Constant redrawing is the correct approach; Flutter does this by default."
    ],
    "correctOption": 1,
    "explanation": "Constantly redrawing every frame regardless of changes wastes processing power and battery — critical constraints on mobile devices. By only redrawing when state actually changes, Flutter keeps apps efficient. This is why setState() exists: it marks specific moments where a rebuild is warranted."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Reactive UI Concepts",
    "question": "A Flutter app has three widgets on screen: a Slider, a Text showing the slider's value, and a Text showing the user's name. The user moves the Slider. Which widgets get redrawn?",
    "options": [
      "All three widgets — Flutter always rebuilds the entire screen.",
      "Only the Slider itself.",
      "The Slider and the Text showing the slider's value — only widgets using the changed variable.",
      "None — Flutter only redraws on button press."
    ],
    "correctOption": 2,
    "explanation": "Flutter optimizes redraws. When setState() is called after the slider changes _sliderValue, only widgets that depend on _sliderValue are rebuilt. The Text showing the user's name, which depends on a different variable, does not need to change and is left alone."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Reactive UI Concepts",
    "question": "In the context of Flutter's reactive UI, what is a 'callback function' used for with widgets like Slider?",
    "options": [
      "A function that runs once when the app first loads.",
      "A function that is passed to a widget and invoked by the widget when the user interacts with it.",
      "A function that is called back by the server when data arrives.",
      "A function that cancels an operation when the user presses Back."
    ],
    "correctOption": 1,
    "explanation": "A callback function is one you define but pass to a widget to be called later — specifically when the user interacts. For a Slider, you pass your onChanged function, and Flutter calls it with the new value every time the slider moves. This is the event-driven programming model used throughout mobile UI."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Dart Syntax",
    "question": "What does the following Dart code produce?\n\n  String? message;\n  int length = message?.length ?? 0;\n  print(length);",
    "options": [
      "A compile error because message is not initialized.",
      "A runtime crash because you cannot call .length on null.",
      "Prints 0, because message is null and the ?? operator provides 0 as a fallback.",
      "Prints null."
    ],
    "correctOption": 2,
    "explanation": "String? message is null by default (uninitialized nullable). The ?. operator safely returns null instead of crashing. The ?? (null coalescing) operator then provides 0 as a default when the left side is null. So length = null ?? 0, which equals 0. This is a safe, idiomatic Dart null-handling pattern."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Dart Syntax",
    "question": "Analyze this Dart code:\n\n  void adjustSpeed({double min = 0, double max = 200, double current = 60}) {\n    print(current);\n  }\n  adjustSpeed(max: 180, current: 90);",
    "options": [
      "Prints 60.0 — the default value of current.",
      "Prints 90.0 — the supplied value overrides the default.",
      "A compile error — max must come after current.",
      "Prints 180.0 — the largest value wins."
    ],
    "correctOption": 1,
    "explanation": "Named parameters are matched by name, not position. current: 90 supplies 90 as the value for current, overriding its default of 60. max is also overridden to 180. min is not supplied, so it keeps its default of 0. The function prints 90.0 (or 90, depending on formatting)."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Dart Syntax",
    "question": "Which of the following correctly declares a private helper function that computes a discount in Dart?",
    "options": [
      "private double computeDiscount(double price) { return price * 0.1; }",
      "double _computeDiscount(double price) { return price * 0.1; }",
      "protected double computeDiscount(double price) { return price * 0.1; }",
      "_private double computeDiscount(double price) { return price * 0.1; }"
    ],
    "correctOption": 1,
    "explanation": "In Dart, private access is indicated solely by prefixing the name with an underscore. There are no private, protected, or _private keywords. Option B correctly uses _computeDiscount to signal that this function is private to its library."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Dart Syntax",
    "question": "A student writes:\n\n  final taxRate = 0.13;\n  taxRate = 0.15;\n\nWhat is the correct description of the error?",
    "options": [
      "Runtime error: variables declared with final cannot change at runtime.",
      "Compile-time error: final variables cannot be reassigned.",
      "No error: the second assignment simply overwrites the first.",
      "Warning only: final is advisory, not enforced."
    ],
    "correctOption": 1,
    "explanation": "final is enforced at compile time. The Dart compiler rejects any attempt to reassign a final variable — the program will not build. This is stronger than a warning; it is an actual error that prevents compilation."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Flutter setState",
    "question": "Look at this Flutter widget method:\n\n  void _onRatingChanged(double rating) {\n    setState(() {\n      _rating = rating;\n      _voted = true;\n    });\n  }\n\nHow many variables trigger a UI rebuild?",
    "options": [
      "Zero — setState() requires each variable to be in its own call.",
      "One — only the last variable in setState() triggers a rebuild.",
      "Two — both _rating and _voted are updated inside the single setState() call.",
      "Unlimited — all variables in the app are rebuilt."
    ],
    "correctOption": 2,
    "explanation": "You can update multiple variables inside a single setState() call. Flutter schedules one rebuild after the setState() closure runs, and all changes (_rating and _voted) are reflected in that single rebuild. There is no need to call setState() twice."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Code Reading — Flutter setState",
    "question": "A student writes two versions of an update function:\n\n  Version A:\n  void increase() { _score++; }\n\n  Version B:\n  void increase() { setState(() { _score++; }); }\n\nWhat is the behavioral difference when the user taps a button?",
    "options": [
      "No difference — both update the UI correctly.",
      "Version A updates the variable only; Version B updates the variable and triggers a UI redraw.",
      "Version B is slower because setState() compiles the closure at runtime.",
      "Version A is correct; setState() is only for complex widgets."
    ],
    "correctOption": 1,
    "explanation": "Both versions correctly change the _score variable in memory. The critical difference is that Version B tells Flutter to rebuild the widget tree by calling setState(). Without that notification, as in Version A, the score increments silently in memory but the screen keeps showing the old number."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Dart vs Java",
    "question": "A Java developer writes this when learning Dart:\n\n  boolean isReady = true;\n\nWhat is wrong with this code in Dart?",
    "options": [
      "Nothing — Dart accepts both 'bool' and 'boolean'.",
      "Dart uses 'bool', not 'boolean'. The code will not compile.",
      "The variable name 'isReady' is a reserved word in Dart.",
      "Dart does not support boolean variables at all."
    ],
    "correctOption": 1,
    "explanation": "In Java the keyword is 'boolean', but in Dart it is 'bool'. This is one of the small but important differences between the two languages. A Java developer must remember to use 'bool' when writing Dart code."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Dart vs Java",
    "question": "Which feature does Dart have that Java does NOT natively support in standard method signatures?",
    "options": [
      "Return types on functions.",
      "Named optional parameters with default values.",
      "Method overloading.",
      "The ability to declare variables as final."
    ],
    "correctOption": 1,
    "explanation": "Java does not natively support named parameters or default parameter values in method signatures. Dart's {paramName = defaultValue} syntax for optional named parameters is a language feature Java lacks (though it can be partially simulated with builder patterns). Both languages support return types, final, and Java uses overloading instead of defaults."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Dart vs Java",
    "question": "How does Dart's approach to null safety compare to traditional Java?",
    "options": [
      "Java has built-in null safety with ? annotations; Dart does not.",
      "Both Dart and Java treat all variables as nullable by default.",
      "In Dart, variables are non-nullable by default; you must explicitly opt in to null with ?. Java variables are nullable by default.",
      "Dart and Java handle null identically."
    ],
    "correctOption": 2,
    "explanation": "Traditional Java treats object references as nullable by default — any object variable can be null unless you discipline yourself. Dart's null safety inverts this: variables are non-nullable by default, and you must explicitly declare String? (or any type?) to allow null. This makes null-related bugs far easier to catch at compile time."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A student is building a temperature converter app. The user drags a Slider for Celsius (0.0 to 100.0) and a Text shows the Fahrenheit equivalent. The text never updates when the slider moves. Which code pattern is missing?",
    "options": [
      "The Text widget is missing a refresh() call.",
      "The Slider must use an int value, not a double.",
      "The onChanged callback must update the Celsius variable inside setState().",
      "The Fahrenheit formula must be inside the Slider's value parameter."
    ],
    "correctOption": 2,
    "explanation": "When the user moves the slider, onChanged fires and passes the new Celsius value to a function. That function must wrap the variable update in setState(). Without setState(), the Celsius variable changes in memory but Flutter never rebuilds the widget tree, so the Fahrenheit Text widget keeps showing the old value."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A developer wants to store a user's loyalty points score that will be updated frequently as they shop. Which declaration is most appropriate?",
    "options": [
      "final int points = 0;",
      "int _points = 0; (private, inside a StatefulWidget class)",
      "String points = \"0\";",
      "const int points = 0;"
    ],
    "correctOption": 1,
    "explanation": "Points must change frequently (as the user shops), so final and const are wrong — both prevent reassignment. It should be a number (int), not a String. Making it private (_points) inside the widget class is the correct Flutter pattern for state that belongs to one widget and changes over time via setState()."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A developer has a settings screen with a Slider for text size (12.0 to 36.0). After moving the slider, they want the sample text below to update immediately. Which implementation is correct?",
    "options": [
      "void onSizeChanged(double size) { _fontSize = size; }",
      "void onSizeChanged(double size) { setState(() { _fontSize = size; }); }",
      "void onSizeChanged(String size) { _fontSize = double.parse(size); }",
      "void onSizeChanged() { _fontSize = Slider.value; }"
    ],
    "correctOption": 1,
    "explanation": "The onChanged callback for a Slider always receives a double. The function must accept a double parameter and update the state variable inside setState() to trigger a rebuild. Option A misses setState(), so the Text won't update. Options C and D have incorrect signatures or reference non-existent properties."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "You are building a quiz app. You want a constant that defines the number of questions and should NEVER change during the app's lifetime. Which declaration is best?",
    "options": [
      "int totalQuestions = 10;",
      "var totalQuestions = 10;",
      "final totalQuestions = 10;",
      "double totalQuestions = 10;"
    ],
    "correctOption": 2,
    "explanation": "final is ideal for values that are set once and never changed. Using int or var allows accidental reassignment elsewhere in the code. final makes the intent explicit and the compiler enforces it — any attempt to change totalQuestions will be caught at compile time."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A Flutter app has a 'Like' button that increments a counter displayed next to it. A student connects it this way:\n\n  ElevatedButton(onPressed: _incrementLikes, child: Text(\"Like\"))\n\n  void _incrementLikes() { _likes++; }\n\nThe button does nothing visually. What is the fix?",
    "options": [
      "Rename the function to 'onPressed'.",
      "Change ElevatedButton to a different widget type.",
      "Wrap _likes++ inside setState().",
      "Declare _likes as final."
    ],
    "correctOption": 2,
    "explanation": "_likes is being incremented correctly but Flutter is not notified that state changed. Wrapping _likes++ inside setState(() { _likes++; }) signals Flutter to rebuild the widget, causing the displayed count to visually update. The button connection and widget choice are fine."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A developer needs a function to draw a shape that can optionally receive a color, border width, and fill style, but always needs the shape name. Which signature is correct in Dart?",
    "options": [
      "void drawShape(String name, Color color, double border, String fill) { }",
      "void drawShape({String name, Color color, double border, String fill}) { }",
      "void drawShape(String name, {Color color = Colors.black, double border = 1.0, String fill = 'solid'}) { }",
      "void drawShape(String name = '', Color color = Colors.black, double border = 1.0) { }"
    ],
    "correctOption": 2,
    "explanation": "The shape name is required and positional (always needed, no default). Color, border, and fill are optional customizations with defaults. Dart allows mixing: a required positional parameter first, then optional named parameters inside { }. Option B would make name optional too (wrong), and Option D uses positional default syntax which Dart does not support that way."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Scenario Application",
    "question": "A music app has variables _volume (used by Slider) and _songTitle (shown in a header). Both are in the same StatefulWidget. When the slider is moved and setState() updates _volume, what happens to the header showing _songTitle?",
    "options": [
      "_songTitle is cleared to empty string because setState() resets all variables.",
      "The header widget may be rebuilt but since _songTitle has not changed, its displayed value remains the same.",
      "The header crashes because it was not inside setState().",
      "_songTitle automatically syncs to match _volume."
    ],
    "correctOption": 1,
    "explanation": "setState() triggers a rebuild of the widget tree, but Flutter is smart — it only actually changes what is different. Since _songTitle was not modified, the header widget rebuilds but renders identically. No visual change occurs for widgets whose inputs did not change."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Edge Cases & Tricky Code",
    "question": "What is wrong with this Dart code?\n\n  void printGreeting({String name}) {\n    print('Hello $name');\n  }",
    "options": [
      "Named parameters cannot be used with void functions.",
      "In null-safe Dart, a named parameter must either have a default value or be marked as 'required' — a String without either is not allowed.",
      "The $ syntax for string interpolation is invalid in Dart.",
      "Nothing — this code is perfectly valid."
    ],
    "correctOption": 1,
    "explanation": "In Dart's null-safe mode, a named parameter without a default value and without 'required' creates a problem: if the caller omits name, it would be null, but String is non-nullable. You must either add 'required' (required String name), add a default (String name = ''), or make it nullable (String? name = null)."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Edge Cases & Tricky Code",
    "question": "A student declares:\n\n  var items = [];\n  items.add(\"apple\");\n  items.add(42);\n\nWhat happens in Dart?",
    "options": [
      "A compile error — a list can only hold one type.",
      "Both succeed — var without a type annotation creates a dynamic list.",
      "A runtime crash when 42 is added because the list was inferred as List<String>.",
      "A compile error on the second add because lists are immutable."
    ],
    "correctOption": 1,
    "explanation": "When you write var items = [], Dart infers the type as List<dynamic>, meaning it can hold any type. Both a String and an int can be added without error. If you had written var items = ['apple'], Dart would infer List<String> and the add(42) would fail."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Edge Cases & Tricky Code",
    "question": "A developer tries:\n\n  double _progress = 0.0;\n\n  void _advance() {\n    if (_progress < 99) {\n      setState(() { _progress++; });\n    }\n  }\n\nWhat potential issue does the guard condition solve?",
    "options": [
      "It prevents _progress from ever reaching 0.",
      "It prevents _progress from exceeding the widget's maximum expected value and causing a bounds error.",
      "It ensures setState() is only called an even number of times.",
      "It prevents the app from crashing when the device is rotated."
    ],
    "correctOption": 1,
    "explanation": "Without the guard, _advance() could increment _progress beyond any maximum that a related widget (like a Slider or ProgressBar) expects. For example, a Slider with max: 100 would crash if _progress exceeded 100. The if (_progress < 99) check ensures the increment stops before crossing the boundary."
  },
  {
    "quizTitle": "Mobile GUI Programming — Dart & Flutter",
    "category": "Edge Cases & Tricky Code",
    "question": "A student writes:\n\n  Slider(value: _level, onChanged: setLevel())\n\nThe app builds but the slider is frozen and cannot be moved. What is the bug?",
    "options": [
      "Slider requires a min and max to function.",
      "setLevel() is being called immediately (function invocation), rather than passing the function reference setLevel.",
      "The variable _level must be declared as final for Slider to use it.",
      "Slider does not support named parameters."
    ],
    "correctOption": 1,
    "explanation": "onChanged expects a function reference — a function that it will call later when the user moves the slider. Writing setLevel() with parentheses calls the function immediately at build time and passes its return value (likely void or null) to onChanged. This disables the slider. The correct syntax is onChanged: setLevel (no parentheses)."
  }
];