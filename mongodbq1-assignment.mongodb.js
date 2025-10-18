// Q1. Create and Drop Database & Collection

use("shopDB");                                // create or switch to database
db.createCollection("Customers");             // create collection
print("Collection created");

db.Customers.drop();                          // drop collection
print("Collection dropped");

db.dropDatabase();                            // drop whole database
print("Database dropped");

// Task 1 — Create a new MongoDB database named "PWSKILLS".

use("PWSKILLS");
print("Database PWSKILLS created");

// Task 2 — Create a collection named "Employees" within the "PWSKILLS" database.

use("PWSKILLS");

db.createCollection("Employees");
print("Collection Employees created");


// Task 3 — Insert several documents representing employees into the "Employees" collection.

use("PWSKILLS");

db.Employees.insertMany([
  { name: "Arjun", role: "Developer", salary: 50000 },
  { name: "Neha", role: "Designer", salary: 45000 },
  { name: "Ravi", role: "Tester", salary: 40000 }
]);
print("Employees inserted");

// Task 4 — Retrieve and display all documents from the "Employees" collection.

use("PWSKILLS");

const employees = db.Employees.find().toArray();
print("All Employees:");
printjson(employees);

// Task 5. Drop Employees Collection

use("PWSKILLS");

db.Employees.drop();
print("Employees collection dropped");

// Task 6. Drop Database “PWSKILLS”

use("PWSKILLS");

db.dropDatabase();
print("Database PWSKILLS dropped");