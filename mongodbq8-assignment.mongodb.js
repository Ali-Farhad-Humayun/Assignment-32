// Q8. Insert documents into the "Students" collection with fields like name, age, and grade.

db.Students.insertMany([
  { name: "Aisha", age: 16, grade: "A" },
  { name: "Rahul", age: 17, grade: "C" },
  { name: "Sara", age: 15, grade: "B" },
  { name: "Eric", age: 18, grade: "A" }
]);
