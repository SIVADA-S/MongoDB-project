// 1. Create a menu collection and insert one item
db.menu.insertOne({
  item_id: "M001",
  name: "Espresso",
  category: "Coffee",
  price: 150,
  availability: true
});

// 2. Insert 5 menu items
db.menu.insertMany([
  { item_id: "M002", name: "Cappuccino", category: "Coffee", price: 200, availability: true },
  { item_id: "M003", name: "Green Tea", category: "Tea", price: 120, availability: true },
  { item_id: "M004", name: "Iced Peach Tea", category: "Tea", price: 180, availability: false },
  { item_id: "M005", name: "Blueberry Muffin", category: "Snack", price: 100, availability: true },
  { item_id: "M006", name: "Chocolate Croissant", category: "Snack", price: 150, availability: false }
]);

// 3. Retrieve all available items
db.menu.find({ availability: true });

// 4. Display only name and price
db.menu.find({}, { name: 1, price: 1, _id: 0 });

// 5. Delete a menu item based on item_id
db.menu.deleteOne({ item_id: "M003" });
