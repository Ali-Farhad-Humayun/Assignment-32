// Q4. Update the address of a specific customer.

db.Customers.updateOne(
  { name: "Farhad Ali" },
  { $set: { address: "Udaipur, Rajasthan" } }
);
