// data/questions/database-plsql-cursors-and-exception-handling.js



module.exports = 
[
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'What is a Cursor?',
    question: 'When Oracle executes a SQL SELECT statement, it creates a special memory area to hold the results. What is this memory area called?',
    options: [
      'The Buffer Cache',
      'The Context Area (Active Set)',
      'The Shared Pool',
      'The Redo Log Buffer'
    ],
    correctOption: 1,
    explanation: "Oracle creates a Context Area (also called the Active Set) in memory to store the result set when a SQL statement is executed. A cursor is then used as a pointer to access and process the data stored in this area. The Buffer Cache, Shared Pool, and Redo Log Buffer are other parts of Oracle's memory architecture with different roles."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'What is a Cursor?',
    question: 'A cursor is best described as which of the following?',
    options: [
      'A permanent database object that stores query results on disk.',
      'A pointer to the result set of a query that enables row-by-row processing.',
      'A special index that speeds up SELECT queries.',
      'A type of stored procedure that runs SELECT statements.'
    ],
    correctOption: 1,
    explanation: 'A cursor is a pointer to the result set (active set) of a query stored in the context area. It allows a PL/SQL program to process one row at a time, advancing automatically with each FETCH. It is not a disk-based object, index, or procedure.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'What is a Cursor?',
    question: "A developer runs a PL/SQL block that fetches 500 employee records. What happens to the cursor's position after each FETCH call?",
    options: [
      'The cursor resets to the first row after each FETCH.',
      'The cursor moves to the next row in the result set automatically.',
      'The cursor stays on the same row until CLOSE is called.',
      'The cursor jumps to a random row in the result set.'
    ],
    correctOption: 1,
    explanation: 'As rows are fetched, the cursor advances automatically to the next row in the result set. This sequential, row-by-row progression is the fundamental behavior of cursors — each FETCH retrieves the current row and moves the pointer forward. Cursors do not reset, stay put, or jump randomly.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Implicit vs Explicit Cursors',
    question: 'A PL/SQL block executes an UPDATE statement that modifies several rows. Oracle processes this without any cursor-related code written by the developer. Which cursor type is being used?',
    options: [
      'Explicit cursor — the developer controls it behind the scenes.',
      'Implicit cursor — automatically created and managed by Oracle for DML and single-row SELECT statements.',
      'REF cursor — used for DML operations.',
      'No cursor is used — cursors only apply to SELECT queries.'
    ],
    correctOption: 1,
    explanation: 'Oracle automatically creates and manages an Implicit cursor for DML statements (INSERT, UPDATE, DELETE) and single-row SELECT INTO statements. The developer does not declare, open, fetch, or close it — Oracle handles everything internally. Explicit cursors are developer-controlled and used for multi-row SELECTs.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Implicit vs Explicit Cursors',
    question: 'A developer needs to retrieve ALL employees from a department and process each one individually with complex business logic. Which cursor type is required?',
    options: [
      'Implicit cursor — because SELECT is used.',
      'Explicit cursor — because multi-row processing with developer control is needed.',
      'No cursor needed — PL/SQL handles multi-row results automatically.',
      'Implicit cursor — because Oracle always manages multi-row results internally.'
    ],
    correctOption: 1,
    explanation: 'Explicit cursors are required when you need to process multiple rows returned by a SELECT query one row at a time, especially with complex row-level logic. They give the developer full control (DECLARE, OPEN, FETCH, CLOSE). Implicit cursors only handle single-row SELECT INTO and DML — they cannot process multi-row results one by one.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Implicit vs Explicit Cursors',
    question: 'Examine this PL/SQL code. Which type of cursor is used, and will it work correctly if the query returns more than one row?<pre><code>DECLARE\n' +
      '  v_name VARCHAR2(50);\n' +
      'BEGIN\n' +
      '  SELECT ename INTO v_name\n' +
      '  FROM employees\n' +
      '  WHERE deptno = 10;\n' +
      '  DBMS_OUTPUT.PUT_LINE(v_name);\n' +
      'END;</code></pre>',
    options: [
      'Explicit cursor — it will work correctly for any number of rows.',
      'Implicit cursor — it works fine because INTO handles multiple rows.',
      'Implicit cursor (SELECT INTO) — it will raise TOO_MANY_ROWS if more than one row is returned.',
      'Explicit cursor — it will raise NO_DATA_FOUND for multiple rows.'
    ],
    correctOption: 2,
    explanation: 'SELECT INTO uses an implicit cursor and expects exactly one row. If the query returns more than one row, Oracle raises the predefined exception TOO_MANY_ROWS. If it returns zero rows, it raises NO_DATA_FOUND. This is why explicit cursors are required for multi-row scenarios — SELECT INTO cannot handle multiple rows.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Implicit vs Explicit Cursors',
    question: 'What is the PRIMARY advantage of an Explicit cursor over an Implicit cursor?',
    options: [
      'Explicit cursors execute faster than implicit cursors.',
      'Explicit cursors allow the developer to process multiple rows one at a time and implement complex per-row business logic with full control.',
      'Explicit cursors automatically commit after each row.',
      'Explicit cursors can only be used in stored procedures, not anonymous blocks.'
    ],
    correctOption: 1,
    explanation: "The key advantage of explicit cursors is developer control over multi-row processing — you can OPEN, FETCH row by row, apply custom logic per row, and CLOSE. Implicit cursors handle simple DML and single-row SELECT automatically but cannot process rows one at a time from a multi-row result. Explicit cursors are not inherently faster, don't auto-commit, and can be used in any PL/SQL block."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Explicit Cursor Lifecycle',
    question: 'What is the correct ORDER of steps for controlling an explicit cursor?',
    options: [
      'OPEN → DECLARE → FETCH → CLOSE',
      'DECLARE → FETCH → OPEN → CLOSE',
      'DECLARE → OPEN → FETCH → CLOSE',
      'DECLARE → OPEN → CLOSE → FETCH'
    ],
    correctOption: 2,
    explanation: 'Explicit cursors follow four sequential steps: 1) DECLARE — define the cursor and its SELECT query in the DECLARE section. 2) OPEN — execute the query and populate the active set. 3) FETCH — retrieve one row at a time into variables. 4) CLOSE — release the memory and context area. Skipping or reordering these steps causes errors.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Explicit Cursor Lifecycle',
    question: 'A developer forgets to CLOSE an explicit cursor after processing all rows. What is the consequence?',
    options: [
      'Oracle automatically closes all cursors when the block ends, so there is no problem.',
      'The cursor stays open, consuming memory resources — in long-running applications this can lead to resource leaks.',
      'The next FETCH on the same cursor will raise an exception.',
      'Oracle raises ORA-06502 immediately when the block ends.'
    ],
    correctOption: 1,
    explanation: 'An unclosed cursor keeps its context area (memory) allocated. In a short anonymous block, Oracle will eventually clean up, but in stored procedures called repeatedly or in long sessions, not closing cursors leads to memory resource leaks and can eventually cause errors like ORA-01000 (maximum open cursors exceeded). Best practice is always to explicitly CLOSE cursors.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Explicit Cursor Lifecycle',
    question: 'Examine this cursor code. What is wrong with it?<pre><code>DECLARE\n' +
      '  CURSOR c_emp IS\n' +
      '    SELECT empno, ename FROM employees WHERE deptno = 20;\n' +
      '  v_empno employees.empno%TYPE;\n' +
      '  v_ename employees.ename%TYPE;\n' +
      'BEGIN\n' +
      '  FETCH c_emp INTO v_empno, v_ename;\n' +
      '  OPEN c_emp;\n' +
      '  LOOP\n' +
      '    FETCH c_emp INTO v_empno, v_ename;\n' +
      '    EXIT WHEN c_emp%NOTFOUND;\n' +
      '    DBMS_OUTPUT.PUT_LINE(v_ename);\n' +
      '  END LOOP;\n' +
      '  CLOSE c_emp;\n' +
      'END;</code></pre>',
    options: [
      'The cursor is missing a WHERE clause.',
      'FETCH is called before OPEN — the cursor must be opened before fetching rows.',
      'The EXIT WHEN condition should use %FOUND instead of %NOTFOUND.',
      'You cannot FETCH into two variables simultaneously.'
    ],
    correctOption: 1,
    explanation: 'The first FETCH c_emp appears BEFORE OPEN c_emp — this is invalid. You must OPEN a cursor to execute its query and populate the active set before any FETCH can retrieve rows. Attempting to FETCH from an unopened cursor raises ORA-01001 (invalid cursor). The correct order is always: OPEN → FETCH → CLOSE.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Explicit Cursor Lifecycle',
    question: 'A developer opens a cursor, fetches all rows in a loop, and the loop exits when %NOTFOUND is TRUE. They then try to re-use the same cursor by fetching again — without reopening. What happens?',
    options: [
      'The cursor restarts from the first row automatically.',
      'The cursor returns NULL for all subsequent fetches.',
      'The FETCH immediately returns %NOTFOUND = TRUE — there are no more rows since the cursor is exhausted and must be closed and reopened.',
      'Oracle raises ORA-06504 for reusing an exhausted cursor.'
    ],
    correctOption: 2,
    explanation: 'Cursors are forward-only — once all rows are fetched and %NOTFOUND becomes TRUE, the cursor is exhausted. Any additional FETCH on an open but exhausted cursor will immediately return %NOTFOUND = TRUE (no data). To process the same result set again, you must CLOSE the cursor and OPEN it again to re-execute the query and repopulate the active set.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Cursor Attributes',
    question: 'After fetching rows from a cursor in a loop, a developer wants to check whether the last FETCH returned a row. Which cursor attribute should they check?',
    options: [ '%ISOPEN', '%ROWCOUNT', '%FOUND', '%NOTFOUND' ],
    correctOption: 2,
    explanation: '%FOUND returns TRUE if the most recent FETCH successfully retrieved a row. It returns FALSE when no row was fetched (cursor exhausted). %NOTFOUND is the opposite — TRUE when no row was returned. %ISOPEN checks whether the cursor is open. %ROWCOUNT returns the count of rows fetched so far. %FOUND is most direct for confirming a successful fetch.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Cursor Attributes',
    question: 'A developer uses %NOTFOUND to control a LOOP. What does %NOTFOUND evaluate to when there are still unprocessed rows remaining in the cursor?',
    options: [
      'TRUE — rows were found so %NOTFOUND reports the presence.',
      'FALSE — %NOTFOUND is only TRUE when no more rows are available.',
      'NULL — %NOTFOUND is undefined when rows remain.',
      '1 — %NOTFOUND returns a numeric count.'
    ],
    correctOption: 1,
    explanation: '%NOTFOUND returns FALSE when the last FETCH successfully retrieved a row (rows are still available). It becomes TRUE when a FETCH returns no data — meaning the result set is exhausted. This is why EXIT WHEN cursor%NOTFOUND is the standard loop-exit pattern: the loop continues while %NOTFOUND is FALSE and exits when it becomes TRUE.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Cursor Attributes',
    question: 'After processing a loop over a cursor, a developer checks c_orders%ROWCOUNT. What does this value represent?',
    options: [
      'The total number of rows in the table the cursor queries.',
      'The number of rows fetched so far from the cursor since it was opened.',
      'The number of rows that matched the WHERE clause before the cursor was opened.',
      'The number of rows remaining to be fetched.'
    ],
    correctOption: 1,
    explanation: '%ROWCOUNT returns the cumulative count of rows fetched so far since the cursor was opened. After a complete loop, it equals the total number of rows processed. It does not tell you the total table count, the pre-fetch match count, or remaining rows — it tracks what has already been fetched.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Cursor Attributes',
    question: 'Examine this code. What is the output if the cursor returns 4 rows?<pre><code>DECLARE\n' +
      '  CURSOR c_sal IS SELECT sal FROM employees WHERE deptno = 30;\n' +
      '  v_sal employees.sal%TYPE;\n' +
      'BEGIN\n' +
      '  OPEN c_sal;\n' +
      '  FETCH c_sal INTO v_sal;\n' +
      '  FETCH c_sal INTO v_sal;\n' +
      "  DBMS_OUTPUT.PUT_LINE('Rows fetched: ' || c_sal%ROWCOUNT);\n" +
      '  CLOSE c_sal;\n' +
      'END;</code></pre>',
    options: [
      'Rows fetched: 4',
      'Rows fetched: 0',
      'Rows fetched: 2',
      'Rows fetched: 1'
    ],
    correctOption: 2,
    explanation: "%ROWCOUNT tracks how many rows have been fetched since OPEN. Two FETCH calls have been made, so %ROWCOUNT = 2 at the point of the PUT_LINE — regardless of the fact that 4 total rows exist. The remaining 2 rows are in the active set but haven't been fetched yet. This is a common exam trick: %ROWCOUNT reflects fetched rows, not total rows."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Cursor Attributes',
    question: 'A developer wants to verify that a cursor is currently open before attempting a FETCH. Which attribute and check is correct?',
    options: [
      'IF c_emp%FOUND THEN — checks if the cursor has data.',
      'IF c_emp%ISOPEN THEN — checks if the cursor is currently open.',
      'IF c_emp%ROWCOUNT > 0 THEN — confirms the cursor has fetched rows.',
      'IF c_emp%NOTFOUND THEN — confirms the cursor is ready to fetch.'
    ],
    correctOption: 1,
    explanation: "%ISOPEN returns TRUE if the cursor has been opened and not yet closed. It is the correct attribute to check cursor state before attempting a FETCH — fetching from a closed cursor raises an error. %FOUND and %NOTFOUND reflect the result of the last FETCH. %ROWCOUNT counts fetched rows but doesn't confirm the cursor is open."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Exception Handling – What & Why',
    question: 'A PL/SQL block tries to divide a value by zero. Without exception handling, what happens?',
    options: [
      'PL/SQL returns NULL and continues execution normally.',
      'The program terminates abruptly with an unhandled exception error.',
      'Oracle automatically retries the division with a different value.',
      'The result is set to 0 and a warning is logged.'
    ],
    correctOption: 1,
    explanation: 'Without exception handling, a runtime error (like division by zero) causes the PL/SQL program to terminate abruptly with an unhandled exception. This is the core problem exception handling solves — it intercepts runtime errors, allows the developer to respond gracefully (log the error, provide a user-friendly message), and prevents abrupt termination.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Exception Handling – What & Why',
    question: "What is the PRIMARY benefit of PL/SQL's EXCEPTION section?",
    options: [
      'It speeds up query execution by pre-handling errors.',
      'It prevents abrupt termination and allows controlled handling of runtime errors — improving application reliability.',
      'It automatically fixes errors without developer intervention.',
      'It stores exceptions in a log table automatically.'
    ],
    correctOption: 1,
    explanation: 'The EXCEPTION section intercepts runtime errors, prevents the program from crashing, allows custom error messages, and ensures smooth program flow. It does not speed up queries, fix errors automatically, or log to tables unless the developer writes that logic. The benefit is controlled, graceful error handling.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'A PL/SQL block uses SELECT INTO but the query returns zero matching rows. Which predefined Oracle exception is raised?',
    options: [ 'TOO_MANY_ROWS', 'VALUE_ERROR', 'NO_DATA_FOUND', 'ZERO_DIVIDE' ],
    correctOption: 2,
    explanation: 'NO_DATA_FOUND is the predefined Oracle exception raised when a SELECT INTO statement returns no rows. TOO_MANY_ROWS is raised when SELECT INTO returns more than one row. VALUE_ERROR is a type/conversion error. ZERO_DIVIDE occurs when dividing by zero. These are all predefined (built-in) exceptions that Oracle raises automatically.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: "A developer writes a business rule: 'If an employee's commission is greater than their salary, raise a custom error.' Which exception type is used for this?",
    options: [
      'Predefined exception — Oracle provides this check automatically.',
      'User-Defined exception — the developer declares and raises this custom condition.',
      'NO_DATA_FOUND — because no salary match exists.',
      'TOO_MANY_ROWS — because multiple employees might match.'
    ],
    correctOption: 1,
    explanation: "User-Defined exceptions are declared by the developer for custom business rules that Oracle cannot detect automatically. Oracle's predefined exceptions handle standard database errors (no rows, too many rows, division by zero). Business-rule violations like 'commission > salary' require the developer to DECLARE the exception, check the condition, RAISE it manually, and HANDLE it in the EXCEPTION section."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'Examine this PL/SQL block. Which exception handler will catch the error if dept_id 999 does not exist in the table?<pre><code>DECLARE\n' +
      '  v_name VARCHAR2(50);\n' +
      'BEGIN\n' +
      '  SELECT dname INTO v_name FROM dept WHERE deptno = 999;\n' +
      '  DBMS_OUTPUT.PUT_LINE(v_name);\n' +
      'EXCEPTION\n' +
      '  WHEN NO_DATA_FOUND THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Department not found.');\n" +
      '  WHEN TOO_MANY_ROWS THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Multiple departments returned.');\n" +
      '  WHEN OTHERS THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Unexpected error.');\n" +
      'END;</code></pre>',
    options: [
      'TOO_MANY_ROWS — because no row matched.',
      'OTHERS — because this is an unexpected error.',
      'NO_DATA_FOUND — because SELECT INTO returned zero rows.',
      'No handler fires — the block continues normally.'
    ],
    correctOption: 2,
    explanation: "When SELECT INTO finds no matching row, Oracle raises NO_DATA_FOUND. The EXCEPTION section checks handlers in order: NO_DATA_FOUND matches, so 'Department not found.' is printed. The WHEN OTHERS handler is a catch-all for anything not matched by specific handlers — it would only fire here if an unexpected error type occurred."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'What does the WHEN OTHERS exception handler catch?',
    options: [
      'Only user-defined exceptions not listed above it.',
      'Any exception not matched by the preceding specific WHEN handlers — it is a catch-all.',
      'Only Oracle predefined exceptions not listed above it.',
      'Nothing — WHEN OTHERS is a placeholder with no actual function.'
    ],
    correctOption: 1,
    explanation: "WHEN OTHERS is a catch-all exception handler that catches any exception not matched by the specific WHEN handlers listed before it. Best practice is to place it last in the EXCEPTION section. It handles both predefined and user-defined exceptions that weren't explicitly named. Using WHEN OTHERS alone (without any specific handlers) is poor practice as it masks all errors."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'A developer declares a user-defined exception. What are the THREE steps needed to use it?',
    options: [
      'CREATE, TRIGGER, HANDLE',
      'DECLARE (in the DECLARE section), RAISE (in the BEGIN section when condition is met), HANDLE (in the EXCEPTION section)',
      'DEFINE, FIRE, CATCH',
      'DECLARE, COMMIT, ROLLBACK'
    ],
    correctOption: 1,
    explanation: 'User-defined exceptions require three steps: 1) DECLARE the exception variable in the DECLARE section (e.g., e_high_comm EXCEPTION). 2) RAISE it in the BEGIN section when the business rule is violated (e.g., IF commission > salary THEN RAISE e_high_comm). 3) HANDLE it in the EXCEPTION section (WHEN e_high_comm THEN ...). All three steps are required.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'Examine this code. What is printed if v_salary is 2000 and v_bonus is 5000?<pre><code>DECLARE\n' +
      '  e_bonus_exceeds EXCEPTION;\n' +
      '  v_salary NUMBER := 2000;\n' +
      '  v_bonus  NUMBER := 5000;\n' +
      'BEGIN\n' +
      '  IF v_bonus &gt; v_salary THEN\n' +
      '    RAISE e_bonus_exceeds;\n' +
      '  END IF;\n' +
      "  DBMS_OUTPUT.PUT_LINE('Bonus is valid.');\n" +
      'EXCEPTION\n' +
      '  WHEN e_bonus_exceeds THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Error: Bonus cannot exceed salary.');\n" +
      'END;</code></pre>',
    options: [
      'Bonus is valid.',
      'Error: Bonus cannot exceed salary.',
      'Nothing — the exception terminates the program silently.',
      'Both lines are printed.'
    ],
    correctOption: 1,
    explanation: "Since v_bonus (5000) > v_salary (2000), the condition is TRUE and RAISE e_bonus_exceeds fires immediately. Control transfers to the EXCEPTION section, which matches WHEN e_bonus_exceeds and prints the error message. The line 'Bonus is valid.' is skipped because RAISE immediately exits the BEGIN section. The program ends cleanly — no abrupt crash."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Types of Exceptions',
    question: 'Examine this code. What is the bug?<pre><code>DECLARE\n' +
      '  v_count NUMBER;\n' +
      'BEGIN\n' +
      "  SELECT COUNT(*) INTO v_count FROM orders WHERE status = 'PENDING';\n" +
      "  DBMS_OUTPUT.PUT_LINE('Pending orders: ' || v_count);\n" +
      'EXCEPTION\n' +
      '  WHEN NO_DATA_FOUND THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('No pending orders found.');\n" +
      'END;</code></pre>',
    options: [
      'No bug — this is valid and the NO_DATA_FOUND handler is correct.',
      'The NO_DATA_FOUND handler will never fire — COUNT(*) always returns a row (even if 0), so SELECT INTO never raises NO_DATA_FOUND here.',
      'COUNT(*) cannot be used with SELECT INTO.',
      'The EXCEPTION section must appear before BEGIN.'
    ],
    correctOption: 1,
    explanation: "COUNT(*) always returns exactly one row — the count value (which may be 0, but that's still a row). SELECT INTO with COUNT(*) will never raise NO_DATA_FOUND. The NO_DATA_FOUND handler here is misleading and will never execute. If you want to detect zero pending orders, check IF v_count = 0 THEN after the SELECT. This is a subtle but common conceptual error."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Anonymous vs Named PL/SQL Blocks',
    question: 'A developer writes a PL/SQL block to one-time-fix some data. Once run, it will never be needed again. Which block type is appropriate?',
    options: [
      'Stored Procedure — for reusability and performance.',
      'Anonymous block — executed once and not stored in the database.',
      'Package — to group related logic.',
      'Stored Function — to return the result.'
    ],
    correctOption: 1,
    explanation: "Anonymous blocks are ideal for one-time scripts that don't need to be reused — they execute and are discarded. They are not compiled and stored in the database. Stored Subprograms (Procedures, Functions, Packages) are designed for code that needs to be stored, reused, and called repeatedly — overkill for a one-time fix."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Anonymous vs Named PL/SQL Blocks',
    question: 'What is the KEY advantage of Stored Subprograms (Procedures, Functions) over Anonymous blocks?',
    options: [
      'Stored subprograms can use variables; anonymous blocks cannot.',
      'Stored subprograms are compiled once, stored in the database, and can be reused — improving performance and maintainability.',
      'Anonymous blocks execute faster because they skip compilation.',
      'Stored subprograms bypass Oracle security — no privileges needed.'
    ],
    correctOption: 1,
    explanation: 'Stored subprograms are compiled once when created and stored in compiled form. Each subsequent call skips the parse/compile step, improving performance. They are reusable by multiple applications, centralize business logic, and are easier to maintain. Anonymous blocks are re-parsed on every execution and cannot be called by name. A and D are factually wrong.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: "A procedure is described as being used 'for actions rather than calculations.' What does this mean in practice?",
    options: [
      'Procedures can only contain SELECT statements — no DML allowed.',
      "Procedures typically perform operations like INSERT, UPDATE, DELETE, or SELECT — they don't necessarily return a computed value like a function does.",
      'Procedures always return a value through the RETURN statement.',
      'Procedures cannot accept parameters — they act on the entire table.'
    ],
    correctOption: 1,
    explanation: "Oracle's best practice distinguishes: Procedures perform actions (DML operations, data processing, workflows) and may or may not return values via OUT parameters. Functions compute and return a single value. A procedure that inserts an employee record is 'performing an action' — it doesn't compute and return a value the way a function does."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: 'Examine this procedure definition. What will happen when another developer calls it with: add_bonus(101, 500)?<pre><code>CREATE OR REPLACE PROCEDURE add_bonus(\n' +
      '  p_empno  IN  employees.empno%TYPE,\n' +
      '  p_amount IN  NUMBER\n' +
      ')\n' +
      'IS\n' +
      'BEGIN\n' +
      '  UPDATE employees\n' +
      '  SET sal = sal + p_amount\n' +
      '  WHERE empno = p_empno;\n' +
      '  COMMIT;\n' +
      'END add_bonus;</code></pre>',
    options: [
      'The procedure returns the new salary value to the caller.',
      'The procedure adds 500 to the salary of employee 101 and commits the change.',
      'The procedure fails because COMMIT cannot be inside a procedure.',
      'The procedure raises an error because p_amount has no data type specified.'
    ],
    correctOption: 1,
    explanation: 'The procedure takes two IN parameters (p_empno=101, p_amount=500), runs the UPDATE to add 500 to the salary of employee 101, and commits. This is a classic action-oriented procedure. COMMIT is valid inside procedures. p_amount is typed as NUMBER. The procedure performs the action but returns nothing to the caller (no RETURN or OUT parameter).'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: 'What does the IN parameter mode mean in a PL/SQL procedure?',
    options: [
      'The parameter receives a value from the caller and can be modified inside the procedure.',
      'The parameter receives a value from the caller and is read-only inside the procedure.',
      'The parameter sends a value back to the caller.',
      'The parameter is optional and defaults to NULL if not provided.'
    ],
    correctOption: 1,
    explanation: 'IN parameters pass values INTO the procedure from the caller and are read-only inside the procedure — attempting to assign to an IN parameter causes a compilation error. OUT parameters send values back to the caller. IN OUT parameters both receive and return modified values. The default mode is IN if not specified.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: 'A procedure needs to accept an employee ID, look up their salary, and return it to the calling program WITHOUT returning it via a RETURN statement. Which parameter mode enables this?',
    options: [
      'IN — pass the salary into the procedure.',
      'IN OUT — pass the ID in and receive it back modified.',
      'OUT — the procedure writes the salary into this parameter, which the caller can then read.',
      'RETURN — use RETURN inside the procedure body.'
    ],
    correctOption: 2,
    explanation: "OUT parameters allow a procedure to pass a value back to the calling program. The caller passes a variable in the OUT position, and the procedure writes a value into it. After the call, the caller's variable holds the returned data. This is how procedures 'return' values without a RETURN statement. IN OUT both passes a value in and returns a modified version."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: 'Examine this procedure signature. What do the three parameter modes accomplish?<pre><code>CREATE OR REPLACE PROCEDURE update_salary(\n' +
      '  p_empno    IN     NUMBER,\n' +
      '  p_increase IN     NUMBER,\n' +
      '  p_new_sal  OUT    NUMBER\n' +
      ')\n' +
      'IS\n' +
      'BEGIN\n' +
      '  UPDATE employees\n' +
      '  SET sal = sal + p_increase\n' +
      '  WHERE empno = p_empno\n' +
      '  RETURNING sal INTO p_new_sal;\n' +
      'END;</code></pre>',
    options: [
      'p_empno and p_increase are returned to the caller; p_new_sal is passed in.',
      'p_empno and p_increase are read-only inputs from the caller; p_new_sal returns the updated salary value back to the caller.',
      'All three parameters are read-only — the RETURNING clause handles the output.',
      'The procedure will fail because OUT parameters cannot be used with UPDATE.'
    ],
    correctOption: 1,
    explanation: 'p_empno (IN) and p_increase (IN) are read-only values passed by the caller — the employee ID and the raise amount. p_new_sal (OUT) is written by the procedure using RETURNING...INTO and delivers the updated salary back to the calling code. This is the classic pattern: IN parameters drive the action, OUT parameters communicate results back.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Procedures',
    question: 'How does a stored procedure differ from an anonymous PL/SQL block in terms of storage and reuse?',
    options: [
      'Both are stored in the database and can be reused by name.',
      'Anonymous blocks are stored; procedures are temporary.',
      'Procedures are compiled, named, and stored as schema objects — callable by name repeatedly. Anonymous blocks are one-time executions not stored.',
      'Procedures and anonymous blocks are identical — the terms are interchangeable.'
    ],
    correctOption: 2,
    explanation: 'Stored Procedures are compiled once, stored as named database schema objects, and callable by any authorized user or application at any time by name (e.g., EXEC add_bonus(101, 500)). Anonymous blocks are written inline, executed once, and discarded — not stored, not reusable by name. This reusability and pre-compilation is the core value of stored subprograms.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'What is the fundamental difference between a Stored Procedure and a Stored Function in PL/SQL?',
    options: [
      'Functions can use DML; procedures cannot.',
      'A Function MUST return a single value via RETURN; a Procedure performs actions and may or may not return values via OUT parameters.',
      'Procedures are stored in the database; functions are temporary.',
      'Functions can only be called from SQL; procedures only from PL/SQL.'
    ],
    correctOption: 1,
    explanation: "The core distinction: Functions always return exactly one value using the RETURN statement and are called as expressions. Procedures perform actions (DML, workflows) and can return zero or multiple values via OUT parameters, but have no RETURN requirement. Oracle's best practice: use Procedures for SELECT/DML actions, Functions for computations that return a value. A and C are wrong; D oversimplifies (both can be called from SQL and PL/SQL in various ways)."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'Examine this function. What does it return when called with get_annual_salary(5000)?<pre><code>CREATE OR REPLACE FUNCTION get_annual_salary(\n' +
      '  p_monthly_sal IN NUMBER\n' +
      ') RETURN NUMBER\n' +
      'IS\n' +
      'BEGIN\n' +
      '  RETURN p_monthly_sal * 12;\n' +
      'END get_annual_salary;</code></pre>',
    options: [
      '5000',
      '60000',
      'NULL — the function has no OUT parameter.',
      'The function raises an error because multiplication is not allowed in RETURN.'
    ],
    correctOption: 1,
    explanation: 'The function multiplies p_monthly_sal (5000) by 12 and returns the result: 5000 × 12 = 60000. The RETURN statement evaluates the expression and sends the result back to the caller. Functions can return computed expressions directly in RETURN. No OUT parameter is needed — the RETURN statement is how functions send their result.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'A developer wants to use a custom function in a SQL query. Which usage is valid?',
    options: [
      'Functions cannot be used inside SQL statements — only in PL/SQL blocks.',
      'SELECT empno, get_annual_salary(sal) AS annual_sal FROM employees;',
      'Functions can only appear in the WHERE clause of a SQL query.',
      'CALL get_annual_salary(sal) FROM employees;'
    ],
    correctOption: 1,
    explanation: 'Stored functions can be called within SQL statements — in the SELECT list, WHERE clause, GROUP BY, HAVING, ORDER BY, and even in INSERT/UPDATE statements. Option B correctly uses the function in a SELECT to compute a derived column. A is wrong — this is one of the key advantages of functions over procedures. C is wrong — functions work in SELECT lists too. D uses invalid SQL syntax.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'Which of the following is a RESTRICTION on functions used inside SQL statements?',
    options: [
      'Functions cannot accept IN parameters when called from SQL.',
      'Functions cannot contain COMMIT or ROLLBACK statements.',
      'Functions cannot use IF/ELSE logic inside their body.',
      'Functions must always return VARCHAR2 when used in SQL.'
    ],
    correctOption: 1,
    explanation: "Functions used in SQL statements must follow strict restrictions to ensure data consistency: they cannot perform DML on tables involved in the calling query, cannot query tables being modified by the calling DML, and CANNOT contain COMMIT or ROLLBACK. Including transaction control (COMMIT/ROLLBACK) in a function called from SQL would violate SQL's transactional model. A, C, D are all false restrictions."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'Examine this function. What is wrong with it when called from a SQL SELECT statement?<pre><code>CREATE OR REPLACE FUNCTION apply_discount(\n' +
      '  p_price IN NUMBER\n' +
      ') RETURN NUMBER\n' +
      'IS\n' +
      'BEGIN\n' +
      '  UPDATE products SET last_accessed = SYSDATE WHERE price = p_price;\n' +
      '  RETURN p_price * 0.9;\n' +
      'END apply_discount;</code></pre>',
    options: [
      'Nothing — functions can run UPDATE statements freely.',
      'The RETURN expression is invalid — you cannot multiply inside RETURN.',
      'The function performs a DML operation (UPDATE), which violates the restriction on functions called from SQL queries — it can cause inconsistency.',
      'The function is missing a COMMIT after the UPDATE.'
    ],
    correctOption: 2,
    explanation: "Functions called from SQL statements must not perform DML on database tables. This apply_discount function runs an UPDATE inside it. If called from a SELECT (e.g., SELECT apply_discount(price) FROM products), it could cause mutating table errors and data consistency issues. The restriction exists to prevent functions from having side effects that interfere with the SQL engine's execution plan."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: "A function is defined with RETURN VARCHAR2. What happens if the function's logic reaches the END without executing a RETURN statement?",
    options: [
      'The function returns NULL automatically.',
      "Oracle raises an error — a function that doesn't execute a RETURN statement causes a VALUE_ERROR at runtime.",
      "The function returns an empty string ''.",
      'The function re-executes from the beginning.'
    ],
    correctOption: 1,
    explanation: 'Every code path in a function must reach a RETURN statement. If execution reaches END without returning, Oracle raises ORA-06503 (Function returned without value). This is a runtime error, not a compile-time error — Oracle only detects it when the code path that skips RETURN is actually executed. Always ensure every conditional branch includes a RETURN.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Stored Functions',
    question: 'Examine this function. What does it return if p_score is 85?<pre><code>CREATE OR REPLACE FUNCTION get_grade(\n' +
      '  p_score IN NUMBER\n' +
      ') RETURN VARCHAR2\n' +
      'IS\n' +
      'BEGIN\n' +
      '  IF p_score &gt;= 90 THEN\n' +
      "    RETURN 'A';\n" +
      '  ELSIF p_score &gt;= 80 THEN\n' +
      "    RETURN 'B';\n" +
      '  ELSIF p_score &gt;= 70 THEN\n' +
      "    RETURN 'C';\n" +
      '  ELSE\n' +
      "    RETURN 'F';\n" +
      '  END IF;\n' +
      'END get_grade;</code></pre>',
    options: [ "'A'", "'B'", "'C'", "'F'" ],
    correctOption: 1,
    explanation: "With p_score = 85: the first condition (>= 90) is FALSE (85 < 90). The second condition (>= 80) is TRUE (85 >= 80), so RETURN 'B' executes immediately. The remaining conditions are not evaluated. This demonstrates a typical multi-branch function — conditions are checked in order and the first TRUE branch executes."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Viewing Stored Subprograms – Data Dictionary',
    question: 'A developer wants to see all procedures and functions they own, along with whether they are VALID or INVALID. Which query is correct?',
    options: [
      "SELECT text FROM user_source WHERE object_type IN ('PROCEDURE','FUNCTION');",
      "SELECT object_name, object_type, status FROM user_objects WHERE object_type IN ('PROCEDURE','FUNCTION');",
      "SELECT trigger_name FROM user_triggers WHERE table_name IN ('PROCEDURE','FUNCTION');",
      "SELECT * FROM user_dependencies WHERE type = 'PROCEDURE';"
    ],
    correctOption: 1,
    explanation: "USER_OBJECTS contains all schema objects with their names, types, and STATUS (VALID or INVALID). Filtering by object_type IN ('PROCEDURE','FUNCTION') shows all stored subprograms. USER_SOURCE contains the actual source code text. USER_TRIGGERS is for trigger metadata. USER_DEPENDENCIES shows dependency relationships — none of these show the VALID/INVALID status as directly as USER_OBJECTS."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Viewing Stored Subprograms – Data Dictionary',
    question: 'A developer needs to review the source code of a procedure named CALC_TAX to understand what it does. Which query retrieves the source text?',
    options: [
      "SELECT status FROM user_objects WHERE object_name = 'CALC_TAX';",
      "SELECT object_type FROM user_objects WHERE object_name = 'CALC_TAX';",
      "SELECT text FROM user_source WHERE name = 'CALC_TAX' ORDER BY line;",
      "SELECT * FROM user_triggers WHERE trigger_name = 'CALC_TAX';"
    ],
    correctOption: 2,
    explanation: 'USER_SOURCE stores the PL/SQL source code for all stored subprograms. Each row contains one line of code. Ordering by LINE ensures the code is displayed in sequence. A and B query USER_OBJECTS which shows metadata (status, type) but not source code. D queries USER_TRIGGERS which is irrelevant for procedures.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Viewing Stored Subprograms – Data Dictionary',
    question: "After modifying a table that a stored procedure depends on, a developer checks USER_OBJECTS and sees the procedure's status is 'INVALID'. What does this mean and what should they do?",
    options: [
      'The procedure has been deleted and must be recreated from scratch.',
      "The procedure's compiled code no longer matches its dependencies — it should be recompiled using ALTER PROCEDURE proc_name COMPILE.",
      'INVALID means the procedure is currently running — wait for it to complete.',
      'INVALID is a warning only — the procedure will still execute correctly.'
    ],
    correctOption: 1,
    explanation: 'When a dependent object (table, column type) changes, Oracle marks dependent procedures as INVALID because their compiled code may no longer be correct. The procedure needs recompilation: ALTER PROCEDURE proc_name COMPILE (or Oracle may auto-recompile on next invocation). An INVALID procedure will fail to execute until successfully recompiled. It is not deleted, not running, and will not work until fixed.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A payroll application needs to calculate gross pay (hours × rate) for every employee and store it in a table. The same calculation is needed monthly and by multiple applications. What is the BEST design?',
    options: [
      'Write an anonymous block each month with the calculation hard-coded.',
      'Create a stored function that takes hours and rate as IN parameters and returns gross pay — call it from both applications.',
      'Create a trigger on the employees table to auto-calculate on INSERT.',
      'Use a SELECT statement with inline arithmetic in each application.'
    ],
    correctOption: 1,
    explanation: 'A stored function is ideal: it centralizes the calculation logic, is reusable by multiple applications, is pre-compiled for performance, and returns a value. All applications call the same function — if the formula changes (e.g., overtime rules), you update it in one place. Anonymous blocks are one-time scripts. A trigger would require an INSERT to fire. Inline arithmetic duplicates logic across applications.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'Examine this code. What exception is likely raised, and which handler catches it?<pre><code>DECLARE\n' +
      '  v_sal employees.sal%TYPE;\n' +
      'BEGIN\n' +
      '  SELECT sal INTO v_sal\n' +
      '  FROM employees\n' +
      "  WHERE job = 'MANAGER';\n" +
      'EXCEPTION\n' +
      '  WHEN NO_DATA_FOUND THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('No managers found.');\n" +
      '  WHEN TOO_MANY_ROWS THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Multiple managers exist — use a cursor.');\n" +
      '  WHEN OTHERS THEN\n' +
      "    DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);\n" +
      'END;</code></pre>',
    options: [
      'NO_DATA_FOUND — because managers exist in the table.',
      'TOO_MANY_ROWS — because SELECT INTO with multiple MANAGER rows raises this exception.',
      "OTHERS — because job='MANAGER' is an invalid condition.",
      'No exception — SELECT INTO handles multiple rows silently.'
    ],
    correctOption: 1,
    explanation: 'If the EMPLOYEES table has more than one MANAGER, SELECT INTO cannot store multiple values in the single variable v_sal — Oracle raises TOO_MANY_ROWS. The TOO_MANY_ROWS handler fires and prints the appropriate message. This is exactly why explicit cursors exist: when a query returns multiple rows, SELECT INTO fails and a cursor should be used instead. The OTHERS handler also shows SQLERRM — a useful debugging technique.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A developer processes a list of orders using an explicit cursor. After the loop, they print the total count. Which cursor attribute gives the count of rows processed?<pre><code>DECLARE\n' +
      '  CURSOR c_orders IS\n' +
      "    SELECT order_id, amount FROM orders WHERE status = 'NEW';\n" +
      '  v_id orders.order_id%TYPE;\n' +
      '  v_amt orders.amount%TYPE;\n' +
      'BEGIN\n' +
      '  OPEN c_orders;\n' +
      '  LOOP\n' +
      '    FETCH c_orders INTO v_id, v_amt;\n' +
      '    EXIT WHEN c_orders%NOTFOUND;\n' +
      '    -- process each order\n' +
      '  END LOOP;\n' +
      "  DBMS_OUTPUT.PUT_LINE('Processed: ' || c_orders%______);\n" +
      '  CLOSE c_orders;\n' +
      'END;</code></pre>',
    options: [ '%FOUND', '%ISOPEN', '%ROWCOUNT', '%NOTFOUND' ],
    correctOption: 2,
    explanation: '%ROWCOUNT returns the cumulative number of rows fetched from the cursor since it was opened. After the loop completes (when %NOTFOUND becomes TRUE), %ROWCOUNT equals the total number of rows processed. %FOUND/%NOTFOUND indicate the last fetch result (TRUE/FALSE). %ISOPEN confirms the cursor is open. For a total count, %ROWCOUNT is the correct attribute.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: "Should the following logic be implemented as a Procedure or a Function? 'Given a product ID, calculate and return the discounted price based on category rules.'",
    options: [
      'Procedure — because it involves data retrieval.',
      'Function — because it computes and returns a single value (discounted price).',
      'Anonymous block — because it only needs to run once.',
      'Trigger — because it fires on product table changes.'
    ],
    correctOption: 1,
    explanation: "Oracle's best practice: use Functions for computations that return a value. 'Calculate and return the discounted price' is a computation that produces a single result — perfect for a function. The function could then be called in a SELECT query (e.g., SELECT get_discounted_price(product_id) FROM products). Procedures are for actions (DML/workflows). Anonymous blocks are one-time. Triggers fire on events."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'Examine this procedure call. What value does v_result hold after execution?<pre><code>CREATE OR REPLACE PROCEDURE square_it(\n' +
      '  p_num  IN  NUMBER,\n' +
      '  p_result OUT NUMBER\n' +
      ')\n' +
      'IS\n' +
      'BEGIN\n' +
      '  p_result := p_num * p_num;\n' +
      'END square_it;\n' +
      '\n' +
      '-- Calling code:\n' +
      'DECLARE\n' +
      '  v_result NUMBER;\n' +
      'BEGIN\n' +
      '  square_it(7, v_result);\n' +
      '  DBMS_OUTPUT.PUT_LINE(v_result);\n' +
      'END;</code></pre>',
    options: [
      '7',
      '14',
      '49',
      'NULL — OUT parameters cannot be printed directly.'
    ],
    correctOption: 2,
    explanation: "The procedure receives p_num = 7 (IN) and calculates 7 × 7 = 49, storing the result in p_result (OUT). The calling code's v_result variable is bound to p_result, so after the call, v_result = 49. DBMS_OUTPUT.PUT_LINE prints 49. OUT parameters work exactly like return values — the caller's variable receives the value computed by the procedure."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A developer uses a cursor FOR LOOP instead of the traditional DECLARE/OPEN/FETCH/CLOSE pattern. What is the main advantage of a cursor FOR LOOP?<pre><code>-- Cursor FOR LOOP (simplified):\n' +
      'BEGIN\n' +
      '  FOR rec IN (SELECT empno, ename FROM employees WHERE deptno = 10) LOOP\n' +
      '    DBMS_OUTPUT.PUT_LINE(rec.ename);\n' +
      '  END LOOP;\n' +
      'END;</code></pre>',
    options: [
      'It returns more rows than a standard explicit cursor.',
      'It automatically handles OPEN, FETCH, loop exit on %NOTFOUND, and CLOSE — reducing boilerplate code.',
      'It requires explicit OPEN and CLOSE calls to work.',
      'It can only be used with implicit cursors.'
    ],
    correctOption: 1,
    explanation: 'A cursor FOR LOOP is a concise, implicit form of the DECLARE/OPEN/FETCH/CLOSE pattern. Oracle automatically opens the cursor, fetches each row into the record variable (rec), exits the loop when all rows are processed (%NOTFOUND), and closes the cursor. The developer writes less code with no risk of forgetting CLOSE. The result set is identical to a manually controlled explicit cursor.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: "A stored function called in a SQL query tries to INSERT a row into a log table whenever it's called. What is the risk of this design?",
    options: [
      'No risk — functions can freely perform DML on any table.',
      'The function may violate the restriction that functions in SQL must not perform DML — this can cause ORA-14551 or data consistency errors.',
      'The INSERT will be silently ignored when called from SQL.',
      'Functions can INSERT but not UPDATE or DELETE.'
    ],
    correctOption: 1,
    explanation: "Functions called from SQL statements have strict restrictions: they cannot perform DML (INSERT, UPDATE, DELETE) because SQL's read-consistency model does not allow query functions to modify data during query execution. Violating this causes ORA-14551 (cannot perform DML inside a query). If logging is needed, use autonomous transactions (PRAGMA AUTONOMOUS_TRANSACTION) — an advanced technique that isolates the DML in a separate transaction."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A developer writes a cursor loop but forgets to include EXIT WHEN c_emp%NOTFOUND. What happens at runtime?<pre><code>DECLARE\n' +
      '  CURSOR c_emp IS SELECT ename FROM employees;\n' +
      '  v_name employees.ename%TYPE;\n' +
      'BEGIN\n' +
      '  OPEN c_emp;\n' +
      '  LOOP\n' +
      '    FETCH c_emp INTO v_name;\n' +
      '    DBMS_OUTPUT.PUT_LINE(v_name);\n' +
      '  END LOOP;\n' +
      '  CLOSE c_emp;\n' +
      'END;</code></pre>',
    options: [
      'The loop processes all rows and then terminates normally.',
      'The loop runs indefinitely — once rows are exhausted, FETCH returns NULL values repeatedly, creating an infinite loop.',
      'Oracle automatically inserts EXIT WHEN — the missing line is not required.',
      'The loop raises NO_DATA_FOUND when rows are exhausted and terminates.'
    ],
    correctOption: 1,
    explanation: 'Without EXIT WHEN c_emp%NOTFOUND, the LOOP has no exit condition. After all rows are fetched, %NOTFOUND becomes TRUE but nothing checks it — the loop continues, FETCH returns no data (variable retains its last value or becomes NULL), and PUT_LINE keeps printing. This creates an infinite loop. Always include the EXIT WHEN condition in cursor LOOP patterns.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'Examine this function. What is the output of SELECT check_stock(0) FROM dual?<pre><code>CREATE OR REPLACE FUNCTION check_stock(p_qty IN NUMBER)\n' +
      'RETURN VARCHAR2\n' +
      'IS\n' +
      'BEGIN\n' +
      '  IF p_qty &gt; 100 THEN\n' +
      "    RETURN 'HIGH';\n" +
      '  ELSIF p_qty &gt; 0 THEN\n' +
      "    RETURN 'LOW';\n" +
      '  ELSIF p_qty = 0 THEN\n' +
      "    RETURN 'OUT OF STOCK';\n" +
      '  END IF;\n' +
      'END check_stock;</code></pre>',
    options: [
      "'HIGH'",
      "'LOW'",
      "'OUT OF STOCK'",
      'ORA-06503: Function returned without value'
    ],
    correctOption: 2,
    explanation: "With p_qty = 0: first condition (> 100) is FALSE, second (> 0) is FALSE, third (= 0) is TRUE — so RETURN 'OUT OF STOCK' executes. Note: although all cases are covered here, the function technically has no ELSE clause — if p_qty were negative, no RETURN would execute and ORA-06503 would occur. For p_qty = 0 specifically, the answer is 'OUT OF STOCK'."
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A developer needs to handle two distinct error scenarios in a single EXCEPTION section: when no employee is found AND when too many employees are returned. What is the correct syntax pattern?',
    options: [
      'EXCEPTION WHEN NO_DATA_FOUND AND TOO_MANY_ROWS THEN ...',
      'EXCEPTION WHEN NO_DATA_FOUND OR TOO_MANY_ROWS THEN ...',
      'EXCEPTION WHEN NO_DATA_FOUND THEN ... WHEN TOO_MANY_ROWS THEN ...',
      'EXCEPTION HANDLE (NO_DATA_FOUND, TOO_MANY_ROWS) THEN ...'
    ],
    correctOption: 2,
    explanation: 'Each exception is handled in its own WHEN clause within the EXCEPTION section. The pattern is: WHEN exception1 THEN [handler code] WHEN exception2 THEN [handler code]. Option B (OR) is actually valid syntax in PL/SQL — you can combine exceptions with OR in one WHEN clause — but C (separate WHEN clauses) is the standard, clearest pattern. A uses AND (invalid). D uses non-existent HANDLE syntax.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'A procedure is marked INVALID in USER_OBJECTS after a DBA renames a column in the EMPLOYEES table that the procedure references. What is the MOST likely cause?',
    options: [
      'Renaming columns is not allowed in Oracle — the DBA made an error.',
      "The procedure's compiled code references the old column name — the schema change broke the dependency, causing Oracle to mark it INVALID.",
      'The procedure was accidentally dropped by the DBA.',
      'INVALID means the procedure is running — wait for it to finish.'
    ],
    correctOption: 1,
    explanation: 'Oracle tracks dependencies between PL/SQL objects and database schema objects. When a column referenced by a procedure is renamed or dropped, Oracle marks dependent procedures as INVALID because the compiled code now references a non-existent column name. The procedure must be updated (to use the new column name) and recompiled with ALTER PROCEDURE ... COMPILE before it can execute again.'
  },
  {
    quizTitle: 'PL/SQL Cursors & Exception Handling',
    category: 'Applied & Scenario Questions',
    question: 'Which combination of tools would a developer use to: (1) find if a function named CALC_BONUS exists and is VALID, and (2) view its source code?',
    options: [
      '(1) DESC calc_bonus; and (2) SHOW SOURCE calc_bonus;',
      "(1) SELECT object_name, status FROM user_objects WHERE object_name = 'CALC_BONUS'; and (2) SELECT text FROM user_source WHERE name = 'CALC_BONUS' ORDER BY line;",
      "(1) SELECT * FROM user_triggers WHERE trigger_name = 'CALC_BONUS'; and (2) SELECT * FROM user_dependencies WHERE name = 'CALC_BONUS';",
      "(1) SELECT status FROM user_source WHERE name = 'CALC_BONUS'; and (2) SELECT text FROM user_objects WHERE object_name = 'CALC_BONUS';"
    ],
    correctOption: 1,
    explanation: 'Two data dictionary views handle this: USER_OBJECTS contains object metadata including STATUS (VALID/INVALID) — query it for existence and validity. USER_SOURCE contains the actual PL/SQL source code text, line by line — query it and ORDER BY LINE for readable output. D reverses which view contains status vs source. A and C use non-existent commands or wrong views.'
  }
]
;