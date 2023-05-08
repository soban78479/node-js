const express = require("express");

var bodyParser = require("body-parser");
const app = express();
const db = require("./config/dbConfig");
const postModel = require("./model/postModel")
db.connection();

const port = 5000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

postModel.postModel();

app.post("/:createPost", async (req, res) => {
  try {
    const post = new postModel(req.body);
    const result = await post.save();
    console.log(result);

    res.status(200).json({
      message: "sucess",
      data: result,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
});

app.get("/:getAllPosts", async (req, res) => {
  try {
    posts = await postModel.find();
    res.status(200).json({
      message: "sucess",
      data: posts,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
});

app.get("/:getOnePost/:name", async (req, res) => {
  try {
    const post = await postModel.find({ name: req.params.name });
    res.status(200).json({
      message: "sucess",
      data: post,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
});

app.delete("/:deletePost/:name", async (req, res) => {
  try {
    const post = await postModel.deleteOne({ name: req.params.name });
    res.status(200).json({
      message: "This post deleted",
      data: post,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: [],
    });
  }
});

app.put("/:editPost/:name", async (req, res) => {
  try {
    const post = await postModel.updateOne(
      { name: req.params.name },
      { $set: { name: req.body.name } }
    );
    res.status(200).json({
      message: "The post updated",
      data: post,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "failed",
      error: error,
      data: post,
    });
  }
});

// app.get("/:id/:name", (req, res) => {
// var posts = [
//   {
//     id: "1",
//     name: "Hanif",
//   },
//   {
//     id: "2",
//     name: "Ammar",
//   },
//   {
//     id: "3",
//     name: "soban",
//   },
// ];
// // Find the post object with the matching ID
// var matchingPost = posts.filter(post => post.id === req.params.id && post.name === req.params.name);

// // Send the matching post object as the response
// res.send(matchingPost);
// // res.send(req.params.oneid);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
