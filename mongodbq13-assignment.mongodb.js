// Q13. Update the experience of a specific teacher in the "Teachers" collection.

db.Teachers.updateOne(
  { name: "Mr. Khan" },
  { $set: { experience: 8 } }
);
