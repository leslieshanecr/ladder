const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ladder", function(req, res) {
  res.sendFile(__dirname + "/ladder.html")
});


app.post("/ladder", function(req, res) {
  var height = Number(req.body.height);
  var depth = Number(req.body.depth);

  var result = Math.sqrt(Math.pow(height, 2) + Math.pow(depth, 2));

  res.send("The length of the ladder is " + result.toFixed(0));
})


app.listen(3000, function() {
  console.log("The length of ladder is on localhost:3000/ladder")
});
