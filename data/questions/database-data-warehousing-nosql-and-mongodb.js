// data/questions/database-data-warehousing-nosql-and-mongodb.js

module.exports = 
[
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'OLTP vs OLAP',
    question: 'A bank processes thousands of ATM withdrawals, deposits, and transfers every minute. Each transaction must be recorded immediately and accurately. Which database system type is designed for this workload?',
    options: [
      'OLAP — because it handles high volumes of data.',
      'OLTP — because it handles fast, real-time, day-to-day transactions.',
      'A Data Warehouse — because it integrates data from multiple sources.',
      'A Data Mart — because banking is department-specific.'
    ],
    correctOption: 1,
    explanation: 'OLTP (Online Transaction Processing) is designed for fast, real-time, concurrent transactions — exactly what banking ATM operations require. OLAP is for complex analytical queries on historical data, not real-time writes. A Data Warehouse and Data Mart are read-heavy, analytical systems, not transactional.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'OLTP vs OLAP',
    question: "A retail chain's analysts need to run complex queries across five years of sales history — joining millions of rows, computing regional totals, and generating quarterly trend reports. Which system type suits this workload?",
    options: [
      'OLTP — because it stores current data accurately.',
      'OLAP — because it manages complex analytical queries over large volumes of historical data.',
      'A Key-Value Store like Redis — because speed is the priority.',
      'A single normalized OLTP database — because normalization always improves performance.'
    ],
    correctOption: 1,
    explanation: 'OLAP (Online Analytical Processing) is built for complex aggregations, trend analysis, and reporting across large volumes of historical data — exactly this use case. OLTP is optimized for short, real-time transactions, not multi-year analytical scans. Redis is a cache/key-value store, not an analytical engine. A normalized OLTP schema is slow for such heavy analytical queries.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'OLTP vs OLAP',
    question: 'Which statement CORRECTLY contrasts OLTP and OLAP workloads?',
    options: [
      'OLTP is optimized for complex SELECT queries; OLAP is optimized for fast INSERT/UPDATE/DELETE.',
      'OLTP has thousands of concurrent users with high DML; OLAP has few users running heavy analytical SELECTs.',
      'OLTP and OLAP are interchangeable — any database handles both equally well.',
      'OLAP systems update data every second; OLTP systems store only historical data.'
    ],
    correctOption: 1,
    explanation: 'OLTP: many concurrent users, constant DML (INSERT/UPDATE/DELETE), simple SELECTs, current data. OLAP: few internal users, complex analytical SELECTs, aggregations over millions of records, historical time-based data. A reverses the descriptions. C is wrong — a design optimized for writes performs poorly for analytics, and vice versa. D reverses the data recency characteristics.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'OLTP vs OLAP',
    question: 'An e-commerce company uses one Oracle database for both order processing (thousands of writes per second) and monthly sales analytics (complex aggregations). Performance suffers on both. What is the ROOT CAUSE?',
    options: [
      'Oracle cannot handle both DML and SELECT in the same database.',
      'A schema optimized for writes (DML/OLTP) performs poorly for analytics (SELECT/OLAP) — and vice versa. They need separate systems.',
      'The company needs to add more indexes to solve both problems.',
      'NoSQL would solve both problems simultaneously.'
    ],
    correctOption: 1,
    explanation: 'The core architectural lesson: OLTP and OLAP have fundamentally opposing optimization requirements. A normalized, write-optimized schema (OLTP) is slow for complex analytical reads; a de-normalized, read-optimized schema (OLAP) is slow for heavy DML. The solution is separate systems — a transactional OLTP database and a dedicated Data Warehouse for analytics. Adding indexes alone cannot solve this structural mismatch.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'OLTP vs OLAP',
    question: 'Consider two table designs: Table A is a fully normalized DEPT and EMP (separate tables, joined when needed). Table B is a de-normalized DEPT_EMP (one wide table with all columns combined). For a system processing thousands of new employee INSERTs per minute, which design is faster for DML?',
    options: [
      'Table B (DEPT_EMP) — because having all data in one place speeds up INSERTs.',
      'Table A (DEPT + EMP) — because normalized, smaller tables have faster DML operations.',
      'Both designs have identical INSERT performance.',
      'Table B is faster because it avoids JOIN operations during INSERT.'
    ],
    correctOption: 1,
    explanation: "Normalized tables (OLTP design) are smaller and have less redundant data, making DML (INSERT/UPDATE/DELETE) faster. Inserting into the smaller EMP table is quicker than writing to a wide de-normalized DEPT_EMP table that duplicates department information. De-normalized tables are optimized for SELECT, not DML. D misunderstands INSERTs — you don't JOIN during INSERT anyway."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Normalization vs De-normalization & Performance',
    question: 'A data analyst complains that querying the normalized OLTP database for a sales report takes 45 seconds because it requires 6 JOINs across large tables. The DBA suggests moving the reporting to a de-normalized OLAP schema. Why would this help?',
    options: [
      'De-normalization increases data redundancy, which speeds up DML operations.',
      'A de-normalized schema pre-combines related data, reducing or eliminating expensive JOIN operations for analytical queries.',
      'De-normalization removes indexes, which makes SELECTs faster.',
      'De-normalized databases store data in RAM, which is always faster.'
    ],
    correctOption: 1,
    explanation: 'De-normalization allows controlled redundancy — frequently combined data is stored together, so analytical queries need fewer or no JOIN operations. JOINs across large tables are expensive in OLAP scenarios. A is wrong — de-normalization slows DML (more data to write/update). C is wrong — indexes are separate from normalization. D is false.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Normalization vs De-normalization & Performance',
    question: 'Which scenario BEST demonstrates the trade-off between normalization and de-normalization?',
    options: [
      'A normalized DB is fast for SELECT but slow for INSERT — de-normalization fixes this.',
      'A normalized DB is slow for complex analytical SELECT (many JOINs) but fast for DML; a de-normalized DB is fast for analytical SELECT but slower for DML updates.',
      'Both approaches have the same performance — the difference is only in storage cost.',
      'De-normalization eliminates all redundancy from the database.'
    ],
    correctOption: 1,
    explanation: 'This is the core trade-off: normalized schemas minimize redundancy and excel at DML (OLTP) but require many JOINs for complex queries. De-normalized schemas allow redundancy to reduce JOINs, excelling at analytical reads (OLAP) but making DML slower and more complex (updating redundant data in multiple places). C and D are factually incorrect.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse – Definition & Purpose',
    question: 'A large hospital chain has 12 separate OLTP databases for different departments (billing, pharmacy, admissions, labs, etc.). Management wants a unified system to run cross-departmental reports and historical trend analysis. What should they build?',
    options: [
      'Merge all 12 OLTP databases into one large normalized database.',
      'A Data Warehouse — a centralized repository integrating data from multiple OLTP sources for analytical queries.',
      'Add more indexes to each of the 12 OLTP databases.',
      'Convert all 12 databases to MongoDB for flexibility.'
    ],
    correctOption: 1,
    explanation: "A Data Warehouse is designed exactly for this: a centralized, integrated, read-optimized repository that ingests data from multiple operational (OLTP) systems and supports analytical queries and decision-making. A is wrong — merging OLTP systems disrupts operations. C doesn't address integration. D (MongoDB) doesn't inherently solve cross-system integration for analytics."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse – Definition & Purpose',
    question: 'Which characteristic describes a Data Warehouse as NON-VOLATILE?',
    options: [
      'Data is deleted every 24 hours to keep storage costs low.',
      'Data is loaded periodically (e.g., nightly ETL) and then primarily read — not frequently updated or deleted.',
      'The warehouse runs on volatile RAM, not disk storage.',
      'Data in a warehouse changes as frequently as the source OLTP system.'
    ],
    correctOption: 1,
    explanation: 'Non-Volatile means once data is loaded into the Data Warehouse, it is generally not modified or deleted — it is read-only for analysis. Data enters in bulk loads (ETL jobs) and then stays stable, allowing consistent historical queries. This contrasts with OLTP systems where data changes constantly. A, C, D all misrepresent this characteristic.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse – Definition & Purpose',
    question: 'A Data Warehouse stores customer purchase history going back 7 years, with each record time-stamped. Which of the four Data Warehouse characteristics does this describe?',
    options: [
      'Subject-Oriented — organized around the Customers subject.',
      'Integrated — data from multiple customer systems.',
      'Time-Variant — historical data with time/period associations.',
      'Non-Volatile — data is not deleted.'
    ],
    correctOption: 2,
    explanation: 'Time-Variant means each record in the Data Warehouse is associated with a time period, enabling trend analysis and historical comparisons. Storing 7 years of time-stamped purchase history is the classic Time-Variant characteristic. Non-Volatile (D) refers to data not being updated, not the time dimension itself. Subject-Oriented and Integrated describe different aspects of DWH design.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse – Definition & Purpose',
    question: 'A global company pulls sales data from systems in North America, Europe, and Asia. Each region uses different currency codes and date formats. The Data Warehouse standardizes these into a single format on load. Which DWH characteristic does this standardization represent?',
    options: [
      'Time-Variant',
      'Non-Volatile',
      'Integrated',
      'Subject-Oriented'
    ],
    correctOption: 2,
    explanation: "Integrated means the Data Warehouse brings together data from multiple, heterogeneous sources and enforces consistent naming, formats, codes, and units — so that 'USD', '$', and 'US Dollar' all become one standard representation. This integration is what makes cross-system analysis possible. Time-Variant is about historical timestamping. Non-Volatile is about data stability. Subject-Oriented is about organizing around business subjects."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse – Definition & Purpose',
    question: 'Using the mnemonic SINT for Data Warehouse characteristics, what do the four letters stand for?',
    options: [
      'Scalable, Indexed, Normalized, Transactional',
      'Subject-Oriented, Integrated, Non-Volatile, Time-Variant',
      'Structured, Integrated, Networked, Transactional',
      'Subject-Oriented, Independent, Normalized, Time-Variant'
    ],
    correctOption: 1,
    explanation: "The four defining characteristics of a Data Warehouse (Inmon's model) are: Subject-Oriented, Integrated, Non-Volatile, and Time-Variant — remembered by the mnemonic SINT. Each property distinguishes a DWH from an operational OLTP system. The other options mix in incorrect terms like Scalable, Transactional, or Normalized."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse vs Data Mart',
    question: "The HR department of a large company needs its own analytical system containing only HR-related data (headcount, turnover, payroll trends). They don't need the full enterprise data. What should they build?",
    options: [
      "A full enterprise Data Warehouse — because it's always better to have more data.",
      'A Data Mart — a department-specific subset of data that is faster to build and tailored to HR needs.',
      'A new OLTP system specifically for HR analytics.',
      'A MongoDB collection for flexible HR document storage.'
    ],
    correctOption: 1,
    explanation: "A Data Mart is a department-specific, smaller subset of a Data Warehouse — faster to build and focused on a single business area. It's the right fit when a department (HR, Finance, Sales) needs analytics without requiring the full enterprise DWH scope. A is overkill for a single department. C is wrong — OLTP is for transactions, not analytics. D doesn't address the analytical reporting need."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Data Warehouse vs Data Mart',
    question: 'What is the relationship between a Data Warehouse and Data Marts in a typical enterprise architecture?',
    options: [
      'Data Marts replace the Data Warehouse — you only need one or the other.',
      'The Data Warehouse feeds multiple Data Marts — it is enterprise-wide while Data Marts are department-specific subsets.',
      'Data Marts are larger than Data Warehouses — they contain more historical data.',
      'A Data Warehouse is a collection of merged Data Marts with no independent existence.'
    ],
    correctOption: 1,
    explanation: "In a typical architecture: the central Data Warehouse integrates all enterprise data, and individual Data Marts are built from it for specific departments (Sales DM, Finance DM, HR DM). The DWH is comprehensive and enterprise-wide; Data Marts are focused and faster to use. A is wrong — they can coexist. C reverses the size relationship. D describes a 'Data Mart Bus' approach but overstates it."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'BI, OLAP & Data Mining',
    question: "A company's dashboard shows last month's total revenue, sales by region, and top 10 products sold. Which technology category does this represent?",
    options: [
      'Data Mining — because it uses algorithms to find patterns.',
      'OLAP — because it drills down into dimensions.',
      'Business Intelligence (BI) — because it converts raw data into meaningful business reports and KPIs.',
      'ETL — because it extracts and loads data from operational systems.'
    ],
    correctOption: 2,
    explanation: "Business Intelligence (BI) is the umbrella for tools and processes that turn raw data into actionable business insights — dashboards, reports, and KPIs. BI answers 'What is happening?' OLAP is a specific technique within BI for interactive multi-dimensional analysis. Data Mining uses statistical models for prediction. ETL is the data movement pipeline, not the visualization layer."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'BI, OLAP & Data Mining',
    question: 'An analyst wants to start with annual sales totals, then break them down by quarter, then by month, then by individual store. Which OLAP operation describes this progression?',
    options: [
      'Roll-Up — aggregating from detail to summary.',
      'Slice — selecting a single dimension value.',
      'Drill-Down — moving from summary to increasingly detailed levels.',
      'Dice — selecting a sub-cube of data.'
    ],
    correctOption: 2,
    explanation: 'Drill-Down navigates from a high-level summary (annual) into progressively finer detail (quarterly → monthly → store level). Roll-Up is the opposite — aggregating detail into summary. Slice selects a single dimension value (e.g., only Q3). Dice selects a sub-cube by filtering multiple dimensions simultaneously.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'BI, OLAP & Data Mining',
    question: 'An e-commerce company analyzes millions of past transactions and discovers that customers who buy running shoes also buy sports socks 73% of the time. Which technology category is being used?',
    options: [
      "BI — because it answers 'What is happening?'",
      'OLAP — because it drills into product dimensions.',
      'Data Mining — because it discovers hidden patterns and relationships using statistical techniques.',
      'ETL — because the data was extracted from the transaction system.'
    ],
    correctOption: 2,
    explanation: "Data Mining uses statistical and machine learning techniques to discover hidden patterns and predict future behavior. Identifying product co-purchase associations ('market basket analysis') is a classic Data Mining use case. BI answers 'what happened'. OLAP explains 'why and where'. Data Mining answers 'what will happen' or 'what hidden patterns exist'. ETL is the data pipeline, not the analysis."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'BI, OLAP & Data Mining',
    question: "Match the question to the correct technology: 'Which customers are MOST LIKELY to cancel their subscription next month?'",
    options: [
      'BI — this is a standard KPI report.',
      'OLAP — drill down into the customer dimension.',
      'Data Mining — predictive modeling to forecast future churn behavior.',
      'ETL — extract customer data for analysis.'
    ],
    correctOption: 2,
    explanation: "Predicting future customer behavior (churn prediction) requires Data Mining — applying machine learning or statistical models to historical data to forecast what will happen. BI reports on what IS happening. OLAP explores why and where patterns exist. ETL moves data between systems. The word 'likely' signals prediction, which is Data Mining's domain."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Leading Tools in Data Warehousing',
    question: 'A company wants to build a data warehouse on Microsoft Azure. They need integrated analytics, SQL-based querying, and compatibility with existing Microsoft tools. Which platform is MOST appropriate?',
    options: [
      'Snowflake',
      'Azure Synapse Analytics',
      'dbt',
      'Oracle Autonomous DW'
    ],
    correctOption: 1,
    explanation: "Azure Synapse Analytics is Microsoft's integrated analytics platform — it combines data warehousing with big data analytics and integrates natively with the Microsoft ecosystem (Power BI, Azure Data Factory, etc.). Snowflake is cloud-agnostic (not Microsoft-specific). dbt is a data transformation tool, not a warehouse platform. Oracle Autonomous DW is Oracle's cloud offering."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Leading Tools in Data Warehousing',
    question: 'A data engineer needs to extract sales data from an OLTP Oracle database, clean it, and load it into a Data Warehouse nightly. This process is called ETL. Which tool from the stack is purpose-built for this?',
    options: [
      'Power BI — for visualization and dashboards.',
      'Spark — for in-memory distributed processing.',
      'Informatica or Azure Data Factory — enterprise ETL/ELT platforms.',
      'Tableau — for interactive data visualization.'
    ],
    correctOption: 2,
    explanation: "Informatica (enterprise-grade ETL) and Azure Data Factory (Microsoft cloud data integration) are data integration tools specifically designed for Extract-Transform-Load workflows — moving data from source systems into warehouses. Power BI and Tableau are BI visualization tools (the 'show it' layer). Spark is a distributed processing engine used in the transformation layer but is not itself an ETL platform."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Leading Tools in Data Warehousing',
    question: 'A business analyst needs to build interactive dashboards with drag-and-drop visualizations and share them with executives. Which tool category does this belong to, and which tools fit?',
    options: [
      'ETL tools — Informatica or dbt.',
      'Cloud DWH Platforms — Snowflake or Azure Synapse.',
      'BI & Visualization tools — Power BI, Tableau, or Looker.',
      'Distributed Processing — Apache Spark.'
    ],
    correctOption: 2,
    explanation: 'Power BI, Tableau, and Looker are BI & Visualization tools — they connect to data sources and warehouses to produce interactive reports, charts, and dashboards. ETL tools (Informatica, dbt) move and transform data. Cloud DWH Platforms (Snowflake, Azure Synapse) store data. Spark processes large datasets in parallel — none of these are visualization tools.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Leading Tools in Data Warehousing',
    question: "Complete the analogy: 'The DWH stores it. _______ moves it. BI shows it. SQL connects everything.'",
    options: [ 'Python', 'ETL', 'Spark', 'NoSQL' ],
    correctOption: 1,
    explanation: "The complete phrase is: 'The DWH stores it. ETL moves it. BI shows it. SQL connects everything.' ETL (Extract, Transform, Load) is the pipeline that moves data from operational sources into the data warehouse. Python, Spark, and NoSQL are all part of the broader data ecosystem but don't fit this specific layered analogy."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Introduction to NoSQL Databases',
    question: 'A social media platform stores user profiles where some users have a phone number, others have multiple email addresses, some have a bio, and some have none of these. The structure varies wildly per user. Which database approach handles this MOST naturally?',
    options: [
      'A relational RDBMS with a strict schema — add NULL columns for missing fields.',
      'A NoSQL database with flexible schema — each document can have different fields.',
      'A fully normalized OLTP database with many optional JOIN tables.',
      'A Data Warehouse — because it integrates data from multiple sources.'
    ],
    correctOption: 1,
    explanation: 'NoSQL databases (like MongoDB) support flexible/schema-less documents — each record can have different fields without needing NULL placeholders for absent data. RDBMS requires pre-defined columns, forcing NULL values for absent fields — which is wasteful and inflexible. A normalized OLTP design with many join tables adds complexity. A Data Warehouse is analytical, not transactional.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Introduction to NoSQL Databases',
    question: 'Which of the following is a limitation of traditional RDBMS that led to the development of NoSQL databases?',
    options: [
      'RDBMS cannot store numeric data.',
      'RDBMS struggle with horizontal scalability and handling semi-structured or unstructured data at scale.',
      'RDBMS do not support any query language.',
      'RDBMS cannot enforce data integrity constraints.'
    ],
    correctOption: 1,
    explanation: 'RDBMS limitations that drove NoSQL adoption include: difficulty handling unstructured/semi-structured data, limited horizontal scalability (scaling across many cheap servers), and performance challenges in large-scale distributed systems. A, C, D are factually wrong — RDBMS can store numerics, uses SQL, and strongly enforces integrity.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Introduction to NoSQL Databases',
    question: "NoSQL stands for 'Not Only SQL.' What does this name imply about NoSQL databases?",
    options: [
      'NoSQL databases completely ban SQL — they use a completely different query language.',
      'NoSQL databases go beyond traditional SQL relational models — they may support SQL-like querying but also handle flexible, non-relational data.',
      'NoSQL means the database has no query language at all.',
      'NoSQL databases only store numerical data, not structured text.'
    ],
    correctOption: 1,
    explanation: "'Not Only SQL' suggests that these databases extend beyond the relational model — they are not limited to the rigid table-based, SQL-only paradigm. Some NoSQL databases support SQL-like querying. The name means they handle use cases where relational models fall short, not that they forbid SQL entirely. A, C, D are incorrect interpretations."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Types of NoSQL Databases',
    question: 'A session management system stores user login tokens that expire after 30 minutes. Each entry is simply a user ID paired with their session token — nothing more complex. Which NoSQL database type is MOST appropriate?',
    options: [
      'Graph Database (e.g., Neo4j) — because user relationships matter.',
      'Key-Value Store (e.g., Redis) — because data is simple key-value pairs and speed matters.',
      'Document-Oriented (e.g., MongoDB) — because documents support nested fields.',
      'Column-Family (e.g., Cassandra) — because sessions need column groups.'
    ],
    correctOption: 1,
    explanation: 'Key-Value Stores like Redis are ideal for simple, extremely fast lookups where data is a straightforward key → value pair (user_id → session_token). They excel at caching and session management. Graph databases are for complex relationship queries. Document DBs are for structured/semi-structured records with nested fields. Column-Family is for large-scale time-series or analytical workloads.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Types of NoSQL Databases',
    question: "LinkedIn needs to store relationships between users — who connects with whom, who follows whom, and find paths between users ('6 degrees of separation'). Which NoSQL type is purpose-built for this?",
    options: [
      'Document-Oriented (MongoDB)',
      'Key-Value Store (Redis)',
      'Column-Family (Cassandra)',
      'Graph Database (Neo4j)'
    ],
    correctOption: 3,
    explanation: 'Graph Databases (like Neo4j) store data as nodes (entities) and edges (relationships), making them perfect for relationship-heavy data — social networks, recommendation engines, and path-finding queries. Document, Key-Value, and Column-Family databases can store relationship data but are not optimized for traversing complex relationship graphs efficiently.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Types of NoSQL Databases',
    question: 'A content management system stores blog posts where each post has a title, author, publication date, and a variable number of tags, comments, and embedded media URLs. Which NoSQL type handles this nested, variable structure best?',
    options: [
      'Key-Value Store — because posts are identified by a unique ID.',
      'Document-Oriented (MongoDB) — because it stores JSON-like documents that naturally support nested, variable structures.',
      'Graph Database — because comments connect users to posts.',
      'Column-Family — because posts have columns for each field.'
    ],
    correctOption: 1,
    explanation: 'Document-Oriented databases (MongoDB) store data as JSON/BSON documents that support nested objects, arrays, and variable fields — perfect for blog posts with inconsistent numbers of tags, comments, and media. A Key-Value store has no nested structure. Graph DB is for relationship traversal, not document storage. Column-Family is for large-scale structured data with defined column groups.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'MongoDB Fundamentals',
    question: 'Which of the following correctly maps SQL concepts to their MongoDB equivalents?',
    options: [
      'Table → Document, Row → Collection, Column → Field',
      'Table → Collection, Row → Document, Column → Field',
      'Table → Field, Row → Collection, Column → Document',
      'Database → Collection, Table → Document, Column → Field'
    ],
    correctOption: 1,
    explanation: 'The correct SQL → MongoDB mapping is: Database → Database, Table → Collection, Row → Document, Column → Field, Primary Key → _id. A Collection is the MongoDB equivalent of a SQL table. A Document (JSON/BSON object) is the equivalent of a row. A Field is the equivalent of a column. A reverses the Table/Row relationship. C and D are completely incorrect mappings.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'MongoDB Fundamentals',
    question: 'In MongoDB, what is the role of the `_id` field in a document?',
    options: [
      'It is an optional field for human-readable document titles.',
      'It is the equivalent of a Primary Key — a unique identifier automatically assigned to each document.',
      'It stores the number of fields in the document.',
      'It is a foreign key linking to another collection.'
    ],
    correctOption: 1,
    explanation: "_id is MongoDB's equivalent of a SQL Primary Key — every document must have a unique _id value. If you don't provide one, MongoDB automatically generates an ObjectId for it. It uniquely identifies each document within a collection, just as a primary key uniquely identifies each row in a SQL table. It is mandatory, not optional."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'MongoDB Fundamentals',
    question: "A developer says: 'I'll use SQL to query MongoDB.' What is wrong with this?",
    options: [
      'Nothing — MongoDB fully supports standard SQL syntax.',
      'MongoDB does not use SQL — it uses the MongoDB Query Language (MQL) to query BSON documents.',
      'MongoDB only supports Python-based queries, not SQL or MQL.',
      'SQL works in MongoDB but only for SELECT statements.'
    ],
    correctOption: 1,
    explanation: "MongoDB does not support SQL — it has its own MongoDB Query Language (MQL) for querying BSON documents. MongoDB doesn't have tables, so SQL's table-based syntax doesn't apply. This is a fundamental difference from RDBMS. A, C, D are all factually incorrect statements about MongoDB's query support."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'MongoDB Fundamentals',
    question: 'What format does MongoDB use to store documents internally?',
    options: [
      'XML (eXtensible Markup Language)',
      'CSV (Comma-Separated Values)',
      'BSON (Binary JSON)',
      'Parquet (columnar format)'
    ],
    correctOption: 2,
    explanation: 'MongoDB stores documents in BSON (Binary JSON) format — a binary-encoded extension of JSON that supports additional data types and is more efficient for storage and traversal. Documents look like JSON when you read them in applications, but are stored as BSON internally. XML, CSV, and Parquet are different data formats used in other contexts.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Schema Flexibility in MongoDB',
    question: 'Examine this MongoDB collection. Is this valid?<pre><code>// employees collection:\n' +
      '{ "empno": 201, "ename": "Zara", "sal": 7000 }\n' +
      '{ "empno": 202, "ename": "Omar", "job": "Manager", "deptno": 30, "bonus": 1500 }\n' +
      '{ "empno": 203, "ename": "Priya", "skills": ["Python", "SQL", "MongoDB"], "remote": true }</code></pre>',
    options: [
      'Invalid — all documents in a collection must have the same fields.',
      'Valid — MongoDB allows each document in a collection to have different fields.',
      "Invalid — arrays like 'skills' cannot be stored in MongoDB documents.",
      "Valid — but only because these documents all share 'empno' and 'ename'."
    ],
    correctOption: 1,
    explanation: "MongoDB collections do NOT enforce a fixed schema. Each document can have completely different fields — document 1 has only sal, document 2 has job/deptno/bonus, document 3 has an array of skills and a boolean. This is schema flexibility, a core NoSQL advantage. A is the RDBMS behavior, not MongoDB's. C is wrong — MongoDB fully supports arrays. D is wrong — shared fields are not required."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Schema Flexibility in MongoDB',
    question: 'Examine the SQL table creation below. What happens if you try to INSERT a row that has a `skills` field (array of values) into this table?<pre><code>CREATE TABLE employees (\n' +
      '  empno   INT,\n' +
      '  ename   VARCHAR(20),\n' +
      '  job     VARCHAR(20),\n' +
      '  sal     INT\n' +
      ');</code></pre>',
    options: [
      'The INSERT succeeds and Oracle stores the array in the skills column.',
      "The INSERT fails — the strict schema requires all rows to follow the defined columns; there is no 'skills' column.",
      "Oracle automatically adds a 'skills' column to accommodate the new data.",
      'The INSERT is stored in a temporary buffer until a DBA adds the skills column.'
    ],
    correctOption: 1,
    explanation: "In RDBMS, the schema is strictly defined before data insertion. Every row must conform to the table's columns (empno, ename, job, sal). There is no 'skills' column, so the INSERT would fail — Oracle does not auto-add columns. To store arrays in SQL, you'd need a separate table and JOIN relationship. This inflexibility is one of the reasons NoSQL was developed."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Schema Flexibility in MongoDB',
    question: 'A startup rapidly changes its product model every few weeks — adding new attributes, removing old ones. Which approach handles these evolving requirements with LESS friction?',
    options: [
      'Relational RDBMS — use ALTER TABLE for every change.',
      'MongoDB — schema flexibility means no schema migrations are needed; just add/remove fields in new documents.',
      'A normalized Oracle database — normalization makes schema changes easy.',
      'A Data Warehouse — de-normalization makes it easy to add new attributes.'
    ],
    correctOption: 1,
    explanation: "MongoDB's schema flexibility is a major advantage for rapidly evolving applications — you can simply add new fields to new documents without running ALTER TABLE migrations that could affect millions of existing rows. RDBMS require ALTER TABLE for schema changes, which can be expensive on large tables. Data Warehouses are for analytics, not rapidly changing transactional data."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Schema Flexibility in MongoDB',
    question: "What is the PRIMARY RISK of MongoDB's flexible schema design?",
    options: [
      'MongoDB becomes extremely slow when documents have different fields.',
      'Schema flexibility can lead to data inconsistency — validation must be enforced at the application level, not the database level.',
      'MongoDB automatically deletes documents with missing fields.',
      'Queries become impossible when documents have different fields.'
    ],
    correctOption: 1,
    explanation: "The main disadvantage of flexible schema is data inconsistency risk. Without a strict enforced schema, one developer might store 'salary' as a number, another as a string, and a third might forget the field entirely. RDBMS enforce integrity at the database level; MongoDB relies on the application to validate and enforce consistency. A, C, D are factually incorrect."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Horizontal Scaling & Sharding',
    question: "A company's Oracle database is running slowly. The DBA decides to upgrade the server with more RAM, faster CPUs, and larger SSDs. What scaling approach is this?",
    options: [
      'Horizontal Scaling — adding more machines to distribute the load.',
      'Vertical Scaling — improving the capacity of a single existing server.',
      'Sharding — splitting data across multiple servers.',
      'Replication — copying data to backup servers.'
    ],
    correctOption: 1,
    explanation: "Vertical Scaling means improving a single server's hardware (more CPU, RAM, storage). Traditional RDBMS typically scale this way. The key limitation: vertical scaling has physical and financial limits — you can only make one machine so powerful. Horizontal Scaling (adding more servers) is what MongoDB/NoSQL uses. Sharding is a specific horizontal scaling technique."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Horizontal Scaling & Sharding',
    question: 'A MongoDB deployment contains 3 million employee records. Using a shard key of emp_id, the data is distributed as: Server 1 (emp_id 1–1000), Server 2 (emp_id 1001–2000), Server 3 (emp_id 2001–3000). What is this technique called, and what is its PRIMARY benefit?',
    options: [
      'Replication — data safety through redundancy.',
      'Sharding — splits large datasets across multiple servers, enabling horizontal scalability and parallel processing.',
      'Indexing — speeds up query lookups on the emp_id field.',
      'Normalization — splits data to reduce redundancy.'
    ],
    correctOption: 1,
    explanation: "Sharding distributes data across multiple servers (shards) based on a shard key. Each shard holds a portion of the data. Benefits: handles Big Data beyond one server's capacity, improves performance through parallel processing, and enables horizontal scalability by simply adding more shards. Replication copies data for redundancy. Indexing speeds up lookups but doesn't distribute data."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Horizontal Scaling & Sharding',
    question: 'Why is sharding CRITICAL for a web application with hundreds of millions of users?',
    options: [
      "Because SQL databases don't support large amounts of data.",
      'Because without sharding, all data must fit on and be processed by a single server — which has physical and performance limits at that scale.',
      'Because sharding enforces ACID transactions across all servers automatically.',
      'Because sharding eliminates the need for indexes.'
    ],
    correctOption: 1,
    explanation: "At massive scale (hundreds of millions of users), a single server cannot store all data or handle all queries — it's physically and financially impossible to vertically scale to that level. Sharding solves this by distributing the dataset across many servers, allowing near-infinite horizontal growth. A is wrong — SQL can handle large data with proper architecture. C is wrong — sharding introduces distributed transaction complexity. D is incorrect."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Horizontal Scaling & Sharding',
    question: 'A startup begins with 10,000 users and a single MongoDB server. They grow to 50 million users. What is the MongoDB-native approach to handle this growth?',
    options: [
      "Vertical scaling — continuously upgrade the single server's hardware.",
      'Horizontal scaling with sharding — add more servers and distribute data across them using a shard key.',
      'Normalize the data to reduce database size.',
      'Switch to an RDBMS — they handle growth better.'
    ],
    correctOption: 1,
    explanation: "MongoDB is designed for horizontal scaling — as data and traffic grow, you add more servers (shards) and MongoDB distributes the data and query load across them. This is the core architectural advantage over traditional RDBMS. Vertical scaling has a ceiling. Normalization reduces redundancy but doesn't address scale. RDBMS typically scale vertically and struggle at this scale without specialized solutions."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'When to Use SQL vs NoSQL',
    question: 'A financial institution needs to record every stock trade with guaranteed accuracy — no partial transactions, no inconsistent reads. Thousands of trades occur per second. Which database is appropriate?',
    options: [
      "MongoDB — because it's fast and scalable.",
      'Redis — because key-value pairs are the fastest.',
      'SQL (RDBMS) — because strong consistency, ACID transactions, and complex financial operations require it.',
      "Cassandra — because it's designed for high write throughput."
    ],
    correctOption: 2,
    explanation: 'Financial trading requires ACID transactions (Atomicity, Consistency, Isolation, Durability) to guarantee that partial trades never happen and reads are always consistent. SQL/RDBMS is built for this. MongoDB sacrifices some ACID guarantees for flexibility. Redis is a cache, not a transactional store. Cassandra prioritizes availability over strict consistency — inappropriate for financial ledgers.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'When to Use SQL vs NoSQL',
    question: "A gaming company builds a mobile app where each user's profile contains different achievements, items, and stats — the structure varies between game versions and user types. Data must scale to 100 million users globally. Which database fits BEST?",
    options: [
      'Oracle RDBMS with a strict normalized schema.',
      'MongoDB — flexible schema handles varying document structures, and sharding enables global scale.',
      'A Data Warehouse — because it handles large volumes of data.',
      'MySQL with many NULL columns for optional attributes.'
    ],
    correctOption: 1,
    explanation: 'MongoDB is ideal here: flexible schema handles variable player profiles across game versions without schema migrations, and horizontal sharding scales to 100M+ users. Oracle/MySQL with fixed schemas struggle with evolving structures and vertical scaling limits. A Data Warehouse is read-only analytics, not transactional storage. Option D (many NULLs) is a poor relational design.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'When to Use SQL vs NoSQL',
    question: 'A developer must decide between SQL and MongoDB. Their requirements: customer data is highly structured (name, address, email, order history with foreign keys), and they need complex multi-table transactions. Which should they choose?',
    options: [
      'MongoDB — because NoSQL is always more modern and scalable.',
      'SQL (RDBMS) — structured data with complex relationships and ACID transactions is exactly what RDBMS excels at.',
      'MongoDB — because it eliminates the need for JOINs.',
      'Redis — because the data should be cached for performance.'
    ],
    correctOption: 1,
    explanation: "Highly structured data with defined relationships and complex multi-table ACID transactions is the sweet spot for RDBMS/SQL. SQL handles foreign keys, JOINs, and transaction consistency natively. MongoDB's advantage is schema flexibility and scale — not complex relational integrity. A is wrong — 'more modern' doesn't mean always better. C is wrong — avoiding JOINs is a MongoDB feature, not a benefit for relational data. D is wrong."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'SQL vs NoSQL – Key Design Differences',
    question: 'Which comparison correctly describes a KEY DESIGN difference between SQL (RDBMS) and MongoDB?',
    options: [
      'SQL uses horizontal scaling; MongoDB uses vertical scaling.',
      'SQL uses fixed schema with normalization and JOINs; MongoDB uses flexible schema with embedded/referenced documents.',
      'MongoDB uses strict ACID transactions; SQL has no transaction support.',
      'SQL stores data as JSON; MongoDB stores data in tables.'
    ],
    correctOption: 1,
    explanation: 'The core design difference: SQL enforces a fixed schema, uses normalization to eliminate redundancy, and relies on JOINs to relate data. MongoDB uses a flexible schema, often embeds related data in a single document (de-normalization) or references other documents — avoiding JOINs. A reverses the scaling approaches. C reverses ACID support. D reverses storage formats.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'SQL vs NoSQL – Key Design Differences',
    question: 'Examine these two data representations. Which is the SQL approach and which is MongoDB?<pre><code>-- Representation 1:\n' +
      "DEPT table:  { deptno: 10, dname: 'IT' }\n" +
      "EMP table:   { empno: 101, ename: 'Zara', deptno: 10 }\n" +
      '-- (Linked via foreign key, queried with JOIN)\n' +
      '\n' +
      '-- Representation 2:\n' +
      '{\n' +
      '  "empno": 101,\n' +
      '  "ename": "Zara",\n' +
      '  "department": { "deptno": 10, "dname": "IT" }\n' +
      '}\n' +
      '-- (Department embedded directly inside employee document)</code></pre>',
    options: [
      'Both are SQL — Representation 2 uses an inline view.',
      'Representation 1 is SQL (normalized, separate tables with foreign key); Representation 2 is MongoDB (department embedded in employee document).',
      'Representation 1 is MongoDB; Representation 2 is SQL with JSON columns.',
      'Both are MongoDB — Representation 1 uses the relational model inside MongoDB.'
    ],
    correctOption: 1,
    explanation: 'Representation 1 is classic SQL: two normalized tables (DEPT, EMP) linked by a foreign key (deptno), queried with a JOIN. Representation 2 is the MongoDB approach: the department data is embedded directly inside the employee document, eliminating the JOIN. Embedding related data is a core MongoDB design pattern — it trades normalization for query simplicity.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'SQL vs NoSQL – Key Design Differences',
    question: "A RDBMS is described as having 'ACID properties.' What does the 'A' in ACID stand for, and why does it matter?",
    options: [
      'Availability — the database is always accessible.',
      'Atomicity — a transaction is all-or-nothing; either all operations complete or none do.',
      'Asynchronous — transactions happen in the background without blocking users.',
      'Aggregation — the database can compute SUM, COUNT, and AVG efficiently.'
    ],
    correctOption: 1,
    explanation: 'Atomicity guarantees that a transaction is treated as a single unit — either ALL operations within it succeed (commit) or NONE of them apply (rollback). This prevents partial updates, e.g., a bank transfer that debits Account A but fails before crediting Account B. ACID stands for Atomicity, Consistency, Isolation, Durability — the pillars of transactional databases.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: 'A company runs an order processing system (thousands of writes/second) AND needs daily sales analytics (heavy aggregations). Both run on the same Oracle OLTP database and performance is poor for analytics. What architectural solution should they implement?',
    options: [
      'Add more indexes to the OLTP database to speed up analytical queries.',
      'Separate the systems: keep the OLTP database for transactions, build a dedicated Data Warehouse for analytics, and use ETL to load data nightly.',
      'Replace the OLTP database with MongoDB for both workloads.',
      "Increase the server's RAM to handle both workloads simultaneously."
    ],
    correctOption: 1,
    explanation: "The correct solution is architectural separation: the OLTP database remains optimized for fast writes; a Data Warehouse (de-normalized, OLAP-optimized) handles analytics; ETL jobs move data from OLTP to DWH nightly. This is the standard enterprise architecture pattern. A (more indexes) improves reads but harms DML performance — a partial fix at best. C (MongoDB) doesn't solve the OLAP/OLTP conflict. D (more RAM) delays, not solves, the structural problem."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: "A startup's user table in MongoDB looks like this. A new developer joins and stores the salary as a STRING instead of a NUMBER. What problem does MongoDB's flexible schema create here?<pre><code>// Existing documents:\n" +
      '{ "_id": 1, "name": "Alice", "salary": 75000 }\n' +
      '{ "_id": 2, "name": "Bob",   "salary": 82000 }\n' +
      '\n' +
      '// New developer adds:\n' +
      '{ "_id": 3, "name": "Carol", "salary": "ninety thousand" }</code></pre>',
    options: [
      'MongoDB rejects the third document because salary must be a NUMBER.',
      'MongoDB accepts all three — but calculations like AVG(salary) will fail or return incorrect results because of the mixed data type.',
      "MongoDB automatically converts 'ninety thousand' to a number.",
      'MongoDB creates a separate collection for inconsistent documents.'
    ],
    correctOption: 1,
    explanation: "MongoDB's flexible schema accepts all three documents — there is no enforcement that salary must be a number. However, analytical operations (AVG, SUM, range queries) will fail or produce wrong results when salary is sometimes a string. This demonstrates the key disadvantage: without schema enforcement, data inconsistency must be caught at the application level. A, C, D are all wrong — MongoDB doesn't auto-validate types."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: "An analyst says: 'Our Data Warehouse has last week's data — the marketing team wants today's live sales numbers in the DWH.' What characteristic of a Data Warehouse explains why this expectation may be unrealistic?",
    options: [
      'Subject-Oriented — the DWH is organized by business subject, not time.',
      'Non-Volatile — DWH data is loaded periodically (e.g., nightly ETL batches), not in real-time like an OLTP system.',
      'Integrated — multiple source systems take time to synchronize.',
      'Time-Variant — the DWH only stores data older than 7 days.'
    ],
    correctOption: 1,
    explanation: "Non-Volatile means data is loaded into the DWH in periodic bulk batches (nightly, weekly) via ETL — not in real-time. The DWH may be 1-day behind the OLTP system, which is by design. Real-time data belongs in the OLTP system. Modern 'real-time DWH' architectures exist but require streaming ETL (like Kafka), which is beyond standard DWH. Time-Variant refers to historical timestamps, not a restriction on recency."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: 'A company stores IoT sensor readings from 10,000 devices — each device sends slightly different fields depending on the sensor type. Data grows by 50 million records/day. Which combination of technologies fits BEST?',
    options: [
      'Oracle RDBMS with strict schema — enforce consistency across all sensor types.',
      'MongoDB with sharding — flexible schema handles varying sensor fields; sharding scales horizontally for massive data volumes.',
      'A Data Warehouse — store all sensor data for historical analysis only.',
      'Power BI — visualize the sensor data in real-time.'
    ],
    correctOption: 1,
    explanation: 'IoT data is semi-structured (varying fields per sensor type) and high-volume (50M records/day across many devices) — exactly where MongoDB excels: flexible schema handles different document shapes, and sharding distributes the massive load across multiple servers. Oracle RDBMS would require complex schema design and struggles with horizontal scale. A DWH is for analytics, not primary storage. Power BI is a visualization tool, not a database.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: 'Review this MongoDB collection and identify what is happening architecturally (embedded vs referenced documents):<pre><code>// orders collection:\n' +
      '{\n' +
      '  "_id": "ORD-001",\n' +
      '  "customer": {\n' +
      '    "cust_id": 55,\n' +
      '    "name": "Fatima Al-Hassan",\n' +
      '    "email": "fatima@example.com"\n' +
      '  },\n' +
      '  "items": [\n' +
      '    { "product": "Laptop", "qty": 1, "price": 1200 },\n' +
      '    { "product": "Mouse",  "qty": 2, "price": 25 }\n' +
      '  ],\n' +
      '  "total": 1250\n' +
      '}</code></pre>',
    options: [
      'This is the normalized SQL approach — customer data is in a separate table linked by cust_id.',
      'This is the MongoDB embedded document approach — customer info and order items are embedded directly inside the order document, avoiding JOINs.',
      'This is invalid MongoDB — arrays cannot be stored inside documents.',
      'This is a relational BSON document — it will be broken into tables by MongoDB automatically.'
    ],
    correctOption: 1,
    explanation: "This demonstrates MongoDB's embedded document design pattern — customer details and the items array are embedded directly inside the order document rather than being separate collections linked by foreign keys. This eliminates JOIN operations: querying one order document gives you all the data needed. A describes RDBMS normalization. C is wrong — arrays are valid in MongoDB documents. D is wrong — MongoDB doesn't auto-normalize."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: 'A company has Finance, HR, and Logistics departments each needing their own analytics without interfering with each other, but all drawing data from the same enterprise Data Warehouse. What is the recommended architecture?',
    options: [
      'Give each department direct read access to the main Data Warehouse.',
      "Create a separate OLTP database for each department's analytics.",
      'Create department-specific Data Marts (Finance Mart, HR Mart, Logistics Mart) fed from the central Data Warehouse.',
      'Replace the Data Warehouse with three separate MongoDB clusters.'
    ],
    correctOption: 2,
    explanation: "The standard architecture is: one central Data Warehouse feeds multiple department-specific Data Marts. Each Data Mart is a focused subset (Finance Mart contains only finance data, etc.), making queries faster and more manageable for each team. Direct DWH access (A) can lead to performance and governance issues. Separate OLTP databases (B) are for transactions, not analytics. MongoDB (D) doesn't solve the analytical separation problem."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: "A product manager asks the data team three separate questions. Match each question to the correct technology (BI, OLAP, or Data Mining): Question 1: 'Show me last quarter's revenue by region.' Question 2: 'Drill down from Q3 revenue to individual store performance.' Question 3: 'Which customers are most likely to buy Product X next month?'",
    options: [
      'Q1: Data Mining, Q2: BI, Q3: OLAP',
      'Q1: BI, Q2: OLAP, Q3: Data Mining',
      'Q1: OLAP, Q2: Data Mining, Q3: BI',
      'All three are BI — they all involve data analysis.'
    ],
    correctOption: 1,
    explanation: "Q1 ('show me revenue by region') = BI — reports and dashboards showing what IS happening. Q2 ('drill down from Q3 to store level') = OLAP — interactive drill-down is a core OLAP operation exploring WHY and WHERE. Q3 ('most likely to buy') = Data Mining — predictive modeling about WHAT WILL happen. These three technologies work together on the same data but answer different types of questions."
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: 'Which statement about RDBMS vs MongoDB scalability is MOST accurate?',
    options: [
      'RDBMS scale horizontally by default; MongoDB scales vertically.',
      'RDBMS typically scale vertically (bigger server), which has hardware limits; MongoDB scales horizontally (more servers via sharding) for near-unlimited growth.',
      'Both RDBMS and MongoDB scale in exactly the same way.',
      'RDBMS cannot handle more than 1 million records without sharding.'
    ],
    correctOption: 1,
    explanation: 'RDBMS traditionally scale vertically — add more CPU/RAM to one server — which eventually hits physical and cost limits. MongoDB (and NoSQL broadly) is designed for horizontal scaling — add more commodity servers and distribute data via sharding. This difference is fundamental to why NoSQL was created for web-scale applications. A reverses the comparison. C is wrong. D is false — RDBMS can handle billions of records with proper design.'
  },
  {
    quizTitle: 'Data Warehousing, NoSQL & MongoDB',
    category: 'Applied & Scenario Questions',
    question: "A developer argues: 'We should always use MongoDB because it's more flexible and scalable than SQL.' A senior architect disagrees. Which response BEST reflects the correct approach to database selection?",
    options: [
      'The developer is right — MongoDB is always better for all applications.',
      'The architect is right — database choice depends on the application: SQL for structured data, consistency, and complex transactions; MongoDB for flexible, scalable, semi-structured data needs.',
      'The architect is right — MongoDB should never be used in production.',
      'They are both wrong — all modern applications should use a Data Warehouse.'
    ],
    correctOption: 1,
    explanation: "There is no universally 'best' database — the right choice depends on requirements. SQL excels at structured data, ACID transactions, and complex relational queries (banking, ERP). MongoDB excels at flexible schemas, horizontal scalability, and semi-structured data (web apps, mobile, IoT). Many modern systems use both (polyglot persistence). A and C are absolutist and wrong. D confuses operational databases with analytical systems."
  }
]
;