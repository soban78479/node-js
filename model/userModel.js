var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    passwordHash:{
        type:String,
        require:true,
        unique:true
    },
    firstName: String,
    lastName: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
})

const userCollection = mongoose.model('users', userSchema);

module.exports = userCollection;