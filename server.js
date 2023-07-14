const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/dbConfig");
// const cors = require('cors')
require('dotenv').config()
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes")
db.connection();
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/post',postRoutes);
app.use('/auth',userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
