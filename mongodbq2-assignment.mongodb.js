// Q2. Insert a new document representing a customer into the "Customers" collection.

db.Customers.insertOne({
  name: "Farhad Ali",
  email: "farhadhali@gmail.com",
  address: "Vadodara, Gujarat",
  totalPurchase: 20000
});

db.Customers.insertMany([
  {
    name: "Ravi Bhalsod",
    email: "ravi@gmail.com",
    address: "Ahmedabad, Gujarat",
    totalPurchase: 16000
  },
  {
    name: "Eric Vakharia",
    email: "eric@gmail.com",
    address: "Bharuch, Gujarat",
    totalPurchase: 18000
  }
]);

