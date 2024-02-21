use("imdb");
// ?$push,$pop,$pill,$pullAll
// $push=>add new data to the end of the array
// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Dancing" } });
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }
// );
// $addToSet=> push value to array if that item is not already there
// db.friends.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: "cycling" } });
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $addToSet: { hobbies: { $each: ["Riding", "Book"] } } }
// );

// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $addToSet: { hobbies: { $each: ["Hiking", "Cricket"] } } }
// );
// db.friends.updateOne(
//   { name: "Jibana" },
//   { $addToSet: { hobbies: { $each: ["Cycling", "Driving"] } } }
// );
// db.friends.updateOne(
//   { name: "Suvechha" },
//   { $addToSet: { scores: { sub: "English", point: 61 } } }
// );

// db.friends.updateOne({ name: "Laxman" }, { $pop: { hobbies: 1 } });
// db.friends.updateOne({ name: "Laxman" }, { $pop: { hobbies: -1 } });
// db.friends.updateOne({ name: "Jibana" }, { $pop: { scores: 1 } });
// db.friends.updateOne({ name: "Jibana" }, { $pop: { scores: -1 } });
// db.friends.updateOne(
//   { name: "Suvechha" },
//   { $pull: { scores: { point: { $gt: 60 } } } }
// );

// db.friends.updateOne({ name: "Laxman" }, { $pull: { hobbies: "Cycling" } });
// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $pull: { hobbies: { $in: ["Cricket", "Basketball"] } } }
// );
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $pullAll: { hobbies: ["Cardio", "Singing", "Riding"] } }
// );
// db.friends.find();
