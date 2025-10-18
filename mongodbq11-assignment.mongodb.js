// Q11. Insert documents into the "Teachers" collection representing teachers with fields like name, subject, and experience.

db.Teachers.insertMany([
  { name: "Mr. Sharma", subject: "Maths", experience: 10 },
  { name: "Mr. Khan", subject: "English", experience: 7 },
  { name: "Mrs. Verma", subject: "Science", experience: 12 }
]);

