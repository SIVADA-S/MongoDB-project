// PROBLEM 3

db.events.insertMany([
  { event_id: 1, event_name: "Wedding A", event_type: "Wedding", event_date: new Date("2026-07-10"), venue: "Hall 1", budget: 300000, attendee_count: 200, organizer_name: "Rahul", services: ["Catering", "Decor"] },
  { event_id: 2, event_name: "Tech Conf", event_type: "Conference", event_date: new Date("2026-08-15"), venue: "Center A", budget: 500000, attendee_count: 300, organizer_name: "Anita", services: ["Catering", "Music"] },
  { event_id: 3, event_name: "Birthday Party", event_type: "Birthday", event_date: new Date("2024-05-05"), venue: "Home", budget: 50000, attendee_count: 15, organizer_name: "Priya", services: ["Decor"] },
  { event_id: 4, event_name: "Corporate Meet", event_type: "Corporate", event_date: new Date("2025-02-20"), venue: "Hotel", budget: 250000, attendee_count: 100, organizer_name: "Kiran", services: ["Catering"] },
  { event_id: 5, event_name: "Small Meetup", event_type: "Conference", event_date: new Date("2023-11-01"), venue: "Cafe", budget: 20000, attendee_count: 10, organizer_name: "Sam", services: ["Music"] }
]);

db.events.find({
  event_date: { $gt: new Date("2026-06-01") },
  budget: { $gt: 200000 }
});

db.events.updateMany(
  { event_type: "Conference" },
  { $inc: { attendee_count: 50 } }
);

db.events.deleteMany({
  event_date: { $lt: new Date("2024-12-31") },
  attendee_count: { $lt: 20 }
});

db.events.find({
  services: "Catering"
});
