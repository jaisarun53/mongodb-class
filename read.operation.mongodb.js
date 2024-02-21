use("imdb");
// read operation
// ? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne
// ? find movies whose language is Japanese
// db.movies.find({language:"Japanese"})
// ?find movies whose runtime is less than 30
// db.movies.find({runtime:{$lt:30}})
// ? find movies whose runtime is greater than 90
// db.movies.find({runtime:{$gte:90}})
// ? find movies whose rating is less than or equal to 6
// db.movies.find({"rating.average":{$lte:6}})

// db.movies.find({ status: { $ne: "Ended" } });

// db.movies.find({ weight: { $ne: 75 } });

// db.movies.find({ genres: "Crime" });

// logical operator  : $and ,$or ,$not ,$nor
// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],

// });
// equivalent code
// db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });
// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 30 } }] });

//?Find movies whose status is "Ended"
// db.movies.find({status:"Ended"})
// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });
// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({ $and: [{ "rating.average": { $gt: 7, $lt: 9 } }] });
// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });
// ?find movies whose status is Running
// db.movies.find({ status: "Running" });
//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });
// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({ $and: [{ weight: 75 }, { "network.country.name": "Canada" }] });
// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $and: [{ weight: 96 }, { runtime: 60 }] });
// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

// db.movies.find({ status: { $ne: "Ended" } });

// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

// db.movies.find()

// $in

// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });
// equivalent code=> is applied on same field for multiple condition ,we can use $in
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });
//      $nin
// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });
// eqivalent code=> if condition is applied in same field
// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
