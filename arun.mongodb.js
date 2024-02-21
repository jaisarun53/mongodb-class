use("udemy");
// db.course.insertOne({
//     name:"HTML/CSS",
//     duration:"30days",
//     price:5000,
// })

// // db.course.find();
// db.course.find();
// db.student.insertOne({
//     name:"arun",
//     age:22,
//     collage:"ismt",
// })
// db.student.find();

// db.product.insertOne({
//     name:"mouse",
//     brand:"reddragon",
//     price:3000,
// })
// db.product.insertOne({
//     name:"bag",
//     brand:"coolbell",
//     price:4000,
// })

// db.product.insertOne({
//     name:"cooker",
//     brand:"baltra",
//     price:5000,
// })

// insertMany
// db.product.insertMany([
//     {name:"dal",brand:"sayam",price:5000,},
//     {name:"oil",brand:"dabar",price:5000,},
// ])

// db.product.find()

// findOne=>return first item thast matches condition
// db.product.findOne({price:4000})
// // find=> return all the product that matches the condition
// db.product.find({name:"sun flower oil"})

// deleteOne.deleteMany
// db.product.deleteOne({name:"rice"})
// db.product.find();

// db.product.deleteMany({price:5000})

// ?update => changes value /edit
// ?updateOne,updateMany

// db.product.updateOne(
//   { name:"mouse" },
//   {
//     $set: {
//       price: 4000,
//       brand: "dell",
//     }
//   }
// );

// db.product.insertOne({
//     name:"bag",
//     brand:"dell",
//     price:5000,
// })

// db.product.updateMany({
//     name:"bag"
// },{
//     $set:{
//         price:6000
//     }
// })
// db.product.find()
// db.costumer.insertOne({
//     name:"laxman",
//     address:"syanagaun",
//     email:"laxman@gmail.com"
// })
// db.costumer.find()
