use("imdb");

// db.friends.updateOne(
//   { name: "Laxman", "scores.sub": "Science" },
//   { $set: { "scores.$.sub": "Nepali" } }
// );
// db.friends.updateOne(
//   { name: "Jibana", "scores.point": 75 },
//   { $set: { "scores.$.sub": "Math" } }
// );
// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $set: { "scores.$[].point": 70 } }
// );
// db.friends.updateOne(
//   { name: "Prithivi", "scores.sub": "Political Science" },
//   { $set: { "scores.$.point": 65 } }
// );
// db.friends.updateOne(
//   { name: "Prithivi", "scores.sub": "Science" },
//   { $set: { "scores.$.point": 60 } }
// );
// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $inc: { "scores.$[].point":60 } }
// );
// db.friends.updateOne(
//   { name: "Laxman", hobbies: "Swimming" },
//   { $set: { "hobbies.$": "Rafting" } }
// );
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $set: { "scores.$[item].point": 70 } },
//   {
//     arrayFilters: [{ "item.point": { $lte: 50 } }],
//   }
// );
// db.friends.find();
