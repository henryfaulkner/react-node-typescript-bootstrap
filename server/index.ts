const request = require('request');
const express = require("express")

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get("/api", (req, res) => {
  res.json({message: "Hello from server!"})
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});