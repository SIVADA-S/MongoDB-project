// PROBLEM 5

db.quiz.insertMany([
  { attempt_id: 1, user_name: "A", quiz_name: "GK1", category: "GK", score: 8, total_questions: 10, percentage: 80, time_taken_seconds: 120, answers: ["A","B"], attempt_date: new Date(), is_passed: true },
  { attempt_id: 2, user_name: "B", quiz_name: "Sci1", category: "Science", score: 9, total_questions: 10, percentage: 90, time_taken_seconds: 100, answers: ["A","C"], attempt_date: new Date(), is_passed: true },
  { attempt_id: 3, user_name: "C", quiz_name: "Math1", category: "Math", score: 7, total_questions: 10, percentage: 70, time_taken_seconds: 150, answers: ["B","C"], attempt_date: new Date(), is_passed: false },
  { attempt_id: 4, user_name: "A", quiz_name: "Hist1", category: "History", score: 10, total_questions: 10, percentage: 100, time_taken_seconds: 90, answers: ["A","A"], attempt_date: new Date(), is_passed: true },
  { attempt_id: 5, user_name: "B", quiz_name: "GK2", category: "GK", score: 6, total_questions: 10, percentage: 60, time_taken_seconds: 200, answers: ["C","D"], attempt_date: new Date(), is_passed: false }
]);

db.quiz.createIndex({ category: 1, percentage: 1 });

db.quiz.aggregate([
  { $match: { is_passed: true } },
  { $group: { _id: "$category", avg_percentage: { $avg: "$percentage" } } }
]);

db.quiz.updateMany(
  { percentage: { $gt: 90 } },
  { $set: { certificate_eligible: true } }
);

db.quiz.aggregate([
  { $group: { _id: "$user_name", avg_score: { $avg: "$score" } } },
  { $sort: { avg_score: -1 } },
  { $limit: 3 }
]);
