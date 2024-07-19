const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb");

// run();
async function run() {
  try {
    const user = await User.create({
      name: "Kyle",
      age: 26,
      email: "test@test.com",
      hobbies: ["Weight lifting", "Bowling"],
      address: {
        street: "Main Street",
      },
    });
    user.name = "Sally";
    await user.save();
    console.log("User saved: " + user);
  } catch (e) {
    console.log(e.message);
  }
}

// run2();
async function run2() {
  try {
    // const user = await User.findById("669a37e8541cf57b05e78411");
    const user = await User.find({ name: "Kyle" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
