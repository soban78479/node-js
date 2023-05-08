const mongoose = require('mongoose');

async function connection() {
  try {
   const connection =  await mongoose.connect('mongodb+srv://soban:12345@cluster0.0nnxxcs.mongodb.net/test');
     console.log("connection successful");
  } catch (error) {
    console.log(
      "connection error", error
    );
  }

}

module.exports ={
connection
}