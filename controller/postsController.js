
const postCollection = require("../model/postModel")

const createPost = async (req, res) => {
    try {
      const post = new postCollection(req.body);
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
  };
  
  const getAllPosts =async (req, res) => {
    try {
        let posts = []
      posts = await postCollection.find();
      res.status(200).json({
        message: "success",
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
  };
  
  const getOnePost = async (req, res) => {
    try {
      const name = req.params.name;
      console.log(name);
      const post = await postCollection.find({name});
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
  };
  
  const deletePost= async (req, res) => {
    try {
        console.log(req.query.name);
      const post = await postCollection.deleteOne({ name: req.query.name});
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
  };
  
  const editPost= async (req, res) => {
    try {
        console.log(req.query.name);
      const post = await postCollection.updateOne(
        { name: req.query.name },
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
  };

  module.exports = {
createPost,
deletePost,
getAllPosts,
getOnePost,
editPost
  }