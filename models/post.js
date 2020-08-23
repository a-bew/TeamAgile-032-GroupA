const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    url: {
      type: String
    },
    text: {
      type: String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
