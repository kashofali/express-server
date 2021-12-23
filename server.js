const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const port = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/top20movies.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
      console.log(data);
    }
  });
});

app.post("/", (req, res) => {
    
})

app.listen(port, () => {
  console.log("Server is running on port 8080");
});