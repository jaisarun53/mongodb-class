use("relations");
// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a507859cbedd59954cd2"),
// });

// db.vehicles.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetail",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       color: 1,
//       cc: 1,
//       ownerName: { $first: "$ownerDetail.name" },
//     },
//   },
// ]);
// db.owners.find();
// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);
// db.students.insertOne({
//   name: "arun",
//   address: "tripureshror",
//   email: "arun@gamail.com",
//   enrolledCourseId: [
//     ObjectId("65d5ab5455c67737d8468c51"),
//     ObjectId("65d5ab5455c67737d8468c52"),
//   ],
// // });
// db.students.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "courses",
//       localField: "enrolledCourseId",
//       foreignField: "_id",
//       as: "courseDetail",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       address: 1,
//       email: 1,
//       "courseDetail.name": 1,
//       "courseDetail.duration": 1,
//     },
//   },
// ]);

// db.courses.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "students",
//       localField: "_id",
//       foreignField: "enrolledCourseId",
//       as: "studentData",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       duration: 1,
//       "studentData.name": 1,
//       "studentData.email": 1,
//     },
//   },
// ]);
