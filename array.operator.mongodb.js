use("imdb");
// db.students.insertMany([
//     {
//       name: "Manish",
//       favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//       hobbies: [
//         {
//           name: "Badminton",
//           frequency: 5,
//         },
//         {
//           name: "PubG",
//           frequency: 7,
//         },
//         {
//           name: "Dancing",
//           frequency: 2,
//         },
//       ],
//     },

//     {
//       name: "Sona",
//       favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//       hobbies: [
//         {
//           name: "Singing",
//           frequency: 4,
//         },
//         {
//           name: "Football",
//           frequency: 5,
//         },
//         {
//           name: "Volleyball",
//           frequency: 3,
//         },
//       ],
//     },

//     {
//       name: "Arun",
//       favoriteSingers: ["Aatif", "Sushant", "Udit"],
//       hobbies: [
//         {
//           name: "PubG",
//           frequency: 5,
//         },
//         {
//           name: "Singing",
//           frequency: 7,
//         },
//         {
//           name: "Bikes",
//           frequency: 2,
//         },
//       ],
//     },
//   ]);
// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });
// $all is used in casse of array field only
// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });
// db.students.insertOne({
//     name: "Rina",
//     favoriteSingers: ["Neha", "Tony"],
//     hobbies: [
//       {
//         name: "Dancing",
//         frequency: 10,
//       },
//     ],
//   });
// find student who has two favprite singer
// size deosnt accept range such as $gt ,$lt
// db.students.find({favoriteSingers:{$size:2}})
// find student who has three favprite singer

// db.students.find({ favoriteSingers: { $size: 3 } });
// find student who has only one hobby
// db.students.find({ hobbies: { $size: 1 } });

// db.students.find({
//   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],
// });
// $elemMatch= conduct operation in same element
// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });
// find students whose hobbies is "Singing" and frequency is greater than equal to 5
// db.students.find({
//   hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
// });
// db.students.find()
