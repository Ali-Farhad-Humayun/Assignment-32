// Q5. Query for customers who have made purchases over a certain amount.

db.Customers.find({ totalPurchase: { $gt: 17000 } });
