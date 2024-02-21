use("imdb");
// db.movies.find().count();
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       averageRating: "$rating.average",
//       lastGenres: { $last: "$genres" },
//       secondGenres: { $arrayElemAt: ["$genres", 1] },
//     },
//   },
//   {
//     $sort: {
//       averageRating: -1,
//     },
//   },
// ]);
