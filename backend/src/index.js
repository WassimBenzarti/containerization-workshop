const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Server started on port: ", listener.address().port);
});
