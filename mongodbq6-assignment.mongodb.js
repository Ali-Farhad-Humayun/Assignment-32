// Q6. Remove a customer from the "Customers" collection.

db.Customers.deleteOne({ name: "Eric Vakharia" });
