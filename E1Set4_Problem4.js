// PROBLEM 4

db.parcels.insertMany([
  { parcel_id: 1, sender_name: "A", receiver_name: "B", source_city: "Bangalore", destination_city: "Chennai", weight: 2, shipping_cost: 200, booking_date: new Date("2024-01-01"), delivery_date: new Date("2024-01-05"), current_status: "Delivered" },
  { parcel_id: 2, sender_name: "C", receiver_name: "D", source_city: "Mumbai", destination_city: "Delhi", weight: 3, shipping_cost: 300, booking_date: new Date("2024-02-01"), delivery_date: new Date("2024-02-06"), current_status: "InTransit" },
  { parcel_id: 3, sender_name: "E", receiver_name: "F", source_city: "Bangalore", destination_city: "Hyderabad", weight: 1, shipping_cost: 150, booking_date: new Date("2023-01-01"), delivery_date: new Date("2023-01-03"), current_status: "Delivered" },
  { parcel_id: 4, sender_name: "G", receiver_name: "H", source_city: "Chennai", destination_city: "Mumbai", weight: 4, shipping_cost: 400, booking_date: new Date("2025-03-01"), delivery_date: new Date("2025-03-05"), current_status: "Booked" },
  { parcel_id: 5, sender_name: "I", receiver_name: "J", source_city: "Delhi", destination_city: "Bangalore", weight: 5, shipping_cost: 500, booking_date: new Date("2024-06-01"), delivery_date: new Date("2024-06-05"), current_status: "OutForDelivery" }
]);

db.parcels.aggregate([
  { $group: { _id: "$destination_city", total_cost: { $sum: "$shipping_cost" } } },
  { $sort: { total_cost: -1 } }
]);

db.parcels.updateMany(
  { delivery_date: { $lt: new Date() } },
  { $set: { current_status: "Delivered" } }
);

db.parcels.deleteMany({
  current_status: "Delivered",
  delivery_date: { $lt: new Date("2023-01-01") }
});

db.parcels.aggregate([
  {
    $group: {
      _id: "$source_city",
      avg_delivery_time: {
        $avg: {
          $subtract: ["$delivery_date", "$booking_date"]
        }
      }
    }
  }
]);
