const express = require("express");
const mongoos = require("mongoose");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

mongoos.connect(
  "mongodb://localhost:27017/usersdb",
  { useUnifiedTopology: true },
  function (e) {
    if (e) return console.log(e);
    app.listen(3000, function () {
      console.log("Server expect connection...");
    });
  }
);
