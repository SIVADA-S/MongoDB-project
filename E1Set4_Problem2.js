// PROBLEM 2

db.properties.insertMany([
  { property_id: 1, address: "MG Road", city: "Bangalore", property_type: "Apartment", bedrooms: 2, bathrooms: 2, area_sqft: 1200, price: 4500000, listing_date: new Date("2024-05-01"), status: "Available" },
  { property_id: 2, address: "Indiranagar", city: "Bangalore", property_type: "Villa", bedrooms: 4, bathrooms: 3, area_sqft: 3000, price: 9000000, listing_date: new Date("2023-12-01"), status: "Sold" },
  { property_id: 3, address: "Banjara Hills", city: "Hyderabad", property_type: "Apartment", bedrooms: 3, bathrooms: 2, area_sqft: 1500, price: 4800000, listing_date: new Date("2024-11-15"), status: "Available" },
  { property_id: 4, address: "Adyar", city: "Chennai", property_type: "Commercial", bedrooms: 0, bathrooms: 1, area_sqft: 2000, price: 7000000, listing_date: new Date("2022-10-10"), status: "Sold" },
  { property_id: 5, address: "Whitefield", city: "Bangalore", property_type: "Apartment", bedrooms: 2, bathrooms: 2, area_sqft: 1100, price: 4000000, listing_date: new Date("2024-07-20"), status: "Available" }
]);

db.properties.find({
  price: { $lt: 5000000 },
  status: "Available"
});

db.properties.updateMany(
  { listing_date: { $lt: new Date("2025-01-01") } },
  { $mul: { price: 0.9 } }
);

db.properties.deleteMany({
  status: "Sold",
  listing_date: { $lt: new Date("2024-01-01") }
});

db.properties.find(
  {},
  { _id: 0, address: 1, city: 1, price: 1 }
).sort({ price: -1 });
