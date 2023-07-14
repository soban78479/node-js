const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    name: { type: String, default: "abc" },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer,
  });
  
  const postCollection = mongoose.model("posts", postSchema);

  module.exports =   postCollection
  