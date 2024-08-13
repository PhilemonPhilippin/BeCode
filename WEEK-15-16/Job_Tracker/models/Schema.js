const mongoose = require("mongoose");
const argon2 = require("argon2");

const jobofferSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
    maxlength: 150,
  },
  company: {
    type: String,
    required: true,
    maxlength: 150,
  },
  website: {
    type: String,
    required: true,
    maxlength: 150,
  },
  contactName: {
    type: String,
    maxlength: 150,
  },
  contactEmail: {
    type: String,
    maxlength: 150,
    lowercase: true,
  },
  contactPhone: {
    type: String,
    maxlength: 50,
  },
  contactAddress: {
    type: String,
    maxlength: 250,
  },
  origin: {
    type: String,
    required: true,
    maxlength: 100,
  },
  status: {
    type: String,
    required: true,
    maxlength: 50,
  },
  comment: {
    type: String,
    maxlength: 500,
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
    maxlength: 150,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 150,
  },
  github: {
    type: String,
    maxlength: 500,
  },
  profilepicture: {
    type: String,
    maxlength: 500,
  },
  cv: {
    type: String,
    maxlength: 500,
  },
  joboffers: [jobofferSchema],
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await argon2.verify(user.password, password);
    if (auth) {
      return user;
    }

    throw Error("incorrect password");
  }

  throw Error("incorrect email");
};

const Joboffer = mongoose.model("Joboffer", jobofferSchema);
const User = mongoose.model("user", userSchema);

module.exports = { User, Joboffer };
