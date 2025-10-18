// Q10. Update the grade of a specific student in the "Students" collection.

db.Students.updateOne(
  { name: "Aisha" },
  { $set: { grade: "B" } }
);
