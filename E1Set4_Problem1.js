// PROBLEM 1: Pharmacy Medicine Stock System

// Step 1: Create collection & insert one document
db.medicines.insertOne({
  medicine_id: 1,
  name: "Paracetamol",
  manufacturer: "ABC Pharma",
  category: "Painkiller",
  price: 50,
  stock_quantity: 20,
  expiry_date: new Date("2026-12-31")
});

// Step 2: Insert multiple documents
db.medicines.insertMany([
  {
    medicine_id: 2,
    name: "Amoxicillin",
    manufacturer: "XYZ Pharma",
    category: "Antibiotic",
    price: 120,
    stock_quantity: 5,
    expiry_date: new Date("2025-05-10")
  },
  {
    medicine_id: 3,
    name: "Vitamin C",
    manufacturer: "HealthCorp",
    category: "Vitamin",
    price: 80,
    stock_quantity: 15,
    expiry_date: new Date("2027-01-01")
  },
  {
    medicine_id: 4,
    name: "Ibuprofen",
    manufacturer: "MediLife",
    category: "Painkiller",
    price: 60,
    stock_quantity: 8,
    expiry_date: new Date("2024-12-01")
  },
  {
    medicine_id: 5,
    name: "Azithromycin",
    manufacturer: "CureWell",
    category: "Antibiotic",
    price: 150,
    stock_quantity: 12,
    expiry_date: new Date("2026-06-01")
  },
  {
    medicine_id: 6,
    name: "Calcium",
    manufacturer: "NutriPlus",
    category: "Supplement",
    price: 200,
    stock_quantity: 25,
    expiry_date: new Date("2028-03-01")
  }
]);

// Step 3: Find medicines with low stock (<10)
db.medicines.find({
  stock_quantity: { $lt: 10 }
});

// Step 4: Projection (name, price, stock_quantity)
db.medicines.find(
  {},
  { _id: 0, name: 1, price: 1, stock_quantity: 1 }
);

// Step 5: Delete medicine with expiry before 2025-01-01
db.medicines.deleteOne({
  medicine_id: 4,
  expiry_date: { $lt: new Date("2025-01-01") }
});
