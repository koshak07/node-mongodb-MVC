const mongoos = require("mongoose");
const Schema = mongoos.Schema;
const userScheme = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoos.model("User", userScheme);
