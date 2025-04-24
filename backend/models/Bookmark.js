// // const mongoose = require('mongoose')

// // const bookmarkSchema = new mongoose.Schema({
// //   title: String,
// //   url: String,
// //   tags: [String],
// //   createdAt: {
// //     type: Date,
// //     default: Date.now
// //   }
// // })

// // module.exports = mongoose.model('Bookmark', bookmarkSchema)
// // models/Bookmark.js
// const mongoose = require("mongoose");

// const bookmarkSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   url: { type: String, required: true },
//   // Add these new fields:
//   shareableId: { type: String, unique: true }, // Unique ID for sharing (e.g., "abc123")
//   isPublic: { type: Boolean, default: false }, // Default: private
// }, { timestamps: true });

// module.exports = mongoose.model("Bookmark", bookmarkSchema);

const mongoose = require('mongoose');
const { nanoid } = require('nanoid'); // to generate short ids

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  tags: [String],
  shareableId: {
    type: String,
    default: () => nanoid(8), // generates something like "abc12345"
    unique: true
  }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
