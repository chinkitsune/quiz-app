// data/quizzesData.js
module.exports = [
  {
    subjectName: 'java',
    title: "Java Generics",
    description:
      "type parameters, generic classes, generic methods, type bounds, wildcards, type erasure, and generics vs inheritance.",
  },
  {
    subjectName: 'java',
    title: "Java Collections",
    description:
      "List, Set, Map, Queue, iterators, sorting, and choosing the right collection.",
  },
  {
    subjectName: 'java',
    title: "Java Swing GUI",
    description:
      "layout managers, text components, choice components, event handling, menus, and UI design patterns.",
  },
  {
    subjectName: 'java',
    title: "Java Exception Handling",
    description:
      "try/catch/finally, checked vs unchecked, custom exceptions, stack unwinding, chained exceptions, and more.",
  },
  {
    subjectName: 'java',
    title: "Java File I/O",
    description: "Java streams, NIO classes, sequential files, and file-based I/O.",
  },
    {
    subjectName: 'java',
    title: "OOP with Design Patterns",
    description: "Object-oriented programming principles, design patterns, and their implementation in Java.",
  },

  {
    subjectName: 'java',
    title: 'JDBC',
    description:
      'Java Database Connectivity (JDBC), database connections, executing SQL statements, prepared statements, result sets, transaction management, and CRUD operations.',
  },
  {
    subjectName: 'java',
    title: 'Design Patterns, DAO and Singleton',
    description:
      'Software design patterns, separation of concerns, Data Access Object (DAO) architecture, Singleton pattern, object creation control, and maintainable application design.',
  },
  {
    subjectName: 'java',
    title: 'Factory Pattern',
    description:
      'Factory design pattern, object creation abstraction, factory methods, loose coupling, polymorphism, and flexible object instantiation techniques.',
  },
  {
    subjectName: 'java',
    title: 'Builder Pattern',
    description:
      'Builder design pattern, step-by-step object construction, fluent interfaces, immutable objects, complex object creation, and code readability improvements.',
  },
  {
    subjectName: 'java',
    title: 'Strategy Pattern',
    description:
      'Strategy design pattern, interchangeable algorithms, encapsulating behaviors, runtime strategy selection, composition over inheritance, and flexible application design.',
  },


    {
    subjectName: 'database',
    title: "Oracle & PL/SQL",
    description:
      "Oracle database architecture, SQL vs PL/SQL, blocks, variables, control structures, stored procedures, and functions.",
  },
  {
    subjectName: 'database',
    title: "PL/SQL Cursors & Exception Handling",
    description:
      "implicit and explicit cursors, cursor lifecycle, fetching data, predefined and user-defined exceptions, and error handling techniques.",
  },
  {
    subjectName: 'database',
    title: "Triggers & PL/SQL Packages",
    description:
      "row-level and statement-level triggers, BEFORE and AFTER triggers, package specification and body, encapsulation, and modular programming in PL/SQL.",
  },
  {
    subjectName: 'database',
    title: "Data Warehousing, NoSQL & MongoDB",
    description:
      "data warehouse concepts, ETL processes, OLAP vs OLTP, NoSQL database types, MongoDB collections and documents, and aggregation framework basics.",
  },
  {
    subjectName: 'web',
    title: "JavaScript Async Programming Mastery",
    description:
      "callbacks, promises, async/await, event loop, handling asynchronous operations, error handling, and concurrency patterns in JavaScript.",
  },
  {
    subjectName: 'web',
    title: "Node.js",
    description:
      "Node.js runtime, modules, file system, event-driven architecture, npm, building servers, and working with asynchronous I/O.",
  },
  {
    subjectName: 'web',
    title: "Express.js",
    description:
      "Express framework basics, routing, middleware, request and response handling, REST APIs, and application structure.",
  },
  {
    subjectName: 'web',
    title: "Express.js + MongoDB with Mongoose",
    description:
      "connecting Express apps to MongoDB, Mongoose schemas and models, CRUD operations, validation, and structuring full-stack applications.",
  },
  {
    subjectName: 'web',
    title: "User Authentication in Express.js",
    description:
      "authentication concepts, sessions vs tokens, JWT, password hashing, login and registration flows, and securing Express applications.",
 },
  // {
  //   subjectName: 'javascript',  // Reference by name, not _id yet
  //   title: 'JavaScript Fundamentals',
  //   description: 'Test your knowledge of JS basics',
  //   tagA: 'Basics',
  //   tagB: 'Functions'
  // },
  // {
  //   subjectName: 'javascript',
  //   title: 'JavaScript Advanced Concepts',
  //   description: 'Deep dive into closures and async',
  //   tagA: 'Advanced',
  //   tagB: 'Async'
  // },
  // {
  //   subjectName: 'python',
  //   title: 'Python Basics',
  //   description: 'Python fundamentals quiz',
  //   tagA: 'Basics',
  //   tagB: 'Syntax'
  // }
  // ,
  {
    subjectName: 'bi',
    title: 'Introduction to Data Analytics',
    description: 'Data Analytics fundamentals quiz',
    tagA: 'Basics',
    tagB: 'Concepts'
  },

  {
    subjectName: 'bi',
    title: 'Data Understanding & kNN',
    description: 'Data preprocessing, normalization, and kNN classification quiz',
    tagA: 'Data Preparation',
    tagB: 'kNN'
  },
  {
    subjectName: 'bi',
    title: 'Classification: Decision Trees',
    description: 'Decision tree construction, entropy, and pruning quiz',
    tagA: 'Decision Trees',
    tagB: 'Classification'
  },
  {
    subjectName: 'bi',
    title: 'Outlier Detection',
    description: 'Statistical and machine learning outlier detection quiz',
    tagA: 'Outlier Detection',
    tagB: 'Anomaly Detection'
  },
  {
    subjectName: 'bi',
    title: 'Clustering & K-Means',
    description: 'Unsupervised clustering and K-Means algorithm quiz',
    tagA: 'Clustering',
    tagB: 'K-Means'
  }
  ,
  {
    subjectName: 'network',
    title: 'Networking Today',
    description: 'Explain the advances in modern technologies',
    tagA: 'Basics',
    tagB: 'Concepts'
  },

 {
    subjectName: "network",
    title: "Protocols and Models",
    description: "Explain how rules and standards allow devices to communicate, and compare the OSI and TCP/IP reference models used to describe network functions.",
    tagA: "Protocols",
    tagB: "OSI Model"
  },
  {
    subjectName: "network",
    title: "Physical Layer",
    description: "Describe how physical layer protocols, network media, and industry standards enable the transmission of bits across copper, fiber, and wireless networks.",
    tagA: "Hardware",
    tagB: "Cabling"
  },
  {
    subjectName: "network",
    title: "Data Link Layer",
    description: "Explain how media access control in the data link layer supports communication across different LAN and WAN topologies.",
    tagA: "Topologies",
    tagB: "Media Access Control"
  },
  {
    subjectName: "network",
    title: "Ethernet Switching",
    description: "Explain how switches use MAC addresses, learning, and frame forwarding methods to support communication on an Ethernet network.",
    tagA: "Switching",
    tagB: "MAC Address"
  },
  {
    subjectName: "network",
    title: "Address Resolution",
    description: "Explain how the Address Resolution Protocol (ARP) maps IP addresses to MAC addresses, enabling devices to communicate on a local network.",
    tagA: "1",
    tagB: "ARP"
  },

  {
    subjectName: "network",
    title: "Network Layer",
    description: "Explain how the network layer uses IPv4 and IPv6 to provide addressing, encapsulation, and routing services across networks.",
    tagA: "IP Addressing",
    tagB: "Routing"
  },
  {
    subjectName: "network",
    title: "IPv4 Addressing & Subnetting",
    description: "Apply IPv4 subnetting concepts to divide networks efficiently, calculate subnet masks, determine network and broadcast addresses, and identify valid host ranges.",
    tagA: "Subnet Masks",
    tagB: "Address Calculation"
  },
  {
    subjectName: 'mobile',
    title: 'Mobile GUI Programming — Dart & Flutter',
    description: 'Learning Dart and Flutter and Widget ',
    tagA: 'Basics',
    tagB: 'Concepts'
  }
  ,
  {
    subjectName: 'systems-analysis-design',
    title: 'Intro to Project Management',
    description: 'Learn the principles of systems analysis and design',
    tagA: 'Basics',
    tagB: 'Concepts'
  }
]; 
