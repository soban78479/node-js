const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userCollection = require("../model/userModel");

const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    const user = new userCollection({
      email: req.body.email,
      passwordHash: passwordHash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const result = user.save();
    res.status(200).json({
      message: "user is sucessfully resgistered!",
      data: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
};

const logIn = async (req, res) => {
  try {
    const userData = await userCollection.findOne({
      email: req.body.email,
    });

    if (!userData.passwordHash) {
      res.status(500).json({
        message: "email is not found",
        data: [],
      });
    }

    const passwordDecode = await bcrypt.compare(
      req.body.password,
      userData.passwordHash
    );
    if (!passwordDecode) {
      res.status(500).json({
        message: "wrong password",
        data: [],
      });
    }
    const token = await jwt.sign(
      {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      process.env.secretkey
    );

    res.status(200).json({
      message: "user is sucessfully logged in!",
      data: {
        email: req.body.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        token,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
};

module.exports = {
  signUp,
  logIn,
};
