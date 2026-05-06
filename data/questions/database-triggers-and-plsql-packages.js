// data/questions/database-triggers-and-plsql-packages.js


module.exports = 

[
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Introduction to Triggers',
    question: "A senior developer says: 'I'll call our data-validation trigger manually from the application whenever I need it.' What is fundamentally wrong with this statement?",
    options: [
      'Triggers can only be called by the SYS user.',
      'Triggers are event-driven and fire automatically — they cannot be manually executed like procedures.',
      'Triggers must be called using EXECUTE IMMEDIATE.',
      'Triggers are only available in PL/SQL packages, not standalone.'
    ],
    correctOption: 1,
    explanation: 'Triggers are implicitly activated by database events (INSERT, UPDATE, DELETE, etc.), not manually called. Unlike procedures or functions, you never CALL or EXECUTE a trigger directly. A is wrong — any event on the table fires the trigger. C and D are incorrect descriptions.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Introduction to Triggers',
    question: 'Which of the following tasks is a trigger BEST suited for — compared to application-side code or standard constraints?',
    options: [
      'Performing a SELECT query and displaying results to the user.',
      'Automatically logging every DELETE on a sensitive table to an audit table, regardless of which application deleted the row.',
      'Creating a new table when a user logs in.',
      'Replacing the Oracle Listener when connections fail.'
    ],
    correctOption: 1,
    explanation: 'Triggers enforce rules and auditing at the database level, so they fire for ALL applications — not just one. This makes them ideal for audit logging that must be consistent across every client. A (SELECT/display) is application logic. C (creating tables on login) is unusual and not a standard use. D is completely unrelated.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Introduction to Triggers',
    question: "A CHECK constraint cannot enforce a rule like 'a new salary must be higher than the current salary.' Which Oracle feature fills this gap?",
    options: [
      'A NOT NULL constraint on the salary column.',
      'A stored procedure that must be called manually before every update.',
      'A BEFORE UPDATE trigger that compares :NEW.salary with :OLD.salary.',
      'A PRIMARY KEY constraint on the salary column.'
    ],
    correctOption: 2,
    explanation: "CHECK constraints evaluate only the current row's new value — they cannot reference old values or other rows. A BEFORE UPDATE trigger has access to both :OLD (previous value) and :NEW (incoming value), making cross-value comparisons possible. A and D are constraint types unrelated to this logic. B requires manual invocation, defeating the purpose."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Events',
    question: 'A DBA wants to log every time someone runs ALTER TABLE or DROP TABLE in the production database. Which category of trigger events handles this?',
    options: [
      'DML events (INSERT, UPDATE, DELETE)',
      'Database events (LOGON, LOGOFF)',
      'DDL events (CREATE, ALTER, DROP)',
      'TCL events (COMMIT, ROLLBACK)'
    ],
    correctOption: 2,
    explanation: 'DDL (Data Definition Language) events — CREATE, ALTER, DROP — trigger DDL-based triggers used for auditing schema changes. DML events cover data changes (rows). Database events cover session-level activity (LOGON, LOGOFF, STARTUP). TCL events (COMMIT, ROLLBACK) are not a recognized Oracle trigger event category.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Events',
    question: 'A security team needs to record every time any user connects to the Oracle database, along with the timestamp. Which trigger event category and specific event are needed?',
    options: [
      'DML event: INSERT on the sessions table',
      'Database event: LOGON',
      'DDL event: CREATE SESSION',
      'Database event: STARTUP'
    ],
    correctOption: 1,
    explanation: "LOGON is a database-level event trigger that fires each time a user connects to the database. It is used for system-level monitoring and security logging. A is wrong — there is no automatic 'sessions table' INSERT. C is wrong — CREATE SESSION is a privilege, not a trigger event. D (STARTUP) fires when the database itself starts, not on individual logins."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Events',
    question: 'Examine this trigger definition. Which specific database event causes it to fire?',
    options: [
      'Any DML statement (INSERT/UPDATE/DELETE)',
      'Any DROP statement executed in the schema',
      'Any user LOGOFF from the database',
      'Any CREATE statement executed in the schema'
    ],
    correctOption: 1,
    explanation: 'The trigger specifies AFTER DROP ON SCHEMA — it fires after any DROP statement is executed within the current schema. This is a DDL event trigger. A (DML), C (LOGOFF), and D (CREATE) are different event types and would require different trigger definitions.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Timing: BEFORE / AFTER / INSTEAD OF',
    question: "A trigger needs to validate that an order's ship date is not earlier than the order date BEFORE the row is saved to the database. Which timing should be used?",
    options: [
      'AFTER — to check the data once committed',
      'INSTEAD OF — to replace the INSERT operation',
      'BEFORE — to intercept and validate before the row is written',
      'AFTER — because :NEW values are only available after INSERT'
    ],
    correctOption: 2,
    explanation: 'BEFORE triggers execute before the triggering event, making them ideal for validation and data modification before a row is persisted. If validation fails, you can raise an error and the INSERT is cancelled. AFTER triggers run after the event is already committed. D is factually wrong — :NEW is available in both BEFORE and AFTER row-level triggers.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Timing: BEFORE / AFTER / INSTEAD OF',
    question: 'A company wants to record completed salary changes (old salary, new salary, who changed it, when) into an audit table. Which trigger timing is MOST appropriate?',
    options: [
      'BEFORE UPDATE — to capture data before the change',
      'INSTEAD OF UPDATE — to skip the actual update',
      'AFTER UPDATE — to log the completed change',
      'BEFORE INSERT — to prevent new salaries from being added'
    ],
    correctOption: 2,
    explanation: 'AFTER triggers execute after the event completes successfully, making them the standard choice for auditing and logging. You know the change was committed, so logging it is accurate. BEFORE would run before the write — the change might still fail. INSTEAD OF replaces the operation entirely, which is not the goal here.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Timing: BEFORE / AFTER / INSTEAD OF',
    question: 'An INSTEAD OF trigger is created on a view called `v_employee_dept`. What does this trigger do when a user executes an INSERT on that view?',
    options: [
      'It runs the INSERT on the view first, then fires after completion.',
      'It replaces the original INSERT operation with the custom logic defined in the trigger body.',
      'It converts the INSERT into an UPDATE automatically.',
      'It prevents any DML from happening on the view permanently.'
    ],
    correctOption: 1,
    explanation: "INSTEAD OF triggers replace (not supplement) the original DML operation with the custom logic you define. Oracle cannot directly perform DML on complex views (with JOINs, aggregates, etc.), so the INSTEAD OF trigger intercepts the operation and you manually write the INSERT into the underlying base tables. A and C mischaracterize what 'INSTEAD OF' means. D is wrong — it enables DML, not prevents it."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Timing: BEFORE / AFTER / INSTEAD OF',
    question: 'On which type of database object can an INSTEAD OF trigger be defined?',
    options: [
      'Tables only',
      'Tables and Sequences',
      'Views only',
      'Any database object including tables, views, and stored procedures'
    ],
    correctOption: 2,
    explanation: 'INSTEAD OF triggers are exclusively defined on views. They exist because certain complex views (with JOINs, GROUP BY, DISTINCT, aggregates) cannot have DML performed on them directly. INSTEAD OF triggers allow you to define how that DML should propagate to the underlying base tables. They cannot be placed on regular tables.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Scope: Statement vs Row Level',
    question: 'A single UPDATE statement modifies 200 rows in the ORDERS table. A row-level trigger exists on this table. How many times does the trigger fire?',
    options: [
      'Once — regardless of how many rows are affected',
      'Twice — once at the start and once at the end',
      '200 times — once for each affected row',
      "Zero times — UPDATE doesn't fire row-level triggers"
    ],
    correctOption: 2,
    explanation: 'A row-level trigger (defined with FOR EACH ROW) fires once for every row affected by the triggering statement. If 200 rows are updated, the trigger fires 200 times. This is in contrast to a statement-level trigger, which fires exactly once regardless of how many rows are affected.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Scope: Statement vs Row Level',
    question: 'The same UPDATE statement modifies 200 rows. A statement-level trigger (no FOR EACH ROW) exists. How many times does it fire?',
    options: [
      '200 times',
      'Once',
      'It depends on the number of columns updated',
      'Twice — before and after'
    ],
    correctOption: 1,
    explanation: "A statement-level trigger fires exactly once per SQL statement, regardless of how many rows the statement affects. This makes statement-level triggers more efficient for operations that don't need per-row inspection. Row-level triggers (FOR EACH ROW) fire once per affected row."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Scope: Statement vs Row Level',
    question: 'Examine this trigger header. What is its scope of execution?',
    options: [
      'Statement-level — fires once per UPDATE statement',
      'Row-level — fires once for every row affected by the UPDATE',
      'INSTEAD OF — replaces the UPDATE operation',
      'DDL-level — fires when the table structure changes'
    ],
    correctOption: 1,
    explanation: 'The presence of FOR EACH ROW in the trigger definition makes it a row-level trigger. It will fire once for every individual row that the UPDATE statement touches. Without FOR EACH ROW, it would be a statement-level trigger (firing once per statement).'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Scope: Statement vs Row Level',
    question: 'A developer needs a trigger to count the TOTAL number of rows deleted in a single DELETE statement and log that count. Which scope is appropriate and why?',
    options: [
      'Row-level, because it needs to count each row individually.',
      'Statement-level, because it executes once after the entire DELETE is done and can log the overall operation.',
      'INSTEAD OF, because DELETE operations require replacement logic.',
      'Row-level with :OLD, to subtract one from the count each time.'
    ],
    correctOption: 1,
    explanation: 'For logging the overall operation count of a single statement, a statement-level trigger (firing once after the whole DELETE) is the right fit. A row-level trigger would fire per row and would complicate aggregation. C (INSTEAD OF) is only for views. D would work but is unnecessarily complex and inefficient compared to a statement-level approach.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'In a row-level trigger, which pseudo-record contains the value of a column BEFORE an UPDATE is applied?',
    options: [ ':NEW', ':CURRENT', ':OLD', ':BEFORE' ],
    correctOption: 2,
    explanation: ":OLD holds the existing (pre-change) values of a row before an UPDATE or DELETE. :NEW holds the incoming values during INSERT or UPDATE. :CURRENT and :BEFORE do not exist in Oracle's trigger pseudo-record vocabulary."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'A trigger on an EMPLOYEES table uses :OLD.department_id. For which DML operations is :OLD guaranteed to have a meaningful (non-NULL) value?',
    options: [
      'INSERT only',
      'INSERT and UPDATE',
      'UPDATE and DELETE',
      'DELETE only'
    ],
    correctOption: 2,
    explanation: ":OLD holds the row's existing values, which only exist during UPDATE (the value before change) and DELETE (the value being removed). For INSERT, :OLD is NULL because there was no previous row. :NEW is NULL for DELETE because there is no 'new' value when a row is removed."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'Examine this trigger. What does it do, and will it work correctly?',
    options: [
      'It logs negative prices to an audit table after the update.',
      'It raises an error whenever price goes negative.',
      'It intercepts the update and sets price to 0 if the incoming value is negative, before the row is saved.',
      'It will fail because you cannot modify :NEW values inside a trigger.'
    ],
    correctOption: 2,
    explanation: 'In a BEFORE row-level trigger, you CAN assign new values to :NEW fields — those modified values are what Oracle actually writes to the table. This trigger intercepts any UPDATE that tries to set a negative price and silently corrects it to 0 before saving. D is wrong: modifying :NEW is a valid and common BEFORE trigger pattern.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'Can :NEW and :OLD pseudo-records be used inside a statement-level trigger?',
    options: [
      'Yes — they hold aggregate values across all affected rows.',
      'Yes — but only :OLD is available in statement-level triggers.',
      'No — :NEW and :OLD are only available in row-level triggers (FOR EACH ROW).',
      'Yes — :NEW and :OLD always refer to the first affected row.'
    ],
    correctOption: 2,
    explanation: ':NEW and :OLD are row-level pseudo-records — they only exist when the trigger has FOR EACH ROW. A statement-level trigger fires once for the whole statement and has no concept of individual row values, so :NEW and :OLD are not available. Attempting to use them in a statement-level trigger causes a compilation error.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'A developer writes a trigger for an INSERT operation and references :OLD.employee_id. What value will :OLD.employee_id contain during the INSERT?',
    options: [
      'The employee_id of the last row inserted before this one.',
      'NULL — because there is no previous row value for a new INSERT.',
      'The same value as :NEW.employee_id.',
      'Zero (0) — Oracle initializes :OLD to zero for INSERT triggers.'
    ],
    correctOption: 1,
    explanation: "For INSERT operations, :OLD is NULL for all columns because there is no pre-existing row — you are creating a new record. :OLD only contains meaningful data for UPDATE (the value before the change) and DELETE (the value being removed). Referencing :OLD in an INSERT trigger won't cause an error, but the values will always be NULL."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: ':NEW and :OLD Pseudo-Records',
    question: 'Examine the trigger below. A user runs: UPDATE employees SET salary = 4000 WHERE emp_id = 7 (current salary is 6000). What happens?',
    options: [
      'The update succeeds because RAISE_APPLICATION_ERROR only logs the message.',
      'The trigger fires but does nothing because 4000 > 0.',
      'The update is blocked and Oracle returns error ORA-20001.',
      'The trigger fires AFTER the update, so the salary is changed to 4000 first.'
    ],
    correctOption: 2,
    explanation: 'Since 4000 < 6000, the condition :NEW.salary < :OLD.salary is TRUE. RAISE_APPLICATION_ERROR immediately stops execution, rolls back the statement, and returns the custom error ORA-20001 to the user. The UPDATE never completes. D is wrong — the trigger is BEFORE, so it intercepts before the change is written.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'INSTEAD OF Triggers',
    question: 'A view called `v_dept_summary` is defined with GROUP BY and SUM(). A developer tries to INSERT a row into this view and gets an error. Which trigger type solves this?',
    options: [
      'BEFORE INSERT trigger on the view',
      'AFTER INSERT trigger on the underlying base table',
      'INSTEAD OF INSERT trigger on the view',
      'A DDL trigger to recreate the view without GROUP BY'
    ],
    correctOption: 2,
    explanation: "Views containing GROUP BY, DISTINCT, aggregates, or JOINs are not directly updatable. An INSTEAD OF INSERT trigger on the view intercepts the INSERT and lets you manually define how to route the data to the underlying base tables. BEFORE/AFTER triggers on such views won't fix the inherent non-updatability. D doesn't address the INSTEAD OF solution."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'INSTEAD OF Triggers',
    question: 'Which of the following statements about INSTEAD OF triggers is TRUE?',
    options: [
      'They can be statement-level or row-level depending on the FOR EACH ROW clause.',
      'They always operate at the row level and cannot be statement-level.',
      'They can be defined on tables and views alike.',
      'They execute AFTER the original DML, then undo it.'
    ],
    correctOption: 1,
    explanation: "INSTEAD OF triggers are always row-level — they always implicitly behave as FOR EACH ROW. You cannot create a statement-level INSTEAD OF trigger. Additionally, they can only be defined on views, not on tables (A and C are wrong). D incorrectly describes their behavior — 'instead of' means the original DML never executes at all."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Practical Uses of Triggers',
    question: 'An e-commerce company wants to automatically update the `order_total` column in the ORDERS table whenever a row in the ORDER_ITEMS table is inserted or updated. Which trigger use case does this represent?',
    options: [
      'Auditing — tracking data changes',
      'Security controls — restricting unauthorized access',
      'Automatic calculation — maintaining derived values',
      'Validation — enforcing business rules'
    ],
    correctOption: 2,
    explanation: "Maintaining a derived value (order_total computed from item quantities and prices) is a classic 'automatic calculation' trigger use case. The trigger fires on ORDER_ITEMS changes and updates the computed total in ORDERS. Auditing records changes to an audit table. Validation prevents bad data. Security limits who can modify data."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Practical Uses of Triggers',
    question: 'A hospital database must record who changed a patient record, the old values, the new values, and when — for compliance reasons. This is stored in a separate PATIENT_AUDIT table. Which trigger use case is this?',
    options: [
      'Automatic Calculation',
      'Auditing',
      'Validation',
      'Security Controls'
    ],
    correctOption: 1,
    explanation: 'Tracking changes (old values, new values, who changed them, when) and storing that history in an audit table is the Auditing use case for triggers. This ensures a compliance trail regardless of which application made the change. Validation prevents bad data. Automatic calculation updates derived fields. Security controls restrict who can perform certain actions.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Practical Uses of Triggers',
    question: "A trigger fires on INSERT to the LOANS table and checks: if the loan amount exceeds the customer's credit limit, it raises an error. Which trigger use case is this?",
    options: [
      'Auditing',
      'Automatic Calculation',
      'Validation',
      'Backup and Recovery'
    ],
    correctOption: 2,
    explanation: "Enforcing a business rule that standard constraints cannot handle (comparing to another table's value) is the Validation use case. CHECK constraints cannot reference other tables, so a trigger is needed. Auditing logs changes. Automatic calculation updates derived columns. Backup/Recovery is unrelated to triggers."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Advantages, Limitations & Best Practices',
    question: 'A developer is trying to debug a complex bug in a system where data is being silently modified. They discover the culprit is a trigger they forgot existed. Which trigger LIMITATION does this illustrate?',
    options: [
      'Triggers cause the database to shut down unexpectedly.',
      'Triggers contain hidden logic that makes systems harder to debug and understand.',
      'Triggers cannot access :NEW and :OLD simultaneously.',
      'Triggers automatically delete themselves after firing once.'
    ],
    correctOption: 1,
    explanation: 'One of the primary limitations of triggers is hidden logic — they fire automatically and invisibly. A developer unaware of an existing trigger may struggle to understand why data is being changed. This is why best practices recommend keeping triggers simple, well-named, and well-documented. A, C, and D are all factually incorrect.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Advantages, Limitations & Best Practices',
    question: 'A DBA notices that a batch job that UPDATE 1 million rows is running very slowly since a new trigger was added. What is the MOST likely cause?',
    options: [
      'The trigger is a statement-level trigger and fired too many times.',
      'The trigger is a row-level trigger executing once per row, adding overhead to 1 million iterations.',
      'Triggers always improve performance — something else must be wrong.',
      'AFTER triggers cannot be used with large batch operations.'
    ],
    correctOption: 1,
    explanation: 'Row-level triggers fire once per affected row. For a batch operation affecting 1 million rows, a row-level trigger executes 1 million times, adding significant overhead. This is a well-known performance limitation of row-level triggers on large datasets. A is backwards — statement-level fires ONCE, which is more efficient. C is wrong. D is incorrect.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Advantages, Limitations & Best Practices',
    question: 'According to best practices, which naming convention is MOST appropriate for a trigger that audits changes on the EMPLOYEE table?',
    options: [ 'my_trigger_1', 'trigger_new', 'trg_emp_audit', 'emp' ],
    correctOption: 2,
    explanation: "Best practices recommend clear, descriptive naming conventions for triggers — the name should convey what the trigger does and what it acts on. 'trg_emp_audit' indicates it's a trigger (trg_), on the employee table (emp_), for auditing purposes (audit). Names like 'my_trigger_1', 'trigger_new', or 'emp' are vague and don't describe purpose or scope."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Mutating Table Error',
    question: 'A developer creates a row-level AFTER INSERT trigger on the ORDERS table. Inside the trigger, they write a SELECT to query the ORDERS table itself. What error will occur?',
    options: [
      'ORA-00942: Table or view does not exist',
      'ORA-04091: Mutating table error — the trigger cannot read the same table it is firing on',
      'No error — reading the same table in a trigger is always safe',
      'ORA-00001: Unique constraint violation'
    ],
    correctOption: 1,
    explanation: "The mutating table error (ORA-04091) occurs when a row-level trigger tries to query or modify the same table that caused the trigger to fire. The table is in an intermediate 'mutating' state during the DML operation and cannot be consistently read. Statement-level triggers do not have this restriction. A, C, and D describe unrelated errors."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Mutating Table Error',
    question: 'Which type of trigger is IMMUNE to the mutating table error when accessing the table it fires on?',
    options: [
      'BEFORE row-level triggers',
      'AFTER row-level triggers',
      'Statement-level triggers',
      'INSTEAD OF triggers on tables'
    ],
    correctOption: 2,
    explanation: 'Statement-level triggers fire once after all row processing is complete, so the table is no longer in a mutating state. They can safely query the same table. Row-level triggers (both BEFORE and AFTER) are susceptible to the mutating table error when they try to read the triggering table mid-operation.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Triggers – Data Dictionary',
    question: 'A developer wants to list all triggers they personally own in the database. Which data dictionary view should they query?',
    options: [
      'ALL_TRIGGERS',
      'DBA_TRIGGERS',
      'USER_TRIGGERS',
      "USER_OBJECTS WHERE object_type = 'TRIGGER'"
    ],
    correctOption: 2,
    explanation: "USER_TRIGGERS shows only triggers owned by the currently connected user. ALL_TRIGGERS shows triggers the user can access (including others' triggers they have privilege to view). DBA_TRIGGERS shows all triggers in the entire database and requires DBA privilege. D would also work as an alternative, but C is the most direct and standard approach."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Triggers – Data Dictionary',
    question: 'Examine this query. What information does it retrieve?',
    options: [
      'It retrieves all triggers in the database that affect any table.',
      'It retrieves the source code text of triggers on the PAYROLL table.',
      'It retrieves the name, type (BEFORE/AFTER), and event (INSERT/UPDATE/DELETE) for triggers on the PAYROLL table owned by the current user.',
      'It retrieves all DBA-level triggers regardless of the current user.'
    ],
    correctOption: 2,
    explanation: "This query uses USER_TRIGGERS filtered by table_name = 'PAYROLL'. It retrieves metadata about those triggers: their names, timing type (BEFORE/AFTER/INSTEAD OF), and the triggering event (INSERT/UPDATE/DELETE). It does NOT return source code (that requires USER_SOURCE). It only shows the current user's triggers, not all database triggers."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Dependencies',
    question: 'A trigger calls a stored procedure named `calc_bonus`. A DBA later modifies the `calc_bonus` procedure signature. What is the likely effect on the trigger?',
    options: [
      'Nothing — triggers are isolated from changes to procedures they call.',
      'The trigger becomes INVALID and may need to be recompiled.',
      'The trigger automatically updates itself to match the new procedure.',
      'The trigger begins calling the OLD version of calc_bonus.'
    ],
    correctOption: 1,
    explanation: 'Oracle tracks dependencies between database objects. When a trigger depends on a procedure, and that procedure is changed, Oracle marks the trigger as INVALID. It will fail when next fired until it is explicitly recompiled (ALTER TRIGGER trg_name COMPILE) or recompiles automatically on next use. A, C, D are all wrong — Oracle does not isolate, auto-update, or cache old versions.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Dependencies',
    question: 'Which data dictionary view would you query to see what objects (tables, procedures) a specific trigger depends on?',
    options: [
      'USER_TRIGGERS',
      'USER_SOURCE',
      'USER_DEPENDENCIES',
      'USER_OBJECTS'
    ],
    correctOption: 2,
    explanation: "USER_DEPENDENCIES tracks dependency relationships between database objects. Querying it with type = 'TRIGGER' shows what each trigger references (tables, procedures, functions). USER_TRIGGERS shows trigger metadata. USER_SOURCE shows trigger code text. USER_OBJECTS shows all objects with their status but not their dependencies."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Structure – Code Reading',
    question: 'Identify what is WRONG with this trigger definition:',
    options: [
      'Nothing — this is a valid statement-level AFTER DELETE trigger.',
      'AFTER DELETE triggers cannot INSERT into other tables.',
      'The trigger is missing FOR EACH ROW, so :OLD cannot be used here — but the trigger itself is syntactically valid as a statement-level trigger.',
      'SYSDATE and USER cannot be used inside trigger bodies.'
    ],
    correctOption: 0,
    explanation: 'This is a perfectly valid statement-level AFTER DELETE trigger. It fires once after the DELETE statement completes and logs the time and username. No FOR EACH ROW means it is statement-level — which is fine here because the developer only wants one log entry per DELETE statement, not one per row. B and D are false. C is true as a statement but the trigger is still valid.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Structure – Code Reading',
    question: 'What will happen when this trigger fires on a DELETE of 3 rows?',
    options: [
      'One row will be inserted into accounts_archive for the entire DELETE statement.',
      'Three rows will be inserted into accounts_archive — one per deleted row — capturing the old values before deletion.',
      'The trigger will raise a mutating table error because it reads :OLD.',
      'The DELETE will fail because you cannot INSERT inside a BEFORE trigger.'
    ],
    correctOption: 1,
    explanation: "This is a BEFORE DELETE FOR EACH ROW trigger. It fires once per deleted row (3 times for 3 rows). Each firing archives that row's :OLD values to accounts_archive BEFORE the row is removed — a common archive/soft-delete pattern. A is wrong (it's row-level). C is wrong — mutating table errors occur when querying the SAME table being affected, not when reading :OLD. D is wrong — INSERTs into OTHER tables inside triggers are perfectly valid."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Trigger Structure – Code Reading',
    question: 'This trigger should prevent DELETE operations on weekends. Spot the logical bug:',
    options: [
      'RAISE_APPLICATION_ERROR cannot be used inside a BEFORE trigger.',
      'There is no logical bug — this correctly blocks deletes on Saturday and Sunday.',
      'The trigger fires AFTER the delete, so the data is already removed.',
      'FOR EACH ROW is unnecessary — weekend checks should be statement-level.'
    ],
    correctOption: 1,
    explanation: "There is no bug here — the logic is correct. TO_CHAR(SYSDATE, 'DY') returns the abbreviated day name. Checking IN ('SAT', 'SUN') accurately identifies weekends. RAISE_APPLICATION_ERROR is valid in any trigger section. The BEFORE timing ensures the delete is blocked before any rows are removed. D is a style opinion, not a bug."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Introduction to PL/SQL Packages',
    question: 'A team of developers works on an HR system with 30 related stored procedures and functions (hire_employee, fire_employee, calculate_bonus, etc.). What Oracle feature would BEST organize all of this related code into a single, manageable unit?',
    options: [
      'Store them all as anonymous blocks in separate script files.',
      'A PL/SQL Package that groups the related procedures and functions together.',
      'A single mega-procedure that contains all 30 subprocedures inside it.',
      'A DDL trigger that manages the related logic automatically.'
    ],
    correctOption: 1,
    explanation: 'PL/SQL Packages are designed exactly for this scenario — grouping related procedures, functions, variables, and cursors into one named, organized unit. This promotes modular programming, code reusability, and maintainability. A (anonymous blocks) are not reusable. C (mega-procedure) is unmanageable. D (DDL trigger) is for schema event auditing, not code organization.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Introduction to PL/SQL Packages',
    question: 'Which of the following items can a PL/SQL Package group together?',
    options: [
      'Only procedures and functions',
      'Procedures, functions, variables, cursors, and type definitions',
      'Tables, views, and indexes',
      'Only public procedures visible to all users'
    ],
    correctOption: 1,
    explanation: 'A PL/SQL Package can contain procedures, functions, variables (package-level), cursors, type definitions, and exceptions. This makes it a rich container for all related PL/SQL code and data structures. C (tables, views, indexes) are schema objects, not PL/SQL code elements. A and D are incomplete descriptions.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Specification vs Body',
    question: 'A Package Specification declares a procedure called `get_employee_count`. The Package Body does NOT include an implementation for `get_employee_count`. What happens?',
    options: [
      'The package compiles successfully and uses a default empty implementation.',
      'The body compilation fails because every item declared in the spec must be implemented in the body.',
      'Oracle auto-generates the implementation from the declaration.',
      'The spec is automatically updated to remove the missing procedure.'
    ],
    correctOption: 1,
    explanation: 'The Package Body must implement everything declared in the Package Specification. The spec defines the contract (public interface), and the body must fulfill it. If the body is missing an implementation for a spec-declared item, the body will fail to compile. A, C, D are all wrong — Oracle enforces this contract strictly.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Specification vs Body',
    question: 'A package body contains a private helper function `format_name` that is NOT declared in the package specification. Which statement is TRUE?',
    options: [
      'The package will fail to compile because all functions must be in the spec.',
      'format_name is a private function — it can only be called by other code within the same package body, not by external code.',
      'format_name automatically becomes public because it is in the body.',
      'Private functions must be placed in a separate package body.'
    ],
    correctOption: 1,
    explanation: 'Items in the Package Body that are NOT declared in the Package Specification are private — they are implementation details hidden from external users and can only be used internally within the package. This is the key encapsulation benefit of packages. A is wrong — bodies can have private items not in the spec. C and D are incorrect.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Specification vs Body',
    question: 'What happens to the Package Body if the Package Specification is modified (e.g., a new procedure is added to the spec)?',
    options: [
      'Nothing — the body and spec are completely independent.',
      'The body is automatically updated to include the new procedure.',
      'The body becomes INVALID and must be recompiled to implement the new spec declaration.',
      'The old spec is preserved and both versions coexist.'
    ],
    correctOption: 2,
    explanation: "The Spec and Body must always be consistent. When the spec changes, Oracle marks the body as INVALID because it no longer matches the interface. The body must be updated (to implement the new spec declaration) and recompiled. A is wrong — they are tightly coupled. B and D are factually incorrect about Oracle's behavior."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Specification vs Body',
    question: 'Examine these two code blocks. Which is the Package Specification and which is the Package Body?',
    options: [
      'Both are Package Bodies — the first is just a shorter version.',
      'Block 1 is the Package Specification (declares the interface); Block 2 is the Package Body (implements the logic).',
      'Block 1 is the Package Body and Block 2 is the Package Specification.',
      'Both are Package Specifications — the implementation is stored separately.'
    ],
    correctOption: 1,
    explanation: 'Block 1 is the Package Specification — it uses CREATE OR REPLACE PACKAGE (no BODY keyword) and only DECLARES procedure/function signatures without any BEGIN...END implementation. Block 2 is the Package Body — it uses CREATE OR REPLACE PACKAGE BODY and contains the full implementations with BEGIN...END blocks. The spec is the interface; the body is the implementation.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Specification vs Body',
    question: 'A Package Specification is created but no Package Body exists yet. What happens when a user tries to call a procedure declared in that spec?',
    options: [
      'Oracle executes a default empty version of the procedure.',
      'The spec is automatically deleted because it has no body.',
      'The call fails — the spec exists but without a body the package is not executable.',
      'The call succeeds because the spec declaration is sufficient for execution.'
    ],
    correctOption: 2,
    explanation: 'A Package Specification can exist without a body (it compiles), but a spec without a body is not useful — no actual code can run. Any attempt to call a procedure/function from a spec-only package will fail at runtime. The spec defines the interface; the body provides the implementation. Without the body, there is nothing to execute.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Data Dictionary',
    question: 'A developer wants to check whether the package `PAYROLL_PKG` is valid or invalid. Which query is MOST direct?',
    options: [
      "SELECT text FROM user_source WHERE name = 'PAYROLL_PKG';",
      "SELECT trigger_name FROM user_triggers WHERE table_name = 'PAYROLL_PKG';",
      "SELECT object_name, status FROM user_objects WHERE object_type = 'PACKAGE';",
      'DESC payroll_pkg;'
    ],
    correctOption: 2,
    explanation: "USER_OBJECTS contains a STATUS column (VALID or INVALID) for all schema objects including packages. Querying with object_type = 'PACKAGE' filters to show packages and their current compilation status. A (USER_SOURCE) retrieves the source code text, not the status. B queries triggers, not packages. D (DESC) shows the interface but not the validity status."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Data Dictionary',
    question: 'A DBA runs: DROP PACKAGE emp_pkg; What is the result?',
    options: [
      'Only the Package Body is dropped; the Specification remains.',
      'Only the Package Specification is dropped; the Body remains.',
      'Both the Package Specification and Package Body are dropped.',
      'The package is marked INVALID but not physically removed.'
    ],
    correctOption: 2,
    explanation: 'DROP PACKAGE drops both the Package Specification AND the Package Body together in one command. If you only want to remove the body (keeping the spec), you use DROP PACKAGE BODY emp_pkg. After dropping only the body, the spec remains but the package becomes non-executable until a new body is created.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Data Dictionary',
    question: 'A developer runs: DROP PACKAGE BODY hr_pkg; The Package Specification still exists. What is the state of hr_pkg now?',
    options: [
      'The spec is automatically deleted along with the body.',
      'The package works normally — the spec alone is sufficient.',
      'The spec remains but the package is unusable until a new body is created.',
      'The spec is marked VALID and will auto-generate a new body.'
    ],
    correctOption: 2,
    explanation: 'DROP PACKAGE BODY removes only the implementation, leaving the specification intact. The spec defines the interface (procedure/function signatures), but without the body there is no executable code. The package becomes non-functional — any call to its procedures will fail — until a new Package Body is created. The spec itself is not affected.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Package Data Dictionary',
    question: 'A developer needs to review the source code of the package body for `FINANCE_PKG`. Which query retrieves the source text?',
    options: [
      "SELECT object_name, status FROM user_objects WHERE object_type = 'PACKAGE BODY';",
      "SELECT text FROM user_source WHERE name = 'FINANCE_PKG' ORDER BY line;",
      "SELECT trigger_type FROM user_triggers WHERE table_name = 'FINANCE_PKG';",
      "SELECT * FROM user_dependencies WHERE name = 'FINANCE_PKG';"
    ],
    correctOption: 1,
    explanation: "USER_SOURCE stores the source code text of PL/SQL objects (packages, procedures, functions, triggers). Querying by name = 'FINANCE_PKG' ordered by LINE returns the code in proper sequence. A retrieves status metadata, not code. C queries trigger metadata. D queries object dependencies, not source code."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'A company wants to prevent any DML (INSERT, UPDATE, DELETE) on the PRODUCTS table between 11 PM and 6 AM for maintenance. What is the correct approach?',
    options: [
      "Create a CHECK constraint using TO_CHAR(SYSDATE,'HH24').",
      'Create a BEFORE INSERT OR UPDATE OR DELETE trigger on PRODUCTS that checks the current hour and raises an error during the maintenance window.',
      'Create an AFTER DELETE trigger that rolls back the transaction.',
      'Create a DDL trigger on PRODUCTS to block structural changes.'
    ],
    correctOption: 1,
    explanation: "A BEFORE trigger on all three DML operations can check SYSDATE's hour and raise an error if it falls in the maintenance window — blocking the operation before it's written. A is wrong — CHECK constraints cannot reference SYSDATE dynamically. C is wrong — AFTER triggers fire after the change, and rolling back there is complex/incorrect design. D is for schema changes, not DML."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: "Two Oracle developers debate: Dev A says 'Put all our business logic in triggers — it's automatic.' Dev B says 'Keep triggers small; put complex logic in packages.' Who is following best practices?",
    options: [
      'Dev A — triggers should contain all business logic for automation.',
      'Dev B — triggers should be small and simple; complex logic belongs in packages or procedures.',
      'Both are correct — it depends on preference.',
      'Neither — all business logic should be in the application layer, not the database.'
    ],
    correctOption: 1,
    explanation: "Oracle best practices explicitly state: keep triggers small and simple, and avoid complex business logic inside triggers. Heavy trigger logic causes debugging difficulty, performance issues, and hidden side effects. Complex, reusable logic should live in packages or procedures. Dev A's approach creates maintenance nightmares. D ignores the valid use of stored procedures and packages."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'Examine this package spec. A junior developer says they can call `calculate_tax` from their application. Are they correct?',
    options: [
      'No — functions declared in a package spec cannot be called externally.',
      'Yes — both generate_invoice and calculate_tax are declared in the spec, making them public and callable externally.',
      'Only if the developer has the DBA role.',
      'No — functions in packages always require a special EXECUTE IMMEDIATE wrapper.'
    ],
    correctOption: 1,
    explanation: 'Anything declared in the Package Specification is PUBLIC — it forms the external interface of the package and can be called by any user with EXECUTE privilege. Both generate_invoice and calculate_tax are in the spec, so both are accessible externally (e.g., invoice_pkg.calculate_tax(500)). A, C, D are all incorrect.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'A view `v_project_hours` is a JOIN of PROJECTS and TIMESHEETS with computed columns. A user tries to DELETE from this view. What is needed to make this work?',
    options: [
      'Add a PRIMARY KEY to the view.',
      'Rewrite the view without the JOIN.',
      'Create an INSTEAD OF DELETE trigger on the view to define how the delete propagates to the base tables.',
      'Grant the DELETE privilege directly on the view.'
    ],
    correctOption: 2,
    explanation: "Views with JOINs and computed columns are not directly deletable. An INSTEAD OF DELETE trigger intercepts the DELETE and lets you define custom logic — such as deleting from the appropriate base tables (TIMESHEETS, PROJECTS) based on the view's data. A (PRIMARY KEY) doesn't make views deletable. B may not be feasible if the JOIN is necessary. D (granting DELETE privilege) is needed but doesn't solve the technical restriction alone."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'Which query shows you all the triggers currently active on the SALES table that belong to you?',
    options: [
      "SELECT * FROM user_source WHERE name = 'SALES';",
      "SELECT trigger_name, table_name FROM user_triggers WHERE table_name = 'SALES';",
      "SELECT * FROM user_objects WHERE object_name = 'SALES';",
      "SELECT * FROM user_dependencies WHERE referenced_name = 'SALES';"
    ],
    correctOption: 1,
    explanation: "USER_TRIGGERS is the correct data dictionary view for trigger metadata. Filtering by table_name = 'SALES' returns all triggers you own that are defined on that table. A (USER_SOURCE) returns source code of objects named 'SALES'. C (USER_OBJECTS) returns the table object itself. D (USER_DEPENDENCIES) shows objects that depend ON SALES, not necessarily triggers specifically."
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'A developer creates a BEFORE INSERT row-level trigger on the CUSTOMERS table that checks if the email already exists by querying the CUSTOMERS table. What problem will arise?',
    options: [
      'No problem — BEFORE triggers can always query the same table.',
      'The trigger will fire twice for each row.',
      'A mutating table error will occur because the row-level trigger queries the same table it is firing on.',
      'The trigger will silently fail without raising an error.'
    ],
    correctOption: 2,
    explanation: 'This is a classic mutating table scenario. A row-level trigger that queries the same table it fires on causes ORA-04091 because the table is in a mutating state (mid-INSERT). The table is being modified, so Oracle prevents reads of it to avoid inconsistent results. Solutions include using a statement-level trigger or a compound trigger. A, B, D are all incorrect.'
  },
  {
    quizTitle: 'Triggers & PL/SQL Packages',
    category: 'Applied & Scenario Questions',
    question: 'A package spec declares a procedure `transfer_funds`. A developer modifies the spec to add a new parameter to `transfer_funds`. What must happen next for the package to work correctly?',
    options: [
      'Nothing — the body automatically inherits the new parameter.',
      'The Package Body must be updated to implement transfer_funds with the new parameter, then recompiled.',
      'The spec change is invalid and will be rolled back by Oracle.',
      'Only the calling application needs to be updated — the body is unaffected.'
    ],
    correctOption: 1,
    explanation: "When the Package Specification changes, the Package Body is automatically marked INVALID because it no longer matches the spec's interface. The developer must update the body to implement transfer_funds with the new parameter signature and recompile. The spec and body must always stay in sync. A and D are wrong — Oracle does not auto-propagate spec changes. C is wrong — spec changes are valid DDL operations."
  }
];