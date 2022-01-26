const express = require("express");
const todoRoutes = require("./routes/todos");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

app.use(todoRoutes);

app.listen(3000);
