const express = require("express");
const routes = express.Router();

const {createPost,deletePost,getAllPosts,getOnePost,editPost} = require("../controller/postsController") 

routes.post('/createPost', createPost)

routes.delete('/deletePost',deletePost)

routes.get('/getAllPosts', getAllPosts)

routes.get('/getOnePost/:name', getOnePost)

routes.put('/editPost', editPost)

module.exports = routes