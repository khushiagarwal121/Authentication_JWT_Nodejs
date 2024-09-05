// mongoose - MongoDB object data modeling (ODM) library for Node.js
// Object data modeling is a data model that uses object-oriented programming to represent data, attributes, and relationships.
// mongoose provied schema validation, model based structure and data mangaement capablilotes

// since mongodb is schema less, it can result in inconsiitency in data , mongoose adds structure by defining schema
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp", {
      usenewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
