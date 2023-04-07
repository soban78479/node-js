const express = require("express");
const app = express();
const port = 5000;

app.get("/:id/:name", (req, res) => {
var posts = [
  {
    id: "1",
    name: "Hanif",
  },
  {
    id: "2",
    name: "Ammar",
  },
  {
    id: "3",
    name: "soban",
  },
];
// Find the post object with the matching ID
var matchingPost = posts.filter(post => post.id === req.params.id && post.name === req.params.name);

// Send the matching post object as the response
res.send(matchingPost);
// res.send(req.params.oneid);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
