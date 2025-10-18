// Q9. Query for students older than a specific age or belonging to a particular grade.

db.Students.find({
  $or: [
    { age: { $gt: 16 } },
    { grade: "A" }
  ]
});
