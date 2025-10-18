// Q12. Query for teachers specializing in a specific subject or with more than a certain amount of experience.

db.Teachers.find({
  $or: [
    { subject: "Maths" },
    { experience: { $gt: 8 } }
  ]
});
