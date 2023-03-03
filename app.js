const mongoose = require("mongoose");
// connect to databse and also create one if doesnt exist
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

mongoose.set('strictQuery', false);

// schema sets the fields for a collection
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry . no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

// make a collection by using model method of mongoose

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);
// insert the new document 

const fruit = new Fruit({
    name: "Peach",
    rating: 8,
    review: "they have a good shape"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Kiwi's are cool"
})


const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Tangy"
})

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Goes with the shakes"
})

// const pineapple = new Fruit({
//     name:"Pineapple",
//     rating:9,
//     review:"Great fruit"
// })
// pineapple.save();

const person = new Person({
    name: "Arav",
    age: 23,
    favouriteFruit: banana
})

// person.save().then(function () {
//     mongoose.connection.close(function () {
//         process.exit(0);
//     })
// });


// to save the document in collection
// fruit.save().then(function () {
//     mongoose.connection.close(function(){
//         process.exit(0);
//     })
// });;


// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close(function(){
//             process.exit(0);
//         });
//         fruits.forEach((fruit)=>{
//             console.log(fruit.name);
//         })
//     }
// })

// Fruit.updateOne({_id:"63f626c19194fe34ce99537f"},{name:"Blue Berry"},function(err,writeOpResult){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(writeOpResult);
//     }
// })

// Fruit.deleteOne({
//     name: "Peach"
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res.deletedCount);
//     }
// })

// Person.deleteMany({name:"John"},function(err,result){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result.deletedCount);
//     }
// })

Person.updateOne({
    _id: "63f63cba08b19e5266c009f3"
}, {
    favouriteFruit: kiwi
}, function (err, writeOpResult) {
    if (err) {
        console.log(err);
    } else {
        console.log(writeOpResult);
    }
})