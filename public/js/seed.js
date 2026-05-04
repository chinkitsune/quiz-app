// scripts/seedSubjects.js
require('dotenv').config();
const mongoose = require('mongoose');
const subject = require('../../models/subject');

const subjectsData = [
  {
    name: 'java',
    title: 'Object-Oriented Programming',
    description: 'CST8284 · Weekly practice exams covering OOP concepts in Java',
    fullDescription: 'Master the fundamentals of Object-Oriented Programming with Java. This comprehensive course covers classes, inheritance, polymorphism, and design patterns through real-world scenarios.',
    icon: '☕'
  },
  {
    name: 'web',
    title: 'Web Programming',
    description: 'HTML, CSS, JavaScript, and modern front-end frameworks',
    fullDescription: 'Build modern, responsive web applications. Learn HTML5, CSS3, vanilla JavaScript, and popular frameworks like React and Vue.',
    icon: '🌐'
  },
  {
    name: 'linux',
    title: 'Operating Systems',
    description: 'CST8288 · Linux commands, shell scripting, and system administration',
    fullDescription: 'Learn essential Linux commands, shell scripting, process management, and system administration. Gain hands-on experience with file systems, permissions, and server configuration.',
    icon: '🐧'
  },
  {
    name: 'database',
    title: 'Database Systems',
    description: 'SQL, NoSQL, and data modeling for modern applications',
    fullDescription: 'Master database design principles, SQL querying, normalization, and performance optimization. Explore both relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.',
    icon: '🗃️'
  }
];

async function seedSubjects() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Drop collection to remove old indexes
    await mongoose.connection.db.dropCollection('subjects').catch(() => {});
    console.log('Dropped old subjects collection');

    await subject.insertMany(subjectsData);
    console.log('Inserted subjects:', subjectsData.length);

    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seedSubjects();