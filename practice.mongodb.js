use("netflix");
// // add new movie to movie table
// db.movie.insertOne({
//     name:"cast away",
//     leadActor:"tom hanks",
//     releaseYear:"2002",
//     length:"120"
// })

// db.movie.insertMany([
//   {
//     name: "chakka panja",
//     leadActor: "dipak raj giri",
//     releaseYear: "2017",
//     length: "180",
//   },
//   {
//     name: "12th fail",
//     leadActor: "vikrant massey",
//     releaseYear: "2023",
//     length: "90",
//   },
// ]);
// db.movie.find({
//     length: "90"
// })

// db.movie.findOne({
//     leadActor: "vikrant massey"
// })

// db.movie.findOne({
//   name: "chakka panja",
// });
// db.movie.find({releaseYear: "2017"})
// db.movie.updateOne(
//   { name: "chakka panja" },
//   {
//     $set: { releaseYear: 2020 },
//   }
// );
// db.movie.updateOne({name:"chakka panja return"},{
//     $set:{releaseYear:"2020"}
// })
// db.movie.updateOne({
//     name:"cast away"
// },{
//     $set:{
//         length:"90",
//         releaseYear:"2000"
//     }
// })
// db.movie.updateMany({ length: "90" }, { $set: { length: "105" } });

// db.movie.deleteOne({leadActor:"dipak raj giri"})

// db.movie.deleteMany({ length: "105" });
// db.movie.find();
