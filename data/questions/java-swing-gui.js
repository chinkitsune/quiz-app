//data/questions/java-swing-gui.js

// ============================================================
//  questions.js  –  Quiz data for Java Swing GUI (CST8284)
//  Week 11 — Drop this file alongside index.html to run the quiz.
//  Swap this file to reuse the quiz shell with different content.
// ============================================================




module.exports =
[
  {
    quizTitle: 'Java Swing GUI',
    question: "A student argues that a command-line calculator is better than a GUI one because 'typing is faster than clicking.' Setting that aside, what is the fundamental difference in how users interact with a GUI versus a text-based interface?",
    options: [
      'GUI programs run faster because they bypass the operating system.',
      'GUI programs use graphical icons and visual elements rather than typed commands or text navigation.',
      'GUI programs only work on Windows; text interfaces are cross-platform.',
      'GUI programs require more RAM because they use the internet.'
    ],
    correctOption: 1,
    explanation: 'A GUI lets users interact through graphical icons, buttons, and visual elements using a mouse, rather than by typing command labels or navigating text menus. This lowers the barrier of entry but both paradigms have valid use cases.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer is choosing between writing raw OS-level UI code and using Java Swing. Which statement best describes why Swing is preferred for Java GUIs?',
    options: [
      'Swing compiles to native machine code, making it faster than AWT.',
      'Swing is a GUI widget toolkit built on top of AWT that provides extensible UI components, making it easier to build Java front-end applications.',
      'Swing replaces the JVM so that GUI programs do not need Java installed.',
      'Swing only works with JavaFX and cannot be used independently.'
    ],
    correctOption: 1,
    explanation: "Swing is a rich GUI widget toolkit that sits on top of AWT (Abstract Window Toolkit). It provides ready-made, extensible components (buttons, text fields, menus, etc.) so developers don't have to build UI elements from scratch using low-level OS APIs."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer builds a Swing app on Windows. A colleague opens the same <code>.jar</code> on Linux and notices the widgets look identical. Which Swing feature explains this?',
    options: [
      'Rich Controls — Swing provides advanced widgets not available on Linux.',
      'Light Weight — Swing renders components using pure Java code instead of native OS calls, making it OS-independent.',
      'Pluggable look-and-feel — the look is changed automatically for each OS.',
      'High Customization — the developer manually coded Linux-specific styles.'
    ],
    correctOption: 1,
    explanation: 'Swing components are <strong>lightweight</strong> — they are rendered using pure Java code rather than underlying OS API calls. This means the visual output is consistent across different operating systems, unlike AWT components which delegate drawing to the OS.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: "A product manager asks: 'Can we change the entire look of our Swing app at runtime without restarting it?' Which Swing feature directly supports this?",
    options: [
      'Light Weight rendering.',
      'Rich Controls library.',
      'Pluggable look-and-feel.',
      'Model-View-Controller architecture.'
    ],
    correctOption: 2,
    explanation: "<strong>Pluggable look-and-feel</strong> allows a Swing application's visual appearance to be switched at runtime by choosing from available look-and-feel values. The UI can change from a metal theme to a system-native look without modifying the underlying business logic."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: "Swing's architecture follows which design pattern to separate data, presentation, and user interaction?",
    options: [
      'Singleton Pattern',
      'Observer Pattern',
      'Model-View-Controller (MVC)',
      'Factory Pattern'
    ],
    correctOption: 2,
    explanation: "Swing follows the <strong>Model-View-Controller (MVC)</strong> pattern: the Model holds data, the View renders the UI, and the Controller handles user input. This separation means the highest-level API doesn't need to contain data directly."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A student creates a beautiful layout inside a <code>JPanel</code> but nothing appears on screen when the program runs. What is the most likely cause?',
    options: [
      'JPanel components are invisible by default and require <code>setVisible(true)</code>.',
      'The <code>JPanel</code> was never added to a <code>JFrame</code>, which is the top-level window that actually appears on screen.',
      'JPanel cannot contain layout managers.',
      'The program needs to call <code>panel.show()</code> to display it.'
    ],
    correctOption: 1,
    explanation: 'A <code>JPanel</code> is a container for organising components, but it is not a top-level window. It must be added to a <code>JFrame</code> (which has the title bar, border, and window decorations) for anything to be displayed on screen.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Which statement correctly describes the difference between <code>JFrame</code> and <code>JPanel</code>?',
    options: [
      '<code>JFrame</code> is a container for organising components; <code>JPanel</code> is a top-level window.',
      '<code>JFrame</code> represents a window with decorations (border, title bar, buttons); <code>JPanel</code> is an area within a window for organising controls and visuals.',
      'Both are identical — <code>JPanel</code> is just a lighter version of <code>JFrame</code>.',
      '<code>JFrame</code> only holds menus; <code>JPanel</code> holds everything else.'
    ],
    correctOption: 1,
    explanation: '<code>JFrame</code> is the top-level framed window — it has a title bar, border, and close/minimize buttons. <code>JPanel</code> is a lightweight container used inside a window to group and arrange buttons, labels, text fields, and custom-painted visuals.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer wants two buttons to appear side-by-side in the north of a <code>JFrame</code>. What is the correct approach?',
    options: [
      'Add both buttons directly with <code>frame.add(btn1, BorderLayout.NORTH)</code> and <code>frame.add(btn2, BorderLayout.NORTH)</code>.',
      'Add both buttons to a <code>JPanel</code> first, then add that panel to the north of the frame.',
      'Use <code>GridLayout(1, 2)</code> on the <code>JFrame</code> directly.',
      'Set the <code>JFrame</code> layout to <code>FlowLayout</code> and both buttons will line up automatically.'
    ],
    correctOption: 1,
    explanation: 'Each region of <code>BorderLayout</code> can only hold one component. To place multiple buttons in one region, add them to a <code>JPanel</code> first (which uses <code>FlowLayout</code> by default, laying them out side-by-side), then add that panel to the desired region.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer adds a component to a <code>JFrame</code> without specifying a layout. Which layout manager is used by default?',
    options: [ 'FlowLayout', 'GridLayout', 'BorderLayout', 'BoxLayout' ],
    correctOption: 2,
    explanation: '<code>JFrame</code> uses <strong>BorderLayout</strong> by default. Components are placed into one of five regions: NORTH, SOUTH, EAST, WEST, or CENTER. If a region is not specified, components go to CENTER by default.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates a <code>JPanel</code> and adds three labels without setting a layout. How are they arranged?',
    options: [
      'In a single column top-to-bottom (GridLayout default).',
      'In the NORTH, CENTER, and SOUTH regions (BorderLayout default).',
      'Side-by-side left-to-right, wrapping if needed (FlowLayout default).',
      'Randomly positioned since no layout is specified.'
    ],
    correctOption: 2,
    explanation: "<code>JPanel</code> uses <strong>FlowLayout</strong> by default. Components are placed left-to-right in a row and wrap to the next line if the panel is too narrow. This is different from <code>JFrame</code>'s default of BorderLayout."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer builds a calculator keypad. The buttons must be arranged in a 4-row, 3-column grid where each cell is the same size. Which layout is best?',
    options: [
      'BorderLayout — it supports up to 5 regions.',
      'FlowLayout — it arranges components left to right.',
      'GridLayout — it places components in equal-sized cells in a table arrangement.',
      'BoxLayout — it stacks components vertically.'
    ],
    correctOption: 2,
    explanation: '<strong>GridLayout</strong> arranges components in equal-sized cells in a specified number of rows and columns. <code>new GridLayout(4, 3)</code> creates a 4×3 grid. Components are added left-to-right, top-to-bottom — ideal for a calculator keypad.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What does this code produce? <pre><code>JPanel p = new JPanel();\n' +
      'p.setLayout(new GridLayout(4, 3));\n' +
      'p.add(btn7); p.add(btn8); p.add(btn9);\n' +
      'p.add(btn4); p.add(btn5); p.add(btn6);</code></pre>',
    options: [
      'Three buttons in one row, then three in the next — filled left to right, top to bottom.',
      'Buttons placed randomly in a 4×3 grid.',
      'All six buttons stacked vertically in one column.',
      'Buttons placed right to left in each row.'
    ],
    correctOption: 0,
    explanation: '<code>GridLayout</code> fills cells from the upper-left, moving left-to-right across each row, then down to the next row. So btn7, btn8, btn9 occupy the first row, btn4, btn5, btn6 occupy the second — exactly like a calculator keypad layout.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer wants three buttons stacked vertically, one above the other. Which layout and configuration achieves this?',
    options: [
      '<code>new FlowLayout()</code> with three buttons added.',
      '<code>new GridLayout(3, 1)</code> — three rows, one column.',
      '<code>new BorderLayout()</code> with buttons in NORTH, CENTER, SOUTH.',
      '<code>new GridLayout(1, 3)</code> — one row, three columns.'
    ],
    correctOption: 1,
    explanation: '<code>GridLayout(3, 1)</code> creates a grid with 3 rows and 1 column, stacking all components vertically. <code>BorderLayout</code> could also work (NORTH/CENTER/SOUTH) but the buttons would stretch to fill each region. <code>GridLayout(1, 3)</code> would place them side-by-side.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'In a <code>BorderLayout</code>, what happens to components added to the NORTH and SOUTH regions?',
    options: [
      'They are clipped to a fixed 50-pixel height.',
      'They expand horizontally to fill the full width of the container.',
      'They expand to fill all available space in both directions.',
      'They are hidden unless the window is maximized.'
    ],
    correctOption: 1,
    explanation: "In <code>BorderLayout</code>, NORTH and SOUTH components expand <strong>horizontally</strong> to fill the container's full width but retain their preferred height. EAST and WEST expand vertically. The CENTER component expands in both directions to fill remaining space."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer adds two components to the CENTER of a <code>BorderLayout</code>. What happens?',
    options: [
      'Both components are displayed side-by-side in the center.',
      'Only the last component added to CENTER is displayed — it replaces the previous one.',
      'Both components overlap on top of each other.',
      'A <code>LayoutException</code> is thrown.'
    ],
    correctOption: 1,
    explanation: 'Each region of <code>BorderLayout</code> holds exactly one component. Adding a second component to the same region replaces the first. No exception is thrown — the first component simply becomes invisible. Use a <code>JPanel</code> to group multiple components in one region.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A UI design requires a calculator with a display at the top and a 4×3 button grid below. Which approach correctly builds this?',
    options: [
      'Add both the display label and the button panel directly to a <code>JFrame</code> using <code>FlowLayout</code>.',
      'Create a button panel with <code>GridLayout(4,3)</code>, add it to CENTER of a <code>BorderLayout</code> panel, and add the display label to NORTH of the same panel.',
      'Use a single <code>GridLayout(5, 3)</code> for both the display and buttons.',
      'Add the display and buttons to separate <code>JFrame</code> instances.'
    ],
    correctOption: 1,
    explanation: 'Nesting panels is key to complex layouts. A <code>BorderLayout</code> panel holds the display (NORTH) and the button grid (CENTER). The button grid itself is a <code>JPanel</code> with <code>GridLayout(4,3)</code>. Each panel manages its own sub-layout independently.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Why are <code>JPanel</code> borders invisible by default, and why is that useful for layout design?',
    options: [
      'Invisible borders save memory — borders are expensive to render.',
      'It allows developers to use as many panels as needed to organize components without visual clutter from borders.',
      'Invisible borders prevent users from accidentally resizing panels.',
      'Java law requires all internal containers to be borderless.'
    ],
    correctOption: 1,
    explanation: '<code>JPanel</code> borders are invisible by default so you can use panels purely as structural organisers without adding visual noise. When you <em>want</em> a visible grouping boundary (e.g., around radio buttons), you explicitly add a border like <code>TitledBorder</code>.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'When designing a complex Swing UI on paper first, what is the recommended strategy for identifying which layout manager to use for a group?',
    options: [
      'Always use <code>BorderLayout</code> for every panel, regardless of content.',
      'Use <code>FlowLayout</code> for horizontal component groups, and <code>GridLayout</code> with one column for vertical groups.',
      'Use <code>null</code> layout and manually set absolute positions for all components.',
      'Use <code>GridLayout</code> for all groups to ensure consistent sizing.'
    ],
    correctOption: 1,
    explanation: 'When sketching a UI, identify adjacent components: if they flow left-to-right, use <code>FlowLayout</code>; if they stack top-to-bottom, use a <code>GridLayout</code> with one column. Then group those groups together into larger blobs using an outer layout.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer builds a complex frame and considers putting all component setup code in the <code>main</code> method. What is the better approach?',
    options: [
      'Keep it in <code>main</code> — all GUI code should be in one place.',
      'Create a subclass of <code>JFrame</code>, store components as instance variables, and initialize them in the constructor with helper methods.',
      'Use a static utility class with static methods for each component.',
      'Place each component in its own separate class file.'
    ],
    correctOption: 1,
    explanation: 'Subclassing <code>JFrame</code> is the preferred pattern: store components as instance variables (so helper methods can access them), initialize them in the constructor, and break setup into private helper methods. This keeps code organized and maintainable.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'In a <code>JFrame</code> subclass, why is the frame size typically set in the <strong>constructor</strong> rather than in a helper method?',
    options: [
      'Helper methods cannot call <code>setSize()</code>.',
      "The constructor runs first and is the natural place to configure the window's fundamental properties so the frame is correctly sized when shown.",
      'Setting size in the constructor prevents the user from resizing the window.',
      'Java requires <code>setSize()</code> to be called before any components are added.'
    ],
    correctOption: 1,
    explanation: 'The constructor is the right place for fundamental window configuration like <code>setSize()</code> — it ensures the frame is properly set up before any code calls <code>setVisible(true)</code>. Helper methods can organize component creation, but frame dimensions belong in the constructor.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Consider the following pattern: <pre><code>public class AppFrame extends JFrame {\n' +
      '  private JButton saveBtn;\n' +
      '  private JLabel statusLabel;\n' +
      '  public AppFrame() {\n' +
      '    createComponents();\n' +
      '    setSize(400, 300);\n' +
      '  }\n' +
      '  private void createComponents() { ... }\n' +
      '}</code></pre>Why are <code>saveBtn</code> and <code>statusLabel</code> declared as <strong>instance variables</strong> rather than local variables inside <code>createComponents()</code>?',
    options: [
      'Local variables cannot hold Swing component objects.',
      'Instance variables allow other methods in the class (like event listeners) to access and update the components after creation.',
      'Swing requires all components to be declared as instance variables.',
      'It prevents garbage collection of the components.'
    ],
    correctOption: 1,
    explanation: 'Storing components as instance variables makes them accessible throughout the class — including from event listener methods that need to read or update them later (e.g., updating <code>statusLabel</code> after <code>saveBtn</code> is clicked). Local variables would go out of scope after <code>createComponents()</code> returns.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates a custom painted component (<code>CarComponent</code>) and adds it to a panel. The panel appears to have an empty space where the car should be. What is the most likely cause?',
    options: [
      'Custom components must extend <code>JLabel</code>, not <code>JComponent</code>.',
      'The default size of a custom component is 0×0 pixels, so it is invisible. <code>setPreferredSize()</code> must be called to give it dimensions.',
      'Painted components must be added directly to a <code>JFrame</code>, not a <code>JPanel</code>.',
      'The component needs to call <code>repaint()</code> in its constructor.'
    ],
    correctOption: 1,
    explanation: "Custom painted components have a default preferred size of 0×0 pixels — they are invisible even if added correctly. You must call <code>setPreferredSize(new Dimension(width, height))</code> to give the layout manager something to work with. Standard components like <code>JButton</code> don't have this problem."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Which call correctly sets the preferred display size of a custom component to 200×150 pixels?',
    options: [
      '<code>component.setSize(200, 150);</code>',
      '<code>component.resize(200, 150);</code>',
      '<code>component.setPreferredSize(new Dimension(200, 150));</code>',
      '<code>component.setBounds(0, 0, 200, 150);</code>'
    ],
    correctOption: 2,
    explanation: '<code>setPreferredSize(new Dimension(w, h))</code> is the correct method for telling the layout manager the desired size. <code>setSize()</code> sets the actual size but layout managers may override it. <code>setBounds()</code> is used with null layouts, and <code>resize()</code> is deprecated.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A form needs a single-line input for a username and a multi-line input for a biography. Which Swing components should be used respectively?',
    options: [
      '<code>JTextArea</code> for username, <code>JTextField</code> for biography.',
      '<code>JTextField</code> for username, <code>JTextArea</code> for biography.',
      '<code>JLabel</code> for username, <code>JTextField</code> for biography.',
      '<code>JTextField</code> for both, using different widths.'
    ],
    correctOption: 1,
    explanation: '<code>JTextField</code> is a single-line text input — appropriate for short inputs like usernames. <code>JTextArea</code> supports multiple lines — appropriate for longer content like biographies. If the text exceeds the visible area, a <code>JScrollPane</code> should wrap the <code>JTextArea</code>.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates: <code>JTextField nameField = new JTextField(20);</code>. What does the argument <code>20</code> represent?',
    options: [
      'The maximum number of characters the field can hold.',
      'The preferred display width of the field in columns (characters).',
      'The font size in points.',
      'The pixel width of the field.'
    ],
    correctOption: 1,
    explanation: 'The integer argument to <code>JTextField(columns)</code> sets the <strong>preferred display width</strong> in columns — roughly the number of average-width characters visible. If the user types more than the visible width, the text scrolls left. It does NOT limit the total number of characters.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'An action listener needs to read the text a user typed into <code>emailField</code> and convert it to a number for a calculation. Which code is correct?',
    options: [
      '<code>int val = emailField.getValue();</code>',
      '<code>int val = Integer.parseInt(emailField.getText());</code>',
      '<code>int val = emailField.getInt();</code>',
      '<code>int val = (int) emailField.getText();</code>'
    ],
    correctOption: 1,
    explanation: '<code>getText()</code> always returns a <code>String</code>. To convert to a numeric type, you wrap it: <code>Integer.parseInt(field.getText())</code> for integers, or <code>Double.parseDouble(field.getText())</code> for decimals. Direct casting a <code>String</code> to <code>int</code> is not valid Java.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer wants a <code>JTextArea</code> that displays a running log which users should not be able to edit. Which method call prevents editing?',
    options: [
      '<code>textArea.setReadOnly(true);</code>',
      '<code>textArea.lock();</code>',
      '<code>textArea.setEditable(false);</code>',
      '<code>textArea.disable();</code>'
    ],
    correctOption: 2,
    explanation: '<code>setEditable(false)</code> is inherited from <code>JTextComponent</code> (the common superclass of both <code>JTextField</code> and <code>JTextArea</code>) and makes the component read-only. The user can still select and copy text, but cannot modify it.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer needs to add new lines to a <code>JTextArea</code> log without replacing existing content. Which method is correct?',
    options: [
      '<code>textArea.setText(newLine);</code>',
      '<code>textArea.append(newLine + "\\n");</code>',
      '<code>textArea.addLine(newLine);</code>',
      '<code>textArea.insert(newLine, 0);</code>'
    ],
    correctOption: 1,
    explanation: '<code>append(String)</code> is declared in <code>JTextArea</code> (not in the parent <code>JTextComponent</code>) and adds text to the <em>end</em> of existing content. <code>setText()</code> would replace all existing text. Using <code>"\\n"</code> ensures each entry appears on its own line.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Which class is the common superclass of both <code>JTextField</code> and <code>JTextArea</code>, and what key methods does it provide?',
    options: [
      '<code>JComponent</code> — provides <code>setFont()</code> and <code>setColor()</code>.',
      '<code>JTextComponent</code> — provides <code>setText()</code>, <code>getText()</code>, and <code>setEditable()</code>.',
      '<code>JTextBase</code> — provides <code>append()</code> and <code>clear()</code>.',
      '<code>JInputField</code> — provides <code>getValue()</code> and <code>setValue()</code>.'
    ],
    correctOption: 1,
    explanation: '<code>JTextComponent</code> is the shared superclass. It declares <code>setText()</code>, <code>getText()</code>, and <code>setEditable()</code>, which are inherited by both <code>JTextField</code> and <code>JTextArea</code>. The <code>append()</code> method is only in <code>JTextArea</code>.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer wraps a <code>JTextArea</code> in a <code>JScrollPane</code> like this: <code>new JScrollPane(textArea)</code>. What does this accomplish?',
    options: [
      'It prevents the text area from being editable.',
      'It adds scroll bars to the text area so users can scroll through content that exceeds the visible area.',
      'It makes the text area expand to fill the entire window automatically.',
      'It enables syntax highlighting in the text area.'
    ],
    correctOption: 1,
    explanation: '<code>JScrollPane</code> wraps any component and automatically adds vertical and/or horizontal scroll bars when content exceeds the visible area. Without it, a <code>JTextArea</code> that overflows simply clips the extra content with no way to see it.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A survey form asks users to select their <strong>one</strong> preferred programming language from: Java, Python, C++, JavaScript. Which component is most appropriate?',
    options: [
      '<code>JCheckBox</code> — for selecting one option.',
      '<code>JRadioButton</code> with a <code>ButtonGroup</code> — for mutually exclusive single selection.',
      '<code>JTextField</code> — the user can type their choice.',
      '<code>JTextArea</code> — for writing a detailed preference.'
    ],
    correctOption: 1,
    explanation: '<code>JRadioButton</code> components placed in a <code>ButtonGroup</code> enforce mutual exclusivity — selecting one automatically deselects the others. This is ideal when exactly one option must be chosen. <code>JCheckBox</code> allows multiple selections simultaneously.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A pizza order form lets customers pick toppings. They can select Pepperoni, Mushrooms, and Olives <strong>all at once</strong>. Which component is appropriate?',
    options: [
      '<code>JRadioButton</code> — for mutually exclusive single selection.',
      '<code>JComboBox</code> — for selecting from a dropdown list.',
      '<code>JCheckBox</code> — for independent binary choices that are not mutually exclusive.',
      '<code>JTextField</code> — the user can type all toppings.'
    ],
    correctOption: 2,
    explanation: "<code>JCheckBox</code> is for binary, non-exclusive choices. Each checkbox is independent — checking 'Pepperoni' does not uncheck 'Mushrooms'. This is exactly right for pizza toppings. Radio buttons would only allow one topping at a time."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What is the critical difference in appearance between a <code>JRadioButton</code> and a <code>JCheckBox</code>?',
    options: [
      'Radio buttons are square with a check mark; check boxes are round with a dot.',
      'Radio buttons are round with a filled dot when selected; check boxes are square with a check mark when selected.',
      'They look identical — the difference is only in behavior, not appearance.',
      'Check boxes use color to indicate selection; radio buttons use shape.'
    ],
    correctOption: 1,
    explanation: 'Radio buttons are <strong>round</strong> and show a <strong>black dot</strong> when selected. Check boxes are <strong>square</strong> and show a <strong>check mark</strong> when selected. These distinct visual cues help users understand the selection behavior before they interact.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates three radio buttons but forgets to add them to a <code>ButtonGroup</code>. What happens when the user clicks them?',
    options: [
      'A <code>NullPointerException</code> is thrown because the group is missing.',
      'All three buttons can be selected simultaneously — they lose their mutual exclusivity.',
      'Only the first button works; the others are disabled.',
      'The program automatically creates a <code>ButtonGroup</code> at runtime.'
    ],
    correctOption: 1,
    explanation: '<code>ButtonGroup</code> is what enforces mutual exclusivity. Without it, each radio button acts as an independent toggle — you can select all three at once. The buttons still display correctly, but the expected radio-button behavior is completely broken.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'How do you check whether a radio button called <code>largeButton</code> is currently selected?',
    options: [
      '<code>largeButton.getState() == true</code>',
      '<code>largeButton.isSelected()</code>',
      '<code>largeButton.isChecked()</code>',
      '<code>largeButton.getValue() == 1</code>'
    ],
    correctOption: 1,
    explanation: '<code>isSelected()</code> returns <code>true</code> if the radio button (or checkbox) is currently selected. This same method works for both <code>JRadioButton</code> and <code>JCheckBox</code>. There is no <code>isChecked()</code> or <code>getState()</code> in Swing.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A settings panel offers 50 available time zones to choose from. A developer considers using 50 radio buttons. What is a better alternative and why?',
    options: [
      'Use 50 <code>JCheckBox</code> items — they take up less space.',
      'Use a <code>JComboBox</code> — it displays many options compactly as a dropdown without consuming excessive screen space.',
      'Use a <code>JTextField</code> — the user can type the zone.',
      'Use a <code>JTextArea</code> listing all zones — the user clicks the desired line.'
    ],
    correctOption: 1,
    explanation: "A <code>JComboBox</code> shows a compact dropdown — all 50 options are accessible without consuming space for 50 visible buttons. The trade-off is that users can't see all options simultaneously, but for large sets this is the right space-efficiency choice."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer retrieves the selected item from a <code>JComboBox</code> named <code>colorCombo</code>. Why is a cast sometimes needed?',
    options: [
      '<code>getSelectedItem()</code> returns a primitive <code>int</code> index.',
      '<code>getSelectedItem()</code> returns <code>Object</code> because combo boxes can store any type, so casting to the expected type (e.g., <code>String</code>) is required.',
      '<code>getSelectedItem()</code> throws a <code>ClassCastException</code> for non-numeric types.',
      'Casts are never needed — Swing handles type conversion automatically.'
    ],
    correctOption: 1,
    explanation: '<code>JComboBox.getSelectedItem()</code> returns <code>Object</code> because combo boxes can hold objects of any type. To use it as a <code>String</code>, you must cast: <code>(String) colorCombo.getSelectedItem()</code>. If the combo box contains custom objects, cast accordingly.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What is the key behavioral difference between a <code>JComboBox</code> and a set of radio buttons for selecting one item from many?',
    options: [
      'Radio buttons allow multiple selections; a combo box allows only one.',
      'A combo box shows all options only when opened (dropdown), saving space; radio buttons keep all options permanently visible.',
      'A combo box generates no events; radio buttons generate ActionEvents.',
      'Radio buttons are limited to 10 items; a combo box is unlimited.'
    ],
    correctOption: 1,
    explanation: 'Both enforce single selection, but a combo box collapses to show only the selected item until opened. Radio buttons always show all options, consuming space proportional to the number of choices. For many options, a combo box is far more space-efficient.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer wants code to run when a <code>JButton</code> is clicked. Which interface must the listener class implement?',
    options: [
      '<code>MouseListener</code>',
      '<code>EventListener</code>',
      '<code>ActionListener</code>',
      '<code>ButtonListener</code>'
    ],
    correctOption: 2,
    explanation: '<code>ActionListener</code> is the interface for handling action events like button clicks, menu item selections, and combo box changes. It requires implementing the <code>actionPerformed(ActionEvent e)</code> method. <code>MouseListener</code> handles mouse movements and clicks at a lower level.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Which method must be implemented by a class that implements <code>ActionListener</code>?',
    options: [
      '<code>onClick(ActionEvent e)</code>',
      '<code>handleEvent(Event e)</code>',
      '<code>actionPerformed(ActionEvent event)</code>',
      '<code>eventFired(ActionEvent e)</code>'
    ],
    correctOption: 2,
    explanation: 'The <code>ActionListener</code> interface declares exactly one method: <code>actionPerformed(ActionEvent event)</code>. This method is called automatically by Swing when the associated component (button, menu item, combo box, etc.) fires an action event.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Radio buttons, check boxes, and combo boxes all generate the same type of event when the user interacts with them. Which event type is it?',
    options: [
      '<code>MouseEvent</code>',
      '<code>ChangeEvent</code>',
      '<code>ActionEvent</code>',
      '<code>SelectionEvent</code>'
    ],
    correctOption: 2,
    explanation: 'All three choice components — <code>JRadioButton</code>, <code>JCheckBox</code>, and <code>JComboBox</code> — fire an <code>ActionEvent</code> when selected. A single <code>ActionListener</code> can handle all of them, then use <code>isSelected()</code> and <code>getSelectedItem()</code> to determine the current state.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'An <code>ActionListener</code> handles both a font-size radio button and a bold checkbox. How does the handler know which component is in what state?',
    options: [
      'The <code>ActionEvent</code> parameter contains the new value directly.',
      'The handler calls <code>isSelected()</code> on each component and <code>getSelectedItem()</code> on combo boxes to read current states.',
      'The handler must use separate listener classes for each component type.',
      "Swing passes the component's name as a <code>String</code> in the event."
    ],
    correctOption: 1,
    explanation: "A shared listener simply queries each component's current state: <code>isSelected()</code> for radio buttons and check boxes, <code>getSelectedItem()</code> for combo boxes. This avoids duplicating listener logic for every component and then updates the UI based on the combined state."
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer registers the <strong>same</strong> <code>ActionListener</code> instance on a bold checkbox, an italic checkbox, and a font-size radio button. Is this valid?',
    options: [
      'No — each component must have its own unique listener instance.',
      'No — a listener can only be attached to one component type.',
      'Yes — a single listener can be registered on multiple components and will be called whenever any of them fires an event.',
      'Yes — but only if all components are in the same <code>ButtonGroup</code>.'
    ],
    correctOption: 2,
    explanation: 'A single <code>ActionListener</code> object can be attached to multiple components. Each time any of them fires, <code>actionPerformed()</code> is called. The handler reads all component states and redraws the UI — this is a common pattern for font-viewer-style applications.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What is the correct hierarchy for building a menu structure in Swing?',
    options: [
      '<code>JMenuItem → JMenu → JMenuBar → JFrame</code>',
      '<code>JMenuBar → JMenu → JMenuItem</code> (bar contains menus, menus contain items).',
      '<code>JMenu → JMenuBar → JMenuItem → JFrame</code>',
      '<code>JFrame → JMenuItem → JMenu → JMenuBar</code>'
    ],
    correctOption: 1,
    explanation: 'The hierarchy is: <code>JFrame</code> holds a <code>JMenuBar</code>, the bar holds <code>JMenu</code> objects (e.g., File, Edit), and each menu holds <code>JMenuItem</code> objects (e.g., Open, Save, Exit). Submenus are <code>JMenu</code> objects added to a parent <code>JMenu</code>.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'How is a menu bar attached to a <code>JFrame</code>?',
    options: [
      '<code>frame.add(menuBar, BorderLayout.NORTH);</code>',
      '<code>frame.setJMenuBar(menuBar);</code>',
      '<code>frame.addMenu(menuBar);</code>',
      '<code>menuBar.attachTo(frame);</code>'
    ],
    correctOption: 1,
    explanation: '<code>setJMenuBar(JMenuBar)</code> is the dedicated method for attaching a menu bar to a frame. Using <code>add()</code> with <code>BorderLayout.NORTH</code> would place it as a regular component, disrupting the standard menu bar position and behavior.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer adds an <code>ActionListener</code> to a <code>JMenu</code> object directly. Will this work as expected for item selections?',
    options: [
      'Yes — <code>JMenu</code> fires an action event whenever any of its items is selected.',
      'No — listeners should be added to individual <code>JMenuItem</code> objects, not to <code>JMenu</code> or <code>JMenuBar</code>.',
      'Yes — but only for the first item in the menu.',
      'No — menus use <code>MenuListener</code>, not <code>ActionListener</code>.'
    ],
    correctOption: 1,
    explanation: '<code>ActionListener</code>s must be attached to individual <code>JMenuItem</code> objects — not to menus or the menu bar. A <code>JMenu</code> is just a container; the items inside it are what fire action events when selected.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: "A 'Font' menu needs a 'Style' submenu. How is a submenu created and added?",
    options: [
      'Create a <code>JMenuItem</code> with a special <code>isSubMenu = true</code> flag.',
      'Create a new <code>JMenu</code> object for the submenu and add it to the parent <code>JMenu</code> with <code>fontMenu.add(styleMenu)</code>.',
      'Use <code>JMenuBar</code> nested inside the parent menu.',
      'Submenus cannot be created in Swing — use separate top-level menus instead.'
    ],
    correctOption: 1,
    explanation: 'A submenu is simply a <code>JMenu</code> added to another <code>JMenu</code>. Since <code>JMenu</code> extends <code>JMenuItem</code>, it can be added anywhere a menu item can be added. The user sees it as an item with an arrow indicating a nested menu.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Why is it good practice to use a separate method (e.g., <code>createFaceMenu()</code>) for building each menu rather than putting everything in the constructor?',
    options: [
      'Constructors are not allowed to contain Swing code.',
      'Separate methods organise code, make it easier to read, test, and maintain, and avoid bloated constructors.',
      "It is required by Swing's API that each menu be created in its own method.",
      'It prevents <code>ActionListener</code> instances from being garbage collected.'
    ],
    correctOption: 1,
    explanation: 'Helper methods like <code>createFaceMenu()</code> are an organisational best practice — not a Swing requirement. They keep the constructor short and readable, group related logic together, and make it easier to modify or extend individual menus without affecting others.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates a <code>createFaceItem(final String name)</code> method with a local inner class listener. Why is the <code>name</code> parameter declared <code>final</code>?',
    options: [
      '<code>final</code> prevents the method from being overridden in subclasses.',
      'Local inner classes can only access <code>final</code> (or effectively final) local variables from the enclosing method.',
      '<code>final</code> makes the String immutable, preventing memory leaks.',
      'Swing requires all parameters passed to listeners to be <code>final</code>.'
    ],
    correctOption: 1,
    explanation: 'A local inner class (or anonymous class) can capture variables from its enclosing scope only if those variables are <code>final</code> or effectively final. This is because the inner class may outlive the method call; Java captures the value, not a live reference to the stack frame.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What is the advantage of using a local inner class for a menu item listener over defining a separate named class?',
    options: [
      'Local inner classes compile faster.',
      "The local inner class can directly access the enclosing method's parameters (like <code>name</code>) without needing to store them in an instance variable.",
      'Only local inner classes can implement <code>ActionListener</code>.',
      'Local inner classes automatically unregister themselves when the menu closes.'
    ],
    correctOption: 1,
    explanation: 'A local inner class defined inside <code>createFaceItem(String name)</code> can directly access <code>name</code> without passing it through a constructor. A separate named class (like <code>FaceItemListener</code> with a <code>name</code> field) would require the name to be stored and passed explicitly — more boilerplate.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What does this code display in the window? <pre><code>JPanel p = new JPanel();\n' +
      'p.setLayout(new BorderLayout());\n' +
      'p.add(new JLabel("Title"), BorderLayout.NORTH);\n' +
      'p.add(new JButton("OK"), BorderLayout.SOUTH);\n' +
      'p.add(new JTextArea(5, 20), BorderLayout.CENTER);</code></pre>',
    options: [
      'Three components stacked vertically: label, then text area, then button.',
      'A label at the top, a button at the bottom, and a text area filling the middle — separated into three border regions.',
      'All three components side-by-side in a row.',
      'Only the last component added (JTextArea) is visible.'
    ],
    correctOption: 1,
    explanation: '<code>BorderLayout</code> positions components in named regions. NORTH = top (label), SOUTH = bottom (button), CENTER = middle (text area expands to fill remaining space). This produces a classic form layout with a title, editable area, and confirm button.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'What is wrong with this code? <pre><code>JRadioButton catBtn = new JRadioButton("Cat");\n' +
      'JRadioButton dogBtn = new JRadioButton("Dog");\n' +
      'panel.add(catBtn);\n' +
      'panel.add(dogBtn);</code></pre>',
    options: [
      'Radio buttons cannot be added to a <code>JPanel</code> — they must go in a <code>JFrame</code>.',
      'The buttons are not added to a <code>ButtonGroup</code>, so both can be selected simultaneously — mutual exclusivity is missing.',
      '<code>JRadioButton</code> requires a second argument specifying whether it starts selected.',
      'Nothing is wrong — this code works correctly.'
    ],
    correctOption: 1,
    explanation: 'Without a <code>ButtonGroup</code>, radio buttons are independent toggles. The fix: <code>ButtonGroup g = new ButtonGroup(); g.add(catBtn); g.add(dogBtn);</code>. The group is not added to the panel — it only manages the mutual exclusivity relationship between the buttons.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer writes this in an <code>actionPerformed</code> method: <pre><code>String rate = rateField.getText();\n' +
      'double r = Double.parseDouble(rate);\n' +
      'resultLabel.setText("Rate: " + r);</code></pre>The user types <code>"abc"</code> in the field and clicks the button. What happens?',
    options: [
      'The label shows <code>Rate: 0.0</code> because <code>parseDouble</code> defaults to 0 for invalid input.',
      'A <code>NumberFormatException</code> is thrown because <code>"abc"</code> cannot be parsed as a double.',
      'The label shows <code>Rate: abc</code> because text fields accept strings.',
      'The program silently ignores the invalid input and does nothing.'
    ],
    correctOption: 1,
    explanation: '<code>Double.parseDouble("abc")</code> throws a <code>NumberFormatException</code> at runtime. Good practice is to wrap this in a try-catch block and show an error message to the user (e.g., using a dialog or updating the label) when invalid input is entered.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'Analyse this menu setup code and identify the error: <pre><code>JMenuBar bar = new JMenuBar();\n' +
      'JMenu fileMenu = new JMenu("File");\n' +
      'JMenuItem saveItem = new JMenuItem("Save");\n' +
      'bar.add(saveItem);\n' +
      'fileMenu.add(saveItem);\n' +
      'frame.setJMenuBar(bar);</code></pre>',
    options: [
      'The menu bar should be added with <code>frame.add(bar)</code>, not <code>setJMenuBar()</code>.',
      '<code>saveItem</code> is added directly to the menu bar instead of to <code>fileMenu</code> first; also, <code>fileMenu</code> is never added to the bar.',
      '<code>JMenuItem</code> cannot be created before <code>JMenu</code>.',
      'Nothing is wrong — this is valid Swing code.'
    ],
    correctOption: 1,
    explanation: 'Two errors: (1) <code>saveItem</code> is added directly to the bar, bypassing <code>fileMenu</code>. (2) <code>fileMenu</code> is never added to the bar. Correct order: add <code>saveItem</code> to <code>fileMenu</code>, add <code>fileMenu</code> to <code>bar</code>, set bar on frame.'
  },
  {
    quizTitle: 'Java Swing GUI',
    question: 'A developer creates a <code>JComboBox</code> like this: <pre><code>JComboBox sizeBox = new JComboBox();\n' +
      'sizeBox.addItem("Small");\n' +
      'sizeBox.addItem("Medium");\n' +
      'sizeBox.addItem("Large");\n' +
      'String chosen = sizeBox.getSelectedItem();</code></pre>Why will this code fail to compile?',
    options: [
      '<code>JComboBox</code> cannot store <code>String</code> items.',
      '<code>getSelectedItem()</code> returns <code>Object</code>, not <code>String</code>. A cast is required: <code>(String) sizeBox.getSelectedItem()</code>.',
      '<code>addItem()</code> requires an integer index as a second argument.',
      '<code>JComboBox</code> is in the wrong package and needs a different import.'
    ],
    correctOption: 1,
    explanation: '<code>getSelectedItem()</code> returns <code>Object</code> because <code>JComboBox</code> is generic and can hold any type. Assigning it directly to a <code>String</code> variable without a cast causes a compile-time type mismatch. The fix is: <code>String chosen = (String) sizeBox.getSelectedItem();</code>.'
  }
];