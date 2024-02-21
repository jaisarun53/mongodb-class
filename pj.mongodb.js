use("imdb");
// evaluation operator
// $regex
// $expr
// db.movies.find()
// $regex
// db.movies.find({ summary: { $regex: "PACIFIC", $options: "i" } });

// db.movies.find({ name: { $regex: "morty", $options: "i" } });
// expr

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);
// db.sales.find({ order: { $gt: 50 } });
// find the product whose order is graeter than volume
// order > volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });
