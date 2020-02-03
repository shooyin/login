mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      minlength: 5
    },
    firstname: {
      type: String,
      require: true,
      minlength: 2
    },
    lastname: {
      type: String,
      require: true,
      minlength: 2
    },
    type: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
