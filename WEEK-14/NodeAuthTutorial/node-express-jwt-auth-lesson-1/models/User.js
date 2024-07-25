const mongoose = require("mongoose");
const { isEmail } = require("validator");
const argon2 = require("argon2");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter email."],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter valid email."],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "Minimum password length is 6 characters."],
  },
});

userSchema.pre("save", async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("user created", doc);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
