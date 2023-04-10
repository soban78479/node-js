const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 5000;
var posts=[];
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.post("/:createPost",(req,res)=>{
  console.log(req.body)
var post = req.body;
posts=[...posts ,post];
})

app.get("/:getAllPosts",(req,res)=>{

res.send(posts)
})

app.get("/:getOnePost/:id",(req,res)=>{

  var matchingPost = posts.filter(post1 => post1.id === req.params.id );

// Send the matching post object as the response
res.send(matchingPost);
console.log(req.params.id)
  })
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
